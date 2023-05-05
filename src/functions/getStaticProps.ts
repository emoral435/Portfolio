import { ApolloClient, InMemoryCache, createHttpLink, gql } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';


export default async function getStaticProps() {
    const httpLink = createHttpLink({
        uri: 'https://api.github.com/graphql',
      });
      
      const key = import.meta.env.VITE_GH_KEY
      const authLink = setContext((_, { headers }) => {
        return {
          headers: {
            ...headers,
            authorization: `Bearer ${key}`,
          }
        }
      });
      
      const client = new ApolloClient({
        link: authLink.concat(httpLink),
        cache: new InMemoryCache()
      });

      const {data} = await client.query({
        query: gql`
        {
          user(login: "emoral435") {
            bio
            pinnedItems(first: 6) {
              edges {
                node {
                  ... on Repository {
                    name
                    stargazerCount
                    url
                    languages(first: 5) {
                      nodes {
                        color
                        name
                      }
                    }
                    description
                    repositoryTopics(first: 15) {
                      nodes {
                        topic {
                          name
                          relatedTopics {
                            id
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }`
      })

      const { user } = data;
      const pinnedItems = await user.pinnedItems.edges.map(edge => edge.node);
      return {
          pinnedItems
      }
}