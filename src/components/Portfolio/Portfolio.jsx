import React from 'react';
import { useState } from 'react';
import { Toolbar } from '../Toolbar/Toolbar';
import { ProjectList } from '../ProjectList/ProjectList';
import cards from '../cards.js';

export const Portfolio = () => {
  const [selected, setSelected] = useState('All'); 
  const onSelectFilter = (filter) => {
    setSelected(filter);
  } 

  let projects = [];
  if (selected === 'All') {
    projects = [...cards];
  } else {
    for (let i=0; i < cards.length; i++) {
        if (cards[i].category === selected) {
            projects.push(cards[i]);
        }
    }
  }

  return (
    <>
        <Toolbar 
            filters={["All", "Websites", "Flayers", "Business Cards"]}
            selected={selected}
            onSelectFilter={onSelectFilter}
        /> 
        <ProjectList projects={projects} />   
    </>
  )
}
