import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { FormattedMessage } from "react-intl";
import { AppStateContext } from "../Utils/LangWrapper";
import ReactMarkdown from "react-markdown";
import Courses from "components/Resume/Courses";
import courses from "lang/en/resume/courses";

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage
const LinkRenderer = ({ ...children }) => <Link {...children} />;

const SideBar = () => {
  const context = useContext(AppStateContext);
  return (
    <section id="sidebar">
      <section id="intro">
        <Link to="/" className="logo">
          <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
        </Link>
        <header>
          <h2>
            <FormattedMessage id="Me" />
          </h2>
          <p>
            <a href="mailto:andrw.shibaev@gmail.com">andrw.shibaev@gmail.com</a>
          </p>
          <p>
          <a style={{fontFamily: "Arial"}} href="tel:andrw.shibaev@gmail.com">+34672952475</a>
          </p>
        </header>
      </section>

      <section className="blurb">
        <h2>
          <FormattedMessage id="AboutRoute"></FormattedMessage>
        </h2>
        <ReactMarkdown
          source={context.getTextTemplate("SIDEBAR")}
          renderers={{
            Link: LinkRenderer,
          }}
          escapeHtml={false}
        />
        {window.location.pathname.includes("/resume") &&
          <section className="blurb">
            <hr/>
            <Courses data={courses}></Courses>
          </section>
        }
       
        <ul className="actions">
          <li>
            {window.location.pathname.includes("/about") && 
              <Link to="/resume" className="button">
                <FormattedMessage id="ResumeRoute" />
              </Link>
            }
          </li>
        </ul>
      </section>
    </section>
  );
};

export default SideBar;
