import ArticleListItem from "../../components/ArticleListItem/ArticleListItem"
import { getCategorizedArticles } from "../../lib/articles"

const page = () => {
  const articles = getCategorizedArticles()

  return (
    <section className="center-col gap-xl">
      <h1 id="main-header text-xl">My Blog</h1>
      <section className="categories">
        {
        articles !== null && 
        Object.keys(articles).map(article => (
            <ArticleListItem 
              category={article}
              articles={articles[article]}
              key={article} />
            )
          )
        }
      </section>
    </section>
  )
}

export default page