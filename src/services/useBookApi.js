const BASE_URL = 'https://reader-api.pasdel.ru/api/books'

const getAuthHead = () => {
    const token = localStorage.getItem('token')
    return {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
    }
}

export const useBookApi = {
    create: async (bookData) => {
        const token = localStorage.getItem('token')
        const formData = new FormData()
        formData.append('title', bookData.title)
        formData.append('author', bookData.author)
        formData.append('description', bookData.description)
        formData.append('file', bookData.file)


        const res = await fetch(`${BASE_URL}/upload`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`
            },
            body: formData,
        })
        if (!res.ok) {
            const error = await res.json();
            throw new Error(`Create book Error: ${error.message}`);
        }
        return res.json();
    },

    delete: async (id) => {
        const res = await fetch(`${BASE_URL}/${id}`, {
            method: 'DELETE',
            headers: getAuthHead(),
        })
        if (!res.ok) {
            const error = await res.json();
            throw new Error(`Delete book Error: ${error.message}`);
        }
        return res.json();
    },

    updateInfo: async (id, title, author, description) => {
        const res = await fetch(`${BASE_URL}/${id}`, {
            method: 'PATCH',
            headers: getAuthHead(),
            body: JSON.stringify({title, author, description}),
        })
        if (!res.ok) {
            const error = await res.json();
            throw new Error(`Update book info Error: ${error.message}`);
        }
        return res.json();
    }
}