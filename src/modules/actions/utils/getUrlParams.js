// @flow
const options = ['limit', 'sortOrder', 'sortBy', 'searchBy', 'search'];

const getUrlParams = (url: string, params: string) => {
  let splittedParams = params.split('-');
  splittedParams = splittedParams.map((param, index) => param && `${options[index]}=${param}`);
  return `${url}?${splittedParams.join('&')}`;
};

export default getUrlParams;
