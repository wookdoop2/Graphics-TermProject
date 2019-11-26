// Make Whiteboard
function makeWhiteboard(scene)
{
    var xlen=35, ylen=10, zlen=0.125;
    var whiteboardGeometry = new THREE.BoxGeometry(xlen, ylen, zlen); //7:2:0.2
    var whiteboardMeterial = new THREE.MeshPhongMaterial({ color: 0xffffff});
    var whiteboard = new THREE.Mesh(whiteboardGeometry, whiteboardMeterial);
    
    whiteboard.castShadow = true;
    whiteboard.position.x = 0;
    whiteboard.position.y = 0;
    whiteboard.position.z = -15;
    scene.add(whiteboard);
    makeSideBoardframe(scene,xlen,ylen,zlen,whiteboard.position.x,whiteboard.position.y,whiteboard.position.z);
    makeUpdownBoardframe(scene,xlen,ylen,zlen,whiteboard.position.x,whiteboard.position.y,whiteboard.position.z);
    makeEdge(scene,xlen,ylen,zlen,whiteboard.position.x,whiteboard.position.y,whiteboard.position.z);
   
    var plane=new THREE.PlaneGeometry(ylen,xlen,0,xlen*2);
    for(let i=0; i<plane.vertices.length/2; i++) {
        plane.vertices[2*i].z = -Math.sqrt(Math.pow(102.8,2)-Math.pow(-17.5+i/2,2))+103;
        plane.vertices[2*i+1].z = -Math.sqrt(Math.pow(102.8,2)-Math.pow(-17.5+i/2,2))+103;
      }
    mesh=new THREE.Mesh(plane,new THREE.MeshPhongMaterial({color:0xffffff}));
    mesh.doubleSided=true;
    mesh.rotation.z=Math.PI/180*90;
    mesh.position.x=whiteboard.position.x;
    mesh.position.y=whiteboard.position.y;
    mesh.position.z=whiteboard.position.z;
    
    scene.add(mesh);
    return whiteboard;
}

function makeSideBoardframe(scene,x,y,z,xPos,yPos,zPos)
{
    var xlen=0.5,ylen=y,zlen=2.5;
    var boardframeGeometry = new THREE.BoxGeometry(xlen,ylen,zlen);
    var boardframeMeterial = new THREE.MeshPhongMaterial({color: 0x948d82});
    boardframeMeterial.castShadow= true;
    var boardframe1 = new THREE.Mesh(boardframeGeometry,boardframeMeterial);
    boardframe1.position.x= xPos+x/2+xlen/2;
    boardframe1.position.y = yPos;
    boardframe1.position.z = zPos-(z-zlen)/2;
    var boardframe2 = new THREE.Mesh(boardframeGeometry,boardframeMeterial);
    boardframe2.position.x= xPos-x/2-xlen/2;
    boardframe2.position.y = yPos;
    boardframe2.position.z = zPos-(z-zlen)/2;
    scene.add(boardframe1);
    scene.add(boardframe2);
}

function makeUpdownBoardframe(scene,x,y,z,xPos,yPos,zPos)
{
    var xlen=x,ylen=0.5,zlen=2.5;
    var boardframeGeometry = new THREE.BoxGeometry(xlen,ylen,zlen);
    var boardframeMeterial = new THREE.MeshPhongMaterial({color: 0x948d82});
    boardframeMeterial.castShadow= true;
    var boardframe1 = new THREE.Mesh(boardframeGeometry,boardframeMeterial);
    boardframe1.position.x= xPos;
    boardframe1.position.y = yPos+y/2+ylen/2;
    boardframe1.position.z = zPos-(z-zlen)/2;
    var boardframe2 = new THREE.Mesh(boardframeGeometry,boardframeMeterial);
    boardframe2.position.x= xPos;
    boardframe2.position.y = yPos-y/2-ylen/2;
    boardframe2.position.z = zPos-(z-zlen)/2;
    scene.add(boardframe1);
    scene.add(boardframe2);
}

function makeEdge(scene,x,y,z,xPos,yPos,zPos)
{
    var radius=0.5;
    var geometry1 = new THREE.CylinderGeometry( radius,radius,2.5,32,1,false,0,Math.PI/2 );
    var material1 = new THREE.MeshPhongMaterial( {color: 0x715d3c} );
    var cylinder1 = new THREE.Mesh( geometry1, material1 );
    cylinder1.rotation.x=Math.PI/180 * 90;
    cylinder1.position.x=xPos+x/2;
    cylinder1.position.y=yPos-y/2;
    cylinder1.position.z=zPos+9.5*z;
    scene.add( cylinder1 );

    var geometry2 = new THREE.CylinderGeometry( radius,radius,2.5,32,1,false,Math.PI/2,Math.PI/2 );
    var material2 = new THREE.MeshPhongMaterial( {color: 0x715a38} );
    var cylinder2 = new THREE.Mesh( geometry2, material2 );
    cylinder2.rotation.x=Math.PI/180 * 90;
    cylinder2.position.x=xPos+x/2;
    cylinder2.position.y=yPos+y/2;
    cylinder2.position.z=zPos+9.5*z;
    scene.add( cylinder2 );

    var geometry3 = new THREE.CylinderGeometry( radius,radius,2.5,32,1,false,Math.PI,Math.PI/2 );
    var material3 = new THREE.MeshPhongMaterial( {color: 0x715a38} );
    var cylinder3 = new THREE.Mesh( geometry3, material3 );
    cylinder3.rotation.x=Math.PI/180 * 90;
    cylinder3.position.x=xPos-x/2;
    cylinder3.position.y=yPos+y/2;
    cylinder3.position.z=zPos+9.5*z;
    scene.add( cylinder3 );

    var geometry4 = new THREE.CylinderGeometry( radius,radius,2.5,32,1,false,1.5*Math.PI,Math.PI/2 );
    var material4 = new THREE.MeshPhongMaterial( {color: 0x715a38} );
    var cylinder4 = new THREE.Mesh( geometry4, material4 );
    cylinder4.rotation.x=Math.PI/180 * 90;
    cylinder4.position.x=xPos-x/2;
    cylinder4.position.y=yPos-y/2;
    cylinder4.position.z=zPos+9.5*z;
    scene.add( cylinder4 );
}

// Make Lecture Desk
function makeLectureDesk(scene)
{
    var xlen=7.5, ylen=7.5, zlen=6;
    var lectureDeskGeometry = new THREE.BoxGeometry(xlen, ylen, zlen); //7:2:0.2
    var lectureDeskMeterial = new THREE.MeshPhongMaterial({ color: 0xb0b2b2});
    var lectureDesk = new THREE.Mesh(lectureDeskGeometry, lectureDeskMeterial);
    
    lectureDesk.castShadow = true;
    lectureDesk.position.x = -20;
    lectureDesk.position.y = -5.5;
    lectureDesk.position.z = 0;
    scene.add(lectureDesk);
    
    var box1Geometry = new THREE.BoxGeometry(xlen, 1.5, 1.875); //7:2:0.2
    var box1Material = new THREE.MeshPhongMaterial({ color: 0xb0b2b2});
    var box1 = new THREE.Mesh(box1Geometry, box1Material);
    box1.position.x=lectureDesk.position.x;
    box1.position.y=lectureDesk.position.y+ylen/2+1.5/2;
    box1.position.z=lectureDesk.position.z+zlen/2-1.875/2;
    scene.add(box1);

    var cylinder1Geometry=new THREE.CylinderGeometry(1.875,1.875,7.5,32,1,false,0,Math.PI/2 );
    var cylinder1Material = new THREE.MeshPhongMaterial( {color: 0xb0b2b2} );
    var cylinder1 = new THREE.Mesh( cylinder1Geometry, cylinder1Material );
    cylinder1.rotation.z=Math.PI/180 * 90;
    cylinder1.position.x=box1.position.x;
    cylinder1.position.y=box1.position.y+1.5/2;
    cylinder1.position.z=box1.position.z-1.875/2;
    cylinder1.openEnded=false;
    scene.add( cylinder1 );

    var monitorGeometry= new THREE.BoxGeometry(7, 0.25, 4); //7:2:0.2
    var monitorMaterial=new THREE.MeshPhongMaterial({color:0x000000});
    var monitor=new THREE.Mesh(monitorGeometry,monitorMaterial);
    monitor.position.x=lectureDesk.position.x;
    monitor.position.y=cylinder1.position.y+1.875/2;
    monitor.position.z=lectureDesk.position.z-1.875;
    scene.add(monitor);

    var box2Geometry= new THREE.BoxGeometry(0.25,6.5,6);
    var box2Material=new THREE.MeshPhongMaterial({color:0xb0b2b2});
    var box2=new THREE.Mesh(box2Geometry,box2Material);
    box2.position.x=lectureDesk.position.x+7.5/2-0.25/2;
    box2.position.y=lectureDesk.position.y+3/2;
    box2.position.z=lectureDesk.position.z-0.8;
    box2.rotation.x=-Math.PI/180*15;
    scene.add(box2);

    var box3Geometry= new THREE.BoxGeometry(0.25,6.5,6);
    var box3Material=new THREE.MeshPhongMaterial({color:0xb0b2b2});
    var box3=new THREE.Mesh(box3Geometry,box3Material);
    box3.position.x=lectureDesk.position.x-7.5/2+0.25/2;
    box3.position.y=lectureDesk.position.y+3/2;
    box3.position.z=lectureDesk.position.z-0.8;
    box3.rotation.x=-Math.PI/180*15;
    scene.add(box3);

    var box4Geometry= new THREE.BoxGeometry(0.25,6.5,6);
    var box4Material=new THREE.MeshPhongMaterial({color:0xb0b2b2});
    var box4=new THREE.Mesh(box4Geometry,box4Material);
    box4.position.x=lectureDesk.position.x-7.5/2+0.25/2;
    box4.position.y=lectureDesk.position.y+3/2;
    box4.position.z=lectureDesk.position.z-0.8;
    box4.rotation.x=-Math.PI/180*15;
    scene.add(box4);

    var box5Geometry= new THREE.BoxGeometry(0.25,2,4);
    var box5Material=new THREE.MeshPhongMaterial({color:0xb0b2b2});
    var box5=new THREE.Mesh(box5Geometry,box5Material);
    box5.position.x=lectureDesk.position.x-7.5/2+0.25/2;
    box5.position.y=lectureDesk.position.y-1.5;
    box5.position.z=lectureDesk.position.z-2;
    box5.rotation.x=-Math.PI/180*70;
    scene.add(box5);
    
    var box6Geometry= new THREE.BoxGeometry(0.25,2,4);
    var box6Material=new THREE.MeshPhongMaterial({color:0xb0b2b2});
    var box6=new THREE.Mesh(box6Geometry,box6Material);
    box6.position.x=lectureDesk.position.x+7.5/2-0.25/2;
    box6.position.y=lectureDesk.position.y-1.5;
    box6.position.z=lectureDesk.position.z-2;
    box6.rotation.x=-Math.PI/180*70;
    scene.add(box6);

    var box7Geometry= new THREE.BoxGeometry(0.25,0.75,6.6);
    var box7Material=new THREE.MeshPhongMaterial({color:0xb0b2b2});
    var box7=new THREE.Mesh(box7Geometry,box7Material);
    box7.position.x=lectureDesk.position.x-7.5/2+0.25/2;
    box7.position.y=lectureDesk.position.y-7.5/2+0.75/2;
    box7.position.z=lectureDesk.position.z-0.32;
    scene.add(box7);

    var box8Geometry= new THREE.BoxGeometry(0.25,0.75,6.6);
    var box8Material=new THREE.MeshPhongMaterial({color:0xb0b2b2});
    var box8=new THREE.Mesh(box8Geometry,box8Material);
    box8.position.x=lectureDesk.position.x+7.5/2-0.25/2;
    box8.position.y=lectureDesk.position.y-7.5/2+0.75/2;
    box8.position.z=lectureDesk.position.z-0.32;
    scene.add(box8);

    
    var monitorBackGeometry= new THREE.BoxGeometry(6, 1, 3); //7:2:0.2
    var monitorBackMaterial=new THREE.MeshPhongMaterial({color:0x000000});
    var monitorBack=new THREE.Mesh(monitorBackGeometry,monitorBackMaterial);
    monitor.rotation.x=-Math.PI/180*30;
    monitorBack.rotation.x=-Math.PI/180*30;
    monitorBack.position.x=lectureDesk.position.x;
    monitorBack.position.y=monitor.position.y-0.5;
    monitorBack.position.z=monitor.position.z+0.25;
    scene.add(monitorBack);

    var screenGeometry=new THREE.BoxGeometry(6.5,0.1,3.5);
    var screenMaterial=new THREE.MeshPhongMaterial({color:0xffffff, emissive:0xddddff});
    var screen=new THREE.Mesh(screenGeometry,screenMaterial);
    screen.rotation.x=-Math.PI/180*30;
    screen.position.x=lectureDesk.position.x;
    screen.position.y=monitor.position.y+0.125;
    screen.position.z=monitor.position.z;
    
    scene.add(screen);

    var cylinder2Geometry=new THREE.CylinderGeometry(0.6,0.6,7.55,32);
    var cylinder2Material = new THREE.MeshPhongMaterial( {color: 0xb0b2b2} );
    var cylinder2 = new THREE.Mesh( cylinder2Geometry, cylinder2Material );
    cylinder2.rotation.z=Math.PI/180 * 90;
    cylinder2.position.x=lectureDesk.position.x;
    cylinder2.position.y=cylinder1.position.y;
    cylinder2.position.z=cylinder1.position.z+0.6;
    scene.add( cylinder2 );

    lectureDeskWheel(scene,lectureDesk.position.x-7/2,lectureDesk.position.y-7.5/2,lectureDesk.position.z+6/3);
    lectureDeskWheel(scene,lectureDesk.position.x-7/2,lectureDesk.position.y-7.5/2,lectureDesk.position.z-6/3);
    lectureDeskWheel(scene,lectureDesk.position.x+7/2,lectureDesk.position.y-7.5/2,lectureDesk.position.z+6/3);
    lectureDeskWheel(scene,lectureDesk.position.x+7/2,lectureDesk.position.y-7.5/2,lectureDesk.position.z-6/3);
}

function lectureDeskWheel(scene, x, y, z) {
    var geometry = new THREE.CylinderBufferGeometry(1.05, 1.05, 0.3, 32);
    var material = new THREE.MeshLambertMaterial({ color: 0x333333 });
    var cylinder = new THREE.Mesh(geometry, material);

    var geometry = new THREE.CylinderBufferGeometry(0.5, 0.5, 1, 32);
    var material = new THREE.MeshLambertMaterial({ color: 0x555555 });
    var cylinder2 = new THREE.Mesh(geometry, material);
    cylinder2.position.y = -0.3;

    var geometry = new THREE.CylinderBufferGeometry(0.8, 0.8, 1.5, 32);
    var material = new THREE.MeshLambertMaterial({ color: 0x423800 });
    var cylinder3 = new THREE.Mesh(geometry, material);
    cylinder3.position.y = -1.2;

    var geometry = new THREE.CylinderBufferGeometry(1.5, 1.5, 1.5, 32);
    var material = new THREE.MeshLambertMaterial({ color: 0x423800 });
    var cylinder4 = new THREE.Mesh(geometry, material);
    cylinder4.position.y = -2.1;
    cylinder4.position.z = -0.7;
    cylinder4.rotateZ(Math.PI / 360 * 180);

    var geometry = new THREE.CylinderBufferGeometry(1.5, 1.5, 0.3, 32);
    var material = new THREE.MeshLambertMaterial({ color: 0x333333 });
    var cylinder5 = new THREE.Mesh(geometry, material);
    cylinder5.position.x = 1;
    cylinder5.position.y = -2.3;
    cylinder5.position.z = -0.7;
    cylinder5.rotateZ(Math.PI / 360 * 180);

    var geometry = new THREE.CylinderBufferGeometry(1.5, 1.5, 0.3, 32);
    var material = new THREE.MeshLambertMaterial({ color: 0x333333 });
    var cylinder6 = new THREE.Mesh(geometry, material);
    cylinder6.position.x = -1;
    cylinder6.position.y = -2.3;
    cylinder6.position.z = -0.7;
    cylinder6.rotateZ(Math.PI / 360 * 180);

    var geometry = new THREE.CylinderBufferGeometry(1.25, 1.25, 2.35, 32);
    var material = new THREE.MeshLambertMaterial({ color: 0x423800 });
    var cylinder7 = new THREE.Mesh(geometry, material);
    cylinder7.position.y = -2.3;
    cylinder7.position.z = -0.7;
    cylinder7.rotateZ(Math.PI / 360 * 180);

    var group = new THREE.Group();
    group.position.x = x;
    group.position.y = y;
    group.position.z = z;
    group.add(cylinder);
    group.add(cylinder2);
    group.add(cylinder3);
    group.add(cylinder4);
    group.add(cylinder5);
    group.add(cylinder6);
    group.add(cylinder7);
    group.scale.set(0.2, 0.2, 0.2);

    scene.add(group);
}