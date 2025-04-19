<template>
  <header class="st-header st-style1 st-sticky-menu st-color1">
    <div class="st-main-header">
      <div class="container">
        <div class="st-main-header-in">
          <div class="st-site-branding">
            <a href="#" class="st-logo-link"
              ><img src="erc-pro.png" alt="demo"
            /></a>
          </div>
          <!-- For Site Title -->
          <!-- <span class="st-site-title">
            <a href="index.html">Logo</a>
          </span> -->
          <div class="st-nav-wrap st-fade-down">
            <div class="st-nav-toggle st-style1">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <nav class="st-nav st-desktop-nav">
              <ul class="st-nav-list onepage-nav">
                <li class="st-has-children">
                  <a href="#home" class="smooth-scroll">Home</a>
                  <ul>
                    <li><a href="index.html">Minimal Landing</a></li>
                    <li><a href="home2.html">Animated Home</a></li>
                    <li><a href="home7.html">Dark Home</a></li>
                    <li><a href="home4.html">Creative Landing</a></li>
                    <li><a href="home3.html">Animated Home 2</a></li>
                    <li><a href="home5.html">Creative Landing 2</a></li>
                    <li><a href="home6.html">Minimal Landing 2</a></li>
                  </ul>
                </li>
                <li><a href="#about" class="smooth-scroll">About</a></li>
                <li><a href="#service" class="smooth-scroll">Service</a></li>
                <li>
                  <a href="#portfolio" class="smooth-scroll">Portfolio</a>
                </li>
                <li><a href="#team" class="smooth-scroll">Team</a></li>
                <li><a href="#price" class="smooth-scroll">Price</a></li>
                <li class="st-has-children">
                  <a href="#blog" id="block-id" class="smooth-scroll">Blog</a>
                  <ul>
                    <li>
                      <a href="blog-right-sidebar.html">Blog Right Sidebar</a>
                    </li>
                    <li>
                      <a href="blog-left-sidebar.html">Blog Left Sidebar</a>
                    </li>
                    <li><a href="blog-no-sidebar.html">Blog No Sidebar</a></li>
                    <li>
                      <a href="blog-details-right-sidebar.html"
                        >Blog Details Right Sidebar</a
                      >
                    </li>
                    <li>
                      <a href="blog-details-left-sidebar.html"
                        >Blog Details Left Sidebar</a
                      >
                    </li>
                    <li>
                      <a href="blog-details-no-sidebar.html"
                        >Blog Details No Sidebar</a
                      >
                    </li>
                  </ul>
                </li>
                <li><a href="#contact" class="smooth-scroll">Contact</a></li>
                <li>
                  <a href="#profile" v-if="user" class="smooth-scroll"
                    >Hi {{ user.user_metadata.first_name }}</a
                  >
                </li>
                <li>
                  <div class="uQxNj" v-if="user">
                    <button @click="logout" class="ieMfVH" :disabled="loading">
                      <span class="fKlELC" :class="{ loading: loading }">
                        Log out
                      </span>
                      <svg
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        class="jjoFVh"
                        :class="{ loading: loading }"
                      >
                        <g
                          fill="none"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          class="faEWLr"
                          style="stroke: var(--icon-color)"
                        >
                          <circle
                            stroke-opacity=".2"
                            cx="8"
                            cy="8"
                            r="6"
                          ></circle>
                          <circle cx="8" cy="8" r="6" class="VFMrX"></circle>
                        </g>
                      </svg>
                    </button>
                  </div>
                  <div class="uQxNj" v-else>
                    <NuxtLink class="bQRHNT" to="/login">
                      <span class="">
                        Login
                        <svg
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          class="taKtSf"
                        >
                          <path
                            class="chevron"
                            d="M8 13L13 8L8 3"
                            stroke-width="1.5"
                            stroke-linecap="square"
                            stroke-linejoin="round"
                          ></path>
                          <path
                            class="stem"
                            d="M12 8L2 8"
                            stroke-width="1.5"
                          ></path>
                        </svg>
                      </span>
                    </NuxtLink>
                    <NuxtLink to="/register">
                      <button class="ieMfVH">
                        <span class="fKlELC"> Sign up </span>
                      </button>
                    </NuxtLink>
                  </div>
                </li>
              </ul>
            </nav>
            <!-- .st-nav -->
          </div>
          <!-- .st-nav-wrap -->
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
// for Authentication
const client = useSupabaseAuthClient();
const user = useSupabaseUser();
const loading = ref(false);

const router = useRouter();

const logout = async () => {
  loading.value = true;
  const { error } = await client.auth.signOut();
  if (error) {
    loading.value = false;
    return alert("Something went wrong !");
  }
};

useHead({});
</script>
