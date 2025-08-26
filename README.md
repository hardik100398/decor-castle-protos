# Decor Castle Protocol Buffers

This repository contains the Protocol Buffer definitions for the Decor Castle application. These definitions serve as the single source of truth for data structures shared between the frontend and backend.

## Structure

- `stock.proto`: Definitions for stock-related data structures

## Usage

### For Frontend (TypeScript)

1. Install the required packages:

```bash
npm install --save-dev ts-proto protobufjs
```

2. Generate TypeScript types:

```bash
protoc --plugin=./node_modules/.bin/protoc-gen-ts_proto --ts_proto_out=./src/types/ ./stock.proto
```

### For Backend (Python)

1. Install the required packages:

```bash
pip install protobuf
```

2. Generate Python classes:

```bash
protoc --python_out=./schemas/ ./stock.proto
```

## Benefits

- **Type Safety**: Strong typing across frontend and backend
- **Validation**: Automatic validation of data structures
- **Documentation**: Self-documenting data structures
- **Versioning**: Explicit versioning of data structures
- **Performance**: Efficient binary serialization (when needed)

## Updating Protos

When updating protocol buffer definitions:

1. Update the `.proto` files in this repository
2. Regenerate the TypeScript and Python code
3. Update the version number if there are breaking changes
4. Commit and push changes
5. Update dependencies in both frontend and backend projects
