import '@mdi/font/css/materialdesignicons.css'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'

export default defineNuxtPlugin((app) => {
	const vuetify = createVuetify({
		icons: {
			defaultSet: 'mdi',
		},
		ssr: true
	})
	app.vueApp.use(vuetify)
})