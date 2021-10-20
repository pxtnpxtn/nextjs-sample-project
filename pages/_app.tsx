import '../styles/styles.scss';
import type { AppProps } from 'next/app';
import { AuthProvider } from '../context/auth.context';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<AuthProvider>
			<Component {...pageProps} />
		</AuthProvider>
	);
}
export default MyApp;
