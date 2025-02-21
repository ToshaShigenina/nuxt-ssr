import { userCompany } from "../../data"

export default defineEventHandler(() => {
	return { ...userCompany }
})
