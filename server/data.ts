import { fakerRU as faker } from '@faker-js/faker';

import { IEmployee } from "~/stores/employee";
import { IUser, IContactsList, ICompany } from "~/stores/user";

const createEmployee = (): IEmployee => ({
	id: faker.number.int(),
	name: faker.person.firstName('male'),
	contactsList: [
		{
			id: faker.number.int(),
			type: 'email',
			value: faker.internet.email(),
		},
		{
			id: faker.number.int(),
			type: 'phone',
			value: faker.phone.number({ style: 'international' }),
		}
	],
})

export const createEmployeesList = (page: number, pageSize: number, totalCount: number): IEmployee[] => {
	const current = totalCount - page * pageSize
	let count = 0
	if (current >= 0) count = pageSize
	else count = pageSize + current

	return faker.helpers.multiple(createEmployee, { count })
}

export const userData: IUser = {
	id: faker.number.int(),
	firstName: faker.person.firstName('male'),
	middleName: faker.person.middleName('male'),
	lastName: faker.person.lastName('male'),
	avatar: faker.image.avatar(),
	info: faker.lorem.paragraph(4),
}

export const userContactsList: IContactsList[] = [
	{
		id: faker.number.int(),
		type: 'email',
		value: faker.internet.email(),
	},
	{
		id: faker.number.int(),
		type: 'phone',
		value: faker.phone.number({ style: 'international' }),
	}
]

export const userCompany: ICompany = {
	address: `${faker.location.city()}, ${faker.location.street()}`,
	contacts: [
		{
			id: faker.number.int(),
			type: 'email',
			value: faker.internet.email(),
		},
		{
			id: faker.number.int(),
			type: 'phone',
			value: faker.phone.number({ style: 'international' }),
		}
	],
	other: [
		faker.lorem.words(3),
		faker.lorem.words(2),
		faker.lorem.words(4),
	],
}