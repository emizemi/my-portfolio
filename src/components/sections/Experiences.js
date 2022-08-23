import React from "react";
import Pagetitle from "../elements/Pagetitle";
import Timeline from "../elements/Timeline";

const educationData = [
  {
    id: 1,
    title: "Acamedic Degree",
    years: "2019 - Present",
    content:
      "Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec admodum perfecto.",
  },
  {
    id: 2,
    title: "Bachelor’s Degree",
    years: "2017 - 2013",
    content:
      "Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec admodum perfecto.",
  },
  {
    id: 3,
    title: "Honours Degree",
    years: "2013 - 2009",
    content:
      "Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec admodum perfecto.",
  },
];

const experienceData = [
  {
    id: 1,
    title: "Software Engineer Intern, Cisco, Remote",
    years: "June 2022 - Present",
    content:
      "Currently working on Cisco SD-WAN in the Enterprise Networks organization. Programmed using Angular, Java, Neo4j.",
  },
  {
    id: 2,
    title: "CS 160 Teaching Assistant, Tufts University Department of CS, Somerville MA",
    years: "September 2021 - December 2021",
    content:
      "Taught students in recitations and office hours to solidify their understanding of content in the upper-level Algorithms course at Tufts.",
  },
  {
    id: 3,
    title: "Software Engineer Intern, Cisco, Remote",
    years: "June 2021 - August 2021",
    content:
      "Programmed a web app that displays network metrics about various Cisco clusters and developed a sidecar authentication app for Cisco apps deployed on AWS. Programmed using React, Python, Kubernetes, SQL.",
  },
  {
    id: 4,
    title: "Frontend Web Developer, JumboCode, Somerville MA",
    years: "September 2019 - May 2021",
    content:
      "Coded the front end of a web app developed for the Just-A-Start YouthBuild program, which educates teenagers who have dropped out of high school. Programmed using React.",
  },
  {
    id: 5,
    title: "iOS Developer Intern, JazzAsia, Singapore",
    years: "April 2017 - August 2017",
    content:
      "Built a iOS application for the JazzAsia workshop so attendees could view their customized class schedules. Programmed using Swift, Xcode, and Firebase.",
  }
];

function Experiences() {
  return (
    <section id="experience">
      <div className="container">
        <Pagetitle title="Experience" />
        <div className="row">
          <div className="col-md-12">
            <div className="spacer d-md-none d-lg-none" data-height="30"></div>
            <div className="timeline exp bg-white rounded shadow-dark padding-30 overflow-hidden">
              {experienceData.map((experience) => (
                <section style={{ paddingBottom: 35, paddingTop: 0 }}>
                  <Timeline key={experience.id} education={experience} />
                </section>
              ))}
              <span className="line"></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experiences;
