class Bullet{
	constructor(parentElement, leftPosition, topPosition){
        //console.log(parentElement)
		let bulletElement = document.createElement("div")
        this.bulletElement = bulletElement;
        this.containerHeight = 14;
        this.leftPosition = leftPosition;
        this.topPosition = topPosition;
        this.x = 1;
        this.y = 10;
        this.height = 8;
        this.width = 5;
        this.bulletElement.style.left = this.leftPosition + 'px';
        this.bulletElement.style.top = this.topPosition + 'px';
        this.bulletElement.style.height = this.height + 'px';
        this.bulletElement.style.width = this.width + 'px';
        this.bulletElement.style.position = "absolute";
        this.bulletElement.style.background="url(images/bullet.png)";
        parentElement.appendChild(this.bulletElement);
        this.move = this.move.bind(this);     
        this.wallCollision = this.wallCollision.bind(this);
    }

    move(){
        setInterval(this.wallCollision,50);     
    }

    wallCollision(){
        if(this.topPosition <= this.containerHeight){
            this.bulletElement.remove(this.bulletElement);
        }
        this.topPosition = this.topPosition - this.y;
        this.bulletElement.style.top = this.topPosition + 'px'; 
    }
}
