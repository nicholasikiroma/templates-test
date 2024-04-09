# Email Sender Script

This is a simple Node.js script for sending emails using Nodemailer and Handlebars templates.

## Prerequisites

Before running this script, make sure you have the following installed on your system:

- Node.js (<https://nodejs.org>)
- NPM (Node Package Manager, usually comes with Node.js installation)

## Setup

1. Clone this repository to your local machine:

    ```bash
    git clone https://github.com/your-username/email-sender.git
    ```

2. Navigate to the project directory:

    ```bash
    cd email-sender
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

4. Create a `.env` file in the project root directory and add your email credentials:

    ```bash
    EMAIL=your-email@gmail.com
    PASSWORD=your-email-password
    ```

   Replace `your-email@gmail.com` with your Gmail address and `your-email-password` with your Gmail password. Please note that it's recommended to use an app password if you have two-factor authentication enabled on your Gmail account.

## Running the Script

To send an email using the script, follow these steps:

1. Make sure you're in the project directory.

2. Open the `index.js` file and update the `sendMail` function call with the appropriate email details:

   - `email`: Recipient's email address.
   - `subject`: Email subject.
   - `payload`: Payload data to be sent along with the email (optional).
   - `mailTemplateFileName`: Name of the Handlebars template file located in the `mail-templates` directory without the `.handlebars` extension.

3. Save the changes.

4. Run the script:

    ```bash
    npm start
    ```

5. Follow the console prompts and check your email inbox to verify that the email has been sent successfully.

## Additional Notes

- Handlebars templates for emails are stored in the `mail-templates` directory. You can customize these templates according to your requirements.

- For testing purposes, make sure you use a valid recipient email address.
