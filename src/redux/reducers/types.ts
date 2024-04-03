export type todoList = {
    id: string;
    title: string;
    completed: boolean;
    UserId: string | number;
}

export type todoState = {
    list: todoList[];
    loading: boolean;
    error: any;
}
export type removeTodos = {
    id: string;
}
export type changeStatuss = {
    id: string;
}