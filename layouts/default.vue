<script setup>
import { useUserStore } from '@/stores/user';

const userStore = useUserStore();
const { loading } = storeToRefs(userStore);
const { loadUser } = userStore;
const showSidebar = ref(true);

onBeforeMount(() => {
  loadUser();
})

</script>

<template>
  <v-app class="theme">
    <v-layout>
      <app-header v-model="showSidebar">
        <app-menu />
      </app-header>
      <app-sidebar v-model="showSidebar" />
      <v-main>
        <v-container fluid>
          <slot />
        </v-container>
      </v-main>
      <transition>
        <app-loader v-if="!loading" />
      </transition>
    </v-layout>
  </v-app>
</template>

<style scoped>
.theme {
  --v-theme-background: 221, 220, 220;
}
</style>