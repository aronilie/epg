export interface Program {
    id: string;
    title: string;
    start: number;
    end: number;
}

export interface Programs {
    programs: Program[];
}
