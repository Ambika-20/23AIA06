//setting priority for messages 
import {getTopNotifications} from "../utils/priorityInbox";
import {minHeap} from "../utils/minHeap";

const weights = {
    placement: 3,
    result: 2,
    event: 1
}

function compare(a,b)
{
    const weightA = weights[a.type] || 0;
    const weightB = weights[b.type] || 0;
    if(weightA!=weightB)
        return weightB - weightA;
    return new Date(b.timestamp) - new Date(a.timestamp);
}