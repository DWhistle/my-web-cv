import { React } from "react";
import { Link } from "react-router-dom";
import { AppStateContext } from "../components/Utils/LangWrapper";
import ReactMarkdown from "react-markdown";

import Main from "../layouts/Main";
import { useContext } from "react";

const Index = () => {
  const context = useContext(AppStateContext);
  const LinkRenderer = ({ ...children }) => <Link {...children} />;
  return (
    <Main description={"My site"}>
      <article className="post" id="index">
        {/* <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/">About this site</Link></h2>
          <p>
            A beautiful, responsive, statically-generated,
            react application written with modern Javascript.
          </p>
        </div>
      </header> */}
        {/* <p> Welcome to my website. Please feel free to read more <Link to="/about">about me</Link>,
        or you can check out my {' '}
        <Link to="/resume">resume</Link>, {' '}
        <Link to="/projects">projects</Link>, {' '}
        view <Link to="/stats">site statistics</Link>, {' '}
        or <Link to="/contact">contact</Link> me.
      </p> */}
        <ReactMarkdown
          source={context.getTextTemplate("SITE")}
          renderers={{
            Link: LinkRenderer,
          }}
          escapeHtml={false}
        />
      </article>
    </Main>
  );
};

export default Index;
