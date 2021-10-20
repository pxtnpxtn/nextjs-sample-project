import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import parse from 'parse-link-header';
import ClientListItem from '../components/Features/ClientList/ClientListItem/ClientListItem';
import ClientListPagination from '../components/Features/ClientList/ClientListPagination/ClientListPagination';
import TopNav from '../components/UI/TopNav/TopNav';
import { getSiteList as getSiteListAPI } from '../data/api-sites';
import styles from '../styles/pages/ClientList.module.scss';
import usePaginationStore, { IPaginationOptions } from '../store/pagination';
import { ISite } from '../models/SitesModel';

enum filterTypes {
	ALL = 'all',
	NEWEST = 'newest',
	OLDEST = 'oldest'
}

function index() {
	const [filter, setFilter] = useState(filterTypes.ALL);
	const {
		list,
		setList,
		paginationOptions,
		setPaginationOptions,
		currentPage,
		setCurrentPage
	} = usePaginationStore();

	const getSiteList = async (pageNumber: number) => {
		try {
			const res = await getSiteListAPI(pageNumber);

			setPaginationOptions(parse(res.headers.link) as IPaginationOptions);
			setList(res.data as ISite[]);
		} catch (e) {
			console.log('Something went wrong', e);
		}
	};

	useEffect(() => {
		// API call for list of sites
		// if (list.length === 0) {
		// getSiteList(currentPage);
		// }
		getSiteList(currentPage);
		// API call for Profile.
	}, []);

	useEffect(() => {
		// TODO: Clean up.
		if (filter === filterTypes.ALL) {
			// API call for list of sites
		}
		if (filter === filterTypes.NEWEST) {
			// API call for newest added sites
		}
		if (filter === filterTypes.OLDEST) {
			// API call for oldest added sites
		}
	}, [filter]);

	return (
		<div className={styles.container}>
			<Head>
				<title>SiteSec | Client Dashboard</title>
				<meta name="description" content="SiteSec's client dashboard" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<TopNav />
			<h3 className={styles.banner}>Sites</h3>
			<div className={styles.optionsBar}>
				<div className={styles.filter}>
					<p>All sites</p>
					<img
						src="/icons/down-arrow.svg"
						alt="Down arrow"
						height={20}
					/>
				</div>
				<img src="/icons/search.svg" alt="Search" height={25} />
			</div>
			{/* TODO: Componentize? */}
			<div className={styles.list}>
				{list.map(({ id, title, address, images, contacts }) => {
					return (
						<ClientListItem
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
			<ClientListPagination
				paginationOptions={paginationOptions}
				currentPage={currentPage}
				setCurrentPage={setCurrentPage}
				getSiteList={getSiteList}
			/>
		</div>
	);
}

export default index;
