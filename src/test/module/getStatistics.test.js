import getStatistics from '../../main/module/getStatistics';

describe(' [ getStatistics ] > default()', function()
{
    it('should make the request', function()
    {
        return getStatistics();
    });
});