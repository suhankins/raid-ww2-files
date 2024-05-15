export type IRaid = {
    id: string;
    name: string;
};

export type IOperation = {
    name: string;
    parts: IRaid[];
};

export type IJob = IRaid | IOperation;
