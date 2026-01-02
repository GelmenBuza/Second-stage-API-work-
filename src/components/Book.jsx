import {useEffect, useState} from "react";
import {useBookApi} from "../services/useBookApi.js";

export default function Book({type, id, book, confirmEdit, deleteBook}) {
    const [editing, setEditing] = useState(false);
    const [title, setTitle] = useState(book.title);
    const [author, setAuthor] = useState(book.author);
    const [description, setDescription] = useState(book.description);

    const editBook = () => {
        setEditing(!editing);
    }

    return (

        <div className="card book-card">
            {
                type === 'catalog' &&
                <div className="card-body">
                    <h5 className="card-title">Заголовок книги</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{book.author}</h6>
                    <p className="card-text">{book.description}</p>
                    <a href="book.html" className="btn btn-primary">Читать</a>
                </div>
            }

            {
                type === 'profile' &&
                <div className="card-body">
                    {!editing && <h5 className="card-title">{title}</h5>}
                    {editing && <input className="form-control" type="text" value={`${title}`}
                                       onChange={(e) => setTitle(e.target.value)} id="book-title-${formId}"/>}
                    {!editing && <h5 className="card-subtitle mb-2 text-muted">{author}</h5>}
                    {editing && <input className="form-control" type="text" value={`${author}`}
                                       onChange={(e) => setAuthor(e.target.value)} id="book-author-${formId}"/>}
                    {!editing && <h5 className="card-subtitle mb-2 text-muted">{description}</h5>}
                    {editing && <input className="form-control" type="text" value={`${description}`}
                                       onChange={(e) => setDescription(e.target.value)}
                                       id="book-description-${formId}"/>}
                    {editing ? <button className="btn btn-warning btn-sm"
                                       onClick={() => {
                                           confirmEdit(id, title, author, description);
                                           setEditing(!editing);
                                       }}>Подтвердить</button> :
                                           <button className="btn btn-warning btn-sm"
                                           onClick={() => editBook()}>Редактировать</button>}
                    <button className="btn btn-danger btn-sm" onClick={() => deleteBook(id)}>Удалить</button>
                </div>
            }

            {
                type === 'admin' &&
                <div className="card-body">
                    <h5 className="card-title">Название книги</h5>
                    <input className="form-control" type="text" id="book-title-${formId}"/>
                    <h5 className="card-subtitle mb-2 text-muted">Автор</h5>
                    <input className="form-control" type="text" id="book-author-${formId}"/>
                    <h5 className="card-subtitle mb-2 text-muted">Описание</h5>
                    <input className="form-control" type="text" id="book-description-${formId}"/>
                    <h5 className="card-subtitle mb-2 text-muted">Статус</h5>
                    <p className="form-control" id="book-status-${formId}">Доступно</p>
                    <button className="btn btn-warning btn-sm" onClick="editBook()">Редактировать</button>
                    <button className="btn btn-danger btn-sm" onClick="deleteBook()">Удалить</button>
                    <button className="btn btn-secondary btn-sm" onClick="toggleStatus()">Изменить статус</button>
                </div>
            }
        </div>
    )
}