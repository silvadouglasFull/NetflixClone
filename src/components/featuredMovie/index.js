/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import {
    FeaturedVertical, FeaturedHorizontal, Featured,
    FeaturedName, FeaturedInfo, FeaturedPoints, FeaturedYear,
    FeaturedSeasons, FeatureDescription, FeatureButtons, FeaturedGeneres,
    FeaturedButtonWatch, FeaturedButtonAddList
} from './styles'

const FeaturedMovie = ({ item }) => {
    const [firstData, setFirsData] = useState(null)
    const [description, setDescription] = useState(null)
    useEffect(() => {
        setFirsData(new Date(item.first_air_date))
    }, [])
    useEffect(() => {
        if (item.overview.length > 200) {
            return setDescription(`${item.overview.substring(0, 200)}...`)
        }
        setDescription(item.overview)
    })
    return <Featured backgroundImage={item.backdrop_path}>
        <FeaturedVertical>
            <FeaturedHorizontal>
                <FeaturedName>{item.original_name}</FeaturedName>
                <FeaturedInfo>
                    <FeaturedPoints>{item.vote_average} pontos</FeaturedPoints>
                    {firstData &&
                        <FeaturedYear>{firstData.getFullYear()}</FeaturedYear>
                    }
                    <FeaturedSeasons>{item.number_of_seasons} temporada{item.number_of_seasons > 1 && 's'}</FeaturedSeasons>
                    <FeatureDescription>{description}</FeatureDescription>
                    <FeatureButtons>
                        <FeaturedButtonWatch href={`/watch/${item.id}`}>
                            ▶ Watch
                        </FeaturedButtonWatch>
                        <FeaturedButtonAddList href={`/watch/${item.id}`}>
                            + My List
                        </FeaturedButtonAddList>
                    </FeatureButtons>
                    <FeaturedGeneres>
                        <strong>Generes: </strong>{item.genres.map(item => item.name && item.name).join(', ')}
                    </FeaturedGeneres>
                </FeaturedInfo>
            </FeaturedHorizontal>
        </FeaturedVertical>
    </Featured>
}
export default FeaturedMovie;
