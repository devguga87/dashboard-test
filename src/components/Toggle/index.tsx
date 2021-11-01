import { useState } from 'react';
import * as Styled from './styles'

const  Toggle:React.FC = () => {
  const[checked, setChecked] = useState(false);

  const handleChange = (checked:boolean) => {
    setChecked(checked)
  }

  return (
    <Styled.Container>
      <Styled.ToggleLabel>Light</Styled.ToggleLabel>
      <Styled.ToggleSelector 
        onChange={handleChange} 
        checked={checked} 
        uncheckedIcon={false}
        checkedIcon={false}
      />
      <Styled.ToggleLabel>dark</Styled.ToggleLabel>
    </Styled.Container>
  )
}

export default Toggle

