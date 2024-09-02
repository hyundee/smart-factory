import { Dispatch, memo, SetStateAction, useState } from 'react'

interface IPagination {
	currentPage: number
	setCurrentPage: Dispatch<SetStateAction<number>>
	totalItemCount: number
	itemsPerPage: number
}

export const Pagination = memo(function Pagination({
	currentPage,
	setCurrentPage,
	totalItemCount,
	itemsPerPage,
}: IPagination) {
	const totalPage = Math.ceil(totalItemCount / itemsPerPage)
	const startPage = Math.floor((currentPage - 1) / 10) * 10 + 1
	const endPage = Math.min(startPage + 9, totalPage)

	const handlePrevPage = () => {
		if (currentPage > 1) {
			setCurrentPage((prevPage) => prevPage - 1)
		}
	}

	const handleNextPage = () => {
		if (currentPage < totalPage) {
			setCurrentPage((prevPage) => prevPage + 1)
		}
	}

	const handlePageClick = (page: number) => {
		setCurrentPage(page)
	}

	const renderPageNumbers = () => {
		const pageNumbers = []

		for (let i = startPage; i <= endPage; i++) {
			const isActive = i === currentPage
			pageNumbers.push(
				<button
					type="button"
					className={`${isActive ? 'text-neutral-500' : 'text-white'}`}
					key={i}
					onClick={() => handlePageClick(i)}
					disabled={isActive}>
					{i}
				</button>,
			)
		}
		return pageNumbers
	}

	return (
		<div className="mt-5 flex w-full items-center justify-center">
			<button
				type="button"
				onClick={handlePrevPage}
				disabled={currentPage === 1}
				className="mr-4 rounded-full px-3 py-2 hover:bg-neutral-700">
				이전
			</button>
			<div className="flex gap-10">{renderPageNumbers()}</div>
			<button
				type="button"
				onClick={handleNextPage}
				disabled={currentPage === totalPage}
				className="ml-4 rounded-full px-3 py-2 hover:bg-neutral-700">
				다음
			</button>
		</div>
	)
})
