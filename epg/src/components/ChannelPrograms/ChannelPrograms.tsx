import { Program as ProgramModel, Programs } from '../../models/Program';
import Program from '../Program/Program';
import ChannelProgramsStyled from './ChannelProgramsStyled';

interface ChannelProgramsProps {
    programs: Programs;
}

const ChannelPrograms = ({ programs }: ChannelProgramsProps) => {
    return (
        <ChannelProgramsStyled>
            {Array.isArray(programs) &&
                programs.map((program: ProgramModel) => {
                    return (
                        <Program
                            program={program}
                            key={`${program.id}-${program.start}`}
                        />
                    );
                })}
        </ChannelProgramsStyled>
    );
};

export default ChannelPrograms;
