export type GithubRepository = {
  name: string;
  description: string;
  url: string;
  homepageUrl: string | null;
  repositoryTopics: {
    nodes: {
      topic: {
        name: string;
      };
    }[];
  };
};
