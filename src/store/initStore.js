import { createStore } from 'redux'

const config = {
  gitHubUserName: 'niron1',
  currentRepo: '',
  searchString: '',
  currentError: '', 
  repos: [],
}

function reducer(state = {...config}, action) {
  switch (action.type) {
    case 'SET_REPOS':
      return {...state, repos: action.reposData};
    case 'SET_CURRENT_REPO':
      return {...state, currentRepo: action.repo};
    case 'SET_GITHUB_USERNAME':
      return {...state, gitHubUserName: action.gitHubUserName, currentRepo: ''};
    case 'SET_SEARCH_STRING':
      return {...state, searchString: action.searchString};
    case 'SET_CURRENT_ERROR':
      return {...state, currentError: action.currentError};
    default:
      return state
  }
}
const devTool = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__();

const store = createStore(reducer, 
  devTool,
);


export default store;