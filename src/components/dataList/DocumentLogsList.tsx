import { memo } from 'react'
import { NoData } from '@/components/notFound/noData'
import { FilesData, SelectData } from '@/types/basic'

interface IDocumentLogsList {
	dataList: SelectData[]
}

export const DocumentLogsList = memo(function DocumentLogsList({ dataList }: IDocumentLogsList) {
	return (
		<div>
			{dataList && dataList.length > 0 ? (
				dataList.map((data, index) => {
					const NewData = data.data as FilesData
					return (
						<div
							key={index}
							className="flex items-center bg-neutral-100 text-center text-black">
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
