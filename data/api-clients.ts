import { authenicatedAxiosInstance } from './axios-authenicated';

const ENDPOINT = '/clients';

export const getAllClients = async (page: number) => {
	return authenicatedAxiosInstance.get(`${ENDPOINT}?_page=${page}`).then((res) => {
        return res.data;
    });
};
