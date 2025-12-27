const BASE_URL = 'https://reader-api.pasdel.ru/api/books'

const getAuthHead = () => {
    const token = localStorage.getItem('token')
    return {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
    }
}

const getBaseHead = () => {
    return {
        'Content-Type': 'application/json',
    }
}

export const useBookApi = {
    create: async (formData) => {
        const res = await fetch(`${BASE_URL}/upload`, {
            method: 'POST',
            headers: getAuthHead(),
            body: JSON.stringify(formData),
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
            throw new Error(`Create book Error: ${error.message}`);
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
            throw new Error(`Create book Error: ${error.message}`);
        }
        return res.json();
    }
}