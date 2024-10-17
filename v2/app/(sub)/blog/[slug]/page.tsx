// app/posts/[slug]/page.tsx
import { Mdx } from "@/components/mdx";
import { log } from "console";
import { allPosts } from "contentlayer/generated";
import { useMDXComponent } from "next-contentlayer/hooks";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post.path,
  }));
}
console.log(allPosts.map((post) => post.title))

export default async function Page({ params }: { params: { slug: string } }) {
  console.log({ params });
  // Find the post for the current page.
  const post = allPosts.find(
    (post) => post._raw.flattenedPath === `posts/${params.slug}`
  );

  // 404 if the post does not exist.
  if (!post) notFound();

  return (
    <>
      <header className="relative isolate overflow-hidden bg-gradient-to-tl from-black via-zinc-900 to-black">
        <div className="container mx-auto relative isolate overflow-hidden  py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center flex flex-col items-center">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <h1 className="text-2xl font-bold tracking-tight text-white sm:text-4xl font-display ">
                {post.title}
              </h1>
              <p className="mt-6 text-lg leading-8 text-zinc-300">
                {post.description}
              </p>
            </div>
          </div>
        </div>
      </header>
      <article className="px-4 py-12 mx-auto prose prose-zinc prose-quoteless prose-invert">
        <Mdx code={post.body.code} />
      </article>
    </>
  );
}
