import { ModalOverlay } from './ModalOverlay'
import { CancelButton } from '../button/CancelButton'
import { ConfirmButton } from '../button/ConfirmButton'
import { IModalOption } from '@/types/modal'
import { useSetRecoilState } from 'recoil'
import { modalState } from '@/store/modal'
import { useFormContext } from 'react-hook-form'
import { memo } from 'react'

interface IFolderModal {
	options: IModalOption[]
}

export const FolderModal = memo(function FolderModal({ options }: IFolderModal) {
	const { register, reset } = useFormContext()

	const setIsVisible = useSetRecoilState(modalState('FolderModal'))

	const handleCancel = () => {
		setIsVisible({ isOpen: false })
		reset()
	}

	return (
		<ModalOverlay>
			<div className="w-400 flex flex-col items-center justify-center gap-y-6 p-10">
				<h1 className="text-lg font-semibold">문서 업로드</h1>

				{options.map(({ keyword, required }) => (
					<div key={keyword} className="flex w-full items-center justify-center gap-x-2">
						<input
							type="text"
							{...register(keyword, {
								required: required,
							})}
							placeholder="파일을 선택해주세요."
							className="w-3/4 rounded-md border border-neutral-300 px-2 py-0.5"
							autoFocus
						/>

						<button className="box-border w-24 rounded-md border border-solid border-black bg-black px-2 py-0.5 text-white">
							파일 선택
						</button>
					</div>
				))}

				<div className="mt-5 flex items-center justify-end gap-x-2">
					<CancelButton text="취소" handleCancel={handleCancel} />
					<ConfirmButton text="확인" />
				</div>
			</div>
		</ModalOverlay>
	)
})
