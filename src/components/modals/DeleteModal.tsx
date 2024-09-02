import { memo } from 'react'
import { ModalOverlay } from './ModalOverlay'
import { CancelButton } from '../button/CancelButton'
import { useSetRecoilState } from 'recoil'
import { modalState } from '@/store/modal'
import { DeleteButton } from '../button/DeleteButton'

interface IDeleteModal {
	dataIds: number[]
	handleDelete: () => Promise<void>
}

export const DeleteModal = memo(function DeleteModal({ dataIds, handleDelete }: IDeleteModal) {
	const setIsVisible = useSetRecoilState(modalState('DeleteModal'))

	const handleCancel = () => {
		setIsVisible({ isOpen: false })
	}

	return (
		<ModalOverlay>
			{dataIds.length !== 0 ? (
				<div className="flex flex-col items-center justify-center gap-y-2 p-8">
					<h1 className="text-lg font-semibold">삭제하시겠습니까?</h1>
					<p>(저장하지 않은 데이터는 모두 사라집니다.)</p>
					<div className="mt-5 flex items-center justify-center gap-x-2">
						<CancelButton text="취소" handleCancel={handleCancel} />
						<DeleteButton text="삭제" handleDelete={handleDelete} />
					</div>
				</div>
			) : (
				<div className="flex flex-col items-center justify-center gap-y-7 p-8">
					<h1 className="text-lg font-semibold">삭제할 데이터를 선택해 주세요.</h1>
					<CancelButton text="확인" handleCancel={handleCancel} />
				</div>
			)}
		</ModalOverlay>
	)
})
