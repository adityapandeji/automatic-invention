const Train = require('./models/train');

// Test adding a train
Train.create('Express 101', 'Pune', 'Mumbai', 200, (err, result) => {
  if (err) {
    console.error('Error creating train:', err);
  } else {
    console.log('Train created successfully:', result);
  }
});

// Test finding trains by route
Train.findByRoute('Pune', 'Mumbai', (err, result) => {
  if (err) {
    console.error('Error finding trains:', err);
  } else {
    console.log('Trains found:', result);
  }
});

// Test updating seat availability
Train.updateSeats(1, 150, (err, result) => {
  if (err) {
    console.error('Error updating seats:', err);
  } else {
    console.log('Seats updated successfully:', result);
  }
});
