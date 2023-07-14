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
