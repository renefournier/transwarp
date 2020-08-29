
var worker;
var sampleImageData;
var sampleVideoDataWebm;
var sampleVideoData;
var sampleVideoData2;
var pk_E_010_r720P;
var pk_E_012_r720P;
var pk_E_015_r720P;
var pk_E_016_r720P;
var inputList;

var outputElement;
var filesElement;
var running = false;
var isWorkerLoaded = false;
var isSupported = (function() {
  return document.querySelector && window.URL && window.Worker;
})();

function isReady() {
  return !running && isWorkerLoaded;// && sampleImageData && sampleVideoData && sampleVideoData2;
}

function startRunning() {
  document.querySelector("#image-loader").style.visibility = "visible";
  outputElement.className = "";
  filesElement.innerHTML = "";
  running = true;

  var today = new Date();
  var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  console.log("Start Time: " + time);
  outputElement.textContent += "Start Time: " + time + "\n";
}
function stopRunning() {
  document.querySelector("#image-loader").style.visibility = "hidden";
  running = false;

  var today = new Date();
  var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  console.log("Stop Time: " + time);
  outputElement.textContent += "Stop Time: " + time + "\n";
}

function retrieveSampleImage() {
  var oReq = new XMLHttpRequest();
  oReq.open("GET", "bigbuckbunny.jpg", true);
  oReq.responseType = "arraybuffer";

  oReq.onload = function (oEvent) {
    var arrayBuffer = oReq.response;
    if (arrayBuffer) {
      sampleImageData = new Uint8Array(arrayBuffer);
    }
  };

  oReq.send(null);
}

function retrieveSampleVideo() {
  // var oReqOrig = new XMLHttpRequest();
  // oReqOrig.open("GET", "bigbuckbunny.webm", true);
  // oReqOrig.responseType = "arraybuffer";

  // oReqOrig.onload = function (oEvent) {
  //   var arrayBuffer = oReqOrig.response;
  //   if (arrayBuffer) {
  //     sampleVideoDataWebm = new Uint8Array(arrayBuffer);
  //   }
  // };

  // var oReq = new XMLHttpRequest();
  // oReq.open("GET", "videofile.mp4", true);
  // oReq.responseType = "arraybuffer";

  // oReq.onload = function (oEvent) {
  //   var arrayBuffer = oReq.response;
  //   if (arrayBuffer) {
  //     sampleVideoData = new Uint8Array(arrayBuffer);
  //   }
  // };

  // var oReq2 = new XMLHttpRequest();
  // oReq2.open("GET", "videofile2.mp4", true);
  // oReq2.responseType = "arraybuffer";

  // oReq2.onload = function (oEvent) {
  //   var arrayBuffer = oReq.response;
  //   if (arrayBuffer) {
  //     sampleVideoData2 = new Uint8Array(arrayBuffer);
  //   }
  // };

  var oReqpk_E_010_r720P = new XMLHttpRequest();
  oReqpk_E_010_r720P.open("GET", "pk_E_010_r720P.mp4", true);
  oReqpk_E_010_r720P.responseType = "arraybuffer";

  oReqpk_E_010_r720P.onload = function (oEvent) {
    var arrayBuffer = oReqpk_E_010_r720P.response;
    if (arrayBuffer) {
      pk_E_010_r720P = new Uint8Array(arrayBuffer);
    }
  };

  var oReqpk_E_012_r720P = new XMLHttpRequest();
  oReqpk_E_012_r720P.open("GET", "pk_E_012_r720P.mp4", true);
  oReqpk_E_012_r720P.responseType = "arraybuffer";

  oReqpk_E_012_r720P.onload = function (oEvent) {
    var arrayBuffer = oReqpk_E_012_r720P.response;
    if (arrayBuffer) {
      pk_E_012_r720P = new Uint8Array(arrayBuffer);
    }
  };

  // var oReqpk_E_015_r720P = new XMLHttpRequest();
  // oReqpk_E_015_r720P.open("GET", "pk_E_015_r720P.mp4", true);
  // oReqpk_E_015_r720P.responseType = "arraybuffer";

  // oReqpk_E_015_r720P.onload = function (oEvent) {
  //   var arrayBuffer = oReqpk_E_015_r720P.response;
  //   if (arrayBuffer) {
  //     pk_E_015_r720P = new Uint8Array(arrayBuffer);
  //   }
  // };

  // var oReqpk_E_016_r720P = new XMLHttpRequest();
  // oReqpk_E_016_r720P.open("GET", "pk_E_016_r720P.mp4", true);
  // oReqpk_E_016_r720P.responseType = "arraybuffer";

  // oReqpk_E_016_r720P.onload = function (oEvent) {
  //   var arrayBuffer = oReqpk_E_016_r720P.response;
  //   if (arrayBuffer) {
  //     pk_E_016_r720P = new Uint8Array(arrayBuffer);
  //   }
  // };

  var oReqInputList = new XMLHttpRequest();
  oReqInputList.open("GET", "input.txt", true);
  oReqInputList.responseType = "arraybuffer";

  oReqInputList.onload = function (oEvent) {
    var arrayBuffer = oReqInputList.response;
    if (arrayBuffer) {
      inputList = new Uint8Array(arrayBuffer);
    }
  };


  // oReqOrig.send(null);
  // oReq.send(null);
  // oReq2.send(null);
  oReqpk_E_010_r720P.send(null);
  oReqpk_E_012_r720P.send(null);
  // oReqpk_E_015_r720P.send(null);
  // oReqpk_E_016_r720P.send(null);
  oReqInputList.send(null);
}

function parseArguments(text) {
  text = text.replace(/\s+/g, ' ');
  var args = [];
  // Allow double quotes to not split args.
  text.split('"').forEach(function(t, i) {
    t = t.trim();
    if ((i % 2) === 1) {
      args.push(t);
    } else {
      args = args.concat(t.split(" "));
    }
  });
  return args;
}


function runCommand(text) {
  if (isReady()) {
    startRunning();
    var args = parseArguments(text);
    console.log(args);
    worker.postMessage({
      type: "command",
      arguments: args,
      files: [
        // {
        //   "name": "input.jpeg",
        //   "data": sampleImageData
        // },
        // {
        //   "name": "input.webm",
        //   "data": sampleVideoDataWebm
        // },
        // {
        //   "name": "input.mp4",
        //   "data": sampleVideoData
        // },
        // {
        //   "name": "input2.mp4",
        //   "data": sampleVideoData2
        // },
        {
          "name": "pk_E_010_r720P.mp4",
          "data": pk_E_010_r720P
        },
        {
          "name": "pk_E_012_r720P.mp4",
          "data": pk_E_012_r720P
        },
        // {
        //   "name": "pk_E_015_r720P.mp4",
        //   "data": pk_E_015_r720P
        // },
        // {
        //   "name": "pk_E_016_r720P.mp4",
        //   "data": pk_E_016_r720P
        // },
        {
          "name": "input.txt",
          "data": inputList
        }
      ]
    });
  }
}

function getDownloadLink(fileData, fileName) {
  if (fileName.match(/\.jpeg|\.gif|\.jpg|\.png/)) {
    var blob = new Blob([fileData]);
    var src = window.URL.createObjectURL(blob);
    var img = document.createElement('img');

    img.src = src;
    return img;
  }
  else {
    var a = document.createElement('a');
    a.download = fileName;
    var blob = new Blob([fileData]);
    var src = window.URL.createObjectURL(blob);
    a.href = src;
    a.textContent = 'Click here to download ' + fileName + "!";
    return a;
  }
}

function initWorker() {
  worker = new Worker("worker-asm.js");
  worker.onmessage = function (event) {
    var message = event.data;
    if (message.type == "ready") {
      isWorkerLoaded = true;
      worker.postMessage({
        type: "command",
        arguments: ["-help"]
      });
    } else if (message.type == "stdout") {
      outputElement.textContent += message.data + "\n";
    } else if (message.type == "start") {
      outputElement.textContent = "Worker has received command\n";
    } else if (message.type == "done") {
      stopRunning();
      var buffers = message.data;
      if (buffers.length) {
        outputElement.className = "closed";
      }
      buffers.forEach(function(file) {
        filesElement.appendChild(getDownloadLink(file.data, file.name));
      });
    }
  };
}

document.addEventListener("DOMContentLoaded", function() {

  initWorker();
  retrieveSampleVideo();
  retrieveSampleImage();

  var inputElement = document.querySelector("#input");
  outputElement = document.querySelector("#output");
  filesElement = document.querySelector("#files");

  inputElement.addEventListener("keydown", function(e) {
    if (e.keyCode === 13) {
      runCommand(inputElement.value);
    }
  }, false);
  document.querySelector("#run").addEventListener("click", function() {
    runCommand(inputElement.value);
  });

  [].forEach.call(document.querySelectorAll(".sample"), function(link) {
    link.addEventListener("click", function(e) {
      inputElement.value = this.getAttribute("data-command");
      runCommand(inputElement.value);
      e.preventDefault();
    });
  });

});