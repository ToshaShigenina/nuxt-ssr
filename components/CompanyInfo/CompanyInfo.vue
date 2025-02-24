<script setup>
import { useUserStore } from '@/stores/user';

const userStore = useUserStore();
const { loadingCompany, userCompanyAddress, userCompanyContacts, userCompanyOther } = storeToRefs(userStore);
const { loadUserCompany } = userStore;
const opened = ref([ 'company' ]);

onBeforeMount(() => {
	loadUserCompany();
})

</script>

<template>
	<v-card variant="flat" class="rounded-lg" elevation="0" :loading="!loadingCompany">
		<v-list v-model:opened="opened" lines="two">
			<v-list-group value="company">
				<template v-slot:activator="{ props }">
					<v-list-item v-bind="props" prepend-icon="mdi-application-outline" title="Компания" />
				</template>
				<template v-if="loadingCompany">
					<v-list-item>
						<v-list-item-title>Адрес</v-list-item-title>
						{{ userCompanyAddress }}
					</v-list-item>
					<v-list-item>
						<v-list-item-title>Филиалы</v-list-item-title>
						{{ userCompanyOther }}
					</v-list-item>
					<v-list-item>
						<v-list-item-title>Контактная информация</v-list-item-title>
						<v-list>
							<v-list-item v-for="contact in userCompanyContacts" :key="contact.id">
								<v-list-item-subtitle>{{ contact.label }}</v-list-item-subtitle>
								{{ contact.value }}
							</v-list-item>
						</v-list>
					</v-list-item>
				</template>
			</v-list-group>
		</v-list>
	</v-card>
</template>