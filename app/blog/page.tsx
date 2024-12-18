/* eslint-disable @next/next/no-img-element */
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { buttonVariants } from "@/components/ui/button";
import blogData from "@/seed/sampleBlogs";
import Link from "next/link";

interface BlogType {
  slug: string;
  content: string;
  title: string;
  description: string;
  imageURL: string;
}

const BlogList = () => {
  return (
    <MaxWidthWrapper className=" mx-auto px-4">
      <h1 className="text-3xl font-bold mb-10 text-center">Our Blogs</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogData.map((blog: BlogType, index: number) => (
          <div key={index} className="shadow-lg rounded-lg overflow-hidden">
            <img
              className="w-full h-64 object-cover object-top"
              src={
                blog.imageURL
                  ? blog.imageURL
                  : "https://www.pexels.com/photo/abstract-geometric-stained-glass-windows-29666174/"
              }
              alt={blog.title}
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

export default BlogList;
