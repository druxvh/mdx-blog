import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import rehypeDocument from "rehype-document";
import rehypeFormat from "rehype-format";
import rehypeStringify from "rehype-stringify";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
// import { read } from "to-vfile";
import { unified } from "unified";
// import { reporter } from "vfile-reporter";
import fs from "fs";
import matter from "gray-matter";

const BlogPost = async ({ params }: { params: { slug: string } }) => {
  const file = unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeDocument)
    .use(rehypeFormat)
    .use(rehypeStringify);

  const filePath = `content/${params.slug}.md`;
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  const htmlContent = (await file.process(content)).toString();

  return (
    <MaxWidthWrapper className="prose dark:prose-invert">
      <h1>{data.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: htmlContent }}></div>
      <div>post : {params.slug}</div>
    </MaxWidthWrapper>
  );
};

export default BlogPost;
