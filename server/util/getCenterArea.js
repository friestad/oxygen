exports.getCenterArea = function(body) {
    const widthHalf = 8000;
    const heightMod = 1000;
    const earth_r = 6378000;
    const startx = body.startLocation.coordinates[0];
    const starty = body.startLocation.coordinates[1];
    const endx = body.endLocation.coordinates[0];
    const endy = body.endLocation.coordinates[1];

    var dx;
    var dy;

    // Perfectly horizonal rectangle
    if (endy - starty === 0) {
        dx = heightMod;
        dy = widthHalf;
    }

    // Perfectly vertical rectangle
    if (endx - startx === 0) {
        dx = widthHalf;
        dy = heightMod;
    }

    generateNewPoint = (x, y, dx, dy) => {
        new_y = y + (dy / earth_r) * (180 / Math.PI);
        new_x = x + (dx / earth_r) * (180 / Math.PI) / Math.cos(y * Math.PI/180);
        return [new_x, new_y];
    }

    const p1 = generateNewPoint(startx, starty, -dx, dy);
    const p2 = generateNewPoint(startx, starty, -dx, -dy);
    const p3 = generateNewPoint(endx, endy, dx, dy);
    const p4 = generateNewPoint(endx, endy, dx, -dy);

    return [[p1, p2, p3, p4]];
}

