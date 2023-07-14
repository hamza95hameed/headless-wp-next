export default async function handle(req, res) {
    if(req.query.type == 'categories'){
        const data  = await fetch(`https://www.newsparho.com/wp-json/wp/v2/posts?categories=${req.query.slug}&_embed=true&orderBy=desc`)
        const posts = await data.json();
        res.status(200).json(posts)
    }
    else if(req.query.type == 'tags'){
        const data  = await fetch(`https://www.newsparho.com/wp-json/wp/v2/posts?tags=${req.query.slug}&_embed=true`)
        const posts = await data.json()
        res.status(200).json(posts)
    }
    else if(req.query.type == 'authors'){
        const data  = await fetch(`https://www.newsparho.com/wp-json/wp/v2/posts?authors=${req.query.slug}&_embed=true`)
        const posts = await data.json()
        res.status(200).json(posts)
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