import 'bootstrap/dist/css/bootstrap.css'
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
import { websiteSeo } from '@/utils/seo'

const data = {
	title: process.env.NEXT_PUBLIC_SITE_NAME,
	description: 'Welcome to News Parho, the number one source for all trending and latest news related to Tech, Business, Travel, and Life.',
	keywords:''
}

export const metadata = websiteSeo(data);

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
