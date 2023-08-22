"use client"
import React from 'react'
import {
    FacebookShareButton,
    TwitterShareButton,
    LinkedinShareButton,
    WhatsappShareButton,
    PinterestShareButton,
    PinterestIcon,
    WhatsappIcon,
    LinkedinIcon,
    FacebookIcon,
    TwitterIcon
} from 'next-share'

export const SocialShare = ({ post, type }) => {
    const URL = process.env.NODE_ENV == "production" ? process.env.NEXT_PUBLIC_APP_URL+post.slug : `http://localhost:3000/${post.slug}`

    if (type == 'vertical') {
        return (
            <div className="blog-details-social">
                <ul className="list-wrap">
                    <li>
                        <FacebookShareButton
                            url={URL}
                            quote={post.title}
                            hashtag={'#nextshare'}
                        >
                            <FacebookIcon size={50} round bgStyle={{ fill: '#fff' }} iconFillColor='black' />
                        </FacebookShareButton>
                    </li>
                    <li>
                        <TwitterShareButton
                            url={URL}
                            title={post.title}
                        >
                            <TwitterIcon size={50} round bgStyle={{ fill: '#fff' }} iconFillColor='black' />
                        </TwitterShareButton>
                    </li>
                    <li>
                        <LinkedinShareButton
                            url={URL}
                        >
                            <LinkedinIcon size={50} round bgStyle={{ fill: '#fff' }} iconFillColor='black' />
                        </LinkedinShareButton></li>
                    <li>
                        <WhatsappShareButton
                            url={URL}
                            title={post.title}
                            separator=":: "
                        >
                            <WhatsappIcon size={50} round bgStyle={{ fill: '#fff' }} iconFillColor='black' />
                        </WhatsappShareButton>
                    </li>
                    <li>
                        <PinterestShareButton
                            url={URL}
                            media={post.title}
                        >
                            <PinterestIcon size={50} round bgStyle={{ fill: '#fff' }} iconFillColor='black' />
                        </PinterestShareButton>
                    </li>
                </ul>
            </div>
        )
    }
    else if (type == 'horizontal') {
        return (
            <ul className="list-wrap mb-0">
                <li>
                    <FacebookShareButton
                        url={URL}
                        quote={post.title}
                        hashtag={'#nextshare'}
                    >
                        <FacebookIcon size={30} bgStyle={{ fill: 'transparent' }} iconFillColor='black' />
                    </FacebookShareButton>
                </li>
                <li>
                    <TwitterShareButton
                        url={URL}
                        title={post.title}
                    >
                        <TwitterIcon size={30} bgStyle={{ fill: 'transparent' }} iconFillColor='black' />
                    </TwitterShareButton>
                </li>
                <li>
                    <LinkedinShareButton
                        url={URL}
                    >
                        <LinkedinIcon size={30} bgStyle={{ fill: 'transparent' }} iconFillColor='black' />
                    </LinkedinShareButton></li>
                <li>
                    <WhatsappShareButton
                        url={URL}
                        title={post.title}
                        separator=":: "
                    >
                        <WhatsappIcon size={30} bgStyle={{ fill: 'transparent' }} iconFillColor='black' />
                    </WhatsappShareButton>
                </li>
                <li>
                    <PinterestShareButton
                        url={URL}
                        media={post.title}
                    >
                        <PinterestIcon size={30} bgStyle={{ fill: 'transparent' }} iconFillColor='black' />
                    </PinterestShareButton>
                </li>
            </ul>
        )
    }
}
