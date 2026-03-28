// pages/Packages.jsx
import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

// ==================== Animations ====================

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const scaleIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

const pulseRing = keyframes`
  0% {
    box-shadow: 0 0 0 0 rgba(66, 153, 225, 0.7);
  }
  70% {
    box-shadow: 0 0 0 15px rgba(66, 153, 225, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(66, 153, 225, 0);
  }
`;

const shimmer = keyframes`
  0% {
    background-position: -100% 0;
  }
  100% {
    background-position: 200% 0;
  }
`;

const robotWave = keyframes`
  0% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(10deg);
  }
  75% {
    transform: rotate(-10deg);
  }
  100% {
    transform: rotate(0deg);
  }
`;

// ==================== Styled Components ====================

const PageContainer = styled.div`
  font-family: 'Cairo', 'Segoe UI', 'Tahoma', sans-serif;
  background: linear-gradient(135deg, #041722 0%, #051d27 50%, #03151d 100%);
  min-height: 100vh;
  position: relative;
  overflow-x: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 20% 50%, rgba(44, 125, 160, 0.15) 0%, transparent 70%);
    pointer-events: none;
  }
`;

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 24px;
  position: relative;
  z-index: 2;

  @media (max-width: 800px) {
    padding: 0 20px;
  }
`;

const HeroSection = styled.div`
  text-align: center;
  padding: 70px 0 50px;
  animation: ${fadeInUp} 0.8s ease-out;
`;

const Badge = styled.div`
  display: inline-block;
  background: rgba(44, 125, 160, 0.25);
  backdrop-filter: blur(10px);
  padding: 8px 24px;
  border-radius: 60px;
  font-weight: 700;
  font-size: 0.9rem;
  color: #9ad7f0;
  margin-bottom: 24px;
  border: 1px solid rgba(100, 180, 210, 0.4);
  letter-spacing: 0.5px;
  
  &:hover {
    background: rgba(44, 125, 160, 0.35);
    transform: scale(1.02);
    transition: all 0.3s ease;
  }
`;

const Title = styled.h1`
  font-size: 3.2rem;
  font-weight: 800;
  background: linear-gradient(135deg, #ffffff, #9ad7f0, #6bc2e0);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  margin-bottom: 20px;
  text-shadow: 0 2px 10px rgba(0,0,0,0.1);

  @media (max-width: 800px) {
    font-size: 2.3rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: #c8e7f5;
  max-width: 800px;
  margin: 0 auto 20px;
  font-weight: 500;
  line-height: 1.7;
`;

const BotHighlight = styled.span`
  background: linear-gradient(135deg, #2c9c7c, #5ab3d0);
  padding: 4px 12px;
  border-radius: 40px;
  font-weight: 700;
  display: inline-block;
  margin-top: 10px;
  font-size: 0.9rem;
`;

const PackagesSection = styled.section`
  padding: 50px 0 80px;
`;

const SectionTitle = styled.h2`
  text-align: center;
  font-size: 2.6rem;
  font-weight: 800;
  margin-bottom: 20px;
  color: #ffffff;
  position: relative;
  text-shadow: 0 2px 4px rgba(0,0,0,0.1);

  &:after {
    content: "";
    width: 100px;
    height: 4px;
    background: linear-gradient(90deg, #2c9c7c, #5ab3d0, #2c9c7c);
    position: absolute;
    bottom: -16px;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 4px;
  }
`;

const SectionDescription = styled.p`
  text-align: center;
  max-width: 750px;
  margin: 25px auto 0;
  color: #c8e7f5;
  font-size: 1.1rem;
`;

const PackagesGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
  margin-top: 70px;
`;

const PackageCard = styled.div`
  background: ${props => props.popular ? 'linear-gradient(135deg, #ffffff 0%, #fffef7 100%)' : 'white'};
  border-radius: 48px;
  padding: 32px 28px;
  flex: 1;
  min-width: 280px;
  max-width: 340px;
  transition: all 0.5s cubic-bezier(0.2, 0.9, 0.4, 1.1);
  box-shadow: 0 25px 45px -18px rgba(0, 0, 0, 0.35);
  border: 1px solid ${props => props.popular ? 'rgba(44, 156, 124, 0.4)' : 'rgba(44, 125, 160, 0.2)'};
  position: relative;
  animation: ${scaleIn} 0.5s ease-out backwards;
  animation-delay: ${props => props.delay || '0s'};
  
  &:hover {
    transform: translateY(-16px) scale(1.02);
    box-shadow: 0 40px 60px -20px rgba(0, 0, 0, 0.45);
    border-color: ${props => props.popular ? '#2c9c7c' : '#5ab3d0'};
  }
`;

const PopularRibbon = styled.div`
  position: absolute;
  top: -14px;
  right: 24px;
  background: linear-gradient(135deg, #f5b042, #f09c2e);
  color: #1f2a2e;
  font-weight: 800;
  font-size: 0.75rem;
  padding: 6px 16px;
  border-radius: 60px;
  box-shadow: 0 6px 14px rgba(0, 0, 0, 0.15);
  display: flex;
  align-items: center;
  gap: 6px;
  
  &::before {
    content: '🤖';
    font-size: 0.85rem;
  }
`;

const PackageIcon = styled.div`
  font-size: 2.5rem;
  margin-bottom: 16px;
  text-align: center;
`;

const PackageName = styled.h3`
  font-size: 1.7rem;
  font-weight: 800;
  margin-bottom: 10px;
  background: linear-gradient(120deg, #19647e, #218b6e);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  text-align: center;
`;

const PackageDesc = styled.div`
  font-size: 0.85rem;
  color: #5a7c93;
  margin-bottom: 20px;
  border-bottom: 2px solid #e9f0f5;
  padding-bottom: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  text-align: center;
`;

const Price = styled.div`
  font-size: 2.4rem;
  font-weight: 800;
  color: #1e5b7c;
  margin: 20px 0 8px;
  display: flex;
  align-items: baseline;
  justify-content: center;
  gap: 6px;
  flex-wrap: wrap;
`;

const PriceSpan = styled.span`
  font-size: 1rem;
  font-weight: 500;
  color: #5f7f97;
`;

const PriceNote = styled.div`
  font-size: 0.7rem;
  color: #6a8da3;
  margin-top: 6px;
  background: #f8fbfe;
  padding: 6px 12px;
  border-radius: 40px;
  display: inline-block;
  width: auto;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
`;

const FeaturesList = styled.ul`
  list-style: none;
  margin: 24px 0 28px;
  padding: 0;
`;

const FeatureItem = styled.li`
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 500;
  font-size: 0.85rem;
  color: #1f405b;
  transition: transform 0.2s ease;
  
  &:hover {
    transform: translateX(5px);
  }

  span {
    width: 22px;
    height: 22px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, #2c9c7c, #218b6e);
    border-radius: 50%;
    color: white;
    font-size: 0.7rem;
    flex-shrink: 0;
  }
`;

const ButtonStart = styled(Link)`
  display: inline-block;
  width: 100%;
  text-align: center;
  background: linear-gradient(135deg, #eef3fa, #e4edf5);
  padding: 12px 0;
  border-radius: 60px;
  font-weight: 800;
  font-size: 0.95rem;
  color: #1f6e8c;
  transition: all 0.3s ease;
  text-decoration: none;
  border: 1px solid #cde0ea;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(44, 125, 160, 0.2), transparent);
    transition: left 0.5s ease;
  }
  
  &:hover {
    background: linear-gradient(135deg, #1f6e8c, #1a5f7a);
    color: white;
    border-color: #1f6e8c;
    transform: translateY(-2px);
  }
  
  &:hover::before {
    left: 100%;
  }
`;

const ExtraFeaturesBox = styled.div`
  background: linear-gradient(135deg, rgba(255,255,255,0.98), rgba(255,255,255,0.95));
  border-radius: 48px;
  padding: 32px 36px;
  max-width: 900px;
  width: 100%;
  box-shadow: 0 20px 40px -12px rgba(0, 0, 0, 0.2);
  text-align: center;
  margin-top: 60px;
  transition: all 0.4s ease;
  border: 1px solid rgba(44, 125, 160, 0.3);
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 30px 50px -16px rgba(0, 0, 0, 0.25);
  }
`;

const ExtraFeaturesTitle = styled.h3`
  margin: 12px 0 8px;
  font-size: 1.7rem;
  background: linear-gradient(135deg, #1a4b65, #2c7da0);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  font-weight: 800;
`;

const FeaturesTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  justify-content: center;
  margin-top: 20px;
`;

const FeatureTag = styled.span`
  background: linear-gradient(135deg, #eef2f8, #e6eef5);
  border-radius: 60px;
  padding: 8px 20px;
  font-size: 0.85rem;
  font-weight: 600;
  color: #1f5e7e;
  transition: all 0.3s ease;
  cursor: default;
  
  &:hover {
    background: linear-gradient(135deg, #2c7da0, #1f5e7e);
    color: white;
    transform: translateY(-3px);
  }
`;

const CTAContainer = styled.div`
  background: linear-gradient(135deg, #16657f, #1f8268, #16657f);
  background-size: 200% 200%;
  border-radius: 56px;
  padding: 56px 40px;
  text-align: center;
  margin: 50px 0 60px;
  color: white;
  box-shadow: 0 25px 45px -12px rgba(0, 0, 0, 0.3);
  animation: ${shimmer} 8s ease infinite;
  
  &:hover {
    transform: scale(1.01);
    transition: transform 0.4s ease;
  }
`;

const CTATitle = styled.h3`
  font-size: 2.2rem;
  font-weight: 800;
  margin-bottom: 16px;
  
  @media (max-width: 800px) {
    font-size: 1.8rem;
  }
`;

const CTAText = styled.p`
  font-size: 1.1rem;
  opacity: 0.95;
  margin-bottom: 32px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const CTAButton = styled(Link)`
  background: linear-gradient(135deg, #ffdd99, #ffd48a);
  color: #1e4b65;
  padding: 14px 42px;
  border-radius: 60px;
  font-weight: 800;
  text-decoration: none;
  display: inline-block;
  transition: all 0.3s ease;
  cursor: pointer;
  font-size: 1.05rem;
  
  &:hover {
    background: linear-gradient(135deg, #ffd27a, #ffc95c);
    transform: translateY(-3px) scale(1.02);
    box-shadow: 0 10px 25px rgba(0,0,0,0.2);
  }
`;

const FooterContainer = styled.footer`
  text-align: center;
  padding: 40px 0 50px;
  border-top: 1px solid rgba(100, 180, 210, 0.3);
  color: #c8e7f5;
  font-size: 0.85rem;
  margin-top: 20px;
`;

const FooterLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 32px;
  flex-wrap: wrap;
  margin-bottom: 24px;
`;

const FooterLink = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-3px);
    color: #9ad7f0;
  }
`;

// Robot-shaped WhatsApp button - Fixed and never disappears
const RobotButton = styled.a`
  position: fixed;
  bottom: 30px;
  right: 30px;
  z-index: 999;
  width: 70px;
  height: 70px;
  background: linear-gradient(135deg, #25D366, #128C7E);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  text-decoration: none;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
  transition: all 0.3s cubic-bezier(0.2, 0.9, 0.4, 1.1);
  animation: ${pulseRing} 2s infinite;
  
  &:hover {
    transform: scale(1.1) rotate(5deg);
    box-shadow: 0 15px 35px rgba(37, 211, 102, 0.5);
  }
`;

const RobotIcon = styled.div`
  font-size: 42px;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2));
  animation: ${robotWave} 3s ease-in-out infinite;
  transform-origin: center;
`;

const RobotTooltip = styled.span`
  position: absolute;
  bottom: 85px;
  right: 0;
  background: rgba(0, 0, 0, 0.9);
  backdrop-filter: blur(10px);
  color: #25D366;
  padding: 10px 20px;
  border-radius: 50px;
  font-size: 0.85rem;
  font-weight: 600;
  white-space: nowrap;
  font-family: 'Cairo', sans-serif;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.3);
  opacity: 0;
  transform: translateX(15px);
  transition: all 0.3s ease;
  pointer-events: none;
  letter-spacing: 0.3px;
  border: 1px solid rgba(37, 211, 102, 0.5);
  z-index: 1000;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -8px;
    right: 28px;
    border-width: 8px 8px 0 8px;
    border-style: solid;
    border-color: rgba(0, 0, 0, 0.9) transparent transparent transparent;
  }
  
  ${RobotButton}:hover & {
    opacity: 1;
    transform: translateX(0);
  }
`;

// ==================== Components ====================

const HeroSectionComponent = () => {
  return (
    <HeroSection>
      <Badge>
        <span role="img" aria-label="bot">🤖</span> رواد البوتات الذكية في القطاع الطبي
      </Badge>
      <Title>حلول البوتات الذكية والتحول الرقمي</Title>
      <Subtitle>
        نحن شركة متخصصة في تطوير البوتات الذكية والحلول الرقمية المتكاملة للقطاع الطبي، 
        نقدم أنظمة محادثة ذكية تعمل بالذكاء الاصطناعي لتسهيل حجز المواعيد والاستشارات الطبية 
        والرد على استفسارات المرضى على مدار الساعة.
      </Subtitle>
      <BotHighlight>🤖 بوتات ذكية تعمل بالذكاء الاصطناعي | دعم فوري 24/7</BotHighlight>
    </HeroSection>
  );
};

const PackagesSectionComponent = () => {
  const packages = [
    {
      name: 'بوت المحادثة الأساسي',
      icon: '💬',
      desc: 'بوت دردشة ذكي للرد على الاستفسارات',
      features: [
        'ردود تلقائية على الأسئلة الشائعة',
        'توجيه المرضى للأقسام المناسبة',
        'دعم فني لمدة شهر',
        'سهل التثبيت على الموقع',
        'تقارير أسبوعية'
      ],
      price: '1,500',
      period: 'EGP / شهر',
      note: 'بدون رسوم إضافية',
      delay: '0.05s'
    },
    {
      name: 'الباقة القياسية +نظام حجز',
      icon: '📅',
      desc: 'نظام حجز مواعيد  بالكامل',
      features: [
        'حجز مواعيد تلقائي 24/7',
        '  موقع + داش بورد ',
        '   5 صفحات',
        'إدارة قوائم الانتظار',
        ' SEO اساسي'
      ],
      price: '2,500',
      period: 'EGP / شهر',
      note: 'يقلل وقت الانتظار بنسبة 70%',
      popular: true,
      delay: '0.1s'
    },
    {
      name: ' الباقة الاساسية ',
      icon: '🩺',
      desc: 'استشارات أولية بالذكاء الاصطناعي',
      features: [
        '  موقع بسيط',
        '3 صفحات ',
        '  دعم شهر',
      
      ],
      price: '3,200',
      period: 'EGP / شهر',
      note: 'مدرب على آلاف الحالات الطبية',
      delay: '0.15s'
    },
    {
      name: 'بوت متعدد القنوات',
      icon: '📱',
      desc: 'بوت موحد لجميع المنصات',
      features: [
        'يعمل على واتساب وفيسبوك وانستجرام',
        'موقع وتطبيق موحد',
        'مركز تحكم واحد',
        'ردود ذكية متقدمة',
        'تقارير وتحليلات'
      ],
      price: '4,200',
      period: 'EGP / شهر',
      note: 'تغطية كاملة لكل القنوات',
      delay: '0.2s'
    },
    {
      name: 'بوت المتابعة والعناية',
      icon: '💙',
      desc: 'متابعة المرضى بعد الخدمة',
      features: [
        'تذكيرات بالمتابعة والعلاج',
        'استبيانات رضا المرضى',
        'تقييم جودة الخدمة',
        'متابعة الالتزام بالعلاج',
        'إشعارات دورية'
      ],
      price: '2,800',
      period: 'EGP / شهر',
      note: 'يزيد رضا المرضى بنسبة 85%',
      delay: '0.25s'
    },
    {
      name: 'بوت التحليلات والتقارير',
      icon: '📊',
      desc: 'بوت ذكي لتقارير الأداء',
      features: [
        'تحليلات فورية لأداء العيادة',
        'تقارير يومية/شهرية',
        'مؤشرات الأداء الرئيسية',
        'توقعات الإقبال والمواعيد',
        'لوحة تحكم متقدمة'
      ],
      price: '3,500',
      period: 'EGP / شهر',
      note: 'اتخاذ قرارات مبنية على البيانات',
      delay: '0.3s'
    },
    {
      name: 'بوت الذكاء الاصطناعي المتقدم',
      icon: '🧠',
      desc: 'بوت بتقنيات AI المتطورة',
      features: [
        'معالجة اللغة الطبيعية المتقدمة',
        'تعلم ذاتي وتحسين مستمر',
        'تحليل المشاعر والاستجابات',
        'تكامل مع أنظمة الذكاء الاصطناعي',
        'دعم صوتي ومحادثة نصية',
        'تخصيص كامل للعلامة التجارية'
      ],
      price: '5,900',
      period: 'EGP / شهر',
      note: 'أحدث تقنيات الذكاء الاصطناعي',
      delay: '0.35s'
    },
    {
      name: 'بوت الأمان والخصوصية الطبية',
      icon: '🔒',
      desc: 'بوت متوافق مع HIPAA',
      features: [
        'تشفير شامل للبيانات الطبية',
        'متوافق مع معايير HIPAA',
        'سجلات محادثة آمنة',
        'صلاحيات متعددة المستويات',
        'مراجعات أمان دورية',
        'ضمان خصوصية المرضى'
      ],
      price: '6,500',
      period: 'EGP / شهر',
      note: 'أعلى معايير الأمان الطبي',
      delay: '0.4s'
    },
   
   
  ];

  return (
    <PackagesSection>
      <SectionTitle>🤖 باقات البوتات الذكية للقطاع الطبي</SectionTitle>
      <SectionDescription>
        اختر البوت المناسب لعيادتك – أنظمة محادثة ذكية تعمل بالذكاء الاصطناعي لتسهيل التواصل مع المرضى 
        وتحسين تجربة الحجز والمتابعة
      </SectionDescription>

      <PackagesGrid>
        {packages.map((pkg, index) => (
          <PackageCard key={index} popular={pkg.popular} delay={pkg.delay}>
            {pkg.popular && <PopularRibbon>الأكثر طلباً</PopularRibbon>}
            <PackageIcon>{pkg.icon}</PackageIcon>
            <PackageName>{pkg.name}</PackageName>
            <PackageDesc>
              <span>🤖</span> {pkg.desc}
            </PackageDesc>
            <FeaturesList>
              {pkg.features.map((feature, idx) => (
                <FeatureItem key={idx}>
                  <span>✓</span> {feature}
                </FeatureItem>
              ))}
            </FeaturesList>
            <Price>
              {pkg.price} <PriceSpan>{pkg.period}</PriceSpan>
            </Price>
            <PriceNote>⏱️ {pkg.note}</PriceNote>
            <ButtonStart to="/contact">اطلب الباقة الآن ←</ButtonStart>
          </PackageCard>
        ))}
      </PackagesGrid>

      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <ExtraFeaturesBox>
          <div style={{ fontSize: '2.5rem', color: '#2c7da0' }}>🤖</div>
          <ExtraFeaturesTitle>جميع باقات البوتات تشمل</ExtraFeaturesTitle>
          <FeaturesTags>
            <FeatureTag>دعم فني 24/7</FeatureTag>
            <FeatureTag>تحديثات مستمرة</FeatureTag>
            <FeatureTag>تدريب على الاستخدام</FeatureTag>
            <FeatureTag>تسليم خلال 3 أيام</FeatureTag>
            <FeatureTag>تكامل مع أنظمة العيادات</FeatureTag>
          </FeaturesTags>
        </ExtraFeaturesBox>
      </div>
    </PackagesSection>
  );
};

const CTASection = () => {
  return (
    <CTAContainer>
      <CTATitle>🤖 جرب البوت الذكي لعيادتك اليوم</CTATitle>
      <CTAText>
        انضم إلى أكثر من 250 عيادة ومركز طبي يستخدمون بوتاتنا الذكية.
        وفر وقت المرضى، زود كفاءة الحجز، وحسن تجربة العملاء بنسبة تصل إلى 90%
      </CTAText>
      <CTAButton to="/contact">احصل على استشارة مجانية للبوت ←</CTAButton>
    </CTAContainer>
  );
};

const PageFooter = () => {
  return (
    <FooterContainer>
      <FooterLinks>
        <FooterLink>🤖 بوتات ذكية للقطاع الطبي</FooterLink>
        <FooterLink>🎧 دعم فني على مدار الساعة</FooterLink>
        <FooterLink>📊 تحليلات ذكية وتقارير</FooterLink>
        <FooterLink>🔒 أمان وخصوصية طبية</FooterLink>
      </FooterLinks>
      <p>
        © 2025 جميع الحقوق محفوظة | شركة متخصصة في تطوير البوتات الذكية والحلول الرقمية المتكاملة للقطاع الطبي
      </p>
    </FooterContainer>
  );
};

const FloatingRobotWhatsApp = () => {
  return (
    <RobotButton 
      href="https://wa.me/201234567890?text=السلام%20عليكم%20أحتاج%20استشارة%20حول%20البوتات%20الذكية"
      target="_blank"
      rel="noopener noreferrer"
    >
      <RobotIcon>🤖</RobotIcon>
      <RobotTooltip>تواصل مع بوت المساعدة 📲</RobotTooltip>
    </RobotButton>
  );
};

// ==================== Main Component ====================

const Packages = () => {
  return (
    <PageContainer>
      <Container>
        <HeroSectionComponent />
        <PackagesSectionComponent />
        <CTASection />
        <PageFooter />
      </Container>
      <FloatingRobotWhatsApp />
    </PageContainer>
  );
};

export default Packages;