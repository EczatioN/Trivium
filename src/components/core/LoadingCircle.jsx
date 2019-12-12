import React from 'react'
import styled from 'styled-components';

function LoadingCircle(props) {

  return (
    <Container>
      <Circular>
        <Path
          cx="50"
          cy="50"
          r="20"
          fill="none"
          stroke-width="5"
          stroke-miterlimit="10"
        />
      </Circular>
    </Container>
  )
}

LoadingCircle.propTypes = {

}

const Container = styled.div`
  position: relative;
  height: 100px;
  width: 100px;
  margin: auto;
`;

const Circular = styled.svg`
  animation: rotate 2s linear infinite;
  height: 100px;
  width: 100px;
  position: relative;
`;

const Path = styled.circle`
  stroke-dasharray: 1,200;
  stroke-dashoffset: 0;
  stroke:#B6463A;
  stroke-width: 5;
  animation:
   dash 1.5s ease-in-out infinite,
   color 6s ease-in-out infinite
  ;
  stroke-linecap: round;

  @keyframes rotate{
    100%{
      transform: rotate(360deg);
    }
  }
  @keyframes dash{
    0%{
      stroke-dasharray: 1,200;
      stroke-dashoffset: 0;
    }
    50%{
      stroke-dasharray: 89,200;
      stroke-dashoffset: -35;
    }
    100%{
      stroke-dasharray: 89,200;
      stroke-dashoffset: -124;
    }
  }
  @keyframes color{
    100%, 0%{
      stroke: #d62d20;
    }
    40%{
      stroke: #0057e7;
    }
    66%{
      stroke: #008744;
    }
    80%, 90%{
      stroke: #ffa700;
    }
  }
`;

export default LoadingCircle

