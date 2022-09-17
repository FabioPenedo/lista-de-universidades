import fetch from 'node-fetch';

export const requestApi = async (country: string) => {
  const requestCountries = await fetch(`http://universities.hipolabs.com/search?country=${country}`);
  return await requestCountries.json()
};
