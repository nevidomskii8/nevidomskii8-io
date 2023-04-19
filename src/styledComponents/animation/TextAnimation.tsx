import React from 'react';
import styled, {keyframes} from 'styled-components';

const TextAnimation: React.FC<TextAnimationProp> = ({children}) => {
    if (typeof children !== 'string') {
        return null;
    }
    const stringArray = children.split(' ');
    return (
        <Wrapper>
            {stringArray.map((item, i) => (
                <span key={i}>{item} &#x200b;</span>
            ))}
        </Wrapper>
    );
};

const animation = keyframes`
    0% {opacity: 0; transform: translateY(-100px) skewY(10deg) skewX(10deg) rotateZ(30deg); filter: blur(10px)}
    25% {opacity: 1; transform: translateY(0px) skewY(0deg) skewX(0deg) rotateZ(0deg); filter: blur(0px)}
    //75% {opacity: 1; transform: translateY(0px) skewY(0deg) skewX(0deg) rotateZ(0deg); filter: blur(0px)}
    //100% {opacity: 0; transform: translateY(-100px) skewY(-10deg) skewX(-10deg) rotateZ(-30deg); filter: blur(10px)}
`;

const Wrapper = styled.span`
    display: inline-block;
    text-align: center;
    span {
        display: inline-block;
        opacity: 0;
        animation-name: ${animation};
        animation-duration: 8s;
        animation-fill-mode: forwards;
        animation-iteration-count: 1;
        animation-timing-function: cubic-bezier();
        font-size: xx-large;
        font-weight: bold;

        @media (max-width: 768px) {
            font-size: x-large;
        }
        @media (max-width: 500px) {
            font-size: large;
        }
    }
    span:nth-child(1) {
        animation-delay: 0.3s;
    }
    span:nth-child(2) {
        animation-delay: 0.6s;
    }
    span:nth-child(3) {
        animation-delay: 0.9s;
    }
    span:nth-child(4) {
        animation-delay: 1.2s;
    }
    span:nth-child(5) {
        animation-delay: 1.5s;
    }
    span:nth-child(6) {
        animation-delay: 1.8s;
    }
    span:nth-child(7) {
        animation-delay: 2.1s;
    }
    span:nth-child(8) {
        animation-delay: 2.4s;
    }
    span:nth-child(9) {
        animation-delay: 2.7s;
    }
    span:nth-child(10) {
        animation-delay: 3s;
    }
    span:nth-child(11) {
        animation-delay: 3.3s;
    }
`;
interface TextAnimationProp {
    children: React.ReactNode;
}

export default TextAnimation;
