import { Request, Response } from 'express';
import Universities from '../models/Universities';


export const home = async (req: Request, res: Response)=>{
  let users = await Universities.find({})
  console.log(users)
};