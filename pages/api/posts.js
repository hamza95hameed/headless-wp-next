export default async function handle(req, res) {
    if(req.query.type == 'category'){
        const url        = `https://www.newsparho.com/wp-json/wp/v2/posts?categories=${req.query.slug}&_embed=true&orderBy=desc&per_page=${req.query.per_page}&page=${req.query.page}`;
        const data       = await fetch(url)
        const posts      = await data.json();
        const totalPages = parseInt(data.headers.get('X-WP-TotalPages'), 10);
        res.status(200).json({posts, totalPages})
    }
    else if(req.query.type == 'categories'){
        let url     = `https://www.newsparho.com/wp-json/wp/v2/posts?categories=${req.query.slug}&_embed=true&orderBy=desc`;
        const data  = await fetch(url)
        const posts = await data.json();
        res.status(200).json(posts)
    }
    else if(req.query.type == 'tags'){
        const data       = await fetch(`https://www.newsparho.com/wp-json/wp/v2/posts?tags=${req.query.slug}&_embed=true&orderBy=desc&per_page=${req.query.per_page}&page=${req.query.page}`)
        const posts      = await data.json()
        const totalPages = parseInt(data.headers.get('X-WP-TotalPages'), 10);
        res.status(200).json({posts, totalPages})
    }
    else if(req.query.type == 'authors'){
        const data       = await fetch(`https://www.newsparho.com/wp-json/wp/v2/posts?authors=${req.query.slug}&_embed=true&orderBy=desc&per_page=${req.query.per_page}&page=${req.query.page}`)
        const posts      = await data.json()
        const totalPages = parseInt(data.headers.get('X-WP-TotalPages'), 10);
        res.status(200).json({posts, totalPages})
    }
    else if(req.query.type == 'slug'){
        const data  = await fetch(`https://www.newsparho.com/wp-json/wp/v2/posts?slug=${req.query.slug}&_embed=true`)
        const posts = await data.json()
        res.status(200).json(posts)
    }
    else{
        const data  = await fetch('https://www.newsparho.com/wp-json/wp/v2/posts?_embed=true')
        const posts = await data.json()
        res.status(200).json(posts)
    }
}