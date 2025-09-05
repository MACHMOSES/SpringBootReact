# Fullstack Application

A full-stack user registration application built with Spring Boot (backend) and React (frontend).

## Features

- Register new users
- View all registered users
- Delete users
- Responsive UI

## Technologies Used

- **Backend:** Java, Spring Boot, Maven
- **Frontend:** React, Axios
- **Styling:** CSS

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

- Java 17+
- Maven
- Node.js & npm

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
   npm start
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
