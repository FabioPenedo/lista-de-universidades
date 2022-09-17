import { Request, Response } from 'express';
import Universities from '../models/Universities';
import { requestApi } from '../helpers/requestApi';

export const home = async (req: Request, res: Response) => {
  
};

export const registerUniversities = async (req: Request, res: Response) => {
  if(req.body.domains && req.body.country && req.body.name) {
    let {domains, country, name} = req.body
    let returnApi = await requestApi(country)
    res.json({api: returnApi})
    return
  }
  res.json({ error: 'nao enviado' });
}