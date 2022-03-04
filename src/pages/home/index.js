/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from 'react'
import FeautureMovie from '../../components/featuredMovie'
import Rodape from '../../components/footer'
import Header from '../../components/header'
import Loading from '../../components/loading'
import MovieRow from '../../components/movieRow'
import { requestContext } from '../../context/requestContext'
import scrollListener from '../../listeners/scrollListner'
import { List, MovieRowH2 } from './style'
const HomePage = () => {
    const {
        getItems, originals, trending, toprated,
        action, comedy, horror, romance, documentary,
        feauturedmovie
    } = useContext(requestContext)
    const [filtered, setFiltered] = useState(null)
    const [background, setBackground] = useState(null)
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (scrollListener()) {
                return setBackground('#141414')
            }
            setBackground(null)
        })
        return () => {
            window.removeEventListener('scroll', scrollListener)
        }
    }, [])
    useEffect(() => {
        getItems({
            uri: '/discover/tv?with_network=213&',
            type: 0,
        })
        getItems({
            uri: '/trending/all/week?',
            type: 1,
        })
        getItems({
            uri: '/movie/top_rated?',
            type: 2,
        })
        getItems({
            uri: '/discover/movie?with_generes=28&',
            type: 3,
        })
        getItems({
            uri: '/discover/movie?with_generes=35&',
            type: 4,
        })
        getItems({
            uri: '/discover/movie?with_generes=27&',
            type: 5,
        })
        getItems({
            uri: '/discover/movie?with_generes=10749&',
            type: 6,
        })
        getItems({
            uri: '/discover/movie?with_generes=99&',
            type: 7,
        })
    }, [])
    useEffect(() => {
        if (originals) {
            let RamdomChose = Math.floor(Math.random() * originals.results.length)
            setFiltered(originals.results[RamdomChose])
        }
    }, [originals])
    useEffect(() => {
        if (filtered) {
            loadMovieInfo({
                movieId: filtered.id,
                typeMovie: 'tv'
            })
        }
    }, [filtered])
    const loadMovieInfo = (state) => {
        const {
            movieId,
            typeMovie
        } = state
        getItems({
            uri: `/${typeMovie}/${movieId}?`,
            type: 8,
        })
    }
    return <div className='page'>
        <Header background={background} />
        {feauturedmovie &&
            <FeautureMovie item={feauturedmovie} />
        }
        <Loading />
        <List>
            <MovieRowH2>Originals from Netflix</MovieRowH2>
            {originals &&
                <MovieRow items={originals} />
            }
            <MovieRowH2>Trending</MovieRowH2>
            {trending &&
                <MovieRow items={trending} />
            }
            <MovieRowH2>Top Rated</MovieRowH2>
            {toprated &&
                <MovieRow items={toprated} />
            }
            <MovieRowH2>Action</MovieRowH2>
            {action &&
                <MovieRow items={action} />
            }
            <MovieRowH2>Comedy</MovieRowH2>
            {comedy &&
                <MovieRow items={comedy} />
            }
            <MovieRowH2>Horror</MovieRowH2>
            {horror &&
                <MovieRow items={horror} />
            }
            <MovieRowH2>Romance</MovieRowH2>
            {romance &&
                <MovieRow items={romance} />
            }
            <MovieRowH2>Documentary</MovieRowH2>
            {documentary &&
                <MovieRow items={documentary} />
            }
        </List>
        <Rodape />

    </div>
}
export default HomePage