export interface ITodo{
    id: number;
    title: string;
    description: string;
    isCompleted: boolean;
    isArchived: boolean;
    endData: Date | number | string;
    selected: boolean;
}