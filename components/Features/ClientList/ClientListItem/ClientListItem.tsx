import React from 'react';
import Link from 'next/link';
import ClientInfoSummary from '../ClientInfoSummary/ClientInfoSummary';
import styles from './ClientListItem.module.scss';
import { Site } from '../../../../models/SitesModel';

function ClientListItem({
	id,
	title,
	address,
	images,
	contacts
}: Partial<Site>) {
	return (
		<Link href={`/site/${id}`}>
			<a className={styles.container}>
				<ClientInfoSummary
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

export default ClientListItem;
