<script setup>
const props = defineProps({
  title: {
    type: String,
    default: undefined,
  },
});
</script>

<template>
  <section class="p-6 bg-black">
    <div class="">
      <h1 v-if="props.title" class="text-4xl font-bold">{{ props.title }}</h1>
      <slot />
    </div>
  </section>
</template>
