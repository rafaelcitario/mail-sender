# Mail Sender

## What's the Mail Sender?

Mail Sender is a script built in Node.js, TypeScript, Nodemailer, and Zod. These are all the technologies used in this project.

The Mail Sender sends multiple emails quickly and easily.

## How to use this script?

Clone this repository:

```bash
git clone git@github.com:rafaelcitario/mail-sender.git 
```

Create a file called '.env' and fill it with the necessary information found inside the '.env.example' file.

```dotenv
user=YourEmail
pass=GoogleSecretPasswordApps
```

[To create an App password, access this link](https://myaccount.google.com/apppasswords)

<img src="https://i.ibb.co/3d2DnGb/Captura-de-tela-2024-04-27-143740.png" alt="Captura-de-tela-2024-04-27-143740" border="0">

After you've named your app, copy the Secret Password and click on the blue button.

Paste the secret password as `pass=******` in `.env` without spaces between characters.

Put some emails in the `mails.txt` file.

Write some content in the `content.txt` file; this is the content you send in the email.

Run:

```bash
npm install
```

To start the app:

```bash
npm run start:dev
```

This will automatically send emails.

![video demonstracao](https://github.com/rafaelcitario/mail-sender/assets/83686681/f32945fb-8de3-4018-9543-b9dae605cd7c)

## RoadMap

- [x] Config SMTP - *Default*: (Gmail)
- [x] Send Email
- [x] Send Multiples Emails
- [x] Read Files with the content to send
- [ ] Implement fast-changing subject mails
- [ ] Acept others SMTPS like outlook, Proton, etc...
- [ ] Refactory to System API
