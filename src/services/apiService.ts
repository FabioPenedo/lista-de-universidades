import Universities from '../models/Universities';
import { UserType } from '../models/Universities';

export const insertDate = async (returnApi: UserType[], country: string) => {
  const hasDate = await Universities.find({country})
  if(hasDate.length > 0) {
    return new Error('Dados já existe');
  } else {
    for(let i in returnApi) {
      await Universities.create({
        domains: returnApi[i].domains,
        alpha_two_code: returnApi[i].alpha_two_code,
        country: returnApi[i].country,
        web_pages:  returnApi[i].web_pages,
        name: returnApi[i].name,
        state_province: returnApi[i].stateprovince
      });
    };
  };
};