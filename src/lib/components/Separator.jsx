import React from 'react';
import './Separator.css';

const Separator = ({ margin = true }) => {
  return (
    <>
      <div className="separator">
        <div className="line"></div>
        <svg
          className="separator-svg"
          viewBox="0 0 211.67042 211.66732"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className="path-outline"
            d="M 155.82411,65.959953 45.415051,176.36901 -64.994007,65.959953 45.415051,-44.449104 Z"
            transform="matrix(0.87569946,0,0,0.87568663,66.064788,48.073441)"
          />
          <path
            className="path-fill"
            d="M 155.82411,65.959953 45.415051,176.36901 -64.994007,65.959953 45.415051,-44.449104 Z"
            transform="matrix(0.50552401,0,0,0.50551661,82.876324,72.489838)"
          />
        </svg>
        <div className="line"></div>
      </div>
      {margin && <div className="separator-margin"></div>}
    </>
  );
};

export default Separator;