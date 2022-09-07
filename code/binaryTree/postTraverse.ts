import { tree, Node } from "./tree";

function postTraverse(root: Node | null) {
  if (!root) return [];
  const result: number[] = [];
  const traverse = (node: Node) => {
    if (node.left) traverse(node.left);
    if (node.right) traverse(node.right);
    result.push(node.val);
  };
  traverse(root);

  return result;
}

console.log(postTraverse(tree));

function postTraverseStack(root: Node | null) {
  if (!root) return [];
  const result = [];
  const inputStack: Node[] = [root];
  const outputStack: Node[] = [];

  while (inputStack.length) {
    const node = inputStack.pop()!;
    outputStack.push(node);
    if (node.left) inputStack.push(node.left);
    if (node.right) inputStack.push(node.right);
  }

  while (outputStack.length) {
    result.push(outputStack.pop()!.val);
  }

  return result;
}

console.log(postTraverseStack(tree));

export {};
