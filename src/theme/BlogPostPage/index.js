import React from "react";
import clsx from "clsx";
import {
  HtmlClassNameProvider,
  ThemeClassNames,
} from "@docusaurus/theme-common";
import {
  BlogPostProvider,
  useBlogPost,
} from "@docusaurus/theme-common/internal";
import BlogLayout from "@theme/BlogLayout";
import BlogPostItem from "@theme/BlogPostItem";
import BlogPostPaginator from "@theme/BlogPostPaginator";
import BlogPostPageMetadata from "@theme/BlogPostPage/Metadata";
import TOC from "@theme/TOC";
import Link from "@docusaurus/Link";
function BlogPostPageContent({ sidebar, children }) {
  const { metadata, toc } = useBlogPost();
  const { nextItem, prevItem, frontMatter } = metadata;
  const {
    hide_table_of_contents: hideTableOfContents,
    toc_min_heading_level: tocMinHeadingLevel,
    toc_max_heading_level: tocMaxHeadingLevel,
  } = frontMatter;
  return (
    <BlogLayout
      sidebar={sidebar}
      toc={
        !hideTableOfContents && toc.length > 0 ? (
          <TOC
            toc={toc}
            minHeadingLevel={tocMinHeadingLevel}
            maxHeadingLevel={tocMaxHeadingLevel}
          />
        ) : undefined
      }
    >
      <div className="blog-detail-page__back">
        <Link
          to="/"
          className="flex items-center gap-[8px] group hover:no-underline"
        >
          <span className="block w-[20px] h-[20px] group-hover:fill-[#FF931E]">
            <svg
              viewBox="0 -6.5 36 36"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g
                id="icons"
                stroke="none"
                strokeWidth="1"
                fill="inherit"
                fillRule="evenodd"
              >
                <g
                  transform="translate(-342.000000, -159.000000)"
                  fill="inherit"
                  fillRule="nonzero"
                >
                  <g
                    id="square-filled"
                    transform="translate(50.000000, 120.000000)"
                  >
                    <path
                      d="M317.108012,39.2902857 L327.649804,49.7417043 L327.708994,49.7959169 C327.889141,49.9745543 327.986143,50.2044182 328,50.4382227 L328,50.5617773 C327.986143,50.7955818 327.889141,51.0254457 327.708994,51.2040831 L327.6571,51.2479803 L317.108012,61.7097143 C316.717694,62.0967619 316.084865,62.0967619 315.694547,61.7097143 C315.30423,61.3226668 315.30423,60.6951387 315.694547,60.3080911 L324.702666,51.3738496 L292.99947,51.3746291 C292.447478,51.3746291 292,50.9308997 292,50.3835318 C292,49.8361639 292.447478,49.3924345 292.99947,49.3924345 L324.46779,49.3916551 L315.694547,40.6919089 C315.30423,40.3048613 315.30423,39.6773332 315.694547,39.2902857 C316.084865,38.9032381 316.717694,38.9032381 317.108012,39.2902857 Z M327.115357,50.382693 L316.401279,61.0089027 L327.002151,50.5002046 L327.002252,50.4963719 L326.943142,50.442585 L326.882737,50.382693 L327.115357,50.382693 Z"
                      id="left-arrow"
                      transform="translate(310.000000, 50.500000) scale(-1, 1) translate(-310.000000, -50.500000) "
                    />
                  </g>
                </g>
              </g>
            </svg>
          </span>
          Back to home
        </Link>
      </div>
      <BlogPostItem>{children}</BlogPostItem>
      {(nextItem || prevItem) && (
        <BlogPostPaginator nextItem={nextItem} prevItem={prevItem} />
      )}
    </BlogLayout>
  );
}
export default function BlogPostPage(props) {
  const BlogPostContent = props.content;
  return (
    <BlogPostProvider content={props.content} isBlogPostPage>
      <HtmlClassNameProvider
        className={clsx(
          ThemeClassNames.wrapper.blogPages,
          ThemeClassNames.page.blogPostPage
        )}
      >
        <div className="blog-detail-page__wrapper">
          <BlogPostPageMetadata />
          <BlogPostPageContent sidebar={props.sidebar}>
            <BlogPostContent />
          </BlogPostPageContent>
        </div>
      </HtmlClassNameProvider>
    </BlogPostProvider>
  );
}