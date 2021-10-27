import create from 'zustand';

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
    filter: string;
    setFilter: (sort: string) => void;
    paginationOptions: IPaginationOptions;
    setPaginationOptions: (info: IPaginationOptions) => void;
    currentPage: number;
    setCurrentPage: (newCurrentPage: number) => void;
}

const usePaginationStore = create<IPagination>(set => ({
    filter: 'newest',
    setFilter: (filter) => set({filter}),
    paginationOptions: {},
    setPaginationOptions: (paginationOptions: IPaginationOptions) => set({paginationOptions}),
    currentPage: 1,
    setCurrentPage: (currentPage: number) => set({currentPage})
  }))

export default usePaginationStore;