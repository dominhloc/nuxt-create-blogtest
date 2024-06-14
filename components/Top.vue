<template>
  <div class="flex justify-center max-w-full bg-white">
    <div class="text-black p-4 flex-1 max-w-7xl">
      <div class="flex space-x-5">
        <!-- Nút Blog về Trang chủ -->
        <div class="flex-auto flex items-center">
          <NuxtLink
            to="/"
            class="flex justify-start text-yellow-600 items-center text-3xl font-serif font-semibold hover:scale-125 duration-300 p-1 rounded-md"
          >
            Bloggggggg
          </NuxtLink>
        </div>
        <div class="flex space-x-5 items-center mr-4">
          <!-- Trang chủ -->
          <div
            :class="
              isActive('/')
                ? 'bg-yellow-600 text-white rounded-md hover:scale-125 duration-300'
                : 'hover:scale-125 duration-300'
            "
          >
            <button
              @click.prevent="navigate('/')"
              class="font-serif font-semibold p-2 rounded-md"
            >
              Home
            </button>
          </div>
          <div
            :class="
              isActive('/categories')
                ? 'bg-yellow-600 text-white rounded-md hover:scale-125 duration-300'
                : 'hover:scale-125 duration-300'
            "
          >
            <button
              @click.prevent="navigate('/categories')"
              class="font-serif font-semibold p-2 rounded-md"
            >
              Categories
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// import { useRoute, useRouter } from "vue-router";
// import { computed } from "vue";

const route = useRoute();
const router = useRouter();

const isActive = (path) => {
  return route.path === path;
};

const navigate = (path) => {
  router.push(path);
};
</script>
