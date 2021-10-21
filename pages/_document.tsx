import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
	render() {
		return (
			<Html lang="en">
				<Head>
					<meta
						name="application-name"
						content="NextJS Sample Project"
					/>
					<meta name="apple-mobile-web-app-capable" content="yes" />
					<meta
						name="apple-mobile-web-app-status-bar-style"
						content="default"
					/>
					<meta
						name="apple-mobile-web-app-title"
						content="NextJS Sample Project"
					/>
					<meta
						name="description"
						content="A demo project showcasing NextJS as a PWA app."
					/>
					<meta name="format-detection" content="telephone=no" />
					<meta name="mobile-web-app-capable" content="yes" />
					<meta
						name="msapplication-config"
						content="/icons/browserconfig.xml"
					/>
					<meta name="msapplication-TileColor" content="#2B5797" />
					<meta name="msapplication-tap-highlight" content="no" />
					<meta name="theme-color" content="#000000" />

					<link
						rel="apple-touch-icon"
						href="/pwa-icons/touch-icon-ipad.png"
					/>
					<link
						rel="apple-touch-icon"
						sizes="152x152"
						href="/pwa-icons/touch-icon-ipad.png"
					/>
					<link
						rel="apple-touch-icon"
						sizes="180x180"
						href="/pwa-icons/touch-icon-iphone-retina.png"
					/>
					<link
						rel="apple-touch-icon"
						sizes="167x167"
						href="/pwa-icons/touch-icon-ipad-retina.png"
					/>

					<link
						rel="icon"
						type="image/png"
						sizes="32x32"
						href="/pwa-icons/favicon-32x32.png"
					/>
					<link
						rel="icon"
						type="image/png"
						sizes="16x16"
						href="/pwa-icons/favicon-16x16.png"
					/>
					<link rel="manifest" href="/manifest.json" />
					<link
						rel="mask-icon"
						href="/pwa-icons/favicon-32x32.png"
						color="#5bbad5"
					/>
					<link rel="shortcut icon" href="/favicon.ico" />

					<meta name="twitter:card" content="summary" />
					<meta name="twitter:url" content="https://yourdomain.com" />
					<meta name="twitter:title" content="PWA App" />
					<meta
						name="twitter:description"
						content="Best PWA App in the world"
					/>
					<meta
						name="twitter:image"
						content="https://yourdomain.com/icons/android-chrome-192x192.png"
					/>
					<meta name="twitter:creator" content="@DavidWShadow" />
					<meta property="og:type" content="website" />
					<meta property="og:title" content="PWA App" />
					<meta
						property="og:description"
						content="Best PWA App in the world"
					/>
					<meta property="og:site_name" content="PWA App" />
					<meta property="og:url" content="https://yourdomain.com" />
					<meta
						property="og:image"
						content="https://yourdomain.com/icons/apple-touch-icon.png"
					/>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
