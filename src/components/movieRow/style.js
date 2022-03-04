import styled from 'styled-components';

export const MovieRowArea = styled.div`
  margin-bottom: 30px;
  &:hover #button_row{
        opacity: 1;
        transition: all ease 0.5s;
    };
`;
export const MovieRowLeft = styled.div`
 position: absolute;
 width: 40px;
 height: 225px;
 background-color: rgba(0,0,0,0.6);
 left: 0;
 display: flex;
 justify-content: center;
 align-items:center;
 overflow: hidden;
 cursor: pointer;
 z-index: 99;
 opacity: 0;
 &:hover {
        opacity: 1;
        transition: all ease 0.2s;
    };
 @media(max-width: 760px){
   opacity: 1;
 }
`;
export const MovieRowRight = styled.div`
 position: absolute;
 width: 40px;
 height: 225px;
 background-color: rgba(0,0,0,0.6);
 right:0;
 z-index: 99;
 display: flex;
 justify-content: center;
 align-items:center;
 overflow: hidden;
 cursor: pointer;
 opacity: 0;
 &:hover {
        opacity: 1;
        transition: all ease 0.2s;
    };
@media(max-width: 760px){
   opacity: 1;
 }
`;
export const MovieRowListListArea = styled.div`
 overflow-x: hidden;
 padding-left:30px;
`;
export const MovieRowItem = styled.div`
    display: inline-block;
    width: 150px;   
    /* padding-left:30px; */
    cursor: pointer;
`;
export const MovieRowList = styled.div.attrs(props => ({
    style: {
        marginLeft: props.marginLeft,
        width: props.width
    }
}))`
 transition: all ease 0.5s;
`;
export const styleNavigate = {
    fontSize: 50,
};
export const MovieImage = styled.img.attrs(props => ({
    src: props.Img,
}))`
    width:100%;
    transform: scale(0.9);
    transition: all ease 0.2s;
    &:hover {
        transform: scale(1);
    };
    cursor: pointer;
`;
