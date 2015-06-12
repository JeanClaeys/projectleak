var camera, scene, renderer;
var platone, plattwo, platthree, platfour, platfive, platsix, platseven, platheight, platnine, platten, plateonze, platdouze, plattreize, platquatorze, platquinze, platseize;
var platonegeo, platonegeochange, plattwogeo, platthreegeo, platfourgeo, platfivegeo, platsixgeo;
var platonemat, platonematchange, plattwomat, platthreemat, platfourmat, platfivemat, platsixmat;
var lightlineone, lightlinetwo, lightlinethree;
var baselightone, baselighttwo, baselighthree, baselightfour, baselightfive, baselightsix, baselightseven, baselightheight, baselightnine;
var roundlightone, roundlighttwo, roundlighthree;
var controls;
var linedecorone, linedecortwo, linedecorthree, linedecorfour, linedecorfive, linedecorsix, linedecorseven, linedecoreight, linedecornine;
var geometryone, geometrytwo, geometrythree, geometryfour, material, materialtwo, mesh, meshone, meshtwo, meshthree, meshfour;
var alllight, light, light1, lighttwo, lightthree, lightfour, lightfive;
var objects = [];
var tableaulight = [];
var tabperdre = [];
var tableaulumiereplus = [];
var tableaulumieremoin = [];
var tableauplatone = [];
var tableauplatthree = [];
var tableauplatfour = [];
var tableauplatfive = [];
var tableauplatsix = [];
var tableauplatseven = [];
var tableauplatheight = [];
var tableauplatnine = [];
var raycaster;
var raycastertwo;
var raycasterthree;
var raycasterperdre;
var win = document.getElementById( 'win' );
var lose = document.getElementById( 'lose' );
var Sound = function ( sources, radius, volume ) {
  var audio = document.createElement( 'audio' );
    for ( var i = 0; i < sources.length; i ++ ) {
      var source = document.createElement( 'source' );
      source.src = sources[ i ];
      audio.appendChild( source );
    }
    this.position = new THREE.Vector3();
    this.play = function () {
      audio.play();
    }
    this.update = function ( camera ) {
      var distance = this.position.distanceTo( camera.position );
      if ( distance <= radius ) {
        audio.volume = volume * ( 1 - distance / radius );
      } else {
        audio.volume = 0;
      }
    }
}
init();
animate();
var controlsEnabled = false;
var moveForward = false;
var moveBackward = false;
var moveLeft = false;
var moveRight = false;
var prevTime = performance.now();
var velocity = new THREE.Vector3();
function init() {
    camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 2000 );
    scene = new THREE.Scene();
    var far = 800;
    scene.fog = new THREE.Fog( 0x000000, 0, far );
    var hemisphereone = new THREE.HemisphereLight( 0xffffff, 0x777788, 0.40 );
    hemisphereone.position.set( 0.5, -2000 , 0.75 );
    scene.add( hemisphereone );
    var hemispheretwo = new THREE.HemisphereLight( 0xffffff, 0x777788, 1 );
    hemispheretwo.position.set( 0.5, 0,75 , 0.75 );
    scene.add( hemispheretwo );
    setInterval(function () {
      setTimeout(function(){ 
        hemispheretwo.intensity = 3;
        hemispheretwo.color.setHex( 0xffffff );; 
      }, 3000);
      setTimeout(function(){ 
        hemispheretwo.intensity = 0.25;
        hemispheretwo.color.setHex( 0xffffff );; 
      }, 3100);
      setTimeout(function(){ 
        hemispheretwo.intensity = 3;
        hemispheretwo.color.setHex( 0xffffff );; 
      }, 3150);
      setTimeout(function(){ 
        hemispheretwo.intensity = 0.25;
        hemispheretwo.color.setHex( 0xffffff );; 
      }, 3200);
      setTimeout(function(){ 
        hemispheretwo.intensity = 3;
        hemispheretwo.color.setHex( 0xffffff );; 
      }, 3800);
      setTimeout(function(){ 
        hemispheretwo.intensity = 0.25;
        hemispheretwo.color.setHex( 0xffffff );; 
      }, 3850);
      setTimeout(function(){ 
        hemispheretwo.intensity = 3;
        hemispheretwo.color.setHex( 0xffffff );; 
      }, 3870);
      setTimeout(function(){ 
        hemispheretwo.intensity = 0.25;
        hemispheretwo.color.setHex( 0xffffff );; 
      }, 3900);
      setTimeout(function(){ 
        hemispheretwo.intensity = 3;
        hemispheretwo.color.setHex( 0xffffff );; 
      }, 4000);
      setTimeout(function(){ 
        hemispheretwo.intensity = 0.5;
        hemispheretwo.color.setHex( 0xffffff );; 
      }, 4030);
    }, 5000);
    var sphere = new THREE.BoxGeometry( 40, 2, 40 );
    var baseGeometry = new THREE.BoxGeometry(200,1,200);
    var baseMaterial = new THREE.MeshLambertMaterial({color: 0x2D2D2D});
    var base = new THREE.Mesh(baseGeometry, baseMaterial);
    base.position.x=0;
    base.position.y=2000;
    base.position.z=0;
    scene.add(base);
    objects.push( base );
    sound1 = new Sound( [ 'ambiance.mp3', 'ambiance.ogg' ], 75, 1 );
    sound1.position.copy( base.position );
    sound1.play();
    baselightone = new THREE.PointLight( 0xffffff, 3, 1000 );
    var geometrybaselightone = new THREE.BoxGeometry( 0.5, 0.5, 200 );
    baselightone.add( new THREE.Mesh( geometrybaselightone, new THREE.MeshBasicMaterial( { color: 0xffffff, wireframe: false } ) ) );
    baselightone.position.x = 100;
    baselightone.position.y = 2030;
    baselightone.position.z = 0;
    scene.add(baselightone);
    baselighttwo = new THREE.PointLight( 0xffffff, 3, 1000 );
    var geometrybaselighttwo = new THREE.BoxGeometry( 0.5, 0.5, 200 );
    baselighttwo.add( new THREE.Mesh( geometrybaselighttwo, new THREE.MeshBasicMaterial( { color: 0xffffff, wireframe: false } ) ) );
    baselighttwo.position.x = - 100;
    baselighttwo.position.y = 2030;
    baselighttwo.position.z = 0;
    scene.add(baselighttwo);
    baselightthree = new THREE.PointLight( 0xffffff, 3, 1000 );
    var geometrybaselightthree = new THREE.BoxGeometry( 200, 0.5, 0.5 );
    baselightthree.add( new THREE.Mesh( geometrybaselightthree, new THREE.MeshBasicMaterial( { color: 0xffffff, wireframe: false } ) ) );
    baselightthree.position.x = 0;
    baselightthree.position.y = 2030;
    baselightthree.position.z = 100;
    scene.add(baselightthree);
    platonemat = new THREE.MeshLambertMaterial({color: 0x2D2D2D});
    platonematchange = new THREE.MeshBasicMaterial( { ambient: 0xffffff, color: 0xffffff, specular: 0xffffff, shininess: 50 } );
    platonegeo = new THREE.BoxGeometry( 150, 2, 150 );
    plattwomat = new THREE.MeshLambertMaterial({color: 0x2D2D2D});
    plattwogeo = new THREE.BoxGeometry( 100, 2, 800 );
    platthreemat = new THREE.MeshLambertMaterial({color: 0x2D2D2D});
    platthreegeo = new THREE.BoxGeometry( 75, 2, 200 );
    platfourmat = new THREE.MeshLambertMaterial({color: 0x2D2D2D});
    platfourgeo = new THREE.BoxGeometry( 90, 2, 90 );
    platfivemat = new THREE.MeshLambertMaterial({color: 0x2D2D2D});
    platfivegeo = new THREE.BoxGeometry( 90, 2, 90 );
    var materiallumiereplus = new THREE.MeshLambertMaterial({color: 0x848484});
    var materiallumieremoin = new THREE.MeshLambertMaterial({color: 0x151515});
    materialone = new THREE.MeshBasicMaterial( { ambient: 0xffffff, color: 0xffffff, specular: 0xffffff, shininess: 50 } );
    materialtwo = new THREE.MeshBasicMaterial( { ambient: 0xffffff, color: 0xffffff, specular: 0xffffff, shininess: 50 } );
    materialthree = new THREE.MeshBasicMaterial( { ambient: 0xffffff, color: 0xffffff, specular: 0xffffff, shininess: 50 } );
    mesh = meshone, meshtwo, meshthree, meshfour;
    meshone = new THREE.Mesh( geometryone, materialone );
    meshtwo = new THREE.Mesh( geometrytwo, materialtwo );
    meshthree = new THREE.Mesh( geometrythree, materialthree );
    geometryone = new THREE.BoxGeometry( 40, 2, 40 );
    geometrytwo = new THREE.BoxGeometry( 30, 2, 30 );
    geometrythree = new THREE.BoxGeometry( 20, 2, 30 );
    for ( var i = 0; i < 6; i ++ ) {
        platone = new THREE.Mesh( platonegeo, platonemat );
        scene.add( platone );
        tableauplatone.push( platone );
        tableauplatone[i].position.x = 0;
        tableauplatone[i].position.z = -2550 + (i * 280);
        tableauplatone[i].position.y = 2150 + Math.floor( Math.random() * 3.5 - 10 ) * 20;
        platone.vitesse = 0;
        objects.push( platone );
    }
    plattwo = new THREE.Mesh( plattwogeo, plattwomat );
    plattwo.position.x = 0;
    plattwo.position.y = 2000;
    plattwo.position.z = -550;
    scene.add( plattwo );
    objects.push( plattwo );
    for ( var i = 0; i < 4; i ++ ) {
        platthree = new THREE.Mesh( platthreegeo, platthreemat );
        scene.add( platthree );
        tableauplatthree.push( platthree );
        tableauplatthree[i].position.x = 200 + Math.floor( Math.random() * 3.5 - 10 ) * 20;
        tableauplatthree[i].position.z = -3500 + (i * 250);
        tableauplatthree[i].position.y = 2150 + Math.floor( Math.random() * 3.5 - 10 ) * 20;
        platthree.vitesse = 0;
        objects.push( platthree );
    }
    var baseGeometrytwo = new THREE.BoxGeometry(200,1,200);
    var baseMaterialtwo = new THREE.MeshLambertMaterial({color: 0x2D2D2D});
    var basetwo = new THREE.Mesh(baseGeometry, baseMaterial);
    basetwo.position.x= 0;
    basetwo.position.y= 1700;
    basetwo.position.z= -3770;
    scene.add(basetwo);
    objects.push( basetwo );
    baselightfour = new THREE.PointLight( 0xffffff, 3, 2000 );
    var geometrybaselightfour = new THREE.BoxGeometry( 200, 0.5, 0.5 );
    baselightfour.add( new THREE.Mesh( geometrybaselightfour, new THREE.MeshBasicMaterial( { color: 0xffffff, wireframe: false } ) ) );
    baselightfour.position.x = 0;
    baselightfour.position.y = 1730;
    baselightfour.position.z = -3670;
    scene.add(baselightfour);
    for ( var i = 0; i < 6; i ++ ) {
        platfour = new THREE.Mesh( platfourgeo, platfourmat );
        scene.add( platfour );
        tableauplatfour.push( platfour );
        tableauplatfour[i].position.x = 60;
        tableauplatfour[i].position.z = -4800 + (i * 160);
        tableauplatfour[i].position.y = 1850 + Math.floor( Math.random() * 3.5 - 10 ) * 20;
        platfour.vitesse = 0;
        objects.push( platfour );
    }
    for ( var i = 0; i < 6; i ++ ) {
        platfive = new THREE.Mesh( platfivegeo, platfivemat );
        scene.add( platfive );
        tableauplatfive.push( platfive );
        tableauplatfive[i].position.x = -60;
        tableauplatfive[i].position.z = -4800 + (i * 160);
        tableauplatfive[i].position.y = 1850 + Math.floor( Math.random() * 3.5 - 10 ) * 20;
        platfive.vitesse = 0;
        objects.push( platfive );
    }
    for ( var i = 0; i < 10; i ++ ) {
        platsixmat = new THREE.MeshLambertMaterial({color: 0x2D2D2D});
        platsixgeo = new THREE.BoxGeometry(60 + (Math.random() * 70), 2, 80 + (Math.random() * 140));
        platsix = new THREE.Mesh( platsixgeo, platsixmat );
        scene.add( platsix );
        tableauplatsix.push( platsix );
        tableauplatsix[i].position.x = 0;
        tableauplatsix[i].position.z = -7400 + (i * 260);
        tableauplatsix[i].position.y = 1780 + Math.floor( Math.random() * 3.5 - 10 ) * 10;
        platsix.vitesse = 0;
        objects.push( platsix );
    }
    roundlightone = new THREE.PointLight( 0xffffff, 9, 350 );
    var roundlightonegeo = new THREE.SphereGeometry( 2, 72, 32 );
    roundlightone.add( new THREE.Mesh( roundlightonegeo, new THREE.MeshBasicMaterial( { color: 0xffffff } ) ) );
    roundlightone.position.y = 1850;
    roundlightone.position.z = -4900 + (Math.floor( Math.random() * 12 - 10 ) * 20);
    roundlightone.vitesseone = 0;
    scene.add( roundlightone );
    tableaulight.push( roundlightone )
    roundlighttwo = new THREE.PointLight( 0xffffff, 9, 350 );
    var roundlighttwogeo = new THREE.SphereGeometry( 2, 72, 32 );
    roundlighttwo.add( new THREE.Mesh( roundlighttwogeo, new THREE.MeshBasicMaterial( { color: 0xffffff } ) ) );
    roundlighttwo.position.y = 1850;
    roundlighttwo.position.z = -4900 + (Math.floor( Math.random() * 12 - 10 ) * 20);
    roundlighttwo.vitesseone = 0;
    scene.add( roundlighttwo );
    tableaulight.push( roundlighttwo )
    var baseGeometrythree = new THREE.BoxGeometry(200,1,200);
    var baseMaterialthree = new THREE.MeshLambertMaterial({color: 0x2D2D2D});
    var basethree = new THREE.Mesh(baseGeometry, baseMaterial);
    basethree.position.x= 0;
    basethree.position.y= 1500;
    basethree.position.z= -7920;
    scene.add(basethree);
    objects.push( basethree );
    baselightfive = new THREE.PointLight( 0xffffff, 3, 1000 );
    var geometrybaselightfive = new THREE.BoxGeometry( 200, 0.5, 0.5 );
    baselightfive.add( new THREE.Mesh( geometrybaselightfive, new THREE.MeshBasicMaterial( { color: 0xffffff, wireframe: false } ) ) );
    baselightfive.position.x = 0;
    baselightfive.position.y = 1530;
    baselightfive.position.z = -7800;
    scene.add(baselightfive);
    for ( var i = 0; i < 6; i ++ ) {
        platsevenmat = new THREE.MeshLambertMaterial({color: 0x2D2D2D});
        platsevengeo = new THREE.BoxGeometry(110 + (Math.random() * 140), 2, 110 + (Math.random() * 140));
        platseven = new THREE.Mesh( platsevengeo, platsevenmat );
        scene.add( platseven );
        tableauplatseven.push( platseven );
        tableauplatseven[i].position.x = 0;
        tableauplatseven[i].position.z = -11250 + (i * 540);
        tableauplatseven[i].position.y = 1500 + Math.floor( Math.random() * 3.5 - 10 ) * 10;
        platseven.vitessetwo = 0;
        objects.push( platseven );
    }
    for ( var i = 0; i < 6; i ++ ) {
        platheightmat = new THREE.MeshLambertMaterial({color: 0x2D2D2D});
        platheightgeo = new THREE.BoxGeometry(110 + (Math.random() * 140), 2, 110 + (Math.random() * 140));
        platheight = new THREE.Mesh( platheightgeo, platheightmat );
        scene.add( platheight );
        tableauplatheight.push( platheight );
        tableauplatheight[i].position.x = 0;
        tableauplatheight[i].position.z = -11000 + (i * 540);
        tableauplatheight[i].position.y = 1500 + Math.floor( Math.random() * 3.5 - 10 ) * 10;
        objects.push( platheight );
    }
    for ( var i = 0; i < 10; i ++ ) {
        platninemat = new THREE.MeshLambertMaterial({color: 0x151515});
        platninegeo = new THREE.BoxGeometry(110 + (Math.random() * 140), 2, 110 + (Math.random() * 140));
        platnine = new THREE.Mesh( platninegeo, platninemat );
        scene.add( platnine );
        tableauplatnine.push( platnine );
        tableauplatnine[i].position.x = 0;
        tableauplatnine[i].position.z = -16500 + (i * 540);
        tableauplatnine[i].position.y = 1400 + Math.floor( Math.random() * 12 - 10 ) * 20;
        platnine.vitesse = 0;
        objects.push( platnine );
        tableaulumieremoin.push( platnine );
    }
    for ( var i = 0; i < 10; i ++ ) {
        plattenmat = new THREE.MeshLambertMaterial({color: 0x848484});
        plattengeo = new THREE.BoxGeometry(110 + (Math.random() * 140), 2, 110 + (Math.random() * 140));
        platten = new THREE.Mesh( plattengeo, plattenmat );
        scene.add( platten );
        platten.position.x = -100 + Math.floor( Math.random() * 30 - 10 ) * 20;
        platten.position.y = 1400 + Math.floor( Math.random() * 12 - 10 ) * 20;
        platten.position.z = -15200 + Math.floor( Math.random() * 50 - 10 ) * 100;
        platten.vitesse = 0;
        objects.push( platten );
        tableaulumiereplus.push( platten );
    }
    for ( var i = 0; i < 50; i ++ ) {
        platonzemat = new THREE.MeshLambertMaterial({color: 0x2D2D2D});
        platonzegeo = new THREE.BoxGeometry(150 + (Math.random() * 20), 2, 150 + (Math.random() * 20));
        platonze = new THREE.Mesh( platonzegeo, platonzemat );
        scene.add( platonze );
        platonze.position.x = -200 + Math.floor( Math.random() * 40 - 10 ) * 20;
        platonze.position.y = 1400 + Math.floor( Math.random() * 10 - 10 ) * 10;
        platonze.position.z = -15500 + Math.floor( Math.random() * 50 - 10 ) * 100;
        objects.push( platonze );
    }
    var baseGeometryfour = new THREE.BoxGeometry(200,1,200);
    var basefour = new THREE.Mesh(baseGeometry, materiallumiereplus);
    basefour.position.x= 0;
    basefour.position.y= 1200;
    basefour.position.z= -17000;
    scene.add(basefour);
    objects.push( basefour );
    tableaulumiereplus.push( basefour );
    baselightseven = new THREE.PointLight( 0xffffff, 3, 1000 );
    var geometrybaselightseven = new THREE.BoxGeometry( 0.5, 0.5, 200 );
    baselightseven.add( new THREE.Mesh( geometrybaselightseven, new THREE.MeshBasicMaterial( { color: 0xffffff, wireframe: false } ) ) );
    baselightseven.position.x = 100;
    baselightseven.position.y = 1230;
    baselightseven.position.z = -17000;
    scene.add(baselightseven);
    baselighteight = new THREE.PointLight( 0xffffff, 3, 1000 );
    var geometrybaselighteight = new THREE.BoxGeometry( 0.5, 0.5, 200 );
    baselighteight.add( new THREE.Mesh( geometrybaselighteight, new THREE.MeshBasicMaterial( { color: 0xffffff, wireframe: false } ) ) );
    baselighteight.position.x = - 100;
    baselighteight.position.y = 1230;
    baselighteight.position.z = -17000;
    scene.add(baselighteight);
    baselightnine = new THREE.PointLight( 0xffffff, 3, 1000 );
    var geometrybaselightnine = new THREE.BoxGeometry( 200, 0.5, 0.5 );
    baselightnine.add( new THREE.Mesh( geometrybaselightnine, new THREE.MeshBasicMaterial( { color: 0xffffff, wireframe: false } ) ) );
    baselightnine.position.x = 0;
    baselightnine.position.y = 1230;
    baselightnine.position.z = -17100;
    scene.add(baselightnine);
    lightlineone = new THREE.SpotLight(0xffffff,25,5000);
    var lightlineonegeo = new THREE.BoxGeometry( 2, 2, 7600 );
    lightlineone.add( new THREE.Mesh( lightlineonegeo, new THREE.MeshBasicMaterial( { color: 0xffffff, wireframe: false } ) ) );
    lightlineone.position.set( 0, 2400, -3800 );
    scene.add( lightlineone );
    lightlinetwo = new THREE.PointLight( 0xffffff, 3, 30500 );
    var lightlinetwogeo = new THREE.BoxGeometry( 2, 2, 8500 );
    var lightlinetwomat = new THREE.MeshBasicMaterial({});
    lightlinetwo.add( new THREE.Mesh( lightlinetwogeo, lightlinetwomat) );
    lightlinetwo.position.set( 0, 2000, -12480 );
    scene.add( lightlinetwo );
    var cubeGeometry = new THREE.BoxGeometry(1000,5000,0.1);
    var cubeMaterial = new THREE.MeshBasicMaterial( { color: 0x000000 } );
    var cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
    cube.position.x= 0;
    cube.position.y= 0;
    cube.position.z= 30;
    cube.vitessemur = 0;
    scene.add(cube);
    tabperdre.push(cube);
      for ( var i = 0; i < 20; i ++ ) {
        var linedecoronemat = new THREE.MeshLambertMaterial( { color: 0xA4A4A4 } );
        var linedecoronegeo = new THREE.BoxGeometry(0, 2000, 1);
        var linedecortwogeo = new THREE.BoxGeometry(1, 0, 15000);
        linedecorone = new THREE.Mesh( linedecoronegeo, linedecoronemat );
        linedecortwo = new THREE.Mesh( linedecoronegeo, linedecoronemat );
        linedecorthree = new THREE.Mesh( linedecortwogeo, linedecoronemat );
        linedecorfour = new THREE.Mesh( linedecortwogeo, linedecoronemat );
        linedecorone.position.x = 250 + Math.floor( Math.random() * 30 - 10 ) * 10;
        linedecorone.position.y = 2200 + Math.floor( Math.random() * 12 - 10 ) * 20;
        linedecorone.position.z = -3000 + Math.floor( Math.random() * 50 - 10 ) * 100;
        linedecortwo.position.x = -400 + Math.floor( Math.random() * 30 - 10 ) * 10;
        linedecortwo.position.y = 2200 + Math.floor( Math.random() * 12 - 10 ) * 20;
        linedecortwo.position.z = -3000 + Math.floor( Math.random() * 50 - 10 ) * 100;
        linedecorthree.position.x = 250 + Math.floor( Math.random() * 30 - 10 ) * 10;
        linedecorthree.position.y = 2200 + Math.floor( Math.random() * 12 - 10 ) * 90;
        linedecorthree.position.z = -7500;
        linedecorfour.position.x = -400 + Math.floor( Math.random() * 30 - 10 ) * 10;
        linedecorfour.position.y = 2200 + Math.floor( Math.random() * 12 - 10 ) * 90;
        linedecorfour.position.z = -7500;
        scene.add( linedecorone );
        scene.add( linedecortwo );
        scene.add( linedecorthree );
        scene.add( linedecorfour );
      }
    controls = new THREE.PointerLockControls( camera );
    scene.add( controls.getObject() );
    renderer = new THREE.WebGLRenderer( {antialias:true} );
    var onKeyDown = function ( event ) {
        switch ( event.keyCode ) {
            case 38:
            case 90:
                moveForward = true;
                break;
            case 37:
            case 81:
                moveLeft = true; break;
            case 40:
            case 83:
                moveBackward = true;
                break;
            case 39:
            case 68:
                moveRight = true;
                break;
            case 32:
                if ( canJump === true ) velocity.y += 350;
                canJump = false;
                break;
        }
    };
    var onKeyUp = function ( event ) {
        switch( event.keyCode ) {
            case 38:
            case 90:
                moveForward = false;
                break;
            case 37:
            case 81:
                moveLeft = false;
                break;
            case 40:
            case 83:
                moveBackward = false;
                break;
            case 39:
            case 68:
                moveRight = false;
                break;
        }
    };
    document.addEventListener( 'keydown', onKeyDown, false );
    document.addEventListener( 'keyup', onKeyUp, false );
    raycaster = new THREE.Raycaster( new THREE.Vector3(), new THREE.Vector3( 0, -1, 0 ), 0, 10 );
    raycastertwo = new THREE.Raycaster( new THREE.Vector3(), new THREE.Vector3( 0, -1, 0 ), 0, 10 );
    raycasterthree = new THREE.Raycaster( new THREE.Vector3(), new THREE.Vector3( 0, -1, 0 ), 0, 10 );
    raycasterperdre = new THREE.Raycaster( new THREE.Vector3(), new THREE.Vector3( -1, 0, -1 ), 0, 100 );
    var allanimation = function () {
      for (var i = 0; i < tableauplatseven.length; i++) {
        var yoyo = tableauplatseven[i];
        platseven.vitessetwo += 0.003;
        yoyo.position.x = ( 200 * (Math.cos(platseven.vitessetwo)));
      };
      for (var i = 0; i < tableaulight.length; i++) {
         var alllight = tableaulight[i];
         roundlightone.vitesseone += 0.003;
         alllight.position.z = -4380 + ( 900 *(Math.cos(roundlightone.vitesseone)));
      };
        roundlighttwo.position.z = -6700 - ( 900 *(Math.cos(roundlightone.vitesseone)));
      for (var i = 0; i < tabperdre.length; i++) {
         var cube = tabperdre[i];
         cube.vitessemur += 0.00015;
         cube.position.z = -8000 + ( 8700 *(Math.cos(cube.vitessemur)));
          if ( controls.getObject().position.z > cube.position.z ) {
              location.assign(location.href);
            nbmort++;
          }
      };
      renderer.render( scene, camera );
      requestAnimationFrame( allanimation );
    };
    allanimation();
    renderer.setClearColor( 0x000000 );
    renderer.setPixelRatio( window.devicePixelRatio );
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );
    window.addEventListener( 'resize', onWindowResize, false );
}
render = function() {
    scene.simulate(); // run physics
    renderer.render( scene, camera); // render the scene
    requestAnimationFrame( render );
};
function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize( window.innerWidth, window.innerHeight );
}
var nbchute = localStorage.getItem('on_load_chute');
var nbmort = localStorage.getItem('on_load_mort');
var nbreveil = localStorage.getItem('on_load_reveil');
nbchute -= 0;
nbmort -= 0;
nbreveil -= 0;
function animate() {
    lose = requestAnimationFrame( animate );
    if ( controlsEnabled ) {
        raycaster.ray.origin.copy( controls.getObject().position );
        raycastertwo.ray.origin.copy( controls.getObject().position );
        raycasterthree.ray.origin.copy( controls.getObject().position );
        raycasterperdre.ray.origin.copy( controls.getObject().position );
        raycaster.ray.origin.y -= 20;
        raycastertwo.ray.origin.y -= 19;
        raycasterperdre.ray.origin.z += 19;
        raycasterthree.ray.origin.y -= 19;
        var intersections = raycaster.intersectObjects( objects ) ;
        var intersectionstwo = raycastertwo.intersectObjects( tableaulumieremoin ) ;
        var intersectionsthree = raycasterthree.intersectObjects( tableaulumiereplus ) ;
        var intersectionsperdre = raycasterperdre.intersectObjects( tabperdre ) ;
        var isOnObject = intersections.length > 0;
        var isOnObjecttwo = intersectionstwo.length > 0;
        var isOnObjectthree = intersectionsthree.length > 0;
        var isOnObjectperdre = intersectionsperdre.length > 0;
        var time = performance.now();
        var delta = ( time - prevTime ) / 1000;
        velocity.x -= velocity.x * 10.0 * delta;
        velocity.z -= velocity.z * 10.0 * delta;
        velocity.y -= 9.8 * 70.0 * delta;
        if ( moveForward ) velocity.z -= 2800.0 * delta;
        if ( moveBackward ) velocity.z += 2800.0 * delta;
        if ( moveLeft ) velocity.x -= 2500.0 * delta;
        if ( moveRight ) velocity.x += 2500.0 * delta;
        if ( isOnObject === true ) {
            velocity.y = Math.max( 1, velocity.y );
            canJump = true;
        }
        if ( isOnObjectperdre === true ) {
            location.assign(location.href);
        }
        if ( isOnObjecttwo === true ) {
            scene.fog = new THREE.Fog( 0x000000, 0, 400 );
        }
        if ( isOnObjectthree === true ) {
            scene.fog = new THREE.Fog( 0x000000, 0, 1200 );
        }
        controls.getObject().translateX( velocity.x * delta );
        controls.getObject().translateY( velocity.y * delta );
        controls.getObject().translateZ( velocity.z * delta );
        if ( controls.getObject().position.y < 10 ) {
            velocity.y = 10;
            controls.getObject().position.y = 10;
            canJump = true;
        }
        if(typeof(Storage) !== "undefined") {
            if (controls.getObject().position.y < 100 && controls.getObject().position.z < -100 ) {
              nbchute++;
            }
            if ( isOnObjectperdre === true ) {
              nbmort++;
            }
            if ( controls.getObject().position.z < -16920 && controls.getObject().position.y < 1280 ) {
              nbreveil++;
            }
          localStorage.setItem("on_load_chute", nbchute);
          localStorage.setItem("on_load_mort", nbmort);
          localStorage.setItem("on_load_reveil", nbreveil);
        } else {
            document.getElementById("chute").innerHTML = "Sorry, your browser does not support web storage...";
        }
        if ( controls.getObject().position.y < 100 && controls.getObject().position.z > -3600 ) {
            velocity.y = 100;
            controls.getObject().position.x =  0;
            controls.getObject().position.z =  0;
            controls.getObject().position.y =  2200;
        }
        if ( controls.getObject().position.y < 100 && controls.getObject().position.z > -7920 && controls.getObject().position.z < -3600 ) {
            velocity.y = 100;
            controls.getObject().position.x =  0;
            controls.getObject().position.z =  -3770;
            controls.getObject().position.y =  1900;
        }
        if ( controls.getObject().position.y < 100 && controls.getObject().position.z < -7920 && controls.getObject().position.z > -16920 ) {
            velocity.y = 100;
            controls.getObject().position.x =  0;
            controls.getObject().position.z =  -7920;
            controls.getObject().position.y =  1700;
        }
        if ( controls.getObject().position.y < 100 && controls.getObject().position.z < -16920) {
            velocity.y = 100;
            controls.getObject().position.x =  0;
            controls.getObject().position.z =  -16920;
            controls.getObject().position.y =  1300;
        }
        if ( controls.getObject().position.z < -16920 && controls.getObject().position.y < 1280 ) {
            location.assign(location.href);
        }
        prevTime = time;
    }
    document.getElementById('chute').innerHTML = nbchute;
    document.getElementById('mort').innerHTML = nbmort;
    document.getElementById('reveil').innerHTML = nbreveil;
    renderer.render( scene, camera );
}