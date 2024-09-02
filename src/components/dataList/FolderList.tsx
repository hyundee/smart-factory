import { memo } from 'react'
import { FoldersData, SelectData } from '@/types/basic'
import FolderDown from '@public/icons/folderDown.svg'
import { NoData } from '../notFound/noData'

interface IFoldersList {
	dataList: SelectData[]
	selectedIds: number[]
	handleFolderSelect: (id: number) => void
	handleDoubleClick: (id: number) => void
}

export const FoldersList = memo(function FoldersList({
	dataList,
	selectedIds,
	handleFolderSelect,
	handleDoubleClick,
}: IFoldersList) {
	return (
		<div>
			{dataList && dataList.length > 0 ? (
				<div className="grid grid-cols-4 gap-4 text-black">
					{dataList.map((data, index) => {
						const NewData = data.data as FoldersData
						const isSelected = selectedIds.includes(NewData.id)
						return (
							<div
								key={index}
								onClick={() => handleFolderSelect(NewData.id)}
								onDoubleClick={() => handleDoubleClick(NewData.id)}
								className={`${isSelected ? 'bg-neutral-400' : 'bg-neutral-100'} flex h-40 cursor-pointer flex-col items-center justify-center gap-2 rounded-xl hover:bg-neutral-400`}>
								<h1 className="font-semibold">{NewData.folderName}</h1>
								<div className="w-20">
									<FolderDown />
								</div>
							</div>
						)
					})}
				</div>
			) : (
				<NoData />
			)}
		</div>
	)
})
