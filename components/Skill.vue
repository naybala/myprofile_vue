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
          :class="{
            'card-hovered':
              hoveredType === 'frontend' && hoveredIndex === index,
          }"
        >
          <i :class="[skill.icon, 'skills__icon']"></i>
          <span class="skill-name">{{ skill.name }}</span>
        </div>
      </div>

      <!-- Center: Image & Connections -->
      <div class="skills-center">
        <div class="center-image-wrapper">
          <img
            src="../assets/images/myView.jpg"
            alt="Nay Ba La"
            class="center-img"
          />
        </div>
        <!-- Dynamic connecting lines using SVG -->
        <svg
          class="skills-connections"
          viewBox="0 0 800 600"
          preserveAspectRatio="none"
        >
          <!-- Left Spoke Lines -->
          <line
            v-for="(line, index) in frontendLines"
            :key="'fe-' + index"
            :x1="line.x1"
            :y1="line.y1"
            :x2="line.x2"
            :y2="line.y2"
            stroke="var(--first-color)"
            :stroke-width="
              hoveredType === 'frontend' && hoveredIndex === index
                ? '3.5'
                : '1.5'
            "
            :opacity="
              hoveredType === 'frontend' && hoveredIndex === index ? '1' : '0.3'
            "
            :class="{
              'flowing-line': true,
              'highlighted-line':
                hoveredType === 'frontend' && hoveredIndex === index,
            }"
          />

          <!-- Right Spoke Lines -->
          <line
            v-for="(line, index) in backendLines"
            :key="'be-' + index"
            :x1="line.x1"
            :y1="line.y1"
            :x2="line.x2"
            :y2="line.y2"
            stroke="var(--first-color)"
            :stroke-width="
              hoveredType === 'backend' && hoveredIndex === index
                ? '3.5'
                : '1.5'
            "
            :opacity="
              hoveredType === 'backend' && hoveredIndex === index ? '1' : '0.3'
            "
            :class="{
              'flowing-line': true,
              'highlighted-line':
                hoveredType === 'backend' && hoveredIndex === index,
            }"
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
          :class="{
            'card-hovered': hoveredType === 'backend' && hoveredIndex === index,
          }"
        >
          <i :class="[skill.icon, 'skills__icon']"></i>
          <span class="skill-name">{{ skill.name }}</span>
        </div>
      </div>
    </div>

    <!-- Criss Cross Parallax Photo Collage (Pinned and Sticky) -->
    <div class="collage-pin-container" ref="pinContainer">
      <div class="collage-sticky-viewport">
        <div class="collage-track">
          <!-- Column 1: HTML, CSS, Bootstrap (Moves Up) -->
          <div
            class="collage-column col-vue"
            :style="{
              transform: `translateY(${offsetY * -1}px) skewX(-22deg)`,
            }"
          >
            <div class="collage-column-content">
              <div class="collage-skill-item">
                <i class="fa-brands fa-html5 collage-icon"></i>
                <span class="collage-name">HTML</span>
              </div>
              <div class="collage-skill-item">
                <i class="fa-brands fa-css3-alt collage-icon"></i>
                <span class="collage-name">CSS</span>
              </div>
              <div class="collage-skill-item">
                <i class="fa-brands fa-bootstrap collage-icon"></i>
                <span class="collage-name">Bootstrap</span>
              </div>
            </div>
          </div>

          <!-- Column 2: Tailwind, JS, TS (Moves Down) -->
          <div
            class="collage-column col-laravel"
            :style="{ transform: `translateY(${offsetY * 1}px) skewX(-22deg)` }"
          >
            <div class="collage-column-content">
              <div class="collage-skill-item">
                <i class="fa-solid fa-wind collage-icon"></i>
                <span class="collage-name">Tailwind CSS</span>
              </div>
              <div class="collage-skill-item">
                <i class="fa-brands fa-js collage-icon"></i>
                <span class="collage-name">JavaScript</span>
              </div>
              <div class="collage-skill-item">
                <i class="fa-solid fa-code collage-icon"></i>
                <span class="collage-name">TypeScript</span>
              </div>
            </div>
          </div>

          <!-- Column 3: Vue, Nuxt, Svelte (Moves Up) -->
          <div
            class="collage-column col-node"
            :style="{
              transform: `translateY(${offsetY * -1}px) skewX(-22deg)`,
            }"
          >
            <div class="collage-column-content">
              <div class="collage-skill-item">
                <i class="fa-brands fa-vuejs collage-icon"></i>
                <span class="collage-name">Vue Js</span>
              </div>
              <div class="collage-skill-item">
                <i class="fa-brands fa-vuejs collage-icon"></i>
                <span class="collage-name">Nuxt Js</span>
              </div>
              <div class="collage-skill-item">
                <i class="fa-solid fa-fire collage-icon"></i>
                <span class="collage-name">Svelte</span>
              </div>
            </div>
          </div>

          <!-- Column 4: React, Next, PHP (Moves Down) -->
          <div
            class="collage-column col-react"
            :style="{ transform: `translateY(${offsetY * 1}px) skewX(-22deg)` }"
          >
            <div class="collage-column-content">
              <div class="collage-skill-item">
                <i class="fa-brands fa-react collage-icon"></i>
                <span class="collage-name">React</span>
              </div>
              <div class="collage-skill-item">
                <i class="fa-brands fa-react collage-icon"></i>
                <span class="collage-name">Next Js</span>
              </div>
              <div class="collage-skill-item">
                <i class="fa-brands fa-php collage-icon"></i>
                <span class="collage-name">PHP</span>
              </div>
            </div>
          </div>

          <!-- Column 5: Laravel, Node, Express (Moves Up) -->
          <div
            class="collage-column col-js"
            :style="{
              transform: `translateY(${offsetY * -1}px) skewX(-22deg)`,
            }"
          >
            <div class="collage-column-content">
              <div class="collage-skill-item">
                <i class="fa-brands fa-laravel collage-icon"></i>
                <span class="collage-name">Laravel</span>
              </div>
              <div class="collage-skill-item">
                <i class="fa-brands fa-node-js collage-icon"></i>
                <span class="collage-name">Node Js</span>
              </div>
              <div class="collage-skill-item">
                <i class="fa-solid fa-server collage-icon"></i>
                <span class="collage-name">Express Js</span>
              </div>
            </div>
          </div>

          <!-- Column 6: Nest, Postgres, MySQL (Moves Down) -->
          <div
            class="collage-column col-postgres"
            :style="{ transform: `translateY(${offsetY * 1}px) skewX(-22deg)` }"
          >
            <div class="collage-column-content">
              <div class="collage-skill-item">
                <i class="fa-solid fa-cubes collage-icon"></i>
                <span class="collage-name">Nest Js</span>
              </div>
              <div class="collage-skill-item">
                <i class="fa-solid fa-database collage-icon"></i>
                <span class="collage-name">PostgreSQL</span>
              </div>
              <div class="collage-skill-item">
                <i class="fa-solid fa-database collage-icon"></i>
                <span class="collage-name">MySQL</span>
              </div>
            </div>
          </div>

          <!-- Column 7: MongoDB, Linux (Moves Up) -->
          <div
            class="collage-column col-php"
            :style="{
              transform: `translateY(${offsetY * -1}px) skewX(-22deg)`,
            }"
          >
            <div class="collage-column-content">
              <div class="collage-skill-item">
                <i class="fa-solid fa-leaf collage-icon"></i>
                <span class="collage-name">Mongo DB</span>
              </div>
              <div class="collage-skill-item">
                <i class="fa-brands fa-linux collage-icon"></i>
                <span class="collage-name">Linux Ubuntu</span>
              </div>
            </div>
          </div>

          <!-- Column 8: Prime Vue, Prime React (Moves Down) -->
          <div
            class="collage-column col-tailwind"
            :style="{ transform: `translateY(${offsetY * 1}px) skewX(-22deg)` }"
          >
            <div class="collage-column-content">
              <div class="collage-skill-item">
                <i class="fa-solid fa-shield-halved collage-icon"></i>
                <span class="collage-name">Prime Vue</span>
              </div>
              <div class="collage-skill-item">
                <i class="fa-solid fa-shield-halved collage-icon"></i>
                <span class="collage-name">Prime React</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const hoveredType = ref(null);
const hoveredIndex = ref(null);

const pinContainer = ref(null);
const offsetY = ref(0);

const handleCollageScroll = () => {
  if (!pinContainer.value) return;
  const rect = pinContainer.value.getBoundingClientRect();
  const windowHeight = window.innerHeight;
  const containerHeight = rect.height;
  const scrollRange = containerHeight - windowHeight;

  if (rect.top <= 0 && rect.bottom >= windowHeight) {
    const scrolled = -rect.top;
    const progress = Math.max(0, Math.min(1, scrolled / scrollRange));
    offsetY.value = (progress - 0.5) * 440;
  } else if (rect.top > 0) {
    offsetY.value = -220;
  } else if (rect.bottom < windowHeight) {
    offsetY.value = 220;
  }
};

onMounted(() => {
  window.addEventListener("scroll", handleCollageScroll, { passive: true });
  handleCollageScroll();
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleCollageScroll);
});

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
  { name: "Svelte", icon: "fa-solid fa-fire" },
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
  { name: "Prime React", icon: "fa-solid fa-shield-halved" },
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
  { x1: 220, y1: 530, x2: 400, y2: 300 },
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
  { x1: 580, y1: 530, x2: 400, y2: 300 },
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
  transition:
    stroke-width 0.3s ease,
    opacity 0.3s ease,
    stroke 0.3s ease;
}

.highlighted-line {
  stroke: #10b981;
  animation-duration: 0.6s;
}

@keyframes bobble {
  0%,
  100% {
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

.skill-card:nth-child(3n + 1) {
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

/* Collage Section Styles */
.collage-pin-container {
  height: 250vh;
  position: relative;
  width: 100vw;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
}

.collage-sticky-viewport {
  position: sticky;
  top: 3.5rem;
  height: calc(100vh - 3.5rem);
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  background: #f4f5f7;
}

.activeDark .collage-sticky-viewport {
  background: #111827;
}

.collage-track {
  display: flex;
  position: relative;
  width: 100%;
  height: 520px;
  overflow: hidden;
}

.collage-column {
  flex: 1;
  height: 1000px;
  position: relative;
  top: -240px;
  overflow: hidden;
  margin: 0 -12px;
  transition: transform 0.15s cubic-bezier(0.1, 0.8, 0.2, 1);
  will-change: transform;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: inset 0 0 30px rgba(0, 0, 0, 0.35);
  cursor: pointer;
}

.collage-column::after {
  content: "";
  position: absolute;
  inset: 0;
  background: rgba(255, 255, 255, 0.12);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.collage-column:hover::after {
  opacity: 1;
}

.collage-column-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3.5rem;
  height: 100%;
  width: 250%;
  position: absolute;
  left: -75%;
  transform: skewX(22deg);
  color: #fff;
}

.collage-skill-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  transition: transform 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.collage-skill-item:hover {
  transform: scale(1.15);
}

.collage-icon {
  font-size: 3.2rem;
  margin-bottom: 0.6rem;
  filter: drop-shadow(0 4px 10px rgba(0, 0, 0, 0.4));
  transition: transform 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.collage-skill-item:hover .collage-icon {
  transform: scale(1.2) rotate(6deg);
}

.collage-name {
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: 0.5px;
  text-shadow: 0 2px 5px rgba(0, 0, 0, 0.5);
  white-space: nowrap;
}

/* Specific Technology Color Gradients */
.col-vue {
  background: linear-gradient(135deg, #42b883, #1e3f35);
}
.col-laravel {
  background: linear-gradient(135deg, #ff2d20, #4c110d);
}
.col-node {
  background: linear-gradient(135deg, #68a063, #223521);
}
.col-react {
  background: linear-gradient(135deg, #61dafb, #16363e);
}
.col-js {
  background: linear-gradient(135deg, #f0db4f, #3a3512);
}
.col-postgres {
  background: linear-gradient(135deg, #336791, #112332);
}
.col-php {
  background: linear-gradient(135deg, #777bb4, #222334);
}
.col-tailwind {
  background: linear-gradient(135deg, #38bdf8, #113444);
}

.collage-footer {
  text-align: center;
  padding: 1.5rem 1rem 0;
}

.collage-text {
  font-size: 0.9rem;
  color: #555;
  font-weight: 500;
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.6;
}

.activeDark .collage-text {
  color: rgba(255, 255, 255, 0.6);
}

/* Responsive adjustments */
@media screen and (max-width: 768px) {
  .collage-track {
    font-size: 0.85rem;
  }
  .collage-text {
    font-size: 0.8rem;
  }
}
</style>
