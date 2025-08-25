import React, { useState } from 'react';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';

interface Message {
  id: number;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! I'm your Ultima Verba assistant. How can I help you today?",
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState('');

  const quickReplies = [
    "Tell me about your services",
    "How can I get started?",
    "What are your rates?",
    "Schedule a consultation"
  ];

  const botResponses: { [key: string]: string } = {
    "services": "We offer four main services: Business Strategy, Legal Advisory, Academic Support, and Tech Consulting. Each service is tailored to meet your specific needs.",
    "started": "Getting started is easy! Simply fill out our consultation form, and we'll get back to you within 24 hours to discuss your needs.",
    "rates": "Our rates vary depending on the service and complexity of your project. We offer competitive pricing and can provide a custom quote after understanding your requirements.",
    "consultation": "I'd be happy to help you schedule a consultation! Please use our contact form or call us at +1 (555) 123-4567.",
    "default": "Thank you for your question! For detailed information, please contact us through our consultation form or call us directly. Our experts are ready to help!"
  };

  const handleSendMessage = () => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: inputText,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);

    // Simple bot response logic
    setTimeout(() => {
      const lowerInput = inputText.toLowerCase();
      let response = botResponses.default;

      if (lowerInput.includes('service')) response = botResponses.services;
      else if (lowerInput.includes('start') || lowerInput.includes('begin')) response = botResponses.started;
      else if (lowerInput.includes('rate') || lowerInput.includes('price') || lowerInput.includes('cost')) response = botResponses.rates;
      else if (lowerInput.includes('consultation') || lowerInput.includes('schedule')) response = botResponses.consultation;

      const botMessage: Message = {
        id: messages.length + 2,
        text: response,
        isBot: true,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);
    }, 1000);

    setInputText('');
  };

  const handleQuickReply = (reply: string) => {
    setInputText(reply);
  };

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-4 sm:bottom-6 right-4 sm:right-6 bg-gradient-to-r from-accent-500 to-accent-600 text-white p-3 sm:p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 z-40 ${isOpen ? 'hidden' : 'block'}`}
      >
        <MessageCircle className="h-5 w-5 sm:h-6 sm:w-6" />
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 w-80 sm:w-96 h-96 sm:h-[500px] bg-white rounded-2xl shadow-2xl border border-primary-200 z-50 flex flex-col animate-scale-in">
          {/* Header */}
          <div className="bg-gradient-to-r from-primary-800 to-primary-900 text-white p-3 sm:p-4 rounded-t-2xl flex items-center justify-between">
            <div className="flex items-center space-x-2 sm:space-x-3">
              <div className="bg-accent-500 p-1.5 sm:p-2 rounded-full">
                <Bot className="h-3 w-3 sm:h-4 sm:w-4" />
              </div>
              <div>
                <h3 className="font-semibold text-sm sm:text-base">Ultima Verba Assistant</h3>
                <p className="text-xs opacity-90">Online now</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-accent-300 transition-colors p-1"
            >
              <X className="h-4 w-4 sm:h-5 sm:w-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-3 sm:p-4 space-y-3 sm:space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
              >
                <div className={`flex items-start space-x-2 max-w-[80%] ${message.isBot ? '' : 'flex-row-reverse space-x-reverse'}`}>
                  <div className={`p-1.5 sm:p-2 rounded-full ${message.isBot ? 'bg-primary-100' : 'bg-accent-100'}`}>
                    {message.isBot ? (
                      <Bot className="h-3 w-3 sm:h-4 sm:w-4 text-primary-600" />
                    ) : (
                      <User className="h-3 w-3 sm:h-4 sm:w-4 text-accent-600" />
                    )}
                  </div>
                  <div
                    className={`p-2 sm:p-3 rounded-2xl ${
                      message.isBot
                        ? 'bg-primary-100 text-primary-800'
                        : 'bg-accent-500 text-white'
                    }`}
                  >
                    <p className="text-xs sm:text-sm">{message.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Replies */}
          <div className="p-3 sm:p-4 border-t border-primary-100">
            <div className="flex flex-wrap gap-1 sm:gap-2 mb-2 sm:mb-3">
              {quickReplies.map((reply, index) => (
                <button
                  key={index}
                  onClick={() => handleQuickReply(reply)}
                  className="text-xs bg-primary-50 text-primary-700 px-2 sm:px-3 py-1 rounded-full hover:bg-primary-100 transition-colors"
                >
                  {reply}
                </button>
              ))}
            </div>

            {/* Input */}
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Type your message..."
                className="flex-1 px-2 sm:px-3 py-1.5 sm:py-2 border border-primary-200 rounded-xl focus:ring-2 focus:ring-accent-500 focus:border-accent-500 outline-none text-xs sm:text-sm"
              />
              <button
                onClick={handleSendMessage}
                className="bg-accent-500 text-white p-1.5 sm:p-2 rounded-xl hover:bg-accent-600 transition-colors"
              >
                <Send className="h-3 w-3 sm:h-4 sm:w-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBot;