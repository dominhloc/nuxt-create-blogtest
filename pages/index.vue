<template>
  <main>
    <Header>
      <div class="flex flex-col items-center justify-center">
        <div class="h-[300px] w-7/12 duration-300">
          <img
            src="https://preview.redd.it/o96asqovzgi51.jpg?width=640&crop=smart&auto=webp&s=1d3becaddd3c64e0df9f5f6fa6c5cf7615a02b71"
            class="w-full h-full"
          />
        </div>
      </div>
    </Header>

    <!-- Blog Section Starts -->
    <section
      class="blogs flex-col flex justify-center items-center bg-slate-200 p-9"
    >
      <div class="max-w-7xl">
        <div class="grid sm:grid-cols-4 gap-10">
          <Grid
            v-for="blog in blogs"
            :key="blog.id"
            :title="blog.title.rendered"
            :image="blog._embedded['wp:featuredmedia'][0]?.source_url"
            :slug="blog.slug"
          ></Grid>
        </div>
      </div>
    </section>
    <!-- Blog Section Ends  -->
  </main>
</template>
<script lang="ts" setup>
import useWpApi from "~~/composables/useWpApi";

useHead({
  title: "Home",
  meta: [
    {
      name: "description",
      content: "Home",
    },
  ],
  titleTemplate: "Blog",
});
const { data: blogs, refresh, error } = await useWpApi().getPosts();
</script>
