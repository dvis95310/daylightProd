

 
 
// variable à Régler pour le nombre de questions 
// variable à Régler pour le nombre de questions
var quizReglageNumber 
// variable à Régler pour le nombre de questions 
// variable à Régler pour le nombre de questions 
 
var quizQuestions = [];
var listShuffle

var correctAnswers = []
var correctAnswersB = []

var qArray = "";
var bArray = "";
var dopamine;
var loadQuestion;
var loadAnswers;
var maxQuest=20;
var maxQuestConfig



function trueForce(){
	$.ajax({
            url: 'json/config.json',
            type: 'GET',
            dataType: 'html',
            header: 'Content-Type: application/json; charset=utf-8',
            cache: false,
            processData: false,
            success: function(data) {
                var myObject = JSON.stringify(data);
                var x = JSON.parse(data);
                configArray = x;
				qNameFile=configArray.question_file_name+".json"
				aNameFile=configArray.answers_file_name+".json"
				maxQuestConfig=configArray.quiz_n_questionsMax
				quizReglageNumber =parseInt(configArray.quiz_n_questions)
				loadQuestion();
				loadAnswers();
    var maxQuest = quizReglageNumber;

        if (maxQuest == 0 || maxQuest == 'undefined' || maxQuest == 'null' || maxQuest == null) {
            maxQuest = quizReglageNumber
        }


        for (var i = 0; i < maxQuestConfig ; i++) {
            list[i] = i // 0 to 100

        }
		listShuffleBrut = shuffle(list)
        listShuffle = listShuffleBrut.slice(0, maxQuest);
		

            }



        });
}


      function shuffle(array) {
            var i = array.length,
                j = 0,
                temp;

            while (i--) {

                j = Math.floor(Math.random() * (i + 1));

                // swap randomly chosen element with current element
                temp = array[i];
                array[i] = array[j];
                array[j] = temp;

            }

            return array;
        }

        var list = new Array;
 

        function getUrlVars() {
            var vars = {};
            var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m, key, value) {
                vars[key] = value;
            });
            return vars;
        }

        var number = getUrlVars()["numbers"];
        var quesTime = 1;

(function()

    {

        angular
            .module("turtleFacts")
            .factory("DataService", DataService);

        function DataService() {

            var dataObj = {
                turtlesData: turtlesData,
                quizQuestions: quizQuestions,
                correctAnswers: correctAnswers,
                quesTime: quesTime,
                configArray: configArray,
                configArray2: configArray2
            };

            return dataObj;
        }

        var masterQuestIMGURL = 'ressourses/img/';
        var masterAnswerIMGURL = 'ressourses/img/';
        var masterAnswerSongURL = 'ressourses/son/';
        var masterQuestionSongURL = 'ressourses/son/';


  $.ajax({
            url: 'json/config.json',
            type: 'GET',
            dataType: 'html',
            header: 'Content-Type: application/json; charset=utf-8',
            cache: false,
            processData: false,
            success: function(data) {
                var myObject = JSON.stringify(data);
                var x = JSON.parse(data);
                configArray = x;
				quizReglageNumber =parseInt(configArray.quiz_n_questions)
				qNameFile=configArray.question_file_name+".json"
				aNameFile=configArray.answers_file_name+".json"
				maxQuestConfig=configArray.quiz_n_questionsMax
				

    var maxQuest = quizReglageNumber;

        if (maxQuest == 0 || maxQuest == 'undefined' || maxQuest == 'null' || maxQuest == null) {
            maxQuest = quizReglageNumber
        }


        for (var i = 0; i < maxQuestConfig ; i++) {
            list[i] = i // 0 to 100

        }
		listShuffleBrut = shuffle(list)
        listShuffle = listShuffleBrut.slice(0, maxQuest);
		

            }



        });
		
		
		

dopamine=function(){
	     correctAnswers.length = quizReglageNumber;
                for (i = 0; i < listShuffle.length; i++) {
                    correctAnswers[i] = bArray[listShuffle[i]]
                }
		
}
    
      
trueForce();
       

loadQuestion = function (){
	 $.ajax({
            url: 'json/'+qNameFile,
            type: 'GET',
            dataType: 'html',
            header: 'Content-Type: application/json; charset=utf-8',
            cache: false,
            processData: false,
            success: function(data) {
                var myObject = JSON.stringify(data);
                var x = JSON.parse(data);
                qArray = $.map(x, function(value, index) {
                        return value;

                    }


                );

                for (var i = 0; i < listShuffle.length; i++) {
                    quizQuestions.push(

                        {
                            type: "text",
                            text: qArray[listShuffle[i]].question_prequel,
                            possibilities: [{
                                    answer: qArray[listShuffle[i]].possibilities[0],
                                },
                                {
                                    answer: qArray[listShuffle[i]].possibilities[1],
                                },
                                {
                                    answer: qArray[listShuffle[i]].possibilities[2],
                                },
                                {
                                    answer: qArray[listShuffle[i]].possibilities[3],
                                }

                            ],
                            question_id: i + 1,
                            question_id_true: qArray[listShuffle[i]].question_id,
                            selected: null,
                            correct: null,
                            feedBack: qArray[listShuffle[i]].feedback,
                        }
                    );

                    quizQuestions[0].selected = true



                    if (qArray[i].selected == 1) {
                        quizQuestions[i].selected = true
                    }
                    if (qArray[i].selected == 0) {
                        quizQuestions[i].selected = null
                    }



                }



            }



        });

	
}

    loadAnswers=function(){    $.ajax({
            url: 'json/'+aNameFile,
            type: 'GET',
            dataType: 'html', // On désire recevoir du HTML
            success: function(data) {
                var myObject = JSON.parse(data);
                var x = JSON.parse(data);
                bArray = $.map(x, function(value, index) {
                        return value;

                    }


                );
                correctAnswersB = $.map(bArray, function(value, listShuffle) {
                        return value;

                    }


				
				
                );


  
				dopamine();
							
	for (var i = 0; i < listShuffle.length; i++) {
													correctAnswers[i]=correctAnswersB[listShuffle[i]];
													}
				
				
            }


        });
	}
	
	
   loadQuestion();
loadAnswers();
       
	   
        var turtlesData = [{
                type: "GHPSJ",
                image_url: "http://www.hpsj.fr/wp-content/uploads/2015/01/vue-nuit.jpg",
                locations: "UN STATUT SPÉCIFIQUE, FRUIT D'UNE HISTOIRE",
                // size: "Up to 1.5m and up to 300kg",
                // lifespan: "Over 80 years",
                // diet: "Herbivore",
                description: "Le Groupe hospitalier Paris Saint-Joseph (GHPSJ) est un hôpital privé à but non lucratif, Établissement de Santé Privé d'Intérêt Collectif (ESPIC).Il est issu en 2006 de la fusion de trois hôpitaux du sud parisien fondés au 19ème siècle qui sont Saint-Joseph, Notre Dame de Bon Secours et Saint-Michel auxquels s'ajoute l'Institut de Formation en Soins Infirmiers (IFSI).Le GHPSJ est administré par la Fondation hôpital Saint-Joseph."
            }
            // ,{
            // type: "Loggerhead Turtle",
            // image_url: "http://i.telegraph.co.uk/multimedia/archive/02651/loggerheadTurtle_2651448b.jpg",
            // locations: "Tropical and subtropical oceans worldwide",
            // size: "90cm, 115kg",
            // lifespan: "More than 50 years",
            // diet: "Carnivore",
            // description: "Loggerhead turtles are the most abundant of all the marine turtle species in U.S. waters. But persistent population declines due to pollution, shrimp trawling, and development in their nesting areas, among other factors, have kept this wide-ranging seagoer on the threatened species list since 1978. Their enormous range encompasses all but the most frigid waters of the world's oceans. They seem to prefer coastal habitats, but often frequent inland water bodies and will travel hundreds of miles out to sea."
            // }

        ];

    }

)();