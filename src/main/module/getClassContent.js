import {get} from '../util';
const baseUrl = '//www.vanging.com/yoyo/classes';

export default function(class_id)
{
    const url = `${baseUrl}/${class_id}/index.json`;
    return get(url);
}