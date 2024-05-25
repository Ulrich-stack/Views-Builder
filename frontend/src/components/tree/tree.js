import m from "mithril";
import "./tree.css";
import store from "../../store";
import { handleComponentClicked } from "../../utils/dnd";

// Icons for open and closed nodes using Font Awesome
const OPEN_ICON = m("i.fas.fa-caret-down.node-icon");
const CLOSED_ICON = m("i.fas.fa-caret-right.node-icon");

// Recursive component for a tree node
const TreeNode = {
    view: function(vnode) {
        const { container, state, toggleNode } = vnode.attrs;

        // Check if container and container.attributs are defined
        if (!container || !container.attributs) {
            console.error("Invalid container or missing attributes", container);
            return;
        }

        const isOpen = state[container.attributs.name];
        const isSelected = store.state.eltClicked && store.state.eltClicked.attributs.id === container.attributs.id;

        return m("li", { class: isSelected ? "selected" : "" }, [
            m("div", {
                style: { cursor: "pointer", display: "flex", alignItems: "center" },
                onclick: () => {
                    toggleNode(container.attributs.name);
                    const elt = handleComponentClicked(store.state.container, container.attributs.id);
                    store.updateEltClicked(elt);
                }
            }, [
                container.children && container.children.length > 0 ? m("span", {
                    style: { marginRight: "5px" }
                }, isOpen ? OPEN_ICON : CLOSED_ICON) : null,
                container.attributs.name
            ]),

            isOpen && container.children && container.children.length > 0 && m("ul", [
                container.children.map(child => 
                    m(TreeNode, { 
                        container: child, 
                        parentContainer: container, 
                        state, 
                        toggleNode 
                    })
                )
            ])
        ]);
    }
};

// Main component for the tree
export const Tree = {
    oninit: function(vnode) {
        vnode.state.isOpen = {};
        vnode.state.toggleNode = (name) => {
            vnode.state.isOpen[name] = !vnode.state.isOpen[name];
        };
    },
    view: function(vnode) {
        // Unwrap the object if container is an array
        const container = Array.isArray(vnode.attrs.container) ? vnode.attrs.container[0] : vnode.attrs.container;

        return m("div", { class: "tree" }, [
            m("ul", [
                m(TreeNode, { 
                    container: container, 
                    parentContainer: null,  // root level has no parent
                    state: vnode.state.isOpen, 
                    toggleNode: vnode.state.toggleNode 
                })
            ])
        ]);
    }
};
