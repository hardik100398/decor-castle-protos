#!/bin/bash

# Clean script for decor-castle-protos
# This script removes generated files and build artifacts

echo "Cleaning build artifacts..."

# Remove dist directory
if [ -d "dist" ]; then
    echo "Removing dist directory..."
    rm -rf dist
fi

# Remove egg-info directory
if [ -d "decor_castle_protos.egg-info" ]; then
    echo "Removing egg-info directory..."
    rm -rf decor_castle_protos.egg-info
fi

# Remove generated directory
if [ -d "generated" ]; then
    echo "Removing generated directory..."
    rm -rf generated
fi

echo "Clean complete!"
echo "To regenerate files, run:"
echo "  yarn generate     # Generate protobuf files"
echo "  yarn build        # Build TypeScript"
echo "  pip install -e .  # Install Python package in development mode"
