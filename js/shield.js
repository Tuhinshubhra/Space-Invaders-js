function c_shield(l_x, l_y, l_shieldBmpArray, l_color, l_pixelWidth){
	this.x = l_x;
	this.y = l_y;
	this.color = l_color;
	this.pixelWidth = l_pixelWidth;
	this.bmpArray = l_shieldBmpArray;
	this.parts = new Array(6);
	this.lives = new Array(6);
	
	this.m_initObject = () => {
		for (let p = 0; p<6; p++){
			// calculate the x and y 
			let l_x = ((((p > 2) ? p -3 : p) + 1) * this.pixelWidth * 13) + this.x;
			let l_y = (p > 2) ? this.y + (13 * this.pixelWidth) : this.y;
				
			// create a grid object
			this.parts[p] = new c_grid(this.bmpArray[p], l_x, l_y, 13, 13, this.color, this.pixelWidth);
			
			// init pixels of that part
			this.parts[p].m_initPixels();
			
			// Give each part 3 lives execpt the 4th one which is empty
			this.lives[p] = (p != 4) ? 3 : 0;
		}
	}
	
	this.m_draw = (l_context) => {
		for (let p in this.parts){
			if (this.lives[p]){
				this.parts[p].m_draw(l_context);
			}
		}
	}
	
	this.m_destroy = (l_part) => {
		// randomly 0 out 1/3rd of the part
		let l_validPixels = [];
		for (let p in this.parts[l_part].pixels) (this.parts[l_part].pixels[p].type != 0) ? l_validPixels.push(p) : null;
		
		let l_pixelToDestroy = new Array(parseInt(l_validPixels.length/2));
		let l_pixelId = undefined;
		for (let i=0; i<l_pixelToDestroy.length; i++){
			l_pixelId = l_validPixels[parseInt(Math.random() * l_validPixels.length)];
			l_pixelToDestroy[i] = l_pixelId;
			l_validPixels.splice(l_pixelId, 1);
		}
		// let's zero out them pixels
		for (let pp in l_pixelToDestroy){
			this.parts[l_part].pixels[l_pixelToDestroy[pp]].type = 0;
		}
	}
}