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
    var back1 = createBox(0,0,20.1,40,40,.01)

    back1.material = hexMat('#FFFFFF')

    var b1 = createBox(0, 0, 20, 40, 40, .01);

    //BLUE.... wrap box in material colored with hex code
    b1.material = fileMat('caveman..jpg');

    var b2 = createBox(40, 0, -50, 40, 40, .01);

    //GREEN...........wrap box in material from local file
    b2.material = fileMat('tutt.jpg');
    b2.rotation.z += Math.PI;

    var back2 = createBox(40,0,-50.1,40,40,.01)

    back2.material = hexMat('#FFFFFF')
    
    var b3 = createBox(80, 0, 20, 40, 40, .01);

    //wrap box in material from local file
    b3.material = fileMat('kingdomm.jpg', scene);

    var back3 = createBox(80,0,20.1,40,40,.01)

    back3.material = hexMat('#FFFFFF')

    var b4 = createBox(120, 0, -50, 40, 40, .01);

    //wrap box in material from local file
    b4.material = fileMat('renaissancee.jpg', scene);
    b4.rotation.z += Math.PI;

    var back4 = createBox(120,0,-50.1,40,40,.01)

    back4.material = hexMat('#FFFFFF')

    var b5 = createBox(160, 0, 20, 40, 40, .01);

    //wrap box in material from local file
    b5.material = fileMat('lillyy.jpg', scene);

    var back5 = createBox(160,0,20.1,40,40,.01)

    back5.material = hexMat('#FFFFFF')

    var b6 = createBox(200, 0, -50, 40, 40, .01);

    //wrap box in material from local file
    b6.material = fileMat('chicagoo.jpg', scene);

    var back6 = createBox(200,0,-50.1,40,40,.01)

    back6.material = hexMat('#FFFFFF')
    b6.rotation.z += Math.PI;

    var b7 = createBox(240, 0, 20, 40, 40, .01);

    //wrap box in material from local file
    b7.material = fileMat('warholl.jpg', scene);

    var back7 = createBox(240,0,20.1,40,40,.01)

    back7.material = hexMat('#FFFFFF')

    var b8 = createBox(280, 0, -50, 40, 40, .01);

    //wrap box in material from local file
    b8.material = fileMat('lichenn.jpg', scene);
    b8.rotation.z += Math.PI;

    var back8 = createBox(280,0,-50.1,40,40,.01)

    back8.material = hexMat('#FFFFFF')

    var back9 = createBox(100,-20.3,-10,500,0,200)

    back9.material = hexMat('#FFFFFF')

    var snowman = new meshModel('snowman.glb', 2,2,0,-1);
    //var house = new meshModel('snowhome.glb', -20, 0, 20, 20);

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
