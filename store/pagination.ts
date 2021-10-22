import create from 'zustand';
import { IFilterOption } from '../models/SitesModel';
import { FilterTypes } from '../pages';

export interface IPaginationOptions {
    first?: IPaginationInfo;
    prev?: IPaginationInfo;
    next?: IPaginationInfo;
    last?: IPaginationInfo;
}

export interface IPaginationInfo {
    _page: string;
    rel: string;
    url: string;
}
  
export interface IPagination {
    selectedFilter: IFilterOption;
	setSelectedFilter: (info: IFilterOption) => void;
    order: string;
    setOrder: (sort: string) => void;
    paginationOptions: IPaginationOptions;
    setPaginationOptions: (info: IPaginationOptions) => void;
    currentPage: number;
    setCurrentPage: (newCurrentPage: number) => void;
}

const usePaginationStore = create<IPagination>(set => ({
    selectedFilter: {
		label: 'All sites (Newest)',
		filterType: 'newest',
	},
    setSelectedFilter: (selectedFilter) => set({selectedFilter}),
    order: 'newest',
    setOrder: (order) => set({order}),
    paginationOptions: {},
    setPaginationOptions: (paginationOptions: IPaginationOptions) => set({paginationOptions}),
    currentPage: 1,
    setCurrentPage: (currentPage: number) => set({currentPage})
  }))

export default usePaginationStore;