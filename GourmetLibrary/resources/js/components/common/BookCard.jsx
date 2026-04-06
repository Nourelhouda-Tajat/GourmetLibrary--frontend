export default function BookCard({ book }) {
    return (
        <div className="book-card" style={{ border: '1px solid #ddd', padding: '10px', margin: '10px' }}>
            <h3>{book.title}</h3>
            <p>Auteur : {book.author}</p>
            <button>Voir les détails</button>
        </div>
    );
}