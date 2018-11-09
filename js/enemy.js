class Enemy{
	constructor({parentElement, leftPosition, topPosition }){
        let enemyElement = document.createElement("div");
        this.enemyElement = enemyElement;
        this.leftPosition = leftPosition;
        this.topPosition = topPosition;
        this.containerHeight = 600;
        this.y = 7;
        this.height = 40;
        this.width = 50;
        this.enemyElement.style.left = this.leftPosition + 'px';
        this.enemyElement.style.top= this.topPosition + 'px'; 
        this.enemyElement.style.height = this.height + 'px';
        this.enemyElement.style.width = this.width + 'px';
        this.enemyElement.style.position = "absolute";
        this.enemyElement.style.background="url(images/enemy3.png)";
        // console.log(enemyElement)
        parentElement.appendChild(this.enemyElement);
        this.wallCollision = this.wallCollision.bind(this);
        this.shooterEnemyCollision = this.shooterEnemyCollision.bind(this);
        setInterval(this.wallCollision, 100);
       //  setInterval(this.shooterEnemyCollision, 100);
    } 

    wallCollision(){
        if(this.topPosition >= this.containerHeight - this.width ){
            this.enemyElement.remove(this.enemyElement);
        }
        this.topPosition = this.topPosition + this.y;
        this.enemyElement.style.top = this.topPosition + 'px';    
    }

    shooterEnemyCollision(shooter){
        console.log("this is shoote left position= "+shooter.leftPosition);
        //console.log(this)
        //console.log(this.leftPosition + this.width > shooter.leftPosition && this.leftPosition < shooter.leftPosition + shooter.width && this.topPosition + this.height > shooter.topPosition && this.topPosition < shooter.topPosition + shooter.height)
      
    }
}

  
