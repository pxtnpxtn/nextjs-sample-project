import axios from 'axios';

const BASE_URL = 'https://tracktik-challenge.staffr.com/clients';

export const getAllClients = async () => {
	return axios.get(`${BASE_URL}`).then((res) => {
        return res.data;
    });
};
