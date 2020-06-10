function c_star(l_x, l_y, l_radius, l_color, l_sy){
    this.x = l_x;
    this.y = l_y;
    this.radius = l_radius;
    this.initialRadius = l_radius;
    this.color = l_color;
    this.speedy = l_sy;

    this.m_draw = (l_context) => {
        l_context.fillStyle = this.color;
        l_context.beginPath();
        l_context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        l_context.fill();
    }

    this.m_move = () => {
        //this.x += this.speedx;
        //this.y += this.speedy;
        this.radius += this.speedy/100;
        
        if (this.radius >= 1.5){
            this.radius = this.initialRadius;
            this.x = parseInt((Math.random() * (g_canvas.width - 50)) + 50);
            this.y = parseInt((Math.random() * (g_canvas.height)));
        }
    }

}
