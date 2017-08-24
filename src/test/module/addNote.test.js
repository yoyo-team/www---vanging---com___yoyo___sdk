import addNote from '../../main/module/addNote';

describe(' [ addNote ] > default()', function()
{
    it('should make the request', function()
    {
        return addNote('session');
    })
});