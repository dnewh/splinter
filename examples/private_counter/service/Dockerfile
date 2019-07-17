# Copyright 2019 Cargill Incorporated
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

FROM ubuntu:bionic as BUILDER

RUN apt-get update \
 && apt-get install -y \
 curl \
 gcc \
 libssl-dev \
 pkg-config \
 unzip

RUN curl https://sh.rustup.rs -sSf | sh -s -- -y
RUN curl -OLsS https://github.com/google/protobuf/releases/download/v3.5.1/protoc-3.5.1-linux-x86_64.zip \
    && unzip -o protoc-3.5.1-linux-x86_64.zip -d /protoc3 \
    && rm protoc-3.5.1-linux-x86_64.zip

ENV PATH=$PATH:/protoc3/bin:/root/.cargo/bin

# Copy over libsplinter, protos and create the example folder, for the
# relative dependencies
COPY ./protos /protos
COPY ./libsplinter /libsplinter
RUN mkdir -p /examples/private_counter

# Create an empty project, copy over the Cargo toml, and buld the deps first
WORKDIR /examples/private_counter

RUN USER=root cargo new --bin service --name private-counter

WORKDIR /examples/private_counter/service
COPY ./examples/private_counter/service/Cargo.toml ./Cargo.toml
RUN cargo build --release

# Copy over the source and build the app
RUN rm ./src/*.rs
COPY ./examples/private_counter/service/src ./src
RUN rm ./target/release/private-counter* ./target/release/deps/private_counter*
RUN cargo build --release

# Create the standalone image
FROM ubuntu:bionic

RUN apt-get update \
 && apt-get install -y libssl1.1 \
 && apt-get clean \
 && rm -rf /var/lib/apt/lists/*

COPY --from=BUILDER /examples/private_counter/service/target/release/private-counter /

EXPOSE 8000
CMD ["/private-counter"]