import {be} from '../util';

export default function(class_id)
{
    const url = `/getStatistics?class_id=${class_id}`;
    return be.get(url);
}