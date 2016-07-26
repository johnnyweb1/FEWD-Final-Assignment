/**
 *Java Script for Inca and the big balloon
 *Developed by John Webster
 *John @ paritybit.io http://paritybit.io
 */





function set_body_height() { // set border image height = window height called for vertical images to help them resize http://stackoverflow.com/questions/6169666/how-to-resize-an-image-to-fit-in-the-browser-window
    $('.borderImageV').height($(window).height());
}


$(document).ready(start);

function start() {

    $(window).bind('resize', set_body_height);
    set_body_height();


    //**-WAYPOINT TRIGGERS FOR EACH PAGE-*************
    var $page1 = $("#page1");
    var $page2 = $("#page2");
    var $page3 = $("#page3");
    var $page4 = $("#page4");
    var $page5 = $("#page5");
    var $page6 = $("#page6");
    var $page7 = $("#page7");
    var $page8 = $("#page8");
    var $page9 = $("#page9");
    var $page10 = $("#page10");
    var $page11 = $("#page11");
    var $page12 = $("#page12");
    var $page13 = $("#page13");
    var $page14 = $("#page14");
    var $page15 = $("#page15");
    var $page16 = $("#page16");
    var $page17 = $("#page17");
    var $page18 = $("#page18");
    var $page19 = $("#page19");
    var $page20 = $("#page20");
    var $page21 = $("#page21");
    var $page22 = $("#page22");
    var $footerCredits = $("#footerCredits");




    // **INIT SOUND AND SFX SELECTORS *********************************
    var voxMute = false; //initialise mute for sounds and sfx
    var sfxMute = false;
    var sfxSound = new buzz.sound('sounds/p1sfx.mp3');
    var voxSound = new buzz.sound('sounds/p1vox.mp3'); //even if they aren't called, sounds have to be initialised so they can be closed by the menu




    // **MENU ITEM SELECTORS ************************************
    //**REGULAR BALLOON MENU
    var thanksMenu = document.querySelector('.menu-item1');
    var aboutMenu = document.querySelector('.menu-item2');
    var voxMenu = document.querySelector('.menu-item3');
    var sfxMenu = document.querySelector('.menu-item4');

    //*** <600PX MOBILE NAV MENU
    var thanksMenuMob = document.querySelector('.mobNav1');
    var aboutMenuMob = document.querySelector('.mobNav2');
    var voxMenuMob = document.querySelector('.mobNav3');
    var sfxMenuMob = document.querySelector('.mobNav4');

    /****************************************************/

    function stopsound() { //Stop sounds playing - invoked at page change
        sfxSound.stop();
        voxSound.stop();
    }



    // **MENU ITEM BUILD ************************************
    var active1 = false;
    var active2 = false;
    var active3 = false;
    var active4 = false;

    $('.radial-menu').on('mousedown touchstart', function() {

        if (!active1) $(this).find('.menu-item1').css({
            'background-color': 'orange',
            'transform': 'translate(0px,125px)'
        });
        else $(this).find('.menu-item1').css({
            'background-color': 'dimGray',
            'transform': 'none'
        });

        if (!active2) $(this).find('.menu-item2').css({
            'background-color': 'orange',
            'transform': 'translate(60px,105px)'
        });
        else $(this).find('.menu-item2').css({
            'background-color': 'darkGray',
            'transform': 'none'
        });

        if (!active3) $(this).find('.menu-item3').css({
            'background-color': 'orange',
            'transform': 'translate(105px,60px)'
        });
        else $(this).find('.menu-item3').css({
            'background-color': 'silver',
            'transform': 'none'
        });

        if (!active4) $(this).find('.menu-item4').css({
            'background-color': 'orange',
            'transform': 'translate(125px,0px)'
        });
        else $(this).find('.menu-item4').css({
            'background-color': 'silver',
            'transform': 'none'
        });

        active1 = !active1;
        active2 = !active2;
        active3 = !active3;
        active4 = !active4;

    });




    //*******Menu Options ***************************************
    //Sweet menu config *****************************************
    thanksMenu.onclick = function() {
        swal({
            title: "Thanks to the following people",
            text: "Artwork by Cecile Zinsstag, Everyone at GA (especially the instructors David and Tom) uses SweetAlert, Buzz & JS waypoints. Full credits on the last page ",
            imageUrl: "images/mini-balloon.png"
        });
    }

    aboutMenu.onclick = function() {
        swal({
            title: "Made as a final project for Front End Web Development 12 at General Assembly, Melbourne",
            text: "You too can learn how to do this stuff, see the last page for details",
            type: "success"
        });
    }


    //checks to see if voice is on or off and presents a different menu depending on outcome
    voxMenu.onclick = function() {
        if (voxMute == false) {
            swal({
                title: "No Voice",
                text: "This option will turn off the voice read along",
                type: "warning",
                showCancelButton: true,
                confirmButtonText: "Switch off the read along",
                cancelButtonText: "Let him stay and read"
            }, function() {
                voxSound.mute();
                voxMute = true;
            });
        } else {
            swal({
                title: "Bring back Voice",
                text: "This option will turn on the voice read along",
                type: "warning",
                showCancelButton: true,
                confirmButtonText: "Yes please bring in the read along",
                cancelButtonText: "Cancel"
            }, function() {
                voxSound.unmute();
                voxMute = false;
            });
        }
    }




    //checks to see if Special Effects and music are on or off and presents a different menu depending on outcome
    sfxMenu.onclick = function() {
        if (sfxMute == false) {
            swal({
                title: "Turn off Music and SFX",
                text: "This will turn off the music and jungle drums. You'll have to make your own balloon noises.",
                showCancelButton: true,
                confirmButtonText: 'I can maky my own noises thanks',
                cancelButtonText: 'Wait! Let the sound stay!',
                imageUrl: "images/mini-balloon.png"
            }, function() {
                sfxSound.mute()
                sfxMute = true;
            });
        } else {
            swal({
                title: "Bring back the Music",
                text: "This option will turn on the music and special effects",
                type: "warning",
                showCancelButton: true,
                confirmButtonText: 'Yes please bring back the music',
                cancelButtonText: 'Cancel'
            }, function() {
                sfxSound.unmute();
                sfxMute = false;
            });
        }
    }


    //Mobile sweet menu config *****************************************
    thanksMenuMob.onclick = function() {
        swal({
            title: "Thanks to the following people",
            text: "Artwork by Cecile Zinsstag & Thanks to David and Tom @ GA - full credits in the footer ",
            imageUrl: "images/mini-balloon.png"
        });
    }

    aboutMenuMob.onclick = function() {
        swal({
            title: "Made as a final project for Front End Web Development 12 at General Assembly, Melbourne",
            text: "You too can learn how to do this stuff, links are in the footer",
            type: "success"
        });
    }

    //checks to see if voice is on or off and presents a different menu depending on outcome
    voxMenuMob.onclick = function() {
        if (voxMute == false) {
            swal({
                title: "No Voice",
                text: "This option will turn off the voice read along",
                type: "warning",
                showCancelButton: true,
                confirmButtonText: 'Turn off the voice',
                cancelButtonText: 'Let him stay and read'
            }, function() {
                voxSound.mute();
                voxMute = true;
            });
        } else {
            swal({
                title: "Bring back Voice",
                text: "This option will turn on the voice read along",
                type: "warning",
                showCancelButton: true,
                confirmButtonText: 'Yes please bring in the read along',
                cancelButtonText: 'Cancel'
            }, function() {
                voxSound.unmute();
                voxMute = false;
            });
        }
    }




    //checks to see if Special Effects and music are on or off and presents a different menu depending on outcome
    sfxMenuMob.onclick = function() {
        if (sfxMute == false) {
            swal({
                title: "Turn off Music and SFX",
                text: "This will turn off the music and effects",
                showCancelButton: true,
                confirmButtonText: 'I can maky my own noises thanks',
                cancelButtonText: 'Wait! Let the sound stay!',
                imageUrl: "images/mini-balloon.png"
            }, function() {
                sfxSound.mute()
                sfxMute = true;
            });
        } else {
            swal({
                title: "Bring back the Music",
                text: "This option will turn on the music and special effects",
                type: "warning",
                showCancelButton: true,
                confirmButtonText: 'Yes please bring back the music',
                cancelButtonText: 'Cancel'
            }, function() {
                sfxSound.unmute();
                sfxMute = false;
            });
        }
    }


    //************************************START MOVING INCA ***************************************************
    function makeNewPosition() {
        var w = $(window).width(); //get current window width
        var h = $(window).height();
        var newH = Math.floor(Math.random() * h); //new height this is what's used to position Inca
        var newW = Math.floor(Math.random() * w) + 100; //new width, keep Inca (mostly) away from the menu - a little overlap looks natural
        newH = newH > (h - 400) ? (h - 400) : newH; //checks if new height is going to push the baloon off the screen
        newW = newW > ($(window).width() - 100) ? (newW - 100) : newW; //checks that the buffer added to the width above doesn't push her off the screen.
        return [newH, newW]; //return array
    }

    function calcSpeed(prev, next) { // uses position data to genrate a random speed value
        var x = Math.abs(prev[1] - next[1]); //returns an absolute value pos left based on the old and new values
        var y = Math.abs(prev[0] - next[0]); //pos top
        var greatestVal = x > y ? x : y; //use the biggest value between x and y
        var speedModifier = .5; //speed govenor for Inca's movement - higher the number the faster she flies!
        var speed = Math.ceil(greatestVal / speedModifier); //rounds up to the nearest integer
        return speed;
    }

    function whichGirl() { //randomly switch between images of the balloon girl flying to add some spice
        var pickGirl = Math.random();
        if (pickGirl < 0.33) {
            $(".incaFlys").removeClass("incaFlysChange2");
            $(".incaFlys").removeClass("incaFlysChange3");
            $(".incaFlys").addClass("incaFlysChange");
        } else if (pickGirl < 0.66) {
            $(".incaFlys").removeClass("incaFlysChange3");
            $(".incaFlys").removeClass("incaFlysChange2");
            $(".incaFlys").addClass("incaFlysChange2");
        } else {
            $(".incaFlys").removeClass("incaFlysChange");
            $(".incaFlys").removeClass("incaFlysChange2");
            $(".incaFlys").addClass("incaFlysChange3");
        }
    }

    function animateGirl() { //move the girl between old position and the new calculated position
        var newPos = makeNewPosition();
        var oldPos = $('.incaFlys').offset(); // offset position relative to the document [top,left]
        var speed = calcSpeed([oldPos.top, oldPos.left], newPos);
        whichGirl(); //pick a balloon Girl
        $('.incaFlys').animate({ //animate the div
            top: newPos[0],
            left: newPos[1]
        }, speed, function() {
            animateGirl(); //and  . . . loop
        });
    };
    //assistance on random moving http://jsfiddle.net/Xw29r/5983/
    //************************************END MOVING INCA ***************************************************


    //*******************************************************************************************************
    //***** WAYPOINT CONTROL *******************************
    //Each page in the book has a waypoint control to manage individual sounds and offsets
    $page1.waypoint(function(direction) {
        if (direction == "down") {//if the srolling is down
            $("#menuBalloon").attr("src", "images/borderBalloon2.png"); //subtle change to balloon in the menu
            $(".textFrameH").addClass("textFrameAnimate"); //lets the text appear
            sfxSound = new buzz.sound('sounds/p1sfx.mp3');//Page 1 Music and Special Effects MP3
            voxSound = new buzz.sound('sounds/p1vox.mp3');//Page 1 Voice readover MP3
            if (voxMute == false) {//If voice mute is off, then play the voice
                voxSound.play();
            }
            if (sfxMute == false) {//If Special Effects and music mute is off then play sounds
                sfxSound.play();
            }
        } else {
            $(".textFrameH").removeClass("textFrameAnimate");//make the text disappear
            $("#menuBalloon").attr("src", "images/borderBalloon.png"); //subtle change to balloon
            stopsound();//stop all the sounds playing
        }
    }, {
        offset: "30%"
    }); //start at a 30% screen offset to the story page as it's horizontal

    $page2.waypoint(function(direction) {
        if (direction == "down") {
            stopsound();
            $("#menuBalloon").attr("src", "images/borderBalloon3.png"); //subtle change to balloon in the menu
            sfxSound = new buzz.sound('sounds/p2sfx.mp3');
            voxSound = new buzz.sound('sounds/p2vox.mp3');
            $(".incaWindow").animate({
                left: '50%'
            }, 10000); //slides Inca across the window over 10 seconds
            if (voxMute == false) {
                voxSound.play();
            }
            if (sfxMute == false) {
                sfxSound.play();
            }
        } else {
            $("#menuBalloon").attr("src", "images/borderBalloon2.png"); //subtle change to balloon
            stopsound();
        }
    }, {
        offset: "20%"
    });

    $page3.waypoint(function(direction) {
        if (direction == "down") {
            stopsound();
            $("#menuBalloon").attr("src", "images/borderBalloon.png");
            sfxSound = new buzz.sound('sounds/p3sfx.mp3');
            voxSound = new buzz.sound('sounds/p3vox.mp3');
            $(".incaWindow2").animate({//show Inca flying across the page
                left: '20%'
            }, 10000); //slides Inca across the window over 10 seconds
            if (voxMute == false) {
                voxSound.play();
            }
            if (sfxMute == false) {
                sfxSound.play();
            }
        } else {
            $("#menuBalloon").attr("src", "images/borderBalloon2.png");
            stopsound();
        }
    }, {
        offset: "20%"
    });

    $page4.waypoint(function(direction) {
        if (direction == "down") {
            stopsound();
            $("#menuBalloon").attr("src", "images/borderBalloon3.png");
            sfxSound = new buzz.sound('sounds/p4sfx.mp3');
            voxSound = new buzz.sound('sounds/p4vox.mp3');
            voxSound.setVolume(100);
            if (voxMute == false) {
                voxSound.play();
            }
            if (sfxMute == false) {
                sfxSound.play();
            }
        } else {
            $("#menuBalloon").attr("src", "images/borderBalloon2.png");
            stopsound();
        }
    }, {
        offset: "20%"
    });

    //******* PAGE 5 ***********************************************************
    $page5.waypoint(function(direction) {
        if (direction == "down") {
            stopsound();
            animateGirl();
            $("#menuBalloon").attr("src", "images/borderBalloon.png");
            $(".incaFlys").addClass("incaFlysAnimate");
            sfxSound = new buzz.sound('sounds/p5sfx.mp3');
            voxSound = new buzz.sound('sounds/p5vox.mp3');
            if (voxMute == false) {
                voxSound.play();
            }
            if (sfxMute == false) {
                sfxSound.play();
            }
        } else {
            $(".incaFlys").removeClass("incaFlysAnimate"); //leave the waypoint and cancel the sound and movement
            $("#menuBalloon").attr("src", "images/borderBalloon3.png"); //subtle change to balloon
            stopsound();
        }
    }, {
        offset: "30%"
    });

    //******* PAGE 6 ***********************************************************
    $page6.waypoint(function(direction) {
        if (direction == "down") {
            stopsound();
            $("#menuBalloon").attr("src", "images/borderBalloon2.png");
            $(".textFrameV").addClass("textFrameAnimate");
            sfxSound = new buzz.sound('sounds/p6sfx.mp3');
            voxSound = new buzz.sound('sounds/p6vox.mp3');
            if (voxMute == false) {
                voxSound.play();
            }
            if (sfxMute == false) {
                sfxSound.play();
            }
        } else {
            $(".textFrameV").removeClass("textFrameAnimate");
            $("#menuBalloon").attr("src", "images/borderBalloon.png"); //subtle change to balloon
            stopsound();
        }

    }, {
        offset: "30%"
    });

    //******* PAGE 7 ***********************************************************
    $page7.waypoint(function(direction) {
        if (direction == "down") {
            stopsound();
            $("#menuBalloon").attr("src", "images/borderBalloon.png");
            sfxSound = new buzz.sound('sounds/p7sfx.mp3');
            voxSound = new buzz.sound('sounds/p7vox.mp3');
            if (voxMute == false) {
                voxSound.play();
            }
            if (sfxMute == false) {
                sfxSound.play();
            }
        } else {
            $("#menuBalloon").attr("src", "images/borderBalloon3.png"); //subtle change to balloon
            stopsound();
        }
    }, {
        offset: "30%"
    });

    //******* PAGE 8 ***********************************************************
    $page8.waypoint(function(direction) {
        if (direction == "down") {
            stopsound();
            $("#menuBalloon").attr("src", "images/borderBalloon3.png");
            sfxSound = new buzz.sound('sounds/p8sfx.mp3');
            voxSound = new buzz.sound('sounds/p8vox.mp3');
            if (voxMute == false) {
                voxSound.play();
            }
            if (sfxMute == false) {
                sfxSound.play();
            }
        } else {
            $("#menuBalloon").attr("src", "images/borderBalloon.png"); //subtle change to balloon
            stopsound();
        }
    }, {
        offset: "30%"
    });

    //******* PAGE 9 ***********************************************************
    $page9.waypoint(function(direction) {
        if (direction == "down") {
            stopsound();
            $("#menuBalloon").attr("src", "images/borderBalloon2.png");
            sfxSound = new buzz.sound('sounds/p9sfx.mp3');
            voxSound = new buzz.sound('sounds/p9vox.mp3');
            if (voxMute == false) {
                voxSound.play();
            }
            if (sfxMute == false) {
                sfxSound.play();
            }
        } else {
            $("#menuBalloon").attr("src", "images/borderBalloon.png"); //subtle change to balloon
            stopsound();
        }
    }, {
        offset: "30%"
    });

    //******* PAGE 10 **********************************************************
    $page10.waypoint(function(direction) {
        if (direction == "down") {
            stopsound();
            $("#menuBalloon").attr("src", "images/borderBalloon.png");
            sfxSound = new buzz.sound('sounds/p10sfx.mp3');
            voxSound = new buzz.sound('sounds/p10vox.mp3');
            if (voxMute == false) {
                voxSound.play();
            }
            if (sfxMute == false) {
                sfxSound.play();
            }
        } else {
            $("#menuBalloon").attr("src", "images/borderBalloon2.png"); //subtle change to balloon
            stopsound();
        }
    }, {
        offset: "30%"
    });

    //******* PAGE 11 **********************************************************
    $page11.waypoint(function(direction) {
        if (direction == "down") {
            stopsound();
            $("#menuBalloon").attr("src", "images/borderBalloon3.png");
            sfxSound = new buzz.sound('sounds/p11sfx.mp3');
            voxSound = new buzz.sound('sounds/p11vox.mp3');
            if (voxMute == false) {
                voxSound.play();
            }
            if (sfxMute == false) {
                sfxSound.play();
            }
        } else {
            $("#menuBalloon").attr("src", "images/borderBalloon2.png"); //subtle change to balloon
            stopsound();
        }
    }, {
        offset: "30%"
    });
    //******* PAGE 12 **********************************************************
    $page12.waypoint(function(direction) {
        if (direction == "down") {
            stopsound();
            $("#menuBalloon").attr("src", "images/borderBalloon.png");
            sfxSound = new buzz.sound('sounds/p12sfx.mp3');
            voxSound = new buzz.sound('sounds/p12vox.mp3');
            if (voxMute == false) {
                voxSound.play();
            }
            if (sfxMute == false) {
                sfxSound.play();
            }
        } else {
            $("#menuBalloon").attr("src", "images/borderBalloon3.png"); //subtle change to balloon
            stopsound();
        }
    }, {
        offset: "30%"
    });
    //******* PAGE 13 **********************************************************
    $page13.waypoint(function(direction) {
        if (direction == "down") {
            stopsound();
            $("#menuBalloon").attr("src", "images/borderBalloon2.png");
            sfxSound = new buzz.sound('sounds/p13sfx.mp3');
            voxSound = new buzz.sound('sounds/p13vox.mp3');
            if (voxMute == false) {
                voxSound.play();
            }
            if (sfxMute == false) {
                sfxSound.play();
            }
        } else {
            $("#menuBalloon").attr("src", "images/borderBalloon.png"); //subtle change to balloon
            stopsound();
        }
    }, {
        offset: "30%"
    });
    //******* PAGE 14 **********************************************************
    $page14.waypoint(function(direction) {
        if (direction == "down") {
            stopsound();
            $("#menuBalloon").attr("src", "images/borderBalloon.png");
            sfxSound = new buzz.sound('sounds/p14sfx.mp3');
            voxSound = new buzz.sound('sounds/p14vox.mp3');
            if (voxMute == false) {
                voxSound.play();
            }
            if (sfxMute == false) {
                sfxSound.play();
            }
        } else {
            $("#menuBalloon").attr("src", "images/borderBalloon2.png"); //subtle change to balloon
            stopsound();
        }
    }, {
        offset: "30%"
    });
    //******* PAGE 15 **********************************************************
    $page15.waypoint(function(direction) {
        if (direction == "down") {
            stopsound();
            $("#menuBalloon").attr("src", "images/borderBalloon3.png");
            sfxSound = new buzz.sound('sounds/p15sfx.mp3');
            voxSound = new buzz.sound('sounds/p15vox.mp3');
            if (voxMute == false) {
                voxSound.play();
            }
            if (sfxMute == false) {
                sfxSound.play();
            }
        } else {
            $("#menuBalloon").attr("src", "images/borderBalloon2.png"); //subtle change to balloon
            stopsound();
        }
    }, {
        offset: "30%"
    });
    //******* PAGE 16 **********************************************************
    $page16.waypoint(function(direction) {
        if (direction == "down") {
            stopsound();
            $("#menuBalloon").attr("src", "images/borderBalloon2.png");
            sfxSound = new buzz.sound('sounds/p16sfx.mp3');
            voxSound = new buzz.sound('sounds/p16vox.mp3');
            if (voxMute == false) {
                voxSound.play();
            }
            if (sfxMute == false) {
                sfxSound.play();
            }
        } else {
            $("#menuBalloon").attr("src", "images/borderBalloon3.png"); //subtle change to balloon
            stopsound();
        }
    }, {
        offset: "30%"
    });
    //******* PAGE 17 **********************************************************
    $page17.waypoint(function(direction) {
        if (direction == "down") {
            stopsound();
            $("#menuBalloon").attr("src", "images/borderBalloon.png");
            sfxSound = new buzz.sound('sounds/p17sfx.mp3');
            voxSound = new buzz.sound('sounds/p17vox.mp3');
            if (voxMute == false) {
                voxSound.play();
            }
            if (sfxMute == false) {
                sfxSound.play();
            }
        } else {
            $("#menuBalloon").attr("src", "images/borderBalloon2.png"); //subtle change to balloon
            stopsound();
        }
    }, {
        offset: "30%"
    });
    //******* PAGE 18 **********************************************************
    $page18.waypoint(function(direction) {
        if (direction == "down") {
            stopsound();
            $("#menuBalloon").attr("src", "images/borderBalloon3.png");
            sfxSound = new buzz.sound('sounds/p18sfx.mp3');
            voxSound = new buzz.sound('sounds/p18vox.mp3');
            if (voxMute == false) {
                voxSound.play();
            }
            if (sfxMute == false) {
                sfxSound.play();
            }
        } else {
            $("#menuBalloon").attr("src", "images/borderBalloon.png"); //subtle change to balloon
            stopsound();
        }
    }, {
        offset: "30%"
    });
    //******* PAGE 19 **********************************************************
    $page19.waypoint(function(direction) {
        if (direction == "down") {
            stopsound();
            $("#menuBalloon").attr("src", "images/borderBalloon2.png");
            sfxSound = new buzz.sound('sounds/p19sfx.mp3');
            voxSound = new buzz.sound('sounds/p19vox.mp3');
            if (voxMute == false) {
                voxSound.play();
            }
            if (sfxMute == false) {
                sfxSound.play();
            }
        } else {
            $("#menuBalloon").attr("src", "images/borderBalloon3.png"); //subtle change to balloon
            stopsound();
        }
    }, {
        offset: "30%"
    });
    //******* PAGE 20 **********************************************************
    $page20.waypoint(function(direction) {
        if (direction == "down") {
            stopsound();
            $("#menuBalloon").attr("src", "images/borderBalloon.png");
            sfxSound = new buzz.sound('sounds/p20sfx.mp3');
            voxSound = new buzz.sound('sounds/p20vox.mp3');
            if (voxMute == false) {
                voxSound.play();
            }
            if (sfxMute == false) {
                sfxSound.play();
            }
        } else {
            $("#menuBalloon").attr("src", "images/borderBalloon2.png"); //subtle change to balloon
            stopsound();
        }
    }, {
        offset: "30%"
    });
    //******* PAGE 21 **********************************************************
    $page21.waypoint(function(direction) {
        if (direction == "down") {
            stopsound();
            $("#menuBalloon").attr("src", "images/borderBalloon2.png");
            $(".incaFlys").removeClass("incaFlysAnimate"); //sorry Inca - you're grounded
            $(".sunNight").animate({ //set the sun
                top: '50%'
            }, 10000);
            $(".lightSwitchOff").addClass("lightSwitchOn");
            sfxSound = new buzz.sound('sounds/p21sfx.mp3');
            voxSound = new buzz.sound('sounds/p21vox.mp3');
            if (voxMute == false) {
                voxSound.play();
            }
            if (sfxMute == false) {
                sfxSound.play();
            }
        } else {
            $("#menuBalloon").attr("src", "images/borderBalloon.png"); //subtle change to balloon
            stopsound();
            $(".incaFlys").addClass("incaFlysAnimate");
        }
    }, {
        offset: "30%"
    });

    //******* PAGE 22 **********************************************************

    $page22.waypoint(function(direction) {
        if (direction == "down") {
            stopsound();
            $("#menuBalloon").attr("src", "images/borderBalloon3.png"); //subtle change to balloon in the menu
            sfxSound = new buzz.sound('sounds/p22sfx.mp3');
            voxSound = new buzz.sound('sounds/p22vox.mp3');
            $(".ropeCritters").addClass("hangTheCritters");

            if (voxMute == false) {
                voxSound.play();
            }
            if (sfxMute == false) {
                sfxSound.play();
            }
        } else {
            $("#menuBalloon").attr("src", "images/borderBalloon2.png"); //subtle change to balloon
            stopsound();
        }
    }, {
        offset: "20%"
    });



    //******* FOOTER **********************************************************

    $footerCredits.waypoint(function(direction) {
        if (direction == "down") {
            stopsound();
            $("#menuBalloon").attr("src", "images/borderBalloon.png"); //subtle change to balloon in the menu
            sfxSound = new buzz.sound('sounds/goodbye.mp3');
            if (sfxMute == false) {
                sfxSound.play();
                sfxSound.loop();
            }
        } else {
            $("#menuBalloon").attr("src", "images/borderBalloon3.png"); //subtle change to balloon
            stopsound();
        }
    }, {
        offset: "20%"
    });

}

    //******* THAT'S ALL FOLKS! **************************************************
