//Making connect file for colaboration
function include(FileDir) {
   var includejs = document.createElement("script");
   includejs.type = "text/javascript";
   includejs.src = FileDir;
   document.head.appendChild(includejs);
}
include("JHJ.js");
include("JDJ.js");
include("JSW1.js");
include("LSJ.js");
include("JSW1.js");

var ScreenDirection = 0;
var screenType = 0;
var camera;
var controls;
var tuck = 0;
var HEIGHT_VALUE = 100;
var intensityValue = 0.005;
var lightOnOff = 1;
var light1;
var light2;
var lightList = [];
var keyboard = {};
var player = { height: HEIGHT_VALUE, speed: 6, turnSpeed: Math.PI * 0.01 };
//Resize window
function onWindowResize() {
   camera.aspect = window.innerWidth / window.innerHeight;
   camera.updateProjectionMatrix();
}
//Drawing B208D
function drawB208D(scene) {
   var B208D = new THREE.Group();
   //------------------------------------------------------
   //Drawing part
   drawClassRoom(B208D);
   drawAisle(B208D);
   makeWhiteboard(B208D, 170, 110, 200, 9.5);
   makeLectureDesk(B208D, 120, 77, 210);
   makeScreen_top(B208D);
   var Screen = drawScreen(B208D);
   B208D.add(Screen);
   //Fluorescent Rendering
   fluorescent_line = 4;
   for (i = 0; i < fluorescent_line; i++) {
      this.createFluorescentBase0(B208D, 0, 0, 0, intensityValue, 80 * (i + (i + 1) + (0.5 * i)), 183, 110, 10);
      console.log(intensityValue)
      this.createFluorescentBase0(B208D, 0, 0, 0, intensityValue, 80 * (i + (i + 1) + (0.5 * i)), 183, 310, 10);
      light1 = createSpotLight(0, 0, 0, intensityValue, 80 * (i + (i + 1) + (0.5 * i)), 183, 110);
      lightList.push(light1);
      B208D.add(light1.target);
      B208D.add(light1);
      light2 = createSpotLight(0, 0, 0, intensityValue, 80 * (i + (i + 1) + (0.5 * i)), 183, 310);
      lightList.push(light2);
      B208D.add(light2.target);
      B208D.add(light2);
   }
   //Rendering Project Body
   this.createProjectorBody0(B208D, 0, 0, 0, 170, 165, 100, 8);
   //Desk Rendering
   desk_line = 5;
   for (i = 0; i < desk_line; i++) {
      this.two_person_set(B208D, 150 + 90 * (1.3 * i), 35, 200, 2.2);
      this.three_person_set(B208D, 150 + 90 * (1.3 * i), 35, 50, 2.2);
      this.three_person_set(B208D, 150 + 90 * (1.3 * i), 35, 350, 2.2);
   }
  //----------------------------------------------------
   B208D.rotateY(Math.PI / 180 * 180);
   B208D.position.x += 900;
   B208D.position.z += 400;

   scene.add(B208D);
}
//Window Setting part
window.onload = function init() {
   var scene = new THREE.Scene();
   camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 1, 10000);
   var renderer = new THREE.WebGLRenderer({ antialias: true });
   var step = 0;
   renderer.setClearColor(0xEEEEEE);
   renderer.setPixelRatio(window.devicePixelRatio);
   renderer.setSize(window.innerWidth, window.innerHeight);
   renderer.shadowMap.enabled = true;
   //Button Setting
   document.getElementById("Button1").onclick = function () {
      ScreenDirection = 1;
   }
   document.getElementById("Button2").onclick = function () {
      ScreenDirection = -1;
   }
   document.getElementById("Button3").onclick = function () {
      lightOnOff = -1;
   }
   document.getElementById("Button4").onclick = function () {
      lightOnOff = 1;
   }

   this.drawB208D(scene);

   document.getElementById("threejs_scene").appendChild(renderer.domElement);
   //Manuplating for keyboard
   function keyDown(event) {
      keyboard[event.keyCode] = true;
   }

   function keyUp(event) {
      keyboard[event.keyCode] = false;
   }

   window.addEventListener('keydown', keyDown);
   window.addEventListener('keyup', keyUp);

   window.addEventListener('resize', onWindowResize, false);

   camera.position.set(0, player.height, -5);
   camera.lookAt(new THREE.Vector3(0, player.height, 0));

   function move() {
      var temp_x = camera.position.x;
      var temp_z = camera.position.z;
      if (keyboard[87]) { // W key
         temp_x -= Math.sin(camera.rotation.y) * player.speed;
         temp_z -= -Math.cos(camera.rotation.y) * player.speed;
      }
      if (keyboard[83]) { // S key
         temp_x += Math.sin(camera.rotation.y) * player.speed;
         temp_z += -Math.cos(camera.rotation.y) * player.speed;
      }
      if (keyboard[65]) { // A key
         temp_x += Math.sin(camera.rotation.y + Math.PI / 2) * player.speed;
         temp_z += -Math.cos(camera.rotation.y + Math.PI / 2) * player.speed;
      }
      if (keyboard[68]) { // D key
         temp_x += Math.sin(camera.rotation.y - Math.PI / 2) * player.speed;
         temp_z += -Math.cos(camera.rotation.y - Math.PI / 2) * player.speed;
      }

      if (keyboard[37]) { // left arrow key
         camera.rotation.y -= player.turnSpeed;
      }
      if (keyboard[39]) { // right arrow key
         camera.rotation.y += player.turnSpeed;
      }

      //check if the camera is still in valid area
      if ((temp_x > -110 && temp_x < 80 && temp_z > -60 && temp_z < 420) ||
         (temp_x > 80 && temp_x < 130 && temp_z > 135 && temp_z < 220) ||
         (temp_x > 130 && temp_x < 190 && temp_z > 75 && temp_z < 420) ||
         (temp_x > 190 && temp_x < 240 && temp_z > -20 && temp_z < 420) ||
         (temp_x > 240 && temp_x < 780 && temp_z > 125 && temp_z < 140) ||
         (temp_x > 240 && temp_x < 780 && temp_z > 255 && temp_z < 270) ||
         (temp_x > 780 && temp_x < 860 && temp_z > 125 && temp_z < 420) ||
         (temp_x > 860 && temp_x < 880 && temp_z > -20 && temp_z < 240)) {
         camera.position.x = temp_x;
         camera.position.z = temp_z;
      }
   }
   //Animation Part
   var renderScene = new function renderScene() {
      requestAnimationFrame(renderScene);

      //Up side  screen
      if (ScreenDirection == 1) {
         if (Screen.position.y < 130) {
            Screen.position.y += 1;
         } else if (Screen.position.y == 120) {
            ScreenDirection = 0;
         }
      }
       //Down side screen
      else if (ScreenDirection == -1) {
         if (Screen.position.y > 0) {
            Screen.position.y -= 1;
         } else if (Screen.position.y == 0) {
            ScreenDirection = 0;
         }
      }
      //Light on 
      if(lightOnOff == 1){
         for(i=0; i<lightList.length; i++){
            lightList[i].intensity = 0.34;
            lightList[i].intensity = 0.34;
         }
      }
      //light off 
      else if (lightOnOff == -1){         
         for(i=0; i<lightList.length; i++){
            lightList[i].intensity = 0;
            lightList[i].intensity = 0;
         }
      }
      
      if ((camera.position.x > 80 && camera.position.x < 190 && camera.position.z > 75 && camera.position.z < 135) ||
         (camera.position.x > 80 && camera.position.x < 190 && camera.position.z > 220 && camera.position.z < 420) ||
         camera.position.x > 190) {
         tuck = 1;
      }
      else {
         tuck = 0;
      }
      if (tuck == 1) {
         camera.position.y = HEIGHT_VALUE + 20;
      }
      else {
         camera.position.y = HEIGHT_VALUE;
      }

      move();

      renderer.render(scene, camera);

   }
}