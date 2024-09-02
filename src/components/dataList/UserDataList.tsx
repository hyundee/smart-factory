import { memo } from 'react'
import { NoData } from '@/components/notFound/noData'
import { UsersData } from '@/types/basic'
import { formatData } from '@/utils/formatData'

interface IUserDataListt {
	dataList: UsersData[]
}

export const UserDataListt = memo(function UserDataListt({ dataList }: IUserDataListt) {
	return (
		<div>
			{dataList && dataList.length > 0 ? (
				dataList.map((data) => {
					const Data = formatData(data)
					return (
						<div
							key={Data.id}
							className="flex items-center bg-neutral-100 text-center text-black">
							<div className="w-full p-1">{Data.id}</div>
							<div className="w-full p-1">{Data.name}</div>
							<div className="w-full p-1">{Data.departmentName}</div>
							<div className="w-full p-1">{Data.position}</div>
							<div className="w-full p-1">{Data.jobTitle}</div>
							<div className="w-full p-1">{Data.employeeId}</div>
							<div className="w-full p-1">{Data.email}</div>
							<div className="w-full p-1">{Data.authority.name}</div>
							<div className="w-full p-1">{Data.officeStatus}</div>
							<div className="w-full p-1">{Data.loginId}</div>
						</div>
					)
				})
			) : (
				<NoData />
			)}
		</div>
	)
})
