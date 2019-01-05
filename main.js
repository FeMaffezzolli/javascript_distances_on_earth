function calculateDistance() {
    
    // Fetching coordenates values from form
    var xa = document.getElementById('xa').value; 
    var ya = document.getElementById('ya').value;
    var xb = document.getElementById('xb').value;
    var yb = document.getElementById('yb').value;

    // Calculate the diferences for each coordinate axis
    var xaxis = Math.abs(xa - xb);
    var yaxis = Math.abs(ya - yb);

    // Parse from degrees to radians
    var radianX = degreeToRadian(xaxis);
    var radianY = degreeToRadian(yaxis);

    var linDist =  Math.pow(Math.pow(2 * Math.sin(radianX/2), 2) + Math.pow(2 * Math.sin(radianY/2), 2), 0.5);

    var halfLinDist = linDist / 2;

    var halfRadianDist = Math.asin(halfLinDist);

    var RadianDist = 2 * halfRadianDist;

    var degreeDist = radianToDegree(RadianDist);

    var totalDistMeters = (degreeDist / 360) * 2 * Math.PI * 6371004

    var result = document.getElementById('result');
    result.value = (totalDistMeters)

};


function degreeToRadian(degrees) {
    return Math.PI * degrees / 180;
};

function radianToDegree(radians) {
    return radians * 180 / Math.PI;
};
