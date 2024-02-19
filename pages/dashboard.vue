<template>
  <v-container>
    <h1>{{ users }}</h1>
  </v-container>
</template>
<script setup>
definePageMeta({ middleware: "sanctum:auth" })

const client = useSanctumClient()
const { data: users } = await useAsyncData('users', () =>
  client('/api/users')
);
</script>