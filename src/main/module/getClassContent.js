import {get} from '../util';
const baseUrl = '//www.vanging.com/yoyo/classes';

export default function(class_id)
{
    return new Promise(function(resolve, reject)
    {
        const url = `${baseUrl}/${class_id}/index.json`;
        get(url)
            .then(function(result)
            {
                try
                {
                    result = JSON.parse(result);
                    resolve(result)
                }
                catch(e)
                {
                    reject(e);
                }
            }, function(err)
            {
                reject(err);
            });
    });
}