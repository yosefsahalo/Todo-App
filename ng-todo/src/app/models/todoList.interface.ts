export interface ITodo{
    id: string;
    title: string;
    description: string;
    isCompleted: boolean;
    isArchived: boolean;
    endData: Date | number | string;
    selected: boolean;
}