import React, { useState } from 'react';
import { 
  FaWhatsapp, 
  FaPhone, 
  FaEnvelope, 
  FaPaperPlane, 
  FaMapMarkerAlt, 
  FaClock, 
  FaCheckCircle,
  FaFacebook, 
  FaInstagram, 
  FaLinkedin,
  FaRobot
} from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [chatMessage, setChatMessage] = useState('');
  const [chatResponse, setChatResponse] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 3000);
    }, 1500);
  };

  const handleChatSubmit = (e) => {
    e.preventDefault();
    if (!chatMessage.trim()) return;
    
    let response = '';
    const msg = chatMessage.toLowerCase();
    
    if (msg.includes('موعد') || msg.includes('حجز')) {
      response = '📅 يمكنك حجز موعد عبر الضغط على أيقونة الواتساب أو الاتصال بنا على الرقم الموحد.';
    } else if (msg.includes('سيستم') || msg.includes('نظام') || msg.includes('ادارة')) {
      response = '💻 نظام MedSolutions يدعم إدارة العيادات والمواعيد والفواتير بكل سهولة.';
    } else if (msg.includes('تسويق') || msg.includes('عروض') || msg.includes('اعلانات')) {
      response = '📢 لدينا خطط تسويقية متكاملة للمراكز الطبية. تواصل مع فريق المبيعات لمزيد من التفاصيل.';
    } else if (msg.includes('دفع') || msg.includes('تقسيط') || msg.includes('سعر')) {
      response = '💰 نوفر خطط دفع مرنة وتقسيط ميسر. تواصل مع خدمة العملاء لمعرفة التفاصيل.';
    } else if (msg.includes('موقع') || msg.includes('تصميم')) {
      response = '🌐 نقدم تصميم مواقع احترافية للعيادات والمستشفيات مع أحدث التقنيات.';
    } else if (msg.includes('تطبيق') || msg.includes('موبايل')) {
      response = '📱 لدينا تطبيقات ذكية للمرضى والأطباء لتسهيل التواصل والمتابعة.';
    } else {
      response = '🤖 شكراً لتواصلك! الرجاء توضيح سؤالك أكثر أو التواصل عبر واتساب للحصول على رد سريع.';
    }
    
    setChatResponse(response);
    setChatMessage('');
    
    setTimeout(() => {
      setChatResponse('');
    }, 8000);
  };

  const contactInfo = [
    {
      icon: <FaPhone />,
      title: "اتصل بنا",
      info: "+20 123 456 7890",
      link: "tel:+201234567890"
    },
    {
      icon: <FaWhatsapp />,
      title: "واتساب",
      info: "+20 123 456 7890",
      link: "https://wa.me/201234567890"
    },
    {
      icon: <FaEnvelope />,
      title: "البريد الإلكتروني",
      info: "info@medsolutions.com",
      link: "mailto:info@medsolutions.com"
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "موقعنا",
      info: "مصر، القاهرة",
      link: "#"
    }
  ];

  return (
    <div style={{ direction: 'rtl' }}>
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .contact-page {
          min-height: 100vh;
          background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
          padding: 2rem 1rem;
          font-family: 'Segoe UI', 'Tajawal', system-ui, sans-serif;
        }

        /* Fixed WhatsApp Button */
        .whatsapp-fixed {
          position: fixed;
          bottom: 25px;
          right: 25px;
          z-index: 1000;
          background: linear-gradient(135deg, #3b82f6, #2563eb);
          color: white;
          width: 55px;
          height: 55px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.8rem;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(59, 130, 246, 0.4);
          animation: pulse 2s infinite;
          text-decoration: none;
        }

        .whatsapp-fixed:hover {
          transform: scale(1.1);
          box-shadow: 0 6px 20px rgba(59, 130, 246, 0.6);
        }

        @keyframes pulse {
          0% { box-shadow: 0 0 0 0 rgba(59, 130, 246, 0.7); }
          70% { box-shadow: 0 0 0 12px rgba(59, 130, 246, 0); }
          100% { box-shadow: 0 0 0 0 rgba(59, 130, 246, 0); }
        }

        .contact-container {
          max-width: 1200px;
          margin: 0 auto;
          animation: fadeInUp 0.5s ease;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Header */
        .contact-header {
          text-align: center;
          margin-bottom: 2rem;
        }

        .contact-header h1 {
          font-size: 2rem;
          font-weight: 800;
          background: linear-gradient(135deg, #60a5fa, #3b82f6);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          margin-bottom: 0.5rem;
        }

        .contact-header p {
          font-size: 0.9rem;
          color: #94a3b8;
          max-width: 500px;
          margin: 0 auto;
        }

        /* Grid */
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
          margin-bottom: 2rem;
        }

        @media (max-width: 968px) {
          .contact-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
        }

        /* Cards */
        .contact-info-section,
        .contact-form-section,
        .chatbot-section {
          background: linear-gradient(135deg, rgba(59,130,246,0.1), rgba(6,182,212,0.1));
          backdrop-filter: blur(10px);
          border: 1px solid rgba(59,130,246,0.2);
          border-radius: 1rem;
          padding: 1.2rem;
        }

        .section-title {
          font-size: 1.2rem;
          font-weight: 700;
          color: white;
          margin-bottom: 1rem;
          text-align: center;
        }

        /* Info Cards */
        .info-cards {
          display: flex;
          flex-direction: column;
          gap: 0.8rem;
        }

        .info-card {
          display: flex;
          align-items: center;
          gap: 0.8rem;
          padding: 0.8rem;
          background: rgba(255,255,255,0.05);
          border-radius: 0.8rem;
          transition: all 0.3s ease;
          text-decoration: none;
        }

        .info-card:hover {
          transform: translateX(-3px);
          background: rgba(59,130,246,0.2);
        }

        .info-icon {
          width: 40px;
          height: 40px;
          background: linear-gradient(135deg, #3b82f6, #2563eb);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.1rem;
          color: white;
        }

        .info-content h3 {
          font-size: 0.75rem;
          font-weight: 600;
          color: #94a3b8;
          margin-bottom: 0.2rem;
        }

        .info-content p {
          font-size: 0.85rem;
          font-weight: 600;
          color: white;
        }

        /* Form */
        .form-group {
          margin-bottom: 0.8rem;
        }

        .form-group input,
        .form-group textarea,
        .form-group select {
          width: 100%;
          padding: 0.7rem;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(59,130,246,0.3);
          border-radius: 0.6rem;
          color: white;
          font-size: 0.85rem;
          transition: all 0.3s ease;
        }

        .form-group input:focus,
        .form-group textarea:focus,
        .form-group select:focus {
          outline: none;
          border-color: #3b82f6;
          background: rgba(59,130,246,0.1);
        }

        .form-group textarea {
          min-height: 80px;
          resize: vertical;
        }

        .form-group select option {
          background: #1e293b;
          color: white;
        }

        .submit-btn {
          width: 100%;
          background: linear-gradient(135deg, #3b82f6, #2563eb);
          border: none;
          padding: 0.7rem;
          border-radius: 0.6rem;
          color: white;
          font-size: 0.85rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.4rem;
        }

        .submit-btn:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 4px 15px rgba(59,130,246,0.4);
        }

        .submit-btn:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        /* Chatbot */
        .chatbot-card {
          background: rgba(255,255,255,0.05);
          border-radius: 0.8rem;
          padding: 1rem;
        }

        .chatbot-header {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          margin-bottom: 0.8rem;
        }

        .chatbot-header h3 {
          font-size: 1rem;
          font-weight: 700;
          color: white;
          margin: 0;
        }

        .chatbot-card p {
          color: #94a3b8;
          font-size: 0.75rem;
          margin-bottom: 0.8rem;
        }

        .chat-response {
          background: rgba(59,130,246,0.2);
          border-radius: 0.8rem;
          padding: 0.7rem;
          margin-bottom: 0.8rem;
          display: flex;
          gap: 0.6rem;
          align-items: flex-start;
          border-right: 3px solid #3b82f6;
          animation: slideIn 0.3s ease;
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-10px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .chat-response p {
          margin: 0;
          flex: 1;
          font-size: 0.75rem;
          color: white;
        }

        .chat-form {
          display: flex;
          gap: 0.6rem;
        }

        .chat-input {
          flex: 1;
          padding: 0.7rem;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(59,130,246,0.3);
          border-radius: 0.6rem;
          color: white;
          font-size: 0.8rem;
        }

        .chat-input:focus {
          outline: none;
          border-color: #3b82f6;
        }

        .chat-send {
          background: linear-gradient(135deg, #3b82f6, #2563eb);
          border: none;
          padding: 0.7rem 1rem;
          border-radius: 0.6rem;
          color: white;
          font-size: 0.75rem;
          font-weight: 600;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 0.3rem;
          transition: all 0.3s;
        }

        .chat-send:hover {
          transform: translateY(-2px);
        }

        /* Success Message */
        .success-message {
          background: rgba(16, 185, 129, 0.2);
          border: 1px solid #10b981;
          border-radius: 0.6rem;
          padding: 0.7rem;
          margin-bottom: 1rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: #10b981;
          font-size: 0.8rem;
        }

        /* Social Links */
        .social-links {
          display: flex;
          justify-content: center;
          gap: 0.8rem;
          margin-top: 1rem;
        }

        .social-link {
          width: 35px;
          height: 35px;
          background: rgba(59,130,246,0.2);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 1rem;
          transition: all 0.3s ease;
          text-decoration: none;
        }

        .social-link:hover {
          background: #3b82f6;
          transform: translateY(-2px);
        }

        /* Map Section */
        .map-section {
          background: linear-gradient(135deg, rgba(59,130,246,0.1), rgba(6,182,212,0.1));
          backdrop-filter: blur(10px);
          border: 1px solid rgba(59,130,246,0.2);
          border-radius: 1rem;
          padding: 1rem;
          margin-top: 1.5rem;
        }

        .map-placeholder {
          background: linear-gradient(135deg, #1e293b, #0f172a);
          border-radius: 0.8rem;
          padding: 1.5rem;
          text-align: center;
        }

        .map-placeholder p {
          color: #94a3b8;
          font-size: 0.8rem;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .whatsapp-fixed {
            width: 45px;
            height: 45px;
            font-size: 1.4rem;
            bottom: 20px;
            right: 20px;
          }
          
          .contact-header h1 {
            font-size: 1.6rem;
          }
        }
      `}</style>

      {/* Fixed WhatsApp Button */}
<a 
  href="https://wa.me/201234567890?text=%D8%A7%D9%84%D8%B3%D9%84%D8%A7%D9%85%20%D8%B9%D9%84%D9%8A%D9%83%D9%85%20%D8%A3%D8%AD%D8%AA%D8%A7%D8%AC%20%D8%A7%D8%B3%D8%AA%D8%B4%D8%A7%D8%B1%D8%A9"
  className="whatsapp-fixed"
  target="_blank"
  rel="noopener noreferrer"
>
  <FaWhatsapp />
</a>  {/* ✅ اقفل هنا */}

      <div className="contact-page">
        <div className="contact-container">
          {/* Header */}
          <div className="contact-header">
            <h1>تواصل معنا</h1>
            <p>نسعد بتواصلك معنا! فريقنا جاهز للرد على استفساراتك</p>
          </div>

          {/* Contact Grid */}
          <div className="contact-grid">
            {/* Contact Info Section */}
            <div className="contact-info-section">
              <h2 className="section-title">معلومات التواصل</h2>
              <div className="info-cards">
                {contactInfo.map((item, index) => (
                  <a
                    key={index}
                    href={item.link}
                    className="info-card"
                    target={item.link.startsWith('http') ? "_blank" : "_self"}
                    rel="noopener noreferrer"
                  >
                    <div className="info-icon">{item.icon}</div>
                    <div className="info-content">
                      <h3>{item.title}</h3>
                      <p>{item.info}</p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Working Hours */}
              <div className="info-card" style={{ marginTop: '0.5rem', cursor: 'default' }}>
                <div className="info-icon"><FaClock /></div>
                <div className="info-content">
                  <h3>ساعات العمل</h3>
                  <p>السبت - الخميس: 9ص - 9م</p>
                </div>
              </div>

  <div className="social-links">
  <a href="#" className="social-link"><FaFacebook /></a>
  <a href="#" className="social-link"><FaInstagram /></a>
  <a href="#" className="social-link"><FaLinkedin /></a>
  <a href="#" className="social-link"><FaWhatsapp /></a>
</div>
            </div>

            {/* Contact Form */}
            <div className="contact-form-section">
              <h2 className="section-title">أرسل لنا رسالة</h2>
              {submitSuccess && (
                <div className="success-message">
                  <FaCheckCircle />
                  <span>تم الإرسال بنجاح!</span>
                </div>
              )}
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <input type="text" name="name" placeholder="الاسم الكامل" value={formData.name} onChange={handleChange} required />
                </div>
                <div className="form-group">
                  <input type="email" name="email" placeholder="البريد الإلكتروني" value={formData.email} onChange={handleChange} required />
                </div>
                <div className="form-group">
                  <input type="tel" name="phone" placeholder="رقم الهاتف" value={formData.phone} onChange={handleChange} required />
                </div>
                <div className="form-group">
                  <select name="subject" value={formData.subject} onChange={handleChange} required>
                    <option value="">اختر الموضوع</option>
                    <option value="استفسار">استفسار عام</option>
                    <option value="خدمة">طلب خدمة</option>
                    <option value="شكوى">شكوى أو اقتراح</option>
                  </select>
                </div>
                <div className="form-group">
                  <textarea name="message" placeholder="رسالتك..." value={formData.message} onChange={handleChange} required></textarea>
                </div>
                <button type="submit" className="submit-btn" disabled={isSubmitting}>
                  {isSubmitting ? 'جاري الإرسال...' : <>إرسال <FaPaperPlane /></>}
                </button>
              </form>
            </div>
          </div>

          {/* Chatbot Section */}
          <div className="chatbot-section" style={{ marginBottom: '1.5rem' }}>
            <div className="chatbot-card">
              <div className="chatbot-header">
                <FaRobot style={{ fontSize: '1.5rem', color: '#3b82f6' }} />
                <h3>شات بوت MedSolutions الذكي</h3>
              </div>
              <p>اسألني أي حاجة عن خدماتنا الطبية أو خطط الدفع</p>
              
              {chatResponse && (
                <div className="chat-response">
                  <FaRobot style={{ fontSize: '0.9rem' }} />
                  <p>{chatResponse}</p>
                </div>
              )}

              <form onSubmit={handleChatSubmit} className="chat-form">
                <input
                  type="text"
                  value={chatMessage}
                  onChange={(e) => setChatMessage(e.target.value)}
                  placeholder="اكتب سؤالك هنا..."
                  className="chat-input"
                />
                <button type="submit" className="chat-send">
                  <FaPaperPlane /> إرسال
                </button>
              </form>
            </div>
          </div>

          {/* Map Section */}
          <div className="map-section">
            <div className="map-placeholder">
              <p>📍 القاهرة، مصر - برج النيل، الدور 15</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;