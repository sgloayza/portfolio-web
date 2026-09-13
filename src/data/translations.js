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
      btnArchitecture: 'Detalle y Arquitectura',
      btnSimulator: '🎮 Simulador en Vivo',
      btnGithub: 'GitHub',
      modalProblemTitle: 'La Problemática en Producción',
      modalSolutionTitle: 'La Solución de Ingeniería Implementada',
      modalHighlights: 'Hitos Técnicos y Aportes de Ingeniería',
      modalImpact: 'Métrica e Impacto Comprobado',
      modalStack: 'Stack Tecnológico Utilizado',
      modalClose: 'Cerrar Detalle',
      modalViewGithub: 'Ver Código en GitHub',
      simulator: {
        title: 'Simulador Interactivo de Clúster Edge',
        badge: 'Entorno de Demostración en Vivo',
        close: 'Cerrar Simulador',
        navTopology: 'Tubería CDC & Kafka',
        navMutex: 'Control Mutex (Anti-Colisión)',
        navObservability: 'Prometheus & Watchdog',
        navTerminal: 'Terminal Ansible',
        cdc: {
          title: 'Pipeline de Streaming CDC (Change Data Capture)',
          subtitle: 'Inserción en vivo, transmisión por Kafka y regla de Pérdida Cero de Datos (Zero Data Loss)',
          primaryDbTitle: 'MongoDB Operativo (Caliente)',
          primaryDbPort: 'Puerto: 27027 | Colección: telemetry_live',
          kafkaTitle: 'Apache Kafka Broker + Debezium CDC',
          kafkaTopic: 'Tópico: cdc.telemetry.events | Latencia: ~120ms',
          historicDbTitle: 'MongoDB Histórico (Auditoría Inmutable)',
          historicDbPort: 'Puerto: 27028 | Colección: telemetry_audit',
          btnInsert: '➕ Enviar Telemetría de Sensor',
          btnDelete: '💥 Simular Borrado Accidental (deleteMany)',
          btnReset: '🔄 Reiniciar Datos de Prueba',
          docsCount: 'Documentos:',
          statusHealthy: 'Operativo',
          statusPurged: 'Vaciado en Caliente (0 Docs)',
          retentionBadge: '100% Retención Legal (0% Pérdida)',
          lastEvent: 'Último evento CDC transmitido:',
          deleteNotice: 'Alerta: Los registros fueron eliminados del nodo primario, pero retenidos de forma inmutable en el nodo histórico para cumplimiento de auditoría legal.'
        },
        mutex: {
          title: 'Control de Concurrencia por Exclusión Mutua (Mutex)',
          subtitle: 'Prueba cómo el inventario dinámico en Python evita colisiones cuando dos operadores intentan aprovisionar el mismo nodo simultáneamente.',
          gatewayTitle: 'Gateway Remoto (Orange Pi Zero 3)',
          gatewayIp: '192.168.10.11 (Sector Norte)',
          statusFree: 'LIBRE - Sin tareas activas',
          statusLocked: 'BLOQUEADO - Tarea en Progreso',
          btnRunTask1: '▶️ Disparar Tarea 1: Aprovisionar Nginx',
          btnRunTask2: '⚡ Disparar Tarea 2 Concurrente: Actualizar Firmware',
          mutexAcquired: '¡Candado Mutex ADQUIRIDO por Tarea 1! La Tarea 2 fue RECHAZADA automáticamente para evitar dejar el equipo en estado zombie.',
          mutexReleased: 'Candado Liberado. El gateway vuelve a estar disponible para nuevas tareas.'
        },
        observability: {
          title: 'Observabilidad de Hardware & Watchdog Proactivo',
          subtitle: 'Métricas en tiempo real inspiradas en Prometheus Node Exporter y el script guardián en cron.',
          ramGauge: 'Uso de Memoria RAM',
          cpuGauge: 'Consumo de CPU',
          diskGauge: 'Espacio en Disco (Rootfs)',
          ramWarning: '¡Alerta de RAM alta (>80%)! Disparando protocolo de autorrecuperación...',
          ramOptimal: 'Salud Óptima del Sistema',
          btnStress: '⚠️ Simular Fuga de Memoria RAM (Estrés)',
          btnRemediate: '🩺 Ejecutar Remediación (Ansible Self-Healing)',
          btnMetricsStream: '📊 Explorar Endpoint /metrics (Prometheus Raw)',
          btnMetricsHide: 'Ocultar Stream /metrics',
          metricsTitle: 'Inspección de Métricas Reales de Prometheus (/metrics)',
          metricsDesc: 'Payload en vivo generado por node_exporter en formato estándar OpenMetrics (text/plain). Cambia dinámicamente según el estado del hardware:',
          metricsCopy: 'Copiar Métricas',
          metricsCopied: '¡Copiado!',
          watchdogLogTitle: 'Registro en Vivo del Watchdog (/tmp/edge_watchdog.log)'
        },
        terminal: {
          title: 'Terminal Interactiva de Ansible',
          subtitle: 'Ejecuta scripts reales de diagnóstico y aprovisionamiento con salida en consola.',
          btnVerify: 'Correr ./scripts/verify_cluster.sh',
          btnAnsible: 'Correr ./scripts/demo_ansible_live.sh',
          btnClean: 'Limpiar Consola'
        }
      },
      items: [
        {
          id: 'orchestration-installer',
          title: 'Framework de Orquestación «Edge Infrastructure Orchestrator»',
          category: 'DevOps / Infraestructura como Código',
          badge: 'Caso Insignia',
          cardDescription: 'Solución integral de Infraestructura como Código (IaC) y orquestación masiva para el aprovisionamiento, hardening y ciclo de vida de más de 115 gateways Edge distribuidos.',
          description: 'Solución integral de Infraestructura como Código (IaC) y orquestación masiva para el aprovisionamiento, hardening y ciclo de vida de más de 115 gateways Edge distribuidos.',
          problem: 'En flotas de gateways (Orange Pi / Linux) distribuidos geográficamente, los despliegues manuales consumían horas por dispositivo y generaban errores humanos. Además, cuando múltiples operadores o incidencias intentaban configurar un mismo equipo a la vez, se producían colisiones de despliegue (condiciones de carrera) que dejaban los nodos inoperables en campo.',
          solution: 'Se diseñó un framework basado en Ansible Core y Python con inventario dinámico en tiempo real. La arquitectura implementa un control de concurrencia por exclusión mutua (Mutex) que detecta el estado real frente al deseado y bloquea automáticamente ejecuciones conflictivas simultáneas. Incluye hardening de contenedores Docker con cuotas estrictas de CPU/RAM, rotación de logs JSON para proteger las memorias flash y watchdog proactivo de autorrecuperación.',
          highlights: [
            'Automatización completa del ciclo de vida de gateways, reduciendo tiempos de despliegue de horas a menos de 5 minutos.',
            'Desarrollo de plugins de inventario dinámico en Python con patrón de doble estado (actual vs target) y bloqueo Mutex.',
            'Hardening de contenedores en producción con cuotas de CPU/RAM y rotación de logs (50MB/5 ficheros) para evitar saturación de tarjetas SD.',
            'Aprovisionamiento post-instalación de agentes de monitoreo Zabbix/Prometheus y métricas para Grafana.'
          ],
          tags: ['Ansible', 'Python', 'Docker Hardening', 'Edge Linux', 'Orange Pi', 'Event-Driven EDA'],
          metrics: '115+ gateways aprovisionados sin intervención manual y 0 colisiones de despliegue',
          githubUrl: 'https://github.com/sgloayza/edge-infrastructure-orchestrator'
        },
        {
          id: 'resilient-cdc-pipeline',
          title: 'Pipeline de Datos Resiliente en Tiempo Real (CDC)',
          category: 'Data Streaming & Event-Driven',
          badge: 'Alta Disponibilidad',
          cardDescription: 'Streaming continuo de eventos mediante Change Data Capture (CDC) sobre Apache Kafka, replicando telemetría desde MongoDB hacia clústeres de auditoría con latencia sub-segundo.',
          description: 'Streaming continuo de eventos mediante Change Data Capture (CDC) sobre Apache Kafka, replicando telemetría desde MongoDB hacia clústeres de auditoría con latencia sub-segundo.',
          problem: 'Las bases de datos operativas de alta concurrencia sufrían degradación cuando se realizaban consultas analíticas pesadas. Críticamente, cualquier borrado accidental de registros operativos en caliente provocaba la pérdida irreversible de telemetría histórica necesaria para auditorías legales y cumplimiento normativo.',
          solution: 'Se implementó una canalización desacoplada con Debezium y Apache Kafka leyendo directamente los Change Streams del oplog de MongoDB sin penalizar la base operativa. El conector hacia la base histórica fue configurado específicamente para persistir inserciones y actualizaciones descartando eliminaciones destructivas, garantizando un repositorio histórico inmutable con políticas de retención TTL de 365 días.',
          highlights: [
            'Implementación de conectores Debezium sobre Apache Kafka y clúster Kafka Connect distribuido.',
            'Consumidor de alta concurrencia programado en Python para deserialización y validación de tipos BSON complejos.',
            'Mecanismo tolerante a fallos con lógica de reintentos exponenciales y consistencia eventual garantizada.',
            'Configuración de réplicas de MongoDB en producción para asegurar integridad en situaciones de contingencia.'
          ],
          tags: ['Kafka', 'Debezium CDC', 'MongoDB Replicas', 'Zookeeper', 'Python', 'FastAPI'],
          metrics: 'Latencia sub-segundo en sincronización de eventos y 100% retención para auditorías'
        },
        {
          id: 'iot-telemetry-monitoring',
          title: 'Plataforma IoT de Telemetría y Monitoreo de Gateways',
          category: 'Sistemas Embebidos & Observabilidad',
          badge: 'Optimización Hardware',
          cardDescription: 'Sistema centralizado de comunicación y telemetría para dispositivos en campo, combinando microservicios asíncronos en FastAPI, colas MQTT y estabilización preventiva de memoria.',
          description: 'Sistema centralizado de comunicación y telemetría para dispositivos en campo, combinando microservicios asíncronos en FastAPI, colas MQTT y estabilización preventiva de memoria.',
          problem: 'Los gateways en campo (Orange Pi con 1GB-2GB de RAM) sufrían reinicios inesperados y congelamientos del sistema operativo debido a microfugas de memoria RAM y acumulación de sockets zombies en los microservicios de telemetría, obligando a reinicios manuales forzados en sitio.',
          solution: 'Se desarrolló un microservicio asíncrono en FastAPI optimizado para bajo consumo de recursos que gestiona la telemetría vía MQTT y comunicación remota segura por SSH (Paramiko). Se diagnosticaron y erradicaron las fugas de memoria en los servicios embebidos y se implementó un script watchdog programado que monitorea proactivamente el consumo de RAM/disco, eliminando el 100% de las caídas inesperadas en hardware.',
          highlights: [
            'Microservicio en FastAPI con endpoints asíncronos para recepción y distribución de telemetría vía MQTT.',
            'Diagnóstico exhaustivo y resolución de fugas de memoria RAM en gateways (Orange Pi / Linux embebido), eliminando reinicios inesperados.',
            'Gestión remota de dispositivos mediante comandos parametrizados por SSH utilizando Paramiko.',
            'Interfaz interactiva para trazado de gráficos lineales de consumo en tiempo real y exportación de reportes dinámicos.'
          ],
          tags: ['FastAPI', 'MQTT', 'Orange Pi', 'Paramiko SSH', 'Grafana', 'React'],
          metrics: '100% de reducción en caídas imprevistas por agotamiento de memoria RAM'
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
      btnArchitecture: 'Architecture & Details',
      btnSimulator: '🎮 Live Simulator',
      btnGithub: 'GitHub',
      modalProblemTitle: 'Production Problem & Challenges',
      modalSolutionTitle: 'Engineering Architecture & Solution',
      modalHighlights: 'Key Technical Milestones & Contributions',
      modalImpact: 'Proven Business & Technical Impact',
      modalStack: 'Technology Stack Utilized',
      modalClose: 'Close Details',
      modalViewGithub: 'View Code on GitHub',
      simulator: {
        title: 'Interactive Edge Cluster Simulator',
        badge: 'Interactive Live Demo',
        close: 'Close Simulator',
        navTopology: 'CDC Pipeline & Kafka',
        navMutex: 'Mutex Control (Anti-Collision)',
        navObservability: 'Prometheus & Watchdog',
        navTerminal: 'Ansible Terminal',
        cdc: {
          title: 'Change Data Capture (CDC) Event Streaming Pipeline',
          subtitle: 'Live ingestion, Kafka message transport, and Zero Data Loss compliance retention rule',
          primaryDbTitle: 'Operational MongoDB (Hot)',
          primaryDbPort: 'Port: 27027 | Collection: telemetry_live',
          kafkaTitle: 'Apache Kafka Broker + Debezium CDC',
          kafkaTopic: 'Topic: cdc.telemetry.events | Latency: ~120ms',
          historicDbTitle: 'Historical Audit MongoDB (Immutable)',
          historicDbPort: 'Port: 27028 | Collection: telemetry_audit',
          btnInsert: '➕ Emit Sensor Telemetry',
          btnDelete: '💥 Simulate Accidental Purge (deleteMany)',
          btnReset: '🔄 Reset Test Documents',
          docsCount: 'Documents:',
          statusHealthy: 'Healthy',
          statusPurged: 'Purged on Hot Store (0 Docs)',
          retentionBadge: '100% Legal Retention (0% Data Loss)',
          lastEvent: 'Last emitted CDC event:',
          deleteNotice: 'Alert: Records were wiped from the primary node, but immutably retained in the historical audit sink for statutory compliance.'
        },
        mutex: {
          title: 'Mutual Exclusion (Mutex) Concurrency Control',
          subtitle: 'Test how the Python dynamic inventory plugin prevents deployment race conditions when two operators target the same gateway simultaneously.',
          gatewayTitle: 'Remote Gateway (Orange Pi Zero 3)',
          gatewayIp: '192.168.10.11 (Sector North)',
          statusFree: 'IDLE - No active tasks',
          statusLocked: 'LOCKED - Execution In Progress',
          btnRunTask1: '▶️ Dispatch Task 1: Provision Nginx',
          btnRunTask2: '⚡ Dispatch Task 2 (Concurrent): Upgrade Firmware',
          mutexAcquired: 'Mutex Lock ACQUIRED by Task 1! Task 2 was automatically REJECTED to prevent corrupting hardware state.',
          mutexReleased: 'Mutex Lock Released. Gateway is once again available for incoming automation.'
        },
        observability: {
          title: 'Hardware Observability & Proactive Watchdog',
          subtitle: 'Real-time telemetry indicators inspired by Prometheus Node Exporter and the cron health watchdog.',
          ramGauge: 'RAM Memory Allocation',
          cpuGauge: 'CPU Utilization',
          diskGauge: 'Rootfs Disk Consumption',
          ramWarning: 'High RAM threshold alert (>80%)! Triggering self-healing remediation...',
          ramOptimal: 'Optimal Hardware Health',
          btnStress: '⚠️ Simulate RAM Memory Leak (Stress)',
          btnRemediate: '🩺 Execute Self-Healing (Ansible Remediation)',
          btnMetricsStream: '📊 Inspect /metrics Endpoint (Prometheus Raw)',
          btnMetricsHide: 'Hide /metrics Stream',
          metricsTitle: 'Live Prometheus Metrics Inspection (/metrics)',
          metricsDesc: 'Live payload produced by node_exporter in OpenMetrics standard format (text/plain). Dynamically recalculated based on hardware load:',
          metricsCopy: 'Copy Metrics',
          metricsCopied: 'Copied!',
          watchdogLogTitle: 'Live Watchdog Audit Log (/tmp/edge_watchdog.log)'
        },
        terminal: {
          title: 'Interactive Ansible Terminal',
          subtitle: 'Run genuine diagnostic and provisioning scripts with colored terminal output.',
          btnVerify: 'Run ./scripts/verify_cluster.sh',
          btnAnsible: 'Run ./scripts/demo_ansible_live.sh',
          btnClean: 'Clear Terminal'
        }
      },
      items: [
        {
          id: 'orchestration-installer',
          title: 'Edge Orchestration Framework «Edge Infrastructure Orchestrator»',
          category: 'DevOps / Infrastructure as Code',
          badge: 'Flagship Project',
          cardDescription: 'End-to-end Infrastructure as Code (IaC) and event-driven orchestration framework automating provisioning, production hardening, and lifecycle management across 115+ edge gateways.',
          description: 'End-to-end Infrastructure as Code (IaC) and event-driven orchestration framework automating provisioning, production hardening, and lifecycle management across 115+ edge gateways.',
          problem: 'Managing fleets of geographically distributed Linux/Orange Pi edge gateways required manual, error-prone interventions lasting hours per node. Crucially, when multiple operators or automated triggers executed tasks against the same node concurrently, deployment collisions (race conditions) occurred, corrupting configurations and leaving field hardware in unrecoverable zombie states.',
          solution: 'Engineered a declarative automation framework utilizing Ansible Core and Python with dynamic inventory discovery. Implemented a mutual exclusion (Mutex) concurrency control mechanism that compares observed live state against requested state, instantly aborting overlapping runs to guarantee zero race conditions. Hardened edge Docker nodes with bounded CPU/RAM limits, JSON log rotation policies to prevent flash memory burnout, and proactive health watchdogs.',
          highlights: [
            'Full end-to-end gateway lifecycle automation, slashing deployment duration from hours down to under 5 minutes.',
            'Custom Python dynamic inventory plugin featuring dual-state separation (actual vs target) and automated Mutex locking.',
            'Production container hardening with strict CPU/RAM quotas and JSON log rotation (50MB/5 files) to prevent SD card exhaustion.',
            'Automated post-provisioning of Zabbix/Prometheus telemetry agents and Grafana observability dashboards.'
          ],
          tags: ['Ansible', 'Python', 'Docker Hardening', 'Edge Linux', 'Orange Pi', 'Event-Driven EDA'],
          metrics: '115+ gateways provisioned without manual intervention and 0 deployment collisions',
          githubUrl: 'https://github.com/sgloayza/edge-infrastructure-orchestrator'
        },
        {
          id: 'resilient-cdc-pipeline',
          title: 'Resilient Real-Time Data Pipeline (CDC)',
          category: 'Data Streaming & Event-Driven',
          badge: 'High Availability',
          cardDescription: 'Continuous real-time Change Data Capture (CDC) streaming pipeline on Apache Kafka, replicating telemetry from MongoDB to audit clusters with sub-second latency.',
          description: 'Continuous real-time Change Data Capture (CDC) streaming pipeline on Apache Kafka, replicating telemetry from MongoDB to audit clusters with sub-second latency.',
          problem: 'High-throughput operational databases suffered severe performance degradation under analytical querying workloads. More critically, accidental or malicious deletions on live operational collections caused irreversible data loss, breaching statutory audit and compliance requirements.',
          solution: 'Deployed a decoupled streaming architecture using Debezium and Apache Kafka to read directly from MongoDB oplog Change Streams without impacting transaction latency. The dedicated historical sink connector was configured to preserve all inserts and updates while dropping destructive deletions, providing an immutable audit repository backed by 365-day TTL retention policies.',
          highlights: [
            'Debezium connectors deployment across distributed Apache Kafka and Kafka Connect clusters.',
            'High-concurrency Python consumer for deserializing and validating complex BSON documents.',
            'Fault-tolerant streaming pipeline featuring exponential backoff retries and guaranteed eventual consistency.',
            'High-availability MongoDB replica sets ensuring data durability and full disaster recovery compliance.'
          ],
          tags: ['Kafka', 'Debezium CDC', 'MongoDB Replicas', 'Zookeeper', 'Python', 'FastAPI'],
          metrics: 'Sub-second latency in production event synchronization and 100% audit data retention'
        },
        {
          id: 'iot-telemetry-monitoring',
          title: 'IoT Gateway Telemetry & Monitoring Platform',
          category: 'Embedded Systems & Observability',
          badge: 'Hardware Optimization',
          cardDescription: 'Centralized telemetry, command-and-control, and diagnostic platform for field edge hardware, combining asynchronous FastAPI microservices, MQTT, and preventive RAM stabilization.',
          description: 'Centralized telemetry, command-and-control, and diagnostic platform for field edge hardware, combining asynchronous FastAPI microservices, MQTT, and preventive RAM stabilization.',
          problem: 'Field gateways (Orange Pi SBCs with 1GB–2GB RAM) experienced sporadic system freezes and unprompted kernel panics due to subtle memory leaks and zombie socket accumulation in legacy telemetry routines, forcing costly on-site manual power cycles.',
          solution: 'Developed a lightweight asynchronous FastAPI service handling high-throughput MQTT telemetry and secure remote SSH tasking (Paramiko). Traced and patched memory leaks in embedded services and deployed automated watchdog daemons that continuously monitor RAM and disk thresholds, remediating degraded services before OS failure.',
          highlights: [
            'FastAPI asynchronous microservice handling live telemetry ingestion and MQTT message distribution.',
            'Root-cause diagnostic and permanent resolution of RAM memory leaks across Orange Pi edge nodes.',
            'Fleet remote management with authenticated, parameterized SSH automation via Paramiko.',
            'Interactive live sensor graphing UI and dynamic Excel audit report generation.'
          ],
          tags: ['FastAPI', 'MQTT', 'Orange Pi', 'Paramiko SSH', 'Grafana', 'React'],
          metrics: '100% reduction in unexpected hardware reboots due to RAM exhaustion'
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
