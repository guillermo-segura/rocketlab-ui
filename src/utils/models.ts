export interface Properties {
    [key: string]: number;
}

export interface Node {
    id: number;
    name: string;
    properties: Properties;
    parentId: number | null;
    createdAt: string;
    children: Node[];
}
