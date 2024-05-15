import { getInSelect, modelCreate } from "./constructeur";
import {
  createTempDiv,
  getEltById,
  getParentById,
  shouldCreateTempDiv,
} from "./utils";
import tags from "/assets/tags.json";

let dragEnterCounter = false;

export function createStart(value) {

  console.log("Start ", value);
  return { tag: value, source: "tags" };
}

export function dropTag(item, container) {
  if (item.source === "tags") {
    container.push(modelCreate(item.tag));
  }
}

export function dragItemStart(container, id) {
  const src = getParentById(container, id);
  const drag = getEltById(src, id);

  return [src, drag];
}

export function dragItemOver(container, id) {
  const sink = getParentById(container, id);
  console.log("Over leave: ", sink, " id: ", id);
  return sink;
}

export function dropItem(containers, id, drag) {
  dragEnterCounter = 0;
  let { source, sink } = containers;
  const dragItem = drag;
  const dropItem = getEltById(sink, id);
  console.log("Sinkkkk ", sink, " id: ", id, " drop ", dropItem);

  if (dropItem.children !== undefined && id != "temp") sink = dropItem.children;
  if (dragItem === dropItem) return false;

  console.log("Drop: ", dropItem);
  if (source === sink) {
    console.log("Meme source");
    const dragIndex = source.indexOf(dragItem);
    const dropIndex = source.indexOf(dropItem);

    if (dragIndex !== dropIndex) {
      const [removedItem] = source.splice(dragIndex, 1); // Supprimer l'élément de sa position actuelle
      source.splice(dropIndex, 0, removedItem); // Insérer l'élément à la nouvelle position
    }
  } else {
    console.log("Source différente");

    sink.pop(); // pour supprimer la div temporaire
    if (dragItem.source) sink.push(modelCreate(dragItem.tag));
    else {
      const dragIndex = source.indexOf(dragItem);
      const [removedItem] = source.splice(dragIndex, 1);
      sink.push(removedItem);
    }
  }
  source = null;
  sink = null;
  drag = null;
  return {source, sink , drag}
}

export function enterContainer(container, id, dnd) {
  let sink = getParentById(container, id);
  if (id !== "temp") {
    dragEnterCounter = true;
    console.log("Enter ", dragEnterCounter);
    console.log("Dans un container tempco", container);
    dnd.drop = getEltById(sink, id);

    // if (dnd.drop.children) sink = dnd.drop.children; // si l'on est dans un sous-conteneur on ajoute au contenu de ce dernier

    if (
      dnd.drop &&
      shouldCreateTempDiv(dnd.drag, dnd.drop, dnd.drop.children)
    ) {
      createTempDiv(dnd.drop.children);
    }
    console.log("Voici sink ", sink);
  }
  return sink;
}

export function leaveContainer(container, containers, id) {
  if (id !== "temp") dragEnterCounter = false;

  const containerLeft = getParentById(container, id);
  const eltLeft = getEltById(containerLeft, id);
  console.log(
    "I leave ",
    id,
    " tempco ",
    dragEnterCounter,
    " sink ",
    containers.sink,
    " left ",
    containerLeft
  );

  if (!dragEnterCounter && containers.sink === containerLeft && id !== "temp") {
    console.log("Leave ", eltLeft.children);

    if (eltLeft.children[eltLeft.children.length - 1].attributs.id == "temp") {
      eltLeft.children.pop();
    }
  }
}

export function handleComponentClicked(container, id){
    const parent = getParentById(container, id);
    return getEltById(parent, id);
}