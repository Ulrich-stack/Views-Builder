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
