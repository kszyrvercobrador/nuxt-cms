// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  ssr: false,
  modules: ["vuetify-nuxt-module", "nuxt-auth-sanctum"],
  vuetify: {
    moduleOptions: {
      /* module specific options */
    },
    vuetifyOptions: {
      /* vuetify options */
    },
  },
  runtimeConfig: {
    public: {
      baseURL: process.env.BASE_URL,
      apiURL: process.env.API_URL,
    },
  },
  sanctum: {
    baseUrl: process.env.API_URL, // Laravel API
    origin: process.env.BASE_URL, // Nuxt app, by default will be used 'useRequestURL().origin'
    endpoints: {
      csrf: "/sanctum/csrf-cookie",
      login: "/api/auth/login",
      logout: "/api/auth/logout",
      user: "/api/auth/user",
    },
    redirect: {
      keepRequestedRoute: false,
      onLogin: "/dashboard",
      onLogout: "/auth/login",
      onAuthOnly: "/auth/login",
      onGuestOnly: "/dashboard",
    },
  },
});
