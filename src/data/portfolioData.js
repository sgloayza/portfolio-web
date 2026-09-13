import avatarImg from '../assets/sandra_loayza.jpg';

const baseUrl = import.meta.env.BASE_URL || '/';

export const personalInfo = {
  name: "Sandra Loayza",
  title: "Ingeniera de Software | DevOps & Backend | IoT",
  location: "Guayaquil, Ecuador",
  education: "Ing. en Ciencias Computacionales — ESPOL",
  email: "sgloayza94@gmail.com",
  phone: "+593 99 443 6148",
  linkedin: "https://www.linkedin.com/in/sgloayza",
  github: "https://github.com/sgloayza",
  cvUrl: `${baseUrl}CVSandraLoayza_2026.pdf`,
  avatarUrl: avatarImg,
  summary: `Ingeniera de software graduada de la ESPOL. Actualmente trabajo en SIEMAV, donde me dedico al desarrollo backend con Python (FastAPI), automatización de servidores con Ansible y sistemas de telemetría con hardware en campo (gateways y Orange Pi). Me gusta trabajar donde el código se cruza con la infraestructura para hacer despliegues rápidos, reproducibles y estables en producción.`
};

export const metrics = [
  {
    id: "hours",
    value: "3,630+",
    label: "Horas de Ingeniería",
    description: "Registradas netas en YouTrack con dedicación enfocada en código e infraestructura."
  },
  {
    id: "tasks",
    value: "87%",
    label: "Tasa de Resolución",
    description: "307 tareas completadas con éxito de 351 asignadas en soporte y arquitectura."
  },
  {
    id: "gateways",
    value: "115+",
    label: "Gateways Desplegados",
    description: "Nodos y estaciones IoT configurados y validados individualmente en producción."
  },
  {
    id: "stability",
    value: "99.9%",
    label: "Estabilidad de Nodos",
    description: "Mitigación de fugas de memoria RAM y automatización reproducible con Ansible."
  }
];

export const skillCategories = [
  {
    id: "devops",
    name: "DevOps & Cloud",
    icon: "Server",
    skills: [
      { name: "Ansible (Core, Roles, Vault, Navigator, Execution Environments)", level: 95 },
      { name: "Docker & Docker Compose (Orquestación multinivel)", level: 90 },
      { name: "CI/CD (GitLab Runners personalizados, GitHub Actions)", level: 90 },
      { name: "Kubernetes (Gestión de Pods, Manifiestos básicos/intermedios)", level: 75 },
      { name: "Linux Administration (Debian, Ubuntu, CentOS, Shell Scripting)", level: 90 },
      { name: "Web Servers (Nginx, Uvicorn, Gunicorn, Reverse Proxy, SSL)", level: 85 }
    ]
  },
  {
    id: "backend",
    name: "Backend & Arquitectura",
    icon: "Terminal",
    skills: [
      { name: "Python (FastAPI, Flask, Django, Pydantic, Type Hinting)", level: 95 },
      { name: "Microservicios & Event-Driven Architecture (EDA)", level: 90 },
      { name: "Node.js & JavaScript (ES6+, Express, REST APIs)", level: 85 },
      { name: "Clean Architecture & Patrones de Diseño", level: 85 },
      { name: "Java & Spring Boot / C++", level: 75 }
    ]
  },
  {
    id: "data",
    name: "Data & Streaming",
    icon: "Database",
    skills: [
      { name: "Apache Kafka, Kafka Connect & Zookeeper", level: 88 },
      { name: "Debezium (Change Data Capture - CDC en tiempo real)", level: 85 },
      { name: "MongoDB (Replica Sets, Change Streams, BSON pipelines)", level: 90 },
      { name: "Bases Relacionales (PostgreSQL, MySQL, SQLAlchemy)", level: 85 },
      { name: "Redis (Caché y gestión de colas de mensajes)", level: 80 }
    ]
  },
  {
    id: "iot",
    name: "IoT & Observabilidad",
    icon: "Cpu",
    skills: [
      { name: "Protocolos IoT: MQTT (Mosquitto), LoRaWAN, BLE, RFID", level: 90 },
      { name: "Hardware Embebido & Single Board: Orange Pi, Gateways", level: 88 },
      { name: "Automatización SSH con Paramiko & Telemetría Remota", level: 90 },
      { name: "Grafana & Prometheus (Exporters de hardware, contenedores y DBs)", level: 85 },
      { name: "Zabbix (Roles de despliegue automatizado con Ansible)", level: 85 }
    ]
  }
];

export const featuredProjects = [
  {
    id: "orchestration-installer",
    title: "Framework de Orquestación «Edge Infrastructure Orchestrator»",
    category: "DevOps / Infraestructura como Código",
    badge: "Caso Insignia",
    cardDescription: "Solución integral de Infraestructura como Código (IaC) y orquestación masiva para el aprovisionamiento, hardening y ciclo de vida de más de 115 gateways Edge distribuidos.",
    description: "Solución integral de Infraestructura como Código (IaC) y orquestación masiva para el aprovisionamiento, hardening y ciclo de vida de más de 115 gateways Edge distribuidos.",
    problem: "En flotas de gateways (Orange Pi / Linux) distribuidos geográficamente, los despliegues manuales consumían horas por dispositivo y generaban errores humanos. Además, cuando múltiples operadores o incidencias intentaban configurar un mismo equipo a la vez, se producían colisiones de despliegue (condiciones de carrera) que dejaban los nodos inoperables en campo.",
    solution: "Se diseñó un framework basado en Ansible Core y Python con inventario dinámico en tiempo real. La arquitectura implementa un control de concurrencia por exclusión mutua (Mutex) que detecta el estado real frente al deseado y bloquea automáticamente ejecuciones conflictivas simultáneas. Incluye hardening de contenedores Docker con cuotas estrictas de CPU/RAM, rotación de logs JSON para proteger las memorias flash y watchdog proactivo de autorrecuperación.",
    highlights: [
      "Automatización completa del ciclo de vida de gateways, reduciendo tiempos de despliegue de horas a menos de 5 minutos.",
      "Desarrollo de plugins de inventario dinámico en Python con patrón de doble estado (actual vs target) y bloqueo Mutex.",
      "Hardening de contenedores en producción con cuotas de CPU/RAM y rotación de logs (50MB/5 ficheros) para evitar saturación de tarjetas SD.",
      "Aprovisionamiento post-instalación de agentes de monitoreo Zabbix/Prometheus y métricas para Grafana."
    ],
    tags: ["Ansible", "Python", "Docker Hardening", "Edge Linux", "Orange Pi", "Event-Driven EDA"],
    metrics: "115+ gateways aprovisionados sin intervención manual y 0 colisiones de despliegue",
    githubUrl: "https://github.com/sgloayza/edge-infrastructure-orchestrator"
  },
  {
    id: "resilient-cdc-pipeline",
    title: "Pipeline de Datos Resiliente en Tiempo Real (CDC)",
    category: "Data Streaming & Event-Driven",
    badge: "Alta Disponibilidad",
    cardDescription: "Streaming continuo de eventos mediante Change Data Capture (CDC) sobre Apache Kafka, replicando telemetría desde MongoDB hacia clústeres de auditoría con latencia sub-segundo.",
    description: "Streaming continuo de eventos mediante Change Data Capture (CDC) sobre Apache Kafka, replicando telemetría desde MongoDB hacia clústeres de auditoría con latencia sub-segundo.",
    problem: "Las bases de datos operativas de alta concurrencia sufrían degradación cuando se realizaban consultas analíticas pesadas. Críticamente, cualquier borrado accidental de registros operativos en caliente provocaba la pérdida irreversible de telemetría histórica necesaria para auditorías legales y cumplimiento normativo.",
    solution: "Se implementó una canalización desacoplada con Debezium y Apache Kafka leyendo directamente los Change Streams del oplog de MongoDB sin penalizar la base operativa. El conector hacia la base histórica fue configurado específicamente para persistir inserciones y actualizaciones descartando eliminaciones destructivas, garantizando un repositorio histórico inmutable con políticas de retención TTL de 365 días.",
    highlights: [
      "Implementación de conectores Debezium sobre Apache Kafka y clúster Kafka Connect distribuido.",
      "Consumidor de alta concurrencia programado en Python para deserialización y validación de tipos BSON complejos.",
      "Mecanismo tolerante a fallos con lógica de reintentos exponenciales y consistencia eventual garantizada.",
      "Configuración de réplicas de MongoDB en producción para asegurar integridad en situaciones de contingencia."
    ],
    tags: ["Kafka", "Debezium CDC", "MongoDB Replicas", "Zookeeper", "Python", "FastAPI"],
    metrics: "Latencia sub-segundo en sincronización de eventos y 100% retención para auditorías"
  },
  {
    id: "iot-telemetry-monitoring",
    title: "Plataforma IoT de Telemetría y Monitoreo de Gateways",
    category: "Sistemas Embebidos & Observabilidad",
    badge: "Optimización Hardware",
    cardDescription: "Sistema centralizado de comunicación y telemetría para dispositivos en campo, combinando microservicios asíncronos en FastAPI, colas MQTT y estabilización preventiva de memoria.",
    description: "Sistema centralizado de comunicación y telemetría para dispositivos en campo, combinando microservicios asíncronos en FastAPI, colas MQTT y estabilización preventiva de memoria.",
    problem: "Los gateways en campo (Orange Pi con 1GB-2GB de RAM) sufrían reinicios inesperados y congelamientos del sistema operativo debido a microfugas de memoria RAM y acumulación de sockets zombies en los microservicios de telemetría, obligando a reinicios manuales forzados en sitio.",
    solution: "Se desarrolló un microservicio asíncrono en FastAPI optimizado para bajo consumo de recursos que gestiona la telemetría vía MQTT y comunicación remota segura por SSH (Paramiko). Se diagnosticaron y erradicaron las fugas de memoria en los servicios embebidos y se implementó un script watchdog programado que monitorea proactivamente el consumo de RAM/disco, eliminando el 100% de las caídas inesperadas en hardware.",
    highlights: [
      "Microservicio en FastAPI con endpoints asíncronos para recepción y distribución de telemetría vía MQTT.",
      "Diagnóstico exhaustivo y resolución de fugas de memoria RAM en gateways (Orange Pi / Linux embebido), eliminando reinicios inesperados.",
      "Gestión remota de dispositivos mediante comandos parametrizados por SSH utilizando Paramiko.",
      "Interfaz interactiva para trazado de gráficos lineales de consumo en tiempo real y exportación de reportes dinámicos."
    ],
    tags: ["FastAPI", "MQTT", "Orange Pi", "Paramiko SSH", "Grafana", "React"],
    metrics: "100% de reducción en caídas imprevistas por agotamiento de memoria RAM"
  }
];

export const experienceTimeline = [
  {
    role: "Ingeniero de Software / DevOps",
    company: "SIEMAV",
    period: "2024 — Actual",
    location: "Guayaquil, Ecuador",
    description: "Liderazgo en la arquitectura de automatización de infraestructura con Ansible, desarrollo de microservicios con FastAPI, pipelines de datos en tiempo real (Kafka/CDC) y soporte integral a sistemas en producción.",
    bullets: [
      "Diseño del framework de automatización para más de 115 gateways y estaciones base.",
      "Creación de pipelines en GitLab Runner con agentes dedicados en Windows y Linux para compilación automática.",
      "Implementación de arquitectura simplificada de datos históricos con réplicas de MongoDB y Grafana.",
      "Más de 3,630 horas netas registradas en YouTrack con 87% de tasa de resolución de incidencias complejas."
    ]
  },
  {
    role: "Docente Comunitaria",
    company: "ESPOL",
    period: "2023",
    location: "Guayaquil, Ecuador",
    description: "Transferencia de conocimientos tecnológicos y mentoría a grupos comunitarios en metodologías ágiles y desarrollo de software básico.",
    bullets: [
      "Capacitación en fundamentos de programación y lógica computacional.",
      "Acompañamiento en proyectos prácticos con impacto social."
    ]
  },
  {
    role: "Asistente del Gerente de Sistemas",
    company: "SOLINTEL",
    period: "2022",
    location: "Guayaquil, Ecuador",
    description: "Apoyo en la gestión de infraestructura tecnológica y optimización de procesos internos del departamento de IT.",
    bullets: [
      "Supervisión operativa de servidores internos y soporte a redes corporativas.",
      "Automatización de reportes internos y tareas recurrentes de mantenimiento de sistemas."
    ]
  },
  {
    role: "Ayudante de Cátedra",
    company: "ESPOL",
    period: "2019 — 2021",
    location: "Guayaquil, Ecuador",
    description: "Soporte académico universitario en materias del núcleo de Ciencias Computacionales.",
    bullets: [
      "Refuerzo en algoritmos avanzados, estructuras de datos y buenas prácticas de programación en C++ y Python.",
      "Evaluación y retroalimentación técnica de proyectos de estudiantes de ingeniería."
    ]
  }
];
