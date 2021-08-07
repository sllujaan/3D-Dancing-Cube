
export class Color {
    R = 0;
    G = 0;
    B = 0;
    shouldIncR = true;
    shouldIncG = true;
    shouldIncB = true;

    getRandomColor() {
        
        if (this.R >= 1.0) this.shouldIncR = false;
        if (this.R <= 0.01) this.shouldIncR = true;

        if (this.G >= 1.0) this.shouldIncG = false;
        if (this.G <= 0.001) this.shouldIncG = true;

        if (this.B >= 1.0) this.shouldIncB = false;
        if (this.B <= 0.0001) this.shouldIncB = true;

        if (this.shouldIncR) { this.R = parseFloat((this.R + 0.01).toFixed(4)); }
        else { this.R = parseFloat((this.R - 0.01).toFixed(4)); }

        if (this.shouldIncG) { this.G = parseFloat((this.G + 0.001).toFixed(4)); }
        else { this.G = parseFloat((this.G - 0.001).toFixed(4)); }

        if (this.shouldIncB) { this.B = parseFloat((this.B + 0.0001).toFixed(4)); }
        else { this.B = parseFloat((this.B - 0.0001).toFixed(4)); }

        return this;
    }

    getRandomRGB() {
        const color = this.getRandomColor();
        return `rgb(${color.R}, ${color.G}, ${color.B})`;
    }

    getRandomHex() {
        const color = this.getRandomColor();
        return this.rgbToHex(color.R, color.G, color.B);
    }

    componentToHex(c) {
        var hex = c.toString(16);
        return hex.length == 1 ? "0" + hex : hex;
    }
    
    rgbToHex(r, g, b) {
        return "#" + this.componentToHex(r) + this.componentToHex(g) + this.componentToHex(b);
    }
};

