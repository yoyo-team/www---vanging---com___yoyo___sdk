import {be} from '../util';

export default function(key_word)
{
    const url = `/queryClass?key_word=${key_word}`;
    return be.get(url);
}