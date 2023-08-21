export const websiteSeo = (data, page) => {
    let title = data?.title;
    let description = data?.description
    let keywords = data?.keywords;
    let image = `${process.env.NEXT_PUBLIC_APP_URL}/img/logo/logo.png`;
    let url = process.env.NEXT_PUBLIC_APP_URL
    if (page == 'blog') {
        [title, description, keywords, url, image] = [data?.title, data?.description, data?.keywords, `${process.env.NEXT_PUBLIC_APP_URL}/blog/${data?.slug}`, data?.image];
    } else if (page == 'category') {
        [title, description, keywords, url, image] = [data?.title, data?.description, data?.keywords, `${process.env.NEXT_PUBLIC_APP_URL}/category/${data?.slug}`, data?.image];
    } else if (page == 'search') {
        [title, description, keywords, url, image] = [data?.title, data?.description, data?.keywords, `${process.env.NEXT_PUBLIC_APP_URL}/search/${data?.slug}`, data?.image];
    } 

    const seo = {
        title: title,
        description: description,
        keywords: keywords,
        image: image,
        openGraph: {
            title: title,
            description: description,
            url: url,
            siteName: process.env.NEXT_PUBLIC_SITE_NAME,
            images: [{ url: image }],
            locale: 'en_GB',
            type: 'website',
        },
        twitter: {
            card: 'summary',
            title: title,
            description: description,
            site: process.env.NEXT_PUBLIC_SITE_NAME,
            site_name: process.env.NEXT_PUBLIC_SITE_NAME,
            images: [image],
        },
        other: {
            title: title,
            targeting: keywords,
            tag: keywords,
        },
        alternates: {
            canonical: `${process.env.NEXT_PUBLIC_APP_URL}/${page}`,
        },
        robots: {
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
        viewport: {
            width: 'device-width',
            initialScale: 1,
            maximumScale: 1,
            userScalable: 0,
            viewportFit: 'cover',
        },
    };
    return seo;
}