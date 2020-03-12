import { Component } from '@angular/core';
import { TaskModel, List } from './task.model';

@Component({
    selector: 'tasks',
    templateUrl: './task.html'
})

export class Task {

    container: TaskModel[];
    list: List[];
    statusList = ["In Progress", "Not Started", "Completed"];

    constructor() {
        this.container = new Array<TaskModel>();
        this.list = new Array<List>();
    }

    ngOnint() { }

    addBucket() {
        let tempBcket: TaskModel = new TaskModel();
        this.container.push(tempBcket);
    }

    addTask(index: number) {
        let tempTask: List = new List();
        if (!this.container[index].list)
            this.container[index].list = new Array<List>();
        this.container[index].list.unshift(tempTask);
    }

    onStatusChanged(containerIndex: number, taskIndex: number) {
        if(this.container[containerIndex].list[taskIndex].status == 'Completed')
        this.container[containerIndex].list.splice(taskIndex , 1);
    }
}