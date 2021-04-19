import {React, useContext} from 'react';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import {FormattedMessage} from 'react-intl'
import Main from '../layouts/Main';
import {AppStateContext} from '../components/Utils/LangWrapper'


const LinkRenderer = ({ ...children }) => <Link {...children} />;
const About = () => {
  const context = useContext(AppStateContext);
  return (
  <Main
  >
    <article className="post markdown" id="about">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/about"><FormattedMessage id='AboutMessage'></FormattedMessage></Link></h2>
          <p>
          </p>
        </div>
      </header>
      <ReactMarkdown
        source={context.getTextTemplate('ABOUT')}
        renderers={{
          Link: LinkRenderer,
        }}
        escapeHtml={false}
      />
    </article>
  </Main>
)};

export default About;
