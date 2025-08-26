from setuptools import setup, find_packages

setup(
    name="decor_castle_protos",
    version="0.1.0",
    description="Protocol Buffer definitions for Decor Castle",
    author="",
    author_email="",
    packages=find_packages("generated/py"),
    package_dir={"": "generated/py"},
    python_requires=">=3.7",
    install_requires=[
        "protobuf>=3.19.0",
    ],
)
