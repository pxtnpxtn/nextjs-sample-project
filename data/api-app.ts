

export const getAppVersion = async () => {
	return axios.get(`/version`).then((res) => {
        return res.data;
    });
};