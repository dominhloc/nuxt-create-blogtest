<script setup>
const props = defineProps({
  title: String,
  image: String,
  slug: String,
});
</script>

<template>
  <div class="shadow-xl group rounded flex flex-col bg-white">
    <div
      v-if="image"
      class="grid__image group h-[150px] w-full relative overflow-hidden"
    >
      <img
        :src="image"
        :alt="title"
        class="absolute w-full h-full group-hover:scale-90 duration-150 object-cover"
      />
    </div>
    <div class="p-5 space-y-4 flex-col">
      <h3 class="text-xl group-hover:text-blue-600 font-semibold">
        {{ title }}
      </h3>

      <NuxtLink
        v-if="slug"
        class="group-hover:border-b-2 border-b-2 border-white group-hover:border-blue-600 group-hover:text-blue-600 group-hover:font-semibold inline-flex items-center"
        :to="`/${slug}`"
      >
        Read more
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          class="ml-0 group-hover:ml-3 group-hover:font-semibold duration-200"
        >
          <path fill="black" d="M15.5 5H11l5 7l-5 7h4.5l5-7z" />
          <path fill="black" d="M8.5 5H4l5 7l-5 7h4.5l5-7z" />
        </svg>
      </NuxtLink>
    </div>
  </div>
</template>
