const {
  generateOwnersData,
  generateUnitsData,
} = require('./generateData');

const {
  Owner,
  Unit,
} = require('../index');

const sampleOwners = generateOwnersData();
const sampleUnits = generateUnitsData();

Owner.insertMany(sampleOwners);
Unit.insertMany(sampleUnits)
  .then(() => {
    // after we seed the db, we need to close the connection so the connection doesnt hang
    process.exit(0);
  });
