import React from 'react';

import { StyledContainer, Card, Title, P, H1 } from './post-component.styles';

import useFetch from '../../effects/use-fetch.effect';


const Post = ({postId}) => {
    const post = useFetch(`https://jsonplaceholder.typicode.com/posts?id=${postId}`);

    return (
      <StyledContainer>
          <Card>
              { 
                post ? (
                    <>
                        <Title>{post.title}</Title>
                        <P>{post.body}</P>
                    </>
                ) : ( 
                    <H1>Post not found</H1>
                )
                } 
            </Card>
        </StyledContainer>
    )
};

export default Post;
