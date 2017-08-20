function emit(args)
{
    let event=new Event('yoyo:'+args.name);
    event.message=args.message;
    document.body.dispatchEvent(event);
}

module.exports.emit=emit;