import { Display } from "./display.js";
import { Controller } from "./controller.js";
import { Synth } from "./synth.js";
var SevenSkies;
(function (SevenSkies) {
    class Game {
        static init() {
            let modules = [Display, Controller, Synth];
            modules.forEach((module) => module.init());
            Display.test();
        }
    }
    SevenSkies.Game = Game;
})(SevenSkies || (SevenSkies = {}));
SevenSkies.Game.init();
