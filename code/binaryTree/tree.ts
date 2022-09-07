export class Node {
  constructor(
    public left: Node | null = null,
    public right: Node | null = null,
    public val: number = -1
  ) {}
}

export const tree = new Node(
  new Node(
    new Node(null, null, 4),
    new Node(new Node(null, null, 8), null, 5),
    2
  ),
  new Node(new Node(null, null, 6), new Node(null, null, 7), 3),
  1
);
// 1 2 4 5 8 3 6 7
