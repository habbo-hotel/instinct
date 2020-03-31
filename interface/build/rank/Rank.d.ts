import { User } from '../';
export interface Rank {
    id: number;
    name: string;
    badge: string;
    users: User[];
}
export declare const exampleRank: Rank;
