import styled from 'styled-components';


export const StyledContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    h1 {
        font-size: ${props => (props.big ? '23px' : '21px')};
        font-weight: 1000;
        line-height: 25px;
        margin-bottom: 10px;
            &:hover {
                cursor: pointer;
                opacity: 0.5;
            }
        }
    h2 {
        font-size: 14px;
        text-transform: uppercase;
        color: #0787B1;
        margin-left: 4px;
        font-weight: 400;
    }
    h3 {
        font-size: 14px;
        text-transform: uppercase;
        margin-left: 4px;
        font-weight: 400;
    }
    h4 {
        font-size: 14px;
        margin-left: 4px;
        font-weight: 600;
        color: ${props => (props.asideArticle ? 'black' : '#888888')};
    }
    span {
        display: ${props => (props.secondaryTextHide ? 'none' : 'block')};
        font-size: 14px;
        font-weight: 600;
    }
`;


export const TextWrapper = styled.div`
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: row;
`;

export const ButtonsWrapper = styled.div`
    width: 70px;
    height: fit-content;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

