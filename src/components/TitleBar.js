import styled from 'styled-components';
import React from 'react';
import {useDispatch} from 'react-redux';
import {useSelector} from 'react-redux';
import TextField from "@material-ui/core/TextField";

const TitleStyle = styled.div`
  margin: 20px;
  font-size: 30px;
`;

const StyledTextField = styled(TextField)`
  font-size: 16px;
`;

const TitleBar = () => {
  const gitHubUserName = useSelector(state => state.gitHubUserName);
  const dispatch = useDispatch();
  const onChange = e => {
    dispatch({type: 'SET_GITHUB_USERNAME', gitHubUserName: e.target.value});
  }

  return <TitleStyle>
    Github Username: <StyledTextField
      onChange={onChange}
      value={gitHubUserName}
      />
  </TitleStyle>
};

export default TitleBar;
