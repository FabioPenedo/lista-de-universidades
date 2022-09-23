import Universities from '../models/Universities';
import { UserType } from '../models/Universities';
import nameUniversities from '../models/nameUniversities';
import { ObjectId } from 'mongoose';

export const insertData = async (returnApi: UserType[], country: string) => {
  const hasData = await Universities.find({country})
  if(hasData.length > 0) {
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
};

export const country = async (nameCountry: string) => {
  return await Universities.find({
    country: nameCountry
  })
};

export const id = async (numberId: string) => {
  if(numberId.length == 24) {
    return await Universities.findById(numberId)
  } else {
    return new Error('Mínimo de caracteres a ser enviado é 24');
  }
};

export const registerUniversity = async (initialsUpperCase: string, web_pages: string, nameUpperCase: string, countryUpperCase: string, domains: string, stateProvinceUpperCase?: string) => {
  const checkRegisteredUniversity = await Universities.find({
    country: countryUpperCase,
    name: nameUpperCase
  });

  if(checkRegisteredUniversity.length > 0) {
    return new Error('Ja existe esta universidade cadastrada');
  } else {
    let newUniversities = await Universities.create({
      domains: domains,
      alpha_two_code: initialsUpperCase,
      country: countryUpperCase,
      web_pages: web_pages,
      name: nameUpperCase,
      state_province: stateProvinceUpperCase
    });

    const checkUniversityName = await nameUniversities.find({
      name: nameUpperCase
    })
    if(checkUniversityName.length > 0) {
      null
    } else {
      await nameUniversities.create({
        name: nameUpperCase
      })
    }
    return newUniversities
  }
}

export const updatedData = async (numberId: string, web_pages: string, nameUpperCase: string, domains: string) => {
  if(numberId.length == 24) {
    let data = await Universities.findOne({_id: numberId})
    data.web_pages = web_pages
    data.name = nameUpperCase
    data.domains = domains
    await data.save()
    return data
  } else {
    return new Error('Mínimo de caracteres a ser enviado é 24');
  }
}