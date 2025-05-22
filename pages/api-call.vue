<script setup>
// Ruft den gecachten Endpunkt auf
import BaseButton from '../components/atoms/BaseButton.vue';

const { data, error, refresh, pending } = await useAsyncData('cached-data', () => $fetch('/api/my-cached-endpoint'));
</script>

<template>
  <div>
    <h1>Daten von gecachtem Endpunkt</h1>

    <p v-if='pending'>Lade Daten...</p>
    <p v-else-if='error'>Fehler beim Laden: {{ error.message }}</p>
    <div v-else>
      <p>Daten: {{ data.mockData }}</p>
      <p>Abrufzeitpunkt (vom Server): {{ data.timestamp }}</p>
      <BaseButton class='mt-4' @click='refresh()'>Refresh</BaseButton>
    </div>
  </div>
</template>
