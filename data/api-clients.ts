

export const getAllClients = async () => {
	return axios.get(`/clients`).then((res) => {
        return res.data;
    });
};
