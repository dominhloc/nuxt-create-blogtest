<template>
  <main>
    <Header>
      <div class="flex flex-col items-center">
        <div class="h-[300px] w-8/12">
          <img
            src="https://cdn.tgdd.vn/Files/2020/09/20/1291843/chip-concept_800x450.jpg"
            class="w-full h-full"
          />
        </div>
      </div>
    </Header>

    <!-- Blog Section Starts -->
    <section class="flex justify-center bg-slate-100 p-9">
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
