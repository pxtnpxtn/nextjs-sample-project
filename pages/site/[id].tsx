import { useRouter } from 'next/dist/client/router';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import SiteInfoSummary from '../../components/Features/SiteList/SiteInfoSummary/SiteInfoSummary';
import Loader from '../../components/UI/Loader/Loader';
import TopNav from '../../components/UI/TopNav/TopNav';
import { getSiteById as getSiteByIdAPI } from '../../data/api-sites';
import { ISite } from '../../models/SitesModel';
import styles from '../../styles/pages/SiteProfile.module.scss';

function index() {
	const [isLoading, setIsLoading] = useState(true);
	const [site, setSite] = useState<ISite>();
	const router = useRouter();
	const { id } = router.query;

	const getSiteById = async (id: string) => {
		setIsLoading(true);
		try {
			const res = await getSiteByIdAPI(id);
			setSite(res[0]);
		} catch (e) {
			console.log('Something went wrong', e);
		}
		setIsLoading(false);
	};

	useEffect(() => {
		if (id) {
			getSiteById(id as string);
		}
	}, [router.query]);

	return (
		<div className={styles.container}>
			<Head>
				<title>SiteSec | Site Page</title>
				<meta name="description" content="SiteSec site page" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<TopNav />
			{isLoading ? (
				<Loader />
			) : (
				<>
					<div className={styles.subMenu}>
						<Link href={`/`}>
							<img
								src="/icons/left-arrow.svg"
								alt="Go back"
								height={25}
								style={{ marginRight: 12, cursor: 'pointer' }}
							/>
						</Link>
						<SiteInfoSummary
							title={site?.title}
							address={site?.address}
							images={site?.images}
							contacts={site?.contacts}
						/>
					</div>

					<div className={styles.avatar}>
						{site?.images && (
							<Image
								src={site?.images[0]}
								layout="fill"
								objectFit="cover"
							/>
						)}
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
				</>
			)}
		</div>
	);
}

export default index;
