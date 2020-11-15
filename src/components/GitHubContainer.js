import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import styled from 'styled-components';
import axios from 'axios';
import ReadMePanel from './ReadMePanel';
import ControlPanel from './ControlPanel';
import TitleBar from "./TitleBar";

const GitHubCompound = styled.div`
  display: flex;
  flex-direction: row;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid cyan;
`;

const GitHubContainer = () => {
  
  const dispatch = useDispatch();
  const gitHubUserName = useSelector(state => state.gitHubUserName);

  useEffect(() => {
    const apiUrl = `https://api.github.com/users/${gitHubUserName}/repos?per_page=100`;
    axios.get(apiUrl).then(({data: reposData}) => {
      dispatch({ type: 'SET_REPOS', reposData });
      dispatch({ type: 'SET_CURRENT_ERROR', currentError: null});
    }).catch(error => {
      dispatch({ type: 'SET_CURRENT_ERROR', currentError: error.response.statusText});
    });
  }, [dispatch, gitHubUserName]);

  return <Container>
    <TitleBar/>
    <GitHubCompound>
        <ControlPanel/>
        <ReadMePanel/>
    </GitHubCompound>
  </Container>
}


export default GitHubContainer;