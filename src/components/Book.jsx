import {useState} from "react";
import {useAdminApi} from "../services/useAdminApi.js";

export default function Book({type, id, book, confirmEdit = undefined, deleteBook = undefined}) {
    const [editing, setEditing] = useState(false);
    const [title, setTitle] = useState(book.title);
    const [author, setAuthor] = useState(book.author);
    const [description, setDescription] = useState(book.description);
    const [is_public, setIs_public] = useState(book.is_public || false);

    const editBook = () => {
        setEditing(!editing);
    }

    const toggleStatus = async () => {
        const res = useAdminApi.changeVisibility(id, is_public)
            .then(setIs_public(!is_public))
            .catch((err) => {
                console.error(err)
            });
    }

    return (

        <div className="card book-card">
            {
                type === 'catalog' &&
                <div className="card-body">
                    <h5 className="card-title">{book.title}</h5>
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
                                       onChange={(e) => setTitle(e.target.value)} id={`book-title-${id}`}/>}
                    {!editing && <h5 className="card-subtitle mb-2 text-muted">{author}</h5>}
                    {editing && <input className="form-control" type="text" value={`${author}`}
                                       onChange={(e) => setAuthor(e.target.value)} id={`book-author-${id}`}/>}
                    {!editing && <h5 className="card-subtitle mb-2 text-muted">{description}</h5>}
                    {editing && <input className="form-control" type="text" value={`${description}`}
                                       onChange={(e) => setDescription(e.target.value)}
                                       id={`book-description-${id}`}/>}
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
                    {!editing ? (<>
                        <h5 className="card-title">{title}</h5>
                        <h5 className="card-subtitle mb-2 text-muted">{author}</h5>
                        <h5 className="card-subtitle mb-2 text-muted">{description}</h5>

                    </>) : (
                        <>
                            <input className="form-control" type="text" id={`book-title-${id}`} value={`${title}`}
                                   onChange={(e) => setTitle(e.target.value)}/>
                            <input className="form-control" type="text" id={`book-author-${id}`} value={`${author}`}
                                   onChange={(e) => setAuthor(e.target.value)}/>
                            <input className="form-control" type="text" id={`book-description-${id}`}
                                   value={`${description}`}
                                   onChange={(e) => setDescription(e.target.value)}/>
                        </>
                    )}

                    <h5 className="card-subtitle mb-2 text-muted">Статус</h5>
                    <p className="form-control"
                       id={`book-status-${id}`}>{book.is_public ? "Доступно" : "Не доступно"}</p>
                    {editing ?
                        <button className="btn btn-warning btn-sm" onClick={() => confirmEdit()}>Подтвердить</button>
                        :
                        <button className="btn btn-warning btn-sm" onClick={() => editBook()}>Редактировать</button>
                    }
                    <button className="btn btn-danger btn-sm" onClick={() => deleteBook()}>Удалить</button>
                    <button className="btn btn-secondary btn-sm" onClick={() => toggleStatus()}>Изменить статус</button>
                </div>
            }
        </div>
    )
}