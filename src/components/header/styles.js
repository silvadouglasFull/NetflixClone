import styled from 'styled-components';

export const HeaderContainer = styled.header`
 position: fixed;
 z-index: 999;
 top: 0;
 left: 0;
 right: 0;
 height: 70px;
 display: flex;
 justify-content:space-between;
 align-items: center;
 padding: 0 30px;
 background: ${props => props.background ? props.background : 'transparent'};
 transition: all ease 0.5s;
 `;
export const HeaderLogo = styled.div`
 height: 25px;
`;
export const HeaderLogoButton = styled.a`
`;
export const HeaderUser = styled.div`
 height: 35px;
`;
export const HeaderUserImageButton = styled.a`
`;
export const HeaderUserImaege = styled.img.attrs(props => ({
    src: props.Img,
}))`
 height: 100%;
`;
export const HeaderLogoImage = styled.img.attrs(props => ({
    src: props.Img,
}))`
 height: 100%;
 border-radius: 3px;
`;