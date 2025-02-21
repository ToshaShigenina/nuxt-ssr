<script setup>
const showSidebar = ref(true);
const opened = ref([]);

const props = defineProps([ 'modelValue' ]);
const emits = defineEmits([ 'update:modelValue' ]);

watch(
  () => props.modelValue,
  () => {
    if (props.modelValue) {
      opened.value = [];
    } else {
      opened.value = [ 'employees' ];
    }
  }
);

watch(
  () => opened.value,
  () => {
    if (opened.value.length) {
      emits('update:modelValue', false);
    }
  }
)

</script>

<template>
  <v-navigation-drawer v-model="showSidebar" class="nav" :rail="modelValue" permanent @click="$emit('update:modelValue', false)">
    <v-list v-model:opened="opened">
      <v-list-item prepend-icon="mdi-application-outline">
        <v-list-item-title>Журнал</v-list-item-title>
      </v-list-item>
      <v-list-group value="employees">
        <template v-slot:activator="{ props }">
          <v-list-item prepend-icon="mdi-account-circle" v-bind="props">
            <v-list-item-title>Сотрудники</v-list-item-title>
          </v-list-item>
        </template>
        <v-list-item title="Управление" to="/employees/management" />
        <v-list-item title="Должности" />
        <v-list-item title="Расписание" />
      </v-list-group>
      <v-list-item prepend-icon="mdi-layers">
        <v-list-item-title>Админ</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<style scoped>
.nav {
  --v-theme-surface: 199, 199, 199;
  --v-theme-on-surface: 0, 0, 0;
  --v-high-emphasis-opacity: 1;
  --v-medium-emphasis-opacity: 1;

  border-right-width: 0;
}
</style>