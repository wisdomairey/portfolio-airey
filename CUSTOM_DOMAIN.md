# Custom Domain Setup Guide

## Setting Up a Custom Domain for GitHub Pages

### Step 1: Update CNAME File

Replace the content in `public/CNAME` with your actual domain:

```
yourdomain.com
```

Or if you want to use a subdomain:

```
portfolio.yourdomain.com
```

**Important**: Only include the domain name, no `http://` or `https://` prefix.

### Step 2: Configure DNS Settings

You need to configure DNS records with your domain provider (e.g., GoDaddy, Namecheap, Cloudflare, Google Domains).

#### Option A: Apex Domain (yourdomain.com)

Add these **A records** pointing to GitHub Pages:

```
Type: A
Name: @
Value: 185.199.108.153

Type: A
Name: @
Value: 185.199.109.153

Type: A
Name: @
Value: 185.199.110.153

Type: A
Name: @
Value: 185.199.111.153
```

And optionally add a **CNAME record** for www:

```
Type: CNAME
Name: www
Value: wisdomairey.github.io
```

#### Option B: Subdomain (portfolio.yourdomain.com)

Add a **CNAME record**:

```
Type: CNAME
Name: portfolio (or your preferred subdomain)
Value: wisdomairey.github.io
```

### Step 3: Configure GitHub Pages

1. Push your changes with the CNAME file:
   ```bash
   git add public/CNAME next.config.js
   git commit -m "Add custom domain configuration"
   git push origin main
   ```

2. Deploy your site:
   ```bash
   npm run deploy
   ```

3. Go to your GitHub repository settings:
   - Navigate to **Settings** > **Pages**
   - Under **Custom domain**, enter your domain name
   - Click **Save**
   - Check **Enforce HTTPS** (after DNS propagates)

### Step 4: Wait for DNS Propagation

DNS changes can take anywhere from a few minutes to 48 hours to propagate globally. You can check the status using:

```bash
# Check A records
nslookup yourdomain.com

# Check CNAME records
nslookup portfolio.yourdomain.com
```

Or use online tools like:
- https://dnschecker.org/
- https://www.whatsmydns.net/

### Step 5: Enable HTTPS

Once DNS is configured and propagated:

1. Go to **Settings** > **Pages** in your GitHub repository
2. Check the **Enforce HTTPS** option
3. Wait for the SSL certificate to be issued (usually a few minutes)

## Common DNS Provider Instructions

### Cloudflare
1. Go to DNS settings
2. Add the A/CNAME records as specified above
3. Set Proxy status to "DNS only" (gray cloud) initially
4. After verification, you can enable proxy (orange cloud)

### Namecheap
1. Go to Domain List > Manage > Advanced DNS
2. Add new records with the values above
3. Set TTL to Automatic or 1 min for faster testing

### GoDaddy
1. Go to DNS Management
2. Add records with the values specified above
3. Default TTL is fine (600 seconds or 1 hour)

### Google Domains
1. Go to DNS settings
2. Add custom resource records
3. Enter the A/CNAME records as specified

## Troubleshooting

### Domain Not Working
- **Check DNS propagation**: Use dnschecker.org to verify your DNS records
- **Clear browser cache**: Try in incognito/private mode
- **Wait longer**: DNS can take up to 48 hours to fully propagate
- **Verify CNAME file**: Ensure it contains only the domain name, no extra characters

### HTTPS Not Available
- Wait for DNS to fully propagate first
- GitHub Pages needs to verify domain ownership before issuing SSL
- This can take 1-24 hours after DNS propagation
- Check GitHub Pages settings for any error messages

### Site Shows 404
- Ensure the CNAME file is in the `public` directory
- Verify `basePath` is removed or commented out in `next.config.js`
- Redeploy the site after making changes: `npm run deploy`
- Check that the `gh-pages` branch has the CNAME file

### Mixed Content Warnings
- Ensure all resources (images, fonts, scripts) use HTTPS
- Update any hardcoded HTTP URLs to HTTPS or protocol-relative URLs

## Switching Back to GitHub Subdomain

If you want to switch back to using `yourusername.github.io/repository-name`:

1. Delete the `public/CNAME` file
2. Uncomment `basePath: '/portfolio-airey'` in `next.config.js`
3. Remove custom domain from GitHub Pages settings
4. Redeploy: `npm run deploy`

## Example Domain Configurations

### Example 1: Apex Domain
```
Domain: example.com
CNAME file content: example.com
DNS: A records to GitHub IPs
GitHub Pages: example.com
```

### Example 2: www Subdomain
```
Domain: www.example.com
CNAME file content: www.example.com
DNS: CNAME to wisdomairey.github.io
GitHub Pages: www.example.com
```

### Example 3: Custom Subdomain
```
Domain: portfolio.example.com
CNAME file content: portfolio.example.com
DNS: CNAME to wisdomairey.github.io
GitHub Pages: portfolio.example.com
```

## Additional Resources

- [GitHub Docs: Custom Domain](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)
- [GitHub Docs: Apex Domain](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site#configuring-an-apex-domain)
- [GitHub Docs: Subdomain](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site#configuring-a-subdomain)
