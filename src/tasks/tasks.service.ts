import {Injectable} from '@nestjs/common';
import {Task, TaskStatus} from "./tasks.model";

@Injectable()
export class TasksService {
    private tasks: Task[] = [];

    public getAllTasks(): Task[] {
        return this.tasks;
    }

    public createTask(title: string, description: string): void {
        const task: Task = {
            title,
            description,
            status: TaskStatus.OPEN,

        }
    }
}
