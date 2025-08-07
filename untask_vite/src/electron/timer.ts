// notify logic 
// false logic
// inppropiate logic

type TaskData = {
  taskName: string;
  taskDate: string;
  taskTime: string;
};

class NotificationTimerData {
  private task: TaskData[];
  private current: Date | undefined;
  constructor() {
    this.task = [];
    this.current = new Date();
  }
  addTimer(taskData: TaskData) {
    const givenDate = new Date(taskData.taskDate + "T" + taskData.taskTime); // Format -> YYYY-MM-DD T HH:MM:SSZ
    if (this.current! <= givenDate) {
      this.task.push(taskData);
    } else {
      throw new Error("Please select correct date and time");
    }
  }
  getTimer() {
    return this.task;
  }
  removeFromQueue(taskData: TaskData) {
    this.task = this.task.filter((e) => e !== taskData);
    throw new Error("Remove Task");
  }
}



export const notificattionTimer = new NotificationTimerData();
