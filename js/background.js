class Background{
	constructor(backgroundElement){
		this.backgroundElement = backgroundElement;
		this.height = 600;
	    this.width = 600;
	    this.backgroundElement.style.height = this.height + 'px';
	    this.backgroundElement.style.width = this.width + 'px';
	    this.leftPosition = 0;
	    this.topPosition = 0;
	    this.speed = 5;
	    this.backgroundElement.style.leftPosition = this.leftPosition + 'px';
	    this.backgroundElement.style.topPosition = this.topPosition + 'px';
	    this.moveBackground = this.moveBackground.bind(this);
	    setInterval(this.moveBackground, 50);
	}
	
	moveBackground(){
		this.topPosition = this.topPosition - this.speed;
		this.backgroundElement.style.backgroundPositionY = this.topPosition + 'px';
	}
}