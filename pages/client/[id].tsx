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
				<title>SiteSec | Client Page</title>
				<meta name="description" content="SiteSec client page" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<TopNav />
			<div className={styles.subMenu}>
				<Link href={`/`}>
					<img
						src="/icons/left-arrow.svg"
						alt="Go back"
						height={25}
						style={{ marginRight: 12 }}
					/>
				</Link>
				<ClientInfoSummary />
			</div>

			<div className={styles.avatar}>
				<Image src="/doge.jpeg" layout="fill" objectFit="cover" />
			</div>

			<div className={styles.contactInfo}>
				<div className={styles.contactRow}>
					<img
						src="/icons/contact.svg"
						alt="Contact"
						height={25}
						style={{ marginRight: 12 }}
					/>
					<div>
						<h3>Rene Guy</h3>
						<p>Job Title</p>
					</div>
				</div>
				<div className={styles.contactRow}>
					<img
						src="/icons/phone.svg"
						alt="Phone"
						height={25}
						style={{ marginRight: 12 }}
					/>
					<div>
						<p>1-514-000-0000</p>
					</div>
				</div>
				<div className={styles.contactRow}>
					<img
						src="/icons/email.svg"
						alt="Email"
						height={25}
						style={{ marginRight: 12 }}
					/>
					<div>
						<p>email@email.com</p>
					</div>
				</div>
				<div className={styles.contactRow}>
					<img
						src="/icons/location.svg"
						alt="Location"
						height={25}
						style={{ marginRight: 12 }}
					/>
					<div>
						<p>Address info</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default index;
