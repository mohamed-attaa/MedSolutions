import React, { useEffect, useState } from "react";
import { 
  FaLaptopCode, FaHospitalUser, FaCalendarCheck, FaChartLine, 
  FaMobileAlt, FaCloudUploadAlt, FaShieldAlt, FaHeadset,
  FaArrowLeft, FaCheckCircle, FaTachometerAlt,
  FaDatabase, FaFileAlt, FaUserMd, FaClock, FaVideo, FaRobot,
  FaHeartbeat, FaPalette, FaFilm, FaBullhorn, FaChartBar,
  FaRegBuilding, FaInstagram, FaFacebook, FaWhatsapp
} from "react-icons/fa";
const Services = () => {
  // Hero Slider Images
  const images = [
    "https://images.unsplash.com/photo-1579154204601-01588f351e67?q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1600&auto=format&fit=crop",
  ];
  
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Service Categories
  const serviceCategories = [
    {
      id: 1,
      title: "تصميم مواقع طبية",
      description: "تصميم مواقع احترافي للعيادات والمستشفيات",
      icon: <FaLaptopCode />,
      color: "#3b82f6",
      features: [
        { text: "مواقع العيادات المتخصصة", icon: <FaHospitalUser /> },
        { text: "مواقع المستشفيات الكبرى", icon: <FaHospitalUser /> },
        { text: "منصات طبية متكاملة", icon: <FaRegBuilding /> },
        { text: "الحجز الإلكتروني", icon: <FaCalendarCheck /> }
      ],
      stats: [
        { number: "50+", label: "موقع تم تنفيذه" },
        { number: "30+", label: "عيادة متخصصة" }
      ],
      tags: ["clinic", "مستشفى", "عيادات"]
    },
    {
      id: 2,
      title: "تطوير أنظمة إدارة",
      description: "حلول متكاملة لإدارة الحجوزات والمرضى",
      icon: <FaDatabase />,
      color: "#06b6d4",
      features: [
        { text: "نظام إدارة المستشفيات", icon: <FaHospitalUser /> },
        { text: "إدارة المرضى", icon: <FaUserMd /> },
        { text: "نظام حجوزات ذكي", icon: <FaCalendarCheck /> },
        { text: "تقارير تحليلية", icon: <FaFileAlt /> }
      ],
      stats: [
        { number: "100+", label: "نظام مُدار" },
        { number: "10K+", label: "مرضى مسجلين" }
      ],
      tags: ["أنظمة إدارة", "الحجوزات", "تقارير"]
    },
    {
      id: 3,
      title: "بوتات ذكية",
      description: "روبوتات محادثة ذكية للمساعدة في الحجوزات",
      icon: <FaRobot />,
      color: "#8b5cf6",
      features: [
        { text: "بوتات حجز مواعيد ذكية", icon: <FaRobot /> },
        { text: "مساعد طبي آلي", icon: <FaHeartbeat /> },
        { text: "إجابة على استفسارات", icon: <FaHeadset /> },
        { text: "تكامل مع الأنظمة", icon: <FaDatabase /> }
      ],
      stats: [
        { number: "500+", label: "بوت تم تطويره" },
        { number: "95%", label: "دقة الاستجابة" }
      ],
      tags: ["بوتات", "ذكاء اصطناعي", "AI"]
    },
    {
      id: 4,
      title: "براندنج وهوية بصرية",
      description: "تصميم هوية متكاملة للعلامات التجارية الطبية",
      icon: <FaPalette />,
      color: "#ec489a",
      features: [
        { text: "تصميم شعارات احترافية", icon: <FaPalette /> },
        { text: "هوية بصرية متكاملة", icon: <FaRegBuilding /> },
        { text: "دليل العلامة التجارية", icon: <FaFileAlt /> },
        { text: "تصاميم للمطبوعات", icon: <FaInstagram /> }
      ],
      stats: [
        { number: "200+", label: "شعار مصمم" },
        { number: "98%", label: "رضا العملاء" }
      ],
      tags: ["براندنج", "شعار", "هوية بصرية"]
    },
    {
      id: 5,
      title: "تصميم جرافيك",
      description: "تصاميم جرافيك احترافية للمطبوعات والإعلانات",
      icon: <FaPalette />,
      color: "#f59e0b",
      features: [
        { text: "تصميم منشورات طبية", icon: <FaInstagram /> },
        { text: "انفوجرافيك طبي", icon: <FaChartBar /> },
        { text: "تصاميم إعلانات", icon: <FaFacebook /> },
        { text: "تصميم بروشورات", icon: <FaFileAlt /> }
      ],
      stats: [
        { number: "1000+", label: "تصميم منفذ" },
        { number: "4.9", label: "تقييم العملاء" }
      ],
      tags: ["جرافيك", "تصميم", "انفوجرافيك"]
    },
    {
      id: 6,
      title: "موشن جرافيك",
      description: "فيديوهات موشن جرافيك احترافية للتعريف بالخدمات",
      icon: <FaFilm />,
      color: "#10b981",
      features: [
        { text: "فيديوهات تعريفية", icon: <FaFilm /> },
        { text: "رسوم متحركة طبية", icon: <FaHeartbeat /> },
        { text: "فيديوهات إعلانية", icon: <FaBullhorn /> },
        { text: "قصص موشن جرافيك", icon: <FaVideo /> }
      ],
      stats: [
        { number: "300+", label: "فيديو منفذ" },
        { number: "2M+", label: "مشاهدة" }
      ],
      tags: ["موشن", "فيديو", "رسوم متحركة"]
    },
    {
      id: 7,
      title: "لوحات تحكم طبية",
      description: "لوحات تحكم متقدمة لإدارة المستشفيات والعيادات",
      icon: <FaTachometerAlt />,
      color: "#3b82f6",
      features: [
        { text: "لوحة تحكم المستشفى", icon: <FaHospitalUser /> },
        { text: "تقارير فورية", icon: <FaChartLine /> },
        { text: "تحليلات الأداء", icon: <FaChartBar /> },
        { text: "إدارة الموارد", icon: <FaDatabase /> }
      ],
      stats: [
        { number: "50+", label: "لوحة تحكم" },
        { number: "24/7", label: "متابعة" }
      ],
      tags: ["لوحات تحكم", "تقارير", "تحليلات"]
    },
    {
      id: 8,
      title: "تسويق رقمي طبي",
      description: "حملات إعلانية ذكية للوصول لمرضى جدد",
      icon: <FaBullhorn />,
      color: "#06b6d4",
      features: [
        { text: "إعلانات ممولة", icon: <FaFacebook /> },
        { text: "إدارة وسائل التواصل", icon: <FaInstagram /> },
        { text: "تحسين محركات البحث", icon: <FaChartLine /> },
        { text: "استراتيجيات تسويق", icon: <FaBullhorn /> }
      ],
      stats: [
        { number: "500+", label: "حملة ناجحة" },
        { number: "1M+", label: "وصول شهري" }
      ],
      tags: ["تسويق", "إعلانات", "clinic"]
    },
    {
      id: 9,
      title: "استشارات طبية عن بعد",
      description: "منصة متكاملة للاستشارات الطبية بالفيديو",
      icon: <FaVideo />,
      color: "#8b5cf6",
      features: [
        { text: "مكالمات فيديو عالية الجودة", icon: <FaVideo /> },
        { text: "جدولة المواعيد", icon: <FaClock /> },
        { text: "ملفات المرضى الرقمية", icon: <FaUserMd /> },
        { text: "تكامل مع الأنظمة", icon: <FaDatabase /> }
      ],
      stats: [
        { number: "1000+", label: "استشارة شهرياً" },
        { number: "98%", label: "رضا المرضى" }
      ],
      tags: ["استشارات", "فيديو", "عن بعد"]
    },
    {
      id: 10,
      title: "تطبيقات الجوال الطبية",
      description: "تطبيقات ذكية للمرضى والأطباء للمتابعة",
      icon: <FaMobileAlt />,
      color: "#f59e0b",
      features: [
        { text: "تطبيقات iOS و Android", icon: <FaMobileAlt /> },
        { text: "تذكير بالمواعيد", icon: <FaClock /> },
        { text: "متابعة الحالة الصحية", icon: <FaHeartbeat /> },
        { text: "مراسلة فورية", icon: <FaHeadset /> }
      ],
      stats: [
        { number: "10K+", label: "تحميل" },
        { number: "4.8", label: "تقييم" }
      ],
      tags: ["تطبيقات", "موبايل", "صحة"]
    },
    {
      id: 11,
      title: "حلول السحابة الطبية",
      description: "تخزين آمن للملفات الطبية على السحابة",
      icon: <FaCloudUploadAlt />,
      color: "#10b981",
      features: [
        { text: "تخزين آمن للبيانات", icon: <FaShieldAlt /> },
        { text: "نسخ احتياطي تلقائي", icon: <FaCloudUploadAlt /> },
        { text: "وصول عن بعد", icon: <FaMobileAlt /> },
        { text: "تشفير متقدم", icon: <FaShieldAlt /> }
      ],
      stats: [
        { number: "99.9%", label: "أمان البيانات" },
        { number: "24/7", label: "توفر" }
      ],
      tags: ["سحابة", "أمان", "تخزين"]
    },
    {
      id: 12,
      title: "تحليلات طبية متقدمة",
      description: "ذكاء اصطناعي لتحليل البيانات الطبية",
      icon: <FaChartLine />,
      color: "#ec489a",
      features: [
        { text: "تحليل أداء العيادات", icon: <FaTachometerAlt /> },
        { text: "توقعات المرضى", icon: <FaRobot /> },
        { text: "تقارير فورية", icon: <FaFileAlt /> },
        { text: "ذكاء اصطناعي", icon: <FaChartLine /> }
      ],
      stats: [
        { number: "95%", label: "دقة التحليل" },
        { number: "50+", label: "مؤشر أداء" }
      ],
      tags: ["تحليلات", "ذكاء اصطناعي", "تقارير"]
    }
  ];

  // Additional Features
  const additionalFeatures = [
    {
      id: 1,
      title: "دعم فني على مدار الساعة",
      description: "فريق دعم متخصص جاهز للإجابة على استفساراتك 24/7",
      icon: <FaHeadset />,
      color: "#3b82f6"
    },
    {
      id: 2,
      title: "أمان وحماية البيانات",
      description: "تشفير متقدم لحماية بيانات المرضى والملفات الطبية",
      icon: <FaShieldAlt />,
      color: "#06b6d4"
    },
    {
      id: 3,
      title: "تكامل مع الأنظمة الحالية",
      description: "سهولة التكامل مع أنظمة المستشفيات والعيادات الحالية",
      icon: <FaDatabase />,
      color: "#8b5cf6"
    },
    {
      id: 4,
      title: "تقارير وتحليلات متقدمة",
      description: "تقارير تفصيلية لتحسين أداء المؤسسة الطبية",
      icon: <FaChartLine />,
      color: "#ec489a"
    }
  ];

  return (
    <>
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        /* WhatsApp Button */
        .whatsapp-float {
          position: fixed;
          bottom: 30px;
          right: 30px;
          z-index: 1000;
          background-color: #25D366;
          color: white;
          width: 60px;
          height: 60px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2rem;
          cursor: pointer;
          transition: all 0.3s;
          box-shadow: 0 4px 15px rgba(37, 211, 102, 0.3);
          animation: pulse 2s infinite;
        }
        
        .whatsapp-float:hover {
          transform: scale(1.1);
          box-shadow: 0 8px 25px rgba(37, 211, 102, 0.4);
        }
        
        @keyframes pulse {
          0% {
            box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.7);
          }
          70% {
            box-shadow: 0 0 0 15px rgba(37, 211, 102, 0);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(37, 211, 102, 0);
          }
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
          background: linear-gradient(135deg, rgba(0,0,0,0.85), rgba(0,0,0,0.6));
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
          max-width: 600px;
          z-index: 2;
          animation: fadeInUp 0.8s ease;
        }
        
        .hero-overlay h1 {
          font-size: 52px;
          font-weight: 800;
          margin-bottom: 20px;
          line-height: 1.2;
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
          opacity: 0.95;
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
          font-size: 15px;
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
          font-size: 15px;
          transition: all 0.3s;
        }
        
        .btn-secondary:hover {
          background: rgba(255,255,255,0.1);
          border-color: #3b82f6;
        }

        /* Services Section */
        .services-section {
          padding: 4rem 2rem;
          background: linear-gradient(135deg, #0f172a, #1e293b);
          direction: rtl;
        }
        
        .section-header {
          text-align: center;
          margin-bottom: 2.5rem;
        }
        
        .section-title {
          font-size: 2.2rem;
          font-weight: 800;
          background: linear-gradient(135deg, #60a5fa, #3b82f6);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          margin-bottom: 0.8rem;
        }
        
        .section-subtitle {
          font-size: 0.9rem;
          color: #94a3b8;
          max-width: 600px;
          margin: 0 auto;
        }
        
        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 1.5rem;
          max-width: 1400px;
          margin: 0 auto;
        }
        
        .service-card {
          background: linear-gradient(135deg, rgba(59,130,246,0.1), rgba(6,182,212,0.1));
          backdrop-filter: blur(10px);
          border: 1px solid rgba(59,130,246,0.2);
          border-radius: 1rem;
          overflow: hidden;
          transition: all 0.3s;
          cursor: pointer;
        }
        
        .service-card:hover {
          transform: translateY(-5px);
          border-color: #3b82f6;
          box-shadow: 0 10px 25px rgba(59,130,246,0.2);
        }
        
        .service-header {
          background: linear-gradient(135deg, rgba(59,130,246,0.2), rgba(6,182,212,0.2));
          padding: 1rem;
          text-align: center;
          border-bottom: 1px solid rgba(59,130,246,0.2);
        }
        
        .service-icon {
          width: 55px;
          height: 55px;
          background: linear-gradient(135deg, #3b82f6, #2563eb);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 0.6rem;
          font-size: 1.6rem;
          color: white;
        }
        
        .service-title {
          font-size: 1.2rem;
          font-weight: 700;
          color: white;
          margin-bottom: 0.4rem;
        }
        
        .service-description {
          font-size: 0.8rem;
          color: #94a3b8;
          line-height: 1.4;
        }
        
        .service-tags {
          display: flex;
          justify-content: center;
          gap: 0.4rem;
          margin-top: 0.8rem;
          flex-wrap: wrap;
        }
        
        .service-tag {
          background: rgba(59,130,246,0.2);
          padding: 0.15rem 0.6rem;
          border-radius: 50px;
          font-size: 0.6rem;
          color: #60a5fa;
          font-weight: 600;
        }
        
        .service-content {
          padding: 1rem;
        }
        
        .features-list {
          margin-bottom: 1rem;
        }
        
        .features-title {
          font-size: 0.8rem;
          font-weight: 700;
          color: white;
          margin-bottom: 0.6rem;
          display: flex;
          align-items: center;
          gap: 0.4rem;
        }
        
        .feature-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 0.4rem;
          color: #94a3b8;
          font-size: 0.7rem;
        }
        
        .feature-item svg {
          color: #3b82f6;
          font-size: 0.7rem;
        }
        
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 0.8rem;
          margin-bottom: 1rem;
          padding: 0.6rem 0;
          border-top: 1px solid rgba(59,130,246,0.2);
          border-bottom: 1px solid rgba(59,130,246,0.2);
        }
        
        .stat-item {
          text-align: center;
        }
        
        .stat-number {
          font-size: 1rem;
          font-weight: 800;
          background: linear-gradient(135deg, #60a5fa, #3b82f6);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
        
        .stat-label {
          font-size: 0.6rem;
          color: #94a3b8;
          margin-top: 0.2rem;
        }
        
        .service-btn {
          width: 100%;
          background: linear-gradient(135deg, #3b82f6, #2563eb);
          border: none;
          padding: 0.6rem;
          border-radius: 50px;
          color: white;
          font-weight: 600;
          font-size: 0.8rem;
          cursor: pointer;
          transition: all 0.3s;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.4rem;
        }
        
        .service-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 15px rgba(59,130,246,0.4);
          gap: 0.6rem;
        }
        
        /* Additional Features Section */
        .features-section {
          padding: 3rem 2rem;
          background: linear-gradient(135deg, #0f172a, #1e293b);
          direction: rtl;
          border-top: 1px solid rgba(59,130,246,0.2);
        }
        
        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1.5rem;
          max-width: 1200px;
          margin: 0 auto;
        }
        
        .feature-card {
          background: linear-gradient(135deg, rgba(59,130,246,0.1), rgba(6,182,212,0.1));
          backdrop-filter: blur(10px);
          border: 1px solid rgba(59,130,246,0.2);
          border-radius: 1rem;
          padding: 1.2rem;
          text-align: center;
          transition: all 0.3s;
        }
        
        .feature-card:hover {
          transform: translateY(-3px);
          border-color: #3b82f6;
          box-shadow: 0 8px 20px rgba(59,130,246,0.2);
        }
        
        .feature-icon {
          width: 50px;
          height: 50px;
          background: linear-gradient(135deg, #3b82f6, #2563eb);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 0.8rem;
          font-size: 1.3rem;
          color: white;
        }
        
        .feature-card h3 {
          font-size: 1rem;
          font-weight: 700;
          color: white;
          margin-bottom: 0.4rem;
        }
        
        .feature-card p {
          font-size: 0.75rem;
          color: #94a3b8;
          line-height: 1.4;
        }
        
        /* CTA Section */
        .cta-section {
          padding: 3rem 2rem;
          background: linear-gradient(135deg, #1e293b, #0f172a);
          text-align: center;
          direction: rtl;
          border-top: 1px solid rgba(59,130,246,0.2);
        }
        
        .cta-content h2 {
          font-size: 1.8rem;
          font-weight: 800;
          color: white;
          margin-bottom: 0.8rem;
        }
        
        .cta-content p {
          font-size: 0.9rem;
          color: #94a3b8;
          margin-bottom: 1.5rem;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }
        
        .cta-btn {
          background: linear-gradient(135deg, #3b82f6, #2563eb);
          border: none;
          padding: 0.8rem 2rem;
          border-radius: 50px;
          color: white;
          font-size: 0.9rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
        }
        
        .cta-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(59,130,246,0.4);
          gap: 0.8rem;
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
        @media (max-width: 992px) {
          .services-grid {
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
            gap: 1.2rem;
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
            font-size: 32px;
          }
          .hero-overlay p {
            font-size: 14px;
          }
          .services-section,
          .features-section,
          .cta-section {
            padding: 2rem 1rem;
          }
          .section-title {
            font-size: 1.6rem;
          }
          .services-grid {
            grid-template-columns: 1fr;
          }
          .service-title {
            font-size: 1.1rem;
          }
          .cta-content h2 {
            font-size: 1.3rem;
          }
          .whatsapp-float {
            width: 50px;
            height: 50px;
            font-size: 1.6rem;
            bottom: 20px;
            right: 20px;
          }
        }
        
        @media (max-width: 480px) {
          .hero-overlay h1 {
            font-size: 24px;
          }
          .btn-primary,
          .btn-secondary {
            padding: 8px 20px;
            font-size: 13px;
          }
          .whatsapp-float {
            width: 45px;
            height: 45px;
            font-size: 1.4rem;
            bottom: 15px;
            right: 15px;
          }
        }
      `}</style>

      {/* WhatsApp Floating Button */}
      <a 
        href="https://wa.me/201234567890?text=السلام%20عليكم%20أحتاج%20استشارة%20حول%20الخدمات%20الطبية" 
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp />
      </a>

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
            خدماتنا <span>الطبية المتكاملة</span>
          </h1>
          <p>
            نقدم حلولاً رقمية متطورة للقطاع الطبي، تجمع بين التكنولوجيا الحديثة والخبرة الطبية
            لتقديم أفضل الخدمات للمرضى ومقدمي الرعاية الصحية
          </p>
          <div className="hero-buttons">
            <button className="btn-primary">اطلب الخدمة الآن</button>
            <button className="btn-secondary">تعرف على خدماتنا</button>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="services-section">
        <div className="section-header">
          <h2 className="section-title">خدماتنا المميزة</h2>
          <p className="section-subtitle">
            نقدم مجموعة متكاملة من الحلول الرقمية المتطورة لتلبية احتياجات القطاع الطبي
          </p>
        </div>
        <div className="services-grid">
          {serviceCategories.map((service) => (
            <div key={service.id} className="service-card">
              <div className="service-header">
                <div className="service-icon" style={{ background: `linear-gradient(135deg, ${service.color}, ${service.color}dd)` }}>
                  {service.icon}
                </div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
                <div className="service-tags">
                  {service.tags.map((tag, idx) => (
                    <span key={idx} className="service-tag">{tag}</span>
                  ))}
                </div>
              </div>
              <div className="service-content">
                <div className="features-list">
                  <div className="features-title">
                    <FaCheckCircle /> المميزات
                  </div>
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="feature-item">
                      {feature.icon}
                      <span>{feature.text}</span>
                    </div>
                  ))}
                </div>
                <div className="stats-grid">
                  {service.stats.map((stat, idx) => (
                    <div key={idx} className="stat-item">
                      <div className="stat-number">{stat.number}</div>
                      <div className="stat-label">{stat.label}</div>
                    </div>
                  ))}
                </div>
                <button className="service-btn">
                  اطلب الخدمة <FaArrowLeft />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Additional Features Section */}
      <section className="features-section">
        <div className="section-header">
          <h2 className="section-title">لماذا تختار خدماتنا؟</h2>
          <p className="section-subtitle">
            نتميز بتقديم حلول متكاملة تجمع بين الخبرة التقنية والفهم العميق لاحتياجات القطاع الطبي
          </p>
        </div>
        <div className="features-grid">
          {additionalFeatures.map((feature) => (
            <div key={feature.id} className="feature-card">
              <div className="feature-icon" style={{ background: `linear-gradient(135deg, ${feature.color}, ${feature.color}dd)` }}>
                {feature.icon}
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-content">
          <h2>جاهز لتطوير مؤسستك الطبية؟</h2>
          <p>تواصل معنا الآن للحصول على استشارة مجانية وابدأ رحلة التحول الرقمي</p>
          <button className="cta-btn">
            احصل على استشارة مجانية <FaArrowLeft />
          </button>
        </div>
      </section>
    </>
  );
};

export default Services;