<script setup>
defineProps([ 'modelValue' ]);
const emits = defineEmits([ 'update:modelValue' ]);

const toggleModal = (show) => {
	emits('update:modelValue', show);
}

</script>

<template>
	<v-dialog width="auto" :model-value="modelValue" @update:model-value="toggleModal">
		<v-banner width="680" class="rounded-lg">
			<p>Banner with two lines of text. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam sunt praesentium, perspiciatis... magni. Lorem ipsum dolor sit amet...</p>
			<template v-slot:actions>
				<v-btn class="ms-auto btn" variant="tonal" text="Ok" @click="toggleModal(false)" />
				<v-btn class="ms-6 btn" variant="tonal" text="Отмена" @click="toggleModal(false)" />
			</template>
		</v-banner>
	</v-dialog>
</template>

<style scoped>
.btn {
	--v-theme-overlay-multiplier: 0;
	--v-activated-opacity: 0;
	background-color: rgba(66, 211, 146, .3);
	color: rgba(0, 0, 0, .87);
}
</style>