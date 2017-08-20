const config =
    {

    };

if(DEVELOPMENT)
{
    config.baseUrl = 'http://localhost:8080/yoyo'
}
else
{
    config.baseUrl = 'https://be.www.vanging.com/yoyo'
}

export default config;