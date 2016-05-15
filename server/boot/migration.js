var moment = require('moment');
module.exports = function(app) {
    app.dataSources.mysqlDs.automigrate('Task', function(err) {
        if (err) throw err;

        app.models.Task.create([
            {name: 'Zadanie 210', description: 'Wykonać zadanie 210 i przesłac rozwiązanie', status: 0, groupId: 1, assignedTo:"Mikolaj Sikorski"},
            {name: 'Napisać referat', description: 'Napisac referat na podstawie informacji z bilbioteki', status: 1, groupId: 1, assignedTo:"Damian Skakuj"},
            {name: 'Przygotować wzory',  description: 'Przygotować tabele z potrzebnymi wzorami', status: 2, groupId: 1, assignedTo:"Mikolaj Sikorski"},
            {name: 'Zebrać potrzebne materiały',  description: 'Zebrać niezbędne materiały do napisania referatu', status: 1, groupId: 2, assignedTo:"Damian Skakuj"},
            {name: 'I rozdział',  description: 'Napisać I rozdział', status: 1, groupId: 2, assignedTo:"Damian Skakuj"},
            {name: 'Zaprojektować Apke', description: 'Zaprojektować Aplikacje i bazę danych', status: 2, groupId: 2, assignedTo:"Damian Skakuj"},
            {name: 'Backed', description: 'Napisac serwer dla aplikacji', status: 2, groupId: 2, assignedTo:"Mikolaj Sikorski"},
            {name: 'Napisać frontend part1',  description: 'Utworzyć kontrollery, ostylować', status: 2, groupId: 2, assignedTo:"Damian Skakuj"},
            {name: 'Napisać frontend part2',  description: 'utowrzyć serwisy, podpiąc api', status: 2, groupId: 2, assignedTo:"Mikolaj Sikorski"}
        ], function(err, task) {
            if (err) throw err;

            console.log('Models created: \n', task);
        });
    });
    app.dataSources.mysqlDs.automigrate('Group', function(err){
        if (err) throw err;

        app.models.Group.create([
            {name: 'Matematyka'},
            {name: 'Projekt OZP'},
            {name: 'Projekt ZAW'},
        ], function(err, group) {
            if (err) throw err;

            console.log('Models created: \n', group);
        });
    })
    app.dataSources.mysqlDs.automigrate('Comment', function(err){
        if (err) throw err;

        app.models.Comment.create([
            {content: 'Fajnie to zrobiłeś', dateAdd: moment().format(), taskId: 1, addBy: "Kasia Kowalska", avatar: 'img/1.png'},
            {content: 'Do Bani', dateAdd: moment().format(), taskId: 2,  addBy: "Kasia Kowalska",  avatar: 'img/1.png'},
            {content: 'Dla mnie spoko', dateAdd: moment().format(), taskId: 3,  addBy: "Kasia Kowalska",  avatar: 'img/1.png'},
        ], function(err, comment) {
            if (err) throw err;

            console.log('Models created: \n', comment);
        });
    })
    app.dataSources.mysqlDs.automigrate('Account', function(err){
        if (err) throw err;

        app.models.Account.create([
            {firstName: 'Marcin',lastName:"Najman", email: 'admin@admin.com', password: 'admin', avatar: 4},
            {firstName: 'Maciek',lastName:"Nowak", email: 'Maciek@pow.com', password: 'maciek', avatar: 5},
            {firstName: 'Mikołaj',lastName:"Sikorski", email: 'miki@miki.com', password: 'admin', avatar: 6},
            {firstName: 'Damian',lastName:"Skakuj", email: 'damian@skakuj.com', password: 'damian', avatar: 7},
        ], function(err, account) {
            if (err) throw err;

            console.log('Models created: \n', account);
        });
    })
    app.dataSources.mysqlDs.automigrate('groupHasAcc', function(err){
        if (err) throw err;

        app.models.groupHasAcc.create([
            {accountId: 1, groupId: 1},
            {accountId: 1, groupId: 2},
            {accountId: 1, groupId: 3},
            {accountId: 2, groupId: 1},
            {accountId: 3, groupId: 1},
            {accountId: 3, groupId: 2},
            {accountId: 3, groupId: 3},
            {accountId: 4, groupId: 1},
            {accountId: 4, groupId: 2},
            {accountId: 4, groupId: 3}
        ], function(err, groupHasAcc) {
            if (err) throw err;

            console.log('Models created: \n', groupHasAcc);
        });
    })
    app.dataSources.mysqlDs.automigrate('Lib', function(err){
        if (err) throw err;

        app.models.Lib.create([
            {name: "Kazik_photo", groupId: 2, link: "https://upload.wikimedia.org/wikipedia/commons/7/79/Casimir_the_Great_by_Leopold_L%C3%B6ffler.PNG", type: 1},
            {name: "Kazik-Info", groupId: 2, link: "https://en.wikipedia.org/wiki/Casimir_III_the_Great", type: 2},

        ], function(err, lib) {
            if (err) throw err;

            console.log('Models created: \n', lib);
        });
    })
};
