import React from 'react';
import styled from 'styled-components';

import ExperienceBlock from '../components/ExperienceBlock';

import { experience } from '../utils/config';

const ExperienceContainer = styled.div`
  width: 100%;
  height: 100%;
  
  h1 {
    text-align: center;
  }

  hr {
    margin: 20px 0;
  }
`;

function Experience() {
  return (
    <ExperienceContainer>
      <h1>Bradley Borodaty</h1>
      <hr/>
      {experience.map(ex =>
        <ExperienceBlock
          key={ex.company}
          company={ex.company}
          title={ex.title}
          start={ex.startDate}
          end={ex.endDate}
          desc={ex.description}
          bullets={ex.bullets}
        />
      )}
    </ExperienceContainer>
  )
}

export default Experience;