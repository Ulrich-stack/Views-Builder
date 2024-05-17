import store from "../store";

//this will format the content of the object myStyle into a
//string which html can read to apply the element 
export function styleFormat(st) {
  let key = Object.keys(st);
  let result = "";
  key.map(item => {
      if (item !== "")
          result += item + " : " + st[item] + ";";
  });
  return result;
}

//this is a very important function
//it will search for the parent in ct of the element with id id
//and return a reference of it
export function getParentById(ct, id) {
  let c, re;

  for (c of ct) {
    if (c.attributs.id == id) return ct;
    else if (c.children)
      if ((re = getParentById(c.children, id)) != null) return re;
  }
  return null;
}

//this will return the object representing the element with id id
export function getEltById(ct, id) {
  let i;
  for (i of ct) if (i.attributs.id == id) return i;
}


//this will check if we must create the temp div in the big div
export function shouldCreateTempDiv(dragItem, dropTarget, dropTargetContainer) {
  //   if (dragItem === dropTarget) return false;

  if (getEltById(dropTargetContainer, "temp")) return false;
  if(dropTarget.attributs.id === "root") return false;
  if (dragItem.children && getParentById(dragItem.children, dropTarget.attributs.id))
    return false;
  if (dropTarget.children.indexOf(dragItem) !== -1) return false;
  if (dragItem === dropTarget) return false;

  return true;
}

export function createTempDiv(container) {
  const tempDivAttributes = {
    id: "temp",
    myStyle:
      "width: 100%; height: 50px; border: 1px dotted black; border-radius: 20px; margin: 10px",
  };

  container.push({
    tag: "group",
    attributs: tempDivAttributes,
    children: [],
  });
}


//this will add a blue border to the eltClicked
export function applyClickedBorderStyle(myStyle, id) {
  console.log("IDDD: ", id, " storeID ", store.state.eltClickedId);
  if (store.state.eltClickedId === id) {
      return {
          ...myStyle,
          "border": "2px solid blue",
      };
  }
  return myStyle;
}


export function assignIcon(name) {
  switch (name) {
    case "hx":
      return "/assets/svgs/hx.svg";
    case "hr":
      return "/assets/svgs/hr.svg";
    case "img":
      return "/assets/svgs/image.svg";
    case "span":
      return "/assets/svgs/span.svg";
    case "label":
      return "/assets/svgs/label.svg";
    case "icon":
      return "/assets/svgs/icon.svg";
    case "paragraph":
      return "/assets/svgs/paragraph.svg";
    case "nav":
      return "/assets/svgs/nav.svg";
    case "link":
      return "/assets/svgs/link.svg";
    case "list":
      return "/assets/svgs/list.svg";
    case "form":
      return "/assets/svgs/form.svg";
    case "input":
      return "/assets/svgs/input.svg";
    case "table":
      return "/assets/svgs/table.svg";
    case "select":
      return "/assets/svgs/select.svg";
    case "radio":
      return "/assets/svgs/radio.svg";
    case "button":
      return "/assets/svgs/button.svg";
    case "textarea":
      return "/assets/svgs/textarea.svg";
    case "form":
      return "/assets/svgs/form.svg";
    case "group":
      return "/assets/svgs/group.svg";

    default:
      return null; // Return null or a default path if the name doesn't match
  }
}
