
class Form{
    constructor(){
        this.input = createInput("Name");
        this.button = createButton("play");
        this.greating = createElement("h3");
    }
hide(){
    this.input.hide();
    this.button.hide();
    this.greating.hide();
}


    display(){
        var title = createElement("h2");
        title.html("Car Racing Game");
        title.position(130,0);
      
       
        
        this.input.position(130,160);
        this.button.position(250,200);
        this.button.mousePressed(function(){
            this.input.hide();
            this.button.hide();
            
            player.name = this.input.value();
            playerCount += 1;
            player.index=playerCount;
            player.update();
            player.updateCount(playerCount);
            this.greating.html("Hello " + player.name);
            this.greating.position(130,160);
        })
    }
}