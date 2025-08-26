#!/bin/bash

# Generate TypeScript code
echo "Generating TypeScript code..."
if [ -d "node_modules" ]; then
  protoc --plugin=./node_modules/.bin/protoc-gen-ts_proto --ts_proto_out=./generated/ts/ ./*.proto
else
  echo "Node modules not found. Run 'npm install' first."
  exit 1
fi

# Generate Python code
echo "Generating Python code..."
protoc --python_out=./generated/py/ ./*.proto

echo "Code generation complete!"
