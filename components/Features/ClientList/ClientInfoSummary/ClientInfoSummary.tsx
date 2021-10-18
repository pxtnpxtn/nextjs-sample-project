import React from 'react';
import Image from 'next/image';
import styles from './ClientInfoSummary.module.scss';

function ClientInfoSummary() {
	return (
		<div className={styles.container}>
			<div className={styles.avatar}>
				<Image src="/doge.jpeg" layout="fill" objectFit="cover" />
			</div>
			<div className={styles.info}>
				<h3>Site Name</h3>
				<p>Site Address</p>
				<p>Main Contact</p>
			</div>
		</div>
	);
}

export default ClientInfoSummary;
