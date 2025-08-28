#!/bin/bash

# Simple script to compile protos during package installation

echo "Compiling Protocol Buffers..."

# Check if protoc is installed
if ! command -v protoc &> /dev/null; then
    echo "Error: protoc not found. Please install protobuf compiler."
    exit 1
fi

# Generate Python code
echo "Generating Python code..."
protoc --python_out=./generated/py/ ./*.proto

# Generate TypeScript code if ts-proto is installed
if [ -d "node_modules" ] && [ -f "node_modules/.bin/protoc-gen-ts_proto" ]; then
    echo "Generating TypeScript code..."
    protoc --plugin=./node_modules/.bin/protoc-gen-ts_proto --ts_proto_out=./generated/ts/ ./*.proto
fi

echo "Protocol Buffer compilation complete!"
