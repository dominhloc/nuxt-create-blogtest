<template>
  <div class="flex justify-center items-center">
    <Header
      title="Categories"
      class="font-serif text-yellow-500 flex-1 flex justify-center"
    >
    </Header>
  </div>
  <div class="py-16 flex justify-center">
    <div class="grid sm:grid-cols-2">
      <NuxtLink
        v-for="category in categories"
        :key="category.id"
        :to="`/categories/${category.slug}`"
        class="py-2 px-10 my-1 mx-2 rounded-lg text-white bg-gray-600 hover:bg-gray-900 hover:scale-125 duration-100 text-xl uppercase"
      >
        <span class="font-semibold"># {{ category.name }}</span>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
//
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
