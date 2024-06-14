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
        class="absolute w-full h-full group-hover:scale-110 duration-300 object-cover"
      />
    </div>
    <div class="p-5 space-y-4 flex-col">
      <h3 class="text-xl group-hover:text-blue-600 font-semibold">
        {{ title }}
      </h3>

      <NuxtLink
        v-if="slug"
        class="border-b-4 group-hover:border-blue-500 group-hover:text-blue-500 group-hover:font-semibold inline-flex items-center"
        :to="`/${slug}`"
      >
        Read more
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          class="ml-1 group-hover:ml-4 group-hover:font-semibold duration-200"
          viewBox="0 0 24 24"
        >
          <path
            fill="black"
            d="M14 9h7c.55 0 1-.45 1-1s-.45-1-1-1h-7c-.55 0-1 .45-1 1s.45 1 1 1m7 6h-7c-.55 0-1 .45-1 1s.45 1 1 1h7c.55 0 1-.45 1-1s-.45-1-1-1m0-4h-4c-.55 0-1 .45-1 1s.45 1 1 1h4c.55 0 1-.45 1-1s-.45-1-1-1M8.85 7.85a.5.5 0 0 0-.85.36V11H3c-.55 0-1 .45-1 1s.45 1 1 1h5v2.79c0 .45.54.67.85.35l3.79-3.79c.2-.2.2-.51 0-.71z"
          />
        </svg>
      </NuxtLink>
    </div>
  </div>
</template>
