export class TaskModel {
    seqNo: number;
    containerName: String;
    list: List[]
}

export class List {
    assignedTo: String;
    deadline: Date;
    description: String;
    status : String;
}