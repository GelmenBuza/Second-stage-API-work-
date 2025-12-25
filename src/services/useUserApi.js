const BASE_URL = 'https://reader-api.pasdel.ru/api'

const getAuthHead = () => {
    const token = localStorage.getItem('token')
    return {
        'ContentType': 'application/json',
        'Authorization': `Bearer ${token}`
    }
}

const getBaseHead = () => {
    return {
        'ContentType': 'application/json',
    }
}

export const useUserApi = {
    login: async (email, password) => {
        const res = await fetch(`${BASE_URL}/login`, {
            method: 'POST',
            headers: getBaseHead(),
            body: JSON.stringify({email, password}),
        })
        if (!res.ok) {
            const error = await res.json();
            throw new Error(`Login Error: ${error.message}`);
        }
        return res.json();
    },

    registration: async (name, email, age, password) => {
        const res = await fetch(`${BASE_URL}/registration`, {
            method: 'POST',
            headers: getBaseHead(),
            body: JSON.stringify({name, email, age, password}),
        })
        if (!res.ok) {
            const error = await res.json();
            throw new Error(`Registration Error: ${error.message}`);
        }
        return res.json();
    },

    logout: async () => {
        const res = await fetch(`${BASE_URL}/registration`, {
            method: 'POST',
            headers: getAuthHead(),
        })
        if (!res.ok) {
            const error = await res.json();
            throw new Error(`Logout Error: ${error.message}`);
        }

        return res.json();
    },

    getAllBooks: async () => {
        const res = await fetch(`${BASE_URL}/books`, {
            method: 'GET',
            headers: getBaseHead(),
        })
        if (!res.ok) {
            const error = await res.json();
            throw new Error(`All book Error: ${error.message}`);
        }

        return res.json();
    },

    searchBooks: async (value) => {
        const res = await fetch(`${BASE_URL}/books?search=${value}`, {
            method: 'GET',
            headers: getBaseHead(),
        })
        if (!res.ok) {
            const error = await res.json();
            throw new Error(`Search Error: ${error.message}`);
        }

        return res.json();
    },

    searchBookByAuthor: async (value) => {
        const res = await fetch(`${BASE_URL}/books?author=${value}`, {
            method: 'GET',
            headers: getBaseHead(),
        })
        if (!res.ok) {
            const error = await res.json();
            throw new Error(`Search author Error: ${error.message}`);
        }

        return res.json();
    },
    getBooksPagination: async (count, page) => {
        const res = await fetch(`${BASE_URL}/books`, {
            method: 'GET',
            headers: getBaseHead(),
            body: JSON.stringify({count, page}),
        })
        if (!res.ok) {
            const error = await res.json();
            throw new Error(`Pagination Error: ${error.message}`);
        }

        return res.json();
    },

    getBookInfo: async (id) => {
        const res = await fetch(`${BASE_URL}/books/${id}`, {
            method: 'GET',
            headers: getBaseHead(),
        })
        if (!res.ok) {
            const error = await res.json();
            throw new Error(`Book info Error: ${error.message}`);
        }

        return res.json();
    },

    getUserBooks: async () => {
        const res = await fetch(`${BASE_URL}/books`, {
            method: 'GET',
            headers: getAuthHead(),
        })
        if (!res.ok) {
            const error = await res.json();
            throw new Error(`Get user books Error: ${error.message}`);
        }

        return res.json();
    },

    getUserBookInfo: async (id) => {
        const res = await fetch(`${BASE_URL}/books/${id}`, {
            method: 'GET',
            headers: getAuthHead(),
        })
        if (!res.ok) {
            const error = await res.json();
            throw new Error(`Get user books info Error: ${error.message}`);
        }

        return res.json();
    },

    saveProgress: async (id, progress) => {
        const res = await fetch(`${BASE_URL}/books/${id}/progress`, {
            method: 'POST',
            headers: getAuthHead(),
            body: JSON.stringify({progress}),
        })
        if (!res.ok) {
            const error = await res.json();
            throw new Error(`Progress save Error: ${error.message}`);
        }

        return res.json();
    },

    getProgress: async (id) => {
        const res = await fetch(`${BASE_URL}/books/${id}/progress`, {
            method: 'GET',
            headers: getAuthHead(),
        })
        if (!res.ok) {
            const error = await res.json();
            throw new Error(`Get progress Error: ${error.message}`);
        }

        return res.json();
    },

    getAllReadBooks: async () => {
        const res = await fetch(`${BASE_URL}/books/progress`, {
            method: 'GET',
            headers: getAuthHead(),
        })
        if (!res.ok) {
            const error = await res.json();
            throw new Error(`Get all read books Error: ${error.message}`);
        }

        return res.json();
    },

    saveUserSettings: async (font_family, font_size, text_color, background_color) => {
        const res = await fetch(`${BASE_URL}/user/settings`, {
            method: 'POST',
            headers: getAuthHead(),
            body: JSON.stringify({font_family, font_size, text_color, background_color}),
        })
        if (!res.ok) {
            const error = await res.json();
            throw new Error(`Save settings Error: ${error.message}`);
        }

        return res.json();
    },

    getUserSettings: async () => {
        const res = await fetch(`${BASE_URL}/user/settings`, {
            method: 'GET',
            headers: getAuthHead(),
        })
        if (!res.ok) {
            const error = await res.json();
            throw new Error(`Save settings Error: ${error.message}`);
        }

        return res.json();
    }
}