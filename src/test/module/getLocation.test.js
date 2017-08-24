import getLocation from '../../main/module/getLocation';

describe(' [ getLocation ] > default()', function()
{
    it('should make the request', function()
    {
        return getLocation();
    })
});