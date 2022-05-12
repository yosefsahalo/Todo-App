export interface ITodo{
    id: string;
    title: string;
    description: string;
    isCompleted: boolean;
    isArchived: boolean;
    endData: Date;
    selected: boolean;
}