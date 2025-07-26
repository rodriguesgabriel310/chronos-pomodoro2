import { Heading } from './components/Heading';

import './styles/theme.css';
import './styles/global.css';
import { TimerIcon } from 'lucide-react';



export function App(){
    return (
    <>
      <Heading>
        History
        <button>
          <TimerIcon />
         </button>
      </Heading>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing 
        elit. Deleniti, unde repudiandae. Molestias vel optio
         quis, dolore voluptatem velit. Repellendus quod tenetur
          obcaecati ut inventore consequuntur 
        excepturi cumque earum minima placeat?
      </p>
    </>
    );
}


