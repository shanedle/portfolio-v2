export interface Project {
  id: string;
  name: string;
  description: string;
  url: string;
  homepageUrl?: string;
  repositoryTopics: {
    edges: Array<{
      node: {
        id: string;
        topic: {
          name: string;
        };
      };
    }>;
  };
}

export interface Skill {
  id: string;
  name: string;
  icon: JSX.Element;
}

export interface Social {
  id: number;
  name: string;
  path: string;
  icon: JSX.Element;
}
