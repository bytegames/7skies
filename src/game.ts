import { Display } from "./display.js"
import { Controller } from "./controller.js"
import { Synth } from "./synth.js"

namespace SevenSkies {

    export class Game {

        public static init() {

            let modules = [ Display, Controller, Synth ]
            modules.forEach((module) => module.init())

            Display.test()
        }
    }
}

SevenSkies.Game.init()