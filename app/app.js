(function(angular) {
    "use strict";

    var app = angular.module('zenApp',[]);

    app.controller('AboutController', function($scope){
      $scope.about = {
              name: 'Nick Myers',
              description: 'A 28 year old web developer out of Fresno, CA. Has many areas of expertise in the web' +
              'development arena. I have honed my skills through Bitwise Industries geekwise academy in the mural district' +
              'of Downtown Fresno. I was also able to take part in the Geekwise Cohort number one. A program in which 8 of geekwise' +
              'academies best and have the most potential get to take part in real client work.',
              position: 'Freelance Web Developer',
              img: '../../img/about-me.png',
              skills: [
                  'Javascript',
                  'jQuery',
                  'Angular JS',
                  'PHP',
                  'Laravel',
                  'Custom Wordpress Templates',
                  'HTML5',
                  'CSS3',
                  'SCSS',
                  'LESS',
                  'Bootstrap',
                  'SEO',
                  'Copywriting',
                  'Photoshop',
                  'Node JS',
                  'Mongodb',
                  'Professional Blogging',
                  'Content Creation',
                  'Jekyll',
                  'Affiliate Marketting'
              ]
      }

    });

})(window.angular);