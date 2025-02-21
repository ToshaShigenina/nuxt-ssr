import { defineStore } from "pinia"
import type { IContactsList } from "./user"

export interface IEmployee {
	id: number;
	name: string;
	contactsList: IContactsList[],
}

export const useEmployeeStore = defineStore('employee', () => {
	const loading = ref(false)
	const pagination = reactive({
		page: 1,
		pageSize: 10,
		totalCount: 0,
	})
	const employeesList = ref<IEmployee[] | null>(null)

	const pageCount = computed(() => {
		return Math.ceil(pagination.totalCount / pagination.pageSize)
	})
	const employees = computed(() => {
		if (employeesList.value) {
			return employeesList.value.map(({ id, name, contactsList }) => {
				return {
					id,
					name,
					email: contactsList.find(contact => contact.type === 'email')?.value ?? '-',
					phone: contactsList.find(contact => contact.type === 'phone')?.value ?? '-',
				}
			})
		}
		return []
	})

	const setLoading = (newLoading: boolean) => loading.value = newLoading
	const setPage = (page: number) => pagination.page = page
	const setTotalCount = (totalCount: number) => pagination.totalCount = totalCount
	const updateEmployees = (items: IEmployee[]) => {
		employeesList.value = [...items]
	}
	const loadEmployees = async () => {
		setLoading(false)
		const data = await $fetch('/employee', {
			method: 'get',
			query: {
				page: pagination.page,
				pageSize: pagination.pageSize,
			},
			lazy: true
		})
		updateEmployees(data.items)
		setTotalCount(data.pagination.totalCount)
		setLoading(true)
	}

	return {
		loading,
		setLoading,
		employeesList,
		employees,
		loadEmployees,
		pagination,
		pageCount,
		setPage,
	}
})
