let path=require('path');

let config=
    {
        entry:
            {
                index:path.join(__dirname,'src','index.js')
            },
        output:
            {
                path:path.join(__dirname,'dev'),
                filename:'[name].js'
            }
    };

module.exports=config;