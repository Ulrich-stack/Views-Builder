import {
  TitleIcon,
  HrIcon,
  ImageIcon,
  LabelIcon,
  LinkIcon,
  ListIcon,
  FormatAlignLeftIcon,
  StarBorder,
} from "@mui/icons-material";

export function getParentById(ct, id) {
  let c, re;
  console.log("getParent ");
  console.log(ct);

  for (c of ct) {
    console.log("e= " + c.attributs.id + "id=" + id);
    console.log(c);
    if (c.attributs.id == id) return ct;
    else if (c.children)
      if ((re = getParentById(c.children, id)) != null) return re;
  }
  return null;
}

export function getEltById(ct, id) {
  let i;
  for (i of ct) if (i.attributs.id == id) return i;
}

export function shouldCreateTempDiv(dragItem, dropTarget, dropTargetContainer) {
  //   if (dragItem === dropTarget) return false;
  console.log(
    "droptargetcontainer",
    dropTarget,
    " dragItem ",
    dragItem,
    "index dragItem ",
    dropTarget.children.indexOf(dragItem)
  );
  if (getEltById(dropTargetContainer, "temp")) return false;
  if (dragItem.children && getParentById(dragItem.children, dropTarget.id))
    return false;
  if (dropTarget.children.indexOf(dragItem) !== -1) return false;
  if (dragItem === dropTarget) return false;

  return true;
}

export function createTempDiv(container) {
  const tempDivAttributes = {
    id: "temp",
    style:
      "width: 100%; height: 50px; border: 1px dotted black; border-radius: 20px; margin-bottom: 10px; margin-top: 10px",
  };

  container.push({
    tag: "group",
    attributs: tempDivAttributes,
    children: [],
  });
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
      return "/assets/svgs/menu.svg";
    case "tag":
      return "/assets/svgs/tag.svg";
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
