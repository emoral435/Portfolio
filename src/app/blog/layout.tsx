import Link from "next/link";
import "./blogglobals.css"
import { ArrowLeftIcon, ArrowRightIcon, ArrowUpIcon } from "@heroicons/react/24/solid";

export default function BlogLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <section id="blog-top" className="blog mg-sm">
        <div className="divider"></div>
        <main>{children}</main>
        <footer className="center-col gap-s">
          <div>
            <div className="center-col">
              <Link href="/" className="center">
                <ArrowLeftIcon width={20}/>
                <p>Back To Home</p>
                <ArrowRightIcon width={20}/>
              </Link>
            </div>
          </div>
          <div className="center">
            <a href="#blog-top" className="center">
              <ArrowUpIcon width={20}/>
            </a>
            <div>© Copyright, 2025 ©</div>
            <a href="#blog-top" className="center">
              <ArrowUpIcon width={20}/>
            </a>
          </div>
        </footer>
        <div className="divider"></div>
      </section>
    )
  }