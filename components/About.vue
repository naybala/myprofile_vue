<template>
  <section class="about section" id="about" ref="aboutSection">
    <div class="about-sticky-viewport">
      <div class="about-showcase-container">
        <!-- Left Text Card -->
        <div class="showcase-left-card">
          <div class="showcase-content-wrapper">
            <Transition :name="transitionName" mode="out-in">
              <div :key="activeSectionData.id" class="showcase-content">
                <span class="section-badge">0{{ activeSectionData.id }}</span>
                <h2 class="showcase-title">
                  {{ activeSectionData.title }}
                </h2>
                <div class="showcase-separator"></div>
                <p class="showcase-description">
                  {{ activeSectionData.description }}
                </p>

                <div v-if="activeSectionData.link" class="showcase-btn-wrapper">
                  <a
                    :href="activeSectionData.link"
                    target="_blink"
                    class="showcase-btn"
                  >
                    {{ activeSectionData.linkText }}
                    <i class="fa-solid fa-arrow-up-right-from-square ms-1"></i>
                  </a>
                </div>
              </div>
            </Transition>

            <!-- Showcase Footer with Navigation Dots -->
            <div class="showcase-footer">
              <div class="showcase-dots">
                <span
                  v-for="i in 5"
                  :key="i"
                  class="dot"
                  :class="{ active: i === activeSection }"
                  @click="scrollToProgress(i)"
                ></span>
              </div>
              <span class="showcase-counter">{{ activeSection }} / 5</span>
            </div>
          </div>
        </div>

        <!-- Right Image Card -->
        <div class="showcase-right-card">
          <div class="showcase-image-wrapper">
            <Transition :name="transitionName" mode="out-in">
              <img
                :key="activeSectionData.id"
                :src="activeSectionData.image"
                alt="About Image"
                class="showcase-img"
              />
            </Transition>
          </div>
        </div>
      </div>
    </div>

    <!-- Image View Popup -->
    <div class="div" id="popup">
      <img src="" alt="" id="selectedImage" />
    </div>
  </section>
</template>

<script setup>
import { ref, computed, watch, onMounted, onUnmounted } from "vue";

import myFullProfile from "../assets/images/myFullProfile.jpg";
import myInfo from "../assets/images/myInfo.jpg";
import myInfo2 from "../assets/images/myInfo-2.jpg";
import myInfo3 from "../assets/images/myInfo-3.jpg";
import myInfoFour from "../assets/images/myInfoFour.jpg";

const activeSection = ref(1);
const scrollDirection = ref("down");
const aboutSection = ref(null);

watch(activeSection, (newVal, oldVal) => {
  if (newVal > oldVal) {
    scrollDirection.value = "down";
  } else if (newVal < oldVal) {
    scrollDirection.value = "up";
  }
});

const transitionName = computed(() => {
  return scrollDirection.value === "down" ? "slide-up" : "slide-down";
});

const sections = [
  {
    id: 1,
    title: "I'm Nay Ba La",
    description:
      "Born in Zalun, Ayeyarwady Division, Myanmar, and currently living in SanChaung Township, Yangon. I started learning web development in December 2019, starting with Java Programming and expanding to HTML, CSS, JavaScript, Bootstrap, PHP, MySQL, and Laravel.",
    image: myFullProfile,
  },
  {
    id: 2,
    title: "Education & Degree",
    description:
      "Graduated from Hinthada Technological University with a Bachelor of Technology in 2018 and a Bachelor of Engineering in 2020, majoring in Electronic Communication. I was selected for Master of Engineering but was unable to attend.",
    image: myInfo,
  },
  {
    id: 3,
    title: "Professional Perspective",
    description:
      "I bring a strong perspective in modern website design, strict adherence to deadlines, and excellent communication skills. I thrive in collaborative team environments and have a continuous, self-driven desire to learn new technologies.",
    image: myInfo2,
  },
  {
    id: 4,
    title: "Language & Self-Direction",
    description:
      "Proficient in all four English language skills and possess a basic N5 certification in Japanese. Highly self-directed, motivated, and capable of working independently without close supervision.",
    image: myInfo3,
    // link: "https://drive.google.com/file/d/1xeFPr_vRYCg6ycjo8SrMvk7b6nf-YnLH/view?usp=sharing",
    // linkText: "Download CV Form",
  },
  {
    id: 5,
    title: "Working Experience",
    description:
      "Hands-on experience in managing diverse web projects and handling large datasets. I prioritize clean code principles, ensuring code is functional, well-structured, and easily readable by fellow team members for collaboration.",
    image: myInfoFour,
  },
];

const activeSectionData = computed(() => {
  return sections.find((s) => s.id === activeSection.value) || sections[0];
});

const handleScroll = () => {
  if (!aboutSection.value) return;
  const rect = aboutSection.value.getBoundingClientRect();
  const viewportHeight = window.innerHeight;

  const totalScrollable = rect.height - viewportHeight;
  if (totalScrollable <= 0) return;

  // Offset by 48px to account for the --header-height (3rem)
  const progress = Math.max(0, Math.min(1, -(rect.top - 48) / totalScrollable));

  let index = Math.ceil(progress * 5);
  if (index < 1) index = 1;
  if (index > 5) index = 5;

  activeSection.value = index;
};

const scrollToProgress = (index) => {
  if (!aboutSection.value) return;
  const rect = aboutSection.value.getBoundingClientRect();
  const documentScrollTop =
    window.scrollY || document.documentElement.scrollTop;
  const sectionTop = rect.top + documentScrollTop;
  const viewportHeight = window.innerHeight;
  const totalScrollable = rect.height - viewportHeight;

  const targetProgress = (index - 0.5) / 5;
  // Offset by 48px to align perfectly below the header
  const targetScrollY = sectionTop - 48 + targetProgress * totalScrollable;

  window.scrollTo({
    top: targetScrollY,
    behavior: "smooth",
  });
};

const imageView = (imageSrc) => {
  const popup = document.querySelector("#popup");
  const selectedImage = document.querySelector("#selectedImage");
  if (popup && selectedImage) {
    selectedImage.src = imageSrc;
    popup.style.transform = `translateY(0%)`;
    popup.addEventListener("click", () => {
      popup.style.transform = `translateY(-100%)`;
      popup.src = "";
    });
  }
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll, { passive: true });
  handleScroll();
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style scoped>
/* Main Section Height for Scroll Pinning */
.about {
  position: relative;
  background-color: rgba(139, 143, 142, 0.3);
  height: 400vh;
}

/* Sticky Viewport Wrapper */
.about-sticky-viewport {
  position: sticky;
  top: 3rem; /* Aligns below standard 3rem header */
  height: calc(100vh - 3rem);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  padding: 2rem;
}

/* Grid Container */
.about-showcase-container {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  width: 100%;
  max-width: 1200px;
  height: calc(100vh - 3rem - 4rem); /* accounts for header + padding */
  align-items: center;
}

/* Left Card Styling */
.showcase-left-card {
  background: #242f3f;
  border-radius: 24px;
  padding: 3rem;
  color: #fff;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.activeDark .showcase-left-card {
  background: #1b2330;
}

.showcase-content-wrapper {
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
}

.section-badge {
  color: var(--first-color);
  font-family: monospace;
  font-size: 1.1rem;
  font-weight: 700;
  display: block;
  margin-bottom: 0.5rem;
}

.showcase-title {
  font-size: 2.25rem;
  font-weight: 700;
  line-height: 1.2;
}

.showcase-separator {
  width: 100%;
  height: 1px;
  background: rgba(255, 255, 255, 0.12);
  margin: 1.5rem 0;
}

.showcase-description {
  font-size: 1rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.8);
  flex-grow: 1;
}

.showcase-btn-wrapper {
  margin-top: 1.5rem;
}

.showcase-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 0.85rem 1.5rem;
  border: 1px solid rgba(255, 255, 255, 0.25);
  border-radius: 8px;
  color: #fff;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  text-transform: uppercase;
  font-size: 0.75rem;
  letter-spacing: 1px;
}

.showcase-btn:hover {
  background: #fff;
  color: #111;
  border-color: #fff;
  transform: translateY(-2px);
}

/* Footer & Dots Navigation */
.showcase-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  padding-top: 1.5rem;
}

.showcase-dots {
  display: flex;
  gap: 0.5rem;
}

.showcase-dots .dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.25);
  cursor: pointer;
  transition: all 0.3s ease;
}

.showcase-dots .dot.active {
  background: var(--first-color);
  transform: scale(1.3);
}

.showcase-counter {
  font-size: 0.85rem;
  opacity: 0.6;
  font-family: monospace;
}

/* Right Card (Image Container) */
.showcase-right-card {
  background: #f3f4f6;
  border-radius: 24px;
  height: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
}

.activeDark .showcase-right-card {
  background: #1e293b;
}

.showcase-image-wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.showcase-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  cursor: zoom-in;
  transition: transform 0.5s ease;
}

.showcase-img:hover {
  transform: scale(1.02);
}

/* Image Popup */
#popup {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.9);
  z-index: 2000;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: translateY(-100%);
  transition: transform 0.5s ease;
  cursor: zoom-out;
}

#selectedImage {
  max-width: 90%;
  max-height: 90%;
  border-radius: 8px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
}

/* Transitions */
.slide-up-enter-active,
.slide-up-leave-active,
.slide-down-enter-active,
.slide-down-leave-active {
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

/* Slide Up (Scroll Down) */
.slide-up-enter-from {
  opacity: 0;
  transform: translateY(20px) scale(0.99);
}
.slide-up-leave-to {
  opacity: 0;
  transform: translateY(-20px) scale(0.99);
}

/* Slide Down (Scroll Up) */
.slide-down-enter-from {
  opacity: 0;
  transform: translateY(-20px) scale(0.99);
}
.slide-down-leave-to {
  opacity: 0;
  transform: translateY(20px) scale(0.99);
}

/* Desktop Styles */
@media screen and (min-width: 992px) {
  .about-showcase-container {
    grid-template-columns: 420px 1fr;
    gap: 3rem;
  }
}

/* Mobile & Tablet Styles */
@media screen and (max-width: 991px) {
  .about-sticky-viewport {
    padding: 1.5rem;
  }

  .about-showcase-container {
    grid-template-rows: 1.3fr 1fr;
    height: calc(100vh - 100px);
    gap: 1.5rem;
  }

  .showcase-left-card {
    padding: 1.75rem;
    border-radius: 16px;
  }

  .showcase-right-card {
    border-radius: 16px;
  }

  .showcase-title {
    font-size: 1.5rem;
  }

  .showcase-description {
    font-size: 0.875rem;
    line-height: 1.45;
  }

  .showcase-separator {
    margin: 1rem 0;
  }

  .showcase-btn {
    padding: 0.65rem 1.25rem;
  }
}
</style>
