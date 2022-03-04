import React from 'react';
import {
    HeaderContainer, HeaderLogo, HeaderLogoButton,
    HeaderLogoImage, HeaderUser, HeaderUserImageButton,
    HeaderUserImaege,
} from './styles';
import netflix_logo from '../../assets/img/netflix_logo.png';
import user_image_default from '../../assets/img/user_image_default.png';
const Header = ({ background }) => {


    return <HeaderContainer background={background}>
        <HeaderLogo>
            <HeaderLogoButton hrf="/">
                <HeaderLogoImage Img={netflix_logo} alt="netflix" />
            </HeaderLogoButton>
        </HeaderLogo>
        <HeaderUser>
            <HeaderUserImageButton href='/'>
                <HeaderUserImaege Img={user_image_default} alt="user-image" />
            </HeaderUserImageButton>
        </HeaderUser>
    </HeaderContainer>
};
export default Header;