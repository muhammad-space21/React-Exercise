import styled from 'styled-components';


export const StyledContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 20px;
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
        &:hover {
            cursor: pointer;
            opacity: 0.5;
        }
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
        display: ${props => (props.secondaryTextHide ? 'none' : '#282828')};
        font-size: 14px;
        font-weight: 600;
    }
    hr {
        width: 100%;
        display: ${props => (props.hrHide ? 'none' : 'block')};
        border-bottom: 0.5px solid #D5D7D8;
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
    display: ${props => (props.buttonsHide ? 'none' : 'flex')};
    flex-direction: row;
    justify-content: space-between;
    margin-top: 10px;
    margin-bottom: 15px;
`;

