<template>
  <section class="skills section" id="skills">
    <h2 class="section-title">Skills</h2>
    <div class="skills-map-container">
      
      <!-- Left Column: Frontend -->
      <div class="skills-column left-column">
        <div 
          v-for="(skill, index) in frontendSkills" 
          :key="index" 
          class="skill-card"
          data-aos="fade-right"
          :data-aos-delay="index * 50"
          @mouseenter="setHover('frontend', index)"
          @mouseleave="clearHover()"
          :class="{ 'card-hovered': hoveredType === 'frontend' && hoveredIndex === index }"
        >
          <i :class="[skill.icon, 'skills__icon']"></i>
          <span class="skill-name">{{ skill.name }}</span>
        </div>
      </div>

      <!-- Center: Image & Connections -->
      <div class="skills-center">
        <div class="center-image-wrapper">
          <img src="../assets/images/myView.jpg" alt="Nay Ba La" class="center-img" />
        </div>
        <!-- Dynamic connecting lines using SVG -->
        <svg class="skills-connections" viewBox="0 0 800 600" preserveAspectRatio="none">
          <!-- Left Spoke Lines -->
          <line 
            v-for="(line, index) in frontendLines"
            :key="'fe-' + index"
            :x1="line.x1" :y1="line.y1" :x2="line.x2" :y2="line.y2"
            stroke="var(--first-color)" 
            :stroke-width="hoveredType === 'frontend' && hoveredIndex === index ? '3.5' : '1.5'" 
            :opacity="hoveredType === 'frontend' && hoveredIndex === index ? '1' : '0.3'"
            :class="{ 'flowing-line': true, 'highlighted-line': hoveredType === 'frontend' && hoveredIndex === index }"
          />

          <!-- Right Spoke Lines -->
          <line 
            v-for="(line, index) in backendLines"
            :key="'be-' + index"
            :x1="line.x1" :y1="line.y1" :x2="line.x2" :y2="line.y2"
            stroke="var(--first-color)" 
            :stroke-width="hoveredType === 'backend' && hoveredIndex === index ? '3.5' : '1.5'" 
            :opacity="hoveredType === 'backend' && hoveredIndex === index ? '1' : '0.3'"
            :class="{ 'flowing-line': true, 'highlighted-line': hoveredType === 'backend' && hoveredIndex === index }"
          />
        </svg>
      </div>

      <!-- Right Column: Backend & Systems -->
      <div class="skills-column right-column">
        <div 
          v-for="(skill, index) in backendSkills" 
          :key="index" 
          class="skill-card"
          data-aos="fade-left"
          :data-aos-delay="index * 50"
          @mouseenter="setHover('backend', index)"
          @mouseleave="clearHover()"
          :class="{ 'card-hovered': hoveredType === 'backend' && hoveredIndex === index }"
        >
          <i :class="[skill.icon, 'skills__icon']"></i>
          <span class="skill-name">{{ skill.name }}</span>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

const hoveredType = ref(null);
const hoveredIndex = ref(null);

const setHover = (type, index) => {
  hoveredType.value = type;
  hoveredIndex.value = index;
};

const clearHover = () => {
  hoveredType.value = null;
  hoveredIndex.value = null;
};

const frontendSkills = [
  { name: "HTML", icon: "fa-brands fa-html5" },
  { name: "CSS", icon: "fa-brands fa-css3-alt" },
  { name: "Bootstrap", icon: "fa-brands fa-bootstrap" },
  { name: "Tailwind CSS", icon: "fa-solid fa-wind" },
  { name: "JavaScript", icon: "fa-brands fa-js" },
  { name: "TypeScript", icon: "fa-solid fa-code" },
  { name: "Vue Js", icon: "fa-brands fa-vuejs" },
  { name: "Nuxt Js", icon: "fa-brands fa-vuejs" },
  { name: "React", icon: "fa-brands fa-react" },
  { name: "Next Js", icon: "fa-brands fa-react" },
  { name: "Svelte", icon: "fa-solid fa-fire" }
];

const backendSkills = [
  { name: "Php", icon: "fa-brands fa-php" },
  { name: "Laravel", icon: "fa-brands fa-laravel" },
  { name: "Node Js", icon: "fa-brands fa-node-js" },
  { name: "Express Js", icon: "fa-solid fa-server" },
  { name: "Nest Js", icon: "fa-solid fa-cubes" },
  { name: "PostgreSQL", icon: "fa-solid fa-database" },
  { name: "MySQL", icon: "fa-solid fa-database" },
  { name: "Mongo DB", icon: "fa-solid fa-leaf" },
  { name: "Linux Ubuntu", icon: "fa-brands fa-linux" },
  { name: "Prime Vue", icon: "fa-solid fa-shield-halved" },
  { name: "Prime React", icon: "fa-solid fa-shield-halved" }
];

const frontendLines = [
  { x1: 220, y1: 30, x2: 400, y2: 300 },
  { x1: 220, y1: 80, x2: 400, y2: 300 },
  { x1: 220, y1: 130, x2: 400, y2: 300 },
  { x1: 220, y1: 180, x2: 400, y2: 300 },
  { x1: 220, y1: 230, x2: 400, y2: 300 },
  { x1: 220, y1: 280, x2: 400, y2: 300 },
  { x1: 220, y1: 330, x2: 400, y2: 300 },
  { x1: 220, y1: 380, x2: 400, y2: 300 },
  { x1: 220, y1: 430, x2: 400, y2: 300 },
  { x1: 220, y1: 480, x2: 400, y2: 300 },
  { x1: 220, y1: 530, x2: 400, y2: 300 }
];

const backendLines = [
  { x1: 580, y1: 30, x2: 400, y2: 300 },
  { x1: 580, y1: 80, x2: 400, y2: 300 },
  { x1: 580, y1: 130, x2: 400, y2: 300 },
  { x1: 580, y1: 180, x2: 400, y2: 300 },
  { x1: 580, y1: 230, x2: 400, y2: 300 },
  { x1: 580, y1: 280, x2: 400, y2: 300 },
  { x1: 580, y1: 330, x2: 400, y2: 300 },
  { x1: 580, y1: 380, x2: 400, y2: 300 },
  { x1: 580, y1: 430, x2: 400, y2: 300 },
  { x1: 580, y1: 480, x2: 400, y2: 300 },
  { x1: 580, y1: 530, x2: 400, y2: 300 }
];
</script>

<style scoped>
.skills-map-container {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  align-items: center;
  position: relative;
  max-width: 1100px;
  margin: 0 auto;
  padding: 2rem 1rem;
}

@media screen and (min-width: 992px) {
  .skills-map-container {
    grid-template-columns: 1fr 350px 1fr;
    gap: 0;
  }
}

.skills-column {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  z-index: 10;
}

.left-column {
  align-items: flex-end;
  text-align: right;
}

.right-column {
  align-items: flex-start;
  text-align: left;
}

/* Animations */
@keyframes flow-lines {
  to {
    stroke-dashoffset: -20;
  }
}

.flowing-line {
  stroke-dasharray: 6 4;
  animation: flow-lines 1.5s linear infinite;
  transition: stroke-width 0.3s ease, opacity 0.3s ease, stroke 0.3s ease;
}

.highlighted-line {
  stroke: #10b981;
  animation-duration: 0.6s;
}

@keyframes bobble {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-5px);
  }
}

.skill-card {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.06);
  padding: 0.6rem 1.25rem;
  border-radius: 12px;
  color: #333;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.04);
  width: 220px;
  animation: bobble 4s ease-in-out infinite;
}

.skill-card:nth-child(even) {
  animation-delay: 0.5s;
  animation-duration: 4.5s;
}

.skill-card:nth-child(3n) {
  animation-delay: 1s;
  animation-duration: 5s;
}

.skill-card:nth-child(3n+1) {
  animation-delay: 1.5s;
  animation-duration: 3.5s;
}

.left-column .skill-card {
  flex-direction: row-reverse;
}

.activeDark .skill-card {
  background: rgba(30, 41, 59, 0.85);
  border-color: rgba(255, 255, 255, 0.08);
  color: #f1f5f9;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

.skill-card:hover,
.card-hovered {
  animation-play-state: paused;
  transform: translateY(-8px) scale(1.05);
  border-color: var(--first-color);
  box-shadow: 0 8px 25px rgba(62, 111, 244, 0.15);
}

.activeDark .skill-card:hover,
.activeDark .card-hovered {
  box-shadow: 0 8px 25px rgba(62, 111, 244, 0.3);
}

.skill-name {
  font-size: 0.95rem;
  font-weight: 600;
}

.skills__icon {
  font-size: 1.5rem;
  color: var(--first-color);
  transition: transform 0.3s ease;
}

.skill-card:hover .skills__icon,
.card-hovered .skills__icon {
  transform: scale(1.2);
}

.skills-center {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 100%;
  min-height: 320px;
}

.center-image-wrapper {
  width: 270px;
  height: 270px;
  border-radius: 50%;
  padding: 6px;
  background: linear-gradient(135deg, var(--first-color), #10b981);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 20;
  animation: pulse-ring 3s infinite ease-in-out;
}

.center-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
  border: 4px solid #fff;
}

.activeDark .center-img {
  border-color: #1e293b;
}

.skills-connections {
  position: absolute;
  top: 0;
  left: -225px;
  width: 800px;
  height: 100%;
  pointer-events: none;
  z-index: 1;
}

@keyframes pulse-ring {
  0% {
    box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.4);
  }
  70% {
    box-shadow: 0 0 0 20px rgba(16, 185, 129, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(16, 185, 129, 0);
  }
}

@media screen and (max-width: 991px) {
  .skills-connections {
    display: none;
  }
  .skills-column {
    align-items: center;
    text-align: center;
    flex-flow: row wrap;
    justify-content: center;
  }
  .left-column .skill-card {
    flex-direction: row;
  }
  .skill-card {
    width: auto;
    min-width: 140px;
    animation: none;
  }
  .skills-center {
    order: -1;
  }
  .center-image-wrapper {
    width: 180px;
    height: 180px;
  }
}
</style>
