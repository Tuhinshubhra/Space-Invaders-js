function c_grid(l_gridArray, l_x, l_y, l_row, l_columns, l_colors, l_pixelWidth, l_grow, l_gcolumn, l_secondGridArray, l_explosionGridArray){

    // gird properties
    this.x                 = l_x;
    this.y                 = l_y;
    this.rows              = l_row;
    this.columns           = l_columns;
    this.colors            = l_colors;
    this.pixels            = new Array(l_gridArray.length);
    this.bitmapArray       = l_gridArray;
    this.pixelWidth        = l_pixelWidth;
	this.pixelCount        = l_gridArray.length - 1; // the last index of the bitmap aray
    this.speed             = 5;
    this.moveRight         = false;
    this.moveLeft          = false;
    this.row               = l_row;
    this.column            = l_column;
    this.alive             = true;
    this.bitmapArray2      = l_secondGridArray;
    this.pixels2           = undefined;
    this.explosionBmpArray = l_explosionGridArray;
    this.pixelExp          = undefined;
    this.dead              = false; // set to true once the explosion is shown
    this.deathOnFrame      = 0; // the frame it died, used to show the explosion for 3 frames
    this.state             = true; // used for animating the charecters, true is default and false is the second bmp array

    // grid methods
    this.m_initPixels = () => {
        // create pixel objects based on the bitmap object array
        let l_row    = 1;
        let l_column = undefined;
        let l_colors = (this.colors.length == 2) ?  this.m_genColorSequence(this.colors[0], this.colors[1], this.columns) : this.colors;

        (this.bitmapArray2) ? this.pixels2 = new Array(this.bitmapArray2.length) : null;
        (this.explosionBmpArray) ? this.pixelExp = new Array(this.explosionBmpArray.length) : null;

        for (let i in this.bitmapArray){
            // rows and columns calculation
            i = parseInt(i);
            (i+1 > l_row*this.columns) ? l_row++ : null;
            l_column = ((i+1) - ((l_row-1)*this.columns));

            // create the pixel object
            this.pixels[i] = new c_pixel(
                this.x + (l_column-1) * this.pixelWidth, // X co-ordinate
                this.y + this.pixelWidth * (l_row-1),    // Y co-ordinate
                (this.bitmapArray[i]) ? ((typeof(l_colors) == "string") ? this.colors : "rgb(" + l_colors[l_column].join(",") + ")" ): "black", // color
                this.pixelWidth, // width
                this.bitmapArray[i]
                );
            
            // create second pixel objects if there is another bitmap array
            if (this.bitmapArray2){
                this.pixels2[i] = new c_pixel(
                    this.x + (l_column-1) * this.pixelWidth, // X co-ordinate
                    this.y + this.pixelWidth * (l_row-1),    // Y co-ordinate
                    (this.bitmapArray2[i]) ? ((typeof(l_colors) == "string") ? this.colors : "rgb(" + l_colors[l_column].join(",") + ")" ): "black", // color
                    this.pixelWidth, // width
                    this.bitmapArray2[i]
                    );
            }
            
            // create explosion bitmap array
            if (this.explosionBmpArray){
                this.pixelExp[i] = new c_pixel(
                    this.x + (l_column-1) * this.pixelWidth, // X co-ordinate
                    this.y + this.pixelWidth * (l_row-1),    // Y co-ordinate
                    (this.explosionBmpArray[i]) ? ((typeof(l_colors) == "string") ? this.colors : "rgb(" + l_colors[l_column].join(",") + ")" ): "black", // color
                    this.pixelWidth, // width
                    this.explosionBmpArray[i]
                    );
            }
        }
    }

    this.m_draw = (l_context) => {    
        if (this.alive){
           for (let i in this.pixels){
               if (!this.state && this.bitmapArray2){
				   // draw normal state
                   this.pixels2[i].m_draw(l_context);
               } else {
				   // draw animated state
                   this.pixels[i].m_draw(l_context)   
               }
            } 
        } else if (!this.dead) {
            if (this.explosionBmpArray){
				// Draw the dead splash image
                l_context.shadowBlur = 7;
                l_context.shadowColor = "red";
                for (let p in this.pixelExp){
                    this.pixelExp[p].m_draw(l_context);
                }
                l_context.shadowBlur = 0;
                l_context.shadowColor = "transparent";
                this.deathOnFrame++
                if (this.deathOnFrame == 5){
                    // kill permanently
                    this.dead = true
                }
            }
        }
    }

    this.m_genColorSequence = (l_start, l_end, n) => {
        //Distance between each color
        var steps = [
        (l_end[0] - l_start[0]) / n,  
        (l_end[1] - l_start[1]) / n,  
        (l_end[2] - l_start[2]) / n  
        ];

        //Build array of colors
        var colors = [l_start];
        for(var ii = 0; ii < n - 1; ++ii) {
        colors.push([
            Math.floor(colors[ii][0] + steps[0]),
            Math.floor(colors[ii][1] + steps[1]),
            Math.floor(colors[ii][2] + steps[2])
        ]);
        }
        colors.push(l_end); 

        return colors;
    }

    this.m_move = (l_xspeed, l_yspeed) => {
        for (let p in this.pixels){
            this.pixels[p].x += l_xspeed;
            this.pixels[p].y += l_yspeed;
            if (this.pixels2){
                this.pixels2[p].x += l_xspeed;
                this.pixels2[p].y += l_yspeed;
            }
            if (this.pixelExp){
                this.pixelExp[p].x += l_xspeed;
                this.pixelExp[p].y += l_yspeed;
            }
        }
    }

}