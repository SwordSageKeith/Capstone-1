import React from 'react';
 function Header(){
   return (
    <header>
    <h1>Character Generator</h1>
    <button className = "offset head">New Character</button>
    <button className = "head">Home</button>
    <button className = "head">Log out</button>
  </header>
   );
 }

 export default Header;