// eslint-disable-next-line import/no-named-as-default
import styled from 'styled-components';

const TimeLineStyled = styled.div`
    overflow: scroll;
    position: absolute;
    overflow: hidden;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: 9999;

    .timeline {
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        border-left: 2px solid #e1a21e;
    }
`;

export default TimeLineStyled;
