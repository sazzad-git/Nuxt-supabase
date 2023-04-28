<template>
  <div class="st-content">
    <div class="st-hero-slide st-style2 st-type2">
      <div class="container" id="home">
        <div class="st-hero-text st-style1 st-color1 text-center">
          <h1 class="st-hero-title">
            Do You Qualify for the Employee Retention Credit?
          </h1>
          <div class="st-hero-subtitle">
            Find out if your business qualifies for the Employee Retention
            Credit<br />
          </div>
          <div class="st-btn-group st-style2" id="answer" v-if="showAnswer">
            <nuxt-link :to="{ hash: '#qual' }">
              <button @click="toggle = true" class="st-btn st-style1 st-color1">
                Answer 3 Simple Questions
              </button>
            </nuxt-link>
          </div>
        </div>
        <!-- <div :style="toggle && { display: 'block !important' }" class="st-hero-img2"> -->
        <div class="st-hero-img2 text-center">
          <img
            src="assets/img/kelly-sikkema-xoU52jUVUXA-unsplash.jpg"
            alt="questionnaire"
          />
        </div>
      </div>
    </div>

    <section class="st-section">
      <div class="st-hero-slide st-style4 st-type1">
        <div
          class="container"
          style="transition: 0.3s; display: none"
          :class="{ 'd-block': toggle && showQuestionnaire }"
          id="questionnaire"
        >
          <Ask
            @showUnqualified="showUnqualified = $event"
            @showAnswer="showAnswer = $event"
            @showQuestionnaire="showQuestionnaire = $event"
          />
        </div>

        <div
          class="container adj-top"
          style="padding: 25px"
          id="unqualified"
          v-if="showUnqualified"
        >
          <Unqualified />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from "vue";
const toggle = ref(false);

const showQuestionnaire = ref(true);
const showUnqualified = ref(false);
const showAnswer = ref(true);

function injectScript() {
  const script = document.createElement("script");
  script.type = "text/javascript";
  script.src = "assets/js/wow.min.js";
  script.async = false;
  document.body.appendChild(script);
}
</script>
