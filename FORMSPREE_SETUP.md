# Formspree Setup Instructions

## Quick Setup (5 minutes)

### Step 1: Create Formspree Account

1. Go to https://formspree.io
2. Click "Get Started" or "Sign Up"
3. Create a free account (allows 50 submissions/month)

### Step 2: Create Your Form

1. After logging in, click "New Form"
2. Give it a name: "Brotherhood Company Contact Form"
3. Copy the Form ID (looks like: `xyzabc123`)

### Step 3: Update Your Website

You need to replace `YOUR_FORMSPREE_ID` in **2 files**:

#### File 1: `src/components/Contact.tsx`

Find line ~44 and replace:

```typescript
const response = await fetch("https://formspree.io/f/YOUR_FORMSPREE_ID", {
```

With:

```typescript
const response = await fetch("https://formspree.io/f/xyzabc123", {
```

(Use your actual Form ID)

Also find line ~126 and replace:

```html
<form
  onSubmit="{handleSubmit}"
  className="space-y-6"
  action="https://formspree.io/f/YOUR_FORMSPREE_ID"
  method="POST"
></form>
```

With:

```html
<form
  onSubmit="{handleSubmit}"
  className="space-y-6"
  action="https://formspree.io/f/xyzabc123"
  method="POST"
></form>
```

#### File 2: `src/pages/Booking.tsx`

Find line ~74 and replace:

```typescript
const response = await fetch("https://formspree.io/f/YOUR_FORMSPREE_ID", {
```

With:

```typescript
const response = await fetch("https://formspree.io/f/xyzabc123", {
```

(Use your actual Form ID)

### Step 4: Test Your Forms

1. Run `npm run dev`
2. Go to the contact section
3. Fill out the form and submit
4. Check your Formspree dashboard to see the submission
5. Check your email for the notification

## Alternative: Use Different Form IDs

You can create separate forms for Contact and Booking:

1. Create "Contact Form" - use this ID in `Contact.tsx`
2. Create "Booking Form" - use this ID in `Booking.tsx`

This helps organize submissions separately.

## Form Features Included

### Contact Form

- Name
- Email
- Phone
- Service Type selection
- Message
- Validation
- Loading states
- Success/Error messages

### Booking Form

- Customer Name
- Customer Email
- Customer Phone
- Number of People
- Preferred Date
- Additional Requests
- Destination info automatically included
- Validation
- Loading states
- Success/Error messages

## Email Notifications

Formspree automatically sends you an email when someone submits a form. You can:

1. View submissions in your Formspree dashboard
2. Export submissions to CSV
3. Set up custom email templates
4. Add multiple email recipients
5. Enable anti-spam protection (reCAPTCHA)

## Upgrade Options

**Free Plan**: 50 submissions/month
**Gold Plan ($10/mo)**: Unlimited submissions, custom redirects, file uploads, AJAX
**Platinum Plan ($40/mo)**: Everything + advanced features

For your tourism business, the free plan should be sufficient to start. Upgrade if you get more than 50 inquiries per month.

## Troubleshooting

### Forms not submitting?

- Check that you replaced ALL instances of `YOUR_FORMSPREE_ID`
- Make sure you're using the correct Form ID from your dashboard
- Check browser console for errors
- Verify your Formspree account is active

### Not receiving emails?

- Check your spam folder
- Verify email address in Formspree dashboard
- Make sure form is verified in Formspree

### Getting CORS errors?

- Add your domain to Formspree's allowed domains
- Make sure you're using the form action attribute correctly

## Need Help?

- Formspree Docs: https://help.formspree.io
- Contact Formspree Support: https://formspree.io/contact

## After Setup Checklist

- [ ] Created Formspree account
- [ ] Created form and got Form ID
- [ ] Updated `Contact.tsx` with Form ID (2 places)
- [ ] Updated `Booking.tsx` with Form ID (1 place)
- [ ] Tested contact form
- [ ] Tested booking form
- [ ] Verified email notifications work
- [ ] Checked Formspree dashboard for submissions
