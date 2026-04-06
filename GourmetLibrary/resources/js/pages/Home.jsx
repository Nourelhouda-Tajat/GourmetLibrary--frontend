import { mockBooks, mockCategories } from '../mocks/data';
import BookCard from '../components/common/BookCard';

export default function Home() {
    return (
        <main>
            <section>
                <h2>Nos Catégories</h2>
                <ul>
                    {mockCategories.map(cat => <li key={cat.id}>{cat.name}</li>)}
                </ul>
            </section>

            <section>
                <h2>Livres à la une</h2>
                <div style={{ display: 'flex' }}>
                    {mockBooks.map(book => <BookCard key={book.id} book={book} />)}
                </div>
            </section>
        </main>
    );
}