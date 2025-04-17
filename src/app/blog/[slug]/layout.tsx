import Link from "next/link";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/solid";

export default function ArticleLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <section className="article-container">
        <main>{children}</main>
        <div className="center-col mg-sm">
          <Link href="/blog" className="center">
            <ArrowLeftIcon width={20}/>
            <p>Back To Blog</p>
            <ArrowRightIcon width={20}/>
          </Link>
        </div>
      </section>
    )
  }