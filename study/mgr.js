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
            baseUrl: 'https://app-prod-03.implicit.harvard.edu/implicit/common/all/js/pip/0.3/dist/js/'
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
