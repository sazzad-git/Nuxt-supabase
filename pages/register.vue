<template>
  <div class="DaoRb">
    <h1 class="eSHwvX">Create an account</h1>
    <form @submit.prevent="signUp">
      <ErrorAlert :error-msg="authError" @clearError="clearError" />
      <div class="jGQTZC">
        <label class="iJLvzO">
          <div class="fdCSlG">
            <input
              class="cmCuLh"
              type="text"
              placeholder="First name"
              v-model="name"
            />
          </div>
        </label>
        <label class="iJLvzO">
          <div class="fdCSlG">
            <input
              class="cmCuLh"
              type="text"
              placeholder="Last name"
              v-model="lastname"
            />
          </div>
        </label>
        <label class="iJLvzO">
          <div class="fdCSlG">
            <input
              class="cmCuLh"
              type="text"
              placeholder="Email address"
              v-model="email"
            />
          </div>
        </label>
        <label class="iJLvzO">
          <div class="fdCSlG">
            <input
              class="cmCuLh"
              type="password"
              placeholder="Password"
              v-model="password"
            />
          </div>
        </label>
      </div>
      <div class="jGQTZC">
        <button class="gZMQdu" type="submit" :disabled="loading">
          <div class="bjhGPG" :class="{ loading: loading }">Sign up</div>
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
              <circle stroke-opacity=".2" cx="8" cy="8" r="6"></circle>
              <circle cx="8" cy="8" r="6" class="VFMrX"></circle>
            </g>
          </svg>
        </button>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "auth",
});
useHead({
  title: "Register | Authentication project",
});
const email = ref("");
const password = ref("");
const name = ref("");
const lastname = ref("");
const client = useSupabaseAuthClient();
const user = useSupabaseUser();
const loading = ref(false);
const authError = ref("");

watchEffect(async () => {
  if (user.value) {
    await navigateTo("/protected");
  }
});

const signUp = async () => {
  if (!name.value) return (authError.value = "First name required");
  if (!lastname.value) return (authError.value = "Last name required");
  loading.value = true;
  const { error } = await client.auth.signUp({
    email: email.value,
    password: password.value,
    options: {
      data: {
        first_name: name.value,
        last_name: lastname.value,
      },
    },
  });
  if (error) {
    loading.value = false;
    authError.value = "Failed to fetch";
  }
};

const clearError = () => {
  authError.value = "";
};
</script>
