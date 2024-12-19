import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import rehypeDocument from "rehype-document";
import rehypeFormat from "rehype-format";
import rehypeStringify from "rehype-stringify";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";
import { unified } from "unified";
import fs from "fs";
import matter from "gray-matter";
import OnThisPage from "@/components/OnThisPage";

const BlogPost = async ({ params }: { params: { slug: string } }) => {
  const file = unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeDocument)
    .use(rehypeFormat)
    .use(rehypeStringify)
    .use(rehypeSlug)
    .use(rehypeAutolinkHeadings);

  const filePath = `content/${params.slug}.md`;
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  const htmlContent = (await file.process(content)).toString();

  return (
    <MaxWidthWrapper className="prose dark:prose-invert">
      <div className="flex gap-3">
        <article className="px-10">
          <h1>{data.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: htmlContent }}></div>
        </article>
        <OnThisPage className="not-prose" htmlContent={htmlContent} />
      </div>
    </MaxWidthWrapper>
  );
};

export default BlogPost;
