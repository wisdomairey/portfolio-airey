# Subdomain Setup: portfolio.wisdomairey.me on Namecheap

## Why Use a Subdomain?

Your main domain `wisdomairey.me` is already being used by another GitHub Pages repository. Using a subdomain like `portfolio.wisdomairey.me` allows you to have multiple sites:

- **wisdomairey.me** → Your main site (existing)
- **portfolio.wisdomairey.me** → This portfolio site (new)

## Step-by-Step Setup for Subdomain

### Step 1: Update CNAME File ✅

Already done! Your `public/CNAME` now contains: `portfolio.wisdomairey.me`

### Step 2: Configure Namecheap DNS (Much Simpler!)

1. Log in to **Namecheap**
2. Go to **Domain List** → **Manage** (for wisdomairey.me)
3. Click **Advanced DNS** tab
4. Click **Add New Record**

Add **ONE CNAME record**:

| Type         | Host      | Value                  | TTL       |
| ------------ | --------- | ---------------------- | --------- |
| CNAME Record | portfolio | wisdomairey.github.io. | Automatic |

**Field Details:**

- **Type**: Select "CNAME Record"
- **Host**: Enter `portfolio` (NOT the full domain)
- **Value**: Enter `wisdomairey.github.io` or `wisdomairey.github.io.`
- **TTL**: Select "Automatic" or "1 min"

⚠️ **Important**:

- Use just `portfolio` in the Host field (Namecheap adds .wisdomairey.me automatically)
- The value should be `wisdomairey.github.io` (your GitHub username + github.io)

### Step 3: Save DNS Changes

Click **Save All Changes** at the bottom of the page.

### Step 4: Deploy Your Site

```bash
# Commit the CNAME change
git add public/CNAME
git commit -m "Update to subdomain portfolio.wisdomairey.me"
git push origin main

# Deploy to GitHub Pages
npm run deploy
```

### Step 5: Configure GitHub Pages

1. Go to: https://github.com/wisdomairey/portfolio-airey/settings/pages
2. Under **Custom domain**, enter: `portfolio.wisdomairey.me`
3. Click **Save**
4. Wait for DNS check to pass (green checkmark) ✅
5. Check **Enforce HTTPS** after verification

### Step 6: Wait for DNS Propagation

Subdomain CNAME records typically propagate faster:

- **Namecheap**: 5-15 minutes
- **Global**: Up to 24 hours

**Check propagation:**

```bash
nslookup portfolio.wisdomairey.me
```

Or use: https://dnschecker.org/#CNAME/portfolio.wisdomairey.me

## What Your Namecheap DNS Should Look Like

```
┌─────────────────────────────────────────────────────────────┐
│ HOST RECORDS                                                 │
├──────────┬──────────┬─────────────────────┬─────────────────┤
│ Type     │ Host     │ Value               │ TTL             │
├──────────┼──────────┼─────────────────────┼─────────────────┤
│ CNAME    │ portfolio│ wisdomairey.github.io│ Automatic      │
└──────────┴──────────┴─────────────────────┴─────────────────┘

Your existing records for @ (main domain) remain unchanged
```

## Common Issues & Solutions

### Issue 1: "Domain already taken" Error

**Cause**: The subdomain is also being used by another repository  
**Solution**: Try a different subdomain:

- `portfolio.wisdomairey.me`
- `work.wisdomairey.me`
- `projects.wisdomairey.me`
- `showcase.wisdomairey.me`

Update `public/CNAME` and the Namecheap Host field accordingly.

### Issue 2: DNS Check Not Passing

**Solutions**:

- Make sure Host is `portfolio` (not `portfolio.wisdomairey.me`)
- Verify Value is `wisdomairey.github.io`
- Wait longer (up to 30 minutes)
- Clear DNS cache:
  ```bash
  # Windows
  ipconfig /flushdns
  ```

### Issue 3: Site Shows 404

**Solutions**:

- Ensure you've deployed after CNAME change: `npm run deploy`
- Check that `gh-pages` branch has the CNAME file
- Verify GitHub Pages settings show the correct subdomain
- Wait for DNS to fully propagate

### Issue 4: Still Getting "Domain Taken" Error

**Solution**: The subdomain might also be in use. Check your other repository:

1. Go to your other repository settings
2. Navigate to Settings > Pages
3. Check what domain is configured
4. If it shows a subdomain you need, remove it there first

## Verification Steps

After setup, verify everything works:

### 1. Check DNS Resolution

```bash
nslookup portfolio.wisdomairey.me
```

Should return: `wisdomairey.github.io`

### 2. Test HTTP Access

Visit: http://portfolio.wisdomairey.me

### 3. Test HTTPS (after certificate issued)

Visit: https://portfolio.wisdomairey.me

### 4. Check Certificate

Click the padlock in browser to verify SSL certificate is valid

## Timeline for Subdomain

| Step                          | Expected Time      |
| ----------------------------- | ------------------ |
| Add CNAME record in Namecheap | 2 minutes          |
| DNS propagation               | 5-15 minutes       |
| GitHub DNS verification       | 2-5 minutes        |
| HTTPS certificate issued      | 10-20 minutes      |
| **Total**                     | **~20-45 minutes** |

## Your Site Structure

After setup, you'll have:

- **Main site**: https://wisdomairey.me (your existing site)
- **Portfolio**: https://portfolio.wisdomairey.me (this site)

Both sites can coexist on the same domain!

## Alternative: Remove Domain from Other Repository

If you want to use the main domain `wisdomairey.me` for THIS portfolio instead:

1. Find which repository is using it (check your GitHub repositories)
2. Go to that repository's Settings > Pages
3. Remove the custom domain
4. Change `public/CNAME` back to `wisdomairey.me`
5. Follow the apex domain setup from `NAMECHEAP_SETUP.md`

## Quick Commands

```bash
# Deploy with subdomain
git add public/CNAME
git commit -m "Use portfolio.wisdomairey.me subdomain"
git push origin main
npm run deploy

# Check DNS
nslookup portfolio.wisdomairey.me

# Test site
curl -I http://portfolio.wisdomairey.me
```

---

**Your subdomain should be live within 20-45 minutes!** 🚀

If you still get the "domain taken" error, you may need to use a different subdomain like `projects.wisdomairey.me` or `work.wisdomairey.me`.
