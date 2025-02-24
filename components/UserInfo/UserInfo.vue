<script setup>
import { useUserStore } from '@/stores/user';

const userStore = useUserStore();
const { loadingContacts, fullName, info, userContacts } = storeToRefs(userStore);
const { loadUserContacts } = userStore;
const showModal = ref(false);
const opened = ref([ 'user' ]);

const openModal = () => showModal.value = true;

onBeforeMount(() => {
	loadUserContacts();
})

</script>

<template>
	<v-card variant="flat" class="rounded-lg" elevation="0" :loading="!loadingContacts">
		<v-list v-model:opened="opened" lines="two">
			<v-list-group value="user">
				<template v-slot:activator="{ props }">
					<v-list-item v-bind="props" prepend-icon="mdi-account-circle" title="Пользователь" />
				</template>
				<template v-if="loadingContacts">
					<v-list-item @click="openModal">
						<v-list-item-title>ФИО</v-list-item-title>
						{{ fullName }}
					</v-list-item>
					<v-list-item>
						<v-list-item-title>Контактные данные</v-list-item-title>
						<v-list>
							<v-list-item v-for="contact in userContacts" :key="contact.id">
								<v-list-item-subtitle>{{ contact.label }}</v-list-item-subtitle>
								{{ contact.value }}
							</v-list-item>
						</v-list>
					</v-list-item>
					<v-list-item>
						<v-list-item-title>Личная информация</v-list-item-title>
						{{ info }}
					</v-list-item>
				</template>
			</v-list-group>
		</v-list>
		<info-modal v-model="showModal" />
	</v-card>
</template>