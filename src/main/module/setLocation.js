import {be} from '../util';

export default function(user_id, user_location)
{
    const url = `/setLocation?user_id=${user_id}&user_location=${user_location}`;
    return be.get(url);
}