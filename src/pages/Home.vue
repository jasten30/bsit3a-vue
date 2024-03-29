<template>
  <div id="app">
    <!-- About section -->
    <section class="container-fluid" id="about">
      <div class="col-8 col-lg-4 avatar">
        <img src="/src/assets/images/room_ian-removebg-preview.png" />
      </div>
      <div class="heading">
        <h1>
          Hi,
          <span class="auto-type"></span>
        </h1>
        <h3>Bachelor of Science in Information Technology</h3>
        <p>
          I'm a 24 years old student
          <br />
          <a class="underline-hover-effect" href="https://www.facebook.com/cpcofficial2005">Cordova Public College</a>
          <br />
          an IT student major in Programming based on Cordova, Cebu, Philippines.
          <br />
          I study Information Technology as a 3rd year student this year. I had
          <br />
          chance to make a portfolio for our project this semester. And I will
          <br />
          challenge myself as this my first time using VUEJS Framework.
        </p>
        <a class="btn btn-outline-light" href="mailto:abaoianjustine@gmail.com">Contact me</a>
      </div>
    </section>

    <!-- Skills section -->
    <section class="container-fluid" id="skills">
      <div class="col-10 col-lg-6 skills">
        <div class="text">
          <h2>Skills</h2>
          <p>The knowledge and abilities I gained through education, employment, or self-directed learning</p>
        </div>

        <div class="skill-card ">
          <div class="card">
            <i class="bi bi-1-square-fill"></i>
            <h4>
              Front-End
              <br />
              Development
            </h4>
            <p>
              I have developed proficiency in frontend development, mastering skills in HTML, CSS, Bootstrap, Vue.js (a popular framework), and JavaScript through a combination of formal education, professional experience, and independent study.
            </p>
          </div>

          <div class="card">
            <i class="bi bi-2-square-fill"></i>
            <h4>
              Back-End
              <br />
              Development
            </h4>
            <p>
              I have developed my expertise in backend development through hands-on experience with SQL and PHP. Working extensively with SQL databases, I've honed my ability to design and optimize database structures. Additionally, my proficiency in PHP allows me to create robust 
              and dynamic server-side applications to meet diverse project requirements.
            </p>
          </div>

          <div class="card">
            <i class="bi bi-3-square-fill"></i>
            <h4>Software Development</h4>
            <p>
              During my academic journey, 
              I honed my software development skills, 
              specializing in languages like Java, JavaScript, C++, C#. 
              These experiences equipped me with a robust foundation in 
              programming principles and techniques. 
              Through coursework and practical projects, 
              I gained proficiency in leveraging these languages to 
              build innovative software solutions.
            </p>
          </div>

          <div class="card">
            <i class="bi bi-4-square-fill"></i>
            <h4>Wordpress</h4>
            <p>
              In my professional experience, I honed my skills in 
              WordPress development through hands-on work in real-world projects. 
              Working with WordPress, I gained proficiency in designing and 
              developing custom themes and plugins, as well as optimizing 
              website performance and user experience. These experiences have 
              equipped me with a deep understanding of WordPress architecture 
              and best practices.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Portfolio section -->
    <section class="container-fluid" id="portfolio">
      <div class="container">
        <div class="white-divider"></div>
        <div class="heading">
          <h2>Portfolio</h2>
          <p style="color: var(--main-color); text-align: center">Some of my personal projects !</p>
        </div>
        <div class="swiper mySwiper">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <img src="/src/assets/images/gregory.png" />
              <h2>Gregory Schrerrer</h2>
              <a href="https://wordpress.com/"><span class="tag">Wordpress</span></a>
            </div>
            <div class="swiper-slide">
              <img src="/src/assets/images/pauljoel.png" />
              <h2>Paul Joel</h2>
              <a href="https://wordpress.com/"><span class="tag">Wordpress</span></a>
            </div>
          </div>
          <div class="swiper-button-next"></div>
          <div class="swiper-button-prev"></div>
          <div class="swiper-pagination"></div>
        </div>
      </div>
    </section>

    <!-- Education section -->
    <section class="container-fluid" id="education">
      <div class="container">
        <div class="divider white"></div>
        <div class="heading">
          <h2 class="mb-3" style="color: var(--second-color); text-align: center">Education</h2>
          <h3 style="color: var(--main-color); text-align: center">School</h3>
        </div>
        <div class="row">
          <div class="col-sm-6">
            <div class="education-block">
              <h5>2017-2019</h5>
              <span class="bi bi-mortarboard" style="font-size: 40px; color: var(--main-color)"></span>
              <h3>STI-College Malaybalay</h3>
              <h4>Senior High School <br /> ICT: Major in Programming</h4>
              <div class="red-divider"></div>
              <p>Basic HTML, CSS, and JavaScript</p>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="education-block">
              <h5>2021-Current</h5>
              <span class="bi bi-mortarboard" style="font-size: 40px; color: var(--main-color)"></span>
              <h3>Cordova Public College</h3>
              <h4>Bachelor of Information Technology</h4>
              <h5>Major in Programming</h5>
              <div class="red-divider"></div>
              <p>Programming, Networking, CSS</p>

            </div>
          </div>
        </div>
      </div>
    </section>
    <NavBar />
    <!-- Footer section -->
    <footer class="text-center">
      <a href="#about">
        <span
          class="bi bi-caret-up"
          style="font-size: 25px; margin: 20px; color: var(--third-color); height: 30px"
        ></span>
      </a>
      <h5></h5>
      <h5>All rights reserved.</h5>
    </footer>
  </div>
</template>

<script setup lang="ts">
import Swiper from "swiper";
import Typed from "typed.js";
import { onMounted, ref } from "vue";
import { RouterLink } from "vue-router";

import NavBar from "../components/NavBar.vue";
import { RouteName } from "../router";

// Declare refs for swiper and typed
const typed = ref<null | Typed>(null);
let swiper: null | Swiper = null;

// On mounted, initialize typed and swiper
onMounted(() => {
  // Initialize Typed.js
  typed.value = new Typed(".auto-type", {
    backSpeed: 150,
    loop: true,
    strings: ["i'm Ian Justine.", "i'm a College Student", "This is my portfolio"],
    typeSpeed: 150,
  });

  // Initialize Swiper
  swiper = new Swiper(".mySwiper", {
    effect: "flip",
    grabCursor: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
  });

  // Handle click event on next button
  const nextButton = document.querySelector(".swiper-button-next");
  nextButton?.addEventListener("click", () => {
    swiper?.slideNext();
  });

  // Handle click event on previous button
  const prevButton = document.querySelector(".swiper-button-prev");
  prevButton?.addEventListener("click", () => {
    swiper?.slidePrev();
  });
});
</script>

<style lang="scss" scoped>
.swiper {
  width: 60%;
  height: auto;
}

.swiper-slide {
  background-position: center;
  background-size: cover;
  width: 600px;
  padding-bottom: 50px;
}

.swiper-slide img {
  display: block;
  aspect-ratio: 4/3;
  width: 100%;
  padding-bottom: 15px;
}

.swiper h2 {
  font-size: 30px;
  font-weight: 700;
  color: #fff;
}

.tag {
  display: inline-block;
  border-radius: 3px;
  padding: 0.2em 0.5em 0.3em;
  border-radius: 5px;
  background: var(--third-color);
  color: var(--bg-color);
  font-weight: 600;
  margin: 0.25em 0.1em;
}

h1.tag {
  margin-left: 0;
  margin-right: 0;
}

.swiper-button-next,
.swiper-button-prev {
  position: absolute;
  top: var(--swiper-navigation-top-offset, 50%);
  width: calc(var(--swiper-navigation-size) / 44 * 27);
  height: var(--swiper-navigation-size);
  margin-top: calc(0px - (var(--swiper-navigation-size) / 2));
  z-index: 10;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--swiper-navigation-color, var(--main-color));
}

.swiper-pagination-bullet-active {
  opacity: var(--swiper-pagination-bullet-opacity, 1);
  background: var(--swiper-pagination-color, var(--third-color));
}
</style>
