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
    order: string;
    setOrder: (sort: string) => void;
    paginationOptions: IPaginationOptions;
    setPaginationOptions: (info: IPaginationOptions) => void;
    currentPage: number;
    setCurrentPage: (newCurrentPage: number) => void;
}

const usePaginationStore = create<IPagination>(set => ({
    order: 'newest',
    setOrder: (order) => set({order}),
    paginationOptions: {},
    setPaginationOptions: (paginationOptions: IPaginationOptions) => set({paginationOptions}),
    currentPage: 1,
    setCurrentPage: (currentPage: number) => set({currentPage})
  }))

export default usePaginationStore;