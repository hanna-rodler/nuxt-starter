<template>
  <component :is='level'>
    <slot />
  </component>
</template>

<script lang='ts' setup>
defineProps<{
  level: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}>();
</script>
