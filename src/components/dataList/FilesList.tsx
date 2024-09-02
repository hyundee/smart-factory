import { memo } from 'react'
import { NoData } from '@/components/notFound/noData'
import { FilesData, SelectData } from '@/types/basic'

interface IFilesList {
	onCheckedChange: (id: number, checked: boolean) => void
	dataList: SelectData[]
}

export const FilesList = memo(function FilesList({ dataList, onCheckedChange }: IFilesList) {
	const handleCheckboxChange = (id: number, e: React.ChangeEvent<HTMLInputElement>) => {
		console.log(id)
		onCheckedChange(id, e.target.checked)
	}

	return (
		<div>
			{dataList && dataList.length > 0 ? (
				dataList.map((data, index) => {
					const NewData = data.data as FilesData
					return (
						<div
							key={index}
							className="flex items-center bg-neutral-100 text-center text-black">
							<div className="flex h-8 w-8 items-center justify-center">
								<input
									type="checkbox"
									checked={data.checked}
									onChange={(e) => handleCheckboxChange(data.id, e)}
								/>
							</div>
							<div className="min-w-36 basis-2/4">{NewData.fileName}</div>
							<div className="w-full p-1">{NewData.date}</div>
						</div>
					)
				})
			) : (
				<NoData />
			)}
		</div>
	)
})
