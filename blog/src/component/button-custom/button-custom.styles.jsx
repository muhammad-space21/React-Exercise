import styled, {css} from 'styled-components';

const getButtonStyle = props => {
    if (props.goBtn) {
        return GoBtnStyle;
    } else if (props.subscribeBtn) {
        return SubscribeBtn;
    } else if (props.postBtn) {
        return PostBtn;
    } else {
        return  StyledContainer;
    }
}


export const StyledContainer = styled.button`
    width: 50%;
    @media screen and ( max-width: 768px ) {
        width: 100%;
    }
    height: 58px;
    border: 1px solid #D5D7D8;
    text-align: center;
    background-color: white;
    font-size: 16px;
    font-weight: 700;
    &:hover {
        opacity: 0.5;
    }
    ${getButtonStyle};
`;


export const GoBtnStyle = css`
    width: 50%;
    height: 37px;
    background-color: #31363A;
    border-radius: 5px;
    font-size: 12px;
    border: none;
    color: white;
    text-align: center;
    @media screen and ( max-width: 768px ) {
        width: 100%;
    }
`;

export const SubscribeBtn = css`
    width: 125px;
    height: 37px;
    border-radius: 3px;
    background-color: #C82502;
    color: white;
    font-size: 13px;
    font-weight: 700;
    text-align: center;
    border: 1px solid #C82502;
    &:hover {
        background-color: #A01E02;
        border-color: #A01E02;
        opacity: 100;
    }
`;

export const PostBtn = css`
    width: 128px;
    height: 38px;
    background-color: black;
    border-radius: 3px;
    border: none;
    color: white;
    font-size: 13px;
    text-align: center;
    &:hover {
        cursor: pointer;
        opacity: 0.5;
    }
`;
