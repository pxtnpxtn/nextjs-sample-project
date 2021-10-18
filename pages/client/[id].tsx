import { useRouter } from 'next/dist/client/router';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect } from 'react';
import ClientInfoSummary from '../../components/Features/ClientList/ClientInfoSummary/ClientInfoSummary';
import TopNav from '../../components/UI/TopNav/TopNav';
import styles from '../../styles/pages/ClientProfile.module.scss';

function index() {
	const router = useRouter();
	const { id } = router.query;

	useEffect(() => {
		if (router.query.id) {
			console.log({ id });
			// TODO: API call to get site info.
		}
	}, [router.query]);

	return (
		<div className={styles.container}>
			<Head>
				<title>SiteSec Client Page</title>
				<meta name="description" content="SiteSec client page" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<TopNav />
			<div className={styles.subMenu}>
				<Link href={`/`}>
					<a
						style={{
							height: 30,
							width: 30,
							backgroundColor: 'red',
							marginRight: 16
						}}
					/>
				</Link>
				<ClientInfoSummary />
			</div>

			{/* https://cloudfront-us-east-1.images.arcpublishing.com/coindesk/XA6KIXE6FBFM5EWSA25JI5YAU4.jpg */}
			{/* <Image
				// src={image[1]}
				src="../public/doge.jpeg"
				alt="Picture of the company"
				width={'100%'}
				height={100}
			/> */}
			{/* <img src="../../public/doge.jpeg" alt="Company photo"></img> */}
		</div>
	);
}

export default index;
