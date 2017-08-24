import {be} from '../util';

export default function(user_id)
{
    const url = `/getLocation?user_id=${user_id}`;
    return be.get(url);
}