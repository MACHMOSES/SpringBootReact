# -----------------------------
# FRONTEND BUILD STAGE
# -----------------------------
FROM node:20-alpine AS frontend-build
WORKDIR /workspace/frontendApp

# Install build tools
RUN apk add --no-cache python3 make bash

# Enable modern Yarn (works for both v1 & v3)
RUN corepack enable && corepack prepare yarn@1.22.19 --activate

# Copy Yarn files and project files
COPY package.json yarn.lock ./

# Copy frontend sources
COPY . .

# Install dependencies
RUN yarn install --frozen-lockfile

# Run your Webpack build (adjust script names if needed)
RUN yarn run build

# Detect build folder and copy build artifacts to a unified location


    
FROM maven:3.9.11-eclipse-temurin-21-alpine AS maven-build
WORKDIR /workspace
COPY pom.xml .
# copy full java sources
COPY src ./src
# bring built frontend assets from node stage into maven target
COPY --from=frontend-build /workspace/frontendApp/build ./target/classes/static/build

RUN mvn -DskipTests package

FROM eclipse-temurin:21-jre-jammy
WORKDIR /app
# copy built jar (adjust glob if classifier/name differs)
COPY --from=maven-build /workspace/target/fullstack-application-0.0.1-SNAPSHOT.jar app.jar
ENTRYPOINT ["java", "-jar", "/app/app.jar"]