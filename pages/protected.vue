<template>
  <div class="relative z-10 max-w-screen-sm">
    <p class="fVeafc in">Hi {{ user?.user_metadata.first_name }}</p>
    <h1 class="kKxhrq mb-10">PROTECTED ROUTE!</h1>

    <NuxtLink class="bQRHNT" to="/">
      <span class="fKlELC">
        Go to index page
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
          <path class="stem" d="M12 8L2 8" stroke-width="1.5"></path>
        </svg>
      </span>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
const client = useSupabaseAuthClient();
const user = useSupabaseUser();
const loading = ref(false);

const logout = async () => {
  loading.value = true;
  const { error } = await client.auth.signOut();
  if (error) {
    loading.value = false;
    return alert("Something went wrong !");
  }
};
definePageMeta({
  middleware: [
    "auth",
    // Add in more middleware here
  ],
});
</script>
