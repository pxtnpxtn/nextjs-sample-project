

export const getMyProfile = async () => {
	return axios.get(`/me`).then((res) => {
        return res.data;
    });
};