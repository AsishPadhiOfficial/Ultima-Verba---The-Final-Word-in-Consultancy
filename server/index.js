import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import fs from 'fs';
import path from 'path';

const app = express();
const PORT = process.env.PORT || 3001;

// Enhanced CORS configuration
app.use(cors({
  origin: ['http://localhost:5173', 'http://localhost:3000', 'http://127.0.0.1:5173'],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

// Add request logging
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.path}`);
  next();
});

// Email configuration
const createTransporter = () => {
  const emailUser = process.env.EMAIL_USER;
  const emailPass = process.env.EMAIL_PASS;
  
  if (!emailUser || !emailPass) {
    console.log('⚠️  Email credentials not configured. Emails will not be sent.');
    return null;
  }

  return nodemailer.createTransporter({
    service: 'gmail',
    auth: {
      user: emailUser,
      pass: emailPass
    }
  });
};

// Ensure data directory exists
const dataDir = path.join(process.cwd(), 'data');
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
  console.log('📁 Created data directory');
}

// Initialize submissions file
const submissionsFile = path.join(dataDir, 'submissions.json');
if (!fs.existsSync(submissionsFile)) {
  fs.writeFileSync(submissionsFile, JSON.stringify([], null, 2));
  console.log('📄 Created submissions.json file');
}

// Helper function to save submission to JSON
const saveSubmissionToJSON = (submissionData) => {
  try {
    const existingData = JSON.parse(fs.readFileSync(submissionsFile, 'utf8'));
    existingData.push(submissionData);
    fs.writeFileSync(submissionsFile, JSON.stringify(existingData, null, 2));
    console.log('✅ Submission saved to JSON file');
    return true;
  } catch (error) {
    console.error('❌ Error saving to JSON:', error);
    return false;
  }
};

// Auto-response email template
const createAutoResponseEmail = (name, consultancyType) => {
  return {
    subject: 'Thank you for contacting Ultima Verba - We\'ve received your consultation request',
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: 'Arial', sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #1e293b, #0f172a); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
          .content { background: #f8fafc; padding: 30px; border-radius: 0 0 10px 10px; }
          .highlight { color: #f59e0b; font-weight: bold; }
          .footer { text-align: center; margin-top: 20px; color: #64748b; font-size: 14px; }
          .logo { font-size: 24px; font-weight: bold; margin-bottom: 10px; }
          .tagline { font-size: 14px; opacity: 0.9; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <div class="logo">👑 Ultima Verba</div>
            <div class="tagline">The Final Word in Consultancy</div>
          </div>
          <div class="content">
            <h2>Thank you, ${name}!</h2>
            <p>We've successfully received your consultation request for <span class="highlight">${consultancyType}</span>.</p>
            
            <p><strong>What happens next?</strong></p>
            <ul>
              <li>Our expert team will review your request within 24 hours</li>
              <li>We'll prepare a tailored consultation strategy for your needs</li>
              <li>You'll receive a detailed response with next steps</li>
              <li>We'll schedule a consultation call at your convenience</li>
            </ul>
            
            <p>In the meantime, feel free to explore our case studies and learn more about our approach to delivering exceptional results.</p>
            
            <p>We're excited to help you achieve your goals!</p>
            
            <p><strong>Best regards,</strong><br>
            The Ultima Verba Team</p>
          </div>
          <div class="footer">
            <p>Ultima Verba Consultancy | 123 Excellence Avenue, Business District, NY 10001</p>
            <p>📧 hello@ultimaverba.com | 📞 +1 (555) 123-4567</p>
          </div>
        </div>
      </body>
      </html>
    `
  };
};

// Admin notification email template
const createAdminNotificationEmail = (formData) => {
  return {
    subject: `🚨 New Consultation Request: ${formData.subject}`,
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: 'Arial', sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 700px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #dc2626, #991b1b); color: white; padding: 20px; text-align: center; border-radius: 10px 10px 0 0; }
          .content { background: #fff; padding: 30px; border: 1px solid #e5e7eb; border-radius: 0 0 10px 10px; }
          .field { margin-bottom: 20px; padding: 15px; background: #f9fafb; border-left: 4px solid #f59e0b; }
          .field-label { font-weight: bold; color: #374151; margin-bottom: 5px; }
          .field-value { color: #1f2937; }
          .priority { background: #fef3c7; border-left-color: #f59e0b; }
          .timestamp { text-align: center; color: #6b7280; font-size: 14px; margin-top: 20px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h2>🚨 New Consultation Request</h2>
            <p>Ultima Verba Admin Dashboard</p>
          </div>
          <div class="content">
            <div class="field priority">
              <div class="field-label">⚡ Priority Level</div>
              <div class="field-value">HIGH - New consultation request requires immediate attention</div>
            </div>
            
            <div class="field">
              <div class="field-label">👤 Client Name</div>
              <div class="field-value">${formData.name}</div>
            </div>
            
            <div class="field">
              <div class="field-label">📧 Email Address</div>
              <div class="field-value">${formData.email}</div>
            </div>
            
            <div class="field">
              <div class="field-label">🏢 Consultancy Type</div>
              <div class="field-value">${formData.consultancyType}</div>
            </div>
            
            <div class="field">
              <div class="field-label">📋 Subject</div>
              <div class="field-value">${formData.subject}</div>
            </div>
            
            <div class="field">
              <div class="field-label">📝 Problem Description</div>
              <div class="field-value">${formData.problem}</div>
            </div>
            
            <div class="timestamp">
              <p>⏰ Received at: ${new Date().toLocaleString()}</p>
              <p>🔗 View all submissions in your admin dashboard</p>
            </div>
          </div>
        </div>
      </body>
      </html>
    `
  };
};

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  console.log('📝 Received form submission:', req.body);
  
  try {
    const { name, email, consultancyType, subject, problem } = req.body;

    // Enhanced validation
    if (!name || !email || !consultancyType || !subject || !problem) {
      console.log('❌ Validation failed: Missing required fields');
      return res.status(400).json({ 
        success: false, 
        message: 'All fields are required. Please fill out the complete form.' 
      });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      console.log('❌ Validation failed: Invalid email format');
      return res.status(400).json({ 
        success: false, 
        message: 'Please enter a valid email address.' 
      });
    }

    // Create submission data with enhanced metadata
    const submissionData = {
      id: Date.now(),
      timestamp: new Date().toISOString(),
      name: name.trim(),
      email: email.trim().toLowerCase(),
      consultancyType,
      subject: subject.trim(),
      problem: problem.trim(),
      metadata: {
        userAgent: req.headers['user-agent'],
        ip: req.ip || req.connection.remoteAddress,
        submissionDate: new Date().toLocaleDateString(),
        submissionTime: new Date().toLocaleTimeString()
      }
    };

    // Save to JSON file
    const saved = saveSubmissionToJSON(submissionData);
    if (!saved) {
      console.log('⚠️  Failed to save to JSON, but continuing...');
    }

    // Send emails (if configured)
    const transporter = createTransporter();
    if (transporter) {
      try {
        // Send auto-response to user
        const autoResponse = createAutoResponseEmail(name, consultancyType);
        await transporter.sendMail({
          from: `"Ultima Verba" <${process.env.EMAIL_USER}>`,
          to: email,
          subject: autoResponse.subject,
          html: autoResponse.html
        });
        
        // Send notification to admin
        const adminNotification = createAdminNotificationEmail(submissionData);
        await transporter.sendMail({
          from: `"Ultima Verba System" <${process.env.EMAIL_USER}>`,
          to: process.env.ADMIN_EMAIL || process.env.EMAIL_USER,
          subject: adminNotification.subject,
          html: adminNotification.html
        });
        
        console.log('✅ Emails sent successfully');
      } catch (emailError) {
        console.error('❌ Email sending failed:', emailError);
        // Don't fail the request if email fails
      }
    }

    console.log('🎉 New consultation request processed successfully:', {
      name,
      email,
      consultancyType,
      subject: subject.substring(0, 50) + '...'
    });

    res.json({ 
      success: true, 
      message: 'Consultation request submitted successfully! Check your email for confirmation.',
      submissionId: submissionData.id
    });

  } catch (error) {
    console.error('❌ Error processing contact form:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Server error occurred. Please try again or contact us directly at hello@ultimaverba.com' 
    });
  }
});

// Get all submissions endpoint (for admin)
app.get('/api/submissions', (req, res) => {
  try {
    const submissions = JSON.parse(fs.readFileSync(submissionsFile, 'utf8'));
    res.json({ 
      success: true, 
      count: submissions.length,
      submissions: submissions.reverse() // Most recent first
    });
  } catch (error) {
    console.error('Error reading submissions:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Error retrieving submissions' 
    });
  }
});

// Health check endpoint with enhanced info
app.get('/api/health', (req, res) => {
  try {
    const submissions = JSON.parse(fs.readFileSync(submissionsFile, 'utf8'));
    res.json({ 
      status: 'OK', 
      timestamp: new Date().toISOString(),
      uptime: process.uptime(),
      totalSubmissions: submissions.length,
      emailConfigured: !!(process.env.EMAIL_USER && process.env.EMAIL_PASS),
      version: '2.0.0'
    });
  } catch (error) {
    res.json({ 
      status: 'OK', 
      timestamp: new Date().toISOString(),
      uptime: process.uptime(),
      totalSubmissions: 0,
      emailConfigured: !!(process.env.EMAIL_USER && process.env.EMAIL_PASS),
      version: '2.0.0',
      note: 'Submissions file not found, will be created on first submission'
    });
  }
});

// Error handling middleware
app.use((error, req, res, next) => {
  console.error('Server error:', error);
  res.status(500).json({
    success: false,
    message: 'Internal server error'
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: 'Endpoint not found'
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Ultima Verba server running on port ${PORT}`);
  console.log(`📧 Email configuration: ${process.env.EMAIL_USER ? '✅ Configured' : '❌ Not configured'}`);
  console.log(`📁 Data directory: ${dataDir}`);
  console.log(`📊 Submissions file: ${submissionsFile}`);
  console.log(`🌐 CORS enabled for: http://localhost:5173, http://localhost:3000, http://127.0.0.1:5173`);
  console.log(`🔗 Health check: http://localhost:${PORT}/api/health`);
});