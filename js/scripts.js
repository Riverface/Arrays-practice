var things = ["thing1", "thing2", "thing3"];

var heckle = ["haha, look at this guy. He likes ", ", what a loser.", "? Really? You like ", "? Hahahaha.", "Ooh, look at me, I'm ", "and I like ",  "' , yeah that's you dude"];
var fullneg = [];
var twothings = [];
var personName = $("#name").val();

$(document).ready(function()
{



$("#resultbutton").click(function(){



splice();
  $("#results").append(things);
});

});
function splice()
{
  twothings = things.slice(0, 3);
  console.log(heckle);
  things[0] =  $("#thing1").val();
  things[1] =  $("#thing2").val();
  things[2] =  $("#thing3").val();
  console.log(things[0]);
  var h=0;
  var t=0;
  for(var i= 0; i < (heckle.length + things.length); i++)
  {

    if(i % 2 == 0)
    {
      fullneg.push(heckle[h]  );
      h++;
      console.log(heckle[h] + " " + h);

    }
    else {
      fullneg.push(things[t] );

      t++;
    }

  }
console.log(fullneg);
}
