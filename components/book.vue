<template>
  <div class="st-blue-color">
    <div class="st-content text-center">
      <div
        class="st-hero-slide st-style2 st-type2">
        <div class="container">
          <div class="st-hero-text st-style1 st-color1">
            <h1 class="st-hero-title" style="width: auto">CONGRATULATIONS!</h1>
            <h3 class="color-white">
              Take the Next Step to Apply for your Employee Retention Credit!
            </h3>
            <div class="st-hero-subtitle text-center">
              Schedule your FREE consultation today!<br />
            </div>

            <!-- Calendly inline widget begin -->
            <div
              class="calendly-inline-widget"
              data-url="https://calendly.com/brettwheeler/15min"
              style="min-width: 320px; height: 800px"
            ></div>
            <!-- Calendly inline widget end -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// inject this script tag into the page

function injectScript() {
  const script = document.createElement("script");
  script.type = "text/javascript";
  script.src = "https://assets.calendly.com/assets/external/widget.js";
  script.async = true;
  document.body.appendChild(script);
}

// inject script when in browser
if (typeof window !== "undefined") {
  injectScript();
}
</script>
