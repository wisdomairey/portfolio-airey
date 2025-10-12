# Contact Form Setup Guide

Your contact form has been updated to send emails to **wisdomaireguamen@gmail.com**. However, you need to complete the setup by choosing one of these services:

## Option 1: Web3Forms (Recommended - Free & Simple)

### Setup Steps:

1. **Get Your Access Key:**

   - Go to: https://web3forms.com/
   - Click **"Create Access Key"**
   - Enter your email: **wisdomaireguamen@gmail.com**
   - Click **"Create Access Key"**
   - Copy the access key they provide

2. **Add the Access Key to Your Code:**

   - Open `src/components/sections/Contact.tsx`
   - Find the line: `access_key: 'YOUR_WEB3FORMS_ACCESS_KEY'`
   - Replace `YOUR_WEB3FORMS_ACCESS_KEY` with your actual key

3. **Deploy:**
   ```bash
   git add .
   git commit -m "Add working contact form"
   git push origin main
   npm run deploy
   ```

### Features:

- ✅ Completely free
- ✅ No account required
- ✅ Unlimited submissions
- ✅ Email notifications
- ✅ CAPTCHA protection (optional)
- ✅ Works with static sites

---

## Option 2: Formspree (Alternative - Also Free)

If you prefer Formspree instead:

### Setup Steps:

1. **Sign up at Formspree:**

   - Go to: https://formspree.io/
   - Sign up with your email
   - Create a new form
   - Get your form endpoint (looks like: `https://formspree.io/f/xxxxxxxx`)

2. **Update the Contact Form:**

Replace the `handleSubmit` function in `Contact.tsx` with:

```typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);
  setSubmitStatus("idle");

  try {
    const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        message: formData.message,
      }),
    });

    if (response.ok) {
      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setSubmitStatus("idle"), 5000);
    } else {
      setSubmitStatus("error");
    }
  } catch (error) {
    console.error("Error submitting form:", error);
    setSubmitStatus("error");
  } finally {
    setIsSubmitting(false);
  }
};
```

Replace `YOUR_FORM_ID` with your actual Formspree form ID.

### Features:

- ✅ Free tier: 50 submissions/month
- ✅ Email notifications
- ✅ Spam filtering
- ✅ Form dashboard
- ✅ AJAX support

---

## Option 3: Simple Mailto Link (Fallback - No Setup Required)

If you want the simplest solution that works immediately without any setup:

### Update Contact.tsx:

Replace the `handleSubmit` function with:

```typescript
const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();

  const subject = encodeURIComponent(`Contact from ${formData.name}`);
  const body = encodeURIComponent(
    `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
  );

  window.location.href = `mailto:wisdomaireguamen@gmail.com?subject=${subject}&body=${body}`;
};
```

### Pros:

- ✅ Works immediately, no API setup
- ✅ No third-party service needed
- ✅ Opens user's email client

### Cons:

- ❌ Requires user to have email client configured
- ❌ Less seamless user experience
- ❌ Exposes your email in the URL

---

## Current Implementation Status

✅ **Done:**

- Contact form UI updated with loading states
- Success/error message display
- Form validation
- Email recipient set to: wisdomaireguamen@gmail.com

⚠️ **Needs Your Action:**

- Choose a service (Web3Forms recommended)
- Get API key/endpoint
- Update the access key in the code
- Deploy the changes

---

## Testing After Setup

1. **Deploy your site:**

   ```bash
   npm run deploy
   ```

2. **Wait 2-5 minutes** for deployment

3. **Visit your site** and test the form

4. **Check your email** (wisdomaireguamen@gmail.com) for the message

---

## Troubleshooting

### Form Not Sending

1. **Check browser console** for error messages
2. **Verify API key** is correct and active
3. **Check spam folder** for emails
4. **Test with a simple message** first

### Web3Forms Not Working

- Make sure you verified your email with Web3Forms
- Check that the access key is copied correctly
- Ensure there are no extra spaces in the key

### Still Having Issues?

Use the mailto fallback option (Option 3) as a temporary solution while debugging.

---

## Recommended: Web3Forms Setup in 2 Minutes

1. Visit: https://web3forms.com/
2. Click "Create Access Key"
3. Enter: wisdomaireguamen@gmail.com
4. Copy the key
5. Paste it in `Contact.tsx` (line 28)
6. Deploy: `npm run deploy`

**That's it!** Your form will be working in minutes.
