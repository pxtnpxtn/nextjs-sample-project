import axios from 'axios';

const BASE_URL = 'https://tracktik-challenge.staffr.com/sites';

export const getAllSites = async () => {
	return axios.get(`${BASE_URL}`).then((res) => {
        return res.data;
    });
};

export const getSiteById = async (id: string) => {
	return axios.get(`${BASE_URL}?id=${id}`).then((res) => {
        return res.data;
    });
};

// TODO: Implement search functionality.
export const getSitesByClient = async (companyName: string /* Adonis */) => {
	return axios.get(`${BASE_URL}?client.givenName=${companyName}`).then((res) => {
        return res.data;
    });
};

