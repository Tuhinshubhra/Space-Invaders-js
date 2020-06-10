function c_bullet(l_x, l_y, l_height, l_width, l_color){
    // bullet properties
    this.x = l_x;
    this.y = l_y;
    this.width = l_width;
    this.height = l_height;
    this.active = false;
    this.color = l_color;
    this.speed = 20;
    
    // bullet methods
    this.m_draw = (l_context) => {
        if (this.active){
            l_context.shadowBlur = 5;
            l_context.shadowColor = this.color;
            l_context.fillStyle = this.color;
            l_context.fillRect(this.x, this.y, this.width, this.height);
            l_context.shadowColor = 'transparent';
        }
    }
    
    this.m_move = () => {
        if (this.active){
            this.y -= this.speed;
        }
    }
}

function c_AlienBullet(l_x, l_y, l_radius, l_color, l_speed){
	// bullet properites
	this.x = l_x;
	this.y = l_y;
	this.radius = l_radius;
	this.color = l_color;
	this.speed = l_speed;
	this.active = false;
	
	// bullet methods
	this.m_draw = (l_context) => {
		if (this.active){
			l_context.save();
			l_context.shadowBlur = 5;
            l_context.shadowColor = this.color;
            l_context.fillStyle = this.color;
			l_context.beginPath();
			l_context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
			l_context.fill();
			l_context.restore();
		}
	}
	
	    this.m_move = () => {
			if (this.active){
				this.y += this.speed;
			}
		}
}