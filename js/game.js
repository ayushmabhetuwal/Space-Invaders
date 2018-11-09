class Game{
	constructor(containerElement){
		this.containerElement = containerElement;
		this.height = 600;
		this.width = 600;
	}

	initialization(){
		let containerElement = document.getElementsByClassName("container")[0];
		this.shooterElement = document.getElementsByClassName("shooter")[0];
		
		//console.log(this.shooterElement);
		this.shooter = new Shooter(this.shooterElement);
		document.addEventListener('keydown', (e)=>this.shooter.buttonGotPressed(e));

		this.backgroundElement = document.getElementsByClassName("background")[0];
		this.background = new Background(this.backgroundElement);

		this.bullet = new Bullet(this.shooterElement);   
		//console.log(this.bullet)

		let enemyElement = document.getElementsByClassName("enemy")[0];
		this.enemies = [];
		var that = this;
		setInterval(function(){
			var top = Math.round(Math.random() * 50) + 1;
			var left = Math.round(Math.random() * 550) + 1;
			this.enemy = new Enemy({parentElement: containerElement, leftPosition: left, topPosition: top});
			this.enemy.shooterEnemyCollision(that.shooter); 
		},1000)

        this.enemies.push(this.enemy);   
    }
}

let game = new Game();
game.initialization();


