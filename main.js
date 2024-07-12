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
const genPrecision = 0.01;
const head = generateArcs(65, 90, 32, 31, 33, 10, 0, 180, genPrecision, false);
drawLines([head]);
const aboveEarLeft = generateArcs(36, 90, 2, 2, 12, 12, 180, 240, genPrecision, false);
drawLines([aboveEarLeft]);
const earLeft = generateArcs(32, 78, 3, 2.5, 6, 9, 0, 360, genPrecision, true);
drawLines([earLeft])
const cheekLeft = generateArcs(36.5, 70, 0,3,0,20,180, 210, genPrecision, false);
drawLines([cheekLeft]);
const jawLeft = generateArcs(62.86, 70.4, 0,30,0,40,195, 270, genPrecision, false);
drawLines([jawLeft]);
const chin = generateArcs(66.85, 30.4, 4, 4, 0, .25, 180, 360, genPrecision, false);
drawLines([chin]);
const jawRight = generateArcs(70.85, 60.4, 25,0,0,30,270, 360, genPrecision, false);
drawLines([jawRight]);
const cheekRight = generateArcs(95.3, 70.225, 1, 0, 0, 12, 305, 360, genPrecision, false);
drawLines([cheekRight]);
const EarRight = generateArcs(97.75, 78, 2.5, 3, 6, 9, 0, 360, genPrecision, true);
drawLines([EarRight]);
const aboveEarRight = generateArcs(97, 80, .6, 2, 11.55, 12, 20, 60, genPrecision, false);
drawLines([aboveEarRight]);
// xpos ypos x+ x- y+ y- sAng eAng prec close

                             
