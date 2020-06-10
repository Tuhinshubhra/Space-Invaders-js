// bitmap arrays
g_aliensBMPArray = new Array(4);
g_aliensBMPArray2 = new Array(4);

g_aliensBMPArray[0] =  [0,0,0,0,0,0,0,0,0,0,0,0,0,
                        0,0,0,1,0,0,0,0,0,1,0,0,0,
                        0,0,0,0,1,0,0,0,1,0,0,0,0,
                        0,0,0,1,1,1,1,1,1,1,0,0,0,
                        0,0,1,1,0,1,1,1,0,1,1,0,0,
                        0,1,1,1,1,1,1,1,1,1,1,1,0,
                        0,1,0,1,1,1,1,1,1,1,0,1,0,
                        0,1,0,1,1,1,1,1,1,1,0,1,0,
                        0,1,0,1,0,0,0,0,0,1,0,1,0,
                        0,0,0,0,1,1,0,1,1,0,0,0,0,
                        0,0,0,0,0,0,0,0,0,0,0,0,0,
                        0,0,0,0,0,0,0,0,0,0,0,0,0,
                        0,0,0,0,0,0,0,0,0,0,0,0,0]

g_aliensBMPArray2[0] = [0,0,0,0,0,0,0,0,0,0,0,0,0,
                        0,0,0,1,0,0,0,0,0,1,0,0,0,
                        0,1,0,0,1,0,0,0,1,0,0,1,0,
                        0,1,0,1,1,1,1,1,1,1,0,1,0,
                        0,1,1,1,0,1,1,1,0,1,1,1,0,
                        0,1,1,1,1,1,1,1,1,1,1,1,0,
                        0,0,0,1,1,1,1,1,1,1,0,0,0,
                        0,0,0,1,1,1,1,1,1,1,0,0,0,
                        0,0,0,1,0,0,0,0,0,1,0,0,0,
                        0,1,1,0,0,0,0,0,0,0,1,1,0,
                        0,0,0,0,0,0,0,0,0,0,0,0,0,
                        0,0,0,0,0,0,0,0,0,0,0,0,0,
                        0,0,0,0,0,0,0,0,0,0,0,0,0]

g_aliensBMPArray[1] =  [0,0,0,0,0,1,1,1,0,0,0,0,0,
                        0,0,0,1,1,1,1,1,1,1,0,0,0,
                        0,1,1,1,1,1,1,1,1,1,1,1,0,
                        0,1,0,0,0,1,1,1,0,0,0,1,0,
                        0,1,1,1,1,1,1,1,1,1,1,1,0,
                        0,1,1,1,1,1,1,1,1,1,1,1,0,
                        0,1,1,1,1,0,0,0,1,1,1,1,0,
                        0,0,0,1,0,1,1,1,0,1,0,0,0,
                        0,0,1,0,0,0,0,0,0,0,1,0,0,
                        0,1,0,0,0,0,0,0,0,0,0,1,0,
                        0,0,0,0,0,0,0,0,0,0,0,0,0,
                        0,0,0,0,0,0,0,0,0,0,0,0,0,
                        0,0,0,0,0,0,0,0,0,0,0,0,0]

g_aliensBMPArray2[1] = [0,0,0,0,0,1,1,1,0,0,0,0,0,
                        0,0,0,1,1,1,1,1,1,1,0,0,0,
                        0,1,1,1,1,1,1,1,1,1,1,1,0,
                        0,1,0,0,0,1,1,1,0,0,0,1,0,
                        0,1,1,1,1,1,1,1,1,1,1,1,0,
                        0,1,1,1,1,1,1,1,1,1,1,1,0,
                        0,1,1,1,1,0,0,0,1,1,1,1,0,
                        0,0,0,1,0,1,0,1,0,1,0,0,0,
                        0,0,0,1,0,1,0,1,0,1,0,0,0,
                        0,0,0,1,0,0,1,0,0,1,0,0,0,
                        0,0,0,0,0,0,0,0,0,0,0,0,0,
                        0,0,0,0,0,0,0,0,0,0,0,0,0,
                        0,0,0,0,0,0,0,0,0,0,0,0,0]


g_aliensBMPArray[2] =  [0,0,0,0,0,0,0,0,0,0,0,0,0,
                        0,0,0,0,0,1,1,1,0,0,0,0,0,
                        0,0,0,0,1,1,1,1,1,0,0,0,0,
                        0,0,0,1,1,1,1,1,1,1,0,0,0,
                        0,0,1,1,0,1,1,1,0,1,1,0,0,
                        0,0,1,1,1,1,1,1,1,1,1,0,0,
                        0,0,0,0,1,0,0,0,1,0,0,0,0,
                        0,0,0,1,0,1,1,1,0,1,0,0,0,
                        0,0,1,0,1,0,0,0,1,0,1,0,0,
                        0,0,1,0,1,0,0,0,1,0,1,0,0,
                        0,0,1,0,0,0,0,0,0,0,1,0,0,
                        0,0,0,0,0,0,0,0,0,0,0,0,0,
                        0,0,0,0,0,0,0,0,0,0,0,0,0]

g_aliensBMPArray2[2] = [0,0,0,0,0,0,0,0,0,0,0,0,0,
                        0,0,0,0,0,1,1,1,0,0,0,0,0,
                        0,0,0,0,1,1,1,1,1,0,0,0,0,
                        0,0,0,1,1,1,1,1,1,1,0,0,0,
                        0,0,1,1,0,1,1,1,0,1,1,0,0,
                        0,0,1,1,1,1,1,1,1,1,1,0,0,
                        0,0,0,0,1,0,0,0,1,0,0,0,0,
                        0,0,0,1,0,1,1,1,0,1,0,0,0,
                        0,0,1,0,1,0,0,0,1,0,1,0,0,
                        0,1,0,0,0,1,0,1,0,0,0,1,0,
                        1,0,0,0,0,0,0,0,0,0,0,0,1,
                        0,0,0,0,0,0,0,0,0,0,0,0,0,
                        0,0,0,0,0,0,0,0,0,0,0,0,0]

g_aliensBMPArray[3] =  [0,0,0,0,0,0,0,0,0,0,0,0,0,
                        0,0,0,0,0,1,1,1,0,0,0,0,0,
                        0,0,1,1,1,1,1,1,1,1,1,0,0,
                        0,1,1,1,1,1,1,1,1,1,1,1,0,
                        0,1,1,1,1,1,1,1,1,1,1,1,0,
                        0,1,1,0,0,1,1,1,0,0,1,1,0,
                        0,1,1,1,1,1,1,1,1,1,1,1,0,
                        0,0,0,0,1,0,0,0,1,0,0,0,0,
                        0,0,0,1,0,1,1,1,0,1,0,0,0,
                        0,0,0,1,0,0,0,0,0,1,0,0,0,
                        0,0,1,0,0,0,0,0,0,0,1,0,0,
                        0,1,0,0,0,0,0,0,0,0,0,1,0,
                        0,0,0,0,0,0,0,0,0,0,0,0,0]

g_aliensBMPArray2[3] = [0,0,0,0,0,0,0,0,0,0,0,0,0,
                        0,0,0,0,0,1,1,1,0,0,0,0,0,
                        0,0,1,1,1,1,1,1,1,1,1,0,0,
                        0,1,1,1,1,1,1,1,1,1,1,1,0,
                        0,1,1,1,1,1,1,1,1,1,1,1,0,
                        0,1,1,0,0,1,1,1,0,0,1,1,0,
                        0,1,1,1,1,1,1,1,1,1,1,1,0,
                        0,0,0,1,1,0,0,0,1,1,0,0,0,
                        0,0,1,1,0,1,1,1,0,1,1,0,0,
                        0,0,0,1,0,0,0,0,0,1,0,0,0,
                        0,0,0,0,1,1,0,1,1,0,0,0,0,
                        0,0,0,0,0,0,0,0,0,0,0,0,0,
                        0,0,0,0,0,0,0,0,0,0,0,0,0]

g_motherShipbmpArray = [0,0,0,0,0,0,0,0,0,0,0,0,0,
                        0,0,0,0,0,0,0,0,0,0,0,0,0,
                        0,0,0,0,0,1,1,1,0,0,0,0,0,
                        0,0,0,1,1,1,1,1,1,1,0,0,0,
                        0,0,1,1,1,1,1,1,1,1,1,0,0,
                        0,1,1,0,1,0,1,0,1,0,1,1,0,
                        1,1,1,1,1,1,1,1,1,1,1,1,1,
                        0,0,1,1,1,0,0,0,1,1,1,0,0,
                        0,0,0,1,0,0,0,0,0,1,0,0,0,
                        0,0,0,0,0,0,0,0,0,0,0,0,0,
                        0,0,0,0,0,0,0,0,0,0,0,0,0,
                        0,0,0,0,0,0,0,0,0,0,0,0,0,
                        0,0,0,0,0,0,0,0,0,0,0,0,0]

/*g_playerSpaceshipbmpArray =[0,0,0,0,0,0,0,0,0,0,0,0,0,
                            0,0,0,0,0,0,0,0,0,0,0,0,0,
                            0,0,0,0,0,0,0,0,0,0,0,0,0,
                            0,0,0,0,0,0,1,0,0,0,0,0,0,
                            0,0,0,0,0,1,1,1,0,0,0,0,0,
                            0,0,0,0,1,1,1,1,1,0,0,0,0,
                            0,0,0,1,0,1,0,1,0,1,0,0,0,
                            0,0,1,0,1,0,1,0,1,0,1,0,0,
                            0,1,0,1,0,1,0,1,0,1,0,1,0,
                            1,1,1,1,1,1,1,1,1,1,1,1,1,
                            1,1,1,1,1,1,1,1,1,1,1,1,1,
                            0,0,0,0,0,0,0,0,0,0,0,0,0,
                            0,0,0,0,0,0,0,0,0,0,0,0,0]
                            */
g_playerSpaceshipbmpArray = [0,0,0,0,0,0,1,0,0,0,0,0,0,
                             0,0,0,0,0,1,1,1,0,0,0,0,0,
                             0,0,0,0,1,1,1,1,1,0,0,0,0,
                             0,0,0,1,0,1,1,1,0,1,0,0,0,
                             0,0,1,1,1,1,1,1,1,1,1,0,0,
                             0,1,1,1,1,1,1,1,1,1,1,1,0,
                             0,1,1,1,1,1,1,1,1,1,1,1,0,
                             0,0,0,0,0,0,0,0,0,0,0,0,0,
                             0,0,0,0,0,0,0,0,0,0,0,0,0,
                             0,0,0,0,0,0,0,0,0,0,0,0,0,
                             0,0,0,0,0,0,0,0,0,0,0,0,0,
                             0,0,0,0,0,0,0,0,0,0,0,0,0,
                             0,0,0,0,0,0,0,0,0,0,0,0,0]

g_explosionBmpArray = [0,0,0,0,0,1,0,1,0,0,0,0,0,
                       0,0,0,0,0,0,1,0,0,0,0,0,0,
                       0,0,1,0,0,0,0,0,0,0,1,0,0,
                       0,0,0,1,0,1,1,1,0,1,0,0,0,
                       0,0,0,0,1,0,0,0,1,0,0,0,0,
                       1,0,0,1,0,0,0,0,0,1,0,0,1,
                       0,1,0,1,0,0,1,0,0,1,0,1,0,
                       1,0,0,1,0,0,0,0,0,1,0,0,1,
                       0,0,0,0,1,0,0,0,1,0,0,0,0,
                       0,0,0,1,0,1,1,1,0,1,0,0,0,
                       0,0,1,0,0,0,0,0,0,0,1,0,0,
                       0,0,0,0,0,0,1,0,0,0,0,0,0,
                       0,0,0,0,0,1,0,1,0,0,0,0,0]

g_shieldBmpArray = [
	[1,1,1,1,1,1,1,1,1,1,1,1,1,
	 1,1,1,1,1,1,1,1,1,1,1,1,1,
	 1,1,1,1,1,1,1,1,1,1,1,1,1,
	 1,1,1,1,1,1,1,1,1,1,1,1,1,
	 1,1,1,1,1,1,1,1,1,1,1,1,1,
	 1,1,1,1,1,1,1,1,1,1,1,1,1,
	 1,1,1,1,1,1,1,1,1,1,1,1,1,
	 1,1,1,1,1,1,1,1,1,1,1,1,1,
	 1,1,1,1,1,1,1,1,1,1,1,1,1,
	 1,1,1,1,1,1,1,1,1,1,1,1,1,
	 1,1,1,1,1,1,1,1,1,1,1,1,1,
	 1,1,1,1,1,1,1,1,1,1,1,1,1,
	 1,1,1,1,1,1,1,1,1,1,1,1,1],

	[0,0,0,0,0,0,0,0,0,0,0,0,1,
	 0,0,0,0,0,0,0,0,0,0,0,1,1,
	 0,0,0,0,0,0,0,0,0,0,1,1,1,
	 0,0,0,0,0,0,0,0,0,1,1,1,1,
	 0,0,0,0,0,0,0,0,1,1,1,1,1,
	 0,0,0,0,0,0,0,1,1,1,1,1,1,
	 0,0,0,0,0,0,1,1,1,1,1,1,1,
	 0,0,0,0,0,1,1,1,1,1,1,1,1,
	 0,0,0,0,1,1,1,1,1,1,1,1,1,
	 0,0,0,1,1,1,1,1,1,1,1,1,1,
	 0,0,1,1,1,1,1,1,1,1,1,1,1,
	 0,1,1,1,1,1,1,1,1,1,1,1,1,
	 1,1,1,1,1,1,1,1,1,1,1,1,1],

	[1,0,0,0,0,0,0,0,0,0,0,0,0,
	 1,1,0,0,0,0,0,0,0,0,0,0,0,
	 1,1,1,0,0,0,0,0,0,0,0,0,0,
	 1,1,1,1,0,0,0,0,0,0,0,0,0,
	 1,1,1,1,1,0,0,0,0,0,0,0,0,
	 1,1,1,1,1,1,0,0,0,0,0,0,0,
	 1,1,1,1,1,1,1,0,0,0,0,0,0,
	 1,1,1,1,1,1,1,1,0,0,0,0,0,
	 1,1,1,1,1,1,1,1,1,0,0,0,0,
	 1,1,1,1,1,1,1,1,1,1,0,0,0,
	 1,1,1,1,1,1,1,1,1,1,1,0,0,
	 1,1,1,1,1,1,1,1,1,1,1,1,0,
	 1,1,1,1,1,1,1,1,1,1,1,1,1],
	
	[0,0,0,0,0,0,0,0,0,0,0,0,0,
	 0,0,0,0,0,0,0,0,0,0,0,0,0,
	 0,0,0,0,0,0,0,0,0,0,0,0,0,
	 0,0,0,0,0,0,0,0,0,0,0,0,0,
	 0,0,0,0,0,0,0,0,0,0,0,0,0,
	 0,0,0,0,0,0,0,0,0,0,0,0,0,
	 0,0,0,0,0,0,0,0,0,0,0,0,0,
	 0,0,0,0,0,0,0,0,0,0,0,0,0,
	 0,0,0,0,0,0,0,0,0,0,0,0,0,
	 0,0,0,0,0,0,0,0,0,0,0,0,0,
	 0,0,0,0,0,0,0,0,0,0,0,0,0,
	 0,0,0,0,0,0,0,0,0,0,0,0,0,
	 0,0,0,0,0,0,0,0,0,0,0,0,0]
]

g_heartBmpArray = [0,0,0,0,0,0,0,0,0,0,0,0,0,
 0,0,0,1,1,0,0,0,1,1,0,0,0,
 0,0,1,0,1,1,0,1,1,0,1,0,0,
 0,1,1,0,0,1,1,1,0,0,1,1,0,
 1,1,0,0,0,0,0,0,0,0,0,1,1,
 0,1,1,0,0,0,0,0,0,0,1,1,0,
 0,0,1,1,0,0,0,0,0,1,1,0,0,
 0,0,0,1,1,0,0,0,1,1,0,0,0,
 0,0,0,0,1,1,0,1,1,0,0,0,0,
 0,0,0,0,0,1,1,1,0,0,0,0,0,
 0,0,0,0,0,0,1,0,0,0,0,0,0,
 0,0,0,0,0,0,0,0,0,0,0,0,0,
 0,0,0,0,0,0,0,0,0,0,0,0,0]