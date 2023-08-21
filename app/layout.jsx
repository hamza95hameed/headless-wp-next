import '../public/css/bootstrap.min.css'
import '../public/css/animate.min.css'
import '../public/css/magnific-popup.css'
import '../public/css/fontawesome-all.min.css'
import '../public/css/imageRevealHover.css'
import '../public/css/swiper-bundle.css'
import '../public/css/flaticon.css'
import '../public/css/slick.css'
import '../public/css/spacing.css'
import '../public/css/main.css'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'

export const metadata = {
	title: process.env.NEXT_PUBLIC_SITE_NAME,
	description: 'Welcome to News Parho, the number one source for all trending and latest news related to Tech, Business, Travel, and Life.',
	openGraph: {
		title: process.env.NEXT_PUBLIC_SITE_NAME,
		description: 'Welcome to News Parho, the number one source for all trending and latest news related to Tech, Business, Travel, and Life.',
		url: process.env.NODE_ENV == "production" ? process.env.NEXT_PUBLIC_APP_URL : 'http://localhost:3000/',
		siteName: process.env.NEXT_PUBLIC_SITE_NAME,
		images: [
			{
				url: '/img/logo/logo.png',
				width: 800,
				height: 600,
			},
			{
				url: '/img/logo/logo.png',
				width: 1800,
				height: 1600,
				alt: 'My custom alt',
			},
		],
		locale: 'en_US',
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		title: process.env.NEXT_PUBLIC_SITE_NAME,
		description: 'Welcome to News Parho, the number one source for all trending and latest news related to Tech, Business, Travel, and Life.',
		images: ['/img/logo/logo.png'],
	},
}

export default async function RootLayout({ children }) {
	return (
		<html lang="en" tg-theme="light">
			<body>
				<Header></Header>
				{children}
				<Footer></Footer>
			</body>
		</html>
	)
}
