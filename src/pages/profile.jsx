import {useAuth} from "../context/useAuth.jsx";
import {useEffect, useRef, useState} from "react";
import BookForm from "../components/BookForm.jsx";
import Book from "../components/Book.jsx";
import {useUserApi} from "../services/useUserApi.js";
import {useBookApi} from "../services/useBookApi.js";
import Header from "../components/Header.jsx";

export default function ProfilePage() {
    const [bookForms, setBookForms] = useState([]);
    const [formDataMap, setFormDataMap] = useState({});
    const [books, setBooks] = useState([]);
    const {user} = useAuth();
    const [reload, setReload] = useState(true);

    useEffect(() => {
        const getUserBooks = async () => {
            const {data} = await useUserApi.getUserBooks();
            setBooks(data.books);
        };

        getUserBooks();
    }, [reload])

    const addBookForm = () => {
        setBookForms(prev => [...prev, Date.now()]);
    }

    const removeBookForm = (formId) => {
        setBookForms(prev => prev.filter(id => id !== formId));
    }

    const uploadBooks = async () => {
        console.log(formDataMap);
        for (const key of Object.keys(formDataMap)) {
            await useBookApi.create(formDataMap[key]);
        }
        setReload(!reload)
        setBookForms([]);
    }

    const confirmEdit = async (id, title, author, description) => {
        const {data} = await useBookApi.updateInfo(id, title, author, description)
        const newBook = data.book
        setBooks(prev => prev.map((book) => book.id === newBook.id ? newBook : book));
    }


    const updateBookForm = (formId, data) => {
        setFormDataMap(prev => ({...prev, [formId]: data}));
    }

    const deleteBook = async (id) => {
        await useBookApi.delete(id)

        setReload(!reload)
    }

    return (
        <>
            <Header/>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-12">
                        <h1 className="text-center">Профиль пользователя</h1>
                    </div>
                </div>

                {/*-- Информация о пользователе --*/}
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Информация о пользователе</h5>
                                <p className="card-text"><strong>Имя:</strong> {user.name} </p>
                                <p className="card-text"><strong>Email:</strong> {user.email} </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/*-- Список книг пользователя --*/}
                <div className="row mt-4">
                    <div className="col-md-12">
                        <h3>Мои книги</h3>
                        <div id="user-books">

                            {/*  Книги сюда!!!  */}
                            {books.map((book) => (
                                <Book type={'profile'} key={book.id} id={book.id} book={book} confirmEdit={confirmEdit}
                                      deleteBook={deleteBook}/>
                            ))}

                        </div>
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col-md-12">
                        <h3>Добавить книги</h3>
                        <div id="add-books-form">
                            {/*-- Поля для добавления книг будут отображаться здесь --*/}
                            {bookForms.map(formId => (
                                <BookForm
                                    key={formId}
                                    formId={formId}
                                    removeBookForm={removeBookForm}
                                    onDataChange={(data) => updateBookForm(formId, data)}
                                />
                            ))}
                        </div>
                        <button className="btn btn-secondary mt-2" onClick={() => addBookForm()}>Добавить еще одну книгу
                        </button>
                        <button className="btn btn-primary mt-2" onClick={() => uploadBooks()}>Загрузить все книги
                        </button>
                        <div id="error-messages" className="text-danger mt-2"></div>
                    </div>
                </div>
            </div>
        </>
    )
}