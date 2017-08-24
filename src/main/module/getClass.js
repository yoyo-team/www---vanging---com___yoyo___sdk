import {be} from '../util';

export default function(class_id)
{
    const url = `/getClass?class_id=${class_id}`;
    return be.get(url);
}