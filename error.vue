<template>
  <div class='min-h-screen flex flex-col items-center justify-center text-center px-4'>
    <h1 class='text-6xl font-extrabold text-red-600 mb-4'>404</h1>
    <h2 class='text-3xl font-semibold mb-6'>Page Not Found</h2>
    <p class='mb-6 text-gray-700'>Sorry, the page you are looking for does not exist.</p>
    <BaseButton class='mb-6' link='/' tag='a' variant='primary'>Go back home</BaseButton>
  </div>
</template>

<script lang='ts' setup>
// The `error` prop is provided by Nuxt and contains statusCode and statusMessage.
defineProps<{
  error: {
    statusCode: number;
    statusMessage?: string;
  };
}>();
</script>

<style scoped>
/* Optional: add some styles if you want */
</style>
