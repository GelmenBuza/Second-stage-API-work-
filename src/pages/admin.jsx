

export default function AdminProfile () {


    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-12">
                    <h1 className="text-center">Кабинет администратора</h1>
                </div>
            </div>


            <!-- Список книг пользователя -->
            <div className="row mt-4">
                <div className="col-md-12">
                    <h3>Мои книги</h3>
                    <div id="user-books">

                    </div>
                </div>
            </div>

        </div>
    )
}