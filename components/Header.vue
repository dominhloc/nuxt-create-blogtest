<script setup>
const props = defineProps({
  title: {
    type: String,
    default: undefined,
  },
});
</script>

<template>
  <section class="p-4 bg-black">
    <div v-if="props.title" class="text-4xl font-semibold">
      {{ props.title }}
    </div>
    <slot />
  </section>
</template>
