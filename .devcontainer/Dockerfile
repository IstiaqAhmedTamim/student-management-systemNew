# Base image with Ubuntu
FROM mcr.microsoft.com/devcontainers/base:ubuntu

# Install Java 17, Maven, Node.js, npm
RUN apt-get update && apt-get install -y \
    openjdk-17-jdk \
    maven \
    curl \
    git \
    && curl -fsSL https://deb.nodesource.com/setup_18.x | bash - \
    && apt-get install -y nodejs \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

# Set JAVA_HOME
ENV JAVA_HOME=/usr/lib/jvm/java-17-openjdk-amd64
ENV PATH=$JAVA_HOME/bin:$PATH

# Verify installations
RUN java -version \
    && mvn -version \
    && node -v \
    && npm -v

