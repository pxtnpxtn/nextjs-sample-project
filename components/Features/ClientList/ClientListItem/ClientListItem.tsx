import React from 'react';
import Link from 'next/link';
import ClientInfoSummary from '../ClientInfoSummary/ClientInfoSummary';
import styles from './ClientListItem.module.scss';

function ClientListItem() {
	return (
		<Link href={`/client/${444}`}>
			<a className={styles.container}>
				<ClientInfoSummary />
				<div style={{ color: 'red', fontSize: 40 }}>+</div>
			</a>
		</Link>
	);
}

export default ClientListItem;
