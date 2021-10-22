import { authenicatedAxiosInstance } from "./axios-authenicated";

const ENDPOINT = '/me';

export const getMyProfile = async () => {
	return authenicatedAxiosInstance.get(`${ENDPOINT}`).then((res) => {
        return res.data;
    });
};