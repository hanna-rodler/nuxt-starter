<template>
  <div class='flex flex-col items-center'>
    <Text :elem='SampleText'></Text>
    <div class='flex flex-col space-y-5 items-center my-10'>

      <BaseButton
        tag='button'
      >
        Sample Button
      </BaseButton>
      <BaseButton
        link='/typography'
        tag='a'
        variant='link-primary'
      >
        to Typography
      </BaseButton>
    </div>
  </div>
</template>
<script lang='ts' setup>
import type { Text } from '~/types/text.type';

const SampleText: Text = {
  text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et ' +
    '          dore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita\n' +
    '          kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur\n' +
    '          sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam\n' +
    '          voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata\n' +
    '          sanctus est Lorem ipsum dolor sit amet.',
  headline: {
    text: 'Seite 1',
    level: 'h2',
  },
};

</script>
