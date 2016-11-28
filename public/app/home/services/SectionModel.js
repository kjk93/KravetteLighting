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
                    picture: 'assets/images/DOL2014-1.jpg'
                },
                plays: {
                    title: 'Plays',
                    picture: 'assets/images/SMS-1.png'
                },
                dance: {
                    title: 'Dance',
                    picture: 'assets/images/DOL2014-2.jpg'
                },
                Musicals: {
                    title: 'Musicals',
                    picture: 'assets/images/GOD-1.jpg'
                }
            };
        }

        return service;
    }