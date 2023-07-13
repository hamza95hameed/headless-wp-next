export function getThumbnail(post){
    if (post._embedded['wp:featuredmedia']!= null) {
        return post._embedded['wp:featuredmedia'][0].media_details.sizes.full.source_url
    }
}
export function getCategory(post){
    if (post._embedded['wp:term']) {
        return post._embedded['wp:term'][0][0].name
    }
}
export function getTags(post){
    if (post._embedded['wp:term']) {
        return post._embedded['wp:term'][1]
    }
}
export function getAuthor(post){
    if (post._embedded['author'][0].name) {
        return post._embedded['author'][0].name
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

export function slugify(str) {
    return String(str)
      .normalize('NFKD') // split accented characters into their base characters and diacritical marks
      .replace(/[\u0300-\u036f]/g, '') // remove all the accents, which happen to be all in the \u03xx UNICODE block.
      .trim() // trim leading or trailing whitespace
      .toLowerCase() // convert to lowercase
      .replace(/[^a-z0-9 -]/g, '') // remove non-alphanumeric characters
      .replace(/\s+/g, '-') // replace spaces with hyphens
      .replace(/-+/g, '-'); // remove consecutive hyphens
  }