angular.module('home.services.SectionModel', [])
    .factory('SectionModel', SectionModel);

    function SectionModel(){
        var service = {
            getSections: getSections
        };

        function getSections(){
            return {
                intro: {
                    title: 'Kyle Kravette Lighting Design',
                    text: 'Theatrical Lighting Design for Plays, Dance, and Musical Theater',
                    picture: 'assets/images/DOL2014-1.jpg',
                    route: 'about'
                },
                plays: {
                    title: 'Plays',
                    picture: 'assets/images/SMS-1.png',
                    route: 'plays'
                },
                dance: {
                    title: 'Dance',
                    picture: 'assets/images/DOL2014-2.jpg',
                    route: 'dance'
                },
                Musicals: {
                    title: 'Musicals',
                    picture: 'assets/images/GOD-1.jpg',
                    route: 'musicals'
                }
            };
        }

        return service;
    }