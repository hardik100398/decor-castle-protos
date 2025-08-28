#!/bin/bash

# Ensure output directories exist
echo "Setting up directories..."
mkdir -p ./generated/ts
mkdir -p ./generated/py
mkdir -p ./decor_castle_protos

# List all proto files
PROTO_FILES=`ls ./*.proto`
echo "Found proto files: $PROTO_FILES"

# Generate TypeScript code
echo "Generating TypeScript code..."
if [ -d "node_modules" ]; then
  protoc --plugin=./node_modules/.bin/protoc-gen-ts_proto --ts_proto_out=./generated/ts/ $PROTO_FILES
else
  echo "Node modules not found. Run 'npm install' first."
  exit 1
fi

# Generate Python code for both locations
echo "Generating Python code..."
# Generate in generated/py directory (for TypeScript package compatibility)
protoc --python_out=./generated/py/ $PROTO_FILES

# Generate in decor_castle_protos directory (for Python package)
protoc --python_out=./decor_castle_protos/ $PROTO_FILES

# Create __init__.py for decor_castle_protos
echo "# Generated proto package" > decor_castle_protos/__init__.py
for proto_file in $PROTO_FILES; do
  module_name=$(basename $proto_file .proto)
  echo "from .${module_name}_pb2 import *" >> decor_castle_protos/__init__.py
done

# Create __init__.py for generated/py
echo "# Generated proto package" > ./generated/py/__init__.py
for proto_file in $PROTO_FILES; do
  module_name=$(basename $proto_file .proto)
  echo "from .${module_name}_pb2 import *" >> ./generated/py/__init__.py
done

echo "Code generation complete!"
