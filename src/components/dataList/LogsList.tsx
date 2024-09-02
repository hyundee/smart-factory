import { memo } from 'react'
import { NoData } from '@/components/notFound/noData'
import { AccessLogsData, ApiLogsData } from '@/types/basic'
import { formatData } from '@/utils/formatData'

interface ILogsList {
	dataList: AccessLogsData[] | ApiLogsData[]
	usedId?: boolean
}

export const LogsList = memo(function LogsList({ dataList, usedId }: ILogsList) {
	return (
		<div>
			{dataList && dataList.length > 0 ? (
				dataList.map((data) => {
					const Data = formatData(data)
					return (
						<div
							key={data.id}
							className="flex items-center bg-neutral-100 text-center text-black">
							<div className="w-full p-1">{Data.action}</div>
							<div className="w-full p-1">{Data.departmentName}</div>
							<div className="w-full p-1">{Data.authority.name}</div>
							<div className="w-full p-1">{Data.createdAt}</div>
							<div className="w-full p-1">{Data.useLoginId}</div>
							{usedId && <div className="w-full p-1">{Data.ip}</div>}
						</div>
					)
				})
			) : (
				<NoData />
			)}
		</div>
	)
})
