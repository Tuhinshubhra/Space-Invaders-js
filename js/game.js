const g_canvas = document.getElementById('myCanvas');

// make canvas fullscreen
g_canvas.width = window.innerWidth/1.5;
g_canvas.height = window.innerHeight;

const g_context = g_canvas.getContext('2d');
const g_FPS = 60;
const g_timeFrame = 1000/g_FPS;
const g_gridCols  = 13;
const g_coolDownFrameCount = g_FPS/8;
var g_shoot = false;
var g_frameCount = 0;
var g_lastShootFrame = 0;
var g_moveLeft = false;
var g_moveRight = false;
var g_motherShipSpeed = 5;
var g_alienMoveSpeed = 20;
var g_moveAliensDown = false
var g_frameCountForAlienToShoot = 120;
var g_playerLife = 5;
var g_playerLifeObjects = new Array(g_playerLife);
var g_score = 0;
var g_level = 1;
var g_gameOver = false;
var g_gameRunning = true;
var g_gameMsg = [0, ""]; // isSuccessMsg, Message
var g_stars = new Array(50);
var g_currentScreen = 0;

// calculate the number of enemies to spawn
const g_numAliensPerRow = 10;
const g_numAlienRows = 4;
const g_spaceBetAliens = 30;
const g_pixelWidth = 3;
const g_leftPadding = parseInt((g_canvas.width - (g_numAliensPerRow * g_gridCols * g_pixelWidth) - ((g_numAliensPerRow-1)*g_spaceBetAliens))/2)
var g_aliens = new Array(g_numAlienRows * g_numAliensPerRow);
var g_aliveAliens = new Array(g_numAlienRows * g_numAliensPerRow);

// mother ship, player spaceship, shields
var g_motherShip = undefined;
var g_playerSpaceShip = undefined;
var g_shield = new Array(3);

// Gradients for aliens
var g_alienColors = [[[878, 84, 200], [143, 148, 251]], [[0, 175, 255], [0, 224, 254]], [[242, 18, 18], [237, 166, 35]], [[10, 10, 10], [247, 30, 30]]]

// all about bullets
const g_bulletHeight = 10;
const g_bulletWidth  = 3;
const g_numBullets   = Math.ceil((g_canvas.height - g_gridCols * g_pixelWidth)/g_bulletHeight);
var g_bullets        = new Array(g_numBullets);
var g_alienBullets   = new Array(10);



// Fill the array of bullets with bullet object
function f_createBullets(){
    // create player bullets
    for (let b=0; b<g_bullets.length; b++){
        g_bullets[b] = new c_bullet(0, 0, g_bulletHeight, g_bulletWidth, 'greenyellow');
    }
    
    // create alien bullets
    for (let b=0; b<g_alienBullets.length; b++){
        g_alienBullets[b] = new c_AlienBullet(0, 0, 3, 'red', 5);
    }
}

function f_initStars(){
    let l_starColors = ['#5c5c5c', '#a3a3a3']
    for (let i=0; i<g_stars.length; i++){
        // initiate stars
        let l_x = parseInt((Math.random() * (g_canvas.width - 50)) + 50);
        let l_y = parseInt((Math.random() * (g_canvas.height)));
        let l_sx = (l_x > g_canvas.width/2) ? 1 : -1;
        let l_sy = parseInt((Math.random() * 3) + 1);
        // (Math.abs(l_sx) > Math.abs(l_sy)) ? l_sy = 0 : l_sx = 0;
        l_sx = 0
        //l_sy = parseInt((Math.random() * 5) + 1) * l_sy;
        g_stars[i] = new c_star(
            l_x,
            l_y,
            parseFloat((Math.random() * 1) + 0.01),
            l_starColors[parseInt(Math.random() * l_starColors.length)],
            l_sy
        )
    }
}

// Create an array with alliens in it
function f_createAliens(){
    let l_row = 1;
    let l_x = undefined;
    let l_y = undefined;
    let l_alienID = undefined;
    g_aliens = new Array(g_numAliensPerRow * g_numAlienRows);
    for (let i=0; i< g_aliens.length; i++){
        i = parseInt(i);
        (i+1 > g_numAliensPerRow * l_row) ? l_row++ : null;
        l_column = ((i+1) - ((l_row - 1) * g_numAliensPerRow));
        l_alienID = (l_row -1);
        l_x = g_leftPadding + (l_column) * (g_spaceBetAliens) + (l_column - 1) * (g_pixelWidth * g_gridCols);
        l_y = 200 + (l_row - 1) * (g_pixelWidth * g_gridCols);
        g_aliens[i] = new c_grid(
            g_aliensBMPArray[l_alienID],
            l_x,
            l_y,
            13,
            13,
            g_alienColors[l_alienID],
            g_pixelWidth,
            l_row,
            l_column,
            g_aliensBMPArray2[l_alienID],
            g_explosionBmpArray
        )
        g_aliens[i].m_initPixels();
        g_aliveAliens[i] = i;
    }
    // console.log('Done creating aliens')
}

function f_checkForGameOver(){
    // checks if game is over
    if (g_currentScreen){
        if (g_playerLife <= 0){
            g_gameOver    = true;
            g_gameRunning = false;
            g_gameMsg     = [0, "You Failed!"];
        } else {
            for (let a = g_aliens.length -1; a>=0; a--){
                if (g_aliens[a].pixels[g_aliens[a].pixelCount].y >= g_canvas.height - 300) {
                    g_gameOver    = true;
                    g_gameRunning = false;
                    g_gameMsg     = [0, "You Failed!"];
                    return;
                } else if (g_aliens[a].alive){
                    return;
                }
            }
            g_gameOver    = true;
            g_gameRunning = false;
            g_gameMsg     = [1, "Level Completed Successfully!!"];
        } 
    }
    
}

function f_spawnPlayer(){
    // calculate the y co-ordinate of the player spaceship
    let l_player_spaceShip_y = g_canvas.height - Math.sqrt(g_playerSpaceshipbmpArray.length) - 120;
    
    // create player spaceship
    g_playerSpaceShip = new c_grid(g_playerSpaceshipbmpArray, 100, l_player_spaceShip_y, 13, 13, [[120, 170, 0], [200, 227, 121]], 5);
    
    // init pixels
    g_playerSpaceShip.m_initPixels();
    
    // reduce one life 
    g_playerLife--;
    
    // create the player life objects
    let l_leftpadding = 90;
    let l_pixelWidth = 2;
    g_playerLifeObjects = new Array(g_playerLife)
    for (let i = 0; i<g_playerLife; i++){
        g_playerLifeObjects[i] = new c_grid(
            g_heartBmpArray,
            l_leftpadding + i * l_pixelWidth * 16,
            g_canvas.height - 60,
            13,
            13,
            [[255, 0, 0], [210, 252, 3]],
            l_pixelWidth
        )
        
        g_playerLifeObjects[i].m_initPixels();
    }
}

function f_clearScreen(){
    g_context.fillStyle = "#060214";
    g_context.strokeStyle = "#0e0630";
    g_context.lineWidth = 10;
    g_context.fillRect(0, 0, g_canvas.width, g_canvas.height);
    g_context.strokeRect(0, 0, g_canvas.width, g_canvas.height);
    g_context.lineWidth = 1;
}

function f_shootFromAlien(){
    // drop bullets from allien after every x amount of time
    if (g_frameCount % g_frameCountForAlienToShoot == 0){
        for (let a = g_aliens.length-1; a>=0; a-- ){
            if (g_aliens[a].alive){
                for (let b in g_alienBullets){
                    if (!g_alienBullets[b].active){
                        // init bullet
                        g_alienBullets[b].x = g_aliens[parseInt(g_aliveAliens[parseInt(Math.random() * g_aliveAliens.length)])].pixels[3].x;
                        g_alienBullets[b].y = g_aliens[a].pixels[g_aliens[a].pixelCount].y;
                        g_alienBullets[b].active = true;
                        return;
                    }
                }
            }
        }
    }
    
}

function f_move(){
    if (g_currentScreen){
        f_movePlayer();
        f_moveMotherShip();
        f_moveAliens();
        for (let b in g_bullets){
            g_bullets[b].m_move();
        }
        for (let b in g_alienBullets){
            g_alienBullets[b].m_move();
        }
    }
    for (let s in g_stars){
        g_stars[s].m_move();
    }
}

function f_movePlayer(){
    // Handles player movements
    if (g_moveLeft || g_moveRight){
        let l_speed = (g_moveRight && g_playerSpaceShip.pixels[g_playerSpaceShip.pixelCount].x + 10 < g_canvas.width) ? 10 : (g_moveLeft && g_playerSpaceShip.pixels[0].x - 10 > 0) ? -10 : 0;
        g_playerSpaceShip.m_move(l_speed, 0);
    }
}

function f_moveMotherShip(){
    // This function controls the movement of the mothership
    g_motherShipSpeed = (g_motherShip.pixels[0].x < -320) ? Math.abs(g_motherShipSpeed) : (g_motherShip.pixels[g_motherShip.pixels.length-1].x > g_canvas.width + 420) ? Math.abs(g_motherShipSpeed) * -1 : g_motherShipSpeed;
    g_motherShip.m_move(g_motherShipSpeed, 0);
}

function f_moveAliens(){
    // This function controls how the alien moves
    let l_alienLeft = g_aliens.length -1;
    let l_alienRight = 0;
    if (g_frameCount%30 == 0){
        if (g_moveAliensDown){
            
            // move the aliens down
            for (let a in g_aliens){
                g_aliens[a].m_move(0,10);
                g_aliens[a].state = !(g_aliens[a].state)
            }
            g_alienMoveSpeed = Math.sign(g_alienMoveSpeed) * (Math.abs(g_alienMoveSpeed) + 1)
            g_moveAliensDown = false;
            
        } else {
            // animate and other stuffs
            for (let a in g_aliens){
                if (g_aliens[a].alive){
                    g_aliens[a].state = !(g_aliens[a].state)
                    if (g_aliens[a].column > g_aliens[l_alienRight].column) l_alienRight = a;
                    if (g_aliens[a].column < g_aliens[l_alienLeft].column) l_alienLeft = a;
                    g_aliens[a].m_move(g_alienMoveSpeed, 0);
                }
            }

            // boundary collision
            if (g_aliens[l_alienRight].pixels[g_aliens[l_alienRight].pixelCount].x >= g_canvas.width - 50){
                g_alienMoveSpeed = Math.abs(g_alienMoveSpeed) * -1;
                g_moveAliensDown = true;
                // increase alien bombing speed
                g_frameCountForAlienToShoot -= 1;
            } else if (g_aliens[l_alienLeft].pixels[0].x <= 50){
                g_alienMoveSpeed = Math.abs(g_alienMoveSpeed);
                g_moveAliensDown = true;
                // increase the alien bombing speed
                g_frameCountForAlienToShoot -= 1;
            }
        }
    }
    
    
    
}

function f_calculateTime(){
    g_frameCount++
}

function f_shoot(){
    if (g_shoot && (g_frameCount - g_lastShootFrame >= g_coolDownFrameCount)){
        for (let b in g_bullets){
            if (!g_bullets[b].active){
                // calculate the x and y to init the bullet from
                g_bullets[b].x = g_playerSpaceShip.pixels[0].x + (Math.ceil(g_gridCols/2) * g_pixelWidth) + g_pixelWidth * 3;
                g_bullets[b].y = g_playerSpaceShip.pixels[0].y + 2 * g_pixelWidth;
                
                // activate the bullet
                g_bullets[b].active = true;
                g_lastShootFrame = g_frameCount;
                // console.log(`Bullet ${b} has been shot`);
                break;
            }
        }
        // g_shoot = false;
    }
}

function f_drawObjects(){
    // draw stars
    for (let s in g_stars){
        g_stars[s].m_draw(g_context);
    }
    
    // write the logo
    g_context.font = "60px VT323";
    g_context.textAlign = "center";
    g_context.shadowColor = g_context.strokeStyle = "#a210e0";
    //g_context.fillStyle = "black";
    g_context.shadowBlur = 15;
    //g_context.fillText('S P A C E   I N V A D E R S', g_canvas.width/2, 50);
    g_context.strokeText('S P A C E   I N V A D E R S', g_canvas.width/2, 50);
    g_context.textAlign = "left";
    g_context.shadowBlur = 0;
    g_context.shadowColor = "transparent"
    
    if (!g_gameOver && g_currentScreen){
        // Draw aliens
        for (let a in g_aliens){
            g_aliens[a].m_draw(g_context);
        }
        // Draw player bullets
        for (let b in g_bullets){
            g_bullets[b].m_draw(g_context);
        }
        // Draw alien bullets
        for (let b in g_alienBullets){
            g_alienBullets[b].m_draw(g_context);
        }
        // Draw Shields
        for (let s in g_shield){
            g_shield[s].m_draw(g_context);
        }

        // Draw mothership and player space ship
        g_motherShip.m_draw(g_context); 
        g_playerSpaceShip.m_draw(g_context);

        // Draw the bottom bar
        g_context.fillStyle = "#0e0630";
        g_context.fillRect(0, g_canvas.height - 100, g_canvas.width, 100);

        // Write player heart
        g_context.font = "20px VT323";
        g_context.fillStyle = "orange";
        g_context.fillText('L I F E: ', 10, g_canvas.height - 40);

        // Draw hearts
        for (let h in g_playerLifeObjects){
            g_playerLifeObjects[h].m_draw(g_context);
        }

        // Write score
        g_context.textAlign = "center";
        g_context.fillStyle = "lime";
        g_context.fillText('S C O R E: ' + g_score, g_canvas.width/2, g_canvas.height - 40);
        g_context.textAlign = "left";

        // write level
        g_context.textAlign = "right";
        g_context.fillStyle = "aqua";
        g_context.fillText('L E V E L: ' + g_level, g_canvas.width - 10, g_canvas.height - 40);
        g_context.textAlign = "left";
    
    } else if(g_gameOver) {
        
        // Game over msg
        g_context.textAlign = "center";
        g_context.shadowColor = g_context.fillStyle = "aqua";
        g_context.font = "50px VT323";
        g_context.shadowBlur = 5;
        g_context.fillText('G A M E   O V E R', g_canvas.width/2, g_canvas.height/2);
        g_context.shadowColor = g_context.fillStyle = (g_gameMsg[0]) ? 'lime' : 'red';
        g_context.font = "30px VT323";
        g_context.fillText(g_gameMsg[1], g_canvas.width/2, g_canvas.height/2 + 50);
        g_context.textAlign = "left";
        g_context.shadowColor = "transparent";
        g_context.shadowBlur = 0;
    } else if (!g_currentScreen){
        g_context.shadowColor = g_context.fillStyle = "aqua";
        g_context.textAlign = "center";
        g_context.font = "50px VT323";
        g_context.shadowBlur = 5;
        g_context.fillText('PRESS [ENTER] TO BEGIN', g_canvas.width/2, g_canvas.height/2);
    }
    
}

document.addEventListener('keydown', (l_event) => {
    switch(l_event.key.toLowerCase()){
        case 'arrowright':
            g_moveRight = true;
            break;
        case 'arrowleft':
            g_moveLeft = true;
            break;
        case ' ':
            g_shoot = true;
            break;
    }
});

document.addEventListener('keyup', (l_event) => {
    switch(l_event.key.toLowerCase()){
        case 'arrowright':
            g_moveRight = false;
            break;
        case 'arrowleft':
            g_moveLeft = false;
            break;
        case ' ':
            g_shoot = false;
            break;
    }
});

document.addEventListener('keypress', (l_event) => {
    if (l_event.key.toLowerCase() == 'enter'){
        (!g_currentScreen) ? g_currentScreen = 1 : null;
    }
})



function f_gameLoop(){
    f_calculateTime();  
    f_checkForGameOver();
    f_shoot();
    f_shootFromAlien();
    f_move();
    f_checkCollision();
    f_clearScreen();
    f_drawObjects();
}

function f_init(){
    // create aliens
    f_createAliens();
    f_createBullets();
    
    // create mothership
    g_motherShip = new c_grid(g_motherShipbmpArray, 400, 50, 13, 13, [[104, 208, 232], [231, 144, 245]], 5, 0, 0, false, g_explosionBmpArray);
    
    // create shields
    for (let s=0; s<3; s++){
        // calculate the shield's x and y co-ordinates
        let l_pixelSize = 5;
        let l_x = ((g_canvas.width/3) - (13 * l_pixelSize))/4 + (s * g_canvas.width/3)
        
        g_shield[s] = new c_shield(l_x, 
                                    g_canvas.height - 300, 
                                    [g_shieldBmpArray[1], 
                                        g_shieldBmpArray[0],
                                        g_shieldBmpArray[2],
                                        g_shieldBmpArray[0],
                                        g_shieldBmpArray[3],
                                        g_shieldBmpArray[0]],
                                    '#4d10b5',
                                    3);
        
        // initiate the shield
        g_shield[s].m_initObject();
    }
    // initate objects
    g_motherShip.m_initPixels();
    
    // spawn player
    f_spawnPlayer();
    
    // init stars
    f_initStars();
}
f_init();
var g_gameLoop = setInterval(f_gameLoop, g_timeFrame);