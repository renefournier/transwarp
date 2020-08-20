const ffmpeg = require("fluent-ffmpeg");

const big = "../../_media/big.m4v";
const wt = "../../_media/w_E_202005_01.mp3";
const test = "../../_media/file3.m4a";

// ffmpeg -i file3.m4a -af silencedetect=noise=0.000001 -f null -

// ffmpeg.ffprobe(test, function (err, metadata) {
//   console.dir(metadata);
// });

// ffmpeg.getAvailableFormats(function (err, formats) {
//   console.log("Available formats:");
//   console.dir(formats);
// });

// ffmpeg.getAvailableCodecs(function (err, codecs) {
//   console.log("Available codecs:");
//   console.dir(codecs);
// });

// ffmpeg.getAvailableEncoders(function (err, encoders) {
//   console.log("Available encoders:");
//   console.dir(encoders);
// });

// ffmpeg.getAvailableFilters(function (err, filters) {
//   console.log("Available filters:");
//   console.dir(filters);
// });

ffmpeg(test)
  .audioFilters("silencedetect=n=0.000001")
  .on("start", function (commandLine) {
    console.log("Spawned Ffmpeg with command: " + commandLine);
  })
  .on("codecData", function (data) {
    console.log(
      "Input is " + data.audio + " audio " + "with " + data.video + " video"
    );
  })
  .on("progress", function (progress) {
    console.dir(progress);
    console.log(progress.percent);
    console.log(typeof progress.percent);
  })
  .on("error", function (err, stdout, stderr) {
    console.log("Cannot process video: " + err.message);
  })
  .on("stderr", function (stderrLine) {
    // console.log("→ " + stde rrLine);
  })
  .on("end", function (stdout, stderr) {
    console.log("Transcoding succeeded !");
    console.log("Fin!");
  })
  //   .output()
  .saveToFile(`./_media/thing.m4a`);
//   .run();

console.log(new Date());
