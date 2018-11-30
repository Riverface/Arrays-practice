
var heckle = ["haha, look at this guy. <br> He likes ", ", what a loser. Really? <br> You like ", "? <br> Hahahaha. <br> Ooh, look at me, I'm ", "and I like ",  "', <br>  yeah that's you dude"];
var fullneg = [];
var twothings = [];
var things;
  var personName;
$(document).ready(function()
{




$("#resultbutton").click(function(){



splice();
  $("#results").html(fullneg);
});

});
function splice()
{
    personName = $("#name").val() + " ";
things = ["thing1", "thing2",  personName, "thing3"];

  twothings = things.slice(0, 3);
  console.log(heckle);
  things[0] =  $("#thing1").val();
  things[1] =  $("#thing2").val();
  things[3] =  $("#thing3").val();
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
console.log(personName);
}
