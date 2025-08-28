# Generated Protocol Buffer modules
try:
    from . import stock_pb2
except ImportError:
    # If the compiled module is missing, provide a dummy placeholder
        class DummyStockPb2:
            class Stock:
                def __init__(self):
                    self.id = 0
                    self.product_type_id = 0
                    self.product_name = ""
                    self.product_number = ""
                    self.company = ""
                    self.thickness = ""
                    self.width = ""
                    self.height = ""
                    self.amount_present = 0
                    self.unit_price = 0.0
                    self.created_at = ""
                    self.updated_at = ""
                    self.last_ordered_at = ""

            class CreateStockRequest:
                def __init__(self):
                    self.product_type_id = 0
                    self.product_name = ""
                    self.product_number = ""
                    self.company = ""
                    self.thickness = ""
                    self.width = ""
                    self.height = ""
                    self.amount_present = 0
                    self.unit_price = 0.0

            class BatchCreateStockRequest:
                def __init__(self):
                    self.items = []

            class UpdateStockRequest:
                def __init__(self):
                    self.product_type_id = 0
                    self.product_name = ""
                    self.product_number = ""
                    self.company = ""
                    self.thickness = ""
                    self.width = ""
                    self.height = ""
                    self.amount_present = 0
                    self.unit_price = 0.0

        stock_pb2 = DummyStockPb2()
