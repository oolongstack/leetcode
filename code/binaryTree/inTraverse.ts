import { tree, Node } from "./tree";

function inTraverse(root: Node | null) {
  if (!root) return [];
  const result: number[] = [];
  const traverse = (node: Node) => {
    if (node.left) traverse(node.left);
    result.push(node.val);
    if (node.right) traverse(node.right);
  };
  traverse(root);

  return result;
}

console.log(inTraverse(tree));

export {};
