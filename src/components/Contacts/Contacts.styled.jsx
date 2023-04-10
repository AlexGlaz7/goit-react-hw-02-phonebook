import styled from '@emotion/styled';

 const List = styled.ul`
  display: flex;
  margin: auto;
  flex-direction: column;
  width: 300px;
  outline: 2px solid black;
  padding: 10px;
`
 const ContactItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: baseline;`
  
 const ButtonDelete = styled.button`
  width: 100px;
  background-color: black;
  color: orange;
  border-radius: 50px;
  height: 20px;
  margin-bottom: 10px;
  }
`;

export { List, ContactItem, ButtonDelete };
