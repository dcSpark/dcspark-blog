import React from "react";
import clsx from "clsx";
import { useBlogPost } from "@docusaurus/theme-common/internal";
import EditThisPage from "@theme/EditThisPage";
import TagsListInline from "@theme/TagsListInline";
import ReadMoreLink from "@theme/BlogPostItem/Footer/ReadMoreLink";
import styles from "./styles.module.css";
export default function BlogPostItemFooter() {
  const { metadata, isBlogPostPage } = useBlogPost();
  const { tags, title, editUrl, hasTruncateMarker } = metadata;
  // A post is truncated if it's in the "list view" and it has a truncate marker
  const truncatedPost = !isBlogPostPage && hasTruncateMarker;
  const tagsExists = tags.length > 0;
  const renderFooter = tagsExists || truncatedPost || editUrl;
  if (!renderFooter) {
    return null;
  }
  return (
    <footer
      className={clsx(
        "flex flex-col md:flex-row md:justify-between mt-[24px] lg:mt-[40px]",
        isBlogPostPage && styles.blogPostFooterDetailsFull
      )}
    >
      {tagsExists && (
        <div>
          <TagsListInline tags={tags} />
        </div>
      )}

      {isBlogPostPage && editUrl && <EditThisPage editUrl={editUrl} />}

      {truncatedPost && (
        <div className="flex justify-end">
          <ReadMoreLink blogPostTitle={title} to={metadata.permalink} />
        </div>
      )}
    </footer>
  );
}
