// @flow
import SEARCH_FIELDS from '../../../components/search/consts';
import SORT_FIELDS from '../../../components/description/consts';

const maskUrl = (searchValue: string, searchField: string, sortField: string) => {
  let params = '100-asc';
  params += `-${sortField || SORT_FIELDS.release.name}`;
  if (searchValue) {
    params += `-${searchField || SEARCH_FIELDS.title.name}-${searchValue}`;
  }
  return params;
};

export default maskUrl;
