// Home.jsx
import React, { useEffect, useState } from "react";
import { 
  FaBullhorn, FaClipboardList, FaLaptopCode, FaStethoscope, 
  FaCalendarCheck, FaChartLine, FaCogs, FaHeadset, FaPaintBrush,
  FaExternalLinkAlt, FaHospital, FaChartBar,
  FaDatabase, FaWhatsapp
} from "react-icons/fa";

const Home = () => {
  // Hero Slider Images
  const images = [
    "https://images.unsplash.com/photo-1579154204601-01588f351e67?q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1600&auto=format&fit=crop",
  ];
  
  const [current, setCurrent] = useState(0);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Services Data
  const services = [
    { id: 1, icon: <FaBullhorn />, title: "تسويق رقمي طبي", description: "حملات إعلانية للوصول لمرضى جدد", color: "#3b82f6" },
    { id: 2, icon: <FaClipboardList />, title: "حلول إدارة الحجوزات", description: "إدارة الحجوزات والمرضى بسهولة", color: "#06b6d4" },
    { id: 3, icon: <FaLaptopCode />, title: "تطوير مواقع احترافية", description: "تصميم وبرمجة مواقع لعياداتك", color: "#8b5cf6" },
    { id: 4, icon: <FaStethoscope />, title: "استشارات طبية", description: "منصة متكاملة للاستشارات بالفيديو", color: "#ec489a" },
    { id: 5, icon: <FaCalendarCheck />, title: "نظام مواعيد ذكي", description: "جدولة ذكية مع تنبيهات آلية", color: "#f59e0b" },
    { id: 6, icon: <FaChartLine />, title: "تحليلات طبية متقدمة", description: "ذكاء اصطناعي لتحسين الأداء", color: "#10b981" }
  ];

  // Why Choose Us Data
  const whyChooseUs = [
    { id: 1, icon: <FaCogs />, title: "حلول مخصصة", description: "نقدم حلول حسب متطلباتك", color: "#3b82f6" },
    { id: 2, icon: <FaHeadset />, title: "دعم فني مستمر", description: "فريق دعم جاهز 24/7", color: "#06b6d4" },
    { id: 3, icon: <FaPaintBrush />, title: "تصميم احترافي", description: "تصميم سريع وجذاب", color: "#8b5cf6" },
    { id: 4, icon: <FaStethoscope />, title: "خبرة طبية", description: "خبرة واسعة في المجال الطبي", color: "#ec489a" }
  ];

  // Portfolio Data with Appropriate Images
  const projects = [
    {
      id: 1, 
      title: "نظام تحليلات البيانات", 
      category: "تحليلات",
      description: "لوحة تحكم متقدمة لتحليل أداء العيادات والمستشفيات مع تقارير لحظية",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600&auto=format&fit=crop",
      icon: <FaChartBar />, 
      tags: [ "البرمجه والتطوير"]
    },
    {
      id: 2, 
      title: "بوابة التقارير الطبية", 
      category: "تقارير",
      description: "نظام متكامل لإدارة وتوليد التقارير الطبية والإحصاءات الدقيقة",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1600&auto=format&fit=crop",
      icon: <FaDatabase />, 
      tags: [" البرمجه والتطوير "]
    },
    {
      id: 3, 
      title: "نظام إدارة المحتوى", 
      category: "مواقع",
      description: "موقع إلكتروني متكامل لإدارة المحتوى الطبي والخدمات",
      image: "https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=1600&auto=format&fit=crop",
      icon: <FaLaptopCode />, 
            tags: [" البرمجه والتطوير "]

    },
    {
      id: 4, 
      title: "لوحة تحكم المستشفى", 
      category: "لوحات تحكم",
      description: "نظام إدارة متكامل مع لوحات تحكم تفاعلية وتقارير فورية",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600&auto=format&fit=crop",
      icon: <FaChartBar />, 
            tags: [" البرمجه والتطوير "]

    },
    {
      id: 5, 
      title: "موقع عيادة متخصصة", 
      category: "مواقع",
      description: "موقع احترافي لعيادة طبية مع نظام حجز إلكتروني",
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1600&auto=format&fit=crop",
      icon: <FaHospital />, 
            tags: [" البرمجه والتطوير "]

    },
    {
      id: 6, 
      title: "نظام تحليل الأداء", 
      category: "تحليلات",
      description: "تحليل أداء الأطباء والمرضى مع تقارير متقدمة",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600&auto=format&fit=crop",
      icon: <FaChartLine />, 
            tags: [" البرمجه والتطوير "]

    },
    {
      id: 7, 
      title: "بوابة التقارير الذكية", 
      category: "تقارير",
      description: "تقارير آلية ذكية مع إشعارات وتنبيهات فورية",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1600&auto=format&fit=crop",
      icon: <FaDatabase />, 
            tags: [" البرمجه والتطوير "]

    },
    {
      id: 8, 
      title: "منصة الخدمات الطبية", 
      category: "مواقع",
      description: "موقع شامل للخدمات الطبية مع نظام استشارات عن بعد",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1600&auto=format&fit=crop",
      icon: <FaStethoscope />, 
            tags: [" البرمجه والتطوير "]

    }
  ];

  const categories = [
    { id: "all", name: "الكل" },
    { id: "تحليلات", name: "تحليلات" },
    { id: "تقارير", name: "تقارير" },
    { id: "مواقع", name: "مواقع" },
    { id: "لوحات تحكم", name: "لوحات تحكم" }
  ];

  const filteredProjects = filter === "all" ? projects : projects.filter(p => p.category === filter);

  // Button Handlers
  const handleGetStarted = () => {
    alert("مرحباً بك! سيتم نقلك إلى صفحة التسجيل");
    // window.location.href = "/signup"; // Uncomment when you have the route
  };

  const handleOurServices = () => {
    alert("جاري تحميل خدماتنا المميزة...");
    const servicesSection = document.querySelector('.services-section');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/201234567890", "_blank");
  };

  const handleViewAllProjects = () => {
    alert("سيتم عرض جميع المشاريع قريباً");
    setFilter("all");
  };

  const handleDemoClick = (projectTitle, e) => {
    e.preventDefault();
    alert(`جاري تحميل العرض التجريبي لمشروع: ${projectTitle}`);
  };

  const handleServiceClick = (serviceTitle) => {
    alert(`جاري تحميل صفحة خدمة: ${serviceTitle}`);
  };

  const handleWhyChooseUsClick = (itemTitle) => {
    alert(`معلومات عن: ${itemTitle}`);
  };

  return (
    <>
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
        }

        /* Hero Section */
        .hero-section {
          position: relative;
          height: 85vh;
          overflow: hidden;
        }
        
        .hero-slider {
          position: relative;
          width: 100%;
          height: 100%;
        }
        
        .hero-slider img {
          position: absolute;
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0;
          transition: opacity 1.5s ease-in-out;
          top: 0;
          left: 0;
        }
        
        .hero-slider img.active {
          opacity: 1;
        }
        
        .hero-section::after {
          content: "";
          position: absolute;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, rgba(0,0,0,0.8), rgba(0,0,0,0.5));
          top: 0;
          left: 0;
          z-index: 1;
        }
        
        .hero-overlay {
          position: absolute;
          top: 50%;
          left: 10%;
          transform: translateY(-50%);
          color: white;
          max-width: 550px;
          z-index: 2;
          animation: fadeInUp 0.8s ease;
        }
        
        .hero-overlay h1 {
          font-size: 48px;
          font-weight: 800;
          margin-bottom: 20px;
        }
        
        .hero-overlay h1 span {
          background: linear-gradient(135deg, #60a5fa, #3b82f6);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
        
        .hero-overlay p {
          font-size: 18px;
          margin-bottom: 30px;
          line-height: 1.6;
        }
        
        .hero-buttons {
          display: flex;
          gap: 20px;
          flex-wrap: wrap;
        }
        
        .btn-primary {
          background: linear-gradient(135deg, #3b82f6, #2563eb);
          border: none;
          padding: 12px 32px;
          color: white;
          border-radius: 50px;
          cursor: pointer;
          font-weight: 600;
          transition: all 0.3s;
          box-shadow: 0 4px 15px rgba(59,130,246,0.3);
        }
        
        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(59,130,246,0.4);
        }
        
        .btn-secondary {
          background: transparent;
          border: 2px solid white;
          padding: 12px 32px;
          color: white;
          border-radius: 50px;
          cursor: pointer;
          font-weight: 600;
          transition: all 0.3s;
        }
        
        .btn-secondary:hover {
          background: rgba(255,255,255,0.1);
          border-color: #3b82f6;
        }

        /* Services & Why Choose Us */
        .services-section,
        .why-section {
          padding: 4rem 2rem;
          background: linear-gradient(135deg, #0f172a, #1e293b);
          direction: rtl;
        }
        
        .services-title,
        .why-title {
          text-align: center;
          font-size: 2.2rem;
          font-weight: 800;
          color: white;
          margin-bottom: 2.5rem;
          position: relative;
        }
        
        .services-title::after,
        .why-title::after {
          content: '';
          position: absolute;
          bottom: -12px;
          left: 50%;
          transform: translateX(-50%);
          width: 70px;
          height: 3px;
          background: linear-gradient(90deg, #3b82f6, #06b6d4);
          border-radius: 2px;
        }
        
        .services-grid,
        .why-grid {
          display: flex;
          justify-content: center;
          gap: 1.5rem;
          flex-wrap: wrap;
          max-width: 1200px;
          margin: 0 auto;
        }
        
        .service-card,
        .why-card {
          background: linear-gradient(135deg, rgba(59,130,246,0.1), rgba(6,182,212,0.1));
          backdrop-filter: blur(10px);
          border: 1px solid rgba(59,130,246,0.3);
          border-radius: 1rem;
          padding: 1rem 0.8rem;
          text-align: center;
          transition: all 0.4s;
          cursor: pointer;
          position: relative;
          overflow: hidden;
          min-width: 150px;
          flex: 0 1 calc(16.66% - 1.5rem);
        }
        
        .why-card {
          flex: 0 1 calc(25% - 1.5rem);
          min-width: 180px;
        }
        
        .service-card::before,
        .why-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(59,130,246,0.3), transparent);
          transition: left 0.6s;
        }
        
        .service-card:hover::before,
        .why-card:hover::before {
          left: 100%;
        }
        
        .service-card:hover,
        .why-card:hover {
          transform: translateY(-5px);
          border-color: #3b82f6;
          box-shadow: 0 10px 30px rgba(59,130,246,0.2);
        }
        
        .service-card svg,
        .why-card svg {
          font-size: 1.8rem;
          margin-bottom: 0.6rem;
          transition: transform 0.3s;
        }
        
        .service-card:hover svg,
        .why-card:hover svg {
          transform: scale(1.1);
        }
        
        .service-card h3,
        .why-card h3 {
          font-size: 0.9rem;
          font-weight: 700;
          color: white;
          margin-bottom: 0.4rem;
        }
        
        .service-card p,
        .why-card p {
          font-size: 0.7rem;
          color: #94a3b8;
          line-height: 1.3;
        }

        /* Portfolio Section */
        .portfolio-section {
          padding: 4rem 2rem;
          background: linear-gradient(135deg, #0f172a, #1e293b);
          direction: rtl;
        }
        
        .portfolio-header {
          text-align: center;
          margin-bottom: 2.5rem;
        }
        
        .portfolio-title {
          font-size: 2.2rem;
          font-weight: 800;
          background: linear-gradient(135deg, #60a5fa, #3b82f6);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          margin-bottom: 0.8rem;
        }
        
        .portfolio-subtitle {
          font-size: 0.9rem;
          color: #94a3b8;
          max-width: 600px;
          margin: 0 auto;
        }
        
        .portfolio-filters {
          display: flex;
          justify-content: center;
          gap: 0.6rem;
          margin-bottom: 2rem;
          flex-wrap: wrap;
        }
        
        .filter-btn {
          padding: 0.4rem 1.2rem;
          background: transparent;
          border: 1px solid rgba(59,130,246,0.3);
          border-radius: 50px;
          font-size: 0.8rem;
          font-weight: 600;
          color: #94a3b8;
          cursor: pointer;
          transition: all 0.3s;
        }
        
        .filter-btn:hover {
          border-color: #3b82f6;
          color: #3b82f6;
          transform: translateY(-2px);
        }
        
        .filter-btn.active {
          background: linear-gradient(135deg, #3b82f6, #2563eb);
          border-color: transparent;
          color: white;
          box-shadow: 0 4px 15px rgba(59,130,246,0.3);
        }
        
        .portfolio-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 1.5rem;
          max-width: 1200px;
          margin: 0 auto;
        }
        
        .portfolio-card {
          background: linear-gradient(135deg, rgba(59,130,246,0.1), rgba(6,182,212,0.1));
          backdrop-filter: blur(10px);
          border: 1px solid rgba(59,130,246,0.2);
          border-radius: 1rem;
          overflow: hidden;
          transition: all 0.3s;
          cursor: pointer;
        }
        
        .portfolio-card:hover {
          transform: translateY(-4px);
          border-color: #3b82f6;
          box-shadow: 0 10px 25px rgba(59,130,246,0.2);
        }
        
        .card-image {
          position: relative;
          overflow: hidden;
          height: 160px;
        }
        
        .card-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.4s;
        }
        
        .portfolio-card:hover .card-image img {
          transform: scale(1.05);
        }
        
        .card-content {
          padding: 1rem;
        }
        
        .card-header {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          margin-bottom: 0.6rem;
        }
        
        .card-icon {
          width: 32px;
          height: 32px;
          background: linear-gradient(135deg, #3b82f6, #2563eb);
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 1rem;
        }
        
        .card-title {
          font-size: 1rem;
          font-weight: 700;
          color: white;
          margin: 0;
        }
        
        .card-description {
          font-size: 0.75rem;
          color: #94a3b8;
          line-height: 1.4;
          margin-bottom: 0.8rem;
        }
        
        .card-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.4rem;
          margin-bottom: 0.8rem;
        }
        
        .tag {
          background: rgba(59,130,246,0.2);
          padding: 0.15rem 0.6rem;
          border-radius: 50px;
          font-size: 0.65rem;
          color: #60a5fa;
          font-weight: 600;
        }
        
        .card-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 0.6rem;
          border-top: 1px solid rgba(59,130,246,0.2);
        }
        
        .project-category {
          font-size: 0.65rem;
          color: #60a5fa;
          font-weight: 600;
        }
        
        .demo-link {
          display: flex;
          align-items: center;
          gap: 0.3rem;
          color: #60a5fa;
          text-decoration: none;
          font-size: 0.7rem;
          font-weight: 600;
          transition: all 0.3s;
          cursor: pointer;
        }
        
        .demo-link:hover {
          gap: 0.5rem;
          color: #3b82f6;
        }
        
        .view-all {
          display: flex;
          justify-content: center;
          margin-top: 2.5rem;
        }
        
        .view-all-btn {
          background: linear-gradient(135deg, #3b82f6, #2563eb);
          border: none;
          padding: 0.7rem 1.8rem;
          border-radius: 50px;
          color: white;
          font-size: 0.9rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        
        .view-all-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(59,130,246,0.4);
          gap: 0.8rem;
        }

        /* Fixed WhatsApp Icon */
        .whatsapp-float {
          position: fixed;
          bottom: 30px;
          right: 30px;
          z-index: 1000;
          cursor: pointer;
          animation: bounce 2s infinite;
        }
        
        .whatsapp-float svg {
          font-size: 60px;
          color: #25D366;
          filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.2));
          transition: all 0.3s ease;
        }
        
        .whatsapp-float svg:hover {
          transform: scale(1.1);
          filter: drop-shadow(0 6px 12px rgba(0, 0, 0, 0.3));
        }
        
        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        /* Tooltip for WhatsApp */
        .whatsapp-tooltip {
          position: absolute;
          bottom: 70px;
          right: 0;
          background: #25D366;
          color: white;
          padding: 5px 12px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 600;
          white-space: nowrap;
          opacity: 0;
          visibility: hidden;
          transition: all 0.3s;
          font-family: Arial, sans-serif;
        }
        
        .whatsapp-float:hover .whatsapp-tooltip {
          opacity: 1;
          visibility: visible;
          bottom: 80px;
        }

        @keyframes fadeInUp { 
          from {
            opacity: 0;
            transform: translateY(30px);
          } 
          to {
            opacity: 1;
            transform: translateY(-50%);
          } 
        }

        /* Responsive */
        @media (max-width: 1200px) {
          .service-card {
            flex: 0 1 calc(20% - 1.5rem);
          }
        }
        
        @media (max-width: 992px) {
          .service-card {
            flex: 0 1 calc(25% - 1.5rem);
          }
          .why-card {
            flex: 0 1 calc(33.33% - 1.5rem);
          }
        }
        
        @media (max-width: 768px) {
          .hero-section {
            height: 70vh;
          }
          .hero-overlay {
            left: 5%;
            right: 5%;
            text-align: center;
            max-width: 90%;
          }
          .hero-overlay h1 {
            font-size: 28px;
          }
          .hero-overlay p {
            font-size: 14px;
          }
          .service-card {
            flex: 0 1 calc(33.33% - 1rem);
            min-width: 120px;
          }
          .why-card {
            flex: 0 1 calc(50% - 1rem);
          }
          .services-section,
          .why-section,
          .portfolio-section {
            padding: 2rem 1rem;
          }
          .services-title,
          .why-title,
          .portfolio-title {
            font-size: 1.6rem;
          }
          .portfolio-grid {
            grid-template-columns: 1fr;
            gap: 1rem;
          }
          .filter-btn {
            padding: 0.3rem 0.8rem;
            font-size: 0.7rem;
          }
          .whatsapp-float svg {
            font-size: 50px;
          }
          .whatsapp-float {
            bottom: 20px;
            right: 20px;
          }
        }
        
        @media (max-width: 480px) {
          .service-card {
            flex: 0 1 calc(50% - 1rem);
          }
          .why-card {
            flex: 0 1 100%;
          }
          .hero-overlay h1 {
            font-size: 24px;
          }
          .btn-primary,
          .btn-secondary {
            padding: 8px 20px;
            font-size: 13px;
          }
          .whatsapp-float svg {
            font-size: 45px;
          }
        }
      `}</style>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-slider">
          {images.map((img, index) => (
            <img 
              key={index} 
              src={img} 
              alt={`Medical ${index + 1}`} 
              className={index === current ? "active" : ""} 
            />
          ))}
        </div>
        <div className="hero-overlay">
          <h1>
            Advanced <span>Medical Solutions</span> for Your Business
          </h1>
          <p>
            نُمكّن مقدمي الرعاية الصحية من تقديم خدمات متميزة من خلال أحدث التقنيات والأنظمة الذكية
          </p>
          <div className="hero-buttons">
            <button className="btn-secondary" onClick={handleOurServices}>Our Services</button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <h2 className="services-title">خدماتنا المميزة</h2>
        <div className="services-grid">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="service-card"
              onClick={() => handleServiceClick(service.title)}
            >
              <div style={{ color: service.color }}>{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-section">
        <h2 className="why-title">ليه تختارنا</h2>
        <div className="why-grid">
          {whyChooseUs.map((item) => (
            <div 
              key={item.id} 
              className="why-card"
              onClick={() => handleWhyChooseUsClick(item.title)}
            >
              <div style={{ color: item.color }}>{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="portfolio-section">
        <div className="portfolio-header">
          <h2 className="portfolio-title">نماذج أعمالنا</h2>
          <p className="portfolio-subtitle">
            نقدم حلولاً رقمية مبتكرة للمؤسسات الطبية، شاهد نماذج من أعمالنا المتميزة
          </p>
        </div>
        <div className="portfolio-filters">
          {categories.map((cat) => (
            <button
              key={cat.id}
              className={`filter-btn ${filter === cat.id ? "active" : ""}`}
              onClick={() => setFilter(cat.id)}
            >
              {cat.name}
            </button>
          ))}
        </div>
        <div className="portfolio-grid">
          {filteredProjects.map((project) => (
            <div key={project.id} className="portfolio-card">
              <div className="card-image">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="card-content">
                <div className="card-header">
                  <div className="card-icon">{project.icon}</div>
                  <h3 className="card-title">{project.title}</h3>
                </div>
                <p className="card-description">{project.description}</p>
                <div className="card-tags">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="tag">{tag}</span>
                  ))}
                </div>
                <div className="card-footer">
                  <span className="project-category">{project.category}</span>
                  <a 
                    href="#" 
                    className="demo-link" 
                    onClick={(e) => handleDemoClick(project.title, e)}
                  >
                    تجربة الموقع <FaExternalLinkAlt />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="view-all">
          <button className="view-all-btn" onClick={handleViewAllProjects}>
            شوف كل الأعمال <FaExternalLinkAlt />
          </button>
        </div>
      </section>

      {/* Fixed WhatsApp Icon */}
      <div className="whatsapp-float" onClick={handleWhatsAppClick}>
        <FaWhatsapp />
        <div className="whatsapp-tooltip">تواصل معنا عبر واتساب</div>
      </div>
    </>
  );
};

export default Home;