import { createEmployeesList } from "../data"

export default defineEventHandler((event) => {
	const query = getQuery(event)
	const page = query.page ? Number(query.page) : 1
	const pageSize = query.pageSize ? Number(query.pageSize) : 10
	const totalCount = 23

	return {
		items: [...createEmployeesList(page, pageSize, totalCount)],
		pagination: {
			page,
			pageSize,
			totalCount,
		}
	}
})