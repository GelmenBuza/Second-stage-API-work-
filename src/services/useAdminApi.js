const BASE_URL = 'https://reader-api.pasdel.ru/api/books'

const getAuthHead = () => {
    const token = localStorage.getItem('token')
    return {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
    }
}

export const useAdminApi = {
    getAllBooks: async () => {
        const res = await fetch(`${BASE_URL}`, {
            headers: getAuthHead(),
        })
        if (!res.ok) {
            const error = await res.json();
            throw new Error(`Admin Get books Error: ${error.message}`);
        }
        return res.json();
    },

    changeVisibility: async (id, is_public) => {
        const res = await fetch(`${BASE_URL}/${id}/change-visibility`, {
            method: 'PUT',
            headers: getAuthHead(),
            body: JSON.stringify({is_public}),
        })
        if (!res.ok) {
            const error = await res.json();
            throw new Error(`Change visibility book Error: ${error.message}`);
        }
        return res.json();
    },
}