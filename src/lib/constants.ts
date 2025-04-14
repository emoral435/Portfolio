// information regarding our general greeting information
const introInfo = {
	floatingText: "Hey there",
    welcome: "My name is Eduardo, nice to meet you!",
    interest: "I love cats, origami, and coding!",
	location: "San Francisco, California",
    position: "Software Engineer @ Nextdoor",
    major: "Math + Computer Science",
    uni: "University of Illinois",
}

interface projectLanguages {
  color: string,
  name: string,
}

interface projectRepositoryTopics {
  topic: {
    name: string,
  },
}

interface projectNode {
  name: string,
  stargazerCount: number,
  url: string,
  description: string,
  languages: {
    nodes: projectLanguages[],
  },
  repositoryTopics: {
    nodes: projectRepositoryTopics[],
  },
}

export {
    introInfo,
}

export type {
    projectLanguages,
    projectRepositoryTopics,
    projectNode,
}