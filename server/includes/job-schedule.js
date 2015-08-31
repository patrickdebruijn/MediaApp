var color = require('cli-color');
exports.setup = function () {
    var sampleJob = require('./jobs/test.js');

    // Setup agenda
    var Agenda = require("Agenda");
    var agenda = new Agenda({
        db: {
            address: 'localhost:27017/MediaApp',
            collection: 'MediaJobs',
            maxConcurrency: 100,
            defaultLockLifetime: 100 //1minute
        }
    }).processEvery('30 seconds');

    sampleJob.showMessage(agenda);


    agenda.purge(function (err, numRemoved) {
        console.log('Purged job queue, removed  ' + color.red(numRemoved) + ' old entries');
    });
    /*
     var job = agenda.create('show message', {userCount: 100});
     job.repeatEvery('5 seconds');
     job.save(function(err) {
     console.log("Job successfully saved");
     });

     var job2 = agenda.create('show message', {userCount: 50});
     job2.repeatEvery('5 seconds');
     job2.save(function(err) {
     console.log("Job successfully saved");
     });


     //agenda.every('5 seconds', 'show message',{test:'blaat'});*/
    //agenda.start();


    return agenda;
};