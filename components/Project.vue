<template>
  <section class="project section" id="project">
    <h2 class="section-title">Projects</h2>

    <div class="project-stack-container">
      <div
        v-for="(project, index) in projects"
        :key="index"
        class="project-stack-card"
        :style="getCardStyle(index)"
      >
        <div class="project-card-inner">
          <div class="project-card-image">
            <img :src="project.image" :alt="project.title" />
          </div>
          <div class="project-card-content">
            <span class="project-card-num">0{{ index + 1 }}</span>
            <h3 class="project-card-title">{{ project.title }}</h3>
            <p class="project-card-description">{{ project.description }}</p>
            <div class="project-card-tech">
              <span
                v-for="(tech, tIndex) in project.tech"
                :key="tIndex"
                class="tech-badge"
              >
                <i :class="tech.icon"></i> {{ tech.name }}
              </span>
            </div>
            <!-- <a :href="project.link" target="_blank" class="project-card-btn">
              Explore Project <i class="fa-solid fa-arrow-up-right-from-square ms-1"></i>
            </a> -->
          </div>
        </div>
      </div>
    </div>
    <hr class="project-divider" />
  </section>
</template>

<script setup>
import accountingImg from "../assets/images/Accounting_system.jpg";
import fintechImg from "../assets/images/Fin_tech_system.jpg";
import posImg from "../assets/images/POS_system.jpg";
import garmentImg from "../assets/images/Garment_factory.jpg";
import loyaltyImg from "../assets/images/Loyalty_point_system.jpg";
import mediaImg from "../assets/images/Media_web_system.jpg";
import realestateImg from "../assets/images/Real_estate_system.jpg";

const projects = [
  {
    title: "Accounting System",
    description:
      "A comprehensive accounting system designed to streamline financial workflows, manage ledger transactions, generate balance sheets, and automate tax compliance processing.",
    image: accountingImg,
    // tech: [
    //   { name: "Laravel", icon: "fa-brands fa-laravel" },
    //   { name: "MySQL", icon: "fa-solid fa-database" },
    //   { name: "PHP", icon: "fa-brands fa-php" },
    //   { name: "Bootstrap", icon: "fa-brands fa-bootstrap" },
    // ],
    link: "https://github.com/naybala",
  },
  {
    title: "Fin Tech System",
    description:
      "An advanced fintech platform featuring real-time wallet tracking, secure peer-to-peer transfers, interactive balance charts, and multi-currency payment processing.",
    image: fintechImg,
    // tech: [
    //   { name: "Vue.js", icon: "fa-brands fa-vuejs" },
    //   { name: "Node.js", icon: "fa-brands fa-node-js" },
    //   { name: "PostgreSQL", icon: "fa-solid fa-database" },
    //   { name: "JavaScript", icon: "fa-brands fa-js" },
    // ],
    link: "https://github.com/naybala",
  },
  {
    title: "POS System",
    description:
      "A high-performance retail POS system supporting automated barcode scanning, dynamic product search, real-time inventory alerts, and instant invoice billing receipt creation.",
    image: posImg,
    // tech: [
    //   { name: "Laravel", icon: "fa-brands fa-laravel" },
    //   { name: "SQLite", icon: "fa-solid fa-database" },
    //   { name: "Vue.js", icon: "fa-brands fa-vuejs" },
    //   { name: "Tailwind", icon: "fa-brands fa-css3-alt" },
    // ],
    link: "https://github.com/naybala",
  },
  {
    title: "Garment System",
    description:
      "A specialized system for managing garment manufacturing processes, handling raw material inventory, production line scheduling, and order tracking.",
    image: garmentImg,
    // tech: [
    //   { name: "Laravel", icon: "fa-brands fa-laravel" },
    //   { name: "MySQL", icon: "fa-solid fa-database" },
    //   { name: "PHP", icon: "fa-brands fa-php" },
    //   { name: "Bootstrap", icon: "fa-brands fa-bootstrap" },
    // ],
    link: "https://github.com/naybala",
  },
  {
    title: "Loyalty Point System",
    description:
      "A customized customer loyalty program designed to track member reward points, process reward redemptions, and manage discount voucher lifecycle.",
    image: loyaltyImg,
    // tech: [
    //   { name: "Vue.js", icon: "fa-brands fa-vuejs" },
    //   { name: "Node.js", icon: "fa-brands fa-node-js" },
    //   { name: "PostgreSQL", icon: "fa-solid fa-database" },
    //   { name: "Express", icon: "fa-brands fa-js" },
    // ],
    link: "https://github.com/naybala",
  },
  {
    title: "Media Web System",
    description:
      "A media publishing and resource management platform featuring structured layout directories, rapid upload tools, and multi-user subscription profiles.",
    image: mediaImg,
    // tech: [
    //   { name: "Laravel", icon: "fa-brands fa-laravel" },
    //   { name: "MySQL", icon: "fa-solid fa-database" },
    //   { name: "PHP", icon: "fa-brands fa-php" },
    //   { name: "Bootstrap", icon: "fa-brands fa-bootstrap" },
    // ],
    link: "https://github.com/naybala",
  },
  {
    title: "Real Estate System",
    description:
      "A comprehensive listing portal matching home buyers with properties, supporting advanced keyword filters, agent profiles, and property maps.",
    image: realestateImg,
    // tech: [
    //   { name: "Laravel", icon: "fa-brands fa-laravel" },
    //   { name: "SQLite", icon: "fa-solid fa-database" },
    //   { name: "Vue.js", icon: "fa-brands fa-vuejs" },
    //   { name: "Tailwind", icon: "fa-brands fa-css3-alt" },
    // ],
    link: "https://github.com/naybala",
  },
];

const getCardStyle = (index) => {
  return {
    top: `calc(120px + ${index * 30}px)`,
    zIndex: index + 1,
  };
};
</script>

<style scoped>
#project {
  background-color: rgba(139, 143, 142, 0.3);
}
.section-title::after {
  width: 120px;
  top: 2.5rem;
}

/* Stacking Container */
.project-stack-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 3rem 1.5rem;
}

/* Individual Stacking Card */
.project-stack-card {
  position: sticky;
  width: 100%;
  max-width: 1200px;
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  background: #242f3f;
  color: #fff;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
  margin-bottom: 8vh;
  border: 1px solid rgba(255, 255, 255, 0.05);
}

.activeDark .project-stack-card {
  background: #1b2330;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.3);
  border-color: rgba(255, 255, 255, 0.08);
}

/* Hover Zoom Effect on Image Column */
.project-card-inner {
  display: grid;
  grid-template-columns: 1fr;
  min-height: 380px;
}

.project-card-image {
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 250px;
  overflow: hidden;
  background: #1b2330;
}

.project-card-image img {
  width: 100%;
  height: 100%;
  object-fit: fill;
  transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}

.project-stack-card:hover .project-card-image img {
  transform: scale(1.04);
}

/* Card Content Details */
.project-card-content {
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.project-card-num {
  font-family: monospace;
  color: var(--first-color);
  font-size: 1.1rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  display: block;
}

.project-card-title {
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.project-card-description {
  font-size: 0.95rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.85);
  margin-bottom: 1.5rem;
}

/* Tech Stack Badges */
.project-card-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-bottom: 2rem;
}

.tech-badge {
  background: rgba(255, 255, 255, 0.08);
  padding: 0.4rem 0.8rem;
  border-radius: 20px;
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.9);
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  border: 1px solid rgba(255, 255, 255, 0.05);
}

.tech-badge i {
  color: var(--first-color);
  font-size: 1rem;
}

/* CTA Button */
.project-card-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.8rem 1.5rem;
  background: var(--first-color);
  color: #fff;
  border-radius: 8px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  align-self: flex-start;
}

.project-card-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  filter: brightness(1.1);
}

.project-divider {
  border: 0;
  height: 1px;
  background: rgba(255, 255, 255, 0.1);
  margin: 2rem 0;
}

/* Desktop Responsive Layout */
@media screen and (min-width: 768px) {
  .project-card-inner {
    grid-template-columns: 1.2fr 1fr;
  }
  .project-card-image {
    min-height: auto;
  }
}

/* Tablet & Mobile responsive adjustments */
@media screen and (max-width: 767px) {
  .project-stack-card {
    margin-bottom: 5vh;
  }

  .project-card-content {
    padding: 1.75rem;
  }

  .project-card-title {
    font-size: 1.4rem;
  }

  .project-card-description {
    font-size: 0.875rem;
  }
}
</style>
