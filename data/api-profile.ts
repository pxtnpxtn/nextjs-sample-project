import { IProfile } from "../models/ProfileModel";
import { authenicatedAxiosInstance } from "./axios-authenicated";

const ENDPOINT = '/me';

export const getMyProfile = async ():Promise<IProfile> => {
	return authenicatedAxiosInstance.get(`${ENDPOINT}`).then((res) => {
        return res.data as IProfile;
    });
};