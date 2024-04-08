import React from 'react';
import './Toolbar.css';

export const Toolbar = ({filters, selected, onSelectFilter}) => {
  return (
    <div className='toolbar-list'>
        {filters.map((filter, index) => {
            return (
                <button
                key={index}
                className={`toolbar-item ${
                    selected === filter ? 'selected_item' : ''
                }`}
                onClick={() => onSelectFilter(filter)}>
                {filter}

            </button>
            )
            
        })}
    </div>
  )
}
