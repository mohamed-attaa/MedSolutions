// pages/Portfolio.jsx
import React, { useState, useEffect } from 'react';
import './Portfolio.css';

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'نظام إدارة المستشفيات الذكي',
      category: 'all',
      categoryName: 'أنظمة طبية',
      description: 'نظام متكامل لإدارة المستشفيات يشمل إدارة المرضى، المواعيد، السجلات الطبية الإلكترونية، والفواتير.',
      fullDescription: 'حل متكامل يستخدم أحدث التقنيات لإدارة المستشفيات بكفاءة عالية مع لوحات تحكم متقدمة وتقارير فورية.',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      technologies: ['React', 'Node.js', 'MongoDB', 'AI'],
      results: 'تحسين كفاءة العمليات بنسبة 70%',
      metrics: ['كفاءة 70%', 'توفير وقت 45%', 'دقة 98%']
    },
    {
      id: 2,
      title: 'تطبيق حجز المواعيد الطبية',
      category: 'all',
      categoryName: 'تطبيقات الموبايل',
      description: 'تطبيق ذكي لحجز المواعيد الطبية مع إشعارات فورية وتذكيرات للمرضى.',
      fullDescription: 'تطبيق مبتكر يسهل عملية حجز المواعيد الطبية مع نظام تذكيرات ذكي وتحليلات للاستخدام.',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      technologies: ['Flutter', 'Firebase', 'Push Notifications'],
      results: 'زيادة الحجوزات بنسبة 150%',
      metrics: ['+150% حجوزات', '4.9 تقييم', '10K+ مستخدم']
    },
    {
      id: 3,
      title: 'منصة الاستشارات عن بعد',
      category: 'all',
      categoryName: 'حلول صحية',
      description: 'منصة متكاملة للاستشارات الطبية عن بعد مع مكالمات فيديو وسجلات طبية مشفرة.',
      fullDescription: 'منصة رائدة تقدم خدمات الاستشارات الطبية عن بعد بجودة عالية وأمان كامل للبيانات.',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      technologies: ['WebRTC', 'Python', 'Django', 'AWS'],
      results: 'خدمة أكثر من 10,000 مريض',
      metrics: ['10K+ مريض', '99.9% وقت تشغيل', 'مشفر بالكامل']
    },
    {
      id: 4,
      title: 'نظام الذكاء الاصطناعي للتشخيص',
      category: 'all',
      categoryName: 'الذكاء الاصطناعي',
      description: 'نظام ذكاء اصطناعي لتحليل الأشعة والصور الطبية للمساعدة في التشخيص المبكر.',
      fullDescription: 'نظام متقدم يستخدم التعلم العميق لتحليل الصور الطبية بدقة عالية.',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      technologies: ['Python', 'TensorFlow', 'Computer Vision'],
      results: 'دقة تشخيص 95%',
      metrics: ['95% دقة', 'تحليل فوري', 'دعم 50+ حالة']
    },
    {
      id: 5,
      title: 'بوابة المرضى الإلكترونية',
      category: 'all',
      categoryName: 'بوابات إلكترونية',
      description: 'بوابة متكاملة للمرضى لمتابعة التقارير الطبية والنتائج والمواعيد.',
      fullDescription: 'بوابة شاملة تمكن المرضى من الوصول لسجلاتهم الطبية بسهولة وأمان.',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      technologies: ['React', 'GraphQL', 'PostgreSQL'],
      results: 'رضا المرضى 98%',
      metrics: ['98% رضا', '500K+ سجل', 'تحديث لحظي']
    },
    {
      id: 6,
      title: 'نظام إدارة الصيدليات',
      category: 'all',
      categoryName: 'إدارة صيدلانية',
      description: 'نظام متكامل لإدارة المخزون والمبيعات والوصفات الطبية في الصيدليات.',
      fullDescription: 'حل ذكي لإدارة الصيدليات مع نظام تنبيهات للمخزون وتقارير تحليلية.',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      technologies: ['Laravel', 'MySQL', 'REST API'],
      results: 'تحسين إدارة المخزون بنسبة 85%',
      metrics: ['85% كفاءة', 'توفير 60%', 'تنبيهات ذكية']
    }
  ];

  const services = [
    { icon: '🏥', title: 'أنظمة المستشفيات', description: 'حلول متكاملة لإدارة المستشفيات والمراكز الطبية', color: '#667eea' },
    { icon: '📱', title: 'تطبيقات صحية', description: 'تطبيقات موبايل ذكية للمرضى والأطباء', color: '#f093fb' },
    { icon: '🤖', title: 'الذكاء الاصطناعي', description: 'حلول AI للتشخيص والتحليل الطبي', color: '#4facfe' },
    { icon: '💻', title: 'منصات إلكترونية', description: 'بوابات إلكترونية متكاملة للخدمات الصحية', color: '#43e97b' },
    { icon: '🔒', title: 'أمن المعلومات', description: 'حماية البيانات الطبية وفق أعلى المعايير', color: '#fa709a' },
    { icon: '☁️', title: 'الحلول السحابية', description: 'بنية تحتية سحابية آمنة وقابلة للتوسع', color: '#a8edea' }
  ];

  // إضافة أيقونة الواتساب (روبوت ذكي)
  const WhatsAppButton = () => {
    const [isHovered, setIsHovered] = useState(false);
    const phoneNumber = "201234567890"; // غير الرقم ده لرقمك
    const message = "السلام عليكم، أحتاج استشارة بخصوص حلول تقنية للقطاع الطبي";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-robot"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="robot-container">
          <div className="robot-icon">
            <div className="robot-head">
              <div className="robot-face">
                <div className="robot-eyes">
                  <div className="robot-eye left-eye"></div>
                  <div className="robot-eye right-eye"></div>
                </div>
                <div className="robot-mouth"></div>
              </div>
              <div className="robot-antenna"></div>
            </div>
            <div className="robot-body">
              <div className="robot-buttons">
                <div className="robot-button"></div>
                <div className="robot-button"></div>
              </div>
            </div>
          </div>
          
          {isHovered && (
            <div className="robot-tooltip">
              <span>💬 تواصل معنا عبر واتساب</span>
              <div className="tooltip-arrow"></div>
            </div>
          )}
          
          <div className="notification-dot"></div>
        </div>
      </a>
    );
  };

  return (
    <>
      <WhatsAppButton />
      <div className="portfolio">
        {/* Hero Section */}
        <section className="hero">
          <div className="hero-bg"></div>
          <div className="container">
            <div className="hero-content">
              <div className="hero-badge">
                <span>✨ تحول رقمي في الرعاية الصحية</span>
              </div>
              <h1 className="hero-title">
                حلول تقنية متطورة
                <span className="gradient-text"> للقطاع الطبي</span>
              </h1>
              <p className="hero-description">
                نقدم أنظمة وتطبيقات ذكية تساعد المؤسسات الصحية على التحول الرقمي بكل احترافية
                باستخدام أحدث تقنيات الذكاء الاصطناعي وتحليل البيانات
              </p>
              <div className="hero-stats">
                <div className="stat">
                  <div className="stat-number">100+</div>
                  <div className="stat-label">مشروع منجز</div>
                </div>
                <div className="stat">
                  <div className="stat-number">80+</div>
                  <div className="stat-label">عميل موثوق</div>
                </div>
                <div className="stat">
                  <div className="stat-number">100%</div>
                  <div className="stat-label">رضا العملاء</div>
                </div>
              </div>
              <div className="hero-buttons">
                <button className="btn-primary" onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}>
                  استعرض أعمالنا
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </button>
                <button className="btn-outline" onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>
                  تواصل معنا
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="services">
          <div className="container">
            <div className="section-header">
              <span className="section-tag">خدماتنا</span>
              <h2 className="section-title">حلولنا <span className="gradient-text">التقنية</span></h2>
              <p className="section-subtitle">نقدم أحدث التقنيات والحلول الذكية للمجال الطبي</p>
            </div>
            <div className="services-grid">
              {services.map((service, index) => (
                <div key={index} className="service-card" style={{ '--service-color': service.color }}>
                  <div className="service-icon">{service.icon}</div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="projects">
          <div className="container">
            <div className="section-header">
              <span className="section-tag">أعمالنا</span>
              <h2 className="section-title">أحدث <span className="gradient-text">المشاريع</span></h2>
              <p className="section-subtitle">نفخر بتقديم حلول تقنية متطورة لعملائنا في القطاع الصحي</p>
            </div>
            
            <div className="projects-grid">
              {projects.map(project => (
                <div key={project.id} className="project-card" onClick={() => setSelectedProject(project)}>
                  <div className="project-image">
                    <img src={project.image} alt={project.title} />
                    <div className="project-overlay">
                      <span className="project-category">{project.categoryName}</span>
                    </div>
                  </div>
                  <div className="project-info">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <div className="project-metrics">
                      {project.metrics.slice(0, 2).map((metric, i) => (
                        <span key={i} className="metric">{metric}</span>
                      ))}
                    </div>
                    <button className="project-btn">عرض التفاصيل</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="contact">
          <div className="container">
            <div className="contact-wrapper">
              <div className="contact-info">
                <div className="contact-badge">تواصل معنا</div>
                <h2>لنبدأ <span className="gradient-text">مشروعك القادم</span></h2>
                <p>فريقنا من الخبراء جاهز لمساعدتك في تحويل فكرتك إلى واقع ملموس</p>
                <div className="info-items">
                  <div className="info-item">
                    <div className="info-icon">📞</div>
                    <div>
                      <h4>اتصل بنا</h4>
                      <p>+966 12 345 6789</p>
                    </div>
                  </div>
                  <div className="info-item">
                    <div className="info-icon">✉️</div>
                    <div>
                      <h4>البريد الإلكتروني</h4>
                      <p>info@digitalhealth.com</p>
                    </div>
                  </div>
                  <div className="info-item">
                    <div className="info-icon">📍</div>
                    <div>
                      <h4>موقعنا</h4>
                      <p>الرياض، المملكة العربية السعودية</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <form className="contact-form">
                <div className="form-group">
                  <input type="text" placeholder="الاسم الكامل" required />
                </div>
                <div className="form-group">
                  <input type="email" placeholder="البريد الإلكتروني" required />
                </div>
                <div className="form-group">
                  <input type="tel" placeholder="رقم الهاتف" />
                </div>
                <div className="form-group">
                  <textarea rows="4" placeholder="نوع الخدمة المطلوبة"></textarea>
                </div>
                <button type="submit" className="submit-btn">إرسال الطلب</button>
              </form>
            </div>
          </div>
        </section>

        {/* Modal */}
        {selectedProject && (
          <div className="modal" onClick={() => setSelectedProject(null)}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
              <button className="modal-close" onClick={() => setSelectedProject(null)}>×</button>
              <div className="modal-image">
                <img src={selectedProject.image} alt={selectedProject.title} />
              </div>
              <div className="modal-body">
                <span className="modal-category">{selectedProject.categoryName}</span>
                <h3>{selectedProject.title}</h3>
                <p>{selectedProject.fullDescription}</p>
                <div className="modal-tech">
                  <h4>التقنيات المستخدمة:</h4>
                  <div className="tech-tags">
                    {selectedProject.technologies.map((tech, i) => (
                      <span key={i} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
                <div className="modal-results">
                  <strong>النتائج:</strong> {selectedProject.results}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Portfolio;