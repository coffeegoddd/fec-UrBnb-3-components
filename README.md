# bookingWidgetAndUnitInfo
UrBnb Frontend Capstone
Javascript | Node.js | Express | React | MongoDB

UrBnb is a full-stack application with significant emphasis on front-end development. It intends to replicate an AirBnb rental page. The goal of this project was for our engineering team to learn how to recreate different components of an AirBnb rental page while using a microservices architecture. The focus of this project was on presentation and surface-level functionality, while mimicking Airbnb as best we could within the our 3 week time-box. I built 3 components for this project, the Booking Widget, the Unit Description, and the Amenities Component.

![alt text](https://s3.amazonaws.com/coffeegodddfec1/both+components.png)

The Booking Widget features two main sections, the Guest Selection Menu and the Date-picker.

![alt text](https://s3.amazonaws.com/coffeegodddfec1/datepickerHighlight.png)

The Guest Selection Menu allows clients to add and remove guests, and affects the unit’s price as well. The price increases as the number of adults and children increase.

The Date-picker allows a client to select specific dates she wants to book within a hosts given availability. The date range selected by a client also affects the price per night of the unit.

The Unit Description dynamically renders information about a rental unit and about the owner.
If a unit is owned by a SuperHost, that information is rendered accordingly.

Similarly, The Amenities Component has a small dynamically rendered section highlighting up to four desirable amenities, but can be expanded into a modal that displays the descriptions of each amenity the unit contains, as well as the amenities a unit does not contain.


