import { userContactsList } from "../../data"

export default defineEventHandler(() => {
	return { items: [...userContactsList] }
})