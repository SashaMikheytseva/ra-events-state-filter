import React from 'react';
import './ProjectList.css';

export const ProjectList = ({projects}) => {
  return (
    <main className='project-list'>
        {projects.map((card, index) => {
          return (
            <img
                key={index}
                className='card-item'
                src={card.img}
                alt=''
                projectCategory={card.category}
            />
          )
        })}
    </main>
  );
}
