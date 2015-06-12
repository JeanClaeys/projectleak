
            var blocker = document.getElementById( 'blocker' );
            var instructions = document.getElementById( 'instructions' );
            // Fin variable du fond gris et des instructions ( sert à l'affichage des données ).

            var havePointerLock = 'pointerLockElement' in document || 'mozPointerLockElement' in document || 'webkitPointerLockElement' in document;

            /////////////////////////////////////////////////////////////////////////////////////////////////
            /////////////////////////////// DEBUT DE LA FONCTION POINTLOKER /////////////////////////////////
            /////////////////////////////////////////////////////////////////////////////////////////////////

            // si le browser gére le point locker ou pas.
            // Si oui.
            if ( havePointerLock ) {

                var element = document.body;


                var pointerlockchange = function ( event ) {

                    if ( document.pointerLockElement === element || document.mozPointerLockElement === element || document.webkitPointerLockElement === element ) {

                        controlsEnabled = true;
                        controls.enabled = true;

                        blocker.style.width = '100%';
                        blocker.style.transition = "all 1s ease";
                        blocker.style.opacity = '0';


                    } else {

                        controls.enabled = false;

                        blocker.style.display = '-webkit-box';
                        blocker.style.display = '-moz-box';
                        blocker.style.display = 'box';
                        blocker.style.opacity = '1';

                        blocker.style.transition = "all 1s ease";

                        instructions.style.display = '';

                    }

                }

                var pointerlockerror = function ( event ) {

                    instructions.style.display = '';


                }

                // Hook pointer lock state change events
                document.addEventListener( 'pointerlockchange', pointerlockchange, false );
                document.addEventListener( 'mozpointerlockchange', pointerlockchange, false );
                document.addEventListener( 'webkitpointerlockchange', pointerlockchange, false );

                document.addEventListener( 'pointerlockerror', pointerlockerror, false );
                document.addEventListener( 'mozpointerlockerror', pointerlockerror, false );
                document.addEventListener( 'webkitpointerlockerror', pointerlockerror, false );

                instructions.addEventListener( 'click', function ( event ) {

                    instructions.style.display = 'none';

                    // Ask the browser to lock the pointer
                    element.requestPointerLock = element.requestPointerLock || element.mozRequestPointerLock || element.webkitRequestPointerLock;

                    if ( /Firefox/i.test( navigator.userAgent ) ) {

                        var fullscreenchange = function ( event ) {

                            if ( document.fullscreenElement === element || document.mozFullscreenElement === element || document.mozFullScreenElement === element ) {

                                document.removeEventListener( 'fullscreenchange', fullscreenchange );
                                document.removeEventListener( 'mozfullscreenchange', fullscreenchange );

                                element.requestPointerLock();
                            }

                        }

                        document.addEventListener( 'fullscreenchange', fullscreenchange, false );
                        document.addEventListener( 'mozfullscreenchange', fullscreenchange, false );

                        element.requestFullscreen = element.requestFullscreen || element.mozRequestFullscreen || element.mozRequestFullScreen || element.webkitRequestFullscreen;

                        element.requestFullscreen();

                    } else {

                        element.requestPointerLock();

                    }

                }, false );

            } else {

                instructions.innerHTML = 'Your browser doesn\'t seem to support Pointer Lock API';

            }


            /////////////////////////////////////////////////////////////////////////////////////////////////
            /////////////////////////////// FIN DE LA FONCTION POINTLOKER /////////////////////////////////
            /////////////////////////////////////////////////////////////////////////////////////////////////

            