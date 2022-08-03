import Image from "next/image";
import Link from "next/link";
import {
  ApolloClient,
  InMemoryCache,
  createHttpLink,
  gql,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

import { SiGithub } from "react-icons/si";
import { IoRocketOutline } from "react-icons/io5";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function Projects({ pinnedItems }) {
  return (
    <div className="bg-gray-700 min-h-screen">
      <Header />
      <section className="flex justify-center">
        <div className="grid md:grid-cols-2 gap-8 m-4 p-3 pb-10">
          {pinnedItems?.map((item) => (
            <div
              key={item.id}
              className="flex flex-col justify-between max-w-xs md:max-w-md border-2 border-blue-200 text-blue-200 bg-gray-900 rounded-lg"
            >
              <h1 className="text-center text-xl font-semibold p-2 mb-3 rounded-t-lg bg-gray-800">
                {item.name}
              </h1>
              <p className="py-2 mx-5">{item.description}</p>
              {/* Tags */}
              <div className="mx-5 pb-2 flex flex-wrap justify-center">
                {item.repositoryTopics.edges.map((tag) => (
                  <span
                    className="cursor-pointer inline-block bg-gray-700 text-blue-100 rounded-full px-3 py-1 text-xs font-semibold m-1"
                    key={tag.node.id}
                  >
                    {tag.node.topic.name}
                  </span>
                ))}
              </div>
              {/* Links */}
              <div className="flex justify-between rounded-b-lg bg-gray-800 p-2 px-5">
                <Link href={item.url} passHref>
                  <a
                    className="flex items-center  bg-gray-400 text-gray-800 hover:text-blue-900 rounded-full px-3 py-1 text-xl font-semibold m-1"
                    target="_blank"
                  >
                    <SiGithub />
                    <span className="ml-2 hidden md:block">Source Code</span>
                  </a>
                </Link>
                {item.homepageUrl ? (
                  <Link href={item.homepageUrl} passHref>
                    <a
                      className="flex items-center  bg-gray-400 text-gray-800 hover:text-blue-900 rounded-full px-3 py-1 text-xl font-semibold m-1"
                      target="_blank"
                    >
                      <IoRocketOutline />
                      <span className="ml-2 hidden md:block"> Live Demo</span>
                    </a>
                  </Link>
                ) : (
                  <p className="bg-gray-400 text-gray-800 hover:text-blue-900 rounded-full px-3 py-1 text-sm font-bold m-1">
                    WIP
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  const httpLink = createHttpLink({
    uri: "https://api.github.com/graphql",
  });

  const authLink = setContext((_, { headers }) => {
    return {
      headers: {
        ...headers,
        authorization: `Bearer ${process.env.GITHUB_ACCESS_TOKEN}`,
      },
    };
  });

  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });

  const { data } = await client.query({
    query: gql`
      {
        user(login: "shanedle") {
          id
          pinnedItems(first: 6) {
            edges {
              node {
                ... on Repository {
                  id
                  name
                  forkCount
                  stargazerCount
                  openGraphImageUrl
                  assignableUsers(first: 5) {
                    edges {
                      node {
                        id
                        avatarUrl
                        name
                      }
                    }
                  }
                  description
                  url
                  repositoryTopics(first: 5) {
                    edges {
                      node {
                        id
                        topic {
                          name
                        }
                      }
                    }
                  }
                  watchers {
                    totalCount
                  }
                  homepageUrl
                  object(expression: "main") {
                    ... on Commit {
                      id
                      history {
                        totalCount
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    `,
  });

  const { user } = data;
  const pinnedItems = user.pinnedItems.edges.map((edge) => edge.node);

  return {
    props: {
      pinnedItems,
    },
  };
}
