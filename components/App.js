// import React from 'react'
// import 'main.css'
// import { useState } from 'react-dom' 

const el = React.createElement;

function App () {
  const { useState } = React;
  const [ state, setState ] = useState({ liked: false })
  return (
    
    <div>
      <h1 className="title">React, Props, Parent to Child</h1>
 
    { el('h2', { className: 'sub' }, 'Events and all the rest...') }
     { el('button',
        { onClick: () => setState({ liked: true }) },
        'Like')}
    </div> 
  )
}

const root = ReactDOM.createRoot( document.getElementById('root'));
root.render(el(App))