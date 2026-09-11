# Sandra Loayza — Portafolio Profesional 🚀

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

## 📖 Sobre el Proyecto

Aplicación web desarrollada para presentar mi perfil, experiencia técnica y proyectos como **Ingeniera en Ciencias Computacionales** graduada de la **ESPOL**, especializada en **Backend (Python / FastAPI)**, **Automatización de Infraestructura con Ansible**, **Data Streaming (Kafka/CDC)** y **Sistemas IoT**.

El sitio está construido con **React 18 + Vite** y estilizado con **Vanilla CSS** modular mediante un diseño en modo oscuro con efectos *glassmorphism* (desenfoques translúcidos, acentos neón y micro-animaciones). Se despliega automáticamente en **GitHub Pages** mediante un pipeline de **CI/CD con GitHub Actions** en cada push.

---

## ✨ Características Principales

* ⚡ **Diseño Moderno & Glassmorphism:** Modo oscuro con gradientes sutiles (`backdrop-filter`), tarjetas flotantes y animación pulsante de disponibilidad.
* 📊 **Métricas Reales de Producción:** Indicadores cuantitativos extraídos de YouTrack (+3,630 horas registradas, 87% de tareas resueltas y 115+ gateways configurados en campo).
* 🛠️ **Matriz de Tecnologías Interactiva:** Pestañas para filtrar habilidades técnicas (*DevOps*, *Backend*, *Streaming* e *IoT*) con barras de nivel.
* 📂 **Casos de Estudio con Modales:** Detalle técnico de proyectos insignia (Orquestación con Ansible, Pipeline CDC con Kafka/MongoDB y Telemetría IoT) con ventanas modales de arquitectura.
* 📥 **Descarga Directa de CV:** Botón para descargar mi currículo oficial en formato PDF.
* 📋 **Copia Rápida de Correo:** Botón interactivo para copiar el email al portapapeles con confirmación visual (*«¡Copiado!»*).
* 📱 **Completamente Responsivo:** Adaptado para teléfonos móviles, tablets y pantallas de escritorio.

---

## 🏗️ Estructura del Código

```
portfolio-web/
├── .github/
│   └── workflows/
│       └── deploy.yml            # Pipeline de CI/CD (GitHub Actions -> GitHub Pages)
├── public/
│   ├── sandra_loayza.jpg         # Imagen pública para SEO y OpenGraph
│   └── CVSandraLoayza_2026.pdf   # Curriculum oficial descargable
├── src/
│   ├── assets/
│   │   └── sandra_loayza.jpg     # Fotografía empaquetada como asset de Vite
│   ├── components/
│   │   ├── Navbar.jsx            # Barra de navegación sticky y descarga de CV
│   │   ├── Hero.jsx              # Presentación principal, badge y avatar
│   │   ├── MetricsBar.jsx        # 4 tarjetas de métricas YouTrack
│   │   ├── SkillsMatrix.jsx      # Pestañas interactivas de tecnologías
│   │   ├── Projects.jsx          # Casos de estudio y modal de arquitectura
│   │   ├── Experience.jsx        # Línea de tiempo profesional
│   │   └── Footer.jsx            # Sección de contacto y redes
│   ├── data/
│   │   └── portfolioData.js      # Datos centralizados del sitio
│   ├── App.jsx                   # Componente contenedor
│   ├── main.jsx                  # Entrada raíz de React
│   └── index.css                 # Tokens de diseño y estilos globales
├── index.html                    # Entrada HTML5 con SEO y Google Fonts
├── package.json                  # Dependencias y scripts npm
└── vite.config.js                # Configuración de Vite (base: /portfolio-web/)
```

---

## 🚀 Cómo Ejecutar Localmente

```bash
# 1. Clonar el repositorio
git clone https://github.com/sgloayza/portfolio-web.git
cd portfolio-web

# 2. Instalar dependencias
npm install

# 3. Iniciar servidor local de desarrollo
npm run dev
```
Abre en tu navegador: `http://localhost:5173/`

Para compilar el paquete optimizado de producción:
```bash
npm run build
```

---

## ⚙️ Despliegue Automatizado (CI/CD)

Cada `git push` a la rama `main` ejecuta el pipeline de **GitHub Actions** ([deploy.yml](.github/workflows/deploy.yml)):
1. Descarga el código y configura el entorno de Node.js 22.
2. Ejecuta `npm ci` y compila con `npm run build`.
3. Sube la carpeta `dist/` resultante a **GitHub Pages** de forma transparente.

---

## 📬 Contacto

* **Sandra Loayza** — [LinkedIn](https://www.linkedin.com/in/sgloayza) · [sgloayza94@gmail.com](mailto:sgloayza94@gmail.com)
* 🌐 **Sitio Web en Vivo:** [https://sgloayza.github.io/portfolio-web/](https://sgloayza.github.io/portfolio-web/)
