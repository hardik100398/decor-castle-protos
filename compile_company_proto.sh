#!/bin/bash
set -e

echo "Compiling company.proto..."

# For Python
echo "Generating Python code..."
python -m grpc_tools.protoc \
  --python_out=./decor_castle_protos \
  --grpc_python_out=./decor_castle_protos \
  --proto_path=. \
  company.proto

# For TypeScript
echo "Generating TypeScript code..."
protoc \
  --plugin=protoc-gen-ts=./node_modules/.bin/protoc-gen-ts \
  --ts_out=./generated/ts \
  --proto_path=. \
  company.proto

echo "Company proto compiled successfully!"
