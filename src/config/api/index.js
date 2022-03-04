import { API_KEY } from "../apikey"
import { API_URL } from "../uri"

export const POST_ITEMS = (body, uri, method) => {
    return {
        url: `${API_URL}${uri}`,
        options: {
            method: method,
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        },
    }
}
export const GET_ITEMS = (uri) => {
    return {
        url: `${API_URL}${uri}api_key=${API_KEY}`,
        options: {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${API_KEY}`
            },
        },
    }
}
