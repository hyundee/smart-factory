import { ModalOverlay } from './ModalOverlay'
import { CancelButton } from '../button/CancelButton'
import { ConfirmButton } from '../button/ConfirmButton'
import { IModalOption } from '@/types/modal'
import { TextInput } from '../Inputs/TextInput'
import { SelectInput } from '../Inputs/SelectInput'
import { useSetRecoilState } from 'recoil'
import { modalState } from '@/store/modal'
import { useFormContext } from 'react-hook-form'
import React, { memo, useCallback } from 'react'

interface ICommonModal {
	title: string
	options: IModalOption[]
}

export const CommonModal = memo(function CommonModal({ title, options }: ICommonModal) {
	const { reset } = useFormContext()
	const setIsVisible = useSetRecoilState(modalState('AddModal'))

	const handleCancel = useCallback(() => {
		setIsVisible({ isOpen: false })
		reset()
	}, [reset, setIsVisible])
	return (
		<ModalOverlay>
			<div className="flex w-600 flex-col items-stretch justify-center gap-y-6 p-10">
				<h1 className="text-lg font-semibold">{`${title} 추가`}</h1>

				{options.map(({ name, keyword, required, text }) => (
					<div key={name} className="flex justify-start gap-x-4">
						<label className="w-1/4 text-right">
							{required && (
								<span className="relative bottom-1 mr-1 text-sm text-red-600">
									*
								</span>
							)}
							{name}
						</label>
						{text ? (
							<TextInput keyword={keyword} required={required} />
						) : (
							<SelectInput keyword={keyword} required={required} />
						)}
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
