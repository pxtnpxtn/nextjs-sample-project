import { useRouter } from 'next/dist/client/router';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import ClientInfoSummary from '../../components/Features/ClientList/ClientInfoSummary/ClientInfoSummary';
import TopNav from '../../components/UI/TopNav/TopNav';
import { getSiteById as getSiteByIdAPI } from '../../data/api-sites';
import { Site } from '../../models/SitesModel';
import styles from '../../styles/pages/ClientProfile.module.scss';

function index() {
	const [site, setSite] = useState<Site>();
	const router = useRouter();
	const { id } = router.query;

	const getSiteById = async (id: string) => {
		const res = await getSiteByIdAPI(id);

		setSite(res[0]);
	};

	useEffect(() => {
		if (router.query.id) {
			console.log({ id });
			getSiteById(id);
		}
	}, [router.query]);

	useEffect(() => {
		console.log({ site });
	}, [site]);

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
				{/* <ClientInfoSummary
					title={site.title}
					address={site.address}
					images={site.images}
					contacts={site.contacts}
				/> */}
			</div>

			<div className={styles.avatar}>
				{/* <Image src={site?.images[1]} layout="fill" objectFit="cover" /> */}
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
						<h3>
							{site?.contacts.main.firstName}{' '}
							{site?.contacts.main.lastName}
						</h3>
						<p>{site?.contacts.main.jobTitle}</p>
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
						<p>{site?.contacts.main.phoneNumber}</p>
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
						<p>{site?.contacts.main.email}</p>
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
						<p>
							{site?.contacts.main.address.street},{' '}
							{site?.contacts.main.address.city},{' '}
							{site?.contacts.main.address.state},{' '}
							{site?.contacts.main.address.zipCode},{' '}
							{site?.contacts.main.address.country}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default index;
