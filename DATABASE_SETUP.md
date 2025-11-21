# Database Setup Guide - Neon PostgreSQL

This guide will walk you through setting up a **FREE** Neon PostgreSQL database for your CropFresh application.

## Step 1: Create Neon Account

1. Go to **https://neon.tech**
2. Click **"Sign Up"** (top right)
3. Sign up using:
   - GitHub account (recommended - fastest)
   - Email and password
   - Google account
4. **No credit card required!** ✅

## Step 2: Create New Project

1. After signing in, you'll see the Neon dashboard
2. Click **"Create a project"** or **"New Project"**
3. Configure your project:
   - **Project Name**: `cropfresh-web` (or any name you prefer)
   - **Region**: Choose closest to your location (e.g., Asia Pacific - Mumbai for India)
   - **Postgres Version**: Use default (latest version, typically 16)
4. Click **"Create Project"**
5. Wait ~10 seconds for provisioning

## Step 3: Get Connection String

1. After project creation, you'll see the **Connection Details** page
2. Look for the **Connection String** section
3. You'll see something like:
   ```
   postgresql://username:password@ep-xyz-abc123.region.aws.neon.tech/neondb?sslmode=require
   ```
4. **Copy this entire string** - you'll need it in the next step

### Alternative: Find Connection String Later

If you closed the page:
1. Go to your Neon dashboard: https://console.neon.tech
2. Select your project (`cropfresh-web`)
3. Click on **"Connection Details"** or **"Dashboard"**
4. Copy the connection string

## Step 4: Update Environment Variables

1. Open your project in your code editor
2. Locate the **`.env`** file in the root directory (`d:\cropfresh-web\.env`)
3. Find or add the line that starts with `DATABASE_URL=`
4. Replace it with your Neon connection string:
   ```env
   DATABASE_URL="postgresql://username:password@ep-xyz-abc123.region.aws.neon.tech/neondb?sslmode=require"
   ```
   ⚠️ **Important**: Keep the quotes around the URL!

5. Add admin password for the dashboard:
   ```env
   ADMIN_PASSWORD="your-secure-password-here"
   ```
   Choose a strong password for accessing the admin dashboard.

6. Save the file

## Step 5: Run Database Migrations

Once you've updated the `.env` file, I'll run the commands to:
1. Generate Prisma Client
2. Push the database schema to Neon
3. Verify the connection

### Commands I'll run:
```bash
# Generate Prisma Client
npx prisma generate

# Push schema to database (creates tables)
npx prisma db push

# Open Prisma Studio to view database (optional)
npx prisma studio
```

## Verification

After setup, you can verify everything works by:
1. Opening Prisma Studio: `npx prisma studio`
2. You should see three tables:
   - `EarlyAccessSubmission`
   - `PageView`
   - `FormInteraction`

## Neon Free Tier Limits

Your free tier includes:
- ✅ **10 GB storage** (~50,000+ form submissions)
- ✅ **3 projects**
- ✅ **Unlimited compute hours** (auto-suspend after 5 minutes of inactivity)
- ✅ **No credit card required**
- ✅ **No time limit** - free forever!

## Troubleshooting

### Connection Error
- Verify the DATABASE_URL is correct (no typos)
- Make sure you included `?sslmode=require` at the end
- Check that you wrapped the URL in quotes

### "Project not found" Error
- Make sure you selected the correct region when creating the project
- Verify you're using the connection string from the correct project

### SSL/TLS Error
- Ensure `?sslmode=require` is at the end of your DATABASE_URL
- If using Prisma version 5+, this is required for Neon

## Ready?

Once you've completed steps 1-4 above, let me know and I'll run the migration commands to set up your database tables! 🚀
