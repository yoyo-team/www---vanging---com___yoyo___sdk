import {be} from '../util';

export default function(user_id)
{
    const url = `/getNotes?user_id=${user_id}`;
    return be.get(url);
}