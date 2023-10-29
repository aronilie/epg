// eslint-disable-next-line import/no-named-as-default
import styled from 'styled-components';

const EPGStyled = styled.div`
    background: #141414;
    position: relative;
    overflow: scroll;
    width: 100%;
    height: 100%;

    .grid {
        max-width: 100%;
        height: 94.5%;
        max-height: 94.5%;
        position: relative;
        background: #141414;
        color: #fff;

        &--list::-webkit-scrollbar {
            display: none;
        }

        &--list {
            -ms-overflow-style: none;
            scrollbar-width: none;
            transform: translateZ(0);
            position: relative;
            left: max(6.25em, 80px);
            width: calc(100% - max(6.25em, 80px));
            overflow: scroll;
            height: 100%;
            display: flex;
            flex-direction: column;

            &--item {
                position: relative;
                display: inline-block;
                height: 75px;
            }
        }
    }
`;

export default EPGStyled;
