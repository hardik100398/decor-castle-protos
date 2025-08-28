# Using Protocol Buffers with Decor Castle

This guide explains how to use the Protocol Buffer definitions with both frontend and backend.

## Frontend Integration (TypeScript/React)

The Protocol Buffer definitions are available as a local package that you can install with Yarn:

```bash
# Navigate to the frontend directory
cd /home/hardik/Desktop/decor-castle/decor-castle-frontend

# Install the proto package as a dependency
yarn add file:../decor-castle-protos
```

Then in your TypeScript code:

```typescript
// Import the generated types
import { Stock, CreateStockRequest, BatchCreateStockRequest } from 'decor-castle-protos';

// Example usage:
const stockItem: CreateStockRequest = {
  productTypeId: 1,
  productNumber: "ABC123",
  amountPresent: 10,
  // Optional fields
  productName: "Sample Product"
};

// Creating a batch request
const batchRequest: BatchCreateStockRequest = {
  items: [stockItem]
};
```

## Backend Integration (Python/FastAPI)

For the backend, you need to activate the virtual environment first:

```bash
# Navigate to the backend directory
cd /home/hardik/Desktop/decor-castle/decor-castle-backend

# Activate the virtual environment
source venv/bin/activate

# Install the proto package as a development dependency
pip install -e ../decor-castle-protos
```

Then in your Python code:

```python
# Import the proto module
from decor_castle_protos import stock_pb2

# Create proto messages
batch_request = stock_pb2.BatchCreateStockRequest()
stock_item = stock_pb2.CreateStockRequest()

# Set fields
stock_item.productTypeId = 1
stock_item.productNumber = "ABC123"
stock_item.amountPresent = 10

# Add to batch
batch_request.items.append(stock_item)
```

## Updating the Protocol Definitions

If you need to update the proto definitions:

1. Edit the `.proto` files in the `/home/hardik/Desktop/decor-castle/decor-castle-protos` directory
2. Regenerate the code:

```bash
cd /home/hardik/Desktop/decor-castle/decor-castle-protos
./generate.sh
```

3. Rebuild the package:

```bash
# For TypeScript
yarn build

# No additional step needed for Python as it uses the generated files directly
```

4. Update the version in both `package.json` and `setup.py` if necessary

5. Reinstall in both frontend and backend projects

## Version Control

When making changes to the Protocol Buffer definitions, follow these steps:

1. Create a new branch in the proto repository
2. Make your changes and test them
3. Update the version number
4. Merge to main
5. Update the frontend and backend to use the new version
