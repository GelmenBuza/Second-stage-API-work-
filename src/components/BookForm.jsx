import {useEffect, useState} from 'react'

export default function BookForm({formId, removeBookForm, onDataChange}) {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [description, setDescription] = useState('');
    const [file, setFile] = useState(null);

    useEffect(() => {
        onDataChange({title, author, description, file});
    }, [title, author, description, file]);

    return (
        <form className="add-book-form" id={`form-${formId}`}>
            <div className="mb-3">
                <label htmlFor={`title-${formId}`} className="form-label">Название книги</label>
                <input type="text" className="form-control" id={`title-${formId}`} value={title}
                       onChange={(e) => setTitle(e.target.value)}/>
            </div>
            <div className="mb-3">
                <label htmlFor={`author-${formId}`} className="form-label">Автор</label>
                <input type="text" className="form-control" id={`author-${formId}`} value={author}
                       onChange={(e) => setAuthor(e.target.value)}/>
            </div>
            <div className="mb-3">
                <label htmlFor={`description-${formId}`} className="form-label">Описание</label>
                <textarea className="form-control" id={`description-${formId}`} value={description}
                          onChange={(e) => setDescription(e.target.value)}></textarea>
            </div>
            <div className="mb-3">
                <label htmlFor={`file-${formId}`} className="form-label">Загрузить файл</label>
                <input type="file" className="form-control" id={`file-${formId}`}
                       onChange={(e) => setFile(e.target.files[0] || null)} required/>
            </div>
            <button className="btn btn-danger btn-sm" onClick={() => removeBookForm(formId)}>Удалить эту книгу</button>
        </form>
    )
}