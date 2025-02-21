<script setup>
import { useEmployeeStore } from '@/stores/employee';

const employeesStore = useEmployeeStore();
const { loading, employees, pagination, pageCount } = storeToRefs(employeesStore);
const { loadEmployees, setPage } = employeesStore;
const headers = [
  { title: 'Имя', key: 'name' },
  { title: 'ID', key: 'id' },
  { title: 'E-mail', key: 'email' },
  { title: 'Телефон', key: 'phone' },
];

const changePage = (page) => {
  setPage(page);
  loadEmployees();
};

onBeforeMount(() => {
  loadEmployees();
})

</script>

<template>
  <client-only>
    <v-card variant="flat" elevation="0" class="rounded-lg">
      <v-table>
        <thead class="header">
          <tr>
            <th v-for="item in headers" :key="item.key">
              {{ item.title }}
            </th>
          </tr>
        </thead>
        <tbody v-if="!employees.length">
          <tr>
            <td colspan="4">
              Сотрудники не найдены
            </td>
          </tr>
        </tbody>
        <tbody v-else>
          <tr v-for="employee in employees" :key="employee.id">
            <td v-for="(value, key) in employee" :key="`${key}-${employee.id}`">
              {{ value }}
            </td>
          </tr>
        </tbody>
      </v-table>
      <div class="loader" v-if="!loading">
        Загрузка...
      </div>
    </v-card>
    <v-pagination v-if="pagination.totalCount > 0" :model-value="pagination.page" rounded="circle" class="mt-6" :length="pageCount" :disabled="!loading" @update:model-value="changePage" />
  </client-only>
</template>

<style scoped>
.header {
  background-color: #42D392;
  color: #fff;
}

.loader {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 20;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, .4);
}
</style>