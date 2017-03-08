var yoyo={};

yoyo.config=require('./config');

yoyo.delete_note=require('./delete_note');
yoyo.add_note=require('./add_note');
yoyo.get_class=require('./get_class');
yoyo.get_location=require('./get_location');
yoyo.get_notes=require('./get_notes');
yoyo.query_class=require('./query_class');
yoyo.release=require('./release');
yoyo.set_location=require('./set_location');

if(window.luoc)
{
    window.luoc.yoyo=yoyo;
}
else
{
    window.luoc={};
    window.luoc.yoyo=yoyo;
}