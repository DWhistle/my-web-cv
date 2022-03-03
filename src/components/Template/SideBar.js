import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';
import { FormattedMessage } from 'react-intl';
import { AppStateContext } from '../Utils/LangWrapper';
import ReactMarkdown from 'react-markdown';


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
        <h2><FormattedMessage id="Me"/></h2>
        <p><a href="mailto:andrw.shibaev@gmail.com">andrw.shibaev@gmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2><FormattedMessage id="AboutRoute"></FormattedMessage></h2>
      {/* <p>Hi, I&apos;m Michael. I like building things.
        I am a <a href="https://icme.stanford.edu/">Stanford ICME</a> graduate, YC Alumni, and
        the co-founder and CTO of <a href="https://arthena.com">Arthena</a>. Before Arthena I was
        at <a href="https://matroid.com">Matroid</a>
        , <a href="https://planet.com">Planet</a>
        , <a href="https://planetaryresources.com">Planetary Resources</a>
        , <a href="https://facebook.com">Facebook</a>
        , and <a href="https://seds.org">SEDS</a>.
      </p> */}
      <ReactMarkdown
        source={context.getTextTemplate('SIDEBAR')}
        renderers={{
          Link: LinkRenderer,
        }}
        escapeHtml={false}
      />
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ?
           <Link to="/resume" className="button"><FormattedMessage id="ResumeRoute"/></Link> : 
           <Link to="/about" className="button"><FormattedMessage id="AboutRoute"/></Link>}
        </li>
      </ul>
    </section>

   
  </section>
);
  }

export default SideBar;
