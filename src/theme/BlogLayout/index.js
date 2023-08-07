import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import BlogSidebar from "@theme/BlogSidebar";

export default function BlogLayout(props) {
  const { sidebar, toc, children, ...layoutProps } = props;
  const hasSidebar = sidebar && sidebar.items.length > 0;
  const hasTOC = !!toc;

  const getColClassnames = () => {
    if (hasTOC) {
      return hasSidebar ? "col--7" : "col--9";
    }
    // always shrink the content as if there was a sidebar even if there isn't
    return "col--9";
  };

  return (
    <Layout {...layoutProps}>
      <div className="container margin-vert--lg">
        <div className="row">
          <BlogSidebar sidebar={sidebar} />
          <main
            className={clsx("col", getColClassnames())}
            itemScope
            itemType="http://schema.org/Blog"
          >
            {children}
          </main>
          {toc && <div className="col col--3">{toc}</div>}
        </div>
      </div>
    </Layout>
  );
}
