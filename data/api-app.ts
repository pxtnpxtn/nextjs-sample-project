import axios from 'axios';

const ENDPOINT = 'https://tracktik-challenge.staffr.com/version';

export const getAppVersion = async () => {
	return axios.get(`${ENDPOINT}`).then((res) => {
        return res.data;
    });
};