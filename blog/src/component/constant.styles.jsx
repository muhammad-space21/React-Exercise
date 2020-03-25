import styled from 'styled-components';


export const HeadingBig = styled.span`
    font-size: 46px;
    line-height: 50px;
    font-weight: 1000;
`;

export const HeadingSmall = styled.span`
    font-size: 15px;
    font-weight: 1000;
    line-height: 15px;
    margin-bottom: 10px;
`;

export const SecondaryText = styled.span`
    font-size: 17px;
    line-height: 23px;
    color: #282828;
    margin-top: 10px;
    margin-bottom: 10px;
`;

export const AuthorName = styled.span`
    font-size: 14px;
    margin-left: 4px;
    font-weight: 600;
    color: #282828;
`;

export const ArticleType = styled.span`
    font-size: 14px;
    text-transform: uppercase;
    color: #0787B1;
    margin-left: 4px;
    font-weight: 400;
    &:hover {
        cursor: pointer;
        opacity: 0.5;
    }
`;