<template>
  <div>
    <Header
      title="Categories"
      class="font-serif text-yellow-600 flex-1 justify-center items-center flex"
    >
    </Header>
    <div class="space-y-3 flex flex-col w-fit">
      <NuxtLink
        v-for="category in categories"
        :key="(category as any).id"
        :to="`/categories/${(category as any).slug}`"
        class="border"
      >
        <span class="font-semibold"># {{ (category as any).name }}</span>
      </NuxtLink>
    </div>
  </div>
</template>

<script lang="ts" setup>
const { data: categories } = await useWpApi().getCatgories();

useHead({
  title: "Categories",
  meta: [
    {
      name: "description",
      content: "Categories",
    },
  ],
});
</script>
