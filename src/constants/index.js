import {
  iconPass,
  iconShield,
  iconKey,
  iconFirewall,
  datariskIcon,
  secAssessIcon,
  secDesignIcon,
  solImpleIcon,
  auditIcon,
  manServIcon,
  execMember,
  discordBlack,
  facebook,
  instagram,
  notification2,
  notification3,
  notification4,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  telegram,
  twitter,
  isoLogo,
  teslaLogo,
  microsoftLogo,
  depTourismLogo,
  accentureLogo,
  robot6,
} from "../../src/assets";

export const navigation = [
  {
    id: "0",
    title: "Services",
    url: "#services",
  },
  {
    id: "1",
    title: "About",
    url: "#about",
  },
{
    id: "2",
    title: "Our Work",
    url: "#ourwork",
  },
  {
    id: "3",
    title: "Contact Us",
    url: "#contact-us",
  },
  
  // {
  //   id: "4",
  //   title: "New account",
  //   url: "#signup",
  //   onlyMobile: true,
  // },
];

export const heroIcons = [iconFirewall, iconKey, iconPass, iconShield];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [depTourismLogo, accentureLogo, microsoftLogo, isoLogo, teslaLogo];


export const ourwork = [
  {
    id: "0",
    title: "Generative AI",
    text: "Implementation of Data Loss Prevention and the relevant policies to ensure the use of Generative AI doesn't divulge or leake sensitive patient information of any (PII). This also ensures compliance with the relevant healthcare regulations.",
    topic: "Gen AI | DLP | COMPLIANCE",
    industry: "Healthcare",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "Gamification of Cyber Awareness and Training",
    text: "Add game-like elements, such as badges or leaderboards, to incentivize users to identify and report potential phishing emails and always be concious about their role in shielding against cyber-attacks.",
    topic: "Awareness Training | Phishing",
    industry : "Military",
    imageUrl: roadmap2,
    
  },
  {
    id: "2",
    title: "Security Outsourcing",
    text: "Allow users to customize the chatbot's appearance and behavior, making it more engaging and fun to interact with.",
    topic: "Managed Services ",
    industry : "Government",
    imageUrl: roadmap3,
    
  },
  {
    id: "3",
    title: "Integration with APIs",
    text: "Allow the chatbot to access external data sources, such as weather APIs or news APIs, to provide more relevant recommendations.",
    topic: "Identity Management",
    industry: "Insurance",
    imageUrl: roadmap4,
    colorful: true,

  },
];

export const aboutText =
  "SyberKonsult was founded to fulfill the need of state-of-the-art cybersecurity solutions in response to the rapid emergence of new technologies across industries. We operate as a propriety limited company with a R&D partnership with Invidum Technologies for cybersecurity products. Our team consists of IT Risk specialists and IT Security experts who deliver the best risk management and security implementations, respectively. ";

export const aboutContent = [
  {
    id: "0",
    title: "Build a customer-centric culture.",
  },
  {
    id: "1",
    title: "Employ the best people",
  },
  {
    id: "2",
    title: "Create distinguishable market value.",
  },
  {
    id: "3",
    title: "Address cyber threats as they emerge.",
  },
];

export const teamPics = [
  {
    id: "0",
    title: "CEO",
    icon: execMember,
    width: 'auto',
    height: 'auto',
  },
  {
    id: "1",
    title: "CTO",
    icon: execMember,
    width: 'auto',
    height: 'auto',
  },
  {
    id: "2",
    title: "CFO",
    icon: execMember,
    width: 'auto',
    height: 'auto',
  },
  {
    id: "3",
    title: "Legal",
    icon: execMember,
    width: 'auto',
    height: 'auto',
  },
  // {
  //   id: "4",
  //   title: "HR",
  //   icon: photoshop,
  //   width: 34,
  //   height: 34,
  // },

];

export const pricing = [
  {
    id: "0",
    title: "Basic",
    description: "AI chatbot, personalized recommendations",
    price: "0",
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
  {
    id: "1",
    title: "Premium",
    description: "Advanced AI chatbot, priority support, analytics dashboard",
    price: "9.99",
    features: [
      "An advanced AI chatbot that can understand complex queries",
      "An analytics dashboard to track your conversations",
      "Priority support to solve issues quickly",
    ],
  },
  {
    id: "2",
    title: "Enterprise",
    description: "Custom AI chatbot, advanced analytics, dedicated account",
    price: null,
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
];

export const services = [
  {
    id: "0",
    title: "Data and Risk Management",
    text: "SyberKonsult specialises in helping organizations embrace sound data risk management practices to help keep their data safe and that access to it is carefully controlled and auditable. ",
    iconUrl: datariskIcon,
    imageUrl: robot6,
  },
  {
    id: "1",
    title: "Security Assessments",
    text: "The testing or evaluation of security controls to determine the extent to which the controls are implemented correctly, operating as intended, and producing the desired outcome with respect to meeting the security requirements.",
    iconUrl: secAssessIcon,
    imageUrl: robot6,
    light: true,
  },
  {
    id: "2",
    title: "Architecture Design",
    text: "Strategic design of systems, policies and technologies to protect IT and business assets from cyberthreats. A well-designed security architecture aligns cybersecurity with the unique business goals and risk management profile of the organization.",
    iconUrl: secDesignIcon,
    imageUrl: robot6,
  },
  {
    id: "3",
    title: "Solutions Implementations",
    text: "Choosing the most effective and suitable security solutions to strengthen the security of a network. Implementing security products and optimizing the configuration to work properly requires a sophisticated level of security expertise",
    iconUrl: solImpleIcon,
    imageUrl: robot6,
    light: true,
  },
  {
    id: "4",
    title: "Managed Services",
    text: "The practice of outsourcing the responsibility for maintaining, and anticipating need for, a range of processes and functions, ostensibly for the purpose of improved operations and reduced budgetary expenditures through the reduction of directly-employed staff.",
    iconUrl: manServIcon,
    imageUrl: robot6,
  },
  {
    id: "5",
    title: "Audit and Review",
    text: "To assist clients by providing independent risk- and compliance-based audit assessments of their compliance with security objectives, policies, standards and processes such as Security Policy Framework, Cyber Security Strategy, Maturity Models, and relevant regulations",
    iconUrl: auditIcon,
    imageUrl: robot6,
  },
];

export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "#",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];

export const footerlinks = [
  {
    id: "0",
    title: "Privacy Policy",
    url: "#",
  },
  {
    id: "1",
    title: "Terms of Service",
    url: "#",
  },
  {
    id: "2",
    title: "Careers",
    url: "#",
  },
  {
    id: "3",
    title: "Blog",
    url: "#",
  },
];
