# 📚 Bookstore MERN Project - ComicCon📖

ComicCon book store project is a full-stack **MERN** (MongoDB, Express.js, React.js, Node.js) e-commerce website where users can browse, purchase books, and admins can manage the inventory efficiently. 🚀

## 🌟 Features

### 🛒 User Side
- Browse & search for books.
- Add books to cart & checkout.
- Google authentication via **Firebase** 🔥.
- Responsive UI built with **React.js** & **Tailwind CSS** 🎨.

### 🔧 Admin Side
- **CRUD operations** for books (add, edit, delete, update) 🛠️.
- Dashboard with book management.
- Secure login authentication.

## 🏗️ Tech Stack
- **Frontend**: React.js, Tailwind CSS ⚛️💨
- **Backend**: Node.js, Express.js 🖥️
- **Database**: MongoDB (Mongoose ODM) 🍃
- **Authentication**: Firebase Google Login 🔑

## 🚀 Installation

1️⃣ Clone the repository:
```sh
git clone https://github.com/dhara-maru/Bookstore-Mern.git
cd Bookstore-Mern
```

2️⃣ Install dependencies:
```sh
# Backend
cd server
npm install

# Frontend
cd ../client
npm install
```

3️⃣ Configure environment variables:
Create a `.env` file in both `server/` and `client/` folders with necessary environment variables (MongoDB URI, Firebase credentials, etc.).

4️⃣ Run the development servers:
```sh
# Start backend
cd server
npm run dev

# Start frontend
cd ../client
npm start
```

## 🔥 Environment Variables
Create a `.env` file in the `server` folder and add:
```env
MONGO_URI=your_mongodb_connection_string
PORT=5000
FIREBASE_API_KEY=your_firebase_api_key
FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
```

## 📂 Folder Structure
```
/Bookstore-Mern
│── /client         # React Frontend
│── /server         # Express Backend
│── /models         # Mongoose Schemas
│── /routes         # Express Routes
│── /controllers    # Business Logic
│── /config         # Configuration Files
│── .gitignore      # Ignored files
│── package.json    # Dependencies
```

## 👨‍💻 Author
- **Dhara Maru** – [GitHub](https://github.com/dhara-maru)
