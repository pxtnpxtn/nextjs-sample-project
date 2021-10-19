import axios from 'axios';

const BASE_URL = 'https://tracktik-challenge.staffr.com/me';

export const getMyProfile = async () => {
	return axios.get(`${BASE_URL}`).then((res) => {
        return res.data;
    });
};