import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import parse from 'parse-link-header';
import SiteListItem from '../components/Features/SiteList/SiteListItem/SiteListItem';
import SiteListPagination from '../components/Features/SiteList/SiteListPagination/SiteListPagination';
import TopNav from '../components/UI/TopNav/TopNav';
import { getSiteList as getSiteListAPI } from '../data/api-sites';
import styles from '../styles/pages/SiteList.module.scss';
import usePaginationStore, { IPaginationOptions } from '../store/pagination';
import { ISite } from '../models/SitesModel';
import Loader from '../components/UI/Loader/Loader';
import SiteFilter from '../components/Features/SiteList/SiteFilter/SiteFilter';

enum filterTypes {
	ALL = 'all',
	NEWEST = 'newest',
	OLDEST = 'oldest'
}

const filterOptions = [
	{
		label: 'All sites (Newest)',
		endpoint:
			'https://tracktik-challenge.staffr.com/sites?_sort=createdAt&_order=asc&_page=1'
	},
	{
		label: 'All sites (Oldest)',
		endpoint:
			'https://tracktik-challenge.staffr.com/sites?_sort=createdAt&_order=desc&_page=1'
	}
];

function index() {
	const [isLoading, setIsLoading] = useState(true);
	const [selectedFilter, setSelectedFilter] = useState(filterOptions[0]);
	const {
		list,
		setList,
		paginationOptions,
		setPaginationOptions,
		currentPage,
		setCurrentPage
	} = usePaginationStore();

	const getSiteList = async (pageNumber: number) => {
		setIsLoading(true);
		try {
			const res = await getSiteListAPI(pageNumber);

			setPaginationOptions(parse(res.headers.link) as IPaginationOptions);
			setList(res.data as ISite[]);
		} catch (e) {
			console.log('Something went wrong', e);
		}
		setIsLoading(false);
	};

	useEffect(() => {
		getSiteList(currentPage);
	}, []);

	useEffect(() => {
		console.log(selectedFilter.endpoint);
	}, [selectedFilter]);

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
				<SiteFilter
					filterOptions={filterOptions}
					selectedFilter={selectedFilter}
					setSelectedFilter={setSelectedFilter}
				/>
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
