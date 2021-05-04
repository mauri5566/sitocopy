export interface CPData{
    cp: {
        peerBGPId: number;
        peerIPAddress: string;
        peerAS: number;
    };
    sequencesCount: number;
}
