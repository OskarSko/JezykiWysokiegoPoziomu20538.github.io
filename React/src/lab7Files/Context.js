import React, { createContext, useContext, useState } from 'react';

const ThemeContext = createContext(null);

export default function MyApp() {
  const [theme, setTheme] = useState('light');

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Form />
      <label>
        <input
          type="checkbox"
          checked={theme === 'dark'}
          onChange={(e) => setTheme(e.target.checked ? 'dark' : 'light')}
        />
        Use dark mode
      </label>
    </ThemeContext.Provider>
  );
}

function Form() {
  return (
    <Panel title="Welcome">
      <Button>Sign up</Button>
      <Button>Log in</Button>
    </Panel>
  );
}

function Panel({ title, children }) {
  const { theme } = useContext(ThemeContext);


  const panelStyle = {
    padding: '20px',
    backgroundColor: theme === 'dark' ? '#333' : 'white',
    color: theme === 'dark' ? 'white' : 'black',
  };

  return (
    <section style={panelStyle}>
      <h1>{title}</h1>
      {children}
    </section>
  );
}

function Button({ children }) {
  const { theme } = useContext(ThemeContext);

  const buttonStyle = {
    padding: '10px 20px',
    backgroundColor: theme === 'dark' ? '#555' : '#f0f0f0',
    color: theme === 'dark' ? 'white' : 'black',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  };

  return (
    <button style={buttonStyle}>
      {children}
    </button>
  );
}