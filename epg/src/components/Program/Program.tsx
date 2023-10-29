import { Program as ProgramModel } from '../../models/Program';
import {
    getProgramTimeRange,
    calculateProgramStartPosition,
    calculateProgramPixelLength,
    isProgramPlayingNow,
} from '../../utils/dataProcessing';
import ProgramStyled from './ProgramStyled';

interface ProgramProps {
    program: ProgramModel;
}

const Program = ({ program }: ProgramProps) => {
    const pixelLength = calculateProgramPixelLength(program);
    const startPosition = calculateProgramStartPosition(program) || 'auto';
    return (
        <ProgramStyled
            className={isProgramPlayingNow(program) ? 'actual' : ''}
            style={{
                width: `${pixelLength}em`,
                left: `${startPosition}em`,
            }}
        >
            <div className="program__title">{program.title}</div>
            <div className="program__time">{getProgramTimeRange(program)}</div>
        </ProgramStyled>
    );
};

export default Program;
