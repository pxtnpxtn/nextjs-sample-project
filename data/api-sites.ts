import axios from 'axios';

const ENDPOINT = 'https://tracktik-challenge.staffr.com/sites';

export const getSiteList = async (page = 1) => {
	return axios.get(`${ENDPOINT}?_page=${page}`).then((res) => {
        // Response returns list data and pagination options.
        return res;
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
        // Alternatively, /clients?q=...
        return res.data;
    });
};

