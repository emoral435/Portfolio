import { getArticleData } from "../../../lib/articles";

type tParams = Promise<{ slug: string }>;

const Article = async ({params}: {params: tParams}) => {
  const {slug} = await params;
  const articleData = await getArticleData(slug);

  return (
    <section className="center-col">
      <p>{articleData.date.toString()}</p>
      <div className="divider"></div>
      <article className="article" dangerouslySetInnerHTML={{__html: articleData.contentHtml}} />
      <div className="divider"></div>
    </section>
  )
}
export default Article