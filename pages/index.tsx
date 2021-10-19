import Head from 'next/head';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import ClientListItem from '../components/Features/ClientList/ClientListItem/ClientListItem';
import Footer from '../components/UI/Footer/Footer';
import TopNav from '../components/UI/TopNav/TopNav';
import { getAllSites as getAllSitesAPI } from '../data/api-sites';
import styles from '../styles/pages/ClientList.module.scss';

enum filterTypes {
	ALL = 'all',
	NEWEST = 'newest',
	OLDEST = 'oldest'
}

function index() {
	const [list, setList] = useState([]);
	const [filter, setFilter] = useState(filterTypes.ALL);

	const getAllSites = async () => {
		const res = await getAllSitesAPI();

		setList(res);
	};

	useEffect(() => {
		// API call for list of sites
		getAllSites();
		// API call for Profile.
	}, []);

	useEffect(() => {
		console.log({ list });
	}, [list]);

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
				<div>PAGINATION 1 2 3 4 5</div>
			</div>
			{/* <Footer /> */}
		</div>
	);
}

export default index;
