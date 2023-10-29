/* eslint-disable import/no-named-as-default */
import styled from 'styled-components';

const ProgramStyled = styled.div`
    padding: 0.5em;
    border: 1px solid #b9b9b9;
    background: #2b2b2b;
    height: 75px;
    max-height: 75px;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
    overflow: hidden;
    position: absolute;
    text-align: start;

    .program {
        &__title {
            font-weight: bold;
        }

        &__time {
            color: #b9b9b9;
        }
    }
`;

export default ProgramStyled;
