export class Display {
    static init() {
        Display.canvas = document.querySelector('canvas');
        Display.canvas.height = Display.dims.height;
        Display.canvas.width = Display.dims.width;
        Display.screen = Display.canvas.getContext("2d");
    }
    static test() {
        let size = "height: " + Display.canvas.height + "; width:" + Display.canvas.width;
        Display.screen.strokeStyle = 'rgb(200,100,120)';
        Display.screen.strokeText(size, 30, 25, 200);
    }
}
Display.dims = { height: 480, width: 640 };
