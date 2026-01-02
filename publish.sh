#!/bin/bash

# Script to prepare and publish the Banglish Tailwind package

echo "Preparing Banglish Tailwind Framework for distribution..."

# Run build
npm run build

# Run tests
npm test

# Check if build was successful
if [ -f "dist/banglish.css" ] && [ -f "dist/banglish.min.css" ]; then
    echo "✅ Build completed successfully"
    echo "✅ Files ready for distribution:"
    ls -la dist/
else
    echo "❌ Build failed, dist files not found"
    exit 1
fi

echo "Banglish Tailwind Framework is ready for distribution!"
echo "To publish to npm, run: npm publish"