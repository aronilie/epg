// eslint-disable-next-line import/no-named-as-default
import styled from 'styled-components';

const TimeScaleStyled = styled.div`
    background: #404040;
    margin-bottom: 1px;
    padding-top: 10px;

    .scale {
        &--container {
            -ms-overflow-style: none;
            scrollbar-width: none;
            display: flex;
            transform: translateZ(0);
            width: calc(100% - max(4.25em, 60px));
            overflow: hidden;
            position: relative;
            left: max(4.25em, 60px);
            gap: 6.25em;

            &::-webkit-scrollbar {
                display: none;
            }
        }

        &--time {
            color: #fff;
        }

        &--separator {
            position: relative;
            bottom: -4px;
        }
    }
`;

export default TimeScaleStyled;
