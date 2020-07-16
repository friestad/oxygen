exports.getCenterArea = function(body) {
    const dy = 8000;
    const dx = 1000;
    const earth_r = 6378000;

    generateNewPoint = (x, y, dx, dy) => {
        new_y = y + (dy / earth_r) * (180 / Math.PI);
        new_x = x + (dx / earth_r) * (180 / Math.PI) / Math.cos(y * Math.PI/180);
        return [new_x, new_y];
    }

    const start = body.startLocation.coordinates;
    const end = body.endLocation.coordinates;

    const p1 = generateNewPoint(start[0], start[1], -dx, dy);
    const p2 = generateNewPoint(start[0], start[1], -dx, -dy);
    const p3 = generateNewPoint(end[0], end[1], dx, dy);
    const p4 = generateNewPoint(end[0], end[1], dx, -dy);

    return [[p1, p2, p3, p4]];
}

