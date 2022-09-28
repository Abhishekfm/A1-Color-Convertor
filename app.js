


function hexConvbtn() {
    let hex = document.getElementById("hexCInp").value;
    hex = hex.match(/.{1,2}/g);
    var rgb = [
        parseInt(hex[0], 16),
        parseInt(hex[1], 16),
        parseInt(hex[2], 16)
    ];
    console.log(rgb);
    let ele = document.getElementById("hexCOut");
    ele.innerText = rgb.join(" ");
}


function rgbConvbtn() {
    let r = document.getElementById("RCInput").value;
    let g = document.getElementById("GCInput").value;
    let b = document.getElementById("BCInput").value;
    r = Number(r);
    g = Number(g);
    b = Number(b);
    let ele = document.getElementById("rgbCOut");
    let hex_r = r.toString(16);
    hex_r = hex_r.length == 1 ? "0" + hex_r : hex_r;
    let hex_g = g.toString(16);
    hex_g = hex_g.length == 1 ? "0" + hex_g : hex_g;
    let hex_b = b.toString(16);
    hex_b = hex_b.length == 1 ? "0" + hex_b : hex_b;
    let hex = '#' + hex_r + hex_g + hex_b;
    ele.innerText = hex;
}

function RangeSelector() {
    let r = document.getElementById("RrInput").value;
    let g = document.getElementById("GrInput").value;
    let b = document.getElementById("BrInput").value;
    r = Number(r);
    g = Number(g);
    b = Number(b);
    let ele = document.getElementById("range-color-box");
    let hex_r = r.toString(16);
    hex_r = hex_r.length == 1 ? "0" + hex_r : hex_r;
    let hex_g = g.toString(16);
    hex_g = hex_g.length == 1 ? "0" + hex_g : hex_g;
    let hex_b = b.toString(16);
    hex_b = hex_b.length == 1 ? "0" + hex_b : hex_b;
    let hex = '#' + hex_r + hex_g + hex_b;
    // ele.innerText = hex;
    ele.style.backgroundColor = hex;
}


function hexFindbtn() {
    let val = document.getElementById("hexInput").value;
    let ele = document.getElementById("color-box");
    ele.style.backgroundColor = val;
}



function RGBFindbtn() {
    let r = document.getElementById("RInput").value;
    let g = document.getElementById("GInput").value;
    let b = document.getElementById("BInput").value;
    let ele = document.getElementById("rgb-color-box");
    ele.style.backgroundColor = `rgb(${r},${g},${b})`;
}


function randompickerbtn() {
    let ele = document.getElementById("randomValuePara");
    let ele1 = document.getElementById("randomPicker");
    let arr = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
    let hex = "#";
    for(let i = 0; i<6; i++){
        let n = Math.floor(Math.random()*16);
        hex += arr[n];
    }
    ele1.style.backgroundColor = hex;
    navigator.clipboard.writeText(hex);
    ele.innerText = hex;
}