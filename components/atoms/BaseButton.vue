<template>
  <component
    :is='component'
    :class='[componentStyles.get(variant)]'
    v-bind='attributes'
  >
    <slot />
  </component>
</template>

<script lang='ts' setup>
import { computed, ref } from 'vue';
import type { BaseButton } from '~/types/base-button.type';
import { NuxtLink } from '#components';

const props = withDefaults(defineProps<BaseButton>(), {
  tag: 'button',
  variant: 'secondary',
  link: '',
  target: '_self',
});

const component = computed(() => {
  if (props.tag === 'a' && props.link) {
    return NuxtLink;
  }
  return props.tag;
});

const attributes = computed(() => {
  if (props.tag === 'button') {
    return {
      type: 'button',
    };
  }
  if (component.value === NuxtLink) {
    return {
      to: props.link,
      target: props.target,
    };
  }
  if (props.tag === 'a') {
    return {
      href: props.link,
      target: props.target,
    };
  }
  return {};
});

const componentStyles = ref(
  new Map([
    ['primary', 'button button-primary'],
    ['secondary', 'button button-secondary'],
    ['accent', 'button button-accent'],
    ['success', 'button button-success'],
    ['warning', 'button button-warning'],
    ['link-primary', 'link-primary'],
    ['link-secondary', 'link-secondary'],
  ]),
);
</script>