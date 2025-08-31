// Array of user objects
const users = [
  { name: 'User 1', email: 'user1@example.com' },
  { name: 'User 2', email: 'user2@example.com' },
  { name: 'User 3', email: 'user3@example.com' },
  { name: 'User 4', email: 'user4@example.com' },
  { name: 'User 5', email: 'user5@example.com' }
];

// Loop over the users array and log each user's name and email
users.forEach(user => {
  console.log(`Name: ${user.name}, Email: ${user.email}`);
});

/*
Expected output in the console:
Name: User 1, Email: user1@example.com
Name: User 2, Email: user2@example.com
Name: User 3, Email: user3@example.com
Name: User 4, Email: user4@example.com
Name: User 5, Email: user5@example.com
*/