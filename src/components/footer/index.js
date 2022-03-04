import React from 'react';
import { Footer, FooterCoracao, FooterText } from './styles';
const Rodape = () => {
    return <Footer>
        <FooterText>
            Feito com
            <FooterCoracao role='img' arial-label='corcao'>
                ❤️
            </FooterCoracao>
        </FooterText>
        <FooterText>pelo Douglas Silva</FooterText>
        <FooterText>
            Direitos de imagem para Netflix
        </FooterText>
        <FooterText>
            Dados pegos pelo site The Movie Database (TMDB)
        </FooterText>
    </Footer>
}
export default Rodape;