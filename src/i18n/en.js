const en = {
  langName: "English",
  site: {
    name: "Daniel Werner",
    shortName: "Daniel",
    role: "Senior Software Engineer",
    location: "Rio Grande do Sul, Brazil",
    footerBlurb: "Senior Software Engineer based in Rio Grande do Sul, Brazil.",
    portfolioLabel: "Daniel's Portfolio",
    rights: "All rights reserved.",
  },

  nav: {
    home: "Home",
    about: "About",
    education: "Education",
    experience: "Experience",
    skills: "Skills",
    projects: "Projects",
    certificates: "Certifications",
    contact: "Contact",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    switchLang: "Change language",
  },

  footer: {
    contact: "Contact",
    quickLinks: "Quick Links",
    social: "Social",
    emailAria: "Email Daniel Werner",
    callAria: "Call Daniel Werner",
    github: "GitHub profile",
    linkedin: "LinkedIn profile",
    email: "Email",
  },

  search: {
    button: "Search ...",
    placeholder: "Search pages...",
    empty: "No results found.",
    items: [
      {
        title: "Home",
        description: "Go to the welcome page",
        path: "/",
        keywords: ["home", "start", "welcome", "cv", "resume", "daniel", "daniel werner", "dgwerner", "software engineer", "full stack"],
      },
      {
        title: "About",
        description: "Learn more about me and my background",
        path: "/about",
        keywords: ["about", "bio", "background", "profile", "cv", "resume", "daniel", "werner", "senior software engineer"],
      },
      {
        title: "Education",
        description: "Academic background and languages",
        path: "/education",
        keywords: ["education", "college", "university", "degree", "it management", "unisinos", "languages", "english"],
      },
      {
        title: "Experience",
        description: "Check out my professional experience",
        path: "/experience",
        keywords: ["experience", "career", "work", "jobs", "mtp", "dgwo", "gx2", "invitation homes", "opservices"],
      },
      {
        title: "Skills",
        description: "Explore my technical skills and expertise",
        path: "/skills",
        keywords: ["skills", "technologies", "tools", "python", "typescript", "node", "react", "aws", "kafka", "java", "kotlin", "php"],
      },
      {
        title: "Projects",
        description: "View my projects and repositories",
        path: "/projects",
        keywords: ["projects", "portfolio", "github", "code", "dgwo consult", "saas", "api"],
      },
      {
        title: "Certifications",
        description: "Professional certifications",
        path: "/certificates",
        keywords: ["certifications", "certificates", "mcitp", "sql server"],
      },
      {
        title: "Contact",
        description: "Get in touch with me",
        path: "/contact",
        keywords: ["contact", "email", "message", "whatsapp", "linkedin", "hire", "opportunity", "collaboration"],
      },
    ],
  },

  seo: {
    pages: {
      "/": {
        title: "Daniel Werner - Senior Software Engineer",
        description:
          "Daniel Werner — Senior Software Engineer with 10+ years of experience in Python, Node.js, TypeScript, React, AWS and distributed systems. Rio Grande do Sul, Brazil.",
      },
      "/about": {
        title: "About - Daniel Werner | Senior Software Engineer",
        description:
          "Meet Daniel Werner: senior software engineer and founder of DGWO Consult, experienced in cloud-native architectures, EDA and AI-assisted development.",
      },
      "/projects": {
        title: "Projects - Daniel Werner | Software Engineer",
        description:
          "Projects and repositories by Daniel Werner: APIs, full stack web applications and the DGWO Consult SaaS platform.",
      },
      "/skills": {
        title: "Skills - Daniel Werner | Python, Node.js, AWS, Kafka",
        description:
          "Technical skills of Daniel Werner: Python, FastAPI, Node.js, TypeScript, React, Next.js, AWS, Kafka, microservices, DDD and CI/CD.",
      },
      "/experience": {
        title: "Experience - Daniel Werner | MTP, DGWO, GX2, Invitation Homes",
        description:
          "Professional experience of Daniel Werner at MTP, DGWO Consult, GX2, Invitation Homes and OpServices.",
      },
      "/education": {
        title: "Education - Daniel Werner | IT Management",
        description:
          "Education of Daniel Werner: Bachelor's degree in IT Management, plus languages and certifications.",
      },
      "/certificates": {
        title: "Certifications - Daniel Werner",
        description: "Professional certifications of Daniel Werner.",
      },
      "/contact": {
        title: "Contact - Daniel Werner | Senior Software Engineer",
        description:
          "Get in touch with Daniel Werner for opportunities, projects and collaborations.",
      },
    },
    fallback: {
      title: "Daniel Werner - Senior Software Engineer",
      description: "Portfolio of Daniel Werner — Senior Software Engineer.",
    },
  },

  home: {
    tagline: "Senior Software Engineer",
    headline: "I build scalable cloud systems",
    description:
      "10+ years building software solutions for global organizations, focused on Python, Node.js, TypeScript, React, AWS and event-driven architectures.",
    downloadCv: "Download CV",
    aboutMe: "About Me",
    copyEmail: "Copy email",
    github: "GitHub Projects",
    githubAria: "Visit GitHub profile",
    linkedin: "LinkedIn",
    linkedinValue: "Connect",
    linkedinAria: "Visit LinkedIn profile",
    whatsapp: "Message me",
    whatsappValue: "WhatsApp",
    whatsappAria: "Contact via WhatsApp",
  },

  about: {
    title: "About Me",
    photoAlt: "Photo of Daniel Werner",
    paragraphs: [
      "I'm a senior software engineer with 10+ years of experience building scalable software solutions for global organizations. My foundation includes Python, FastAPI, Node.js, TypeScript, React, Next.js and AWS.",
      "I have experience in distributed systems, event-driven architectures, data-intensive applications, CI/CD and Infrastructure as Code, always focused on reliability and architectural clarity.",
      "I also work with LLM-based coding assistants and AI-assisted workflows, applying prompt and context engineering to implementation, testing, debugging and documentation. I'm the founder of DGWO Consult, where I'm building a SaaS platform for tax automation aimed at accounting firms.",
    ],
    quickFactsTitle: "Quick Facts",
    quickFacts: [
      "Rio Grande do Sul, Brazil",
      "Bachelor's degree in IT Management",
      "English: full professional proficiency",
    ],
    downloadCv: "Download CV",
    mySkills: "My Skills",
    achievementsTitle: "By the Numbers",
    achievements: [
      { title: "10+ years", description: "Of software development experience" },
      { title: "5 companies", description: "Working on large-scale products and platforms" },
      { title: "Fluent English", description: "Remote work with international teams" },
    ],
    interestsTitle: "Areas of Interest",
    interests: [
      "Distributed systems",
      "Cloud-native architecture",
      "AI-assisted development",
      "DDD and event-driven architecture",
      "DevOps and CI/CD",
      "SaaS and tax automation",
    ],
  },

  experience: {
    title: "Professional Experience",
    achievement: "Key achievement",
    items: [
      {
        id: "mtp",
        title: "Senior Full Stack Developer",
        company: "MTP",
        location: "São Paulo, Brazil (remote)",
        period: "09/2025 – Present",
        bullets: [
          "Led a cross-functional Logistics team, delivering data-driven solutions that increased transparency for delivery partners.",
          "Led the development of a near real-time insights platform using Java, Kotlin, Kafka and AWS (SNS, SQS, DynamoDB), enabling partners to track performance metrics and improve service quality.",
          "Designed scalable, resilient, high-performance distributed systems using Domain-Driven Design (DDD) and Event-Driven Architecture (EDA), reducing failures and improving platform reliability.",
          "Collaborated with product, data and operations teams to deliver cloud-native solutions aligned with business goals.",
          "Used LLM-based coding assistants (Claude, GitHub Copilot and Cursor) with prompt and context engineering for implementation, refactoring, debugging, testing and documentation, preserving quality through testing and validation.",
        ],
      },
      {
        id: "dgwo",
        title: "Founder and Senior Software Engineer",
        company: "DGWO Consult",
        location: "Brazil (remote)",
        period: "01/2025 – Present",
        bullets: [
          "Lead the design and development of a SaaS platform for accounting firms, focused on tax automation and identifying tax recovery opportunities.",
          "Built tools to retrieve, extract and process electronic tax documents (NF-e, NFS-e, CT-e and MDF-e XML), reducing manual analysis.",
          "Built tax analysis engines to identify overpaid taxes under Simples Nacional and PIS/COFINS credit opportunities under Lucro Real.",
          "Designed the architecture with microservices and messaging, using asynchronous communication for document ingestion and processing, analysis traceability and report generation.",
          "Defined security and per-firm data isolation requirements, multi-factor authentication and access control.",
          "Applied spec-driven development and AI-agent workflows to structure requirements, delivery contracts, tests and MVP implementation steps.",
        ],
      },
      {
        id: "gx2",
        title: "Senior Full Stack Developer",
        company: "GX2",
        location: "Porto Alegre, Brazil (remote)",
        period: "11/2024 – 09/2025",
        intro:
          "Worked on projects for Grupo Futuro, a Brazilian financial services organization focused on credit, insurance and financial products, modernizing digital platforms.",
        bullets: [
          "Built and maintained backend services and automation scripts in PHP and Perl, implementing business rules, integrations and data processing flows.",
          "Led technical development of scalable web applications with React and Next.js, using SSR and SSG to improve SEO, performance and user experience.",
          "Designed responsive, accessible and reusable frontend architectures, improving maintainability and speeding up delivery.",
          "Maintained CI/CD pipelines with GitHub Actions, automating build, test and deployment.",
          "Refactored legacy applications to improve scalability, performance, maintainability and test coverage.",
          "Integrated external credit analysis services, including Dimensa APIs, securely and reliably.",
          "Mentored junior and mid-level developers through code reviews, pair programming and technical guidance.",
        ],
        achievement:
          "Led the modernization of business-critical applications, improving development speed, system reliability and integration capabilities while supporting the company's digital transformation.",
      },
      {
        id: "invh",
        title: "Software Engineer",
        company: "Invitation Homes",
        location: "Porto Alegre, Brazil (remote)",
        period: "10/2021 – 11/2024",
        intro:
          "One of the largest single-family home rental companies in the United States. Contributed to cloud-native platforms supporting real estate operations, payments and customer-facing services.",
        bullets: [
          "Led full stack projects using Node.js, React.js, Vue.js, AWS Lambda and serverless architectures, delivering scalable, cost-efficient applications.",
          "Designed and managed AWS database solutions with DynamoDB and RDS, improving performance, availability and security.",
          "Built RESTful and GraphQL APIs with JWT authentication, complex business rules and integrations with payment gateways and third-party services.",
          "Automated CI/CD pipelines with GitHub Actions, increasing deployment reliability and delivery speed.",
          "Built responsive, accessible interfaces with React.js, Vue.js, TypeScript, HTML5 and CSS3, with state management via Redux, Context API and MobX.",
          "Improved software quality with automated tests using Jest and React Testing Library.",
        ],
        achievement:
          "Led the delivery of the first production-ready version of the product on an accelerated schedule, with 100% unit test coverage, full payment platform integration and a scalable serverless AWS architecture.",
      },
      {
        id: "ops",
        title: "Systems Support Analyst",
        company: "OpServices",
        location: "Porto Alegre, Brazil (on-site)",
        period: "09/2014 – 10/2018",
        intro:
          "Brazilian technology company specialized in IT operations, infrastructure monitoring and automation for enterprise customers.",
        bullets: [
          "Built backend solutions in PHP and Perl, including custom monitoring scripts, integrations and automation tools for enterprise infrastructure.",
          "Wrote automation scripts in Perl, PHP, Shell Script, VBScript and Python, streamlining operational workflows and infrastructure management.",
          "Led proofs of concept, technical training and the implementation of the OpMon monitoring platform.",
          "Built and customized operational and analytical reports with JasperReports.",
          "Managed the migration and optimization of clustered Linux environments with CentOS, Heartbeat and Pacemaker, improving availability and resilience.",
          "Administered and supported Microsoft SQL Server, Oracle and MySQL databases.",
        ],
        achievement:
          "Delivered enterprise monitoring implementations and high-availability Linux infrastructure migrations, improving system reliability, operational efficiency and customer adoption of OpMon.",
      },
    ],
  },

  education: {
    title: "Education",
    degreeLabel: "Degree",
    languagesTitle: "Languages",
    items: [
      {
        id: "unisinos",
        school: "Unisinos",
        location: "Brazil",
        photoCredit: {
          text: "Photo: Wikimedia Commons (CC BY-SA 4.0)",
          url: "https://commons.wikimedia.org/wiki/File:UNISINOS_S%C3%A3o_Leopoldo.jpeg",
        },
        duration: "2014 - 2020",
        degree: "Bachelor's degree in IT Management",
        description:
          "Studies in information technology management, combining IT fundamentals with business perspective, which underpins my work in software engineering and systems architecture.",
      },
    ],
    languages: [
      { name: "English", level: "Full professional proficiency" },
      { name: "Portuguese", level: "Native" },
      { name: "Spanish", level: "Basic" },
    ],
  },

  certificates: {
    title: "Certifications",
    items: [
      {
        id: "mcitp",
        title: "MCITP SQL Server",
        issuer: "Sisnena, Brazil",
        date: "2010",
        description:
          "Microsoft IT Professional certification in SQL Server database administration and development.",
        skills: ["SQL Server", "Database administration"],
      },
    ],
  },

  skills: {
    title: "Technical Skills",
    subtitle: "An overview of the technologies and practices I work with",
    groups: {
      languages: "Languages",
      frontend: "Front-End",
      backend: "Back-End and APIs",
      data: "Data and Messaging",
      cloud: "Cloud and DevOps",
      architecture: "Architecture",
      ai: "AI-Assisted Development",
      practices: "Practices and Methodologies",
    },
    softItems: {
      tests: "Unit testing",
      agile: "Agile/Scrum",
      prompt: "Prompt engineering",
      context: "Context engineering",
      mentoring: "Technical mentoring",
      leadership: "Technical leadership",
    },
  },

  projects: {
    title: "Featured Projects",
    code: "Code",
    live: "Live",
    private: "Private code",
    items: {
      dgwo: {
        title: "DGWO Consult",
        description:
          "SaaS platform for accounting firms with tax automation: XML processing (NF-e, NFS-e, CT-e, MDF-e), tax analysis engines and identification of tax recovery opportunities. Microservices architecture with messaging.",
      },
      "fullstack-test-emsr": {
        title: "Event Management System",
        description:
          "Full stack application for managing events and reservations, with JWT authentication, role-based access control, Redis caching, a Node.js/TypeScript API and a Next.js frontend.",
      },
      "toystore-webapp": {
        title: "ToyStore Dashboard",
        description:
          "Customer and sales management dashboard with authentication, full CRUD, sales charts and real-time statistics, built with Next.js, TypeScript, Tailwind and Prisma.",
      },
      "toystore-api": {
        title: "ToyStore API",
        description:
          "REST API for customer and sales management with reports, Bearer Token authentication, automated tests with Vitest and Swagger documentation.",
      },
      "thera-api": {
        title: "Products and Orders API",
        description:
          "RESTful API in NestJS and PostgreSQL for products and orders, with JWT authentication, role-based access, SOLID principles and Swagger documentation.",
      },
      "thera-web": {
        title: "Product Catalog",
        description:
          "Web catalog with filtering, sorting, pagination, light/dark theme and a details modal, built with Next.js, TypeScript and Tailwind, tested with Jest and React Testing Library.",
      },
      "blogging-api": {
        title: "Blogging API",
        description:
          "API for managing posts and comments with Node.js, Express and Prisma, focused on clarity, good practices and ease of testing.",
      },
    },
  },

  contact: {
    title: "Get in Touch",
    infoTitle: "Contact Information",
    connectTitle: "Connect with Me",
    availabilityTitle: "Availability",
    availability:
      "Open to new opportunities, projects and collaborations. I usually reply within one business day.",
    labels: {
      email: "Email",
      phone: "Phone",
      location: "Location",
      timezone: "Time Zone",
    },
    formTitle: "Send a Message",
    name: "Name",
    email: "Email",
    subject: "Subject",
    message: "Message",
    send: "Send Message",
    sending: "Sending...",
    success: "Message sent successfully! I'll get back to you soon.",
    error: "Something went wrong. Please try again or email me directly.",
    errors: {
      name: "Name must be at least 2 characters",
      email: "Enter a valid email address",
      subject: "Subject is required",
      message: "Message must be at least 10 characters",
    },
  },

  notFound: {
    title: "Page Not Found",
    description:
      "Oops! The page you're looking for seems to have vanished into the digital void.",
    back: "Back to Home",
  },
};

export default en;
