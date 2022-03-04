import React, { useState } from 'react';
import {
    MovieImage, MovieRowArea, MovieRowItem,
    MovieRowLeft, MovieRowListListArea, styleNavigate,
    MovieRowRight, MovieRowList,
} from './style';
import NavigateBefore from '@material-ui/icons/NavigateBefore';
import NavigateNext from '@material-ui/icons/NavigateNext';
const MovieRow = ({ items }) => {
    const [scrollX, setScrollX] = useState(0)
    const {
        results
    } = items
    const handleLeftArrow = () => {
        let x = scrollX + Math.round(window.innerWidth / 2);
        if (x > 0) {
            x = 0;
        }
        setScrollX(x);
    }
    const handleRightArrow = () => {
        let x = scrollX - Math.round(window.innerWidth / 2);
        let listw = results.length * 150;
        if ((window.innerWidth - listw) > x) {
            x = (window.innerWidth - listw) - 60;
        }

        setScrollX(x)
    }
    return <MovieRowArea>
        <MovieRowLeft id='button_row' onClick={handleLeftArrow}>
            <NavigateBefore style={styleNavigate} />
        </MovieRowLeft>
        <MovieRowRight id='button_row' onClick={handleRightArrow}>
            <NavigateNext style={styleNavigate} />
        </MovieRowRight>
        <MovieRowListListArea>
            <MovieRowList marginLeft={scrollX} width={results.length * 150}>
                {results.length > 0 && results.map((item, key) => (
                    <MovieRowItem key={key}>
                        <MovieImage Img={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_name} />
                    </MovieRowItem>
                ))}
            </MovieRowList>
        </MovieRowListListArea>
    </MovieRowArea>
}
export default MovieRow;