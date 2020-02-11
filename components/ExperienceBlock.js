import React from 'react';

function ExperienceBlock(props) {
  console.log(props);
  return (
    <div className="experience__block">
      <div className="headline">
        <h2>{props.company} - {props.title}</h2>
        <span>{props.start} - {props.end}</span>
      </div>
      <div className="desc">
        <p>{props.desc}</p>
      </div>
      <div className="bullets">
        <ul>
          {props.bullets.map((bullet, index) =>
            <li key={`${bullet}-${index}`}>{bullet}</li>
          )}
        </ul>
      </div>
    </div>
  )
}

export default ExperienceBlock;