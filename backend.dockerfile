# -----------------------------
# BACKEND DOCKERFILE
# -----------------------------
# Stage 1: Build the frontend (React app)
FROM node:20-alpine AS frontend-build
WORKDIR /frontend
# Copy frontend files and other files to this image
COPY package.json yarn.lock ./
COPY frontendApp/webpack.config.js ./ 
COPY frontendApp .  
COPY src/main/resources/templates ./src/main/resources/templates
COPY src/main/resources/static ./src/main/resources/static


RUN yarn install
RUN yarn build  

# Stage 2: Build the backend (Spring Boot) and integrate frontend
FROM maven:3.9.11-eclipse-temurin-21-alpine AS backend-build
WORKDIR /workspace
# Copy Maven files
COPY pom.xml .
COPY src ./src
# Copy frontend build output to Spring Boot's static folder
COPY --from=frontend-build /frontend/build ./src/main/resources/static/

# Now build the backend
RUN mvn -DskipTests package

# Stage 3: Production runtime image
FROM eclipse-temurin:21-jre-jammy
WORKDIR /app
# Copy the built JAR from the backend-build stage
COPY --from=backend-build /workspace/target/fullstack-application-0.0.1-SNAPSHOT.jar app.jar
ENTRYPOINT ["java", "-jar", "/app/app.jar"]