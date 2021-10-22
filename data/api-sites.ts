import { AxiosResponse } from 'axios';
import { ISite } from '../models/SitesModel';
import { FilterTypes } from '../pages';
import { authenicatedAxiosInstance } from './axios-authenicated';

const ENDPOINT = '/sites';

export const getSortedSiteList = async (order: string, pageNumber: number): Promise<AxiosResponse<ISite[]>> => {
	return authenicatedAxiosInstance.get(`${ENDPOINT}?_sort=createdAt&_order=${order === FilterTypes.NEWEST ? 'asc' : 'desc'}&_page=${pageNumber}`);
};

export const getSiteListByUrl = async (url: string): Promise<AxiosResponse<ISite[]>> => {
	return authenicatedAxiosInstance.get(`${url}`);
};

export const getSiteListByPage = async (page: number): Promise<AxiosResponse<ISite[]>> => {
	return authenicatedAxiosInstance.get(`${ENDPOINT}?_page=${page}`);
};

export const getSiteById = async (id: string): Promise<ISite>  => {
	return authenicatedAxiosInstance.get(`${ENDPOINT}?id=${id}`).then(({data}) => {
        return (data as [ISite])[0];
    });
};

// TODO: Implement search functionality.
export const getSitesByClient = async (companyName: string /* Adonis */) => {
    return authenicatedAxiosInstance.get(`${ENDPOINT}?client.givenName=${companyName}`).then((res) => {
        // Alternatively, /clients?q=...
        return res.data;
    });
};

