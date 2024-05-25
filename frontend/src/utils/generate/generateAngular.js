function generateAngularComponent(component, level = 0) {
  const indent = "  ".repeat(level);
  let attrs = component.attributs;
  let style = attrs.style ? ` [ngStyle]="${JSON.stringify(attrs.style)}"` : "";
  let classAttr = attrs.class ? ` class="${attrs.class}"` : "";
  let idAttr = attrs.id ? ` id="${attrs.id}"` : "";
  let nameAttr = attrs.name ? ` name="${attrs.name}"` : "";
  let titleAttr = attrs.title ? ` title="${attrs.title}"` : "";
  let placeholderAttr = attrs.placeholder ? ` placeholder="${attrs.placeholder}"` : "";
  let valueAttr = attrs.value ? ` value="${attrs.value}"` : "";
  let hrefAttr = attrs.href ? ` href="${attrs.href}"` : "";
  let onclickAttr = attrs.onclick ? ` (click)="${attrs.onclick}"` : "";
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
      return `${indent}<select${idAttr}${nameAttr}${classAttr}${style}>\n${attrs.tab.map(item => `${indent}  <option value="${item}">${item}</option>`).join("\n")}\n${indent}</select>`;
    case "group":
      return `${indent}<div${idAttr}${nameAttr}${style}>\n${component.children.map(child => generateAngularComponent(child, level + 1)).join("\n")}\n${indent}</div>`;
    case "button":
      return `${indent}<button${idAttr}${classAttr}${titleAttr}${style}${onclickAttr}>${attrs.value}</button>`;
    case "label":
      return `${indent}<label${idAttr}${nameAttr}${titleAttr}${style}>${attrs.value}</label>`;
    case "input":
      return `${indent}<input${idAttr}${classAttr}${placeholderAttr}${style}${nameAttr}${titleAttr}${subtypeAttr}/>`;
    case "textarea":
      return `${indent}<textarea${idAttr}${nameAttr}${classAttr}${placeholderAttr}${style}}>${attrs.value}</textarea>`;
    case "form":
      return `${indent}<form${idAttr}${nameAttr}${classAttr}${style}>\n${component.children.map(child => generateAngularComponent(child, level + 1)).join("\n")}\n${indent}</form>`;
    case "paragraph":
      return `${indent}<p${idAttr}${classAttr}${titleAttr}${style}}>${attrs.value}</p>`;
    case "radio":
      return attrs.items.map((item, index) => `${indent}<input type="radio"${idAttr}${classAttr}${style}${nameAttr}${titleAttr} value="${item}" id="radio${attrs.id}_${index}" />\n${indent}<label for="radio${attrs.id}_${index}">${item}</label>`).join("\n");
    case "table":
      return `${indent}<table${idAttr}${classAttr}${style}}>\n${indent}  <thead><tr>\n${attrs.head.map(header => `${indent}    <th>${header}</th>`).join("\n")}\n${indent}  </tr></thead>\n${indent}  <tbody><tr>\n${attrs.dataItems.map(dataItem => `${indent}    <td>${dataItem}</td>`).join("\n")}\n${indent}  </tr></tbody>\n${indent}</table>`;
    case "link":
      return `${indent}<a${idAttr}${classAttr}${nameAttr}${hrefAttr}${style}}>${attrs.value}</a>`;
    case "list":
      return `${indent}<ul${idAttr}${classAttr}${nameAttr}}>\n${attrs.dataItems.map(item => `${indent}  <li>${item}</li>`).join("\n")}\n${indent}</ul>`;
    default:
      return "";
  }
}

export function generateAngularApp(components) {
  const componentCode = components.map(component => generateAngularComponent(component, 2)).join("\n");

  const appComponentContent = `
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: \`
    <div class="app-root">
${componentCode}
    </div>
  \`,
  styles: [\`
  /* Add any additional styles here */
  \`]
})
export class AppComponent {
  title = 'generated-app';
}
`;

  return appComponentContent;
}
