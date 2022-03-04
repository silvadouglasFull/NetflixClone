import React, { createContext, useState } from "react";
import { POST_ITEMS, GET_ITEMS } from '../../config/api';
export const requestContext = createContext()
const RequestContext = ({ children }) => {
    const [data, setData] = useState(null)
    const [originals, setOriginals] = useState(null)
    const [trending, setTrending] = useState(null)
    const [toprated, setToprated] = useState(null)
    const [action, setAction] = useState(null)
    const [comedy, setComedy] = useState(null)
    const [horror, setHorror] = useState(null)
    const [romance, setRomance] = useState(null)
    const [documentary, setDocumentary] = useState(null)
    const [feauturedmovie, setFeauturedmovie] = useState(null)
    const [isFeching, setIsFeching] = useState(false)
    const [error, setError] = useState({
        message: '',
        color: '',
        status: 0,
    })
    const getItems = async (state) => {
        const {
            uri,
            type,
        } = state
        setIsFeching(true)
        const { url } = GET_ITEMS(uri)
        const response = await fetch(url)
        setIsFeching(false)
        const json = await response.json()
        if (!response.ok) {
            return setError({
                message: json.message,
                color: 'warning',
                status: response.status
            })
        }
        switch (type) {
            case 0:
                setOriginals(json)
                break;
            case 1:
                setTrending(json)
                break;
            case 2:
                setToprated(json)
                break;
            case 3:
                setAction(json)
                break;
            case 4:
                setComedy(json)
                break;
            case 5:
                setHorror(json)
                break;
            case 6:
                setRomance(json)
                break;
            case 7:
                setDocumentary(json)
                break;
            case 8:
                setFeauturedmovie(json)
                break
            default:
                setError({
                    message: 'Você não definiu um parametro',
                    color: 'warning',
                    status: 400,
                })
                break;
        }
    }
    const postItems = async (state) => {
        const {
            uri,
            method,
            calback
        } = state
        setIsFeching(true)
        const { url, options } = POST_ITEMS(state, uri, method)
        const response = await fetch(url, options)
        setIsFeching(false)
        const json = await response.json()
        if (!response.ok) {
            return setError({
                message: json.message,
                color: 'warning',
                status: response.status,
            })
        }
        setData(json)
        if (calback) {
            return calback()
        }
    }
    return <requestContext.Provider value={
        {
            data, setData, originals, trending, toprated,
            action, comedy, horror, romance, documentary,
            feauturedmovie, setFeauturedmovie, isFeching, setIsFeching, error, setError,
            getItems, postItems,
        }
    }>
        {children}
    </requestContext.Provider>
}
export default RequestContext