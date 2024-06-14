<template>
  <div class="flex justify-center w-full bg-white">
    <div class="p-2 flex-1 max-w-7xl">
      <div class="flex space-x-5">
        <!-- Nút Blog về Trang chủ -->
        <div class="flex-1 flex items-center">
          <NuxtLink
            to="/"
            class="text-yellow-600 text-2xl font-serif font-semibold hover:scale-110 duration-300 p-1"
          >
            Bloggg
          </NuxtLink>
        </div>
        <div class="flex space-x-3 items-center">
          <!-- Trang chủ -->
          <div
            :class="
              isActive('/')
                ? 'bg-slate-200 rounded-md hover:scale-125 duration-300 '
                : 'hover:scale-125 duration-300 rounded-lg border border-white hover:border-slate-200'
            "
          >
            <button
              @click.prevent="navigate('/')"
              class="font-serif font-semibold p-2 rounded-md"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
              >
                <path fill="#b7980b" d="M4 21V9l8-6l8 6v12h-6v-7h-4v7z" />
              </svg>
            </button>
          </div>
          <div
            :class="
              isActive('/categories')
                ? 'bg-slate-200 rounded-md hover:scale-125 duration-300 hover:bg-slate-200'
                : 'hover:scale-125 duration-300 rounded-lg border border-white hover:border-slate-200'
            "
          >
            <button
              @click.prevent="navigate('/categories')"
              class="font-serif font-semibold p-2 rounded-md"
            >
              <div class="flex justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#b7980b"
                    d="M3 18v-2h18v2zm0-5v-2h18v2zm0-5V6h18v2z"
                  />
                </svg>
              </div>
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
