import axios from 'axios';

const ENDPOINT = 'https://tracktik-challenge.staffr.com/sites';

export const getAllSites = async ()=> {
	return axios.get(`${ENDPOINT}`).then((res) => {
        return res.data;
    });
};

export const getSiteById = async (id: string) => {
	return axios.get(`${ENDPOINT}?id=${id}`).then((res) => {
        return res.data;
    });
};

// TODO: Implement search functionality.
export const getSitesByClient = async (companyName: string /* Adonis */) => {
	return axios.get(`${ENDPOINT}?client.givenName=${companyName}`).then((res) => {
        return res.data;
    });
};

