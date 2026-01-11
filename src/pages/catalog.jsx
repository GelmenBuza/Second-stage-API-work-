import {useUserApi} from "../services/useUserApi.js";
import {useEffect, useState} from "react";
import Book from "../components/Book.jsx";
import Header from "../components/Header.jsx";

export default function CatalogPage({setReadBookId}) {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        const fetchBooks = async () => {
            const {data} = await useUserApi.getAllBooks();
            setBooks(data.books);
            console.log(data.books);
        }

        fetchBooks();
    }, [])

    const onRead = async (id) => {
        const resp = await useUserApi.getBookInfo(id)
        console.log(resp.data.book.file_url);
        const url = resp.data.book.file_url;
        const response = await fetch(url);
        const data = await response.json();
        console.log(data.data); // Это и есть body книги
    }

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
                            <Book key={book.id} id={book.id} type='catalog' book={book} onRead={onRead}/>
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