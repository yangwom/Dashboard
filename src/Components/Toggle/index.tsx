import React from 'react';
import { Container, ToggleLabel } from './styele';
import { ToggleSelector } from './styele';


const Toggle: React.FC = () => (
<Container>
    <ToggleLabel>Light</ToggleLabel>
    <ToggleSelector
     checked
     onChange={ () =>  console.log('mudou') }
     uncheckedIcon={false}
     checkedIcon={false}
    />
    <ToggleLabel>Dark</ToggleLabel>
</Container>

)

export default Toggle;