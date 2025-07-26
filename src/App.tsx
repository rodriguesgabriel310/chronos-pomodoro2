import { Heading } from './components/Heading';

import './styles/theme.css';
import './styles/global.css';



export function App(){
    console.log('olá');

    return (
    <>
      <Heading attr={123} attr2='String'>Olá</Heading>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing 
        elit. Deleniti, unde repudiandae. Molestias vel optio
         quis, dolore voluptatem velit. Repellendus quod tenetur
          obcaecati ut inventore consequuntur 
        excepturi cumque earum minima placeat?
      </p>
    </>
    );
}


