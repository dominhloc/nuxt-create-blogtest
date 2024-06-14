<template>
  <Header
    :title="`Archive: ${category.name}`"
    class="font-serif text-yellow-500 flex flex-row justify-center items-center"
  ></Header>
  <section class="blogs flex-col flex items-center bg-slate-200 p-9 h-screen">
    <div class="max-w-7xl">
      <div class="space-y-7 w-80 gap-10">
        <Grid
          v-for="post in posts"
          :key="post.id"
          :title="post.title.rendered"
          :image="post._embedded['wp:featuredmedia'][0]?.source_url"
          :slug="post.slug"
        ></Grid>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
const params = useRoute().params;

const { data: categories, error } = await useWpApi().getCatgory(
  params.slug as string
);

const category = categories.value[0];

const { data: posts, error: postsError } = await useWpApi().getPosts(
  category.id
);

useHead({
  title: `Archive: ${category.name}`,
  meta: [
    {
      name: "description",
      content: `Category ${params.slug}`,
    },
  ],
});
</script>
