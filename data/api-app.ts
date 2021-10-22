import { authenicatedAxiosInstance } from './axios-authenicated';

const ENDPOINT = '/version';

export const getAppVersion = async () => {
	return authenicatedAxiosInstance.get(`${ENDPOINT}`).then((res) => {
        return res.data;
    });
};