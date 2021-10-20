import Link from 'next/link';
import React from 'react';
import styles from '../styles/pages/custom404.module.scss';

function custom404() {
	return (
		<div className={styles.container}>
			<div className={styles.content}>
				<img src="/logo.svg" alt="SiteSec logo" height={40} />
				<h1>Oops, something went wrong!</h1>
				<Link href={`/`}>
					<a>Back To Dashboard</a>
				</Link>
			</div>
		</div>
	);
}

export default custom404;
