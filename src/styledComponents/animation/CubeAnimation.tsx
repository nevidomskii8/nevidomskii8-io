import React from 'react';
import styled from 'styled-components';

const CubeAnimation: React.FC<CubeAnimationProp> = ({children, hover}) => {
    return <Wrapper hover={hover ?? false}>{children}</Wrapper>;
};

const Wrapper = styled.div<{hover: boolean}>((props) => ({
    margin: '20px',
    width: '100px',
    height: '100px',
    perspective: '1200px',

    div: {
        width: '100%',
        height: '100%',
        position: 'relative',
        transformStyle: 'preserve-3d',
        transform: `${
            props.hover
                ? 'translateZ(-50px) rotateY(-90deg)'
                : 'translateZ(-50px)'
        }`,
        transition: 'all 1s',

        div: {
            // sides
            position: 'absolute',
            width: '100px',
            height: '100px',
            textAlign: 'center',
        },

        'div:nth-child(1)': {
            // side-1
            transform: 'rotateY(0deg) translateZ(50px)',
            zIndex: 2,
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
        },

        'div:nth-child(2)': {
            // side-2
            color: 'white',
            backgroundColor: 'deepskyblue',
            transform: 'rotateY(90deg) translateZ(50px)',
            img: {
                height: '100%',
                width: '100%',
            },
        },
    },

    'div:hover': {
        transform: 'translateZ(-50px) rotateY(-90deg)',
        cursor: 'none',
    },
}));

interface CubeAnimationProp {
    hover?: boolean;
    children: React.ReactNode;
}

export default CubeAnimation;
