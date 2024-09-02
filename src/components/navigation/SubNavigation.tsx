import { SubMenu } from '@/constants/MenuList'

interface ISubNavigation {
	menu: SubMenu
	selectedSubPath: string
	navigateToSubMenu: (menu: SubMenu) => void
	navigateToThirdMenu: (thirdPath: string) => void
}

export const SubNavigation = ({
	menu,
	selectedSubPath,
	navigateToSubMenu,
	navigateToThirdMenu,
}: ISubNavigation) => {
	return (
		<li key={menu.subPath} onClick={() => navigateToSubMenu(menu)} className="flex flex-col">
			<span className="flex h-16 w-full cursor-pointer flex-col items-start justify-center pl-4 hover:bg-neutral-700">
				{menu.subName}
			</span>
			{selectedSubPath === menu.subPath && (
				<ul className="flex w-full flex-col">
					{menu.thirdMenu &&
						menu.thirdMenu.map((thirdMenu) => (
							<li
								key={thirdMenu.thirdPath}
								onClick={() => navigateToThirdMenu(thirdMenu.thirdPath)}
								className="flex h-10 w-full cursor-pointer items-center pl-12 hover:bg-neutral-700">
								{thirdMenu.thirdName}
							</li>
						))}
				</ul>
			)}
		</li>
	)
}
