let emit=require('./event').emit;
let config=require('./config');

function get_statistics(args)
{
    if(!args.cid)
    {
        console.log(args);
        emit({name:'get_statistics:args_check_failed'});
    }
    else
    {
        let xhr=new XMLHttpRequest();
        xhr.responseType='json';
        let url=config.base+'get_statistics?';
        url+='cid='+args.cid;
        xhr.open('get',url);
        xhr.onload=function(e)
        {
            let res=xhr.response;
            if(res.status==='ok')
            {
                emit({name:'get_statistics:ok',message:res.message});
            }
            else
            {
                emit({name:'get_statistics:error',message:res});
            }
        };
        xhr.send();
    }
}

module.exports=get_statistics;


document.body.addEventListener('yoyo:get_statistics:args_check_failed',function(e)
{
    console.log(e);
});
document.body.addEventListener('yoyo:get_statistics:error',function(e)
{
    console.log(e);
});
document.body.addEventListener('yoyo:get_statistics:ok',function(e)
{
    console.log(e);
});

get_statistics
(
    {
        cid:'test1'
    }
);