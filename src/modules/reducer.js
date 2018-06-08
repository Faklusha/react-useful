import ACTION_TYPES from './actions/actions-types';
import SEARCH_FIELDS from '../components/search/consts';
import SORT_FIELDS from '../components/description/consts';

const initialState = {
  films: [],
  selectedFilm: null,
  searchValue: null,
  searchField: SEARCH_FIELDS.title.name,
  sortField: SORT_FIELDS.release.name,
};

export default function Reducer(state = initialState, action) {
  switch (action.type) {
    case ACTION_TYPES.fetchFilms:
      return state;
    case ACTION_TYPES.saveFilms:
      return Object.assign({}, state, { films: action.films });
    case ACTION_TYPES.fetchFilmById:
      return state;
    case ACTION_TYPES.selectFilm:
      return Object.assign({}, state, { selectedFilm: action.film });
    case ACTION_TYPES.resetFilms:
      return Object.assign({}, state, { films: [] });
    case ACTION_TYPES.resetSelectedFilm:
      return Object.assign({}, state, { selectedFilm: null });
    case ACTION_TYPES.changeSearchValue:
      return Object.assign({}, state, { searchValue: action.value });
    case ACTION_TYPES.changeSearchField:
      return Object.assign({}, state, { searchField: action.value });
    case ACTION_TYPES.changeSortField:
      return Object.assign({}, state, { sortField: action.value });
    default:
      return state;
  }
}
