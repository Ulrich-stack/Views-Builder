import { saveAs } from "file-saver";
import JSZip from "jszip";
import { generateMithrilApp } from "./generateMithril";
import { generateAngularApp } from "./generateAngular";
import { generateHTMLFile } from "./generateHTML";
import { generateNextApp } from "./generateNext";
import { generateReactApp } from "./generateReact";

function generateCSS(components, level = 0) {
  let css = '';
  const indent = '  '.repeat(level);

  components.forEach((component) => {
    let attrs = component.attributs;
    if (attrs.myStyle && attrs.id) {
      css += `${indent}#${attrs.id} {\n`;
      for (let [key, value] of Object.entries(attrs.myStyle)) {
        css += `${indent}  ${key}: ${value};\n`;
      }
      css += `${indent}}\n`;
    }
    if (component.children && component.children.length > 0) {
      css += generateCSS(component.children, level);
    }
  });

  return css;
}


export function generateCSSFile(components) {
  return generateCSS(components, 0).trim();
}

// Utilitaire pour générer le fichier package.json
function generatePackageJson(framework) {
  switch (framework) {
    case 'react':
      return `
{
  "name": "generated-react-app",
  "version": "1.0.0",
  "private": true,
  "dependencies": {
    "react": "^17.0.2",
    "react-dom": "^17.0.2",
    "react-scripts": "4.0.3"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  }
}
`;
    case 'next':
      return `
{
  "name": "generated-next-app",
  "version": "1.0.0",
  "private": true,
  "dependencies": {
    "next": "latest",
    "react": "latest",
    "react-dom": "latest"
  },
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start"
  }
}
`;
    case 'angular':
      return `
{
  "name": "generated-angular-app",
  "version": "1.0.0",
  "private": true,
  "dependencies": {
    "@angular/core": "^12.0.0",
    "@angular/cli": "^12.0.0",
    "rxjs": "^6.6.0",
    "zone.js": "^0.11.4"
  },
  "scripts": {
    "start": "ng serve",
    "build": "ng build",
    "test": "ng test",
    "lint": "ng lint",
    "e2e": "ng e2e"
  }
}
`;
    case 'mithril':
      return `
{
  "name": "generated-mithril-app",
  "version": "1.0.0",
  "private": true,
  "dependencies": {
    "mithril": "^2.0.0"
  },
  "scripts": {
    "start": "parcel index.html",
    "build": "parcel build index.html"
  },
  "devDependencies": {
    "parcel-bundler": "^1.12.4"
  }
}
`;
    default:
      return `
{
  "name": "generated-app",
  "version": "1.0.0",
  "private": true,
  "dependencies": {},
  "scripts": {}
}
`;
  }
}

export function downloadGeneratedFilesAsZip(components, framework) {
  const zip = new JSZip();

  switch (framework) {
    case 'react':
      const reactAppJs = generateReactApp(components);
      const reactCSS = generateCSS(components);
      const reactPackageJson = generatePackageJson('react');
      zip.file('src/App.js', reactAppJs);
      zip.file('src/styles.css', reactCSS);
      zip.file('package.json', reactPackageJson);
      break;
    case 'next':
      const nextAppJs = generateNextApp(components);
      const nextCSS = generateCSS(components);
      const nextPackageJson = generatePackageJson('next');
      zip.file('pages/index.js', nextAppJs);
      zip.file('styles.css', nextCSS);
      zip.file('package.json', nextPackageJson);
      break;
    case 'html':
      const { html, css: htmlCSS } = generateHTMLFile(components);
      zip.file('index.html', html);
      zip.file('styles.css', htmlCSS);
      break;
    case 'angular':
      const angularApp = generateAngularApp(components);
      const angularCSS = generateCSS(components);
      const angularPackageJson = generatePackageJson('angular');
      zip.file('src/app/app.component.ts', angularApp);
      zip.file('src/styles.css', angularCSS);
      zip.file('package.json', angularPackageJson);
      break;
    case 'mithril':
      const mithrilAppJs = generateMithrilApp(components);
      const mithrilCSS = generateCSS(components);
      const mithrilPackageJson = generatePackageJson('mithril');
      zip.file('src/app.js', mithrilAppJs);
      zip.file('src/styles.css', mithrilCSS);
      zip.file('package.json', mithrilPackageJson);
      break;
    default:
      console.error("Unsupported framework: " + framework);
      return;
  }

  // Generate the zip file and trigger the download
  zip.generateAsync({ type: 'blob' }).then(function (blob) {
    saveAs(blob, `generated-${framework}-project.zip`);
  });
}
