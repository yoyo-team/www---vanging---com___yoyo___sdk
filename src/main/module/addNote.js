import {be} from '../util';

export default function(user_id, class_id, note_content)
{
    const url = `/addOrUpdateNote?user_id=${user_id}&class_id=${class_id}&note_content=${note_content}`;
    return be.get(url);
}