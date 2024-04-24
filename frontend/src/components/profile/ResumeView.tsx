import React from "react";
import styled from "styled-components";
import { TextBlockHeading, StyledParagraph } from "../utilities/styledfonts";

const StyledHR = styled.hr`
  display: block;
  unicode-bidi: isolate;
  margin-block-start: 0.5em;
  margin-block-end: 0.5em;
  margin-inline-start: auto;
  margin-inline-end: auto;
  overflow: hidden;
  border-style: inset;
  border-width: 1px;
  background-color: black;
`;

const SectionHeading = styled.span`
  font-size: 1.3em;
  font-weight: 700;
`;

const SectionSubHeading = styled.span`
  color: #636363;
  font-size: 1.1em;
  font-weight: 700;
`;

const BoldText = styled.span`
  font-size: 1em;
  font-weight: 700;
`;

const JobContainer = styled.div``;
const JobHeadingContainer = styled.p``;
const JobDatesContainer = styled.div``;
const JobDatesItem = styled.div``;
const JobInfoContainer = styled.div``;
const JobInfoItem = styled.p``;
const EduContainer = styled.div``;

const ResumeView = () => {
  const _renderJobData = () => {
    return <div></div>;
  };

  return (
    <>
      <TextBlockHeading>RESUME</TextBlockHeading>

      <StyledHR />
      <p>
        <BoldText>TECHNICAL SKILLS: </BoldText>
        <span>
          &nbsp;&nbsp; ANOVA, Logistic/Linear Regression, Categorical Data
          Analysis, SAS, SQL, Tableau, Power BI, ArcGIS, qGIS, EPIC, Business
          Objects
        </span>
      </p>
      <p>
        <BoldText>LANGUAGES: </BoldText>
        <span>
          &nbsp;&nbsp;English (fluent), Spanish (advanced/partial native
          fluency), Mandarin(intermediate)
        </span>
      </p>
      <StyledHR />
      <JobContainer>
        <p>
          <SectionHeading>WORK EXPERIENCE</SectionHeading>
        </p>
        <JobHeadingContainer>
          <SectionSubHeading>
            Centene Health Net Federal Services Team | Fully Remote | Health
            Data Analyst III
          </SectionSubHeading>
        </JobHeadingContainer>
        <JobDatesContainer>
          <JobDatesItem>
            <BoldText>Health Data Analyst III Nov 2022 - Present</BoldText>
          </JobDatesItem>
          <JobDatesItem>
            <BoldText>
              Contractor at Centene through Zeektek Nov 2022- May 2023
            </BoldText>
          </JobDatesItem>
          <JobDatesItem>
            <BoldText>
              Health Data Analyst III on staff with Centene HNFS May 2023-
              Present
            </BoldText>
          </JobDatesItem>
        </JobDatesContainer>
        <JobInfoContainer>
          <JobInfoItem>
            I am currently working with Centene as a data analyst, working to
            better understand the healthcare needs of Tricare beneficiaries in
            the western region. To accomplish this, I work with stakeholders to
            outline and clarify the data questions that they have, and then to
            answer these questions using SAS, SQL and Power BI for data
            visualization to create and format datasets that answer their
            questions accurately and thoroughly, while keeping in mind the
            limitations of any given dataset.
          </JobInfoItem>
          <JobInfoItem>
            <BoldText>Major Projects: </BoldText>
            Defining and identifying prenatal care deserts across the west
            region, and investigating differences in labor and delivery for
            those in care deserts. Designing an easily updated dashboard in SAS
            and Power BI in order to create a consistent and easily updated
            report on beneficiary enrollment and care utilization for
            presentation to commanders at Military Treatment Facilities.
          </JobInfoItem>
        </JobInfoContainer>
      </JobContainer>
      <EduContainer>
        <SectionSubHeading>EDUCATION</SectionSubHeading>
        <p>
          <BoldText>
            Rutgers University | MPH Epidemiology Fall 2014 to Fall 2017
          </BoldText>
        </p>
        <p>
          <BoldText>
            Rutgers University | Neuroscience graduate work  Fall 2012 to Spring
            2014
          </BoldText>
        </p>
        <p>
          <BoldText>
            Fordham University |  BS Biological Sciences Fall 2008 to Spring
            2010
          </BoldText>
        </p>
      </EduContainer>
    </>
  );
};

export default ResumeView;
