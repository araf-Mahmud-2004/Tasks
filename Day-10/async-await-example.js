// A simple async/await example

// Helper function that returns a Promise that resolves after a delay
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Async function using await
async function runExample() {
  try {
    console.log('Starting the async/await example...');
    
    // Wait for 1 second
    await delay(1000);
    console.log('1. This appears after 1 second');
    
    // Wait for 1.5 seconds
    await delay(1500);
    console.log('2. This appears after 1.5 more seconds');
    
    // Wait for 0.5 seconds
    await delay(500);
    console.log('3. This appears after 0.5 more seconds');
    
    return 'All done!';
  } catch (error) {
    console.error('An error occurred:', error);
    throw error;
  }
}

// Execute the async function
runExample()
  .then(result => console.log('Result:', result))
  .catch(error => console.error('Error:', error));

console.log('This appears immediately (async functions are non-blocking)');
