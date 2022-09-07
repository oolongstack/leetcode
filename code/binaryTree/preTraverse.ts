import { tree, Node } from "./tree";
// 递归
function preTraverse(root: Node | null): number[] {
  if (!root) return [];
  const result: number[] = [];
  const traverse = (node: Node) => {
    result.push(node.val);
    if (node.left) traverse(node.left);
    if (node.right) traverse(node.right);
  };
  traverse(root);

  return result;
}

console.log(preTraverse(tree));

// stack
function preTraverseStack(root: Node | null) {
  if (!root) return [];
  const result = [];

  const stack: Node[] = [root];

  while (stack.length) {
    const node = stack.pop()!;
    result.push(node.val);
    if (node.right) stack.push(node.right);
    if (node.left) stack.push(node.left);
  }

  return result;
}

console.log(preTraverseStack(tree));

export {};
