#!/bin/bash

# Deployment script for Vercel
echo "🚀 Preparing PRAESIDIUM for Vercel deployment..."

# Clean previous builds
echo "🧹 Cleaning previous builds..."
rm -rf dist/

# Install dependencies
echo "📦 Installing dependencies with pnpm..."
pnpm install

# Build for production
echo "🔨 Building for production..."
pnpm build

# Check if build was successful
if [ $? -eq 0 ]; then
    echo "✅ Build successful! Ready for Vercel deployment."
    echo ""
    echo "To deploy to Vercel:"
    echo "1. Install Vercel CLI: npm i -g vercel"
    echo "2. Run: vercel --prod"
    echo ""
    echo "Or connect your GitHub repo to Vercel dashboard for automatic deployments."
else
    echo "❌ Build failed. Please check the errors above."
    exit 1
fi
