import create from 'zustand';
import { Site } from '../models/SitesModel';

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
    list: Site[];
    setList: (list: Site[]) => void;
    paginationOptions: IPaginationOptions;
    setPaginationOptions: (info: IPaginationOptions) => void;
    currentPage: number;
    setCurrentPage: (newCurrentPage: number) => void;
}

const usePaginationStore = create<IPagination>(set => ({
    list: [],
    setList: (list: Site[]) => set({list}),
    paginationOptions: {},
    setPaginationOptions: (paginationOptions: IPaginationOptions) => set({paginationOptions}),
    currentPage: 1,
    setCurrentPage: (currentPage: number) => set({currentPage})
  }))

export default usePaginationStore;