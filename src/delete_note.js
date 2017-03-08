var emit=require('./event').emit;
var config=require('./config');

function delete_note(args)
{
    if(!args.cid || !args.uid)
    {
        console.log(args);
        emit({name:'delete_note:args_check_failed'});
    }
    else
    {
        var xhr=new XMLHttpRequest();
        xhr.responseType='json';
        var url=config.base+'delete_note?';
        url+='cid='+args.cid+'&';
        url+='uid='+args.uid;
        xhr.open('get',url);
        xhr.onload=function(e)
        {
            var res=xhr.response;
            console.log(res);
            if(res.status==='ok')
            {
                emit({name:'delete_note:ok'});
            }
            else
            {
                emit({name:'delete_note:error',message:res});
            }
        };
        xhr.send();
    }
}

module.exports=delete_note;
//
//
// document.body.addEventListener('yoyo:delete_note:args_check_failed',function(e)
// {
//     console.log(e);
// });
// document.body.addEventListener('yoyo:delete_note:error',function(e)
// {
//     console.log(e);
// });
// document.body.addEventListener('yoyo:delete_note:ok',function(e)
// {
//     console.log(e);
// });
//
// delete_note
// (
//     {
//         cid:'test',
//         uid:'test'
//     }
// );