import styled from 'styled-components';
export const LoadingImg = styled.img.attrs(props => ({
    src: props.Img,
}))`
 position: 0;
 left: 0;
 top: 0;
 right: 0;
 bottom: 0;
 z-index: 99;
 background-color: #000;
 display: flex;
 justify-content: center;
 align-items: center;
 width: 100%;
 height: 100%;
flex:1;
`;
