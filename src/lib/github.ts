const NEXT_PUBLIC_GITHUB_TOKEN = process.env.NEXT_PUBLIC_GITHUB_TOKEN;
const NEXT_PUBLIC_GITHUB_USERNAME = process.env.NEXT_PUBLIC_GITHUB_USERNAME;

export async function getPinnedRepos() {
  try {
    if (!NEXT_PUBLIC_GITHUB_TOKEN) {
      throw new Error("GitHub token is not configured");
    }

    const response = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${NEXT_PUBLIC_GITHUB_TOKEN}`,
        "Content-Type": "application/json",
        "User-Agent": "Node",
      },
      body: JSON.stringify({
        query: `
          query UserPinnedRepos {
            user(login: "${NEXT_PUBLIC_GITHUB_USERNAME}") {
              pinnedItems(first: 6, types: REPOSITORY) {
                nodes {
                  ... on Repository {
                    name
                    description
                    url
                    homepageUrl
                    repositoryTopics(first: 10) {
                      nodes {
                        topic {
                          name
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        `,
      }),
    });

    const json = await response.json();

    if (json.errors) {
      throw new Error(json.errors[0].message);
    }

    if (!json.data?.user?.pinnedItems?.nodes) {
      throw new Error("Invalid response format");
    }

    return json.data.user.pinnedItems.nodes;
  } catch (error) {
    console.error("Error fetching GitHub repos:", error);
    return [];
  }
}
