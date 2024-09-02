import { memo } from 'react'
import { ModalOverlay } from './ModalOverlay'
import { CancelButton } from '../button/CancelButton'
import { ConfirmButton } from '../button/ConfirmButton'
import { useSetRecoilState } from 'recoil'
import { modalState } from '@/store/modal'

interface IDownloadModal {
	dataIds: string[]
}

export const DownloadModal = memo(function DownloadModal({ dataIds }: IDownloadModal) {
	const setIsVisible = useSetRecoilState(modalState('DownloadModal'))

	const handleCancel = () => {
		setIsVisible({ isOpen: false })
	}

	return (
		<ModalOverlay>
			{dataIds.length !== 0 ? (
				<div className="flex flex-col items-center justify-center gap-y-2 p-8">
					<h1 className="text-lg font-semibold">다운로드하시겠습니까?</h1>
					<div className="mt-5 flex items-center justify-center gap-x-2">
						<CancelButton text="취소" handleCancel={handleCancel} />
						<ConfirmButton text="확인" />
					</div>
				</div>
			) : (
				<div className="flex flex-col items-center justify-center gap-y-7 p-8">
					<h1 className="text-lg font-semibold">다운로드할 데이터를 선택해 주세요.</h1>
					<CancelButton text="확인" handleCancel={handleCancel} />
				</div>
			)}
		</ModalOverlay>
	)
})
