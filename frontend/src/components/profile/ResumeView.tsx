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
      <p>
        <SectionHeading>WORK EXPERIENCE</SectionHeading>
      </p>
      <JobContainer>
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
      <StyledHR />
      <JobContainer>
        <JobHeadingContainer>
          <SectionSubHeading>
            NYC Health and Hospitals | New York, NY
          </SectionSubHeading>
        </JobHeadingContainer>
        <JobDatesContainer>
          <JobDatesItem>
            <BoldText>
              Senior Analyst, Special Populations May 2022 - Oct 2022
            </BoldText>
          </JobDatesItem>
        </JobDatesContainer>
        <JobInfoContainer>
          <JobInfoItem>
            <BoldText>Special Populations Project: </BoldText>Used SAS and mySQL
            to create datasets that were visualized in Tableau dashboards.
            Created presentations that will be used to estimate the needs of
            homeless patients that will be enrolled in the new H+H program.
          </JobInfoItem>
        </JobInfoContainer>
      </JobContainer>
      <StyledHR />
      <JobContainer>
        <JobHeadingContainer>
          <SectionSubHeading>NYC DOHMH BHHS | New York, NY</SectionSubHeading>
        </JobHeadingContainer>
        <JobDatesContainer>
          <JobDatesItem>
            <BoldText>HIV Death Team Lead April 2018 - May 2022</BoldText>
          </JobDatesItem>
          <JobDatesItem>
            <BoldText>
              HIV Surveillance Analyst April 2018 - March 2020
            </BoldText>
          </JobDatesItem>
          <JobDatesItem>
            <BoldText>
              HIV Surveillance Death Data Analyst March 2020 - March 2022
            </BoldText>
          </JobDatesItem>
          <JobDatesItem>
            <BoldText>
              HIV Surveillance Death Team Lead March 2022 - May 2022
            </BoldText>
          </JobDatesItem>
        </JobDatesContainer>
        <JobInfoContainer>
          <JobInfoItem>
            <BoldText>Routine Work: </BoldText> Used SAS programming, including
            data steps and proc SQL commands, for data cleaning, checking,
            analysis and visualization for BHHS, including the production of
            annual reports, geographic coding of all incident cases of HIV or
            AIDS to CDC, and reporting internal productivity statistics as
            quality control measures. Leading death surveillance for HIV, and
            supervising death ascertainment, field investigation and death
            metrics for deaths among people living with HIV, and cause of death
            dataset freeze programs.
          </JobInfoItem>
          <JobInfoItem>
            <BoldText>Measles Outbreak Response: </BoldText>Worked as sole data
            analyst/SAS programmer, creating programs and workflows used to
            identify and contact individuals not in compliance with measles
            vaccination requirements during state of emergency.
          </JobInfoItem>
          <JobInfoItem>
            <BoldText>COVID-19 Outbreak Response: </BoldText>Worked with the NYC
            DOHMH Integrated Data Team to monitor and report on PPE status among
            healthcare providers, including nursing homes and other congregant
            living facilities. Created and evaluated an imputation method to
            estimate hospital population demographics using geographical data,
            which was used for PPE and vaccine allocation algorithms. Led
            vaccine distribution hub as second in command, managing
            communications between vaccine distribution site and DOHMH
            headquarters. Was awarded a Distinguished Service Award for work
            done in 2020.
          </JobInfoItem>
          <JobInfoItem>
            <BoldText>Independent Projects: </BoldText>Research into the HIV
            epidemic within Asian and Pacific Islander (API) ethnicities and
            nationalities and working on methodology to use geography of
            residence and name lists to impute/disaggregate API subgroups among
            US born Asian-Americans.
          </JobInfoItem>
          <JobInfoItem>
            <BoldText>Immigrant Health Liaison: </BoldText>In charge of
            summarizing and presenting surveillance data on HIV in immigrant
            populations in NYC both internally and externally. Created a new
            page in the HIV annual report, reporting on HIV diagnoses among
            people born outside the United States.
          </JobInfoItem>
        </JobInfoContainer>
      </JobContainer>
      <StyledHR />
      <JobContainer>
        <JobHeadingContainer>
          <SectionSubHeading>College Board | New York, NY </SectionSubHeading>
        </JobHeadingContainer>
        <JobDatesContainer>
          <JobDatesItem>
            <BoldText>
              Freelance Science Writer March 2018 - September 2020
            </BoldText>
          </JobDatesItem>
        </JobDatesContainer>
        <JobInfoContainer>
          <JobInfoItem>
            <BoldText>Freelance Writing: </BoldText>Found articles, and wrote
            short summary passages for use in AP Biology Exam.
          </JobInfoItem>
        </JobInfoContainer>
      </JobContainer>
      <StyledHR />
      <JobContainer>
        <JobHeadingContainer>
          <SectionSubHeading>
            NYU School of Medicine | New York, NY
          </SectionSubHeading>
        </JobHeadingContainer>
        <JobDatesContainer>
          <JobDatesItem>
            <BoldText>Research Data Analyst May 2017 - April 2018</BoldText>
          </JobDatesItem>
        </JobDatesContainer>
        <JobInfoContainer>
          <JobInfoItem>
            <BoldText>CHES/ECHO Prenatal Biobank Study: </BoldText>Worked in a
            large team to collect data on the effects of environmental exposures
            during pregnancy and outcomes in pregnancy and early childhood,
            recruiting and collecting survey data and biological samples from
            patients at many timepoints during pregnancy. Used SAS to parse
            Quadramed schedules, identifying patients within the first trimester
            of pregnancy for potential enrollment in research.
          </JobInfoItem>
        </JobInfoContainer>
      </JobContainer>
      <StyledHR />
      <JobContainer>
        <JobHeadingContainer>
          <SectionSubHeading>
            Janssen Pharmaceutical | Raritan , NJ
          </SectionSubHeading>
        </JobHeadingContainer>
        <JobDatesContainer>
          <JobDatesItem>
            <BoldText>
              Global Market Access Intern May 2016 - August 2016
            </BoldText>
          </JobDatesItem>
        </JobDatesContainer>
        <JobInfoContainer>
          <JobInfoItem>
            <BoldText>Projects: </BoldText>Worked on budget Impact Analysis
            Platform, calculating drug regimen costs and creating a standardized
            report for the introduction of a new HIV drug into the Mexican
            Market. Also created an international repository for regulations
            concerning the dissemination of patient reported outcome data to the
            public in 15 large Janssen markets.
          </JobInfoItem>
        </JobInfoContainer>
      </JobContainer>
      <StyledHR />
      <JobContainer>
        <JobHeadingContainer>
          <SectionSubHeading>
            NYU Langone Medical Center |New York , NY
          </SectionSubHeading>
        </JobHeadingContainer>
        <JobDatesContainer>
          <JobDatesItem>
            <BoldText>
              Research Assistant/Lab Manager September 2010 - August 2012
            </BoldText>
          </JobDatesItem>
        </JobDatesContainer>
        <JobInfoContainer>
          <JobInfoItem>
            <BoldText>Roles: </BoldText>Assisted postdocs with experiments and
            data collection, lab management, project coordination.
          </JobInfoItem>
        </JobInfoContainer>
      </JobContainer>
      <StyledHR />
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
