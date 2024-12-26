import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { prisma } from "@/lib/prisma";
import Image from "next/image";

export interface BlogType {
  id: number;
  title: string;
  slug: string;
  description: string;
  content: string;
  imageURL: string;
}

const BlogPage = async () => {
  // Fetch blog posts from the db
  const blogs = await prisma.blogPost.findMany({
    select: {
      id: true,
      title: true,
      slug: true,
      description: true,
      content: true,
      imageURL: true,
    },
  });
  return (
    <MaxWidthWrapper className="min-h-screen mx-auto p-4 my-10">
      <h1 className="text-3xl font-bold mb-10 text-center">Our Blogs</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Render Blog Posts */}
        {blogs.map((blog: BlogType) => (
          <div
            key={blog.id}
            className="shadow-lg dark:border dark:border-gray-300 dark:border-opacity-10 rounded-lg overflow-hidden"
          >
            <Image
              className="w-full h-64 object-cover object-top"
              src={blog.imageURL}
              alt={blog.title}
              width={1260}
              height={750}
              priority={true}
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
              <p className="mb-4">{blog.description}</p>
              <Link
                href={`/blogpost/${blog.slug}`}
                className={buttonVariants({ variant: "default" })}
              >
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </MaxWidthWrapper>
  );
};

export default BlogPage;
