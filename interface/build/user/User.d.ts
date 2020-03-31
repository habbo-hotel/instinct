import { Rank } from '../';
export interface User {
    id: number;
    username: string;
    motto: string;
    credits: number;
    pixels: number;
    points: number;
    online: boolean;
    figure: string;
    rank?: Omit<Rank, 'users'>;
}
export declare const exampleUser: User;
