import { Dispatch, memo, SetStateAction, useCallback, useEffect, useMemo, useState } from 'react'
import ArrangeDown from '@public/icons/chevronDown.svg'
import { Menus, MenusData, SelectData } from '@/types/basic'
import { useSelection } from '@/utils/useSelection'

interface IMenuRollsList {
	menus: SelectData[]
	menuIds?: number[]
	setMenuIds: Dispatch<SetStateAction<number[]>>
	onCheckedMenus: (id: number, checked: boolean) => void
	menusSelectedIds: number[]
	setMenusSelectedIds: Dispatch<SetStateAction<number[]>>
}

const MenuList = ['기준정보관리', 'MES', 'PMS']

export const MenuRollsList = memo(function MenuRollsList({
	menus,
	menuIds = [],
	setMenuIds,
	onCheckedMenus,
	menusSelectedIds,
}: IMenuRollsList) {
	const [menuList, setMenuList] = useState<SelectData[]>([])
	const [currentMenu, setCurrentMenu] = useState<string>('BASE')
	const [visibleMenus, setVisibleMenus] = useState<{ [key: string]: boolean }>({
		기준정보관리: false,
		MES: false,
		PMS: false,
	})

	const [isAllChecked, setIsAllChecked] = useState(false)
	const { selectedIds, setSelectedIds, updateSelection, selectAll } = useSelection(
		menuList,
		setMenuList,
		setIsAllChecked,
	)

	const handleCheckboxChange = (id: number, e: React.ChangeEvent<HTMLInputElement>) => {
		console.log(id)
		e.stopPropagation()
		onCheckedMenus(id, e.target.checked)
		// const updatedMenuList = menuList.map((menu) => {
		// 	if (menusSelectedIds.includes(id)) {
		// 		return { ...menu, data: { ...menu.data, checked: false } }
		// 	}
		// 	return menu
		// })
		// setMenuList(updatedMenuList)
	}

	// 개별 hecked 상태변경
	const onCheckedChange = useCallback(
		(id: number, checked: boolean) => {
			updateSelection(id, checked)
		},
		[updateSelection],
	)

	// 전체 checked 상태변경
	const handleAllCheckboxChange = useCallback(
		(e: React.ChangeEvent<HTMLInputElement>) => {
			selectAll(e.target.checked)
		},
		[selectAll],
	)

	// 상위 메뉴
	const handleToggleMenuClick = (menu: string) => {
		setVisibleMenus((prev) => ({
			...prev,
			[menu]: !prev[menu],
		}))
		setCurrentMenu(menu === '기준정보관리' ? 'BASE' : menu)
	}

	const handleCheckboxClick = (id: number, e: React.ChangeEvent<HTMLInputElement>) => {
		const checked = e.target.checked
		const updatedMenuIds = checked
			? [...menuIds, id]
			: menuIds.filter((menuId) => menuId !== id)

		onCheckedChange(id, checked)
		setMenuIds(updatedMenuIds)
	}

	const subMenus = useMemo(
		() => menuList.filter((data) => (data.data as MenusData).type === currentMenu),
		[currentMenu, menuList],
	)

	console.log(subMenus)

	const fetchMenusData = useCallback(async () => {
		try {
			const res = await fetch(`/api/menu/authorities/menus`).then((res) => res.json())
			setMenuList(
				res.data.map((el: MenusData) => ({
					id: el.id,
					checked: false,
					data: el,
				})),
			)
		} catch (error) {
			console.error('Error fetching data:', error)
		}
	}, [])

	useEffect(() => {
		fetchMenusData()
	}, [fetchMenusData, menuIds])

	return (
		<div className="text-black">
			<ul className="bg-neutral-200">
				{menus.map((menu) => {
					const RollsMenu = menu.data as Menus
					return (
						<li
							key={RollsMenu.id}
							className="flex cursor-pointer flex-col items-center justify-center py-1">
							<div
								className="flex w-full items-center justify-between px-2.5"
								onClick={() => handleToggleMenuClick(RollsMenu.name)}>
								<span className="flex h-8 w-8 items-center">
									<input
										type="checkbox"
										checked={menu.checked}
										onChange={(e) => handleCheckboxChange(RollsMenu.id, e)}
										onClick={(e) => e.stopPropagation()}
									/>
								</span>
								<p className="text-lg">{RollsMenu.name}</p>
								<span className="w-6">
									<ArrangeDown />
								</span>
							</div>
							{visibleMenus[RollsMenu.name] && (
								<ul className="w-full bg-neutral-100 pl-5 text-left">
									{subMenus.map((subMenu) => {
										const MenuData = subMenu.data as MenusData
										return (
											<li
												key={MenuData.id}
												className="flex items-center justify-start gap-2 py-0.5">
												<span className="flex h-8 w-8 items-center justify-center">
													<input
														type="checkbox"
														checked={menuIds?.includes(MenuData.id)}
														onChange={(e) =>
															handleCheckboxClick(MenuData.id, e)
														}
													/>
												</span>
												<p>{MenuData.name}</p>
											</li>
										)
									})}
								</ul>
							)}
						</li>
					)
				})}
			</ul>
		</div>
	)
})
