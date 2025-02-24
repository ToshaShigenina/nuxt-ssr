import { userData, userCompany, userContactsList, createEmployeesList } from './data'

const loadData = async <T>(data: T, delay = 1000) => {
	return new Promise<T>((resolve) => {
		setTimeout(() => {
			resolve(data)
		}, delay);
	})
}

export const loadUserData = async () => {
	return loadData<typeof userData>(userData)
}

export const loadUserCompanyData = async () => {
	return loadData<typeof userCompany>(userCompany, 2000)
}

export const loadUserContactsData = async () => {
	return loadData<typeof userContactsList>(userContactsList, 5000)
}

export const loadEmployeesData = (page: number, pageSize: number) => {
	const totalCount = 23;
	return loadData({
		items: [...createEmployeesList(page, pageSize, totalCount)],
		pagination: {
			page,
			pageSize,
			totalCount,
		}
	})
}