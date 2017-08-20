var emit=require('./event').emit;
var config=require('./config');

function set_location(args)
{
    if(!args.uid || !args.location)
    {
        console.log(args);
        emit({name:'set_location:args_check_failed'});
    }
    else
    {
        var xhr=new XMLHttpRequest();
        xhr.responseType='json';
        var url=config.base+'set_location?';
        url+='uid='+args.uid+'&';
        url+='location='+args.location;
        xhr.open('get',url);
        xhr.onload=function(e)
        {
            var res=xhr.response;
            if(res.status==='ok')
            {
                emit({name:'set_location:ok',message:res.message});
            }
            else
            {
                emit({name:'set_location:error',message:xhr.response});
            }
        };
        xhr.send();
    }
}

module.exports=set_location;
//
//
// document.body.addEventListener('yoyo:set_location:args_check_failed',function(e)
// {
//     console.log(e);
// });
// document.body.addEventListener('yoyo:set_location:error',function(e)
// {
//     console.log(e);
// });
// document.body.addEventListener('yoyo:set_location:ok',function(e)
// {
//     console.log(e);
// });
//
// set_location
// (
//     {
//         uid:'test',
//         location:'test'
//     }
// );