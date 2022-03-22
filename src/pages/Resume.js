import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";

import ReactDOMServer from "react-dom/server";
import jsPDF from "jspdf";
import ReactDOM from "react-dom";
import html2canvas from "html2canvas";

import Main from "../layouts/Main";

import Education from "../components/Resume/Education";
import Experience from "../components/Resume/Experience";
import Skills from "../components/Resume/Skills";
import SkillsShortened from "../components/Resume/SkillsShortened";

import References from "../components/Resume/References";

import { skills, categories } from "../data/resume/skills";
import { FormattedMessage } from "react-intl";
import { AppStateContext } from "../components/Utils/LangWrapper";

const sections = [
  "ResumeEducation",
  "ResumeExperience",
  "ResumeSkills",
  "ResumeCourses",
  "ResumeReferences",
];

const Resume = () => {
  const context = useContext(AppStateContext);

  const DownloadPdf = (d) => {
    const input = document.getElementById("root");

    html2canvas(input).then((canvas) => {
      var imgData = canvas.toDataURL("image/png");

      var doc = new jsPDF("p", "mm");
      var imgWidth = doc.internal.pageSize.getWidth();
      var pageHeight = doc.internal.pageSize.getHeight();
      var position = 0;

      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      var heightLeft = imgHeight;
      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        doc.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
        if (heightLeft >= 0) doc.addPage();
      }
      doc.save("file.pdf");
    });
  };

  return (
    <Main title="Resume">
      <article className="post" id="resume">
        <header>
          <div className="title">
            <h2 data-testid="heading">
              <Link to="resume">
                <FormattedMessage id="ResumeRoute"></FormattedMessage>
              </Link>
            </h2>
            <div className="link-container">
              {sections.map((sec) => (
                <h4 key={sec}>
                  <a href={`#${sec.toLowerCase()}`}>
                    <FormattedMessage id={sec}></FormattedMessage>
                  </a>
                </h4>
              ))}
              <button onClick={DownloadPdf}>Download as PDF</button>
              <SkillsShortened skills={skills}></SkillsShortened>
            </div>
          </div>
        </header>
        <Experience
          data={require(`lang/${context.locale}/resume/positions`).default}
        />
        <Education
          data={require(`lang/${context.locale}/resume/degrees`).default}
        />
        <Skills skills={skills} categories={categories} />
        <References />
      </article>
    </Main>
  );
};

// function DownloadPdf () {
//   const context = useContext(AppStateContext)

//   const doc = new jsPDF();
//   console.log(ReactDOMServer.renderToStaticMarkup(React.createElement(Resume, context)))

//   // doc.html(ReactDOMServer.renderToStaticMarkup(ReactDOM.findDOMNode(this)));
//   // doc.save("myDocument.pdf");
// }

export default Resume;
