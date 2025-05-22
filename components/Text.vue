<template>
  <div class='my-4'>
    <BaseHeadline v-if='elem.headline' :level='elem.headline.level'> {{ elem.headline.text }}</BaseHeadline>

    <p>{{ elem.text }}</p>
  </div>
</template>

<script lang='ts' setup>
import type { Text } from '~/types/text.type';

const props = defineProps<{ elem: Text }>();

</script>