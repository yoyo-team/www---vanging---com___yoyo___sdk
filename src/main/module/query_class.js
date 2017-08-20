var emit=require('./event').emit;
var config=require('./config');

function query_class(args)
{
    if(!args.key)
    {
        console.error('[ query_class ] : 参数检查失败');
        console.error(args);
        emit({name:'query_class:args_check_failed'});
    }
    else
    {
        var xhr=new XMLHttpRequest();
        xhr.responseType='json';
        var url=config.base+'query_class?';
        url+='key='+args.key;
        xhr.open('get',url);
        xhr.onload=function(e)
        {
            var res=xhr.response;
            if(res.status==='ok')
            {
                emit({name:'query_class:ok',message:res.message});
            }
            else
            {
                emit({name:'query_class:error',message:res});
            }
        };
        xhr.send();
    }
}

module.exports=query_class;
//
//
// document.body.addEventListener('yoyo:query_class:args_check_failed',function(e)
// {
//     console.log(e);
// });
// document.body.addEventListener('yoyo:query_class:error',function(e)
// {
//     console.log(e);
// });
// document.body.addEventListener('yoyo:query_class:ok',function(e)
// {
//     console.log(e);
// });
//
// query_class
// (
//     {
//         key:'吉大'
//     }
// );