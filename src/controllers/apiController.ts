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
      const data = await ApiService.insertData(returnApi, countryUpperCase)
      if(data instanceof Error) {
        res.json({ error: data.message });
        return;
      } else {
        res.status(201);
        res.json({ Data: true});
        return;
      }
    }
  };

  res.json({ error: 'Country não foi enviado ou não existe na API!' });
};

export const filter = async (req: Request, res: Response) => {
  let country: string = req.query.country as string
  let page: string = req.query.page as string
  const returnData = await ApiService.allAndOne(country, page)

  res.json({ Datas: returnData })
};

export const filterId = async (req: Request, res: Response) => {
  let numberId: string = req.params.id
  const returnId = await ApiService.id(numberId)
  if(returnId instanceof Error) {
    res.json({ error: returnId.message });
    return;
  } else {
    res.json({ Data: returnId});
    return;
  }
};

export const createNewUniversities = async (req: Request, res: Response) => {
  if(req.body.alpha_two_code && req.body.web_pages && req.body.name && req.body.country && req.body.domains) {
    let {alpha_two_code, web_pages, name, country, domains, stateprovince} = req.body
    let countryUpperCase = country[0].toUpperCase() + country.substring(1);
    let initialsUpperCase = alpha_two_code.toUpperCase()
    let nameUpperCase = name.replace(/(^\w{1})|(\s+\w{1})/g, (letra: string) => letra.toUpperCase());
    let stateProvinceUpperCase = stateprovince.replace(/(^\w{1})|(\s+\w{1})/g, (letra: string) => letra.toUpperCase());

    const registeredUniversity = await ApiService.registerUniversity(initialsUpperCase, web_pages, nameUpperCase, countryUpperCase, domains, stateProvinceUpperCase)
    
    if(registeredUniversity instanceof Error) {
      res.json({ error: registeredUniversity.message });
      return;
    } else {
      res.json({ Data: registeredUniversity});
      return;
    }
  }

  res.json({ error: 'Informações não enviadas' });
};


export const changeData = async (req: Request, res: Response) => {
  let numberId: string = req.params.id
  if(req.body.web_pages && req.body.name && req.body.domains) {
    let {web_pages, name, domains} = req.body
    let nameUpperCase = name.replace(/(^\w{1})|(\s+\w{1})/g, (letra: string) => letra.toUpperCase());
    const newData = await ApiService.updatedData(numberId, web_pages, nameUpperCase, domains)
    if(newData instanceof Error) {
      res.json({ error: newData.message });
      return;
    } else {
      res.json({ Data: newData});
      return;
    }
  }

  res.json({ error: 'Informações não enviadas' });
}

export const deleteData = async (req: Request, res: Response) => {
  let numberId: string = req.params.id
  let deleted = await ApiService.deletedData(numberId)
  if(deleted instanceof Error) {
    res.json({ error: deleted.message });
    return;
  } else {
    res.json({ deleted: true});
    return;
  }
}