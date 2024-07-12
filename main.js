function generateArcs(centerX, centerY, radiusXPlus, radiusXMinus, radiusYPlus, radiusYMinus, startAngleDeg, endAngleDeg, precision, close) {
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
  if(close == true){
  polylines.push(polylines[0]); // Close the shape
  }
  
  return polylines;
}

setDocDimensions(125, 125);
// Example usage with separate radii
const genPrecision = 0.01;
const head = generateArcs(65, 90, 32, 31, 27, 10, 0, 180, genPrecision, false);
drawLines([head]);
const aboveEarLeft = generateArcs(36, 90, 2, 2, 12, 12, 180, 245, genPrecision, false);
drawLines([aboveEarLeft]);
const earLeft = generateArcs(32, 78, 3, 2.5, 6, 9, 0, 360, genPrecision, true);
drawLines([earLeft])
//const cheek = generateArcs(31.1, 74, ,,,
// xpos ypos x+ x- y+ y- sAng eAng prec close

                             
