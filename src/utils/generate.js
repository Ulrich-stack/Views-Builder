export function generateHTML(components) {
  let html = "";

  components.forEach((component) => {
    let attrs = component.attributs;
    let style = attrs.style ? ` style="${attrs.style}"` : "";
    let classAttr = attrs.class ? ` class="${attrs.class}"` : "";
    let idAttr = attrs.id ? ` id="${attrs.id}"` : "";
    let nameAttr = attrs.name ? ` name="${attrs.name}"` : "";
    let titleAttr = attrs.title ? ` title="${attrs.title}"` : "";
    let placeholderAttr = attrs.placeholder
      ? ` placeholder="${attrs.placeholder}"`
      : "";
    let valueAttr = attrs.value ? ` value="${attrs.value}"` : "";
    let hrefAttr = attrs.href ? ` href="${attrs.href}"` : "";
    let onclickAttr = attrs.onclick ? ` onclick="${attrs.onclick}"` : "";
    let xparamAttr = attrs.xparam ? ` xparam="${attrs.xparam}"` : "";
    let subtypeAttr = attrs.subtype ? ` subtype="${attrs.subtype}"` : "";

    switch (component.tag) {
      case "span":
        html += `<span${idAttr}${classAttr}${titleAttr}${style}${onclickAttr}>${attrs.value}</span>`;
        break;
      case "hx":
        let hxTag = attrs.xparam ? `h${attrs.xparam}` : "h1";
        html += `<${hxTag}${idAttr}${classAttr}${titleAttr}${style}>${attrs.value}</${hxTag}>`;
        break;
      case "hr":
        html += `<hr${idAttr}${classAttr}${style} />`;
        break;
      case "icon":
        html += `<i${idAttr}${classAttr}${style}></i>`;
        break;
      case "select":
        html += `<select${idAttr}${nameAttr}${classAttr}${style}>`;
        attrs.tab.forEach((item) => {
          html += `<option value="${item}">${item}</option>`;
        });
        html += `</select>`;
        break;
      case "group":
        html += `<div${idAttr}${nameAttr}${style}>${generateHTML(
          component.children
        )}</div>`;
        break;
      case "button":
        html += `<button${idAttr}${classAttr}${titleAttr}${style}>${attrs.value}</button>`;
        break;
      case "label":
        html += `<label${idAttr}${nameAttr}${titleAttr}${style}>${attrs.value}</label>`;
        break;
      case "input":
        html += `<input${idAttr}${classAttr}${placeholderAttr}${style}${nameAttr}${titleAttr}${subtypeAttr}/>`;
        break;
      case "textarea":
        html += `<textarea${idAttr}${nameAttr}${classAttr}${placeholderAttr}${style}>${attrs.value}</textarea>`;
        break;
      case "form":
        html += `<form${idAttr}${nameAttr}${classAttr}${style}>${generateHTML(
          component.children
        )}</form>`;
        break;
      case "paragraph":
        html += `<p${idAttr}${classAttr}${titleAttr}${style}>${attrs.value}</p>`;
        break;
      case "radio":
        attrs.items.forEach((item, index) => {
          html += `<input type="radio"${idAttr}${classAttr}${style}${nameAttr}${titleAttr} value="${item}" id="radio${attrs.id}_${index}" />`;
          html += `<label for="radio${attrs.id}_${index}">${item}</label>`;
        });
        break;
      case "table":
        html += `<table${idAttr}${classAttr}${style}>`;
        html += `<thead><tr>`;
        attrs.head.forEach((header) => {
          html += `<th>${header}</th>`;
        });
        html += `</tr></thead>`;
        html += `<tbody><tr>`;
        attrs.dataItems.forEach((dataItem) => {
          html += `<td>${dataItem}</td>`;
        });
        html += `</tr></tbody>`;
        html += `</table>`;
        break;
      case "link":
        html += `<a${idAttr}${classAttr}${nameAttr}${hrefAttr}${style}>${attrs.value}</a>`;
        break;
      case "list":
        html += `<ul${idAttr}${classAttr}${nameAttr}>`;
        attrs.dataItems.forEach((item) => {
          html += `<li>${item}</li>`;
        });
        html += `</ul>`;
        break;
      default:
        break;
    }
  });

  return html;
}
