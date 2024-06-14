<template>
  <div class="flex justify-center items-center border-t-4">
    <section class="py-10 max-w-7xl">
      <div v-if="post" class="p-10">
        <!-- Blog Title  -->
        <h1 class="font-bold text-2xl sm:text-4xl text-center mb-5 uppercase">
          {{ post.title.rendered }}
        </h1>
        <!-- Blog Meta  -->
        <div class="flex items-center mb-14 justify-center font-semibold gap-5">
          <span
            >Written by:
            <span class="text-blue-600">{{
              post._embedded["author"][0]?.name
            }}</span></span
          >
          <span
            >Published on:
            <span class="text-blue-600">{{ post.date }}</span></span
          >
        </div>
        <!-- Blog Image  -->
        <div
          class="h-[250px] sm:h-[500px] w-full rounded-lg shadow-xl relative overflow-hidden mb-12"
        >
          <img
            :src="post._embedded['wp:featuredmedia'][0]?.source_url"
            :alt="post.title.rendered"
            class="absolute w-full h-full object-cover"
          />
        </div>
        <div>
          <div
            v-if="post.content"
            v-html="post.content.rendered"
            class="blog__content"
          ></div>
        </div>
      </div>
    </section>
  </div>
</template>
<script lang="ts" setup>
import { onMounted } from "vue";

const params = useRoute().params;
const { data: posts } = await useWpApi().getPost(params.slug as string);
const post = posts.value?.[0];

useHead({
  title: post?.title.rendered,
  meta: [
    {
      name: "description",
      content: `${post?.excerpt.rendered}`,
    },
  ],
});

onMounted(() => {
  const content = document.querySelector(".blog__content");
  if (content) {
    content.querySelectorAll("h1, h2, h3, h4, h5, h6, p").forEach((el) => {
      el.classList.add("my-5");
    });
    content.querySelectorAll("h1, h2, h3, h4, h5, h6").forEach((el) => {
      el.classList.add("font-bold");
    });

    content
      .querySelectorAll("h1")
      .forEach((el) => el.classList.add("text-2xl", "sm:text-4xl"));
    content
      .querySelectorAll("h2")
      .forEach((el) => el.classList.add("text-xl", "sm:text-3xl"));
    content
      .querySelectorAll("h3")
      .forEach((el) => el.classList.add("text-lg", "sm:text-2xl"));
    content
      .querySelectorAll("h4")
      .forEach((el) => el.classList.add("sm:text-xl"));
    content
      .querySelectorAll("h5")
      .forEach((el) => el.classList.add("text-sm", "sm:text-lg"));
  }
});
</script>
