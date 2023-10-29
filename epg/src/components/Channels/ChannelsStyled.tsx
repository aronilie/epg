// eslint-disable-next-line import/no-named-as-default
import styled from 'styled-components';

const ChannelsStyled = styled.div`
    &::-webkit-scrollbar {
        display: none;
    }

    -ms-overflow-style: none;
    scrollbar-width: none;
    display: flex;
    flex-direction: column;
    width: max(6.25em, 80px);
    z-index: 1;
    background: black;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    overflow: scroll;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.75);
    clip-path: inset(0px -15px 0px 0px);

    .channel {
        background: #404040;
        height: 75px;
        border-bottom: 1px solid white;
        display: flex;
        align-items: center;
        justify-content: center;

        &__logo {
            object-fit: contain;
        }
    }
`;

export default ChannelsStyled;
