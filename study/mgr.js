define(['managerAPI'], function(Manager){
    var API = new Manager();

    API.addSequence([
        {
            type: 'message',
            keys: ' ',
            template:'Hello World'
        },
        {
            type:'quest', 
            scriptUrl:'quest.js'
        },
        {
            type:'pip', 
            version:0.3,
            scriptUrl:'time.js',
            baseUrl: '//cdn.jsdelivr.net/gh/minnojs/minno-time@0.3/dist/js'
        },
        {
            type:'postCsv',
            url:'csv.php'
        },
        {
            type: 'message',
            template:'Debriefing page or something'
        }
    ]);

    return API.script;
});
