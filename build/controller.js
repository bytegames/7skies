export var KEY;
(function (KEY) {
    KEY[KEY["UP"] = 37] = "UP";
    KEY[KEY["RIGHT"] = 38] = "RIGHT";
    KEY[KEY["DOWN"] = 39] = "DOWN";
    KEY[KEY["LEFT"] = 40] = "LEFT";
    KEY[KEY["FIRE"] = 32] = "FIRE";
    KEY[KEY["ITEM"] = 13] = "ITEM";
})(KEY || (KEY = {}));
export class Controller {
    constructor() {
        this.messenger = () => { };
    }
    static init() {
        document.onkeyup = Controller.handle_input;
    }
    static handle_input(ev) {
        console.log(ev.keyCode);
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
