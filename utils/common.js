export function getThumbnail(post){
    if (post._embedded['wp:featuredmedia']!= null) {
        return post._embedded['wp:featuredmedia'][0].media_details.sizes.full.source_url
    }
}
export function getCategory(post){
    if (post._embedded['wp:term']) {
        return post._embedded['wp:term'][0][0]
    }
}
export function getTags(post){
    if (post._embedded['wp:term']) {
        return post._embedded['wp:term'][1]
    }
}
export function getAuthor(post){
    if (post._embedded['author'][0]) {
        return post._embedded['author'][0]
    }
}
export function getAuthorImage(post) {
    if (post._embedded['author'][0].avatar_urls) {
        return post._embedded['author'][0].avatar_urls[96]
    }
}

export function formatDate(dateString) {
    const months = [
        'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ];
    
    const date = new Date(dateString);
    const month = months[date.getMonth()];
    const day = date.getDate();
    const year = date.getFullYear();

    const formattedDate = `${month} ${day}, ${year}`;
    return formattedDate;
}

export function toggleBodyClass(bodyClass){
    var root = document.getElementsByTagName('body')[0];
    if(bodyClass == 'canvas'){
        if (root.getAttribute('class') == 'offCanvas__menu-visible') {
            root.setAttribute('class', '');
        } else {
            root.setAttribute('class', 'offCanvas__menu-visible');
        }
    }
    else if(bodyClass == 'mobile'){      
        if (root.getAttribute('class') == 'mobile-menu-visible') {
            root.setAttribute('class', '');
        } else {
            root.setAttribute('class', 'mobile-menu-visible');
        }
    }
};


export function toggleThemeMode(){
    var root = document.getElementsByTagName('html')[0];
    if (root.getAttribute('tg-theme') == 'light') {
        root.setAttribute('tg-theme', 'dark');
    } else {
        root.setAttribute('tg-theme', 'light');
    }
};

export async function getPostsByFilterType(type, slug, page=1, per_page=10){
    const url        = `${process.env.NEXT_PUBLIC_API_URL}/posts?${type}=${slug}&_embed=true&orderBy=desc&per_page=${per_page}&page=${page}`;
    const data       = await fetch(url)
    const posts      = await data.json();
    const totalPages = parseInt(data.headers.get('X-WP-TotalPages'), 10);
    return {posts, totalPages};
}

export async function getCategories(){
    const url        = `${process.env.NEXT_PUBLIC_API_URL}/categories?_embed=true&per_page=100`;
    const data       = await fetch(url)
    const categories = await data.json()
    return categories;
}

export async function getCategoryByHandle(handle){
    const url      = `${process.env.NEXT_PUBLIC_API_URL}/categories?slug=${handle}&_embed=true`;
    const data     = await fetch(url)
    const category = await data.json()
    return category[0];
}

export async function getPostByHandle(handle){
    const url  = `${process.env.NEXT_PUBLIC_API_URL}/posts?slug=${handle}&_embed=true`;
    const data = await fetch(url)
    const post = await data.json();
    return post[0];
}

export async function getPostByCategory(handle){
    let url     = `${process.env.NEXT_PUBLIC_API_URL}/posts?categories=${handle}&_embed=true&orderBy=desc`;
    const data  = await fetch(url, { cache:'no-store'})
    const posts = await data.json();
    return posts;
}