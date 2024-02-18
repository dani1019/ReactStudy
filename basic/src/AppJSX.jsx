import logo from './logo.svg';
import './App.css';

function AppJSX() {
  const name = 'elle';
  const list = ['milk', 'strawberry','banana']
  return (
    <>
      <h1 className = 'Orange'>{`Hello! ${name}`}</h1>
      <h2>Hello!</h2>
      <p>{name}</p>
      <ul>
        {
          list.map((item) => 
            <li>{item}</li>
          )
        }
      </ul>
      <img 
       style = {{width : '200px', height: '200px'}}
      src="logo.svg" alt=""></img>
    </>
  );
}

export default AppJSX;
