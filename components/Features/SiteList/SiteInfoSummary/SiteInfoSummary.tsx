import React from 'react';
import Image from 'next/image';
import styles from './SiteInfoSummary.module.scss';
import { ISite } from '../../../../models/SitesModel';

function SiteInfoSummary({ title, address, images, contacts }: Partial<ISite>) {
	return (
		<div className={styles.container}>
			<div className={styles.avatar}>
				{images && (
					<Image src={images[0]} layout="fill" objectFit="cover" />
				)}
			</div>
			<div className={styles.info}>
				<h3>{title}</h3>
				<p>
					{address?.city}, {address?.country}
				</p>
				<p>
					{contacts?.main.firstName} {contacts?.main.lastName}
				</p>
			</div>
		</div>
	);
}

export default SiteInfoSummary;
