const pt = {
  langName: "Português",
  site: {
    name: "Daniel Werner",
    shortName: "Daniel",
    role: "Engenheiro de Software Sênior",
    location: "Rio Grande do Sul, Brasil",
    footerBlurb:
      "Engenheiro de Software Sênior baseado no Rio Grande do Sul, Brasil.",
    portfolioLabel: "Portfólio do Daniel",
    rights: "Todos os direitos reservados.",
  },

  nav: {
    home: "Início",
    about: "Sobre",
    education: "Formação",
    experience: "Experiência",
    skills: "Competências",
    projects: "Projetos",
    certificates: "Certificações",
    contact: "Contato",
    openMenu: "Abrir menu",
    closeMenu: "Fechar menu",
    switchLang: "Mudar idioma",
  },

  footer: {
    contact: "Contato",
    quickLinks: "Links rápidos",
    social: "Redes",
    emailAria: "Enviar e-mail para Daniel Werner",
    callAria: "Ligar para Daniel Werner",
    github: "Perfil no GitHub",
    linkedin: "Perfil no LinkedIn",
    email: "E-mail",
  },

  search: {
    button: "Buscar ...",
    placeholder: "Buscar páginas...",
    empty: "Nenhum resultado encontrado.",
    items: [
      {
        title: "Início",
        description: "Ir para a página inicial",
        path: "/",
        keywords: ["inicio", "home", "cv", "currículo", "curriculo", "daniel", "daniel werner", "dgwerner", "engenheiro de software", "full stack"],
      },
      {
        title: "Sobre",
        description: "Conheça minha trajetória e background",
        path: "/about",
        keywords: ["sobre", "bio", "perfil", "cv", "currículo", "daniel", "werner", "engenheiro de software sênior"],
      },
      {
        title: "Formação",
        description: "Formação acadêmica e idiomas",
        path: "/education",
        keywords: ["formação", "educação", "faculdade", "universidade", "gestão de ti", "unisinos", "idiomas", "inglês"],
      },
      {
        title: "Experiência",
        description: "Minha experiência profissional",
        path: "/experience",
        keywords: ["experiência", "carreira", "trabalho", "empregos", "mtp", "dgwo", "gx2", "invitation homes", "opservices"],
      },
      {
        title: "Competências",
        description: "Tecnologias e habilidades técnicas",
        path: "/skills",
        keywords: ["competências", "skills", "habilidades", "tecnologias", "python", "typescript", "node", "react", "aws", "kafka", "java", "kotlin", "php"],
      },
      {
        title: "Projetos",
        description: "Projetos e repositórios",
        path: "/projects",
        keywords: ["projetos", "portfólio", "github", "código", "dgwo consult", "saas", "api"],
      },
      {
        title: "Certificações",
        description: "Certificações profissionais",
        path: "/certificates",
        keywords: ["certificações", "certificados", "mcitp", "sql server"],
      },
      {
        title: "Contato",
        description: "Entre em contato comigo",
        path: "/contact",
        keywords: ["contato", "e-mail", "email", "mensagem", "whatsapp", "linkedin", "oportunidade", "contratar"],
      },
    ],
  },

  seo: {
    pages: {
      "/": {
        title: "Daniel Werner - Engenheiro de Software Sênior",
        description:
          "Daniel Werner — Engenheiro de Software Sênior com mais de 10 anos de experiência em Python, Node.js, TypeScript, React, AWS e sistemas distribuídos. Rio Grande do Sul, Brasil.",
      },
      "/about": {
        title: "Sobre - Daniel Werner | Engenheiro de Software Sênior",
        description:
          "Conheça Daniel Werner: engenheiro de software sênior, fundador da DGWO Consult, com experiência em arquiteturas nativas em nuvem, EDA e desenvolvimento assistido por IA.",
      },
      "/projects": {
        title: "Projetos - Daniel Werner | Engenheiro de Software",
        description:
          "Projetos e repositórios de Daniel Werner: APIs, aplicações web full stack e a plataforma SaaS DGWO Consult.",
      },
      "/skills": {
        title: "Competências - Daniel Werner | Python, Node.js, AWS, Kafka",
        description:
          "Competências técnicas de Daniel Werner: Python, FastAPI, Node.js, TypeScript, React, Next.js, AWS, Kafka, microsserviços, DDD e CI/CD.",
      },
      "/experience": {
        title: "Experiência - Daniel Werner | MTP, DGWO, GX2, Invitation Homes",
        description:
          "Experiência profissional de Daniel Werner em MTP, DGWO Consult, GX2, Invitation Homes e OpServices.",
      },
      "/education": {
        title: "Formação - Daniel Werner | Gestão de TI",
        description:
          "Formação de Daniel Werner: Bacharelado em Gestão de TI, além de idiomas e certificações.",
      },
      "/certificates": {
        title: "Certificações - Daniel Werner",
        description: "Certificações profissionais de Daniel Werner.",
      },
      "/contact": {
        title: "Contato - Daniel Werner | Engenheiro de Software Sênior",
        description:
          "Entre em contato com Daniel Werner para oportunidades, projetos e colaborações.",
      },
    },
    fallback: {
      title: "Daniel Werner - Engenheiro de Software Sênior",
      description:
        "Portfólio de Daniel Werner — Engenheiro de Software Sênior.",
    },
  },

  home: {
    tagline: "Engenheiro de Software Sênior",
    headline: "Construo sistemas escaláveis para a nuvem",
    description:
      "Mais de 10 anos criando soluções de software para organizações globais, com foco em Python, Node.js, TypeScript, React, AWS e arquiteturas orientadas a eventos.",
    downloadCv: "Baixar currículo",
    aboutMe: "Sobre mim",
    copyEmail: "Copiar e-mail",
    github: "Projetos no GitHub",
    githubAria: "Ver perfil no GitHub",
    linkedin: "LinkedIn",
    linkedinValue: "Conecte-se",
    linkedinAria: "Ver perfil no LinkedIn",
    whatsapp: "Fale comigo",
    whatsappValue: "WhatsApp",
    whatsappAria: "Falar pelo WhatsApp",
  },

  about: {
    title: "Sobre mim",
    photoAlt: "Foto de Daniel Werner",
    paragraphs: [
      "Sou engenheiro de software sênior com mais de 10 anos de experiência construindo soluções escaláveis para organizações globais. Minha base inclui Python, FastAPI, Node.js, TypeScript, React, Next.js e AWS.",
      "Tenho experiência em sistemas distribuídos, arquiteturas orientadas a eventos, aplicações com uso intensivo de dados, CI/CD e Infraestrutura como Código, sempre com foco em confiabilidade e clareza de arquitetura.",
      "Também trabalho com assistentes de programação baseados em LLMs e fluxos assistidos por IA, aplicando engenharia de prompts e de contexto à implementação, testes, depuração e documentação. Sou fundador da DGWO Consult, onde desenvolvo uma plataforma SaaS de automação fiscal para escritórios contábeis.",
    ],
    quickFactsTitle: "Resumo",
    quickFacts: [
      "Rio Grande do Sul, Brasil",
      "Bacharelado em Gestão de TI",
      "Inglês: fluência profissional completa",
    ],
    downloadCv: "Baixar currículo",
    mySkills: "Minhas competências",
    achievementsTitle: "Em números",
    achievements: [
      { title: "10+ anos", description: "De experiência em desenvolvimento de software" },
      { title: "5 empresas", description: "Atuação em produtos e plataformas de grande escala" },
      { title: "Inglês fluente", description: "Trabalho remoto com equipes internacionais" },
    ],
    interestsTitle: "Áreas de interesse",
    interests: [
      "Sistemas distribuídos",
      "Arquitetura nativa em nuvem",
      "Desenvolvimento assistido por IA",
      "DDD e arquitetura orientada a eventos",
      "DevOps e CI/CD",
      "SaaS e automação fiscal",
    ],
  },

  experience: {
    title: "Experiência profissional",
    achievement: "Principal realização",
    items: [
      {
        id: "mtp",
        title: "Desenvolvedor Full Stack Sênior",
        company: "MTP",
        location: "São Paulo, Brasil (remoto)",
        period: "09/2025 – Presente",
        bullets: [
          "Liderei uma equipe multifuncional na área de Logística, entregando soluções orientadas por dados que ampliaram a transparência para os parceiros de entrega.",
          "Conduzi o desenvolvimento de uma plataforma de insights quase em tempo real com Java, Kotlin, Kafka e AWS (SNS, SQS, DynamoDB), permitindo que os parceiros acompanhassem métricas de desempenho e melhorassem a qualidade dos serviços.",
          "Projetei sistemas distribuídos escaláveis, resilientes e de alto desempenho com Domain-Driven Design (DDD) e Event-Driven Architecture (EDA), reduzindo falhas e melhorando a confiabilidade da plataforma.",
          "Colaborei com equipes de produto, dados e operações para entregar soluções nativas em nuvem alinhadas aos objetivos de negócio.",
          "Utilizei assistentes de programação baseados em LLMs (Claude, GitHub Copilot e Cursor) com engenharia de prompts e de contexto em implementação, refatoração, depuração, testes e documentação, mantendo a qualidade por meio de testes e validação.",
        ],
      },
      {
        id: "dgwo",
        title: "Fundador e Engenheiro de Software Sênior",
        company: "DGWO Consult",
        location: "Brasil (remoto)",
        period: "01/2025 – Presente",
        bullets: [
          "Conduzo a concepção e o desenvolvimento de uma plataforma SaaS para escritórios contábeis, com foco em automação fiscal e identificação de oportunidades de recuperação tributária.",
          "Desenvolvi ferramentas para obtenção, extração e processamento de documentos fiscais eletrônicos (XML de NF-e, NFS-e, CT-e e MDF-e), reduzindo a necessidade de análise manual.",
          "Desenvolvi motores de análise tributária para identificar impostos pagos a maior no Simples Nacional e oportunidades de créditos de PIS e COFINS no Lucro Real.",
          "Projetei a arquitetura com microsserviços e mensageria, com comunicação assíncrona para ingestão e processamento de documentos, rastreabilidade das análises e geração de relatórios.",
          "Defini requisitos de segurança e isolamento de dados por escritório, autenticação multifator e controle de acesso.",
          "Apliquei desenvolvimento orientado por especificações e fluxos assistidos por agentes de IA no MVP.",
        ],
      },
      {
        id: "gx2",
        title: "Desenvolvedor Full Stack Sênior",
        company: "GX2",
        location: "Porto Alegre, Brasil (remoto)",
        period: "11/2024 – 09/2025",
        intro:
          "Atuação em projetos do Grupo Futuro, organização brasileira de serviços financeiros focada em crédito, seguros e produtos financeiros, na modernização de plataformas digitais.",
        bullets: [
          "Desenvolvi e mantive serviços de backend e scripts de automação em PHP e Perl, implementando regras de negócio, integrações e fluxos de dados.",
          "Liderei o desenvolvimento técnico de aplicações web escaláveis com React e Next.js, usando SSR e SSG para melhorar SEO, desempenho e experiência do usuário.",
          "Projetei arquiteturas de frontend responsivas, acessíveis e reutilizáveis, facilitando a manutenção e acelerando a entrega.",
          "Mantive pipelines de CI/CD com GitHub Actions, automatizando build, testes e implantação.",
          "Refatorei aplicações legadas para melhorar escalabilidade, desempenho, manutenção e cobertura de testes.",
          "Integrei serviços externos de análise de crédito, incluindo APIs da Dimensa, de forma segura e confiável.",
          "Orientei desenvolvedores juniores e plenos por meio de code reviews, pair programming e mentoria técnica.",
        ],
        achievement:
          "Liderei a modernização de aplicações críticas de negócio, melhorando a velocidade de desenvolvimento, a confiabilidade dos sistemas e os recursos de integração, apoiando a transformação digital da empresa.",
      },
      {
        id: "invh",
        title: "Engenheiro de Software",
        company: "Invitation Homes",
        location: "Porto Alegre, Brasil (remoto)",
        period: "10/2021 – 11/2024",
        intro:
          "Uma das maiores empresas de locação de residências unifamiliares dos Estados Unidos. Contribuí para plataformas nativas em nuvem que dão suporte a operações imobiliárias, pagamentos e serviços voltados aos clientes.",
        bullets: [
          "Liderei projetos full stack com Node.js, React.js, Vue.js, AWS Lambda e arquiteturas serverless, entregando aplicações escaláveis e eficientes em custos.",
          "Projetei e gerenciei soluções de banco de dados na AWS com DynamoDB e RDS, melhorando desempenho, disponibilidade e segurança.",
          "Desenvolvi APIs RESTful e GraphQL com autenticação JWT, regras de negócio complexas e integração com gateways de pagamento e serviços de terceiros.",
          "Automatizei pipelines de CI/CD com GitHub Actions, aumentando a confiabilidade das implantações e a velocidade de entrega.",
          "Desenvolvi interfaces responsivas e acessíveis com React.js, Vue.js, TypeScript, HTML5 e CSS3, com gerenciamento de estado via Redux, Context API e MobX.",
          "Melhorei a qualidade do software com testes automatizados em Jest e React Testing Library.",
        ],
        achievement:
          "Conduzi a entrega da primeira versão do produto pronta para produção em prazo acelerado, com 100% de cobertura de testes unitários, integração completa com a plataforma de pagamentos e uma arquitetura AWS serverless escalável.",
      },
      {
        id: "ops",
        title: "Analista de Suporte de Sistemas",
        company: "OpServices",
        location: "Porto Alegre, Brasil (presencial)",
        period: "09/2014 – 10/2018",
        intro:
          "Empresa brasileira de tecnologia especializada em operações de TI, monitoramento de infraestrutura e automação para clientes corporativos.",
        bullets: [
          "Desenvolvi soluções de backend em PHP e Perl, com scripts de monitoramento, integrações e ferramentas de automação para infraestrutura corporativa.",
          "Criei scripts de automação em Perl, PHP, Shell Script, VBScript e Python, otimizando fluxos operacionais e o gerenciamento de infraestrutura.",
          "Liderei provas de conceito, treinamentos técnicos e a implementação da plataforma de monitoramento OpMon.",
          "Desenvolvi e personalizei relatórios operacionais e analíticos com JasperReports.",
          "Gerenciei a migração e a otimização de ambientes Linux em cluster com CentOS, Heartbeat e Pacemaker, melhorando disponibilidade e resiliência.",
          "Administrei e prestei suporte a bancos de dados Microsoft SQL Server, Oracle e MySQL.",
        ],
        achievement:
          "Entreguei implementações de monitoramento corporativo e migrações de infraestrutura Linux de alta disponibilidade, melhorando a confiabilidade dos sistemas, a eficiência operacional e a adoção do OpMon pelos clientes.",
      },
    ],
  },

  education: {
    title: "Formação",
    degreeLabel: "Graduação",
    languagesTitle: "Idiomas",
    items: [
      {
        id: "unisinos",
        school: "Unisinos",
        location: "Brasil",
        photoCredit: {
          text: "Foto: Wikimedia Commons (CC BY-SA 4.0)",
          url: "https://commons.wikimedia.org/wiki/File:UNISINOS_S%C3%A3o_Leopoldo.jpeg",
        },
        duration: "2014 - 2020",
        degree: "Bacharelado em Gestão de TI",
        description:
          "Formação em gestão de tecnologia da informação, combinando fundamentos de TI com visão de negócio, base que sustenta minha atuação em engenharia de software e arquitetura de sistemas.",
      },
    ],
    languages: [
      { name: "Inglês", level: "Fluência profissional completa" },
      { name: "Português", level: "Nativo" },
      { name: "Espanhol", level: "Básico" },
    ],
  },

  certificates: {
    title: "Certificações",
    items: [
      {
        id: "mcitp",
        title: "MCITP SQL Server",
        issuer: "Sisnena, Brasil",
        date: "2010",
        description:
          "Certificação Microsoft IT Professional em administração e desenvolvimento de bancos de dados SQL Server.",
        skills: ["SQL Server", "Administração de banco de dados"],
      },
    ],
  },

  skills: {
    title: "Competências técnicas",
    subtitle: "Uma visão geral das tecnologias e práticas com as quais trabalho",
    groups: {
      languages: "Linguagens",
      frontend: "Front-end",
      backend: "Back-end e APIs",
      data: "Dados e mensageria",
      cloud: "Cloud e DevOps",
      architecture: "Arquitetura",
      ai: "Desenvolvimento com IA",
      practices: "Práticas e metodologias",
    },
    softItems: {
      tests: "Testes unitários",
      agile: "Ágil/Scrum",
      prompt: "Engenharia de prompts",
      context: "Engenharia de contexto",
      mentoring: "Mentoria técnica",
      leadership: "Liderança técnica",
    },
  },

  projects: {
    title: "Projetos em destaque",
    code: "Código",
    live: "Demo",
    private: "Código privado",
    items: {
      dgwo: {
        title: "DGWO Consult",
        description:
          "Plataforma SaaS para escritórios contábeis com automação fiscal: processamento de XMLs (NF-e, NFS-e, CT-e, MDF-e), motores de análise tributária e identificação de oportunidades de recuperação de impostos. Arquitetura de microsserviços com mensageria.",
      },
      "fullstack-test-emsr": {
        title: "Sistema de Gerenciamento de Eventos",
        description:
          "Aplicação full stack para gerenciamento de eventos e reservas, com autenticação JWT, controle de acesso por papéis, cache em Redis, API em Node.js/TypeScript e frontend em Next.js.",
      },
      "toystore-webapp": {
        title: "ToyStore Dashboard",
        description:
          "Dashboard de gestão de clientes e vendas com autenticação, CRUD completo, gráficos de vendas e estatísticas em tempo real, feito com Next.js, TypeScript, Tailwind e Prisma.",
      },
      "toystore-api": {
        title: "ToyStore API",
        description:
          "API REST para gestão de clientes e vendas com relatórios, autenticação por Bearer Token, testes automatizados com Vitest e documentação Swagger.",
      },
      "thera-api": {
        title: "API de Produtos e Pedidos",
        description:
          "API RESTful em NestJS e PostgreSQL para produtos e pedidos, com autenticação JWT, perfis de acesso, princípios SOLID e documentação Swagger.",
      },
      "thera-web": {
        title: "Catálogo de Produtos",
        description:
          "Catálogo web com filtros, ordenação, paginação, tema claro/escuro e modal de detalhes, construído com Next.js, TypeScript e Tailwind, com testes em Jest e React Testing Library.",
      },
      "blogging-api": {
        title: "Blogging API",
        description:
          "API para gerenciamento de posts e comentários com Node.js, Express e Prisma, focada em clareza, boas práticas e facilidade de teste.",
      },
    },
  },

  contact: {
    title: "Entre em contato",
    infoTitle: "Informações de contato",
    connectTitle: "Conecte-se comigo",
    availabilityTitle: "Disponibilidade",
    availability:
      "Aberto a novas oportunidades, projetos e colaborações. Respondo normalmente em até um dia útil.",
    labels: {
      email: "E-mail",
      phone: "Telefone",
      location: "Localização",
      timezone: "Fuso horário",
    },
    formTitle: "Enviar mensagem",
    name: "Nome",
    email: "E-mail",
    subject: "Assunto",
    message: "Mensagem",
    send: "Enviar mensagem",
    sending: "Enviando...",
    success: "Mensagem enviada com sucesso! Responderei em breve.",
    error:
      "Algo deu errado. Tente novamente ou envie um e-mail diretamente.",
    errors: {
      name: "O nome deve ter pelo menos 2 caracteres",
      email: "Informe um e-mail válido",
      subject: "O assunto é obrigatório",
      message: "A mensagem deve ter pelo menos 10 caracteres",
    },
  },

  notFound: {
    title: "Página não encontrada",
    description:
      "Ops! A página que você procura parece ter desaparecido no vazio digital.",
    back: "Voltar ao início",
  },
};

export default pt;
