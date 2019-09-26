export class Task {

    importance: number;
    urgency: number;
    time: 'Quick' | 'Long' | 'Very Long';

    constructor(importance, urgency, time) {
        this.importance = importance;
        this.urgency = urgency;
        this.time = time;
    }

    


}
