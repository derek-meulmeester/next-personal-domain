type Skill = {
  title: string;
  tools: string[];
};

export const skills: Skill[] = [
  {
    title: "Backend",
    tools: [
      "Ruby on Rails",
      "NodeJS",
      "RSpec",
      "GraphQL",
      "REST",
      "MySQL",
      "PostgreSQL",
      "Elasticsearch",
      "Redis",
      "Kafka",
    ],
  },
  {
    title: "Frontend",
    tools: [
      "Typescript",
      "React",
      "Jest",
      "Cypress",
      "Redux",
      "NextJS",
      "AngularJS",
      "ExtJS",
      "jQuery",
      "Chrome Extension",
    ],
  },
  {
    title: "Build/Development Tools",
    tools: [
      "AWS",
      "Vercel",
      "Digital Ocean",
      "Heroku",
      "esbuild",
      "Webpack",
      "Jenkins",
      "CircleCI",
      "Git",
    ],
  },
  {
    title: "Observability Tools",
    tools: [
      "Splunk",
      "SignalFx",
      "Grafana",
      "DataDog",
      "New Relic",
      "Bugsnag",
      "Sentry",
    ],
  },
];
