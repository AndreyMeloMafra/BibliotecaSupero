import api from "../../services/api"

export const getSearchBooksFromAPI = async(search) => {
    try {
        const response = await api.get(`/api/Livros?Busca=${search}&MaxResultCount=10`);

        return response;
    } catch (error) {
        return error;
    }
}

export const gethBooksByYearFromAPI = async(startYear, endYear) => {
    try {
        const response = await api.get(`/api/Livros?AnoInicial=${startYear}&AnoFinal=${endYear}&MaxResultCount=10`);

        return response;
    } catch (error) {
        return error;
    }
}

export const getBooksFromAPI = async(maxResultCount, skipCount) => {
    try {
        const response = await api.get(`/api/Livros?MaxResultCount=${maxResultCount}&SkipCount=${skipCount}`);

        return response;
    } catch (error) {
        return error;
    }
}

export const getBookFromAPI = async(bookId) => {
    try {
        const response = await api.get(`/api/Livros/${bookId}`);

        return response;
    } catch (error) {
        return error;
    }
}

export const updateBookFromAPI = async(bookId, data) => {
    try {

        const configs = {
            headers: {
                "Content-Type": "application/json"
            }
        }

        const response = await api.put(`/api/Livros/${bookId}`, data, configs);

        return response;
    } catch (error) {
        return error;
    }
}

export const deleteBookFromAPI = async(bookId) => {
    try {
        const response = await api.delete(`/api/Livros/${bookId}`);

        return response;
    } catch (error) {
        return error;
    }
}