class GoalSetting{
    
    constructor(){}

    display(){
        
        var Text2=createElement("h2");
        Text2.position(500,200);
        Text2.html("Here are six reasons why setting goals is important.:"
        +"<br/>"+"<br/>"+
        "Goals Give You Focus. Without a goal, your efforts can become"+"<br/>"+
        " disjointed and often confusing...."+"<br/>"+
        "Goals Help You Measure Progress. ..."+"<br/>"+
        "Goals Help You Stay Motivated. ..."+"<br/>"+
        "They Help You Beat Procrastination. ..."+"<br/>"+
        "You Achieve Even More. ... "+"<br/>"+
        " Goals Help You Determine What You Want in Life."+"<br/>"+"<br/>"+
        " THEREFORE, IT IS EXTREMELY IMPORTANT TO SET A GOAL."
        +"<br/>");
     
       

        var BackButton=createButton("Go back");
        BackButton.position(750,750);
        BackButton.size(100,30);

        BackButton.mousePressed(function(){

            Text2.hide();
            BackButton2.hide();

            game.update(2);
            game.displayChoose();

        })
  
    }

}
