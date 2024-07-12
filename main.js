function generateArcs(centerX, centerY, radiusXPlus, radiusXMinus, radiusYPlus, radiusYMinus, startAngleDeg, endAngleDeg, precision) {
  const startAngle = startAngleDeg * Math.PI / 180;
  const endAngle = endAngleDeg * Math.PI / 180;

  const deltaAngle = endAngle - startAngle;
  const numPoints = Math.max(2, Math.ceil(deltaAngle / precision));
  const angleStep = deltaAngle / (numPoints - 1);

  const polylines = [];

  for (let i = 0; i < numPoints; i++) {
    const angle = startAngle + angleStep * i;

    let radiusX = (angle > Math.PI / 2 && angle < 3 * Math.PI / 2) ? radiusXMinus : radiusXPlus;
    let radiusY = (angle >= Math.PI && angle < 2 * Math.PI) ? radiusYMinus : radiusYPlus;

    const x = centerX + radiusX * Math.cos(angle);
    const y = centerY + radiusY * Math.sin(angle);

    polylines.push([x, y]);
  }

  polylines.push(polylines[0]); // Close the shape

  return polylines;
}

setDocDimensions(800, 600);
// Example usage with separate radii
const genPrecision = 0.000001;
const arcPolylines = generateArcs(400, 300, 100, 100, 100, 100, 0, 360, genPrecision);

drawLines([arcPolylines]);
