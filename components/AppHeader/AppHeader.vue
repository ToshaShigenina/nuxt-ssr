<script setup>

defineProps([ 'modelValue' ]);
defineEmits([ 'update:modelValue' ]);

const route = useRoute();
const title = computed(() => {
  switch (route.name) {
    case 'plan':
      return 'Журнал';
    case 'settings':
      return 'Настройки';
    case 'employees-management':
      return 'Сотрудники';
    default:
      return 'Приложение';
  }
});

useHead({ title })

</script>

<template>
  <v-app-bar class="bar" :elevation="0">
    <template #prepend>
      <v-app-bar-nav-icon @click.stop="$emit('update:modelValue', !modelValue)" />
    </template>
    <v-app-bar-title>{{ title }}</v-app-bar-title>
    <template v-slot:append>
      <slot />
    </template>
  </v-app-bar>
</template>

<style scoped>
.bar {
  --v-theme-surface: 66, 211, 146;
  --v-theme-on-surface: 255, 255, 255;
  --v-high-emphasis-opacity: 1;
}
</style>