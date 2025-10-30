// ✅ ALL-IN-ONE BOOK REVIEW SPA
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route, Link, useParams } from "react-router-dom";

// ---------- SAMPLE BOOK DATA ----------
const books = [
  {
    id: 1,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    description: "A story of love, wealth, and tragedy set in the Jazz Age.",
    review: "A timeless classic exploring ambition and illusion."
  },
  {
    id: 2,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    description: "A novel about justice and moral growth in the American South.",
    review: "A powerful story that teaches empathy and courage."
  },
  {
    id: 3,
    title: "1984",
    author: "George Orwell",
    description: "A dystopian vision of a totalitarian future.",
    review: "A chilling masterpiece about freedom and control."
  }
];

// ---------- HOME COMPONENT ----------
function Home() {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>📚 Book Review Website</h1>
      <p style={styles.subheading}>Browse and explore book reviews</p>
      <ul style={styles.list}>
        {books.map((book) => (
          <li key={book.id} style={styles.item}>
            <Link to={`/book/${book.id}`} style={styles.link}>
              {book.title} <span style={{ color: "#777" }}>by {book.author}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

// ---------- BOOK DETAIL COMPONENT ----------
function BookDetail() {
  const { id } = useParams();
  const book = books.find((b) => b.id === parseInt(id));

  if (!book) {
    return <h2 style={{ textAlign: "center" }}>Book not found!</h2>;
  }

  return (
    <div style={styles.detailContainer}>
      <h2>{book.title}</h2>
      <h4>By {book.author}</h4>
      <p><strong>Description:</strong> {book.description}</p>
      <p><strong>Review:</strong> {book.review}</p>
      <Link to="/" style={styles.backButton}>⬅ Back to Home</Link>
    </div>
  );
}

// ---------- MAIN APP ----------
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/book/:id" element={<BookDetail />} />
      </Routes>
    </Router>
  );
}

// ---------- INLINE STYLES ----------
const styles = {
  container: {
    textAlign: "center",
    padding: "40px",
    backgroundColor: "#f9fafc",
    minHeight: "100vh",
  },
  heading: {
    color: "#2c3e50",
    fontSize: "32px",
  },
  subheading: {
    color: "#555",
    marginBottom: "20px",
  },
  list: {
    listStyle: "none",
    padding: 0,
  },
  item: {
    margin: "12px 0",
  },
  link: {
    textDecoration: "none",
    color: "#007bff",
    fontSize: "18px",
  },
  detailContainer: {
    textAlign: "center",
    padding: "50px",
  },
  backButton: {
    display: "inline-block",
    marginTop: "20px",
    padding: "8px 16px",
    backgroundColor: "#007bff",
    color: "#fff",
    borderRadius: "6px",
    textDecoration: "none",
  },
};

// ---------- RENDER APP ----------
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
