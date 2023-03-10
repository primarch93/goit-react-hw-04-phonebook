import styled from 'styled-components';

export const Button = styled.button`
border-radius:15px;
  border: none;
  background-color: #6aa0d6;
  color:white;
  cursor: pointer;
  opacity: 1;
  :hover,
  :focus {
    opacity: 1;
    /*  color: #27496b; */
  }
  
`;

export const TableRow = styled.tr`
background-color: transparent;
  transition: opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  :hover {
    background-color: #ddedff;
  }
  border-bottom: 1px solid black;
`;

export const NumberCeil = styled.td`
  padding: 10px;
  /*   padding-left: 10px;
 */
  text-align: left;
`;

export const NameCeil = styled.td`
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 10px 15px;
  text-align: center;
  /*   justify-content: center; */
`;

export const ActionCeil = styled.td`
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 10px;
  text-align: center;
  justify-content: center;
`;
