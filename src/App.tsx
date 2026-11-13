import { useState, useEffect } from 'react';
import { ChevronDown, ClipboardCheck, ShieldCheck, KeyRound, Scale, Cloud, Languages, Landmark, Mail, Phone, MapPin, Menu, Linkedin, ExternalLink, X } from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isVisible, setIsVisible] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  useEffect(() => {
    setIsVisible(true);

    const handleScroll = () => {
      const sections = ['hero', 'summary', 'experience', 'achievements', ...(projects.length > 0 ? ['projects'] : []), 'skills', 'education', ...(papers.length > 0 ? ['papers'] : []), ...(certifications.length > 0 ? ['certifications'] : []), 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const summary = "IT GRC Analyst with 10+ years of regulated banking experience spanning IT risk assessments, information security compliance, internal controls, regulatory audits, and access governance. Directed role-based access reviews, security policy implementation, and Bank of Ghana audit preparation while leading a core banking migration and deployment of 17+ ATMs. Combines 2,400 hours of cybersecurity training, PECB ISO/IEC 27001 Provisional Implementer and CompTIA Security+ credentials with hands-on AWS/Azure security control assessments and risk remediation.";

  const experience = [
    {
      company: "Geocento Limited",
      role: "Cybersecurity Compliance & Risk Analyst Intern",
      location: "Remote, United Kingdom",
      dates: "Sep 2026 – Present",
      highlights: [
        "Conduct evidence-based security control assessments for a B2B SaaS platform, evaluating AWS cloud infrastructure, Kubernetes/EKS, API security, CI/CD pipelines, Infrastructure as Code (IaC), and credential management.",
        "Evaluate Identity and Access Management (IAM) controls, including Multi-Factor Authentication (MFA), least-privilege access, authentication, authorization, and credential security across AWS environments.",
        "Identify security vulnerabilities and control deficiencies across application, cloud, and payment systems, documenting risk findings and prioritizing remediation recommendations.",
        "Develop security gap analyses and control assessment documentation, translating technical findings into actionable recommendations for information security compliance, risk mitigation, and security governance."
      ]
    },
    {
      company: "Ginkgo International Food & Cosmetic Shop",
      role: "General Manager",
      location: "Bremen, Germany",
      dates: "Jun 2022 – Dec 2023",
      highlights: [
        "Managed Point-of-Sale (POS) system administration, vendor agreements, financial documentation, and business operations, negotiating supplier contracts that reduced inventory costs by 20%."
      ]
    },
    {
      company: "Amazon Großenkneten GmbH",
      role: "Fulfillment Associate",
      location: "Germany",
      dates: "Jan 2024 – Sep 2025",
      highlights: [
        "Executed standardized operational procedures, safety compliance protocols, and quality control requirements within a KPI-driven logistics environment."
      ]
    },
    {
      company: "WatchWater Ghana",
      role: "International Sales Representative",
      location: "Accra, Ghana",
      dates: "Aug 2020 – Jun 2022",
      highlights: [
        "Expanded cross-border revenue by 35% and acquired 12 key accounts, managing international client relationships and commercial agreements."
      ]
    },
    {
      company: "OmniBank Ghana Ltd (now OmniBSIC Bank Ghana)",
      role: "Operations Manager",
      location: "Accra, Ghana",
      dates: "Jun 2013 – Aug 2020",
      highlights: [
        "Conducted IT risk assessments across regulated banking operations, identifying security risks, documenting control deficiencies, and implementing operational security policies.",
        "Defined role-based access entitlements and reviewed employee permissions against security policies, strengthening Role-Based Access Control (RBAC), access governance, and user access compliance.",
        "Prepared audit-ready evidence for Bank of Ghana regulatory inspections, supporting internal control assessments, Anti-Money Laundering (AML), Know Your Customer (KYC), and regulatory compliance reviews.",
        "Led core banking system modernization and rollout of 17+ ATMs with Quipu GmbH, managing vendor requirements, data migration controls, security validation, integration testing, and operational handover.",
        "Drafted regulatory policy documentation for the 2015-2016 commercial banking license application, supporting adherence to Bank of Ghana regulatory requirements.",
        "Managed ATM incident response and business continuity controls while delivering organization-wide security awareness training on information security policies and operational risk management."
      ]
    },
    {
      company: "ProCredit Savings and Loans Ltd",
      role: "Deputy Head, Business Support & Organisation",
      location: "Accra, Ghana",
      dates: "Mar 2004 – May 2013",
      highlights: [
        "Implemented operational risk management and regulatory compliance procedures under ProCredit Group governance frameworks, strengthening internal controls and banking risk oversight.",
        "Coordinated internal and external audits across key banking business units, preparing audit evidence, reviewing operational controls, and supporting regulatory compliance assessments.",
        "Facilitated business requirements gathering, data migration oversight, system security assessments, application testing, and handover documentation as part of the 2013 enterprise-wide core banking migration.",
        "Directed operational and compliance training for 15+ employees while overseeing banking operations handling €50K+ in daily transactions, maintaining financial controls and regulatory procedures."
      ]
    }
  ];

  const achievements = [
    "Led core banking system modernization and the rollout of 17+ ATMs with Quipu GmbH at OmniBank Ghana.",
    "Prepared audit-ready evidence for Bank of Ghana regulatory inspections and drafted policy documentation for the 2015-2016 commercial banking license application.",
    "Supported the 2013 enterprise-wide core banking migration at ProCredit, covering requirements, data migration oversight, security assessments, and testing.",
    "Directed operational and compliance training for 15+ employees while overseeing €50K+ in daily banking transactions.",
    "Expanded cross-border revenue by 35% and acquired 12 key accounts at WatchWater Ghana.",
    "Completed 2,400 hours of cybersecurity training with a GRC specialisation at Cybersteps GmbH."
  ];

  const projects: { title: string; category: string; description: string }[] = [
    {
      title: "Cloud Security Governance & Policy-as-Code",
      category: "Azure · CSA CCM · OPA/Rego",
      description: "Assessed Azure cloud storage security against CSA Cloud Controls Matrix (CCM), remediated public access, logging, and insecure connection vulnerabilities, and automated security policy enforcement using Open Policy Agent (OPA/Rego)."
    },
    {
      title: "LLMantis – AI Security & Compliance Governance",
      category: "Group Project",
      description: "Mapped data privacy, access governance, audit logging, and regulatory compliance requirements into an evidence-based AI security governance framework comprising 17 technical security controls."
    },
    {
      title: "KYB/KYC Compliance & Access Governance Platform",
      category: "RBAC · IAM · Audit Logging",
      description: "Developed a simulated KYB/KYC onboarding MVP incorporating Role-Based Access Control (RBAC), multi-tenant data isolation, JWT authentication, and audit logging to demonstrate Identity and Access Management (IAM) and AML/KYC compliance workflows."
    }
  ];

  const skillCategories = [
    {
      icon: ClipboardCheck,
      title: 'IT Governance, Risk & Compliance',
      skills: ['IT Risk Assessment', 'IT Risk Management', 'Regulatory Compliance', 'Internal Controls', 'Security Control Assessment', 'Security Policy Management', 'Audit Evidence Preparation', 'Regulatory Audits', 'Control Gap Analysis', 'Risk Remediation']
    },
    {
      icon: ShieldCheck,
      title: 'Information Security & Compliance',
      skills: ['ISO/IEC 27001', 'Information Security Management Systems (ISMS)', 'Information Security Controls', 'Security Awareness Training', 'Business Continuity Management', 'Incident Response', 'Vulnerability Assessment']
    },
    {
      icon: KeyRound,
      title: 'Identity & Access Management',
      skills: ['Microsoft Entra ID', 'Role-Based Access Control (RBAC)', 'Identity Governance', 'User Access Reviews', 'Access Entitlement Management', 'Least Privilege', 'Multi-Factor Authentication (MFA)', 'Credential Management']
    },
    {
      icon: Scale,
      title: 'Frameworks & Regulations',
      skills: ['NIST Cybersecurity Framework (CSF)', 'General Data Protection Regulation (GDPR)', 'NIS2 Directive', 'CSA Cloud Controls Matrix (CCM)', '(Working Knowledge)']
    },
    {
      icon: Cloud,
      title: 'Cloud Security & Technical Exposure',
      skills: ['Microsoft Azure', 'Amazon Web Services (AWS)', 'Kubernetes/EKS', 'API Security', 'CI/CD Security', 'Infrastructure as Code (IaC)', 'Open Policy Agent (OPA/Rego)', 'Policy-as-Code']
    },
    {
      icon: Languages,
      title: 'Languages',
      skills: ['English (Native)', 'Twi (Native)', 'German (B2)']
    }
  ];

  const education = [
    {
      school: "Cybersteps GmbH",
      degree: "Cybersecurity Analyst Professional – GRC Specialisation",
      location: "Berlin, Germany",
      dates: "Aug 2025 – Aug 2026",
      details: "2,400 hours · Completed"
    },
    {
      school: "Ghana Institute of Management and Public Administration (GIMPA)",
      degree: "Master of Business Administration (MBA), Project Management",
      location: "Accra, Ghana",
      dates: "2016 – 2019",
      details: "German Academic Recognition: KMK, Master's Level"
    },
    {
      school: "University of Professional Studies, Accra (UPSA)",
      degree: "Bachelor of Science (BSc), Marketing",
      location: "Accra, Ghana",
      dates: "2009 – 2011",
      details: ""
    },
    {
      school: "Chartered Institute of Marketing (CIM)",
      degree: "Advanced Certificate in Marketing",
      location: "United Kingdom",
      dates: "",
      details: ""
    },
    {
      school: "London Centre of Marketing",
      degree: "Diploma in Marketing",
      location: "",
      dates: "2004 – 2005",
      details: ""
    }
  ];
  const papers: { title: string; publication: string; year: string; link: string }[] = [];

  const certifications: { title: string; platform: string; description: string; link: string }[] = [
    { title: "ISO/IEC 27001 Provisional Implementer", platform: "PECB", description: "", link: "" },
    { title: "CompTIA Security+ (SY0-701)", platform: "CompTIA", description: "", link: "" },
    { title: "Microsoft Certified: Identity and Access Administrator Associate (SC-300)", platform: "Microsoft", description: "", link: "" },
    { title: "Microsoft Certified: Security, Compliance and Identity Fundamentals (SC-900)", platform: "Microsoft", description: "", link: "" },
    { title: "Microsoft Certified: Azure Fundamentals (AZ-900)", platform: "Microsoft", description: "", link: "" },
    { title: "CompTIA Tech+", platform: "CompTIA", description: "", link: "" },
    { title: "Cybersecurity Analyst Professional – GRC Specialisation", platform: "Cybersteps GmbH", description: "", link: "" }
  ];

  return (
    <div className="min-h-screen bg-cream overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-cream/95 backdrop-blur-md border-b border-brown/20">
        <div className="max-w-6xl mx-auto px-6 py-4">

          <div className="relative flex items-center justify-center">

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center justify-center gap-5 lg:gap-8 flex-shrink-0">
              {[
                { id: 'hero', label: 'Home' },
                { id: 'summary', label: 'Summary' },
                { id: 'experience', label: 'Experience' },
                { id: 'achievements', label: 'Achievements' },
                ...(projects.length > 0 ? [{ id: 'projects', label: 'Projects' }] : []),
                { id: 'skills', label: 'Skills' },
                { id: 'education', label: 'Education' },
                ...(papers.length > 0 ? [{ id: 'papers', label: 'Papers' }] : []),
                ...(certifications.length > 0 ? [{ id: 'certifications', label: 'Certifications' }] : []),
                { id: 'contact', label: 'Contact' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-light tracking-wide transition-colors duration-300 ${activeSection === item.id
                    ? "text-black font-medium"
                    : "text-brown hover:text-black"
                    }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile Hamburger */}
            <button
              className="absolute right-0 md:hidden text-black"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>

          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 flex flex-col space-y-4 border-t border-brown/20 pt-4">

              {[
                { id: 'hero', label: 'Home' },
                { id: 'summary', label: 'Summary' },
                { id: 'experience', label: 'Experience' },
                { id: 'achievements', label: 'Achievements' },
                ...(projects.length > 0 ? [{ id: 'projects', label: 'Projects' }] : []),
                { id: 'skills', label: 'Skills' },
                { id: 'education', label: 'Education' },
                ...(papers.length > 0 ? [{ id: 'papers', label: 'Papers' }] : []),
                ...(certifications.length > 0 ? [{ id: 'certifications', label: 'Certifications' }] : []),
                { id: 'contact', label: 'Contact' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    scrollToSection(item.id)
                    setMobileMenuOpen(false)
                  }}
                  className="text-left text-brown hover:text-black transition"
                >
                  {item.label}
                </button>
              ))}

            </div>
          )}

        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="pt-32 pb-20 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <div className={`text-center transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>

            <div className="mb-12">
              <img
                src="images/image.png"
                alt="Kwabena Asare Gavor"
                className="w-36 h-36 rounded-full mx-auto mb-6 object-cover border-4 border-brown/30 shadow-lg"
              />
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-display text-black mb-6 tracking-wide leading-tight break-words">
              KWABENA ASARE GAVOR
            </h1>
            <div className="text-lg text-brown mb-2 font-light tracking-widest">
              IT GRC Analyst · IT Risk Management · Information Security Compliance · ISO/IEC 27001
            </div>
            <div className="text-sm uppercase tracking-[0.18em] sm:tracking-[0.3em] text-brown/80 mb-1">
              BREMEN, GERMANY
            </div>
            <div className="text-xs uppercase tracking-[0.18em] text-brown/60 mb-8">
              Open to relocation across Germany
            </div>
            <div className="w-24 h-0.5 bg-brown mx-auto mb-10"></div>
            <p className="text-lg text-brown mb-10 max-w-4xl mx-auto leading-relaxed font-light">
              {summary}
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button
                onClick={() => scrollToSection('experience')}
                className="bg-black text-white px-10 py-4 font-light tracking-wide hover:bg-brown transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                🚀 VIEW EXPERIENCE
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="border border-black text-black px-10 py-4 font-light tracking-wide hover:bg-black hover:text-white transition-all duration-300"
              >
                📬 CONTACT
              </button>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-16 text-center">
            {[
              { label: 'REGULATED BANKING', value: '10+ yrs', detail: 'IT risk, controls & regulatory audits' },
              { label: 'CYBERSECURITY TRAINING', value: '2,400 hrs', detail: 'GRC specialisation · Cybersteps' },
              { label: 'ATMS DEPLOYED', value: '17+', detail: 'Alongside a core banking modernization' }
            ].map((stat, index) => (
              <div key={index} className="bg-white p-6 rounded-sm shadow-sm border border-brown/10">
                <div className="text-xs tracking-widest text-brown/70 mb-2">{stat.label}</div>
                <div className="text-3xl font-display text-black mb-1">{stat.value}</div>
                <div className="text-sm text-brown font-light">{stat.detail}</div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <ChevronDown
              className="w-6 h-6 text-brown/60 mx-auto animate-bounce cursor-pointer hover:text-black transition-colors"
              onClick={() => scrollToSection('summary')}
            />
          </div>
        </div>
      </section>

      {/* Summary Section */}
      <section id="summary" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display text-black mb-8 tracking-wide leading-tight break-words">SUMMARY</h2>
            <p className="text-lg text-brown max-w-3xl mx-auto font-light">
              A decade of regulated banking controls, now applied to modern cloud security and compliance.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                icon: Landmark,
                title: 'IT Risk & Compliance',
                detail: 'Run IT risk assessments, internal control reviews, and audit evidence preparation for regulators such as the Bank of Ghana.'
              },
              {
                icon: KeyRound,
                title: 'Access Governance',
                detail: 'Define role-based access entitlements, review user permissions, and evaluate MFA and least-privilege IAM controls.'
              },
              {
                icon: Cloud,
                title: 'Cloud Security Controls',
                detail: 'Assess AWS and Azure environments against ISO/IEC 27001 and CSA CCM, documenting gaps and prioritising remediation.'
              }
            ].map((card, index) => (
              <div key={index} className="bg-cream p-8 rounded-sm shadow-sm border border-brown/10 text-center">
                <div className="w-14 h-14 bg-black mx-auto mb-6 flex items-center justify-center">
                  <card.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-display text-black mb-4 tracking-wide">{card.title.toUpperCase()}</h3>
                <p className="text-brown leading-relaxed font-light">{card.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display text-black mb-8 tracking-wide leading-tight break-words">WORK EXPERIENCE</h2>
            <div className="w-16 h-0.5 bg-brown mx-auto mb-8"></div>
            <p className="text-lg text-brown max-w-3xl mx-auto font-light">
              IT risk, information security compliance, and banking operations across Ghana, Germany, and the UK.
            </p>
          </div>
          <div className="space-y-10">
            {experience.map((role, index) => (
              <div key={index} className="bg-white p-8 rounded-sm shadow-sm border border-brown/10">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-display text-black tracking-wide">{role.role}</h3>
                    <p className="text-brown font-medium">{role.company}</p>
                  </div>
                  <div className="text-sm text-brown/80 font-light mt-2 md:mt-0">
                    {role.location} · {role.dates}
                  </div>
                </div>
                <ul className="space-y-3">
                  {role.highlights.map((highlight, i) => (
                    <li key={i} className="text-brown leading-relaxed font-light flex items-start">
                      <span className="text-brown mr-3">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display text-black mb-6 tracking-wide leading-tight break-words">SELECTED ACHIEVEMENTS</h2>
            <div className="w-16 h-0.5 bg-brown mx-auto mb-6"></div>
          </div>
          <div className="bg-cream p-8 rounded-sm shadow-sm border border-brown/10">
            <ul className="space-y-3">
              {achievements.map((item, i) => (
                <li key={i} className="text-brown leading-relaxed font-light flex items-start">
                  <span className="text-brown mr-3">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      {projects.length > 0 && (
      <section id="projects" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display text-black mb-8 tracking-wide leading-tight break-words">PROJECTS</h2>
            <div className="w-16 h-0.5 bg-brown mx-auto mb-8"></div>
            <p className="text-lg text-brown max-w-2xl mx-auto font-light">
              Hands-on cloud security, AI governance, and access governance work.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-cream p-6 rounded-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="mb-3">
                  <span className="text-xs font-medium text-brown bg-white px-3 py-1 tracking-wide">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-xl font-display text-black mb-3 tracking-wide leading-tight">
                  {project.title}
                </h3>
                <p className="text-brown leading-relaxed font-light text-sm">
                  {project.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-brown font-light">
              Interested in detailed methodology or technical documentation?
              <button
                onClick={() => scrollToSection('contact')}
                className="text-black ml-1 font-regular italic"
              >
                Reach out for comprehensive project details.
              </button>
            </p>
          </div>
        </div>
      </section>

      )}

      {/* Skills Section */}
      <section id="skills" className="py-24 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display text-black mb-8 tracking-wide leading-tight break-words">SKILLS</h2>
            <div className="w-16 h-0.5 bg-brown mx-auto mb-8"></div>
            <p className="text-lg text-brown max-w-2xl mx-auto font-light">
              GRC, information security, identity and access management, and cloud security expertise
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {skillCategories.map((category, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-black mx-auto mb-8 flex items-center justify-center">
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-display text-black mb-6 tracking-wide">{category.title.toUpperCase()}</h3>
                <ul className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <li key={skillIndex} className="text-sm text-brown font-light">
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section id="education" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display text-black mb-6 tracking-wide leading-tight break-words">EDUCATION</h2>
            <div className="w-16 h-0.5 bg-brown mx-auto mb-6"></div>
          </div>
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div key={index} className="bg-cream p-8 rounded-sm shadow-sm border border-brown/10">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-display text-black tracking-wide">{edu.school}</h3>
                    <p className="text-brown font-medium">{edu.degree}</p>
                  </div>
                  {(edu.location || edu.dates) && (
                    <div className="text-sm text-brown/80 font-light mt-2 md:mt-0">
                      {edu.location}{edu.location && edu.dates ? ' · ' : ''}{edu.dates}
                    </div>
                  )}
                </div>
                {edu.details && (
                  <p className="text-brown leading-relaxed font-light">
                    {edu.details}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Papers Published Section */}
      {papers.length > 0 && (
      <section id="papers" className="py-24 bg-cream">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display text-black mb-6 tracking-wide leading-tight break-words">PAPERS PUBLISHED</h2>
            <div className="w-16 h-0.5 bg-brown mx-auto mb-6"></div>
            <p className="text-lg text-brown max-w-2xl mx-auto font-light">
              Research and publications in AI, machine learning, and technology.
            </p>
          </div>
          <div className="space-y-8">
            {papers.map((paper, index) => (
              <div key={index} className="bg-white p-8 rounded-sm shadow-sm border border-brown/10">
                <h3 className="text-xl font-display text-black tracking-wide mb-2">{paper.title}</h3>
                <p className="text-brown font-medium mb-2">{paper.publication} · {paper.year}</p>
                <a
                  href={paper.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brown font-light hover:text-black transition-colors hover:underline inline-flex items-center"
                >
                  View Paper <ExternalLink className="w-4 h-4 ml-2 inline-block" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
      )}

      {/* Certifications Section */}
      {certifications.length > 0 && (
      <section id="certifications" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display text-black mb-6 tracking-wide leading-tight break-words">CERTIFICATIONS</h2>
            <div className="w-16 h-0.5 bg-brown mx-auto mb-6"></div>
          </div>
          <div className="space-y-8">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-cream p-8 rounded-sm shadow-sm border border-brown/10">
                <h3 className="text-2xl font-display text-black tracking-wide">{cert.title}</h3>
                <p className="text-brown font-medium">{cert.platform}</p>
                {cert.description && <p className="text-brown leading-relaxed font-light">{cert.description}</p>}
                {cert.link && (
                  <a href={cert.link} target="_blank" rel="noopener noreferrer" className="text-brown leading-relaxed font-light hover:text-black transition-colors hover:underline">
                    View Certificate <ExternalLink className="w-4 h-4 ml-2 inline-block" />
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      )}
      {/* Contact Section */}
      <section id="contact" className="py-24 bg-black text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display mb-8 tracking-wide leading-tight break-words">CONTACT</h2>
            <div className="w-16 h-0.5 bg-brown mx-auto mb-8"></div>
            <p className="text-xl text-white/80 max-w-3xl mx-auto font-light">
              Let’s discuss IT GRC, IT risk management, and information security compliance opportunities.
            </p>
          </div>

          <div className="flex flex-col items-center space-y-8 max-w-md mx-auto">
            <div className="flex items-center">
              <MapPin className="w-6 h-6 text-brown mr-6" />
              <span className="text-white/80 font-light">Bremen, Germany · Open to relocation across Germany</span>
            </div>
            <div className="flex items-center">
              <Phone className="w-6 h-6 text-brown mr-6" />
              <a
                href="tel:+4917620544672"
                className="text-white/80 font-light hover:text-white transition-colors"
              >
                +49 176 20544672
              </a>
            </div>
            <div className="flex items-center">
              <Linkedin className="w-6 h-6 text-brown mr-6" />
              <a
                href="https://www.linkedin.com/in/kwabena-asare-gavor/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 font-light hover:text-white transition-colors"
              >
                LinkedIn
              </a>
            </div>
            <div className="flex items-center">
              <Mail className="w-6 h-6 text-brown mr-6" />
              <a
                href="mailto:Kwabenaasaregavor67@gmail.com"
                className="text-white/80 font-light hover:text-white transition-colors"
              >
                Kwabenaasaregavor67@gmail.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brown text-white/80 py-8">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="font-light tracking-wide">
            © 2026 Kwabena Asare Gavor · IT GRC & Information Security Compliance.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
