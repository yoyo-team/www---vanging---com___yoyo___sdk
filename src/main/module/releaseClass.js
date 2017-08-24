import config from '../config';

export default function(form)
{
    return new Promise(function(resolve, reject)
    {
        form=new FormData(form);
        console.log(form);
        const xhr=new XMLHttpRequest();
        const url=config.baseUrl+'/releaseClass';
        xhr.open('post',url);
        xhr.onerror = function()
        {
            reject(xhr.response);
        };
        xhr.onload=function(e)
        {
            if(xhr.status === 200)
            {
                resolve(xhr.response);
            }
            else
            {
                reject(xhr.response);
            }
        };
        xhr.send(form);
    });
}