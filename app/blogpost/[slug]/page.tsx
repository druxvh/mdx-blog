import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import OnThisPage from "@/components/OnThisPage";
import rehypeDocument from "rehype-document";
import rehypeFormat from "rehype-format";
import rehypeStringify from "rehype-stringify";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import matter from "gray-matter";
import { unified } from "unified";
import { prisma } from "@/lib/prisma";

export const generateStaticParams = async () => {
  // Fetching the slugs from the blogposts to generate dynamic routes during SSG
  const blogs = await prisma.blogPost.findMany({ select: { slug: true } });
  return blogs.map((blog) => ({ slug: blog.slug }));
};

const BlogPost = async (props: { params: { slug: string } }) => {
  const { slug } = await props.params;

  // Fetches blog containing the slug from the db
  const blog = await prisma.blogPost.findUnique({ where: { slug } });

  // If no blog
  if (!blog || !blog.content) return <div>No Blog</div>;

  // Extracts the front matter, content from markdown and trim whitespaces from the start
  const { data, content } = matter(blog.content.trimStart());

  // Parses markdown content from matter to HTML
  const file = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypeSlug)
    .use(rehypeAutolinkHeadings)
    .use(rehypeDocument)
    .use(rehypeFormat)
    .use(rehypeStringify)
    .process(content);

  const htmlContent = String(file);

  return (
    <MaxWidthWrapper className="py-8 prose dark:prose-invert">
      <div className="flex gap-3">
        <article className="px-8">
          <h1>{data.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: htmlContent }}></div>
        </article>
        <OnThisPage className="not-prose pr-2" htmlContent={htmlContent} />
      </div>
    </MaxWidthWrapper>
  );
};

export default BlogPost;
