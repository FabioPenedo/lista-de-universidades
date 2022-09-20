import { Request, Response } from 'express';
import { UserType } from '../models/Universities';
import { requestApi } from '../helpers/requestApi';
import * as ApiService from '../services/apiService';

export const insertApi = async (req: Request, res: Response) => {
  if(req.body.country) {
    let country: string = req.body.country
    let countryUpperCase = country[0].toUpperCase() + country.substring(1);
    let returnApi: UserType[] = await requestApi(country)
    if(returnApi.length > 0) {
      const date = await ApiService.insertDate(returnApi, countryUpperCase)
      if(date instanceof Error) {
        res.json({ error: date.message });
        return;
      } else {
        res.status(201);
        res.json({ Date: true});
        return;
      }
    }
  };

  res.json({ error: 'Country não foi enviado ou não existe na API!' });
}

export const all = async (req: Request, res: Response) => {
  const returnDate = await ApiService.all()
  res.json({ Dates: returnDate })
};