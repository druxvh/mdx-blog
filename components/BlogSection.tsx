import { prisma } from "@/lib/prisma";
import { BlogType } from "@/app/blog/page";
import Link from "next/link";
import Image from "next/image";

const BlogSection = async () => {
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
    <section className="min-h-screen py-10">
      <div className="font-sans p-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-8 gap-12 items-center max-w-6xl max-lg:max-w-2xl max-sm:max-w-sm mx-auto">
          <div className="flex flex-col">
            <h2 className="text-4xl font-bold text-black dark:text-white uppercase mb-6">
              Blogs
            </h2>
            <h2 className="text-3xl max-md:text-2xl font-extrabold text-gray-700 dark:text-slate-400 uppercase leading-8">
              Discover Our Latest Blog Posts
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:col-span-2">
            {blogs.map((blog: BlogType) => (
              <div key={blog.id} className="rounded overflow-hidden group">
                <Link href={`/blogpost/${blog.slug}`}>
                  <Image
                    src={blog.imageURL}
                    alt={blog.title}
                    width={1100}
                    height={650}
                    className="w-full h-52 object-cover rounded-md"
                  />
                  <div className="py-4">
                    <span className="text-xs block font-mono font-semibold text-gray-700 dark:text-slate-500 my-2">
                      @drx
                    </span>
                    <h3 className="text-xl font-bold text-gray-800 dark:text-slate-300 hover:text-gray-600 dark:hover:text-slate-500 transition-all">
                      {blog.title}
                    </h3>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
