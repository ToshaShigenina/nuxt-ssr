<script setup>
import { useUserStore } from '@/stores/user';

const userStore = useUserStore();
const { avatar, shortName } = storeToRefs(userStore)

</script>

<template>
  <v-menu open-on-hover>
    <template v-slot:activator="{ props }">
      <v-btn icon v-bind="props">
        <v-avatar :image="avatar" />
      </v-btn>
    </template>
    <v-list class="rounded-lg">
      <v-list-item>
        <v-list-item-title>{{ shortName }}</v-list-item-title>
      </v-list-item>
      <v-list-item append-icon="mdi-cog" to="/settings">
        <v-list-item-title>Настройки</v-list-item-title>
      </v-list-item>
      <v-list-item append-icon="mdi-theme-light-dark">
        <v-list-item-title>Тема</v-list-item-title>
      </v-list-item>
      <v-divider></v-divider>
      <v-list-item append-icon="mdi-arrow-right">
        <v-list-item-title>Выход</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>
