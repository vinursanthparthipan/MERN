import react from 'react';
import themeimg from './image/e-learning.jpg';

function App() {
  const message ='Hello..!';
  const paragraph='My self';
  const name='Vinu';


//Using JSX to create elements
  const theme =<img src="{themeimg}" alt="Theme for wedsite"/>;

//passing children to JSX elements
const welcome =(props) =>{
  return <div>{props.vhildren}</div>;
};
  return (
    <div>
      {theme}
      <h1>{message}</h1>
      <h2>{paragraph}</h2>
      <p>{name}</p>
    </div>
  );
}

export default App;
