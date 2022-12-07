var canvas = document.getElementById("renderCanvas");

var startRenderLoop = function (engine, canvas) {
    engine.runRenderLoop(function () {
        if (sceneToRender && sceneToRender.activeCamera) {
            sceneToRender.render();
        }
    });
}

var engine = null;
var scene = null;
var sceneToRender = null;
var createDefaultEngine = function() { return new BABYLON.Engine(canvas, true, { preserveDrawingBuffer: true, stencil: true,  disableWebGL2Support: false}); };
var createScene = function () {
    // This creates a basic Babylon Scene object (non-mesh)
    var scene = new BABYLON.Scene(engine);

    // This creates and positions a free camera (non-mesh)
    var camera = new BABYLON.FreeCamera("camera1", new BABYLON.Vector3(0, 5, -10), scene);

    // This targets the camera to scene origin
    camera.setTarget(BABYLON.Vector3.Zero());

    // This attaches the camera to the canvas
    camera.attachControl(canvas, true);

    // This creates a light, aiming 0,1,0 - to the sky (non-mesh)
    var light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, 1, 0), scene);

    // Default intensity is 1. Let's dim the light a small amount
    light.intensity = 0.7;

    //color background black
    scene.clearColor = new BABYLON.Color3.FromHexString('#000');
    
    //create box with params x, y, z, width, height, ddepth
    var b1 = createBox(0, 0, 20, 40, 40, .01);

    //BLUE.... wrap box in material colored with hex code
    b1.material = fileMat('caveman..jpg');

    var b2 = createBox(40, 0, -50, 40, 40, .01);

    //GREEN...........wrap box in material from local file
    b2.material = hexMat('#7E8772');
    
    var b3 = createBox(80, 0, 20, 40, 40, .01);

    //wrap box in material from local file
    b3.material = hexMat('#00008B', scene);

    var b4 = createBox(120, 0, -50, 40, 40, .01);

    //wrap box in material from local file
    b4.material = hexMat('#00008B', scene);

    var b5 = createBox(160, 0, 20, 40, 40, .01);

    //wrap box in material from local file
    b5.material = hexMat('#00008B', scene);

    var b6 = createBox(200, 0, -50, 40, 40, .01);

    //wrap box in material from local file
    b6.material = hexMat('#00008B', scene);

    var b7 = createBox(240, 0, 20, 40, 40, .01);

    //wrap box in material from local file
    b7.material = hexMat('#00008B', scene);

    var b8 = createBox(280, 0, -50, 40, 40, .01);

    //wrap box in material from local file
    b8.material = hexMat('#00008B', scene);

    var b9 = createBox(320, 0, 20, 40, 40, .01);

    //wrap box in material from local file
    b9.material = hexMat('#00008B', scene);

    var meshyy = new meshModel('car.glb',1);

    return scene;
};
        window.initFunction = async function() {
            
            
            var asyncEngineCreation = async function() {
                try {
                return createDefaultEngine();
                } catch(e) {
                console.log("the available createEngine function failed. Creating the default engine instead");
                return createDefaultEngine();
                }
            }

            window.engine = await asyncEngineCreation();
if (!engine) throw 'engine should not be null.';
startRenderLoop(engine, canvas);
window.scene = createScene();};
initFunction().then(() => {sceneToRender = scene                    
});

// Resize
window.addEventListener("resize", function () {
    engine.resize();
});
