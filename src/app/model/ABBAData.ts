export interface ABBAData{
    id: string;
    blobId: string;
    runId: string;
    asPath1: [{
        as: number[],
        isAsSet: boolean
    }];
    asPath1ArrivalTimes: string[];
    asPath2: [{
        as: number[],
        isAsSet: boolean
    }];
    asPath2ArrivalTimes: string[];
}