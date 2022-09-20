import Universities from '../models/Universities';
import { UserType } from '../models/Universities';
import nameUniversities from '../models/nameUniversities';
import { ObjectId } from 'mongoose';

export const insertDate = async (returnApi: UserType[], country: string) => {
  const hasDate = await Universities.find({country})
  if(hasDate.length > 0) {
    return new Error('Dados já existe');
  } else {
    const apiUnique  = new Map()
    returnApi.forEach((item, i) => {
      if(!apiUnique.has(item)) {
        apiUnique.set(item.name, item)
      }
    });
    const apiFiltered  = [...apiUnique.values()]

    apiFiltered.forEach( async (item) => {
      await Universities.create({
        domains: item.domains,
        alpha_two_code: item.alpha_two_code,
        country: item.country,
        web_pages: item.web_pages,
        name: item.name,
        state_province: item.stateprovince
      })
    })
    await insertNameUniversities(apiFiltered)
  };
};

export const insertNameUniversities = async (apiFiltered: UserType[]) => {
  apiFiltered.forEach( async (item) => {
    await nameUniversities.create({
      name: item.name
    })
  })
};

export const all = async () => {
  return await Universities.find({})
}

export const country = async (nameCountry: string) => {
  return await Universities.find({
    country: nameCountry
  })
}

export const id = async (numberId: string) => {
  return await Universities.findById(numberId)
}