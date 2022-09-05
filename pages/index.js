import Head from "next/head";
import Link from "next/link";
import {
  ApolloClient,
  InMemoryCache,
  createHttpLink,
  gql,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

import Header from "../components/header";
import Footer from "../components/footer";
import SkillTemplate from "../components/skillTemplate";
import Projects from "../components/projects";

import Socials from "../utils/socials";
import Languages from "../utils/languages";
import Libraries from "../utils/libraries";
import Frameworks from "../utils/frameworks";
import Tools from "../utils/tools";

export default function Home({ pinnedItems }) {
  return (
    <div className="bg-zinc-900 min-h-screen">
      <Head>
        <title>Shane Le's Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Header */}
      <Header />
      {/* Hero Section */}
      <div className="mt-12 rounded-lg grid-cols-1 max-w-xs sm:max-w-md md:pt-8 md:max-w-2xl xl:max-w-6xl mx-auto">
        <div className="flex flex-col space-y-4  font-semibold text-center">
          {/* Hero Heading Text*/}
          <h1 className="text-3xl md:text-6xl text-rose-600">
            Hallo, I’m Shane!
          </h1>
          {/* Hero Social Media Buttons */}
          <div className="flex items-center justify-center space-x-6">
            {Socials?.map((social) => (
              <div
                key={social.id}
                className="text-rose-600 hover:text-rose-800"
              >
                <Link href={social.path} passHref>
                  <a className="text-3xl md:text-4xl" target="_blank">
                    {social.icon}
                  </a>
                </Link>
              </div>
            ))}
          </div>
          {/* Hero Paragraph Text */}
          <p className="text-lg md:text-xl text-white">
            {
              "I'm a Front-end Developer who loves to design and build beautiful user-friendly web applications."
            }
          </p>
        </div>
      </div>
      {/* Skills & Tools Section */}
      <h1 className="text-rose-600 text-center font-semibold text-2xl pt-6 sm:pt-12">
        Skills & Tools
      </h1>
      <div className="sm:grid grid-cols-3 gap-4 md:max-w-4xl lg:max-w-7xl pt-3 pb-12  mx-auto">
        <section className="container flex flex-col items-center">
          <h2 className="text-white text-center py-4 sm:py-8">
            Programing Languages
          </h2>
          <div className="grid grid-cols-4 gap-4 md:grid-cols-3">
            {Languages?.map((language) => (
              <SkillTemplate
                key={language.id}
                icon={language.icon}
                skillName={language.name}
              />
            ))}
          </div>
        </section>

        <section className="container flex flex-col items-center">
          <h2 className="text-white text-center py-4 sm:py-8">
            Libraries & Frameworks
          </h2>
          <div className="grid grid-cols-4 gap-4 md:grid-cols-3">
            {Libraries?.map((library) => (
              <SkillTemplate
                key={library.id}
                icon={library.icon}
                skillName={library.name}
              />
            ))}
            {Frameworks?.map((framework) => (
              <SkillTemplate
                key={framework.id}
                icon={framework.icon}
                skillName={framework.name}
              />
            ))}
          </div>
        </section>

        <section className="container flex flex-col items-center">
          <h2 className="text-white text-center py-4 sm:py-8">
            Tools & Services
          </h2>
          <div className="grid grid-cols-4 gap-4 md:grid-cols-3">
            {Tools?.map((tool) => (
              <SkillTemplate
                key={tool.id}
                icon={tool.icon}
                skillName={tool.name}
              />
            ))}
          </div>
        </section>
      </div>
      {/* Projects Section */}
      <h1 className="text-rose-600 text-center font-semibold text-2xl pt-6 sm:pt-12">
        Projects
      </h1>
      <Projects pinnedItems={pinnedItems} />
      {/* Footer */}
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
  const pinnedItems = user.pinnedItems.edges?.map((edge) => edge.node);

  return {
    props: {
      pinnedItems,
    },
  };
}
