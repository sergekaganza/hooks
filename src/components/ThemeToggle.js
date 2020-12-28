import React, { Component } from 'react';
import { ThemeContext } from '../contexts/ThemeContexts';

class ThemeToggle extends Component  {
    static coontextType = ThemeContext;
    render() {
      const { toggleTheme } = this.context;
      return (  
          <button onClick={toggleTheme}>Toggle the theme</button>
        
       );
    }
}

export default ThemeToggle;
