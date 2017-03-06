var emit=require('./event').emit;
var config=require('./config');

function get_notes(args)
{
    if(!args.uid)
    {
        console.log(args);
        emit({name:'get_notes:args_check_failed'});
    }
    else
    {
        var xhr=new XMLHttpRequest();
        xhr.responseType='json';
        var url=config.base+'get_notes?';
        url+='uid='+args.uid;
        xhr.open('get',url);
        xhr.onload=function(e)
        {
            var res=xhr.response;
            console.log(res);
            if(res.status==='ok')
            {
                emit({name:'get_notes:ok',message:res.message});
            }
            else
            {
                emit({name:'get_notes:error',message:res});
            }
        };
        xhr.send();
    }
}

module.exports=get_notes;
//
//
// document.body.addEventListener('yoyo:get_notes:args_check_failed',function(e)
// {
//     console.log(e);
// });
// document.body.addEventListener('yoyo:get_notes:error',function(e)
// {
//     console.log(e);
// });
// document.body.addEventListener('yoyo:get_notes:ok',function(e)
// {
//     console.log(e);
// });
//
// get_notes
// (
//     {
//         uid:'test'
//     }
// );