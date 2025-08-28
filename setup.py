from setuptools import setup, find_packages, Command
import os
import subprocess
import sys

# Create directories if they don't exist
os.makedirs('generated/py', exist_ok=True)

# Ensure generated Python modules have __init__.py files
py_generated_dir = os.path.join('generated', 'py')
if not os.path.exists(os.path.join(py_generated_dir, '__init__.py')):
    with open(os.path.join(py_generated_dir, '__init__.py'), 'w') as f:
        f.write('# Generated Protocol Buffer modules\n')

# Custom command to compile proto files
class CompileProtoCommand(Command):
    description = 'Compile Protocol Buffer definitions'
    user_options = []
    
    def initialize_options(self):
        pass
    
    def finalize_options(self):
        pass
    
    def run(self):
        # Run the compile script
        try:
            if os.path.exists('./compile_protos.sh'):
                subprocess.check_call(['bash', './compile_protos.sh'])
            else:
                print("Warning: compile_protos.sh not found.")
                # Try direct protoc command
                subprocess.check_call(['protoc', '--python_out=./generated/py/', './*.proto'])
        except subprocess.CalledProcessError as e:
            print(f"Warning: Failed to compile proto files: {e}")
            print("Installation will continue, but generated files may be missing.")
        except FileNotFoundError:
            print("Warning: protoc compiler not found. Proto files not compiled.")
            print("Installation will continue, but generated files may be missing.")

setup(
    name="decor_castle_protos",
    version="0.1.0",
    description="Protocol Buffer definitions for Decor Castle",
    author="",
    author_email="",
    package_dir={"decor_castle_protos": "generated/py"},
    packages=["decor_castle_protos"],
    python_requires=">=3.7",
    install_requires=[
        "protobuf>=3.19.0",
    ],
    cmdclass={
        'compile_proto': CompileProtoCommand,
    },
    include_package_data=True,
    package_data={
        "decor_castle_protos": ["*.py", "__pycache__/*"],
    },
    data_files=[('proto_files', ['stock.proto'])],
)
