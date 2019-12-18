import React from 'react';

const Main = ({ pageContext: { menu } }) => {
  return (
    <>
      { menu && <h1 style={{ color: 'red' }}>{ menu.title }</h1> }
      { !menu && <h1>No Menu!</h1> }
    </>
  );
}

export default Main;