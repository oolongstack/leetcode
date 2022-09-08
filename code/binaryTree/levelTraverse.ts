import { tree, Node } from "./tree";

function levelTraverse(root: Node) {
  const result: number[][] = [];
  const queue: Node[] = [root];

  while (queue.length) {
    const len = queue.length;
    const list: number[] = [];
    for (let i = 0; i < len; i++) {
      const now = queue.shift()!;
      list.push(now?.val);

      if (now.left) queue.push(now.left);
      if (now.right) queue.push(now.right);
    }
    result.push(list);
  }

  return result;
}

console.log(levelTraverse(tree));

export {};
