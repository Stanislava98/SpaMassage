import {styled} from "@mui/material";

const Root = styled('div')({
  fontSize: '14px',
  color: 'white',
  textTransform: 'uppercase',
  display: 'flex',
  gap: '20px',
  fontWeight: 'bold',
  '& :hover': {
    color: '#dc5b13',
    cursor: 'pointer',
  },
})

const MenuBar = (props) => {
  return (
    <Root>{props.children}</Root>
  )
}

export default MenuBar;