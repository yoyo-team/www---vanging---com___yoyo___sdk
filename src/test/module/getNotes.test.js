import getNotes from '../../main/module/getNotes';

describe(' [ getNotes ] > default()', function()
{
    it('should make the request', function()
    {
        return getNotes();
    })
});