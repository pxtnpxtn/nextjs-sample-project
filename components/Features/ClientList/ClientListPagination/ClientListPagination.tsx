import React, { useEffect } from 'react';
import usePaginationStore, {
	IPaginationOptions
} from '../../../../store/pagination';
import styles from './ClientListPagination.module.scss';

interface IClientListPagination {
	paginationOptions: IPaginationOptions;
	currentPage: number;
	setCurrentPage: (newCurrentNumber: number) => void;
	getSiteList: (pageNumber: number) => void;
}

function ClientListPagination({
	paginationOptions,
	currentPage,
	setCurrentPage,
	getSiteList
}: IClientListPagination) {
	const goToFirstPage = async () => {
		getSiteList(Number(paginationOptions.first._page));
		setCurrentPage(Number(paginationOptions.first._page));
	};
	const goToPreviousPage = () => {
		getSiteList(Number(paginationOptions.prev?._page));
		setCurrentPage(Number(paginationOptions.prev?._page));
	};
	const goToNextPage = () => {
		getSiteList(Number(paginationOptions.next?._page));
		setCurrentPage(Number(paginationOptions.next?._page));
	};
	const goToLastPage = () => {
		getSiteList(Number(paginationOptions.last._page));
		setCurrentPage(Number(paginationOptions.last._page));
	};

	return (
		<div className={styles.container}>
			<button
				onClick={goToFirstPage}
				disabled={
					Number(paginationOptions?.first?._page) === currentPage
				}
			>
				First
			</button>
			<button
				onClick={goToPreviousPage}
				disabled={
					Number(paginationOptions?.first?._page) === currentPage
				}
			>
				Prev
			</button>
			<button
				onClick={goToNextPage}
				disabled={
					Number(paginationOptions?.last?._page) === currentPage
				}
			>
				Next
			</button>
			<button
				onClick={goToLastPage}
				disabled={
					Number(paginationOptions?.last?._page) === currentPage
				}
			>
				Last
			</button>
		</div>
	);
}

export default ClientListPagination;
