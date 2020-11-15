import styled from 'styled-components';
import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import axios from 'axios';

const Container = styled.div`
  display: flex;
  margin: 20px;
  padding: 10px;
 `;

 
const ReadMePanel = () => {

  const gitHubUserName = useSelector(state => state.gitHubUserName);
  const currentRepo = useSelector(state => state.currentRepo);
  const currentError = useSelector(state => state.currentError);

  const [content, setContent] = useState('');

  useEffect(() => {
    
    const apiUrl = `https://api.github.com/repos/${gitHubUserName}/${currentRepo}/readme`;
    currentRepo && axios.get(apiUrl).then(({data}) => {
      setContent(atob(data.content));
    }).then(data => {
    }).catch(error => setContent('No README.md file'));
  }, [setContent, gitHubUserName, currentRepo, currentError]);
  
  return <Container>
    <pre>
      {currentError || content}
    </pre>
  </Container>;
}


export default ReadMePanel;