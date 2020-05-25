import {Request, Response} from 'express';

export const requestLogMiddleware = (request: Request, response: Response, next: () => void) => {
  // console.log(`Requesting ${request.url}`);
  next();
};
