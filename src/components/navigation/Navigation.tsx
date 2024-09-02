'use client'

import { useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { MenuList, SubMenu } from '@/constants/MenuList'
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import { mainMenuState, pathState } from '@/store/menu'
import { SubNavigation } from './SubNavigation'

export const Navigation = () => {
	const router = useRouter()
	const pathname = usePathname()

	const [isVisible, setIsVisible] = useState(false)
	const [selectedMainPath, setSelectedMainPath] = useRecoilState(pathState('mainPath'))
	const [selectedSubPath, setSelectedSubPath] = useRecoilState(pathState('subPath'))
	const [selectedThirdPath, setSelectedThirdPath] = useRecoilState(pathState('thirdPath'))

	const mainMenu = useRecoilValue(mainMenuState)
	const subMenu = mainMenu ? mainMenu.subMenu : []

	const navigateToMenu = (path: string) => {
		const isSamePath = selectedMainPath === path
		const targetPath = path === 'basic' ? selectedSubPath : selectedThirdPath

		isSamePath ? router.push(`/${path}/${targetPath}`) : setSelectedMainPath(path)
		setIsVisible(isSamePath ? (prev) => !prev : true)
	}

	const navigateToSubMenu = (menu: SubMenu) => {
		setSelectedSubPath(menu.subPath)
		menu.thirdMenu === undefined && router.push(`/${selectedMainPath}/${menu.subPath}`)
	}

	const navigateToThirdMenu = (thirdPath: string) => {
		setSelectedThirdPath(thirdPath)
		router.push(`/${selectedMainPath}/${thirdPath}`)
	}

	return (
		<nav className="flex h-full bg-neutral-800">
			<ul className="h-full w-28 bg-neutral-700">
				{MenuList.map((menu) => (
					<li
						key={menu.path}
						onClick={() => navigateToMenu(menu.path)}
						className="flex h-24 cursor-pointer items-center justify-center">
						<p>{menu.name}</p>
					</li>
				))}
			</ul>

			{isVisible && (
				<ul className="h-full w-44 overflow-auto">
					{subMenu.map((menu) => (
						<SubNavigation
							key={menu.subPath}
							menu={menu}
							selectedSubPath={selectedSubPath}
							navigateToSubMenu={navigateToSubMenu}
							navigateToThirdMenu={navigateToThirdMenu}
						/>
					))}
				</ul>
			)}
		</nav>
	)
}
