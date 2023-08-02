import styled from '@emotion/styled';

export const Button = styled.button`
  padding: 10px;
  width:150px;
  background-color: darkblue;
  font-size: 18px;
  border-radius: 14px;
  color: white;
  font-weight: bold;
  &:hover {
    background-color:black;
  }
`
export const Label = styled.label`
font-weight: bold;
font-size: 22px;
display:flex;
flex-direction:column;
`
export const Form = styled.form`
max-width:500px;
border: 2px solid black;
margin-left:50px;
padding:50px;
display:flex;
flex-direction:column;
gap:20px;
`
export const InputName = styled.input`
font-size: 20px;
width:350px;
height:40px;
background-color:lightblue;
border-radius: 14px;
outline:none;
`