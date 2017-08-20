var emit=require('./event').emit;
var config=require('./config');

function get_location(args)
{
    if(!args.uid)
    {
        console.error('[ get_location ] : 参数检查失败');
        console.error(args);
        emit({name:'get_location:args_check_failed'});
    }
    else
    {
        var xhr=new XMLHttpRequest();
        xhr.responseType='json';
        var url=config.base+'get_location?';
        url+='uid='+args.uid;
        xhr.open('get',url);
        xhr.onload=function(e)
        {
            var res=xhr.response;
            if(res.status==='ok')
            {
                emit({name:'get_location:ok',message:res.message});
            }
            else
            {
                emit({name:'get_location:error',message:xhr.response});
            }
        };
        xhr.send();
    }
}

module.exports=get_location;
//
//
// document.body.addEventListener('yoyo:get_location:args_check_failed',function(e)
// {
//     console.log(e);
// });
// document.body.addEventListener('yoyo:get_location:error',function(e)
// {
//     console.log(e);
// });
// document.body.addEventListener('yoyo:get_location:ok',function(e)
// {
//     console.log(e);
// });
//
// get_location
// (
//     {
//         uid:'test'
//     }
// );