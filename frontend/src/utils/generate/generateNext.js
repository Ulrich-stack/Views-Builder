import { generateReactComponent } from "./generateReact";

export function generateNextApp(components) {
    const componentCode = components.map(component => generateReactComponent(component, 1)).join("\n");
  
    const pageContent = `
  import React from 'react';
  
  function Home() {
    return (
      <div>
        ${componentCode}
      </div>
    );
  }
  
  export default Home;
  `;
  
    return pageContent;
  }
  