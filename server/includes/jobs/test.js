exports.showMessage = function (agenda) {
    agenda.define('show message', function (job, done) {
        var data = job.attrs.data;
        console.log("Shows message.");
        console.log(data);
        done();
    });
};