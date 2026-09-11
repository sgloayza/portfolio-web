# Portafolio Web — Sandra Loayza

Sitio web personal desarrollado en **React** y **Vite**, con diseño en **Vanilla CSS** y despliegue continuo en **GitHub Pages** mediante **GitHub Actions**.

🔗 **Sitio en vivo:** [https://sgloayza.github.io/portfolio-web/](https://sgloayza.github.io/portfolio-web/)

---

## Sobre el proyecto

Este proyecto es mi portafolio web personal. El objetivo fue crear una web rápida, ligera y sin dependencias pesadas de estilos (usando CSS puro con variables y flexbox/grid), que muestre mi experiencia en backend, infraestructura y proyectos con hardware en campo.

### Secciones:
* **Sobre mí:** Resumen de perfil y contacto directo (LinkedIn, email, WhatsApp).
* **Métricas YouTrack:** Horas netas de desarrollo registradas, tasa de resolución de tareas y volumen de gateways configurados.
* **Stack tecnológico:** Pestañas con las tecnologías que uso frecuentemente (DevOps, Python/FastAPI, Kafka/MongoDB, IoT).
* **Casos de estudio:** Resumen técnico de 3 proyectos representativos (automatización con Ansible, streaming CDC con Kafka y telemetría de gateways).
* **Experiencia:** Trayectoria laboral y académica.
* **Descarga de CV:** Enlace directo para descargar mi currículo en formato PDF.

---

## Tecnologías utilizadas

* **Frontend:** React 18, Vite, Vanilla CSS.
* **Iconos:** Lucide React.
* **CI/CD:** GitHub Actions (`.github/workflows/deploy.yml`).
* **Hosting:** GitHub Pages.

---

## Cómo correrlo localmente

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/sgloayza/portfolio-web.git
   cd portfolio-web
   ```

2. Instalar dependencias:
   ```bash
   npm install
   ```

3. Iniciar el entorno de desarrollo:
   ```bash
   npm run dev
   ```
   Abre en el navegador `http://localhost:5173/`.

4. Compilar para producción:
   ```bash
   npm run build
   ```

---

## Despliegue

El proyecto se despliega automáticamente en GitHub Pages cada vez que se hace un `push` a la rama `main` a través del workflow definido en `.github/workflows/deploy.yml`.

---

## Contacto

* **Sandra Loayza** — [LinkedIn](https://www.linkedin.com/in/sgloayza) · [sgloayza94@gmail.com](mailto:sgloayza94@gmail.com)
* **Web:** [https://sgloayza.github.io/portfolio-web/](https://sgloayza.github.io/portfolio-web/)
