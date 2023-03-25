import React, { useState } from 'react';
import { Link } from "react-router-dom";
import {useSelector} from "react-redux";
import { IDate, IDiary, RootState } from '../global/global';


const DateList = () => {
  
  const dates = useSelector((state:RootState) => state.dates);
  if (dates.length === 0) {
    return <span>Loading...</span>;
  }

  return (
    <ul className="list_date">
      {dates.map((date: IDate ) => (
        <li key={date.id}>
          <Link to={`/date/${date.date}`}>{date.date}</Link>
        </li>
      ))}
    </ul>
  );
}

export default DateList;