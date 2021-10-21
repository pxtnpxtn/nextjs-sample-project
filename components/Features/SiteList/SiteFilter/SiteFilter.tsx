import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { IFilterOption } from '../../../../models/SitesModel';
import styles from './SiteFilter.module.scss';

export interface ISiteFilter {
	filterOptions: IFilterOption[];
	selectedFilter: IFilterOption;
	setSelectedFilter: Dispatch<SetStateAction<IFilterOption>>;
}

function SiteFilter({
	filterOptions,
	selectedFilter,
	setSelectedFilter
}: ISiteFilter) {
	return (
		<select
			className={styles.container}
			onChange={(e) =>
				setSelectedFilter({
					label: e.target.selectedOptions[0].label,
					endpoint: e.target.value
				})
			}
		>
			{filterOptions.map((option) => (
				<option key={option.endpoint} value={option.endpoint}>
					{option.label}
				</option>
			))}
		</select>
	);
}

export default SiteFilter;
