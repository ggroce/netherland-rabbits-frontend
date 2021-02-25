import React from 'react';

function Policies(props) {
  const lines = [];
  for (let i = 100; i > 0; i--) {
    lines.push(<p key={i}>Let us test the scrolling.</p>);
  };

  return(
    <div>
      <div className="spacer" />
      <h1>Page 2</h1>
      <p>Policies go here.</p>
    </div>
  );
}

export default Policies;
