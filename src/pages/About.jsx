// About.jsx
import React from "react";
import { 
  FaEye, FaLightbulb, FaHandshake, FaChartLine, 
   FaShieldAlt, FaUsers, FaHeartbeat,
   FaArrowRight, 
} from "react-icons/fa";
import { TbTarget } from "react-icons/tb";

const About = () => {
  // Company Values Data
  const values = [
    { id: 1, icon: <FaShieldAlt />, title: "الاحترافية", description: "نلتزم بأعلى معايير الجودة في كل ما نقدمه", color: "#3b82f6" },
    { id: 2, icon: <FaLightbulb />, title: "الابتكار", description: "نطور حلولاً ذكية تواكب التغيرات السريعة في السوق", color: "#06b6d4" },
    { id: 3, icon: <FaHandshake />, title: "الشفافية", description: "نؤمن بالوضوح والثقة في جميع تعاملاتنا", color: "#8b5cf6" },
    { id: 4, icon: <FaChartLine />, title: "النتائج", description: "نركز على تحقيق نتائج حقيقية وقابلة للقياس", color: "#ec489a" },
    { id: 5, icon: <FaUsers />, title: "الشراكة", description: "ننجح عندما ينجح عملاؤنا، لذلك نبني علاقات طويلة المدى", color: "#f59e0b" }
  ];

  const handleLearnMore = () => {
    alert("مرحباً بك! سيتم نقلك إلى صفحة الخدمات");
  };

  const handleContactUs = () => {
    alert("جاري تحويلك إلى صفحة التواصل");
  };

  const handleValueClick = (title) => {
    alert(`قيمتنا: ${title}`);
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
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', sans-serif;
        }

        /* Hero Section */
        .about-hero {
          position: relative;
          min-height: 70vh;
          background: linear-gradient(135deg, #0f172a, #1e293b);
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          overflow: hidden;
        }

        .about-hero::before {
          content: '';
          position: absolute;
          width: 100%;
          height: 100%;
          background: url('https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1600&auto=format&fit=crop');
          background-size: cover;
          background-position: center;
          opacity: 0.5;
          animation: zoomIn 20s infinite alternate;
        }

        @keyframes zoomIn {
          from { transform: scale(1); }
          to { transform: scale(1.1); }
        }

        .hero-content {
          position: relative;
          z-index: 2;
          max-width: 800px;
          padding: 2rem;
          animation: fadeInUp 0.8s ease;
        }

        .hero-badge {
          display: inline-block;
          background: linear-gradient(135deg, #3b82f6, #06b6d4);
          padding: 0.5rem 1.5rem;
          border-radius: 50px;
          color: white;
          font-size: 0.9rem;
          font-weight: 600;
          margin-bottom: 1.5rem;
        }

        .hero-content h1 {
          font-size: 3.5rem;
          font-weight: 800;
          color: white;
          margin-bottom: 1.5rem;
          line-height: 1.2;
        }

        .hero-content h1 span {
          background: linear-gradient(135deg, #60a5fa, #3b82f6);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .hero-content p {
          font-size: 1.1rem;
          color: #cbd5e1;
          line-height: 1.8;
          margin-bottom: 2rem;
        }

        .hero-buttons {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
        }

        /* Company Description Section */
        .company-desc {
          padding: 5rem 2rem;
          background: linear-gradient(135deg, #0f172a, #1e293b);
          direction: rtl;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .desc-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          align-items: center;
        }

        .desc-content h2 {
          font-size: 2.2rem;
          font-weight: 800;
          color: white;
          margin-bottom: 1.5rem;
          position: relative;
        }

        .desc-content h2::after {
          content: '';
          position: absolute;
          bottom: -10px;
          right: 0;
          width: 60px;
          height: 3px;
          background: linear-gradient(90deg, #3b82f6, #06b6d4);
          border-radius: 2px;
        }

        .desc-content p {
          font-size: 1rem;
          color: #94a3b8;
          line-height: 1.8;
          margin-bottom: 1.2rem;
        }

        .desc-stats {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.5rem;
          margin-top: 2rem;
        }

        .stat-item {
          background: linear-gradient(135deg, rgba(59,130,246,0.1), rgba(6,182,212,0.1));
          border: 1px solid rgba(59,130,246,0.2);
          border-radius: 1rem;
          padding: 1rem;
          text-align: center;
          transition: all 0.3s;
        }

        .stat-item:hover {
          transform: translateY(-5px);
          border-color: #3b82f6;
          box-shadow: 0 10px 25px rgba(59,130,246,0.2);
        }

        .stat-number {
          font-size: 2rem;
          font-weight: 800;
          background: linear-gradient(135deg, #60a5fa, #3b82f6);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .stat-label {
          font-size: 0.85rem;
          color: #94a3b8;
          margin-top: 0.5rem;
        }

        .desc-image {
          position: relative;
        }

        .desc-image img {
          width: 100%;
          border-radius: 1rem;
          box-shadow: 0 20px 40px rgba(0,0,0,0.3);
          transition: transform 0.3s;
        }

        .desc-image img:hover {
          transform: scale(1.02);
        }

        /* Vision & Mission Section */
        .vision-mission {
          padding: 5rem 2rem;
          background: linear-gradient(135deg, #0f172a, #1e293b);
          direction: rtl;
        }

        .vm-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2rem;
        }

        .vm-card {
          background: linear-gradient(135deg, rgba(59,130,246,0.1), rgba(6,182,212,0.1));
          backdrop-filter: blur(10px);
          border: 1px solid rgba(59,130,246,0.2);
          border-radius: 1.5rem;
          padding: 2rem;
          text-align: center;
          transition: all 0.3s;
        }

        .vm-card:hover {
          transform: translateY(-10px);
          border-color: #3b82f6;
          box-shadow: 0 20px 40px rgba(59,130,246,0.2);
        }

        .vm-icon {
          width: 80px;
          height: 80px;
          background: linear-gradient(135deg, #3b82f6, #2563eb);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1.5rem;
          font-size: 2.5rem;
          color: white;
        }

        .vm-card h3 {
          font-size: 1.8rem;
          font-weight: 800;
          color: white;
          margin-bottom: 1rem;
        }

        .vm-card p {
          font-size: 1rem;
          color: #94a3b8;
          line-height: 1.8;
        }

        /* Values Section */
        .values-section {
          padding: 5rem 2rem;
          background: linear-gradient(135deg, #0f172a, #1e293b);
          direction: rtl;
        }

        .section-title {
          text-align: center;
          font-size: 2.2rem;
          font-weight: 800;
          color: white;
          margin-bottom: 3rem;
          position: relative;
        }

        .section-title::after {
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

        .values-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 2rem;
          max-width: 1200px;
          margin: 0 auto;
        }

        .value-card {
          background: linear-gradient(135deg, rgba(59,130,246,0.1), rgba(6,182,212,0.1));
          backdrop-filter: blur(10px);
          border: 1px solid rgba(59,130,246,0.2);
          border-radius: 1rem;
          padding: 2rem 1rem;
          text-align: center;
          transition: all 0.3s;
          cursor: pointer;
        }

        .value-card:hover {
          transform: translateY(-5px);
          border-color: #3b82f6;
          box-shadow: 0 10px 30px rgba(59,130,246,0.2);
        }

        .value-icon {
          font-size: 3rem;
          margin-bottom: 1rem;
        }

        .value-card h3 {
          font-size: 1.2rem;
          font-weight: 700;
          color: white;
          margin-bottom: 0.8rem;
        }

        .value-card p {
          font-size: 0.85rem;
          color: #94a3b8;
          line-height: 1.5;
        }

        /* CTA Section */
        .cta-section {
          padding: 5rem 2rem;
          background: linear-gradient(135deg, #0f172a, #1e293b);
          direction: rtl;
        }

        .cta-card {
          background: linear-gradient(135deg, rgba(59,130,246,0.2), rgba(6,182,212,0.2));
          backdrop-filter: blur(10px);
          border: 1px solid rgba(59,130,246,0.3);
          border-radius: 2rem;
          padding: 3rem;
          text-align: center;
          max-width: 800px;
          margin: 0 auto;
        }

        .cta-card h3 {
          font-size: 2rem;
          font-weight: 800;
          color: white;
          margin-bottom: 1rem;
        }

        .cta-card p {
          font-size: 1rem;
          color: #94a3b8;
          margin-bottom: 2rem;
        }

        /* Animations */
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Responsive */
        @media (max-width: 992px) {
          .desc-grid,
          .vm-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          
          .hero-content h1 {
            font-size: 2.5rem;
          }
          
          .section-title {
            font-size: 1.8rem;
          }
        }

        @media (max-width: 768px) {
          .hero-content h1 {
            font-size: 2rem;
          }
          
          .hero-content p {
            font-size: 1rem;
          }
          
          .desc-content h2 {
            font-size: 1.8rem;
          }
          
          .vm-card h3 {
            font-size: 1.5rem;
          }
          
          .values-grid {
            grid-template-columns: 1fr;
          }
          
          .cta-card {
            padding: 2rem;
          }
          
          .cta-card h3 {
            font-size: 1.5rem;
          }
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
          font-size: 1rem;
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
          font-size: 1rem;
        }
        
        .btn-secondary:hover {
          background: rgba(255, 255, 255, 0.07);
          border-color: #3b82f6;
        }
      `}</style>

      {/* Hero Section */}
      <section className="about-hero">
        <div className="hero-content">
          <div className="hero-badge">
            <FaHeartbeat /> من نحن
          </div>
          <h1>
            شريكك الرقمي <span>للتميز الطبي</span>
          </h1>
          <p>
            نُمكّن المؤسسات الصحية من تحقيق نمو حقيقي في عصر التحول الرقمي من خلال حلول متكاملة وتقنيات ذكية
          </p>
          <div className="hero-buttons">
            <button className="btn-primary" onClick={handleLearnMore}>اكتشف خدماتنا</button>
            <button className="btn-secondary" onClick={handleContactUs}>تواصل معنا</button>
          </div>
        </div>
      </section>

      {/* Company Description */}
      <section className="company-desc">
        <div className="container">
          <div className="desc-grid">
            <div className="desc-content">
              <h2>نبذة عن الشركة</h2>
              <p>
                نحن شركة متخصصة في تقديم حلول رقمية متكاملة للقطاع الطبي، نعمل على تمكين المؤسسات الصحية من تحقيق نمو حقيقي في عصر التحول الرقمي.
              </p>
              <p>
                نساعد العيادات، المراكز الطبية، والمستشفيات على تطوير أعمالها من خلال دمج التكنولوجيا الذكية مع استراتيجيات تسويقية فعّالة وأنظمة تشغيل متطورة. كل ما نقدمه مبني على فهم عميق لطبيعة السوق الطبي واحتياجات المرضى، بهدف تحسين الأداء وخلق تجربة صحية أكثر كفاءة واحترافية.
              </p>
              <p>
                نؤمن أن النجاح في المجال الطبي اليوم لا يعتمد فقط على جودة الخدمة، بل على القدرة على الإدارة الذكية، والوصول الصحيح للمرضى، وبناء حضور رقمي قوي ومستدام.
              </p>
              <div className="desc-stats">
                <div className="stat-item">
                  <div className="stat-label">أحدث التقنيات</div>
                </div>
                <div className="stat-item">
                  <div className="stat-label">خبراء متخصصين</div>
                </div>
              </div>
            </div>
            <div className="desc-image">
              <img 
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=800&auto=format&fit=crop" 
                alt="Medical Technology"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="vision-mission">
        <div className="container">
          <div className="vm-grid">
            <div className="vm-card">
              <div className="vm-icon">
                <FaEye />
              </div>
              <h3>رؤيتنا</h3>
              <p>
                أن نكون الشريك الرقمي الأول للقطاع الطبي في المنطقة، من خلال تقديم حلول مبتكرة تساهم في تطوير منظومة الرعاية الصحية ورفع كفاءتها.
              </p>
            </div>
            <div className="vm-card">
              <div className="vm-icon">
                <TbTarget />
              </div>
              <h3>رسالتنا</h3>
              <p>
                تمكين مقدمي الخدمات الطبية من النمو والتوسع عبر حلول رقمية وتسويقية متكاملة، تساعدهم على تحسين الأداء، زيادة عدد المرضى، وبناء أنظمة عمل أكثر تنظيمًا واحترافية.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <h2 className="section-title">قيمنا</h2>
        <div className="values-grid">
          {values.map((value) => (
            <div 
              key={value.id} 
              className="value-card"
              onClick={() => handleValueClick(value.title)}
            >
              <div className="value-icon" style={{ color: value.color }}>
                {value.icon}
              </div>
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-card">
          <h3>هل تريد تطوير أعمالك الطبية؟</h3>
          <p>
            تواصل مع فريقنا اليوم للحصول على استشارة مجانية واكتشف كيف يمكننا مساعدتك في تحقيق أهدافك
          </p>
          <button className="btn-primary" onClick={handleContactUs}>
            تواصل معنا الآن <FaArrowRight style={{ marginRight: "8px" }} />
          </button>
        </div>
      </section>
    </>
  );
};

export default About;