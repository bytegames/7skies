export enum KEY {
    UP = 37,
    RIGHT = 38,
    DOWN = 39,
    LEFT = 40,
    FIRE = 32,
    ITEM = 13
}

export class Controller {

    public messenger = () => { }

    public static init() {

        document.onkeyup = Controller.handle_input
    }

    public static handle_input(ev) {
        
        console.log(ev.keyCode)
        
        switch (ev.keyCode) {
            
            case KEY.UP:
            case KEY.DOWN:
            case KEY.LEFT:
            case KEY.RIGHT:
            case KEY.FIRE:
            case KEY.ITEM:

                
        }
    }
}