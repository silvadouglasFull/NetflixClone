import React, { useContext } from 'react';
import { requestContext } from '../../context/requestContext';
import { LoadingImg } from './styles';
import Netflix_LoadTime from '../../assets/img/Netflix_LoadTime.gif';
const Loading = () => {
    const { isFeching } = useContext(requestContext)
    return isFeching && <LoadingImg Img={Netflix_LoadTime} alt="loading" />
}
export default Loading
