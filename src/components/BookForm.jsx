export default function BookForm() {
    return (
        <div className="add-book-form" id="form-${formId}">
            <div className="mb-3">
                <label htmlFor="title-${formId}" className="form-label">Название книги</label>
                <input type="text" className="form-control" id="title-${formId}"/>
            </div>
            <div className="mb-3">
                <label htmlFor="author-${formId}" className="form-label">Автор</label>
                <input type="text" className="form-control" id="author-${formId}"/>
            </div>
            <div className="mb-3">
                <label htmlFor="description-${formId}" className="form-label">Описание</label>
                <textarea className="form-control" id="description-${formId}"></textarea>
            </div>
            <div className="mb-3">
                <label htmlFor="file-${formId}" className="form-label">Загрузить файл</label>
                <input type="file" className="form-control" id="file-${formId}"/>
            </div>
            <button className="btn btn-danger btn-sm" onClick="removeBookForm('${formId}')">Удалить эту книгу</button>
        </div>
    )
}