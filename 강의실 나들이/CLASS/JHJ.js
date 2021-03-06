/*
This file is for making Space & Screen
Space is consist of two parts
One is ClassRoom and the other is Aisle
*/

var ClassRoom = new THREE.Group();
var Aisle = new THREE.Group();
var Screen = new THREE.Group();
//------------------------
//This is ClassRoom part
//-------------------------
//This function for making ground of ClassRoom
function makeGround(x, y, z, pos_x, pos_y, pos_z) {
    var cubeGeometry = new THREE.BoxGeometry(x, y, z);
    var texture = new THREE.TextureLoader().load('ClassRoom_Ground.jpg');
    var cubeMaterial = new THREE.MeshPhongMaterial({ map: texture });
    var cube = new THREE.Mesh(cubeGeometry, cubeMaterial);

    //add shadow render
    cube.castShadow = true;
    cube.receiveShadow = true;

    cube.position.x = pos_x;
    cube.position.y = pos_y;
    cube.position.z = pos_z;
    ClassRoom.add(cube);
}
//This function for making ceiling of ClassRoom
function makeCeiling(x, y, z, pos_x, pos_y, pos_z) {
    var cubeGeometry = new THREE.BoxGeometry(x, y, z);
    var texture = new THREE.TextureLoader().load('ClassRoomGround.jpg');
    var cubeMaterial = new THREE.MeshBasicMaterial({ map: texture });
    var cube = new THREE.Mesh(cubeGeometry, cubeMaterial);

    //add shadow render
    cube.castShadow = true;
    cube.receiveShadow = true;

    cube.rotation.x = -0.5 * Math.PI;
    cube.position.x = pos_x;
    cube.position.y = pos_y;
    cube.position.z = pos_z;
    ClassRoom.add(cube);
}
//This function for making wall of ClassRoom
function makeWall1(x, y, z, pos_x, pos_y, pos_z) {
    var cubeGeometry = new THREE.BoxGeometry(x, y, z);
    var texture = new THREE.TextureLoader().load('ClassRoom_Wall.jpg');
    var cubeMaterial = new THREE.MeshPhongMaterial({ map: texture });
    var cube = new THREE.Mesh(cubeGeometry, cubeMaterial);

    //add shadow render
    cube.castShadow = true;
    cube.receiveShadow = true;

    cube.rotation.x = -0.5 * Math.PI;
    cube.position.x = pos_x;
    cube.position.y = pos_y;
    cube.position.z = pos_z;
    ClassRoom.add(cube);
}
//This function for making wall of ClassRoom
function makeWall2(x, y, z, pos_x, pos_y, pos_z) {
    var cubeGeometry = new THREE.BoxGeometry(x, y, z);
    var texture = new THREE.TextureLoader().load('ClassRoom_Wall.jpg');
    var cubeMaterial = new THREE.MeshPhongMaterial({ map: texture });
    var cube = new THREE.Mesh(cubeGeometry, cubeMaterial);

    //add shadow render
    cube.castShadow = true;
    cube.receiveShadow = true;

    cube.rotation.z = Math.PI * -0.5;
    cube.position.x = pos_x - 25;
    cube.position.y = pos_y;
    cube.position.z = pos_z + 25;
    ClassRoom.add(cube);
}
//This function for making wall of ClassRoom Entrance
function makeWall3(x, y, z, pos_x, pos_y, pos_z) {
    var cubeGeometry = new THREE.BoxGeometry(x, y, z);
    var texture = new THREE.TextureLoader().load('Ground.jpg');
    var cubeMaterial = new THREE.MeshPhongMaterial({ map: texture });
    var cube = new THREE.Mesh(cubeGeometry, cubeMaterial);

    //add shadow render
    cube.castShadow = true;
    cube.receiveShadow = true;

    cube.rotation.z = Math.PI * -0.5;
    cube.position.x = pos_x - 25;
    cube.position.y = pos_y;
    cube.position.z = pos_z + 25;
    console.log(cube.position);
    ClassRoom.add(cube);
}
//This function for making wall of ClassRoom Entrance 
function makeWall4(x, y, z, pos_x, pos_y, pos_z) {
    var cubeGeometry = new THREE.BoxGeometry(x, y, z);
    var texture = new THREE.TextureLoader().load('Ground.jpg');
    var cubeMaterial = new THREE.MeshPhongMaterial({ map: texture });
    var cube = new THREE.Mesh(cubeGeometry, cubeMaterial);

    //add shadow render
    cube.castShadow = true;
    cube.receiveShadow = true;

    cube.rotation.x = Math.PI * -0.5;
    cube.position.x = pos_x - 25;
    cube.position.y = pos_y;
    cube.position.z = pos_z + 25;
    console.log(cube.position);
    ClassRoom.add(cube);
}
//This function for making ceiling of ClassRoom
function makeCeiling(x, y, z, pos_x, pos_y, pos_z) {
    var cubeGeometry = new THREE.BoxGeometry(x, y, z);
    var texture = new THREE.TextureLoader().load('ClassRoom_Ceiling.jpg');
    var cubeMaterial = new THREE.MeshBasicMaterial({ map: texture });
    var cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
    cube.receiveShadow = true;

    cube.position.x = pos_x;
    cube.position.y = pos_y + 200;
    cube.position.z = pos_z;
    ClassRoom.add(cube);
}
//This function for drawing ClassRoom space
//This function is called in Main.js
function drawClassRoom(B208D) {
    for (var i = 0; i < 16; i++) {
        for (var j = 0; j < 9; j++) {
            if (!(i == 15 && j == 4) && !(i == 15 && j == 5)) {
                makeGround(50.6, 0.6, 50.6, 2.5 + 50 * i, 0.5, 0 + 50 * j);
            }
            else {
                makeGround(50.6, 0.6, 50.6, 2.5 + 50 * i, -15.5, 0 + 50 * j);
            }
            makeCeiling(50.6, 0.6, 50.6, 2.5 + 50 * i, -15.5, 0 + 50 * j);
        }
    }
    //Making for entrance
    makeWall3(20.6, 0.6, 100.6, 2.5 + 750, -10.5, 0 + 200);
    makeWall4(50.6, 0.6, 20.6, 2.5 + 775, -10.5, 0 + 250);
    makeWall4(50.6, 0.6, 20.6, 2.5 + 775, -10.5, 0 + 150);

    //Side wall
    for (var i = 0; i < 16; i++) {
        for (var j = 0; j < 2; j++) {
            makeWall1(50.6, 0.6, 100.6, 2.5 + 50 * i, 35 + 100 * j, -25);
            if (i != 15)
                makeWall1(50.6, 0.6, 100.6, 2.5 + 50 * i, 35 + 100 * j, 425);
        }
    }
    makeWall2(100.6, 0.6, 50.6, 753.5, 35 + 100, -25 + 400);
    makeWall2(100.6, 0.6, 50.6, 753.5, 35 + 0, -25 + 400);

    makeWall1(50.6, 0.6, 100.6, 2.5 + 50 * 15, 35 + 100 * 0, 375);
    makeWall1(50.6, 0.6, 100.6, 2.5 + 50 * 15, 35 + 100 * 1, 375);
    //Inside wall
    for (var i = 0; i < 9; i++) {
        for (var j = 0; j < 2; j++) {
            makeWall2(100.6, 0.6, 50.6, 2.5, 35 + 100 * j, -25 + 50 * i);
            if (!(i == 4 && j == 0) && !(i == 5 && j == 0) && !(i == 4 && j == 1) && !(i == 5 && j == 1))
                makeWall2(100.6, 0.6, 50.6, 802.5, 35 + 100 * j, -25 + 50 * i);
            if ((i == 4 && j == 1) || (i == 5 && j == 1))
                makeWall2(50.6, 0.6, 50.6, 802.5, 60 + 100 * j, -25 + 50 * i);
        }
    }
    B208D.add(ClassRoom);
}

//------------------------
//This is Aisle part
//-------------------------

//This function is making for wall
function makeWall7(x, y, z, pos_x, pos_y, pos_z, Image) {
    var cubeGeometry = new THREE.BoxGeometry(x, y, z);
    var texture = new THREE.TextureLoader().load(Image);
    var cubeMaterial = new THREE.MeshBasicMaterial({ map: texture });
    var cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
    cube.rotation.z = Math.PI * -0.5;
    cube.position.x = pos_x - 25;
    cube.position.y = pos_y;
    cube.position.z = pos_z + 25;
    Aisle.add(cube);
}
//This function is making for wall
function makeWall8(x, y, z, pos_x, pos_y, pos_z, Image) {
    var cubeGeometry = new THREE.BoxGeometry(x, y, z);
    var texture = new THREE.TextureLoader().load(Image);
    var cubeMaterial = new THREE.MeshBasicMaterial({ map: texture });
    var cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
    cube.position.x = pos_x - 25;
    cube.position.y = pos_y;
    cube.position.z = pos_z + 25;
    Aisle.add(cube);
}
////This function is making for wall of Entrance and Exit
function makeWall9(x, y, z, pos_x, pos_y, pos_z, Image) {
    var cubeGeometry = new THREE.BoxGeometry(x, y, z);
    var texture = new THREE.TextureLoader().load(Image);
    var cubeMaterial = new THREE.MeshBasicMaterial({ map: texture });
    var cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
    cube.rotation.x = Math.PI * -0.5;
    cube.position.x = pos_x - 25;
    cube.position.y = pos_y;
    cube.position.z = pos_z + 25;
    Aisle.add(cube);
}

//This function is drawing for Aisle 
//This function is called in Main.js
//This functiopn add aisle in scene
function drawAisle(B208D) {
    //Upperside tile of door 
    makeWall7(50.6, 0.6, 50.6, 803.5, 10 + 75 * 2, -25 + 50 * 4, 'Aisle_wall.png');
    makeWall7(50.6, 0.6, 50.6, 803.5, 10 + 75 * 2, -25 + 50 * 5, 'Aisle_wall.png');
    for (var j = 0; j < 4; j++) {
        makeWall7(100.6, 0.6, 50.6, 803.5, -70 + 100 * 1, -25 + 50 * j, 'Aisle_wall.png');
        makeWall7(100.6, 0.6, 50.6, 803.5, -70 + 100 * 2, -25 + 50 * j, 'Aisle_wall.png');
    }
    //Side wall
    makeWall7(200.6, 0.6, 504.6, 1050, 80, 200, 'Aisle_wall_color.png');
    //Attach wall
    makeWall7(200.6, 0.6, 204.6, 805, 80, 350, 'Aisle_Attach.jpg');
    //Outside Attach wall
    
    //Ground 
    for (var i = 0; i < 5; i++) {
        for (var j = 0; j < 10; j++) {
            makeGround(50.6, 0.6, 50.6, 800.5 + 50 * i, -15, 0 + 50 * j);
        }
    }

    //Ceiling
    makeWall8(250.6, 0.6, 504.6, 928.5, 178, 200, 'Aisle_ground.jpg');
    //Entrance
    makeWall9(250.6, 0.6, 200.6, 928.5, 80, 450, 'AisleEntrance.jpg');
    //Outside of Entrance
    makeWall9(250.6, 0.6, 200.6, 928.5, 80, -50, 'Aisle_Out.jpg');

    B208D.add(Aisle);
}
var texture = new THREE.TextureLoader().load('table.jpg');
//------------------
//Screen part
//------------------
//This function is making for behind of screen
function makeScreen_behind() {
    var cubeGeometry = new THREE.BoxGeometry(140.6, 0.6, 170.6);
    var cubeMaterial = new THREE.MeshPhongMaterial({ color: 0x000000 });
    var cube = new THREE.Mesh(cubeGeometry, cubeMaterial);

    cube.castShadow = true;
    cube.rotation.z = Math.PI * -0.5;
    cube.position.x = 39.5;
    cube.position.y = 110.5;
    cube.position.z = 70;
    Screen.add(cube);
}

//This function is making for front of screen
function makeScreen_front() {
    var cubeGeometry = new THREE.BoxGeometry(140.6, 0.6, 160.6);
    var cubeMaterial = new THREE.MeshPhongMaterial({ color: 0xffffff });
    var cube = new THREE.Mesh(cubeGeometry, cubeMaterial);

    //add shadow render
    cube.castShadow = true;
    //cube.receiveShadow = true;

    cube.rotation.z = Math.PI * -0.5;
    cube.position.x = 40.5;
    cube.position.y = 110.5;
    cube.position.z = 70;
    Screen.add(cube);
}
//This function is making for Top of screen
function makeScreen_top(scene) {
    var cubeGeometry = new THREE.BoxGeometry(10.6, 10.6, 182.6);
    texture.rotation = Math.PI / 360 * 180;
    var cubeMaterial = new THREE.MeshBasicMaterial({ color: 0x333333, metalness: 0.2, roughness: 0 });
    var cube = new THREE.Mesh(cubeGeometry, cubeMaterial);

    cube.receiveShadow = true;

    cube.position.x = 40.5;
    cube.position.y = 178.5;
    cube.position.z = 70;
    scene.add(cube);
}
//This function is making for bottom of Cylinder
function makeScreen_Cylinder() {
    var geometry = new THREE.CylinderBufferGeometry(2.3, 2.3, 180, 32);
    var material = new THREE.MeshBasicMaterial({ color: 0xCCCCCC });
    var cylinder = new THREE.Mesh(geometry, material);
    //add shadow render
    cylinder.castShadow = true;
    cylinder.receiveShadow = true;
    cylinder.position.x = 41.05;
    cylinder.position.y = 40.5;
    cylinder.position.z = 70.5;
    cylinder.rotateX(-Math.PI * 0.5);
    Screen.add(cylinder);
}
//This function is drawing for Screen
//This function is called in Main.js
//This functiopn add Screen in scene
//This function return Screen for animation
function drawScreen(scene) {
    makeScreen_behind();
    makeScreen_front();
    makeScreen_Cylinder();
    return Screen;
}