export default async function handle(req, res) {
    const data       = await fetch('https://www.newsparho.com/wp-json/wp/v2/categories?_embed=true&per_page=100')
    const categories = await data.json()
    res.status(200).json(categories)
}