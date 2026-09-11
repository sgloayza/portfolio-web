# Sandra Loayza — Portafolio Profesional Web 🚀

<p align="center">
  <a href="https://sgloayza.github.io/portfolio-web/">
    <img src="https://img.shields.io/badge/🌐_Demo_Online-Visitar_Sitio_Web-06B6D4?style=for-the-badge" alt="Demo Online" />
  </a>
  <a href="https://github.com/sgloayza/portfolio-web/actions/workflows/deploy.yml">
    <img src="https://github.com/sgloayza/portfolio-web/actions/workflows/deploy.yml/badge.svg" alt="Deploy Status" />
  </a>
  <img src="https://img.shields.io/badge/React-18.3-61DAFB?style=flat-square&logo=react&logoColor=black" alt="React" />
  <img src="https://img.shields.io/badge/Vite-6.2-646CFF?style=flat-square&logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/Vanilla_CSS-Modern-1572B6?style=flat-square&logo=css3&logoColor=white" alt="CSS" />
  <img src="https://img.shields.io/badge/License-MIT-green?style=flat-square" alt="License" />
</p>

---

## 📖 Descripción del Proyecto

Aplicación web moderna y responsive desarrollada para presentar el perfil profesional, habilidades y logros de ingeniería de **Sandra Loayza** (Ingeniera en Ciencias Computacionales — ESPOL), con un enfoque especializado en **DevOps**, **Arquitectura de Backend**, **Streaming de Datos (Kafka/CDC)** y **Sistemas IoT**.

El proyecto implementa un sistema de diseño propio basado en **Vanilla CSS** con estética *Cyber-Minimalist* (modo oscuro con efectos glassmorphism y acentos de color cian/violeta), micro-animaciones interactivas y un pipeline de **CI/CD con GitHub Actions** que compila y publica automáticamente cada cambio en **GitHub Pages**.

---

## ✨ Características Principales

* ⚡ **Diseño Cyber-Minimalist & Glassmorphism:** Interfaz visual de alto impacto con gradientes sutiles, efectos de desenfoque (`backdrop-filter`), animaciones flotantes y estado de disponibilidad en tiempo real.
* 📊 **Métricas Cuantitativas de Impacto:** Sección dedicada a validar la productividad técnica (+3,630 horas registradas, 87% de resolución de incidencias en YouTrack, 115+ gateways IoT configurados).
* 🛠️ **Matriz de Tecnologías Interactiva:** Pestañas dinámicas para navegar por especialidades (*DevOps & Cloud*, *Backend & Arquitectura*, *Data & Streaming*, *IoT & Observabilidad*) con barras de nivel.
* 📂 **Casos de Estudio con Modales Técnicos:** Visualización de 3 proyectos insignia (Orquestación con Ansible, Pipeline CDC con Kafka/Debezium y Plataforma IoT) con detalle de arquitectura desplegable.
* 📥 **Descarga Directa de CV:** Botón para descargar el currículo oficial en formato PDF directamente desde el sitio.
* 📋 **Copia Rápida de Correo:** Botón con interacción en un clic para copiar el email al portapapeles con confirmación visual (*«¡Copiado!»*).
* 📱 **100% Responsivo:** Adaptado para teléfonos móviles, tablets y monitores de alta resolución.

---

## 🏗️ Estructura del Código

```
portfolio-web/
├── .github/
│   └── workflows/
│       └── deploy.yml            # Pipeline CI/CD GitHub Actions -> GitHub Pages
├── public/
│   ├── sandra_loayza.jpg         # Imagen pública para SEO y OpenGraph
│   └── CVSandraLoayza_2026.pdf   # Curriculum oficial descargable
├── src/
│   ├── assets/
│   │   └── sandra_loayza.jpg     # Fotografía empaquetada como asset de Vite
│   ├── components/
│   │   ├── Navbar.jsx            # Barra sticky, enlaces y descarga de CV
│   │   ├── Hero.jsx              # Presentación, badge pulsante y avatar
│   │   ├── MetricsBar.jsx        # 4 tarjetas de indicadores YouTrack
│   │   ├── SkillsMatrix.jsx      # Tabs interactivos de tecnologías
│   │   ├── Projects.jsx          # Proyectos insignia y modal de arquitectura
│   │   ├── Experience.jsx        # Línea de tiempo profesional
│   │   └── Footer.jsx            # Banner de contacto y redes
│   ├── data/
│   │   └── portfolioData.js      # Datos centralizados y parametrizados
│   ├── App.jsx                   # Componente principal
│   ├── main.jsx                  # Entrada raíz de React
│   └── index.css                 # Sistema de diseño y tokens globales
├── index.html                    # Entrada HTML5 con SEO y Google Fonts
├── package.json                  # Dependencias y scripts npm
├── vite.config.js                # Configuración de Vite (base: /portfolio-web/)
└── .gitignore                    # Exclusiones de Git
```

---

## 🚀 Cómo Ejecutar Localmente

### 1. Clonar el repositorio
```bash
git clone https://github.com/sgloayza/portfolio-web.git
cd portfolio-web
```

### 2. Instalar dependencias
```bash
npm install
```

### 3. Iniciar el servidor local de desarrollo
```bash
npm run dev
```
Abre en tu navegador: `http://localhost:5173/`

### 4. Compilar para producción
```bash
npm run build
```
Genera la carpeta optimizada `dist/` lista para ser desplegada en cualquier servidor web o CDN.

---

## ⚙️ Despliegue Continuo (CI/CD)

Este repositorio utiliza **GitHub Actions** para el despliegue automático:

1. Cada `git push` a la rama `main` dispara el flujo `.github/workflows/deploy.yml`.
2. El runner de Ubuntu ejecuta `npm ci` y `npm run build`.
3. El paquete compilado (`dist/`) se publica de forma transparente en **GitHub Pages**.

---

## 👩‍💻 Autora

**Sandra Loayza**  
*Ingeniera en Ciencias Computacionales — ESPOL*  
* Software Engineer / DevOps / IoT  
* 🌐 [Portafolio en Vivo](https://sgloayza.github.io/portfolio-web/)  
* 💼 [LinkedIn](https://www.linkedin.com/in/sgloayza)  
* 📧 [sgloayza94@gmail.com](mailto:sgloayza94@gmail.com)
