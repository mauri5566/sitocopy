export interface CPDataUpdates {
    _id: {
        peerBGPId: number;
        peerIPAddress: string;
        peerAS: number;
    };
    announcements: number;
    withdrawals: number;
}
