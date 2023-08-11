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
  
export const SocialShare = ({post, type}) => {
    if(type == 'vertical'){
        return (
          <div className="blog-details-social">
              <ul className="list-wrap">
                  <li>
                      <FacebookShareButton
                          url={post.link}
                          quote={post.title.rendered}
                          hashtag={'#nextshare'}
                      >
                          <FacebookIcon size={50} round bgStyle={{ fill: '#fff' }} iconFillColor='black'/>
                      </FacebookShareButton>
                  </li>
                  <li>
                      <TwitterShareButton
                          url={post.link}
                          title={post.title.rendered}
                      >
                          <TwitterIcon size={50} round bgStyle={{ fill: '#fff' }} iconFillColor='black'/>
                      </TwitterShareButton>
                  </li>
                  <li>
                      <LinkedinShareButton
                          url={post.link}
                      >
                          <LinkedinIcon size={50} round bgStyle={{ fill: '#fff' }} iconFillColor='black'/>
                      </LinkedinShareButton></li>
                  <li>
                  <WhatsappShareButton
                      url={post.link}
                      title={post.title.rendered}
                      separator=":: "
                  >
                      <WhatsappIcon size={50} round bgStyle={{ fill: '#fff' }} iconFillColor='black'/>
                  </WhatsappShareButton>
                  </li>
                  <li>
                  <PinterestShareButton
                      url={post.link}
                      media={post.title.rendered}
                  >
                      <PinterestIcon size={50} round bgStyle={{ fill: '#fff' }} iconFillColor='black'/>
                  </PinterestShareButton>
                  </li>
              </ul>
          </div>
        )
    }
    else if(type == 'horizontal'){
        return (
            <ul className="list-wrap mb-0">
                <li>
                    <FacebookShareButton
                        url={post.link}
                        quote={post.title.rendered}
                        hashtag={'#nextshare'}
                    >
                        <FacebookIcon size={30} bgStyle={{ fill: 'transparent' }} iconFillColor='black'/>
                    </FacebookShareButton>
                </li>
                <li>
                    <TwitterShareButton
                        url={post.link}
                        title={post.title.rendered}
                    >
                        <TwitterIcon size={30} bgStyle={{ fill: 'transparent' }} iconFillColor='black'/>
                    </TwitterShareButton>
                </li>
                <li>
                    <LinkedinShareButton
                        url={post.link}
                    >
                        <LinkedinIcon size={30} bgStyle={{ fill: 'transparent' }} iconFillColor='black'/>
                    </LinkedinShareButton></li>
                <li>
                <WhatsappShareButton
                    url={post.link}
                    title={post.title.rendered}
                    separator=":: "
                >
                    <WhatsappIcon size={30} bgStyle={{ fill: 'transparent' }} iconFillColor='black'/>
                </WhatsappShareButton>
                </li>
                <li>
                <PinterestShareButton
                    url={post.link}
                    media={post.title.rendered}
                >
                    <PinterestIcon size={30} bgStyle={{ fill: 'transparent' }} iconFillColor='black'/>
                </PinterestShareButton>
                </li>
            </ul>
        )
    }
}
