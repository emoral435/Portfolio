import Link from "next/link";
import type { ArticleItem } from "../../app/types";
import { ChevronRightIcon, EllipsisVerticalIcon } from "@heroicons/react/24/solid";

interface Props {
  category: string
  articles: ArticleItem[]
}

const ArticleListItem = ({category, articles}: Props) => {
  return (
    <div className="center-col">
      <h2>{category}</h2>
      <div className="divider"></div>
      <div className="center-col-start">
        {
          articles.map((article, id) => (
            <div className="article-item" key={id}>
              <ChevronRightIcon className="chevron-icon" width={20} />
              <Link href={`/blog/${article.id}`} className="article-link">
                <span className="article-title">{article.title}</span>
                <EllipsisVerticalIcon className="ellipsis-icon" width={20} />
                <span className="article-date">{article.date}</span>
              </Link>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default ArticleListItem