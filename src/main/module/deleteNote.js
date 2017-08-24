import {be} from '../util';

export default function(user_id, class_id)
{
    const url = `/deleteNote?user_id=${user_id}&class_id=${class_id}`;
    return be.get(url);
}