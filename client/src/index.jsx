import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import BookingWidgetIso from './components/BookingWidgetIso.jsx';

function generateRandomNumberBetween(beg, end) {
  return Math.floor((Math.random() * (end - beg + 1)) + beg);
}

let id = generateRandomNumberBetween(11111, 11210);

ReactDOM.render(<App id={id}/>, document.getElementById('descript'));

// during my class presentation of the this application
// the BookingWidgetIso component was used during with a proxy server to render
// my components with the other team members components.
// I've commented this component out since it replicates App.jsx and is now redundant.

// ReactDOM.render(<BookingWidgetIso id={id}/>, document.getElementById('_bookingWidget'));
