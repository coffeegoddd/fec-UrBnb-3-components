const faker = require('faker');


// helpers for specific fake data generation

function randomBooleanValue(num) {
  return num % 2 === 0;
}

function generateRandomNumberBetween(beg, end) {
  return Math.floor((Math.random() * (end - beg + 1)) + beg);
}

function partForRent() {
  const index = generateRandomNumberBetween(0, 2);
  const parts = ['Entire Place', 'Private Room', 'Shared Room'];
  return parts[index];
}

// creates sample owners data...

function generateOwnersData() {
  const sampleOwners = [];

  // we want 100 unique owners..
  for (let i = 0; i < 100; i += 1) {
    const owner = {};
    const randomBool = randomBooleanValue(i);

    //  give our owners the appropriate properties...
    owner.name = faker.name.findName();
    owner.id = i;
    owner.photo = faker.image.imageUrl();
    owner.isSuperHost = randomBool;
    sampleOwners.push(owner);
  }
  return sampleOwners;
}

// creates sample units data...

function generateUnitsData() { 
  const sampleUnits = [];

  // we need 100 units...

  for (let i = 11111; i < 11211; i += 1) {
    const unit = {
      id: i,
      owner_id: generateRandomNumberBetween(0, 99),
      title: faker.company.catchPhraseDescriptor(),
      streetAddress: faker.address.streetAddress(),
      aptOrSuite: faker.address.secondaryAddress(),
      country: faker.address.country(),
      city: faker.address.city(),
      state: faker.address.state(),
      zipCode: faker.address.zipCode(),
      partOfUnitFromRent: partForRent(),
      guestsAllowed: generateRandomNumberBetween(1, 16),
      numberOfRoomsGuestsMayUse: generateRandomNumberBetween(0, 50),
      numberOfBedsGuestsMayUse: generateRandomNumberBetween(0, 50),
      numberOfBathroomsGuestsMayUse: generateRandomNumberBetween(0, 50),
      numberOfReviews: generateRandomNumberBetween(0, 500),
      averageStarRating: generateRandomNumberBetween(0, 5),
      summaryDescription: faker.lorem.paragraph(),
      aboutYourUnit: faker.lorem.paragraph(),
      whatGuestsCanAccess: faker.lorem.sentences(),
      yourInteractionWithGuests: faker.lorem.sentences(),
      otherThingsToNote: faker.lorem.sentences(),
      dateAvailableFrom: new Date(),
      dateAvailableTo: faker.date.future(),
      pricePerNight: generateRandomNumberBetween(1, 1000),
      cleaningFee: generateRandomNumberBetween(1, 200),
      serviceFee: generateRandomNumberBetween(1, 200),
      isBooked: randomBooleanValue(generateRandomNumberBetween(0, 25)),
      hasEssentials: randomBooleanValue(generateRandomNumberBetween(0, 25)),
      hasWifi: randomBooleanValue(generateRandomNumberBetween(0, 25)),
      hasShampoo: randomBooleanValue(generateRandomNumberBetween(0, 25)),
      hasClosetDrawers: randomBooleanValue(generateRandomNumberBetween(0, 25)),
      hasTv: randomBooleanValue(generateRandomNumberBetween(0, 25)),
      hasHeat: randomBooleanValue(generateRandomNumberBetween(0, 25)),
      hasAirConditioning: randomBooleanValue(generateRandomNumberBetween(0, 25)),
      hasBreakfastCoffeeTea: randomBooleanValue(generateRandomNumberBetween(0, 25)),
      hasDeskWorkSpace: randomBooleanValue(generateRandomNumberBetween(0, 25)),
      hasFirePlace: randomBooleanValue(generateRandomNumberBetween(0, 25)),
      hasIron: randomBooleanValue(generateRandomNumberBetween(0, 25)),
      hasHairDryer: randomBooleanValue(generateRandomNumberBetween(0, 25)),
      hasPrivateEntrance: randomBooleanValue(generateRandomNumberBetween(0, 25)),
      hasSmokeDetector: randomBooleanValue(generateRandomNumberBetween(0, 25)),
      hasCarbonMonoxideDetector: randomBooleanValue(generateRandomNumberBetween(0, 25)),
      hasFirstAidKit: randomBooleanValue(generateRandomNumberBetween(0, 25)),
      hasFireExtinguisher: randomBooleanValue(generateRandomNumberBetween(0, 25)),
      hasLockOnBedroomDoor: randomBooleanValue(generateRandomNumberBetween(0, 25)),
      hasPool: randomBooleanValue(generateRandomNumberBetween(0, 25)),
      hasKitchen: randomBooleanValue(generateRandomNumberBetween(0, 25)),
      hasLaundryWasher: randomBooleanValue(generateRandomNumberBetween(0, 25)),
      hasLaundryDryer: randomBooleanValue(generateRandomNumberBetween(0, 25)),
      hasParking: randomBooleanValue(generateRandomNumberBetween(0, 25)),
      hasElevator: randomBooleanValue(generateRandomNumberBetween(0, 25)),
      hasHotTub: randomBooleanValue(generateRandomNumberBetween(0, 25)),
    };
    sampleUnits.push(unit);
  }
  return sampleUnits;
}

module.exports = {
  generateOwnersData,
  generateUnitsData,
};
