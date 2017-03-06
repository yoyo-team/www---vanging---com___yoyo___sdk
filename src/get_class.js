var emit=require('./event').emit;
var config=require('./config');

function get_class(args)
{
    if(!args.cid)
    {
        console.log(args);
        emit({name:'get_class:args_check_failed'});
    }
    else
    {
        var xhr=new XMLHttpRequest();
        xhr.responseType='json';
        var url=config.base+'get_class?';
        url+='cid='+args.cid;
        xhr.open('get',url);
        xhr.onload=function(e)
        {
            var res=xhr.response;
            console.log(res);
            if(res.status==='ok')
            {
                emit({name:'get_class:ok',message:res.message});
            }
            else
            {
                emit({name:'get_class:error',message:xhr.response});
            }
        };
        xhr.send();
    }
}

module.exports=get_class;
//
//
// document.body.addEventListener('yoyo:get_class:args_check_failed',function(e)
// {
//     console.log(e);
// });
// document.body.addEventListener('yoyo:get_class:error',function(e)
// {
//     console.log(e);
// });
// document.body.addEventListener('yoyo:get_class:ok',function(e)
// {
//     console.log(e);
// });
//
// get_class
// (
//     {
//         cid:'1'
//     }
// );