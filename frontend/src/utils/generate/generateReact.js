export function generateReactComponent(component, level = 0) {
    const indent = "  ".repeat(level);
    let attrs = component.attributs;
    let style = attrs.style ? ` style={${JSON.stringify(attrs.style)}}` : "";
    let classAttr = attrs.class ? ` className="${attrs.class}"` : "";
    let idAttr = attrs.id ? ` id="${attrs.id}"` : "";
    let nameAttr = attrs.name ? ` name="${attrs.name}"` : "";
    let titleAttr = attrs.title ? ` title="${attrs.title}"` : "";
    let placeholderAttr = attrs.placeholder ? ` placeholder="${attrs.placeholder}"` : "";
    let valueAttr = attrs.value ? ` value="${attrs.value}"` : "";
    let hrefAttr = attrs.href ? ` href="${attrs.href}"` : "";
    let onclickAttr = attrs.onclick ? ` onClick={() => {${attrs.onclick}}` : "";
    let xparamAttr = attrs.xparam ? ` xparam="${attrs.xparam}"` : "";
    let subtypeAttr = attrs.subtype ? ` subtype="${attrs.subtype}"` : "";
  
    switch (component.tag) {
      case "span":
        return `${indent}<span${idAttr}${classAttr}${titleAttr}${style}${onclickAttr}>${attrs.value}</span>`;
      case "hx":
        let hxTag = attrs.xparam ? `h${attrs.xparam}` : "h1";
        return `${indent}<${hxTag}${idAttr}${classAttr}${titleAttr}${style}>${attrs.value}</${hxTag}>`;
      case "hr":
        return `${indent}<hr${idAttr}${classAttr}${style} />`;
      case "icon":
        return `${indent}<i${idAttr}${classAttr}${style}></i>`;
      case "select":
        return `${indent}<select${idAttr}${nameAttr}${classAttr}${style}>
  ${attrs.tab.map(item => `${indent}  <option value="${item}">${item}</option>`).join("\n")}
  ${indent}</select>`;
      case "group":
        return `${indent}<div${idAttr}${nameAttr}${style}>
  ${component.children.map(child => generateReactComponent(child, level + 1)).join("\n")}
  ${indent}</div>`;
      case "button":
        return `${indent}<button${idAttr}${classAttr}${titleAttr}${style}${onclickAttr}>${attrs.value}</button>`;
      case "label":
        return `${indent}<label${idAttr}${nameAttr}${titleAttr}${style}>${attrs.value}</label>`;
      case "input":
        return `${indent}<input${idAttr}${classAttr}${placeholderAttr}${style}${nameAttr}${titleAttr}${subtypeAttr}/>`;
      case "textarea":
        return `${indent}<textarea${idAttr}${nameAttr}${classAttr}${placeholderAttr}${style}>${attrs.value}</textarea>`;
      case "form":
        return `${indent}<form${idAttr}${nameAttr}${classAttr}${style}>
  ${component.children.map(child => generateReactComponent(child, level + 1)).join("\n")}
  ${indent}</form>`;
      case "paragraph":
        return `${indent}<p${idAttr}${classAttr}${titleAttr}${style}>${attrs.value}</p>`;
      case "radio":
        return attrs.items.map((item, index) => `${indent}<input type="radio"${idAttr}${classAttr}${style}${nameAttr}${titleAttr} value="${item}" id="radio${attrs.id}_${index}" />
  ${indent}<label for="radio${attrs.id}_${index}">${item}</label>`).join("\n");
      case "table":
        return `${indent}<table${idAttr}${classAttr}${style}>
  ${indent}  <thead><tr>
  ${attrs.head.map(header => `${indent}    <th>${header}</th>`).join("\n")}
  ${indent}  </tr></thead>
  ${indent}  <tbody><tr>
  ${attrs.dataItems.map(dataItem => `${indent}    <td>${dataItem}</td>`).join("\n")}
  ${indent}  </tr></tbody>
  ${indent}</table>`;
      case "link":
        return `${indent}<a${idAttr}${classAttr}${nameAttr}${hrefAttr}${style}>${attrs.value}</a>`;
      case "list":
        return `${indent}<ul${idAttr}${classAttr}${nameAttr}>
  ${attrs.dataItems.map(item => `${indent}  <li>${item}</li>`).join("\n")}
  ${indent}</ul>`;
      default:
        return "";
    }
  }
  
  
  export function generateReactApp(components) {
    const componentCode = components.map(component => generateReactComponent(component, 1)).join("\n");
  
    const appJsContent = `
  import React from 'react';
  
  function App() {
    return (
      <div className="App">
        ${componentCode}
      </div>
    );
  }
  
  export default App;
  `;
  
    return appJsContent;
  }
  