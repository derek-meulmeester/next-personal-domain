import { FaUser } from "react-icons/fa";
import { SectionContent, SectionTitle } from "@/app/components";

export const Background = () => {
  return (
    <div>
      <SectionTitle title="Background" Icon={FaUser} />
      <SectionContent>
        <div className="space-y-2">
          <p>
            I&apos;m a Software Engineer at Stripe based in Ottawa, and hold a
            Bachelor&apos;s Degree of Applied Science in Electrical Engineering
            from the University of British Columbia.
          </p>
          <p>
            I spent the first five years of my career working in the Financial
            Services Industry for Morgan Stanley as a Technology Associate.
            During my time there I became familiar with full stack development
            as I was often responsible for designing and implementing all layers
            of the applications. I primarily worked with Java/Spring for
            building the web services, on top of a Sybase Database, and ExtJS
            frontends. The final project I worked on was the most interesting -
            it was an Order Status application which aggregated trade
            information across different asset classes in real time. This was my
            first opportunity to act as a lead developer and exposed me to a
            Scala backend using the Play/Akka framework. I was primarily
            responsible for the frontend which was built in AngularJS and
            leveraged web sockets for the realtime updates.
          </p>
          <p>
            I then joined Shopify as a Front End Developer where I helped
            extract the{" "}
            <a
              href="https://partners.shopify.com/organizations"
              target="_blank"
              rel="noopener"
            >
              Partner Dashboard
            </a>{" "}
            into it&apos;s own service. I got familiar with Ruby on Rails and
            played a significant role in providing direction for the frontend
            architecture as the company transitioned to React.
          </p>
          <p>
            I was fairly quickly promoted to Senior Front End Developer and
            built the{" "}
            <a
              href="https://experts.shopify.com"
              target="_blank"
              rel="noopener"
            >
              Experts Marketplace
            </a>
            . This project gave me an opportunity to get much more comfortable
            with React and Redux. I also started transitioning to more of a
            backend developer and was responsible for designing and modelling
            new product features. This meant that I spent a lot more time
            building out GraphQL services and became very familiar with
            Elasticsearch which was leveraged quite heavily for a number of
            aggregation and search features.
          </p>
          <p>
            I was eventually promoted to Staff Developer and took the interest I
            got from working in the backend on GraphQL services and drove an
            initiative to build out the public{" "}
            <a
              href="https://shopify.dev/api/partner"
              target="_blank"
              rel="noopener"
            >
              GraphQL Partner API
            </a>
            . It received a lot of{" "}
            <a href="https://twitter.com/awaselnuk/status/1336407581254971398">
              excitement and praise
            </a>{" "}
            from the partner community, and has new features actively being
            developed on it.
          </p>
          <p>
            Most recently, I&apos;ve decided to join Stripe to work on the{" "}
            <a href="https://stripe.com/docs/connect/express-accounts">
              Express
            </a>{" "}
            product as a Backend / API Engineer. I&apos;ve always been very
            impressed with Stripe as a company and product and I&apos;m really
            excited to join.
          </p>
        </div>
      </SectionContent>
    </div>
  );
};
