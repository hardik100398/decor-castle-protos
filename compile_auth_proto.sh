#!/bin/bash

# Navigate to the protos directory
cd /home/hardik/Desktop/decor-castle/decor-castle-protos

# Ensure directories exist
mkdir -p decor_castle_protos

# Generate Python proto files
python -m pip install protobuf
python -m grpc_tools.protoc \
    --python_out=decor_castle_protos \
    --proto_path=. \
    auth.proto

# Copy __init__.py to make it a proper package
echo "# Generated proto package" > decor_castle_protos/__init__.py
echo "from .auth_pb2 import *" >> decor_castle_protos/__init__.py

# Install the package in development mode
pip install -e .

echo "Proto files compiled successfully!"
