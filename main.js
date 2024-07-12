function generateArc(centerX, centerY, radius, startAngle, endAngle, linesPerDegree) {
  // Calculate the number of segments based on the angle difference
  const angleDiff = Math.abs(endAngle - startAngle);
  const numSegments = Math.ceil(angleDiff / linesPerDegree); 
  // Generate points along the arc
  const points = [];
  for (let i = 0; i <= numSegments; i++) {
    const angle = startAngle + (angleDiff * i / numSegments);
    const x = centerX + radius * Math.cos(angle * Math.PI / 180); // Convert degrees to radians
    const y = centerY + radius * Math.sin(angle * Math.PI / 180); // Convert degrees to radians
    points.push([x, y]);
  }

  return [points]; // Wrap in an array to match the polylines format expected by Blot drawLines
}


setDocDimensions(800, 600);


//const  = generateArc(centerX, centerY, radius, startAngle, endAngle);
const arcPolyLines = generateArc(400, 400, 100, 0, 360, 0.01);

// Draw the arc
drawLines(arcPolyLines);
