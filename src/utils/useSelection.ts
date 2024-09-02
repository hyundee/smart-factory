import { SelectData } from '@/types/basic'
import { Dispatch, SetStateAction, useCallback, useState } from 'react'

export const useSelection = (
	dataList: SelectData[],
	setDataList: Dispatch<SetStateAction<SelectData[]>>,
	setIsAllChecked: Dispatch<SetStateAction<boolean>>,
): {
	selectedIds: number[]
	setSelectedIds: Dispatch<SetStateAction<number[]>>
	selectedIndex: number[]
	setSelectedIndex: Dispatch<SetStateAction<number[]>>
	updateSelection: (id: number, checked: boolean) => void
	selectAll: (checked: boolean) => void
} => {
	const [selectedIds, setSelectedIds] = useState<number[]>([])
	const [selectedIndex, setSelectedIndex] = useState<number[]>([])

	const updateSelection = useCallback(
		(id: number, checked: boolean): void => {
			setSelectedIds((prevSelectedIds) => {
				const updatedIds = checked
					? [...prevSelectedIds, id]
					: prevSelectedIds.filter((selectedId) => selectedId !== id)
				return updatedIds
			})

			setDataList((prevSelectList) => {
				const updatedList = prevSelectList.map((item) =>
					item.id === id ? { ...item, checked } : item,
				)
				const updatedAllChecked = updatedList.every((item) => item.checked)
				setIsAllChecked(updatedAllChecked)

				return updatedList
			})
		},
		[setSelectedIds, setDataList, setIsAllChecked],
	)

	const selectAll = useCallback(
		(checked: boolean): void => {
			const allIds = dataList.map((item) => item.id)
			const allIndexes = dataList.map((item) => item.data).map((_, index) => index)

			setSelectedIds(checked ? allIds : [])
			setSelectedIndex(checked ? allIndexes : [])
			setIsAllChecked(checked)

			setDataList((prevSelectList) =>
				prevSelectList.map((item) => ({
					...item,
					checked: checked,
				})),
			)
		},
		[dataList, setSelectedIds, setSelectedIndex, setIsAllChecked, setDataList],
	)

	return {
		selectedIds,
		setSelectedIds,
		selectedIndex,
		setSelectedIndex,
		updateSelection,
		selectAll,
	}
}
