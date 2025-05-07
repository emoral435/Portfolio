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
            <div className="center-around w-max" key={id}>
              <ChevronRightIcon width={20} />
              <Link href={`/blog/${article.id}`} className="center-around">
                <div>{article.title}</div>
                <EllipsisVerticalIcon className="hide-on-mobile" width={20} />
                <div className="hide-on-mobile">{article.date}</div>
              </Link>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default ArticleListItem