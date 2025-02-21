import { defineStore } from "pinia"

export type ContactType = 'phone' | 'email'

export interface IContactsList {
	id: number;
	type: ContactType;
	value: string;
}

export interface IUser {
	id: number;
	firstName: string;
	middleName?: string;
	lastName: string;
	avatar?: string;
	info: string;
}

export interface ICompany {
	address: string;
	contacts: IContactsList[];
	other?: string[];
}

const CONTACTS_LABEL = {
	email: 'E-mail',
	phone: 'Телефон',
}

export const useUserStore = defineStore('user', () => {
	const loading = ref(false)
	const user = ref<IUser | null>(null)
	const contactsList = ref<IContactsList[]>([])
	const company = ref<ICompany | null>(null)

	const haveMiddleName = computed(() => {
		if (user.value) {
			return user.value.middleName !== undefined && user.value.middleName.length !== 0
		}
		return false
	})
	const fullName = computed(() => {
		if (user.value) {
			return haveMiddleName
				? `${user.value.lastName} ${user.value.firstName} ${user.value.middleName}`
				: `${user.value.lastName} ${user.value.firstName}`
		}
		return ''
	})
	const shortName = computed(() => {
		if (user.value) {
			return haveMiddleName
				? `${user.value.lastName} ${user.value.firstName[0]}. ${user.value.middleName?.[0]}.`
				: `${user.value.lastName} ${user.value.firstName[0]}.`
		}
		return ''
	})
	const avatar = computed(() => {
		if (user.value && user.value.avatar) {
			return user.value.avatar
		}
		return '/img/avatar.png'
	})
	const info = computed(() => {
		if (user.value && user.value.info) {
			return user.value.info
		}
		return ''
	})
	const userContacts = computed(() => {
		return contactsList.value.map(({ id, type, value }) => ({
			id,
			label: CONTACTS_LABEL[type],
			value,
		}))
	})
	const userCompanyAddress = computed(() => company.value?.address ?? '')
	const userCompanyContacts = computed(() => {
		if (company.value && company.value.contacts) {
			return company.value.contacts.map(({ id, type, value }) => ({
				id,
				label: CONTACTS_LABEL[type],
				value,
			}))
		}
		return [];
	})
	const userCompanyOther = computed(() => company.value?.other?.join(', ') ?? '')

	const setLoading = (newLoading: boolean) => loading.value = newLoading
	const updateUser = (newUser: IUser) => {
		user.value = { ...newUser }
	}
	const updateUserContacts = (contacts: IContactsList[]) => {
		contactsList.value = [...contacts]
	}
	const updateUserCompany = (newCompany: ICompany) => {
		company.value = { ...newCompany }
	}
	const loadUser = async () => {
		const data = await $fetch('/user', { method: 'get' })
		updateUser(data)
		setLoading(true)
	}
	const loadUserContacts = async () => {
		const data = await $fetch('/user/contacts', { method: 'get' })
		updateUserContacts(data.items)
	}
	const loadUserCompany = async () => {
		const data = await $fetch('/user/company', { method: 'get' })
		updateUserCompany(data)
	}

	return {
		loading,
		setLoading,
		user,
		fullName,
		shortName,
		avatar,
		info,
		loadUser,
		userContacts,
		loadUserContacts,
		userCompanyAddress,
		userCompanyContacts,
		userCompanyOther,
		loadUserCompany,
	}
})
