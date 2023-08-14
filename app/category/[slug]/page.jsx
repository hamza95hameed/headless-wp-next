import Link from 'next/link'
import Breadcrumb from '@/components/Breadcrumb/Breadcrumb'
import { getThumbnail, getCategory, getAuthor, formatDate, getPostsByFilterType, getCategories } from '@/utils/common';
import Sidebar from '@/components/Sidebar/Sidebar';

export default async function Page({ params, searchParams }) {
    let currentPage = searchParams.page || 1;
    let categories  = await getCategories();
    let cat         = categories.find((category) => category.slug === params.slug)
    let data        = await getPostsByFilterType('categories', cat.id, currentPage, 10);
    let posts       = data['posts'];
    let totalPages  = data['totalPages'];

    const renderPagination = () => {
        const visiblePages = [];
        let startPage = Math.max(currentPage - 2, 1);
        let endPage   = Math.min(startPage + 4, totalPages);
      
        if (endPage - startPage < 4) {
          startPage = Math.max(endPage - 4, 1);
        }
      
        for (let i = startPage; i <= endPage; i++) {
          visiblePages.push(i);
        }
      
        const paginationElements = [];
      
        for (let i = 0; i < visiblePages.length; i++) {
          const page = visiblePages[i];
      
          if (i > 0 && page > visiblePages[i - 1] + 1) {
            paginationElements.push(<li key={`dots-${i}`}>&hellip;</li>);
          }
      
          paginationElements.push(
            <li key={page} className={currentPage == page ? 'active' : ''}
            >
              <Link href={`/category/${params.slug}?page=${page}`}>{page}</Link>
            </li>
          );
        }
      
        return paginationElements;
    };

    return (
        <>
            <Breadcrumb type={'category'} name={cat.name}></Breadcrumb>
            <section className="blog-details-area pt-80 pb-100">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-1">
                            <div className="blog-details-social">
                                <ul className="list-wrap">
                                    <li><Link href="#"><i className="fab fa-facebook-f"></i></Link></li>
                                    <li><Link href="#"><i className="fab fa-twitter"></i></Link></li>
                                    <li><Link href="#"><i className="fab fa-linkedin-in"></i></Link></li>
                                    <li><Link href="#"><i className="fab fa-behance"></i></Link></li>
                                    <li><Link href="#"><i className="fas fa-share"></i></Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-8 col-lg-7">
                            <div className="blog-post-wrapper">
                                {posts.map((post) => (
                                    <div className="latest__post-item" key={post.id}>
                                        <div className="latest__post-thumb tgImage__hover">
                                            <Link href={`/blog/${post.slug}`}><img src={getThumbnail(post)} width="100%" alt="img" /></Link>
                                        </div>
                                        <div className="latest__post-content">
                                            <ul className="tgbanner__content-meta list-wrap">
                                                <li className="category"><Link href={`/category/${getCategory(post).slug}`}>{getCategory(post).name}</Link></li>
                                                <li><span className="by">By</span> <Link href={`/author/${getAuthor(post).slug}`}>{getAuthor(post).name}</Link></li>
                                                <li>{formatDate(post.date)}</li>
                                            </ul>
                                            <h3 className="title tgcommon__hover">
                                                <Link href={`/blog/${post.slug}`} dangerouslySetInnerHTML={{ __html: post.title.rendered }}></Link>
                                            </h3>
                                            {/* <p dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}></p> */}
                                            <div className="latest__post-read-more">
                                                <Link href={`/blog/${post.slug}`}>Read More <i className="far fa-long-arrow-right"></i></Link>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                                <div className="pagination__wrap">
                                    <ul className="list-wrap justify-content-center">
                                        <li className={currentPage == 1 ? 'd-none' : ''}>
                                            <Link href={`/category/${params.slug}?page=1`}><i className="fas fa-angle-double-left"></i></Link>
                                        </li>
                                        {renderPagination()}
                                        <li className={currentPage == totalPages ? 'd-none' : ''}>
                                            <Link href={`/category/${params.slug}?page=${totalPages}`}><i className="fas fa-angle-double-right"></i></Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6">
                        <Sidebar post={posts[0]} categories={categories}></Sidebar>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}