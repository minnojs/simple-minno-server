define(['managerAPI'], function(Manager){
    var API = new Manager();
    API.addSettings('logger',{type:'csv', url:'csv.php'});

    API.addSequence([
        {
            type: 'message',
            keys: ' ',
            template:'Hello World (please click space to proceed)'
        },
        {
            name:'my-quest',
            type:'quest', 
            scriptUrl:'quest.js'
        },
        {
            name:'my-time',
            type:'time', 
            scriptUrl:'time.js',
        },

        // this is needed only if you want to post before the end of the study
        { type:'postCsv', load: console.log },
        {
            type: 'message',
            template:'Debriefing page or something'
        }
    ]);

    return API.script;
});
