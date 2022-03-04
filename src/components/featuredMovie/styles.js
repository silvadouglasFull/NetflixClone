import styled from 'styled-components';

export const FeaturedVertical = styled.div`
 width: inherit;
 height: inherit;
 background: linear-gradient(to top, #111 10%, transparent 90%);
`;
export const FeaturedHorizontal = styled.div`
  width: inherit;
 height: inherit;
 background: linear-gradient(to right, #111 30%, transparent 70%);
 display: flex;
 flex-direction: column;
 justify-content: center;
 padding-left: 30px;
 padding-bottom: 150px;
`;
export const FeaturedName = styled.div`
 font-size: 60px;
 font-weight: bold;
 @media(max-width: 760px){
    font-size: 30px;
 }
`;
export const FeaturedInfo = styled.div`
 font-size: 18px;
 font-weight: bold;
 margin-top: 15px;
 @media(max-width: 760px){
    font-size: 16px;
 }
`;
export const FeaturedPoints = styled.div`
 display: inline-block;
 color: #46d369;
 margin-right: 15px;
`;
export const FeaturedYear = styled.div`
 display: inline-block;
 margin-right: 15px;
`;
export const FeaturedSeasons = styled.div`
 display: inline-block;
 margin-right: 15px; 
`;
export const FeatureDescription = styled.div`
 margin-top: 15px;
 font-size: 20px;
 color: #9999;
 max-width: 40%;
 @media(max-width: 760px){
    font-size: 14px;
    max-width: 100%;
    margin-right: 30px;
 }
`;
export const FeatureButtons = styled.div`
 margin-top:15px;
`;
export const FeaturedButtonWatch = styled.a`
 display: inline-block;
 margin-top:15px;
 font-size:20px;
 font-weight: bold;
 padding: 12px 25px;
 border-radius: 5px;
 text-decoration: none;
 margin-right:10px;
 background-color: #FFF;
 color: #000;
 opacity: 1;
 &:hover {
        opacity: 0.7;
        transition: all ease 0.2s;
    };
  @media(max-width: 760px){
    font-size: 16px;
 }
`;
export const FeaturedButtonAddList = styled.a`
 display: inline-block;
 margin-top:15px;
 font-size:20px;
 font-weight: bold;
 padding: 12px 25px;
 border-radius: 5px;
 text-decoration: none;
 margin-right:10px;
 background-color: #333;
 color: #FFF;
 opacity: 1;
 &:hover {
        opacity: 0.7;
        transition: all ease 0.2s;
    };
 @media(max-width: 760px){
    font-size: 16px;
 }
`;
export const FeaturedGeneres = styled.div`
 margin-top: 15px;
 font-size:18px;
 color: #9999;
 @media(max-width: 760px){
    font-size: 14px;
 }
`;
export const Featured = styled.section.attrs(props => ({
    style: {
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundImage: `url(https://image.tmdb.org/t/p/original${props.backgroundImage})`,
    }
}))`
 height:100vh;
 @media(max-width: 760px){
    height:90vh;
 }
`;
