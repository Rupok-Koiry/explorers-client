import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';
const Sidebar = () => {
  const [bestSpots, setBestSpots] = useState([]);
  useEffect(() => {
    (async () => {
      const response = await fetch(
        'https://frozen-citadel-34677.herokuapp.com/blog/best-spots'
      );
      const data = await response.json();
      setBestSpots(data.data);
    })();
  });
  return (
    <aside className="sidebar">
      <h3 className="section-heading-xsm ">Top Rated Spots</h3>
      <ol>
        {bestSpots.map((spot) => {
          return (
            <li>
              <Link to={`/tours/${spot._id}`}>{spot.title}</Link>
            </li>
          );
        })}
      </ol>
    </aside>
  );
};

export default Sidebar;
