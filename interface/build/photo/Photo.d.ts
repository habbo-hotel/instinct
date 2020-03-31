import { User } from '../user';
export interface Photo {
    id: number;
    createdAt: number;
    userID: number;
    user?: User;
    roomID: number;
    imagePath: string;
}
export declare const examplePhoto: Photo;
