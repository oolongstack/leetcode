class Node {
  constructor(
    public left: Node | null = null,
    public right: Node | null = null,
    public val: number = -1
  ) {}
}

const tree = new Node(
  new Node(
    new Node(null, null, 4),
    new Node(new Node(null, null, 8), null, 5),
    2
  ),
  new Node(new Node(null, null, 6), new Node(null, null, 7), 3),
  1
);
// 1 2 4 5 8 3 6 7
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
