

export const getAllSites = async () => {
	return axios.get(`/sites`).then((res) => {
        return res.data;
    });
};

export const getSiteById = async (id) => {
	return axios.get(`/sites?id=${id}`).then((res) => {
        return res.data;
    });
};

// TODO: Implement search functionality.
export const getSitesByClient = async (companyName /* Adonis */) => {
	return axios.get(`/sites?client.givenName=${companyName}`).then((res) => {
        return res.data;
    });
};

