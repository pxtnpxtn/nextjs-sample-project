import axios from 'axios';

const BASE_URL = 'https://tracktik-challenge.staffr.com/version';

export const getAppVersion = async () => {
	return axios.get(`${BASE_URL}`).then((res) => {
        return res.data;
    });
};