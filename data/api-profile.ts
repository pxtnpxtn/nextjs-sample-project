import axios from 'axios';

const ENDPOINT = 'https://tracktik-challenge.staffr.com/me';

export const getMyProfile = async () => {
	return axios.get(`${ENDPOINT}`).then((res) => {
        return res.data;
    });
};