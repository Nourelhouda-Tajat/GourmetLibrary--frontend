export default function BookCard({ book }) {
    const cardStyle = {
        background: "white",
        padding: "1.5rem",
        borderRadius: "12px",
        boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
        transition: "transform 0.2s",
        border: "1px solid #e5e7eb",
    };

    return (
        <div style={cardStyle}>
            <h3 style={{ fontSize: "1.1rem", marginBottom: "0.5rem" }}>
                {book.title}
            </h3>
            <p style={{ color: "#6b7280", fontSize: "0.9rem" }}>
                {book.author}
            </p>
            <Link
                to={`/books/${book.id}`}
                style={{
                    display: "inline-block",
                    marginTop: "1rem",
                    color: "#2563eb",
                    fontWeight: "600",
                    textDecoration: "none",
                }}
            >
                Visualiser les détails →
            </Link>
        </div>
    );
}