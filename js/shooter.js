class Shooter {
  constructor(shooterElement){
        this.shooterElement = shooterElement;
        this.leftPosition = 300;
        this.topPosition = 555;
        this.containerWidth = 600;
        this.width = 30;
        this.height = 40;
        this.x = 5;
        this.y = 5;
        this.shooterElement.style.left = this.leftPosition + 'px';
        this.shooterElement.style.top = this.topPosition + 'px';
        this.shooterElement.style.width = this.width + 'px';
        this.shooterElement.style.height = this.height + 'px';
        this.buttonGotPressed = this.buttonGotPressed.bind(this);  
        //console.log(this.shooterElement.parentNode)
    }

    buttonGotPressed(e){
        //console.log(e);
        if(e.key == " "){
            this.bullets=[];
            this.bullet = new Bullet(this.shooterElement.parentNode,this.leftPosition,this.topPosition);
            this.bullet.move();
            this.bullets.push(this.bullet);  
        }

        if(e.key == "ArrowLeft"){
            // console.log(e.key);
            if(this.leftPosition <= 0){
                this.leftPosition = 0;
            }
            else
            {
                this.leftPosition = this.leftPosition - this.x;                
            }
            // console.log(this.leftPosition)
            this.shooterElement.style.left = this.leftPosition +'px'; 
        }

        if(e.key == "ArrowRight"){
            this.leftPosition = this.leftPosition + this.x;
            this.shooterElement.style.left = this.leftPosition +'px';
            if(this.leftPosition >= this.containerWidth - this.width){
                this.leftPosition = this.containerWidth - this.width;
                this.shooterElement.style.left = this.leftPosition + 'px';
            }
        }
    }
}
 