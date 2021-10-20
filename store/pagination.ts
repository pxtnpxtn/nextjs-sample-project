import create from 'zustand';
import { ISite } from '../models/SitesModel';

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
    list: ISite[];
    setList: (list: ISite[]) => void;
    paginationOptions: IPaginationOptions;
    setPaginationOptions: (info: IPaginationOptions) => void;
    currentPage: number;
    setCurrentPage: (newCurrentPage: number) => void;
}

const usePaginationStore = create<IPagination>(set => ({
    list: [],
    setList: (list: ISite[]) => set({list}),
    paginationOptions: {},
    setPaginationOptions: (paginationOptions: IPaginationOptions) => set({paginationOptions}),
    currentPage: 1,
    setCurrentPage: (currentPage: number) => set({currentPage})
  }))

export default usePaginationStore;