class GameDispositivos extends Phaser.Scene {
    constructor (){
        super('GameDispositivos');
    }

    preload(){
        this.load.image('t','./img/loading.gif');
    }

    create() {
        this.add.image(400,300,'t');
        setTimeout(
            () => {
                this.events.emit('pronto');
            },
            5000
        );        
    }

    update(){
        console.log("GameDispositivos");   
    }
};