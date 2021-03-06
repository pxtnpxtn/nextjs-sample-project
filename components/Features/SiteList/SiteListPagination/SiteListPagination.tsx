import React from 'react';
import { FilterTypes } from '../../../../pages';
import { IPaginationOptions } from '../../../../store/pagination';
import styles from './SiteListPagination.module.scss';

interface ISiteListPagination {
	filter: string;
	paginationOptions: IPaginationOptions;
	currentPage: number;
	setCurrentPage: (newCurrentNumber: number) => void;
	getSiteList: (filter: string, pageNumber: number) => void;
	isLoading: boolean;
}

function SiteListPagination({
	filter,
	paginationOptions,
	currentPage,
	setCurrentPage,
	getSiteList,
	isLoading
}: ISiteListPagination) {
	const goToFirstPage = async () => {
		getSiteList(filter, Number(paginationOptions.first?._page));
		setCurrentPage(Number(paginationOptions.first?._page));
	};
	const goToPreviousPage = () => {
		getSiteList(filter, Number(paginationOptions.prev?._page));
		setCurrentPage(Number(paginationOptions.prev?._page));
	};
	const goToNextPage = () => {
		getSiteList(filter, Number(paginationOptions.next?._page));
		setCurrentPage(Number(paginationOptions.next?._page));
	};
	const goToLastPage = () => {
		getSiteList(filter, Number(paginationOptions.last?._page));
		setCurrentPage(Number(paginationOptions.last?._page));
	};

	return (
		<div className={styles.container}>
			<button
				onClick={goToFirstPage}
				disabled={
					isLoading ||
					Number(paginationOptions?.first?._page) === currentPage
				}
			>
				First
			</button>
			<button
				onClick={goToPreviousPage}
				disabled={
					isLoading ||
					Number(paginationOptions?.first?._page) === currentPage
				}
			>
				Prev
			</button>
			<div className={styles.currentPage}>{currentPage}</div>
			<button
				onClick={goToNextPage}
				disabled={
					isLoading ||
					Number(paginationOptions?.last?._page) === currentPage
				}
			>
				Next
			</button>
			<button
				onClick={goToLastPage}
				disabled={
					isLoading ||
					Number(paginationOptions?.last?._page) === currentPage
				}
			>
				Last
			</button>
		</div>
	);
}

export default SiteListPagination;
