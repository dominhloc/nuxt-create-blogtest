<template>
  <div class="flex justify-center items-center bg-black">
    <Header
      title="Categories"
      class="font-serif text-yellow-500 flex-1 justify-center items-center flex"
    >
    </Header>
  </div>
  <div class="py-10 px-20 flex justify-center">
    <div class="flex flex-col space-y-3 items-center">
      <NuxtLink
        v-for="category in categories"
        :key="(category as any).id"
        :to="`/categories/${(category as any).slug}`"
        class="border py-1 px-4 rounded-lg text-white bg-slate-600 hover:bg-slate-900 hover:scale-125 duration-100 text-lg uppercase"
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
