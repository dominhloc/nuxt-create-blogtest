<script setup>
const props = defineProps({
  title: String,
  image: String,
  slug: String,
});
</script>

<template>
  <NuxtLink
    class="shadow-xl group flex flex-col bg-white rounded-lg"
    v-if="slug"
    :to="`/${slug}`"
  >
    <div
      v-if="image"
      class="grid__image group h-[150px] w-full relative overflow-hidden"
    >
      <img
        :src="image"
        :alt="title"
        class="absolute w-full h-full group group-hover:scale-90 duration-150 object-cover rounded-lg border group-hover:border-slate-500"
      />
    </div>
    <div class="p-4 flex-col">
      <h3 class="text-xl group-hover:text-blue-600 font-semibold">
        {{ title }}
      </h3>
    </div>
    <div
      v-if="slug"
      class="inline-flex flex-1 justify-start items-end pl-4"
      :to="`/${slug}`"
    >
      <div
        class="flex group-hover:border-b-2 border-b-2 border-white group-hover:border-blue-600 group-hover:text-blue-600 group-hover:font-semibold mb-3"
      >
        Read more
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          class="group-hover:ml-5 group-hover:font-semibold duration-200"
        >
          <path fill="black" d="M15.5 5H11l5 7l-5 7h4.5l5-7z" />
          <path fill="black" d="M8.5 5H4l5 7l-5 7h4.5l5-7z" />
        </svg>
      </div>
    </div>
  </NuxtLink>
</template>
