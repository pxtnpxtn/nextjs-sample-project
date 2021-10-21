import React from 'react';
import Link from 'next/link';
import SiteInfoSummary from '../SiteInfoSummary/SiteInfoSummary';
import styles from './SiteListItem.module.scss';
import { ISite } from '../../../../models/SitesModel';

function SiteListItem({
	id,
	title,
	address,
	images,
	contacts
}: Partial<ISite>) {
	return (
		<Link href={`/site/${id}`}>
			<a className={styles.container}>
				<SiteInfoSummary
					title={title}
					address={address}
					images={images}
					contacts={contacts}
				/>
				<img
					src="/icons/right-arrow.svg"
					alt="Right arrow"
					height={25}
				/>
			</a>
		</Link>
	);
}

export default SiteListItem;
