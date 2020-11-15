import React from 'react';
import styled from 'styled-components';
import {useDispatch, useSelector} from 'react-redux';

const StyledRepos = styled.ul`
  flex-direction: column;
  display: flex;
  font-size: 12px;
  margin: 20px;
  padding: 5px;
`;

const StyledItem = styled.li`
  list-style-type: none;
  margin-top: 5px;
  font-size: 12px;
`;

const StyledAnchor = styled.span`
  :hover {
    color: red;
    cursor: pointer;
  }
`;


const ReposPanel = () => {

  const dispatch = useDispatch();

  const clickEvent = ({name}) => {
    dispatch({type: 'SET_CURRENT_REPO', repo: name})
  };

  const repos = useSelector(state => state.repos);
  const searchString = useSelector(state => state.searchString);

  return <StyledRepos>
    {repos && repos.map(item => (!searchString || item.name.toUpperCase().indexOf(searchString.toUpperCase()) > -1) && <StyledItem key={item.name}><StyledAnchor onClick={() => clickEvent(item)}>{item.name}</StyledAnchor> {item.forks}</StyledItem>)}
  </StyledRepos>
};

export default ReposPanel;