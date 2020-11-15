import styled from 'styled-components';
import React from 'react';
import {useSelector,useDispatch} from 'react-redux';
import TextField from "@material-ui/core/TextField";
import ReposPanel from './ReposPanel';

const ControlPanelContainer = styled.div`
  flex-direction: column;
  display: flex;
  font-size: 12px;
  margin: 20px;
  padding: 5px;
  min-width: 300px;
  min-height: 500px;
`;

const StyledTextField = styled(TextField)`
  font-size: 16px;
`;

const StyledSearchPanel = styled.div`
  flex-direction: row;
  display: flex;
`;
const StyledLabel = styled.div`
  align-self: center;
`;

const ControlPanel = () => {
  
  const searchString = useSelector(state => state.searchString);
  const dispatch = useDispatch();
  const onChange = e => {
    dispatch({type: 'SET_SEARCH_STRING', searchString: e.target.value});
  }

  return <ControlPanelContainer>
    <StyledSearchPanel>
      <StyledLabel>Search:</StyledLabel>
      <StyledTextField 
        onChange={onChange}
        value={searchString} 
      />
    </StyledSearchPanel>
    <ReposPanel/>
  </ControlPanelContainer>
}

export default ControlPanel;