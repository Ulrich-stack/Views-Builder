function generateMithrilComponent(component, level = 0) {
  const indent = "  ".repeat(level);
  let attrs = component.attributs;
  let style = attrs.style ? ` style: ${JSON.stringify(attrs.style)},` : "";
  let classAttr = attrs.class ? ` class: "${attrs.class},"` : "";
  let idAttr = attrs.id ? ` id: "${attrs.id}",` : "";
  let nameAttr = attrs.name ? ` name: "${attrs.name}",` : "";
  let titleAttr = attrs.title ? ` title: "${attrs.title}",` : "";
  let placeholderAttr = attrs.placeholder
    ? ` placeholder: "${attrs.placeholder}",`
    : "";
  let valueAttr = attrs.value ? ` value: "${attrs.value}"` : "";
  let hrefAttr = attrs.href ? ` href: "${attrs.href}",` : "";
  let onclickAttr = attrs.onclick
    ? ` onclick: function() {${attrs.onclick}},`
    : "";
  let xparamAttr = attrs.xparam ? ` xparam: "${attrs.xparam}"` : "";
  let subtypeAttr = attrs.subtype ? ` subtype: "${attrs.subtype}",` : "";

  switch (component.tag) {
    case "span":
      return `${indent}m("span", {${idAttr}${classAttr}${titleAttr}${style}${onclickAttr}}, "${attrs.value}")`;
    case "hx":
      let hxTag = attrs.xparam ? `h${attrs.xparam}` : "h1";
      return `${indent}m("${hxTag}", {${idAttr}${classAttr}${titleAttr}${style}}, "${attrs.value}")`;
    case "hr":
      return `${indent}m("hr", {${idAttr}${classAttr}${style}})`;
    case "icon":
      return `${indent}m("i", {${idAttr}${classAttr}${style}})`;
    case "select":
      return `${indent}m("select", {${idAttr}${nameAttr}${classAttr}${style}}, [\n${attrs.tab
        .map(
          (item) => `${indent}  m("option", { value: "${item}" }, "${item}")`
        )
        .join(",\n")}\n${indent}])`;
    case "group":
      return `${indent}m("div", {${idAttr}${nameAttr}${style}}, [\n${component.children
        .map((child) => generateMithrilComponent(child, level + 1))
        .join(",\n")}\n${indent}])`;
    case "button":
      return `${indent}m("button", {${idAttr}${classAttr}${titleAttr}${style}${onclickAttr}}, "${attrs.value}")`;
    case "label":
      return `${indent}m("label", {${idAttr}${nameAttr}${titleAttr}${style}}, "${attrs.value}")`;
    case "input":
      return `${indent}m("input", {${idAttr}${classAttr}${placeholderAttr}${style}${nameAttr}${titleAttr}${subtypeAttr}})`;
    case "textarea":
      return `${indent}m("textarea", {${idAttr}${nameAttr}${classAttr}${placeholderAttr}${style}}, "${attrs.value}")`;
    case "form":
      return `${indent}m("form", {${idAttr}${nameAttr}${classAttr}${style}}, [\n${component.children
        .map((child) => generateMithrilComponent(child, level + 1))
        .join(",\n")}\n${indent}])`;
    case "paragraph":
      return `${indent}m("p", {${idAttr}${classAttr}${titleAttr}${style}}, "${attrs.value}")`;
    case "radio":
      return attrs.items
        .map(
          (item, index) =>
            `${indent}m("input", { type: "radio",${idAttr}${classAttr}${style}${nameAttr}${titleAttr} value: "${item}", id: "radio${attrs.id}_${index}" }),\n${indent}m("label", { for: "radio${attrs.id}_${index}" }, "${item}")`
        )
        .join(",\n");
    case "table":
      return `${indent}m("table", {${idAttr}${classAttr}${style}}, [\n${indent}  m("thead", [\n${indent}    m("tr", [${attrs.head
        .map((header) => `\n${indent}      m("th", "${header}")`)
        .join(
          ","
        )}\n${indent}    ])\n${indent}  ]),\n${indent}  m("tbody", [\n${indent}    m("tr", [${attrs.dataItems
        .map((dataItem) => `\n${indent}      m("td", "${dataItem}")`)
        .join(",")}\n${indent}    ])\n${indent}  ])\n${indent}])`;
    case "link":
      return `${indent}m("a", {${idAttr}${classAttr}${nameAttr}${hrefAttr}${style}}, "${attrs.value}")`;
    case "list":
      return `${indent}m("ul", {${idAttr}${classAttr}${nameAttr}}, [\n${attrs.dataItems
        .map((item) => `${indent}  m("li", "${item}")`)
        .join(",\n")}\n${indent}])`;
    default:
      return "";
  }
}

export function generateMithrilApp(components) {
  const componentCode = components
    .map((component) => generateMithrilComponent(component, 2))
    .join(",\n");

  const appJsContent = `
  import m from 'mithril';
  
  const App = {
    view: function() {
      return m("div", { class: "App" }, [
  ${componentCode}
      ]);
    }
  };
  
  m.mount(document.body, App);
  `;

  return appJsContent;
}
