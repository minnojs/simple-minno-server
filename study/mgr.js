define(['managerAPI'], function(Manager){
    var API = new Manager();

    API.addSettings('onEnd', function(){console.log('end');});
    API.addSettings('logger', {postCsv:'csv.php'});

    API.addSequence([
        {
            type: 'message',
            keys: ' ',
            template:'Hello World'
        },
        {type:'quest', scriptUrl:'quest.js'},
        {
            type:'pip', 
            version:0.4,
            scriptUrl:'pip.js',
            baseUrl: 'https://app-prod-03.implicit.harvard.edu/implicit/common/all/js/pip/0.4/dist/js/'
        }
    ]);

    return API.script;
});
