import React from 'react';

const BookingButton = ({ unitData, toggleCalendar }) => {
  const handleClick = (e) => {
    e.preventDefault();
    console.log('click!');
    toggleCalendar();
  }

  let { isBooked } = unitData;
  let button = <button onClick={handleClick}>Book</button>
  if (isBooked) {
    button = <button onClick={handleClick}>Request to Book</button>
  }
  return(
    <div>
      <div>{button}</div>
      <div>You won’t be charged yet</div>
    </div>
  );
};

export default BookingButton;