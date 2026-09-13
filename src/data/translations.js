export const translations = {
  es: {
    nav: {
      links: [
        { label: 'Sobre Mí', href: '#about' },
        { label: 'Métricas', href: '#metrics' },
        { label: 'Habilidades', href: '#skills' },
        { label: 'Proyectos', href: '#projects' },
        { label: 'Experiencia', href: '#experience' },
        { label: 'Contacto', href: '#contact' }
      ],
      roleBadge: 'DevOps & Backend',
      downloadCv: 'Descargar CV',
      downloadCvFull: 'Descargar CV Completo'
    },
    hero: {
      badgeText: 'Disponible para roles de Software Engineer & DevOps',
      greeting: 'Hola, soy',
      roleSubtitle: 'Ingeniera en Ciencias Computacionales • DevOps • Backend • IoT',
      education: 'Ing. en Ciencias Computacionales — ESPOL',
      location: 'Guayaquil, Ecuador',
      summary: 'Ingeniera de software graduada de la ESPOL. Actualmente trabajo en SIEMAV, donde me dedico al desarrollo backend con Python (FastAPI), automatización de servidores con Ansible y sistemas de telemetría con hardware en campo (gateways y Orange Pi). Me gusta trabajar donde el código se cruza con la infraestructura para hacer despliegues rápidos, reproducibles y estables en producción.',
      techPills: {
        ansible: 'Ansible Automation',
        iot: 'Hardware & IoT (Orange Pi)',
        cdc: 'Kafka CDC & Microservicios'
      },
      ctaProjects: 'Ver Casos de Estudio',
      ctaContact: 'Contactar',
      avatarRole: 'Software Engineer @ SIEMAV',
      floatingGatewaysTitle: '115+ Gateways',
      floatingGatewaysSub: 'Configurados en campo',
      floatingHoursTitle: '3,600+ Horas',
      floatingHoursSub: 'YouTrack registradas'
    },
    metrics: {
      items: [
        {
          id: 'hours',
          value: '3,630+',
          label: 'Horas de Ingeniería',
          description: 'Registradas netas en YouTrack con dedicación enfocada en código e infraestructura.'
        },
        {
          id: 'tasks',
          value: '87%',
          label: 'Tasa de Resolución',
          description: '307 tareas completadas con éxito de 351 asignadas en soporte y arquitectura.'
        },
        {
          id: 'gateways',
          value: '115+',
          label: 'Gateways Desplegados',
          description: 'Nodos y estaciones IoT configurados y validados individualmente en producción.'
        },
        {
          id: 'stability',
          value: '99.9%',
          label: 'Estabilidad de Nodos',
          description: 'Mitigación de fugas de memoria RAM y automatización reproducible con Ansible.'
        }
      ]
    },
    skills: {
      sectionTag: 'Competencias Técnicas',
      sectionTitle: 'Especialización y',
      sectionTitleGrad: 'Stack Tecnológico',
      sectionSubtitle: 'Un perfil híbrido que une el desarrollo backend asíncrono con la automatización de infraestructura y la comunicación con dispositivos de hardware en campo.',
      categorySummary: 'Dominio de herramientas de nivel producción y arquitectura',
      categories: [
        {
          id: 'devops',
          name: 'DevOps & Cloud',
          icon: 'Server',
          skills: [
            { name: 'Ansible (Core, Roles, Vault, Navigator, Execution Environments)', level: 95 },
            { name: 'Docker & Docker Compose (Orquestación multinivel)', level: 90 },
            { name: 'CI/CD (GitLab Runners personalizados, GitHub Actions)', level: 90 },
            { name: 'Kubernetes (Gestión de Pods, Manifiestos básicos/intermedios)', level: 75 },
            { name: 'Linux Administration (Debian, Ubuntu, CentOS, Shell Scripting)', level: 90 },
            { name: 'Web Servers (Nginx, Uvicorn, Gunicorn, Reverse Proxy, SSL)', level: 85 }
          ]
        },
        {
          id: 'backend',
          name: 'Backend & Arquitectura',
          icon: 'Terminal',
          skills: [
            { name: 'Python (FastAPI, Flask, Django, Pydantic, Type Hinting)', level: 95 },
            { name: 'Microservicios & Event-Driven Architecture (EDA)', level: 90 },
            { name: 'Node.js & JavaScript (ES6+, Express, REST APIs)', level: 85 },
            { name: 'Clean Architecture & Patrones de Diseño', level: 85 },
            { name: 'Java & Spring Boot / C++', level: 75 }
          ]
        },
        {
          id: 'data',
          name: 'Data & Streaming',
          icon: 'Database',
          skills: [
            { name: 'Apache Kafka, Kafka Connect & Zookeeper', level: 88 },
            { name: 'Debezium (Change Data Capture - CDC en tiempo real)', level: 85 },
            { name: 'MongoDB (Replica Sets, Change Streams, BSON pipelines)', level: 90 },
            { name: 'Bases Relacionales (PostgreSQL, MySQL, SQLAlchemy)', level: 85 },
            { name: 'Redis (Caché y gestión de colas de mensajes)', level: 80 }
          ]
        },
        {
          id: 'iot',
          name: 'IoT & Observabilidad',
          icon: 'Cpu',
          skills: [
            { name: 'Protocolos IoT: MQTT (Mosquitto), LoRaWAN, BLE, RFID', level: 90 },
            { name: 'Hardware Embebido & Single Board: Orange Pi, Gateways', level: 88 },
            { name: 'Automatización SSH con Paramiko & Telemetría Remota', level: 90 },
            { name: 'Grafana & Prometheus (Exporters de hardware, contenedores y DBs)', level: 85 },
            { name: 'Zabbix (Roles de despliegue automatizado con Ansible)', level: 85 }
          ]
        }
      ]
    },
    projects: {
      sectionTag: 'Casos de Estudio & Proyectos',
      sectionTitle: 'Arquitectura e',
      sectionTitleGrad: 'Impacto Real',
      sectionSubtitle: 'Proyectos de ingeniería diseñados para resolver cuellos de botella de infraestructura, streaming masivo de eventos y conectividad con hardware en campo.',
      highlightsLabel: 'Logros clave:',
      btnArchitecture: 'Arquitectura',
      btnGithub: 'GitHub',
      modalOverview: 'Descripción de la Solución',
      modalHighlights: 'Hitos y Contribuciones de Ingeniería',
      modalImpact: 'Métrica de Impacto',
      modalStack: 'Stack Tecnológico Utilizado',
      modalClose: 'Cerrar Detalle',
      modalViewGithub: 'Ver Código en GitHub',
      items: [
        {
          id: 'orchestration-installer',
          title: 'Framework de Orquestación «v2 Installer»',
          category: 'DevOps / Infraestructura como Código',
          badge: 'Caso Insignia',
          description: 'Diseño y desarrollo de una solución integral basada en Ansible y Python para la instalación, actualización y gestión masiva de infraestructura distribuida en gateways y estaciones base.',
          highlights: [
            'Automatización completa del ciclo de vida de los gateways, reduciendo tiempos de despliegue de horas a minutos.',
            'Desarrollo de plugins de inventario dinámico en Python que consultan la API de YouTrack en tiempo real.',
            'Integración de gestión de secretos con Bitwarden y Ansible Vault.',
            'Aprovisionamiento post-instalación de agentes de monitoreo Zabbix y métricas para Grafana/Prometheus.'
          ],
          tags: ['Ansible', 'Python', 'YouTrack API', 'Bitwarden', 'Zabbix', 'Linux'],
          metrics: '115+ gateways aprovisionados sin intervención manual',
          githubUrl: 'https://github.com/sgloayza/edge-infrastructure-orchestrator'
        },
        {
          id: 'resilient-cdc-pipeline',
          title: 'Pipeline de Datos Resiliente en Tiempo Real (CDC)',
          category: 'Data Streaming & Event-Driven',
          badge: 'Alta Disponibilidad',
          description: 'Arquitectura de streaming y replicación continua de datos críticos desde bases de datos MongoDB hacia clústeres de respaldo utilizando Change Data Capture (CDC) con latencia cercana a cero.',
          highlights: [
            'Implementación de conectores Debezium sobre Apache Kafka y Kafka Connect.',
            'Consumidor de alta concurrencia programado en Python para deserialización y validación de tipos BSON complejos.',
            'Mecanismo tolerante a fallos con lógica de reintentos exponenciales y consistencia eventual garantizada.',
            'Configuración de réplicas de MongoDB en producción para asegurar integridad en situaciones de contingencia.'
          ],
          tags: ['Kafka', 'Debezium CDC', 'MongoDB Replicas', 'Zookeeper', 'Python', 'FastAPI'],
          metrics: 'Latencia sub-segundo en sincronización de eventos de producción'
        },
        {
          id: 'iot-telemetry-monitoring',
          title: 'Plataforma IoT de Telemetría y Monitoreo de Gateways',
          category: 'Sistemas Embebidos & Observabilidad',
          badge: 'Optimización Hardware',
          description: 'Sistema centralizado de comunicación y telemetría para dispositivos en campo, combinando microservicios asíncronos, paneles en tiempo real y estabilización de hardware embebido.',
          highlights: [
            'Microservicio en FastAPI con endpoints asíncronos para recepción y distribución de telemetría vía MQTT.',
            'Diagnóstico exhaustivo y resolución de fugas de memoria RAM en gateways (Orange Pi / Linux embebido), eliminando reinicios inesperados.',
            'Gestión remota de dispositivos mediante comandos parametrizados por SSH utilizando Paramiko.',
            'Interfaz interactiva para trazado de gráficos lineales de consumo en tiempo real y exportación de reportes dinámicos.'
          ],
          tags: ['FastAPI', 'MQTT', 'Orange Pi', 'Paramiko SSH', 'Grafana', 'React'],
          metrics: '100% de reducción en caídas imprevistas por agotamiento de RAM'
        }
      ]
    },
    experience: {
      sectionTag: 'Trayectoria Profesional',
      sectionTitle: 'Experiencia y',
      sectionTitleGrad: 'Liderazgo Técnico',
      sectionSubtitle: 'Crecimiento sostenido desde la mentoría académica y soporte de sistemas hasta el liderazgo en automatización e infraestructura distribuida.',
      items: [
        {
          role: 'Ingeniero de Software / DevOps',
          company: 'SIEMAV',
          period: '2024 — Actual',
          location: 'Guayaquil, Ecuador',
          description: 'Liderazgo en la arquitectura de automatización de infraestructura con Ansible, desarrollo de microservicios con FastAPI, pipelines de datos en tiempo real (Kafka/CDC) y soporte integral a sistemas en producción.',
          bullets: [
            'Diseño del framework de automatización para más de 115 gateways y estaciones base.',
            'Creación de pipelines en GitLab Runner con agentes dedicados en Windows y Linux para compilación automática.',
            'Implementación de arquitectura simplificada de datos históricos con réplicas de MongoDB y Grafana.',
            'Más de 3,630 horas netas registradas en YouTrack con 87% de tasa de resolución de incidencias complejas.'
          ]
        },
        {
          role: 'Docente Comunitaria',
          company: 'ESPOL',
          period: '2023',
          location: 'Guayaquil, Ecuador',
          description: 'Transferencia de conocimientos y capacitación técnica a comunidades sobre metodologías de programación y desarrollo de software.',
          bullets: [
            'Capacitación en fundamentos de lógica computacional y desarrollo de software para grupos comunitarios.',
            'Orientación y mentoría en buenas prácticas de código y diseño de soluciones tecnológicas básicas.'
          ]
        },
        {
          role: 'Asistente del Gerente de Sistemas',
          company: 'SOLINTEL',
          period: '2022',
          location: 'Guayaquil, Ecuador',
          description: 'Apoyo en la gestión de infraestructura tecnológica y optimización de procesos internos del departamento de IT.',
          bullets: [
            'Supervisión y mantenimiento preventivo de redes, servidores y estaciones de trabajo corporativas.',
            'Optimización de flujos de soporte técnico interno y documentación de inventario de infraestructura.'
          ]
        },
        {
          role: 'Ayudante de Cátedra',
          company: 'ESPOL',
          period: '2019 — 2021',
          location: 'Guayaquil, Ecuador',
          description: 'Soporte académico a estudiantes en materias troncales de la carrera de Ciencias Computacionales.',
          bullets: [
            'Refuerzo pedagógico en materias de algoritmos, estructuras de datos y fundamentos de programación orientada a objetos.',
            'Calificación y retroalimentación técnica de proyectos prácticos y talleres de laboratorio.'
          ]
        }
      ]
    },
    footer: {
      sectionTag: 'Conectemos',
      contactTitle: '¿Listo para optimizar tu infraestructura o acelerar tus despliegues?',
      contactSubtitle: 'Estoy disponible para incorporarme a equipos dinámicos en roles de Ingeniería de Software / DevOps / Backend o proyectos de modernización de infraestructura.',
      emailLabel: 'Correo Electrónico',
      phoneLabel: 'Teléfono / WhatsApp',
      linkedinLabel: 'LinkedIn',
      cvLabel: 'Curriculum Vitae',
      cvFormat: 'Formato PDF Oficial',
      copyBtn: 'Copiar',
      copiedBtn: '¡Copiado!',
      sendBtn: 'Enviar',
      viewProfileBtn: 'Ver Perfil',
      downloadBtn: 'Descargar',
      footerBuilt: 'Construido con React, Vite y Vanilla CSS'
    }
  },

  en: {
    nav: {
      links: [
        { label: 'About Me', href: '#about' },
        { label: 'Metrics', href: '#metrics' },
        { label: 'Skills', href: '#skills' },
        { label: 'Projects', href: '#projects' },
        { label: 'Experience', href: '#experience' },
        { label: 'Contact', href: '#contact' }
      ],
      roleBadge: 'DevOps & Backend',
      downloadCv: 'Download CV',
      downloadCvFull: 'Download Full CV'
    },
    hero: {
      badgeText: 'Available for Software Engineer & DevOps roles',
      greeting: "Hi, I'm",
      roleSubtitle: 'Computer Science Engineer • DevOps • Backend • IoT',
      education: 'B.S. in Computer Science — ESPOL',
      location: 'Guayaquil, Ecuador',
      summary: 'Computer science engineer graduated from ESPOL. Currently at SIEMAV, specializing in backend engineering with Python (FastAPI), server automation with Ansible, and field hardware telemetry (gateways and Orange Pi). I thrive where software intersects with infrastructure, creating fast, reproducible, and reliable production deployments.',
      techPills: {
        ansible: 'Ansible Automation',
        iot: 'Hardware & IoT (Orange Pi)',
        cdc: 'Kafka CDC & Microservices'
      },
      ctaProjects: 'View Case Studies',
      ctaContact: 'Contact Me',
      avatarRole: 'Software Engineer @ SIEMAV',
      floatingGatewaysTitle: '115+ Gateways',
      floatingGatewaysSub: 'Deployed in the field',
      floatingHoursTitle: '3,600+ Hours',
      floatingHoursSub: 'Logged on YouTrack'
    },
    metrics: {
      items: [
        {
          id: 'hours',
          value: '3,630+',
          label: 'Engineering Hours',
          description: 'Net hours logged in YouTrack with focused dedication to code and infrastructure.'
        },
        {
          id: 'tasks',
          value: '87%',
          label: 'Resolution Rate',
          description: '307 tasks successfully completed out of 351 assigned across support and architecture.'
        },
        {
          id: 'gateways',
          value: '115+',
          label: 'Gateways Deployed',
          description: 'IoT edge nodes and base stations individually configured and validated in production.'
        },
        {
          id: 'stability',
          value: '99.9%',
          label: 'Node Stability',
          description: 'RAM memory leak mitigation and reliable, reproducible automation with Ansible.'
        }
      ]
    },
    skills: {
      sectionTag: 'Technical Competencies',
      sectionTitle: 'Specialization &',
      sectionTitleGrad: 'Technology Stack',
      sectionSubtitle: 'A hybrid profile combining asynchronous backend engineering with infrastructure automation and field hardware communication.',
      categorySummary: 'Proficiency in production-grade and architectural tooling',
      categories: [
        {
          id: 'devops',
          name: 'DevOps & Cloud',
          icon: 'Server',
          skills: [
            { name: 'Ansible (Core, Roles, Vault, Navigator, Execution Environments)', level: 95 },
            { name: 'Docker & Docker Compose (Multilevel orchestration)', level: 90 },
            { name: 'CI/CD (Custom GitLab Runners, GitHub Actions)', level: 90 },
            { name: 'Kubernetes (Pod Management, Basic/Intermediate Manifests)', level: 75 },
            { name: 'Linux Administration (Debian, Ubuntu, CentOS, Shell Scripting)', level: 90 },
            { name: 'Web Servers (Nginx, Uvicorn, Gunicorn, Reverse Proxy, SSL)', level: 85 }
          ]
        },
        {
          id: 'backend',
          name: 'Backend & Architecture',
          icon: 'Terminal',
          skills: [
            { name: 'Python (FastAPI, Flask, Django, Pydantic, Type Hinting)', level: 95 },
            { name: 'Microservices & Event-Driven Architecture (EDA)', level: 90 },
            { name: 'Node.js & JavaScript (ES6+, Express, REST APIs)', level: 85 },
            { name: 'Clean Architecture & Design Patterns', level: 85 },
            { name: 'Java & Spring Boot / C++', level: 75 }
          ]
        },
        {
          id: 'data',
          name: 'Data & Streaming',
          icon: 'Database',
          skills: [
            { name: 'Apache Kafka, Kafka Connect & Zookeeper', level: 88 },
            { name: 'Debezium (Real-time Change Data Capture - CDC)', level: 85 },
            { name: 'MongoDB (Replica Sets, Change Streams, BSON pipelines)', level: 90 },
            { name: 'Relational Databases (PostgreSQL, MySQL, SQLAlchemy)', level: 85 },
            { name: 'Redis (Caching and message queue handling)', level: 80 }
          ]
        },
        {
          id: 'iot',
          name: 'IoT & Observability',
          icon: 'Cpu',
          skills: [
            { name: 'IoT Protocols: MQTT (Mosquitto), LoRaWAN, BLE, RFID', level: 90 },
            { name: 'Embedded Hardware & Single Board: Orange Pi, Gateways', level: 88 },
            { name: 'SSH Automation with Paramiko & Remote Telemetry', level: 90 },
            { name: 'Grafana & Prometheus (Hardware, container & DB exporters)', level: 85 },
            { name: 'Zabbix (Automated deployment roles with Ansible)', level: 85 }
          ]
        }
      ]
    },
    projects: {
      sectionTag: 'Case Studies & Projects',
      sectionTitle: 'Architecture &',
      sectionTitleGrad: 'Real Impact',
      sectionSubtitle: 'Engineering projects designed to solve infrastructure bottlenecks, process high-throughput event streaming, and connect field hardware.',
      highlightsLabel: 'Key achievements:',
      btnArchitecture: 'Architecture',
      btnGithub: 'GitHub',
      modalOverview: 'Solution Overview',
      modalHighlights: 'Engineering Milestones & Contributions',
      modalImpact: 'Impact Metric',
      modalStack: 'Technology Stack Utilized',
      modalClose: 'Close Details',
      modalViewGithub: 'View Code on GitHub',
      items: [
        {
          id: 'orchestration-installer',
          title: 'Edge Orchestration Framework «v2 Installer»',
          category: 'DevOps / Infrastructure as Code',
          badge: 'Flagship Project',
          description: 'Design and deployment of an end-to-end solution based on Ansible and Python for mass automated provisioning, patching, and lifecycle management of distributed gateways.',
          highlights: [
            'Complete gateway lifecycle automation, slashing deployment times from hours down to minutes.',
            'Development of custom Python dynamic inventory plugins querying the YouTrack API in real-time.',
            'Enterprise secrets management integration with Bitwarden and Ansible Vault.',
            'Post-installation provisioning of Zabbix monitoring agents and Grafana/Prometheus metric exporters.'
          ],
          tags: ['Ansible', 'Python', 'YouTrack API', 'Bitwarden', 'Zabbix', 'Linux'],
          metrics: '115+ gateways provisioned without manual intervention',
          githubUrl: 'https://github.com/sgloayza/edge-infrastructure-orchestrator'
        },
        {
          id: 'resilient-cdc-pipeline',
          title: 'Resilient Real-Time Data Pipeline (CDC)',
          category: 'Data Streaming & Event-Driven',
          badge: 'High Availability',
          description: 'Real-time streaming and replication architecture capturing critical telemetry from MongoDB to backup clusters using Change Data Capture (CDC) with near-zero latency.',
          highlights: [
            'Debezium connectors implementation on Apache Kafka and Kafka Connect.',
            'High-concurrency Python consumer for deserializing and validating complex BSON documents.',
            'Fault-tolerant architecture with exponential backoff retries and guaranteed eventual consistency.',
            'Production MongoDB replica sets ensuring data integrity and long-term audit preservation.'
          ],
          tags: ['Kafka', 'Debezium CDC', 'MongoDB Replicas', 'Zookeeper', 'Python', 'FastAPI'],
          metrics: 'Sub-second latency in production event synchronization'
        },
        {
          id: 'iot-telemetry-monitoring',
          title: 'IoT Gateway Telemetry & Monitoring Platform',
          category: 'Embedded Systems & Observability',
          badge: 'Hardware Optimization',
          description: 'Centralized telemetry and communication platform for field edge devices, combining asynchronous microservices, live dashboards, and embedded hardware stabilization.',
          highlights: [
            'FastAPI asynchronous microservice handling live telemetry reception and MQTT message distribution.',
            'Root-cause diagnostics and resolution of critical RAM memory leaks in Orange Pi edge nodes, preventing sudden reboots.',
            'Secure remote node fleet management through automated SSH scripting via Paramiko.',
            'Interactive UI for real-time sensor plotting and dynamic Excel report generation.'
          ],
          tags: ['FastAPI', 'MQTT', 'Orange Pi', 'Paramiko SSH', 'Grafana', 'React'],
          metrics: '100% reduction in downtime caused by RAM exhaustion'
        }
      ]
    },
    experience: {
      sectionTag: 'Professional Journey',
      sectionTitle: 'Experience &',
      sectionTitleGrad: 'Technical Leadership',
      sectionSubtitle: 'Continuous track record from academic mentorship and systems support to leadership in automation and distributed infrastructure.',
      items: [
        {
          role: 'Software Engineer / DevOps',
          company: 'SIEMAV',
          period: '2024 — Present',
          location: 'Guayaquil, Ecuador',
          description: 'Leading infrastructure automation with Ansible, developing microservices with FastAPI, building real-time data pipelines (Kafka/CDC), and supporting production systems.',
          bullets: [
            'Designed the automated deployment framework for over 115 gateways and base stations.',
            'Built custom GitLab Runner pipelines on Windows and Linux hosts for automated binary packaging.',
            'Implemented simplified historical data architecture utilizing MongoDB replica sets and Grafana.',
            'Logged over 3,630 net hours on YouTrack with an 87% resolution rate on complex technical issues.'
          ]
        },
        {
          role: 'Community Instructor',
          company: 'ESPOL',
          period: '2023',
          location: 'Guayaquil, Ecuador',
          description: 'Knowledge transfer and technical training for community initiatives on programming methodologies and software development.',
          bullets: [
            'Taught computational thinking fundamentals and software development principles to community groups.',
            'Provided guidance and mentorship on code quality and practical technology solutions.'
          ]
        },
        {
          role: 'IT Systems Manager Assistant',
          company: 'SOLINTEL',
          period: '2022',
          location: 'Guayaquil, Ecuador',
          description: 'Supported IT infrastructure management and internal workflow optimization within the IT department.',
          bullets: [
            'Conducted preventive maintenance of corporate networks, servers, and engineering workstations.',
            'Optimized internal technical support workflows and documented hardware and server inventory.'
          ]
        },
        {
          role: 'Teaching Assistant',
          company: 'ESPOL',
          period: '2019 — 2021',
          location: 'Guayaquil, Ecuador',
          description: 'Academic support for engineering students across core Computer Science subjects.',
          bullets: [
            'Provided academic mentoring in algorithms, data structures, and object-oriented programming fundamentals.',
            'Evaluated and provided technical feedback on coding projects and laboratory workshops.'
          ]
        }
      ]
    },
    footer: {
      sectionTag: "Let's Connect",
      contactTitle: 'Ready to optimize your infrastructure or accelerate your deployments?',
      contactSubtitle: 'Available to join dynamic teams in Software Engineering / DevOps / Backend roles or infrastructure modernization initiatives.',
      emailLabel: 'Email Address',
      phoneLabel: 'Phone / WhatsApp',
      linkedinLabel: 'LinkedIn',
      cvLabel: 'Resume / CV',
      cvFormat: 'Official PDF Format',
      copyBtn: 'Copy',
      copiedBtn: 'Copied!',
      sendBtn: 'Send Email',
      viewProfileBtn: 'View Profile',
      downloadBtn: 'Download',
      footerBuilt: 'Built with React, Vite & Vanilla CSS'
    }
  }
};
