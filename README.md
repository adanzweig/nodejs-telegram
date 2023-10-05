# Telegram Message Sender

A simple Node.js script to send messages to a Telegram channel using the Telegram Bot API.

## Prerequisites

- Node.js installed on your machine
- Telegram bot token and channel ID (create a bot on Telegram and note down the token, invite the bot to your channel, and get the channel ID)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/adanzweig/nodejs-telegram.git
   ```

2. Navigate to the project directory:

   ```bash
   cd nodejs-telegram
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Create a `.env` file in the project root and add your Telegram bot token and channel ID:

   ```plaintext
   TOKEN=your_telegram_bot_token
   CHANNEL=your_telegram_channel_id
   ```

## Usage

To send a test message to your Telegram channel, run:

```bash
npm start
```

This will execute the script with the provided environment variables.

## Configuration

You can customize the message or integrate this script into your project. Update the message in the IIFE (Immediately-Invoked Function Expression) in the `index.js` file.

```javascript
(async () => {
    await sendTelegramMessage(process.env.TOKEN, process.env.CHANNEL, 'Your custom message here');
})();
```

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
```

Make sure to include a `LICENSE.md` file with the appropriate license text if you choose a license for your project.