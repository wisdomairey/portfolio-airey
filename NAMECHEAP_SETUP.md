# Namecheap DNS Setup Guide for wisdomairey.me

## Step-by-Step Instructions for Namecheap

### Step 1: Access DNS Settings

1. Log in to your **Namecheap account**
2. Go to **Domain List**
3. Find **wisdomairey.me** and click **Manage**
4. Click on the **Advanced DNS** tab

### Step 2: Configure DNS Records for Apex Domain

Since you're using `wisdomairey.me` (apex domain), you need to add **A records** pointing to GitHub Pages.

#### Add the Following A Records:

1. Click **Add New Record**
2. Add these **4 A records** one by one:

| Type | Host | Value | TTL |
|------|------|-------|-----|
| A Record | @ | 185.199.108.153 | Automatic |
| A Record | @ | 185.199.109.153 | Automatic |
| A Record | @ | 185.199.110.153 | Automatic |
| A Record | @ | 185.199.111.153 | Automatic |

**Detailed Instructions for Each Record:**
- **Type**: Select "A Record" from dropdown
- **Host**: Enter `@` (this represents your root domain)
- **Value**: Enter the IP address
- **TTL**: Select "Automatic" or "1 min" for faster testing

#### Add CNAME Record for WWW (Optional but Recommended):

This ensures `www.wisdomairey.me` also works:

| Type | Host | Value | TTL |
|------|------|-------|-----|
| CNAME Record | www | wisdomairey.github.io. | Automatic |

**Instructions:**
- **Type**: Select "CNAME Record"
- **Host**: Enter `www`
- **Value**: Enter `wisdomairey.github.io.` (note the dot at the end - Namecheap may add it automatically)
- **TTL**: Select "Automatic"

### Step 3: Remove Conflicting Records (Important!)

**Check for and remove any existing records that might conflict:**

Common conflicting records to remove:
- ❌ Any existing A records pointing to @ 
- ❌ URL Redirect Records pointing to @
- ❌ Namecheap Parking Page records

**How to remove:**
1. Look for the record in your DNS settings
2. Click the **trash can icon** on the right
3. Confirm deletion

### Step 4: Save Changes

1. Click **Save All Changes** button at the bottom
2. Wait for confirmation message

### Step 5: Deploy Your Site

Now that DNS is configured, deploy your site:

```bash
# Commit and push changes
git add .
git commit -m "Add custom domain configuration"
git push origin main

# Deploy to GitHub Pages
npm run deploy
```

### Step 6: Configure GitHub Pages

1. Go to your repository: https://github.com/wisdomairey/portfolio-airey
2. Click **Settings** > **Pages**
3. Under **Custom domain**, enter: `wisdomairey.me`
4. Click **Save**
5. GitHub will check your DNS configuration
6. **Wait for the DNS check to pass** (green checkmark)
7. Once verified, check **Enforce HTTPS** (may need to wait 10-30 minutes)

### Step 7: Wait for DNS Propagation

DNS changes typically take:
- **Namecheap**: 5-30 minutes (usually very fast)
- **Global propagation**: Up to 24-48 hours

**Check propagation status:**
```bash
# Check if DNS has propagated
nslookup wisdomairey.me
```

Or use online tools:
- https://dnschecker.org/#A/wisdomairey.me
- https://www.whatsmydns.net/#A/wisdomairey.me

### Visual Guide for Namecheap

Your Advanced DNS page should look like this:

```
┌─────────────────────────────────────────────────────────────┐
│ HOST RECORDS                                                 │
├──────────┬──────────┬─────────────────────┬─────────────────┤
│ Type     │ Host     │ Value               │ TTL             │
├──────────┼──────────┼─────────────────────┼─────────────────┤
│ A Record │ @        │ 185.199.108.153     │ Automatic       │
│ A Record │ @        │ 185.199.109.153     │ Automatic       │
│ A Record │ @        │ 185.199.110.153     │ Automatic       │
│ A Record │ @        │ 185.199.111.153     │ Automatic       │
│ CNAME    │ www      │ wisdomairey.github.io│ Automatic      │
└──────────┴──────────┴─────────────────────┴─────────────────┘
```

## Common Namecheap Issues & Solutions

### Issue 1: "DNS Check Failed" on GitHub

**Solution:**
- Wait longer (DNS can take time)
- Verify all 4 A records are correct
- Check for typos in IP addresses
- Remove any conflicting records

### Issue 2: Site Shows Namecheap Parking Page

**Solution:**
- Remove the Namecheap parking page redirect
- In Advanced DNS, look for URL Redirect Records and delete them
- Wait 5-10 minutes for changes to propagate

### Issue 3: WWW Not Working

**Solution:**
- Add the CNAME record for `www` pointing to `wisdomairey.github.io`
- Make sure there's no conflicting A record for `www`

### Issue 4: Changes Not Taking Effect

**Solution:**
- Clear browser cache (Ctrl + Shift + Delete)
- Try in incognito/private mode
- Wait longer (up to 30 minutes for Namecheap)
- Flush DNS cache:
  ```bash
  # Windows
  ipconfig /flushdns
  
  # Mac/Linux
  sudo dscacheutil -flushcache
  ```

### Issue 5: SSL Certificate Error

**Solution:**
- Don't enable "Enforce HTTPS" until DNS fully propagates
- Wait 10-30 minutes after DNS verification
- GitHub needs time to issue SSL certificate
- Check back in a few hours if still not working

## Verification Checklist

Before considering setup complete:

- [ ] All 4 A records added in Namecheap
- [ ] CNAME record for www added (optional)
- [ ] No conflicting DNS records
- [ ] Changes saved in Namecheap
- [ ] Code pushed to GitHub
- [ ] Site deployed (`npm run deploy`)
- [ ] Custom domain added in GitHub Pages settings
- [ ] DNS check passes on GitHub (green checkmark)
- [ ] Site loads at wisdomairey.me
- [ ] HTTPS enforced (after certificate issued)

## Expected Timeline

| Step | Time |
|------|------|
| Add DNS records in Namecheap | 2 minutes |
| DNS propagation starts | Immediate |
| DNS fully propagated | 5-30 minutes |
| GitHub DNS verification | 5-10 minutes after propagation |
| HTTPS certificate issued | 10-30 minutes after verification |
| **Total time** | **20-70 minutes (typically ~30 min)** |

## Testing Your Setup

### Test 1: Check DNS Records
```bash
nslookup wisdomairey.me
```

Expected output should show GitHub's IP addresses.

### Test 2: Check WWW Redirect
```bash
nslookup www.wisdomairey.me
```

Should show CNAME pointing to wisdomairey.github.io

### Test 3: Access Your Site
- Visit: http://wisdomairey.me (should work after DNS)
- Visit: https://wisdomairey.me (should work after HTTPS enabled)
- Visit: https://www.wisdomairey.me (should redirect to wisdomairey.me)

## Need Help?

If you encounter issues:

1. **Check Namecheap's DNS status**: Look for any warning messages in Advanced DNS
2. **Verify GitHub Pages status**: Check Settings > Pages for any error messages
3. **Use DNS checker tools**: https://dnschecker.org to see propagation progress
4. **Wait longer**: Most issues resolve themselves with time (up to 24 hours)

## Quick Reference

**Your Domain**: wisdomairey.me  
**GitHub Pages URL**: wisdomairey.github.io/portfolio-airey  
**Custom Domain URL**: https://wisdomairey.me  
**CNAME File Location**: public/CNAME  
**DNS Provider**: Namecheap

---

**Ready to proceed?** Follow the steps above and your site should be live on your custom domain within 30 minutes! 🚀
