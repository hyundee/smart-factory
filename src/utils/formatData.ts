import { isEmpty } from '@/utils/isEmpty'

export const formatData = (data: Record<string, any>, defaultValue: string = '-') => {
	const formattedData: Record<string, any> = {}

	for (const key in data) {
		formattedData[key] = !isEmpty(data[key]) ? data[key] : defaultValue
	}

	return formattedData
}
