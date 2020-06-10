function f_checkCollision(){
    if (g_currentScreen){
        // Alien bullet collision
        for (let b in g_alienBullets){
            if (g_alienBullets[b].active){
                // Collision with boundary
                if (g_alienBullets[b].y >= g_canvas.height){
                    g_alienBullets[b].active = false;
                }

                // Collision with shield
                for (let s in g_shield){
                    // check collision with the firxt pixel of first part and last pixel of 6th part
                    if ( (g_alienBullets[b].x >= g_shield[s].parts[0].pixels[0].x) && 
                         (g_alienBullets[b].x <= g_shield[s].parts[5].pixels[g_shield[s].parts[5].pixelCount].x) &&
                         (g_alienBullets[b].y >= g_shield[s].parts[0].pixels[0].y) && 
                         (g_alienBullets[b].y <= g_shield[s].parts[5].pixels[g_shield[s].parts[5].pixelCount].y)){

                            // so we know it collides with the bunker let's find out which part
                            for (let sp in g_shield[s].parts){
                                if ( g_shield[s].parts[sp].alive && ( g_alienBullets[b].x >= g_shield[s].parts[sp].pixels[0].x) && 
                                     (g_alienBullets[b].x <= g_shield[s].parts[sp].pixels[g_motherShip.pixelCount].x) &&
                                     (g_alienBullets[b].y >= g_shield[s].parts[sp].pixels[0].y) && 
                                     (g_alienBullets[b].y <= g_shield[s].parts[sp].pixels[g_motherShip.pixelCount].y)){
                                        // bullet and alien collision
                                        g_shield[s].lives[sp] -= 1;
                                        g_shield[s].m_destroy(sp);
                                        (g_shield[s].lives[sp] <= 0) ? g_shield[s].parts[sp].alive = false : null;
                                        g_alienBullets[b].active = false;
                                        break;
                                }
                            }
                    }
                }

                // Collision with player spaceship
                if ((g_alienBullets[b].x >= g_playerSpaceShip.pixels[0].x) && 
                     (g_alienBullets[b].x <= g_playerSpaceShip.pixels[g_playerSpaceShip.pixelCount].x) &&
                     (g_alienBullets[b].y >= g_playerSpaceShip.pixels[0].y) && 
                     (g_alienBullets[b].y <= g_playerSpaceShip.pixels[g_playerSpaceShip.pixelCount].y)){
                        // bullet and alien collision
                        g_playerSpaceShip.alive = false;
                        g_alienBullets[b].active = false;
                        f_spawnPlayer();
                        continue;
                }

            }
        }

        // check collision between player bullets => aliens, mothership and bunker
        for (let b in g_bullets){
            if (g_bullets[b].active){
                // Collision with boundary
                if (g_bullets[b].y <= 0){
                    g_bullets[b].active = false;
                    continue;
                }

                // Collision with aliens
                for (let a = g_aliens.length -1; a>=0; a--){
                    if (g_aliens[a].alive){
                         if ((g_bullets[b].x >= g_aliens[a].pixels[0].x) && 
                             (g_bullets[b].x <= g_aliens[a].pixels[g_aliens[a].pixelCount].x) &&
                             (g_bullets[b].y >= g_aliens[0].pixels[0].y) && 
                             (g_bullets[b].y <= g_aliens[a].pixels[g_aliens[a].pixelCount].y)){
                                // bullet and alien collision
                                g_aliens[a].alive = false;
                                g_aliveAliens.splice(a, 1);
                                g_bullets[b].active = false;
                                g_score += 1;
                                break;
                        }
                    }
                }

                // Collision with mothership
                if ((g_bullets[b].x >= g_motherShip.pixels[0].x) && 
                     (g_bullets[b].x <= g_motherShip.pixels[g_motherShip.pixelCount].x) &&
                     (g_bullets[b].y >= g_motherShip.pixels[0].y) && 
                     (g_bullets[b].y <= g_motherShip.pixels[g_motherShip.pixelCount].y)){
                        // bullet and alien collision
                        g_motherShip.alive = false;
                        g_bullets[b].active = false;
                        g_score += 10;
                        continue;
                }


                // Collision with shield
                for (let s in g_shield){
                    // check collision with the firxt pixel of first part and last pixel of 6th part
                    if ( (g_bullets[b].x >= g_shield[s].parts[0].pixels[0].x) && 
                         (g_bullets[b].x <= g_shield[s].parts[5].pixels[g_shield[s].parts[5].pixelCount].x) &&
                         (g_bullets[b].y >= g_shield[s].parts[0].pixels[0].y) && 
                         (g_bullets[b].y <= g_shield[s].parts[5].pixels[g_shield[s].parts[5].pixelCount].y)){

                            // so we know it collides with the bunker let's find out which part
                            for (let sp in g_shield[s].parts){
                                if ( g_shield[s].parts[sp].alive && ( g_bullets[b].x >= g_shield[s].parts[sp].pixels[0].x) && 
                                     (g_bullets[b].x <= g_shield[s].parts[sp].pixels[g_motherShip.pixelCount].x) &&
                                     (g_bullets[b].y >= g_shield[s].parts[sp].pixels[0].y) && 
                                     (g_bullets[b].y <= g_shield[s].parts[sp].pixels[g_motherShip.pixelCount].y)){
                                        // bullet and alien collision
                                        g_shield[s].lives[sp] -= 1;
                                        g_shield[s].m_destroy(sp);
                                        (g_shield[s].lives[sp] <= 0) ? g_shield[s].parts[sp].alive = false : null;
                                        g_bullets[b].active = false;
                                        break;
                                }
                            }
                    }
                }
            }
        }   
    }
}