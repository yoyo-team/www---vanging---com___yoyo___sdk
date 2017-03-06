var emit=require('./event').emit;
var config=require('./config');

function add_note(args)
{
    if(!args.cid||!args.uid||!args.segments)
    {
        console.log(args);
        emit({name:'add_note:args_check_failed'});
    }
    else
    {
        var xhr=new XMLHttpRequest();
        xhr.responseType='json';
        var url=config.base+'add_note?';
        url+='cid='+args.cid+'&';
        url+='uid='+args.uid+'&';
        url+='segments='+args.segments;
        xhr.open('get',url);
        xhr.onload=function(e)
        {
            var res=xhr.response;
            console.log(res);
            if(res.status==='ok')
            {
                emit({name:'add_note:ok'});
            }
            else
            {
                emit({name:'add_note:error',message:xhr.response});
            }
        };
        xhr.send();
    }
}

module.exports=add_note;
//
// document.body.addEventListener('yoyo:add_note:args_check_failed',function(e)
// {
//     console.log(e);
// });
// document.body.addEventListener('yoyo:add_note:error',function(e)
// {
//     console.log(e);
// });
// document.body.addEventListener('yoyo:add_note:ok',function(e)
// {
//     console.log(e);
// });
//
// add_note
// (
//     {
//         uid:'test',
//         cid:'test',
//         segments:'1,2,3,4,5,6'
//     }
// );