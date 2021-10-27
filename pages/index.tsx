import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import parse from 'parse-link-header';
import SiteListItem from '../components/Features/SiteList/SiteListItem/SiteListItem';
import SiteListPagination from '../components/Features/SiteList/SiteListPagination/SiteListPagination';
import TopNav from '../components/UI/TopNav/TopNav';
import { getSortedSiteList as getSortedSiteListAPI } from '../data/api-sites';
import styles from '../styles/pages/SiteList.module.scss';
import usePaginationStore, { IPaginationOptions } from '../store/pagination';
import { ISite } from '../models/SitesModel';
import Loader from '../components/UI/Loader/Loader';

export enum FilterTypes {
	NEWEST = 'newest',
	OLDEST = 'oldest'
}

const filterOptions = [
	{
		label: 'All sites (Newest)',
		filterType: FilterTypes.NEWEST
	},
	{
		label: 'All sites (Oldest)',
		filterType: FilterTypes.OLDEST
	}
];

function index() {
	const [list, setList] = useState<ISite[]>([]);
	const [isLoading, setIsLoading] = useState<boolean>(true);
	const {
		filter,
		setFilter,
		paginationOptions,
		setPaginationOptions,
		currentPage,
		setCurrentPage
	} = usePaginationStore();

	const getSiteList = async (filter: string, pageNumber: number) => {
		setIsLoading(true);
		try {
			const res = await getSortedSiteListAPI(filter, pageNumber);

			setPaginationOptions(parse(res.headers.link) as IPaginationOptions);
			setList(res.data as ISite[]);
		} catch (e) {
			console.log('Something went wrong', e);
		}
		setIsLoading(false);
	};

	useEffect(() => {
		switch (filter) {
			case FilterTypes.NEWEST:
				getSiteList(filter, currentPage);
				break;
			case FilterTypes.OLDEST:
				getSiteList(filter, currentPage);
				break;
			default:
				getSiteList(filter, currentPage);
				break;
		}
	}, [filter]);

	return (
		<div className={styles.container}>
			<Head>
				<title>SiteSec | Site Dashboard</title>
				<meta name="description" content="SiteSec's site dashboard" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<TopNav />
			<h3 className={styles.banner}>Sites</h3>
			<div className={styles.optionsBar}>
				<select
					className={styles.filter}
					onChange={(e) => {
						setFilter(e.target.value);
						setCurrentPage(1);
					}}
					defaultValue={filter}
				>
					{filterOptions.map((option) => (
						<option
							key={option.filterType}
							value={option.filterType}
						>
							{option.label}
						</option>
					))}
				</select>
				<img src="/icons/search.svg" alt="Search" height={25} />
			</div>
			{isLoading ? (
				<Loader />
			) : (
				<div className={styles.list}>
					{list.map(({ id, title, address, images, contacts }) => {
						return (
							<SiteListItem
								key={id}
								id={id}
								title={title}
								address={address}
								images={images}
								contacts={contacts}
							/>
						);
					})}
				</div>
			)}
			<SiteListPagination
				filter={filter}
				paginationOptions={paginationOptions}
				currentPage={currentPage}
				setCurrentPage={setCurrentPage}
				getSiteList={getSiteList}
				isLoading={isLoading}
			/>
		</div>
	);
}

export default index;
