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
      return "/frontend/assets/svgs/hx.svg";
    case "hr":
      return "/frontend/assets/svgs/hr.svg";
    case "img":
      return "/frontend/assets/svgs/image.svg";
    case "span":
      return "/frontend/assets/svgs/span.svg";
    case "label":
      return "/frontend/assets/svgs/label.svg";
    case "icon":
      return "/frontend/assets/svgs/icon.svg";
    case "paragraph":
      return "/frontend/assets/svgs/paragraph.svg";
    case "nav":
      return "/frontend/assets/svgs/nav.svg";
    case "link":
      return "/frontend/assets/svgs/link.svg";
    case "list":
      return "/frontend/assets/svgs/list.svg";
    case "form":
      return "/frontend/assets/svgs/form.svg";
    case "input":
      return "/frontend/assets/svgs/input.svg";
    case "table":
      return "/frontend/assets/svgs/table.svg";
    case "select":
      return "/frontend/assets/svgs/select.svg";
    case "radio":
      return "/frontend/assets/svgs/radio.svg";
    case "button":
      return "/frontend/assets/svgs/button.svg";
    case "textarea":
      return "/frontend/assets/svgs/textarea.svg";
    case "form":
      return "/frontend/assets/svgs/form.svg";
    case "group":
      return "/frontend/assets/svgs/group.svg";

    default:
      return null; // Return null or a default path if the name doesn't match
  }
}
