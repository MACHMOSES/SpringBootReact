# Fullstack Application

<<<<<<< HEAD
A full-stack user registration application built with Spring Boot (backend) and React (frontend).
=======
A full-stack **User Registration** application built with **Spring Boot (Java 21)** on the backend and **React (Node 20)** on the frontend.  
It supports **Docker multi-stage builds**, combining both backend and frontend into a single production-ready container.
>>>>>>> c38d0c22 (my docker has worked)

## Features

- Register new users
- View all registered users
- Delete users
- Responsive UI
<<<<<<< HEAD

## Technologies Used

- **Backend:** Java, Spring Boot, Maven
- **Frontend:** React, Axios
- **Styling:** CSS
=======
- Unified backend + frontend Docker image

## Technologies Used

| Layer                | Technology                        |
| -------------------- | --------------------------------- |
| **Backend**          | Java 21, Spring Boot 3.5.3, Maven |
| **Frontend**         | React, Axios, Yarn, Webpack       |
| **Database**         | H2 (in-memory)                    |
| **Containerization** | Docker (multi-stage build)        |
| **Styling**          | CSS                               |
>>>>>>> c38d0c22 (my docker has worked)

## Project Structure

```
fullstack-application/
├── src/
│   ├── main/
<<<<<<< HEAD
│   │   ├── java/         # Spring Boot backend code
│   │   ├── js/           # React frontend entry point (App.js)
│   │   └── resources/    # Static resources and CSS
│   └── test/             # Backend tests
├── frontendApp/          # React components and frontend logic
├── .gitignore
├── package.json
├── pom.xml
└── README.md
=======
│   │   ├── java/               # Spring Boot backend code
│   │   ├── resources/          # application.properties, templates, etc.
│   └── test/                   # Backend tests
├── frontendApp/                # React frontend app
│   ├── package.json
│   ├── yarn.lock
│   └── src/
├── pom.xml                     # Maven configuration
├── Dockerfile                  # Multi-stage Docker build
└── README.md                   # Documentation
>>>>>>> c38d0c22 (my docker has worked)
```

## Getting Started

### Prerequisites

<<<<<<< HEAD
- Java 17+
- Maven
- Node.js & npm
=======
- Java **21+**
- Maven **3.9+**
- Node.js **20+**
- Yarn or npm
>>>>>>> c38d0c22 (my docker has worked)

### Backend Setup

1. Navigate to the project root:
<<<<<<< HEAD
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
=======
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
docker build -t springboot-master .
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
>>>>>>> c38d0c22 (my docker has worked)
