type Company = {
  name: string;
  logo: string;
  url: string;
};

export type Position = {
  company: Company;
  position: string;
  location: string;
  startDate: Date;
  endDate?: Date;
  variant?: "hired" | "promoted";
  content: React.ReactNode;
};

const stripe: Company = {
  name: "Stripe",
  logo: "/images/stripe-logo.png",
  url: "https://www.stripe.com",
};

const shopify: Company = {
  name: "Shopify",
  logo: "/images/shopify-logo.png",
  url: "https://www.shopify.ca",
};

const morganStanley: Company = {
  name: "Morgan Stanley",
  logo: "/images/morgan-stanley-logo.jpeg",
  url: "https://www.morganstanley.com/",
};

export const workHistory: Position[] = [
  {
    company: stripe,
    position: "Software Engineer",
    location: "Remote",
    startDate: new Date("2022-03-14T16:00:00Z"),
    content: (
      <div>
        <p>
          Stripe Connect is the fastest and easiest way to integrate payments
          into your platform or marketplace. Stripe&apos;s APIs enable you to
          build and scale end-to-end payments experiences, from instant
          onboarding to global payouts, and create new revenue streams – all
          while Stripe handles payments KYC.
        </p>
        <ul className="list-disc list-outside pt-2 pl-12">
          <li>
            Built support for adding a{" "}
            <a href="https://stripe.com/blog/expanding-global-payouts-with-crypto">
              crypto wallet
            </a>{" "}
            during{" "}
            <a href="https://stripe.com/docs/connect/express-accounts">
              Express onboarding
            </a>{" "}
            enabling connected accounts to get paid out in USDC.
          </li>
          <li>
            Built the{" "}
            <a href="https://stripe.com/docs/connect/supported-embedded-components#account-onboarding">
              Embedded Account Onboarding
            </a>{" "}
            component enabling Stripe platforms to integrate Connect onboarding
            directly within their own surfaces.
          </li>
        </ul>
      </div>
    ),
  },
  {
    company: shopify,
    position: "Staff Developer",
    location: "Ottawa, ON",
    variant: "promoted",
    startDate: new Date(1583038800000),
    endDate: new Date(1646441334554),
    content: (
      <div>
        <p>
          Staff Developers use their expertise and passion to multiply the
          overall output of their development team. They&apos;re problem
          finders. Staff Developers help drive the product vision to its
          implementation. You and the team will design and build technically
          innovative solutions that empower all teams at Shopify to build
          powerful and resilient distributed cloud software. Merchants that
          depend on Shopify for a highly scalable, performant, and reliable
          platform benefit directly from the work you do. You will maintain a
          high bar for quality and think deeply about empowering other
          developers. You’ll also be hands-on in our code and will contribute
          technically.
        </p>
        <ul className="list-disc list-outside pt-2 pl-12">
          <li>
            Built the public{" "}
            <a
              href="https://shopify.dev/api/partner"
              target="_blank"
              rel="noopener"
            >
              GraphQL Partner API
            </a>{" "}
            enabling Shopify Partners to{" "}
            <a
              href="https://www.shopify.ca/partners/blog/partner-api"
              target="_blank"
              rel="noopener"
            >
              programmatically access the
            </a>{" "}
            data found in their Partner Dashboard.
          </li>
          <li>
            Leveraged{" "}
            <a
              href="https://shopify.engineering/solving-the-n-1-problem-for-graphql-through-batching"
              target="_blank"
              rel="noopener"
            >
              GraphQL batching
            </a>{" "}
            to mitigate issues we saw with high throughput leading to high
            average response times.
          </li>
          <li>
            Worked with several product teams to define a schema which
            accurately reflected the complex nature of the different domains
            surfaced through the API.
          </li>
        </ul>
      </div>
    ),
  },
  {
    company: shopify,
    position: "Senior Front End Developer",
    location: "Ottawa, ON",
    variant: "promoted",
    startDate: new Date(1510722000000),
    endDate: new Date(1583038800000),
    content: (
      <div className="space-y-2">
        <p>
          <a
            href="https://experts.shopify.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Experts Marketplace
          </a>{" "}
          aims to connect Merchants that need assistance with Experts that match
          their needs. Shopify is in the unique position of having both the
          Merchant and fantastic Partner ecosystem. This enables us to
          intelligently match Merchants who want to focus on their business with
          Partners that can assist with Technical expertise. This product
          refresh started as an experiment I was a part of and was ultimately
          involved with the complete development of a highly complex system
          connecting merchants with partners to help solve their problems.
        </p>
        <ul className="list-disc list-outside pt-2 pl-12">
          <li>
            Built a dynamic form for collecting scope of work as well as inputs
            into a matching algorithm using React and Redux.
          </li>
          <li>
            Modelled and implemented the Review system leveraging Elasticsearch
            for multi-dimensional aggregations.
          </li>
          <li>
            Modelled and implemented the conversational interface including a
            proxied email system leveraging SendGrid to support responding to
            emails directly.
          </li>
          <li>
            Built an invoicing tool enabling partners to charge merchants
            directly through Shopify which has supported millions of dollars
            being exchanged.
          </li>
        </ul>
      </div>
    ),
  },
  {
    company: shopify,
    position: "Front End Developer",
    location: "Ottawa, ON",
    startDate: new Date(1486389600000),
    endDate: new Date(1510722000000),
    content: (
      <div className="space-y-2">
        <p>
          Shopify has one of the largest front end architectures in the world,
          and our front end development team works on making our client-side
          scalable, approachable, and an exceptional experience for hundreds of
          thousands of shop owners across the world. In addition to building and
          maintaining our HTML, CSS, and JavaScript architecture, front end
          developers build both new product features and developer-facing tools.
          Their goal is to make the complex approachable for merchants, and to
          enable the rest of our R&D organization to build UI of the highest
          code quality and best user experience possible.
        </p>
        <ul className="list-disc list-outside pt-2 pl-12">
          <li>
            Extracted the Partner Dashboard into its own service while migrating
            to the new{" "}
            <a
              href="https://polaris.shopify.com"
              target="_blank"
              rel="noopener"
            >
              Shopify Polaris
            </a>{" "}
            design system.
          </li>
          <li>
            Played a significant role in providing direction for the frontend
            architecture as the company transitioned to React.
          </li>
          <li>Gained familiarity with Ruby on Rails.</li>
        </ul>
      </div>
    ),
  },
  {
    company: morganStanley,
    position: "Technology Associate",
    location: "Montreal, QC",
    startDate: new Date(1344085200000),
    endDate: new Date(1484949600000),
    content: (
      <div className="space-y-2">
        <p>
          Wealth Management Technology is the technology department responsible
          for the design, development, delivery and support of the technical
          solutions provided to Morgan Stanley&apos;s large community of
          Financial Advisors and their retail Capital Markets Trading Desks. My
          main responsibility has been to develop the new features &
          enhancements requested by the Business Unit, and I&apos;ve also
          re-designed the build infrastructure to improve the stability and
          reliability of the application.
        </p>
        <ul className="list-disc list-outside pt-2 pl-12">
          <li>
            Lead developer on the Order Status application. Written in AngularJS
            and used by ~25,000 FA&apos;s, this application provides real time
            updates on trades across all asset classes using WebSockets.
          </li>
          <li>
            Designed and developed a system to process 2 Million Monitor
            Reports. Reduced the existing processing time by a factor of 100
            using logical batching, MQ, and batch JDBC operations.
          </li>
          <li>
            Built a custom Sleeved Grid ExtJS component supporting animations
            for displaying Scheduled Reports.
          </li>
          <li>
            Designed and Implemented the Project&apos;s Continous Integration
            Environment using Jenkins which handled testing, building, and
            deploying the application.
          </li>
          <li>
            Introduced Unit Tests to the front end code base using Karma/Jasmine
            test Frameworks.
          </li>
          <li>
            Introduced End to End Tests to the front end code base using the
            Protractor Framework.
          </li>
        </ul>
      </div>
    ),
  },
];
