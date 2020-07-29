var database;
function setup () {
    var firebaseConfig = {
        apiKey: "AIzaSyDBTKkSOXQiswSTQPfoMPSR5mWg4nP0uHs",
        authDomain: "operationsearch-883d0.firebaseapp.com",
        databaseURL: "https://operationsearch-883d0.firebaseio.com",
        projectId: "operationsearch-883d0",
        storageBucket: "operationsearch-883d0.appspot.com",
        messagingSenderId: "70476201860",
        appId: "1:70476201860:web:6bb2fe0594ef801be6e7d1"
      };
    firebase.initializeApp(firebaseConfig);
    database = firebase.database();

    var ref = database.ref('/');
    ref.on('value',gotdata,err)
}
function gotdata(data) {
  var scorelistings = selectAll('.scorelisting');
  for (let i = 0; i < scorelistings.length; i++) {
    scorelistings[i].remove();
  }
  var scores = data.val();
  var keys = Object.keys(scores);
  for (let i = 0; i < keys.length; i++) {
    var k = keys[i];
    var initial = scores[k].data.name;
    var playerscore = scores[k].data.score;
    console.log(initial,playerscore);
    var li1 = createElement('td',initial);
    var li2 = createElement('td',playerscore);
    var li3 = createElement('td',i+1);
    var s1= createElement('td',"|");
    var s2= createElement('td',"|");
    var lo = createElement('tr');
    li3.class('scorelisting');
    li3.parent(lo);
    s1.class('scorelisting');
    s1.parent(lo);
    li1.class('scorelisting');
    li1.parent(lo);
    s2.class('scorelisting');
    s2.parent(lo);
    li2.class('scorelisting');
    li2.parent(lo);
    lo.class('scorelisting');
    lo.parent('scorelist');
  }
}
function err() {
}