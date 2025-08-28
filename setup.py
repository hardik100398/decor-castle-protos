from setuptools import setup, find_packages
import os

# Ensure generated Python modules have __init__.py files
py_generated_dir = os.path.join('generated', 'py')
if not os.path.exists(os.path.join(py_generated_dir, '__init__.py')):
    with open(os.path.join(py_generated_dir, '__init__.py'), 'w') as f:
        f.write('# Generated Protocol Buffer modules\n')

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
)
