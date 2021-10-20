import {
	createContext,
	SetStateAction,
	useContext,
	useEffect,
	useState
} from 'react';
import { getMyProfile as getMyProfileAPI } from '../data/api-profile';
import { IProfile } from '../models/ProfileModel';

const AuthContext = createContext<{
	profile: IProfile;
}>({
	profile: {
		id: '',
		email: '',
		username: '',
		givenName: '',
		locale: '',
		avatar: ''
	}
});

export const AuthProvider = ({ children }: any) => {
	const [profile, setProfile] = useState({} as IProfile);

	const getMyProfile = async () => {
		const res = await getMyProfileAPI();
		setProfile(res as SetStateAction<IProfile>);
	};

	useEffect(() => {
		getMyProfile();
	}, []);

	return (
		<AuthContext.Provider
			value={{
				profile
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};

export const useAuth = () => useContext(AuthContext);
