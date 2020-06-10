function c_pixel(l_x, l_y, l_color, l_width, l_type){
    // pixel properties
    this.x = l_x;
    this.y = l_y;
    this.width = l_width;
    this.type = l_type;
    this.color = l_color;

    // pixel methods
    this.m_draw = (l_context) => {
        if (this.type){
            l_context.fillStyle = this.color;
            l_context.fillRect(this.x, this.y, this.width, this.width);
        }
    }
}