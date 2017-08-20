var emit=require('./event').emit;
var config=require('./config');

function release(form)
{
    if(form.nodeName!=='FORM')
    {
        console.log(form);
        emit({name:'get_class:args_check_failed'});
    }
    else
    {
        form=new FormData(form);
        var xhr=new XMLHttpRequest();
        xhr.responseType='json';
        var url=config.base+'release?';
        xhr.open('post',url);
        xhr.onload=function(e)
        {
            var res=xhr.response;
            if(res.status==='ok')
            {
                emit({name:'release:ok',message:res.message});
            }
            else
            {
                emit({name:'release:error',message:xhr.response});
            }
        };
        xhr.send(form);
    }
}

module.exports=release;
//
//
// document.body.addEventListener('yoyo:release:args_check_failed',function(e)
// {
//     console.log(e);
// });
// document.body.addEventListener('yoyo:release:error',function(e)
// {
//     console.log(e);
// });
// document.body.addEventListener('yoyo:release:ok',function(e)
// {
//     console.log(e);
// });
//
// document.getElementById('form').addEventListener('submit',function(e)
// {
//     e.preventDefault();
//     release(document.getElementById('form'));
// });