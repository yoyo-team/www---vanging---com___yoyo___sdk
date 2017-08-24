import deleteNote from '../../main/module/deleteNote';

describe(' [ deleteNote ] > default()', function()
{
    it('should make the request', function()
    {
        return deleteNote();
    })
});