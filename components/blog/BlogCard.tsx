import { BlogPost } from "@/app/blog/blogConfig";
import Image from "next/image";
import Link from "next/link";

export default function BlogCard({ post }: { post: BlogPost }) {
  const inner = (
    <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm group-hover:shadow-md transition-shadow duration-200 h-full flex flex-col">
      {/* Top – purple illustration panel */}
      <div className="relative bg-[#381D7D] h-[280px] flex items-center justify-center overflow-hidden shrink-0">
        {/* Decorative circles */}
        <div className="absolute w-[220px] h-[220px] rounded-full border-[30px] border-white/5 -bottom-12 -right-12 pointer-events-none" />
        <div className="absolute w-[160px] h-[160px] rounded-full border-[20px] border-white/5 -top-8 -left-8 pointer-events-none" />

        {post.image ? (
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        ) : (
          /* Placeholder for coming-soon cards */
          <Image
            src="/images/blogPageImages/cooking-up.png"
            alt={post.title}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        )}
      </div>

      {/* Bottom – text content */}
      <div className="bg-white flex flex-col justify-between h-full p-6">
        <div>
          <h3 className="font-avant font-bold text-[#1A1A1A] text-[17px] leading-snug mb-3 group-hover:text-[#381D7D] transition-colors duration-200 flex-1">
            {post.title}
          </h3>
          <p className="font-gotham text-[#666] text-sm leading-relaxed mb-4">
            {post.description}
          </p>
        </div>

        <div>
          {post.comingSoon ? (
            <span className="font-gotham text-[#9F7CEF] text-sm font-medium tracking-widest uppercase">
              Coming Soon
            </span>
          ) : post.date ? (
            <p className="font-gotham text-[#999] text-sm">{post.date}</p>
          ) : null}
        </div>
      </div>
    </div>
  );

  if (post.href) {
    return (
      <Link href={post.href} className="group h-full flex flex-col">
        {inner}
      </Link>
    );
  }

  return <div className="group h-full flex flex-col">{inner}</div>;
}
