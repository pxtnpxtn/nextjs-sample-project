import React from 'react';
import Link from 'next/link';
import ClientInfoSummary from '../ClientInfoSummary/ClientInfoSummary';
import styles from './ClientListItem.module.scss';

function ClientListItem() {
	return (
		<Link href={`/client/${444}`}>
			<a className={styles.container}>
				<ClientInfoSummary />
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
