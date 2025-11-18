# Fullstack Application

A full-stack **User Registration** application built with **Spring Boot (Java 21)** on the backend and **React (Node 20)** on the frontend.  
It supports **Docker multi-stage builds**, combining both backend and frontend into a single production-ready container.

## Features

- Register new users
- View all registered users
- Delete users
- Responsive UI
<ng:** CSS

- Unified backend + frontend Docker image

## Technologies Used

| Layer                | Technology                        |
| -------------------- | --------------------------------- |
| **Backend**          | Java 21, Spring Boot 3.5.3, Maven |
| **Frontend**         | React, Axios, Yarn, Webpack       |
| **Database**         | H2 (in-memory)                    |
| **Containerization** | Docker (multi-stage build)        |
| **Styling**          | CSS                               |


## Project Structure

```
fullstack-application/
├── src/
│   ├── main/
│   │   ├── java/         # Spring Boot backend code
│   │   ├── js/           # React frontend entry point (App.js)
│   │   └── resources/    # Static resources and CSS
│   └── test/             # Backend tests
├── frontendApp/          # React components and frontend logic
├── .gitignore
├── package.json
├── pom.xml
└── README.md

```

## Getting Started

### Prerequisites
- Java **21+**
- Maven **3.9+**
- Node.js **20+**
- Yarn or npm


### Backend Setup

1. Navigate to the project root:

   ```sh
   cd fullstack-application
   ```
2. Build and run the Spring Boot backend:
   ```sh
   mvn spring-boot:run
   ```

### Frontend Setup

1. Navigate to the frontend directory:
   ```sh
   cd frontendApp
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the React development server:
   ```sh
   npm run webpack
   ```

### Accessing the App

- Open your browser and go to [http://localhost:3000](http://localhost:3000) for the frontend.
- The backend API runs on [http://localhost:8080](http://localhost:8080).

## API Endpoints

- `GET /user/all` — Get all users
- `POST /user/save` — Add a new user
- `DELETE /user/{id}` — Delete a user by ID

## Contributing

Feel free to fork the repository and submit pull requests.

## License

This project is licensed under the MIT License.
   ```bash
   cd fullstack-application
   ```
2. Build and run the Spring Boot app:
   ```bash
   mvn spring-boot:run
   ```
3. Backend runs on [http://localhost:8080](http://localhost:8080)

---

### Frontend Setup

1. Navigate to the frontend folder:
   ```bash
   cd frontendApp
   ```
2. Install dependencies:
   ```bash
   yarn install
   ```
3. Build or start the development server:

   ```bash
   yarn start       # For dev mode
   yarn run webpack # For production build
   ```

4. Frontend runs on [http://localhost:3000](http://localhost:3000)

---

## 🐳 Docker Setup

This project supports Docker multi-stage builds.

### 🧱 Build the Docker Image

Run the following from the project root:

```bash
docker compose build  
docker compose up 
```

This will:

- Build the React frontend
- Package the Spring Boot JAR with static assets
- Produce a lightweight final image using Eclipse Temurin JRE 21

---

### ▶️ Run the Container

```bash
docker run -p 8080:8080 fullstack-application
```

Then visit:

👉 [http://localhost:8080](http://localhost:8080)

---

## 📡 API Endpoints

| Method     | Endpoint     | Description         |
| ---------- | ------------ | ------------------- |
| **GET**    | `/user/all`  | Fetch all users     |
| **POST**   | `/user/save` | Register a new user |
| **DELETE** | `/user/{id}` | Delete user by ID   |

---

## 🧰 Useful Commands

| Action         | Command                                            |
| -------------- | -------------------------------------------------- |
| View images    | `docker images`                                    |
| Run detached   | `docker run -d -p 8080:8080 fullstack-application` |
| View logs      | `docker logs -f <container_id>`                    |
| Stop container | `docker stop <container_id>`                       |

---

## 🤝 Contributing

Feel free to fork the repository, make improvements, and submit pull requests.

---

## 🧾 License

This project is licensed under the **MIT License**.

---

## 👨‍💻 Author

**Moses Macharia**  
Full-Stack Developer | Spring Boot + React + Docker  
📧 [wanguimacharia40@gmail.com](mailto:wanguimacharia40@gmail.com)

