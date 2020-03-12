define(['managerAPI'], function(Manager) {
    var API = new Manager();

    API.setName('mgr');
    API.addSettings('skip',true);
    API.addSettings('skin','demo');
    API.addSettings('logger',{type:'csv', url:'csv.php'});

    var raceSet = API.shuffle(['a','b'])[0];
    var blackLabels = [];
    var whiteLabels = [];

    if (raceSet == 'a') {
        blackLabels.push('African Americans');
        whiteLabels.push('European Americans');
    } else {
        blackLabels.push('Black people');
        whiteLabels.push('White people');
    }

    API.save({
        raceSet:raceSet,
        blackLabels:blackLabels,
        whiteLabels:whiteLabels
    });

    API.addGlobal({
        raceiat:{},
        //YBYB: change when copying back to the correct folder
        baseURL: './study.race/images/',
        raceSet:raceSet,
        blackLabels:blackLabels,
        whiteLabels:whiteLabels,
        posWords : API.shuffle([
            'Love', 'Cheer', 'Friend', 'Pleasure',
            'Adore', 'Cheerful', 'Friendship', 'Joyful', 
            'Smiling','Cherish', 'Excellent', 'Glad', 
            'Joyous', 'Spectacular', 'Appealing', 'Delight', 
            'Excitement', 'Laughing', 'Attractive','Delightful', 
            'Fabulous', 'Glorious', 'Pleasing', 'Beautiful', 
            'Fantastic', 'Happy', 'Lovely', 'Terrific', 
            'Celebrate', 'Enjoy', 'Magnificent', 'Triumph'
        ]), 
        negWords : API.shuffle([
            'Abuse', 'Grief', 'Poison', 'Sadness', 
            'Pain', 'Despise', 'Failure', 'Nasty', 
            'Angry', 'Detest', 'Horrible', 'Negative', 
            'Ugly', 'Dirty', 'Gross', 'Evil', 
            'Rotten','Annoy', 'Disaster', 'Horrific',  
            'Scorn', 'Awful', 'Disgust', 'Hate', 
            'Humiliate', 'Selfish', 'Tragic', 'Bothersome', 
            'Hatred', 'Hurtful', 'Sickening', 'Yucky'
        ])
    });

    API.addTasksSet({
        instructions: [{
            type: 'message',
            piTemplate: true,
            buttonText: 'Continue'
        }],

        realstart: [{
            inherit: 'instructions',
            name: 'realstart',
            templateUrl: 'realstart.jst',
            title: 'Consent',
            header: 'Welcome'
        }],

        raceiat_instructions: [{
            inherit: 'instructions',
            name: 'raceiat_instructions',
            templateUrl: 'raceiat_instructions.jst',
            title: 'IAT Instructions',
            header: 'Implicit Association Test'
        }],

        explicits: [{
            type: 'quest',
            name: 'explicits',
            scriptUrl: 'explicits.js'
        }],

        raceiat: [{
            type: 'time',
            name: 'raceiat',
            scriptUrl: 'raceiat.js'
        }],

        demographics: [{
            type: 'quest',
            name: 'demographics',
            scriptUrl:'demographics.js'
        }],


        mrscale: [{
            type: 'quest',
            name: 'mrscale',
            scriptUrl:'mrscale.js'
        }],

        rwascale: [{
            type: 'quest',
            name: 'rwascale',
            scriptUrl:'rwascale.js'
        }],

        debriefing: [{
            type: 'quest',
            name: 'debriefing',
            scriptUrl: 'debriefing.js'
        }],

        lastpage: [{
            inherit: 'instructions',
            templateUrl: 'lastpage.jst',
            title: 'End',
            buttonHide: true,
            header: 'You have completed the study'
        }]
    });

    API.addSequence([
        {inherit: 'realstart'},
        {
            mixer:'random',
            data:[
                {inherit: 'explicits'},
                {inherit: 'demographics'},

                // force the instructions to preceed the iat
                {
                    mixer: 'wrapper',
                    data: [
                        {inherit: 'raceiat_instructions'},
                        {inherit: 'raceiat'}
                    ]
                }
            ]
        },

        {
            mixer:'choose',
            n:1,
            data:[
                { inherit: 'mrscale' },
                { inherit: 'rwascale' }
            ]
        },

        {inherit: 'debriefing'},
        { type:'postCsv'},
        {inherit: 'lastpage'}
    ]);

    return API.script;
});
