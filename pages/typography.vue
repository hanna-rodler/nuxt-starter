<template>
  <div>
    <Text :elem="TypographyText"></Text>
    <BaseButton tag="button"> Sample Button </BaseButton>
    <BaseHeadline level="h1"> Headline 1</BaseHeadline>
    <BaseHeadline level="h2"> Headline 2</BaseHeadline>
    <BaseHeadline level="h3"> Headline 3</BaseHeadline>
    <BaseHeadline level="h4">Headline 4</BaseHeadline>
    <BaseButton class="mt-10 inline-block" link="/" tag="a" variant="link-primary"> Home </BaseButton>
  </div>
</template>

<script lang="ts" setup>
import type { Text } from '~/types/text.type';

const TypographyText: Text = {
  text: 'On this page the typography styles are showcased. The following headlines may be used in the project.',
  headline: {
    text: 'Typography',
    level: 'h1',
  },
};
</script>
