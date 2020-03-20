import styled, {css} from 'styled-components';

const getButtonStyle = props => {
    if (props.goBtn) {
        return GoBtnStyle;
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

