import {useUserApi} from "../services/useUserApi.js";
import {useEffect, useState} from "react";
import Book from "../components/Book.jsx";
import Header from "../components/Header.jsx";

export default function CatalogPage() {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        const fetchBooks = async () => {
            const {data} = await useUserApi.getAllBooks();
            setBooks(data.books);
            console.log(data.books);
        }

        fetchBooks();
    }, [])

    return (
        <>
            <Header/>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-12">
                        <h1 className="text-center">Каталог книг</h1>
                    </div>
                </div>
                <div className="row" id="book-list">
                    {/*  Книги сюда!!!*/}
                    {
                        books.map((book) => (
                            <Book key={book.id} type='catalog' book={book}/>
                        ))
                    }
                </div>
                <div className="row">
                    <div className="col-md-12 d-flex justify-content-center">
                        {/*{!--Пагинация--}*/}
                        <nav aria-label="Page navigation">
                            <ul className="pagination">
                                <li className="page-item" id="prev-page"><a className="page-link"
                                                                            href="#">Предыдущая</a>
                                </li>
                                <li className="page-item" id="next-page"><a className="page-link" href="#">Следующая</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    )
}