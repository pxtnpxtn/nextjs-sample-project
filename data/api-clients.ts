import axios from 'axios';

const ENDPOINT = 'https://tracktik-challenge.staffr.com/clients';

export const getAllClients = async () => {
	return axios.get(`${ENDPOINT}`).then((res) => {
        return res.data;
    });
};
