import { generateReactComponent } from "./generateReact";

export function generateHTMLFile(components) {
    let html = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Generated Page</title>
    <link rel="stylesheet" href="styles.css">
  </head>
  <body${components[0].attributs.myStyle ? ` style="${styleFormat(components[0].attributs.myStyle)}"` : ''}>
  `;
  
    const bodyComponents = components.map(component => {
      if (component.attributs.id === "root") {
        return generateReactComponent({ ...component, attributs: { ...component.attributs, id: "", class: "", style: "" } });
      } else {
        return generateReactComponent(component);
      }
    }).join("\n");
  
    html += bodyComponents;
    html += `
  </body>
  </html>
  `;
  
    return html;
  }
  