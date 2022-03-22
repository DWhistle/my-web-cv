import React from "react";
import { Link } from "react-router-dom";

import Main from "../layouts/Main";
import ContactIcons from "../components/Contact/ContactIcons";
import { FormattedMessage } from "react-intl";

const Contact = () => {
  return (
    <Main title="Contact">
      <article className="post" id="contact">
        <header>
          <div className="title">
            <h2 data-testid="heading">
              <Link to="/contact">
                <FormattedMessage id="Contact" />
              </Link>
            </h2>
          </div>
        </header>
        <div className="email-at">
          <p>
            <FormattedMessage id="ContactMessage" />{" "}
            <a href="mailto:andrw.shibaev@gmail.com">andrw.shibaev@gmail.com</a>
          </p>
        </div>
        <ContactIcons />
      </article>
    </Main>
  );
};

export default Contact;
