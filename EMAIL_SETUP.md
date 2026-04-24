# Email Collection Setup

The website now uses Formspree to collect email addresses from users who want to join the early access waitlist.

## How to Set Up Formspree

1. **Sign up for Formspree**
   - Go to https://formspree.io
   - Create a free account (no credit card required)
   - The free tier allows up to 50 submissions per month

2. **Create a New Form**
   - After signing up, click "New Form"
   - Give it a name (e.g., "AIWardrobe Waitlist")
   - Choose the "Create a form" option

3. **Get Your Form ID**
   - Once created, Formspree will give you a form URL like: `https://formspree.io/f/abc123def`
   - Copy the form ID (the part after `/f/`, e.g., `abc123def`)

4. **Update the Code**
   - Open `src/components/Hero.jsx`
   - Find line 33 where it says: `https://formspree.io/f/YOUR_FORMSPREE_FORM_ID`
   - Replace `YOUR_FORMSPREE_FORM_ID` with your actual form ID
   - The line should look like: `https://formspree.io/f/abc123def`

5. **Test the Form**
   - Start the development server: `npm run dev`
   - Open the website in your browser
   - Enter an email address and click "Join Early Access"
   - Check your Formspree dashboard to see if the submission was received

## Alternative: Use the EmailCollection Component

I also created a standalone `EmailCollection.jsx` component that you can use elsewhere in the website. To use it:

1. Import it in your component:
   ```jsx
   import { EmailCollection } from './components/EmailCollection';
   ```

2. Add it to your JSX:
   ```jsx
   <EmailCollection />
   ```

3. Update the Formspree ID in `src/components/EmailCollection.jsx` line 24

## Benefits of Using Formspree

- **No backend required** - Works entirely on the client side
- **Free tier available** - Up to 50 submissions/month
- **Easy setup** - Takes less than 5 minutes
- **Spam protection** - Built-in spam filtering
- **Email notifications** - Get notified when someone submits
- **Export data** - Download submissions as CSV

## Troubleshooting

- If submissions aren't working, check the browser console for errors
- Make sure your Formspree form is set to accept JSON submissions
- Verify the form ID is correct in the code
- Check Formspree dashboard to see if submissions are being received
