// Load environment variables from a .env file into process.env
require('dotenv').config();

// Function to send a message to a Telegram channel
async function sendTelegramMessage(token, channel, message) {
    try {
        // Construct the Telegram API endpoint for sending a message
        const request = await fetch(`https://api.telegram.org/${token}/sendMessage?chat_id=${channel}&text=${message}`, {
            method: 'GET',
            redirect: 'follow'
        });

        // Parse the JSON response from the Telegram API
        const response = await request.json();

        // Return the response object
        return response;
    } catch (error) {
        // Handle errors by logging them to the console
        console.error('Error:', error);
    }
}

// Immediately-invoked function expression (IIFE) to test the sendTelegramMessage function
(async () => {
    // Call the sendTelegramMessage function with parameters from environment variables
    sendTelegramMessage(process.env.TOKEN, process.env.CHANNEL, 'This is a test message with @codingWithAdo');
})();
