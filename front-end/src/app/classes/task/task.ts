export class Task {

    importance: number;
    urgency: number;
    time: 'Quick' | 'Long' | 'Very Long';
    // Create owner variable to distinguish between users later

    constructor(importance, urgency, time) {
        this.importance = importance;
        this.urgency = urgency;
        this.time = time;
    }

    


}
