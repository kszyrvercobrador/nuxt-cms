<template>
  <v-container>
    <div class="h-screen d-flex flex-column justify-center items-center">
      <div class="text-center">
        <v-img
          class="my-6 mx-auto"
          max-width="228"
          src="https://cdn.vuetifyjs.com/docs/images/logos/vuetify-logo-v3-slim-text-light.svg"
        />
      </div>

      <v-card
        class="mx-auto pa-12 pb-8"
        elevation="8"
        width="400"
        rounded="lg"
      >
        <div class="text-subtitle-1 text-medium-emphasis">Account</div>
        <v-form @submit.prevent="submit">
          <v-text-field
            density="compact"
            placeholder="Email address"
            prepend-inner-icon="mdi-email-outline"
            variant="outlined"
            v-model="email"
          ></v-text-field>

          <div class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between">
            Password

            <a
              class="text-caption text-decoration-none text-blue"
              href="#"
              rel="noopener noreferrer"
              target="_blank"
              tabindex="-1"
            >
              Forgot login password?</a>
          </div>

          <v-text-field
            :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
            :type="visible ? 'text' : 'password'"
            density="compact"
            placeholder="Enter your password"
            prepend-inner-icon="mdi-lock-outline"
            variant="outlined"
            @click:append-inner="visible = !visible"
            v-model="password"
          ></v-text-field>

          <v-btn
            block
            class="mb-8"
            color="primary"
            size="large"
            type="submit"
          >
            Log In
          </v-btn>
        </v-form>
      </v-card>
    </div>
  </v-container>
</template>

<script setup>
definePageMeta({ layout: 'auth', middleware: "sanctum:guest" })
const { login } = useSanctumAuth()

const visible = ref(false)
const email = ref('')
const password = ref('')

async function submit() {
  login({
    email: email.value,
    password: password.value,
  })
}

</script>
