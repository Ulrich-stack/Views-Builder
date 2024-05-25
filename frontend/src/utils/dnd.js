//this file contain the logic of the drag and drop

import store from "../store";
import {  modelCreate } from "./constructeur";
import {
  createTempDiv,
  getEltById,
  getParentById,
  shouldCreateTempDiv,
} from "./utils";

let inTemp;

export function createStart(value) {
  return { tag: value, source: "tags" };
}

export function dragItemStart(container, id, e) {
  e.stopPropagation();

  const src = getParentById(container, id);
  const drag = getEltById(src, id);

  return [src, drag];
}

export function dragItemOver(container, id, e) {
  e.preventDefault();
  e.stopPropagation();
  const sink = getParentById(container, id);
  const dropItem = getEltById(sink, id);
  return [sink, dropItem];
}

//callback for ondragenter when we enter a div
//when we enter a div, we want to create a small div inside of it
//to manage the placement of the drag element after the drop
//if we drop the element on the small div, the element will be push into
//into the div parent, if not, it will be push above the div parent
export function enterContainer(container, id, dnd, e) {
  e.preventDefault();
  e.stopPropagation();

  //if we enter the root element we just return the first element of the container as the sink container
  if (id === "root") {
    dnd.drop = container[0].children;
    return container[0].children;
  }
  //if we enter a div we return the div as the sink container
  let sink = getParentById(container, id);
  dnd.drop = getEltById(sink, id);

  //a boolean who tell us if we are in a temporary div
  if (id === "temp") {
    inTemp = true;
  }

  //if we are not in a temporary div and not in the root div
  //we create the temporary div
  if (
    shouldCreateTempDiv(dnd.drag, dnd.drop, dnd.drop.children) &&
    id !== "temp"
  ) {
    createTempDiv(dnd.drop.children);
    inTemp = false;
  }

  return sink;
}

export function dropItem(containers, id, dnd, e) {
  e.stopPropagation();
  e.preventDefault();
  let { source, sink } = containers;
  const { drag, drop } = dnd;
  console.log("Source debut: ", source, " id ", id, " sink ", sink);
  
  // Check if drag and drop are the same item so it didn't change place to the items
  if (drag === drop) return { source, sink, drag: null };

  // Check if source and sink are the same container
  if (source === sink) {
    console.log("Same source");
    const dragIndex = source.indexOf(drag);
    const dropIndex = source.indexOf(drop);

    if (dragIndex !== -1 && dropIndex !== -1 && dragIndex !== dropIndex) {
      // Move item within the same container
      const [removedItem] = source.splice(dragIndex, 1);
      source.splice(dropIndex, 0, removedItem);
    }
  } else {
    console.log("Different source");
    // Remove the temporary div if it exists
    if (id !== "root" && sink[sink.length - 1]?.attributs?.id === "temp") {
      sink.pop();
    }

    if (drag.source) {
      // Add new item from tags
      sink.push(modelCreate(drag.tag));
    } else {
      const dragIndex = source.indexOf(drag);

      // Check if the drag item has a children, if yes, if we check if 
      //if we drop the items in his children and we stop the function 
      //without changing anything
      if(drag.children){
        if(getParentById(drag?.children, drop.attributs.id))
          return;
      }
      
      if (dragIndex !== -1 ) {
        console.log("Drag ", drag, " drop ", drop);
        // Move item to a different container
        const [removedItem] = source.splice(dragIndex, 1);
        sink.push(removedItem);
      }
    }
  }
}


export function leaveContainer(container, sink, id, e) {
  e.stopPropagation();
  const containerLeft = getParentById(container, id);
  const eltLeft = getEltById(containerLeft, id);

  if (id !== "temp" && !inTemp) {
    // Vérifie que 'temp' n'est pas dans le parent actuel
    if (
      getParentById(sink, "temp") &&
      id !== "root" &&
      //verify if the last element is really the temp div
      eltLeft.children[eltLeft.children.length - 1]?.attributs?.id == "temp"
    ) {
      eltLeft.children.pop();
      console.log("je supprime ", eltLeft.children);
    }
  }

  // Réinitialise inTemp à false lorsque l'on quitte la div 'temp'
  if (id === "temp") {
    inTemp = false;
  }
}

export function end(sink) {
  let index, end;

  end = getParentById(sink, "temp");
  console.log("end ", end);
  if (end) {
    index = end.indexOf(getEltById(end, "temp"));
    end.splice(index, 1);
  }
}

export function handleComponentClicked(container, id) {
  const parent = getParentById(container, id);
  const elt = getEltById(parent, id); 
  return elt
}
