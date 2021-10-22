import axios from 'axios';

export const authenicatedAxiosInstance = axios.create({
	baseURL: process.env.NEXT_PUBLIC_BASE_URL
});
