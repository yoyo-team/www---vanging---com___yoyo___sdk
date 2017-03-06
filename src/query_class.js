var emit=require('./event').emit;
var config=require('./config');

function query_class(args)
{
    if(!args.class_name)
    {
        console.log(args);
        emit({name:'query_class:args_check_failed'});
    }
    else
    {
        var xhr=new XMLHttpRequest();
        xhr.responseType='json';
        var url=config.base+'query_class?';
        url+='class_name='+args.class_name;
        xhr.open('get',url);
        xhr.onload=function(e)
        {
            var res=xhr.response;
            console.log(res);
            if(res.status==='ok')
            {
                emit({name:'query_class:ok',message:res.message});
            }
            else
            {
                emit({name:'query_class:error',message:xhr.response});
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
//         class_name:'test'
//     }
// );