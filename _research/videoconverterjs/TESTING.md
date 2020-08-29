# Testing outcome

# Trim 30 second video at 5 and 30 seconds
-ss 5 -t 30 -i pk_E_010_r720P.mp4 -strict -2 samp.mp4
Windows - Under 2 minutes
Start Time: 12:19:20
(9) ["-ss", "5", "-t", "30", "-i", "input.mp4", "-strict", "-2", "samp.mp4"]
Stop Time: 12:21:5
Mobile – 9 mins
Start Time: 9:11:20
["-ss", "5", "-t", "30", "-i", "pk_E_010_r720P.mp4", "-strict", "-2", "samp.mp4"]
Stop Time: 9:20:00
Mobile with Copy instead - 5 secs
Start Time: 9:48:29
["-ss", "5", "-t", "30", "-i", "pk_E_010_r720P.mp4", "-strict", "-2", "-c", "copy", "samp.mp4"]
Stop Time: 9:48:34

# Trim at 6 and 117
-ss 6 -t 117 -i pk_E_010_r720P.mp4 -strict -2 samp.mp4
Windows - 32 mins
Start Time: 8:58:18
"-ss"1: "6"2: "-t"3: "117"4: "-i"5: "pk_E_010_r720P.mp4"6: "-strict"7: "-2"8: "samp.mp4"
Stop Time: 9:22:15
Mobile – 36 mins
Start Time: 8:30:57
["-ss", "6", "-t", "117", "-i", "pk_E_010_r720P.mp4", "-strict", "-2", "samp.mp4"]
Stop Time: 9:06:12
Mobile with Copy instead – 6 secs
Start Time: 9:53:16
["-ss", "6", "-t", "117", "-i", "pk_E_010_r720P.mp4", "-strict", "-2", "-c", "copy", "samp.mp4"]
Stop Time: 9:53:22

# Concat 2 videos totaling 3:50
Windows - 52 mins
Start Time: 14:14:15
["-i", "pk_E_010_r720P.mp4", "-i", "pk_E_012_r720P.mp4", "-strict", "-2", "-filter_complex", "[0:0][0:1] [1:0][1:1] concat=n=2:v=1:a=1 [v] [a]", "-map", "[v]", "-map", "[a]", "output.mp4"]
Stop Time: 15:06:4
Mobile - Unable to successfully complete



-i input.mp4 -i input2.mp4 -strict -2 -filter_complex "[0:0][0:1] [1:0][1:1] concat=n=2:v=1:a=1 [v] [a]" -map "[v]" -map "[a]" output.mp4
-i pk_E_010_r720P.mp4 -i pk_E_012_r720P.mp4 -strict -2 -filter_complex "[0:0][0:1] [1:0][1:1] concat=n=2:v=1:a=1 [v] [a]" -map "[v]" -map "[a]" output.mp4

-i pk_E_010_r720P.mp4 -i pk_E_012_r720P.mp4 -i pk_E_015_r720P.mp4 -i pk_E_016_r720P.mp4 -strict -2 -filter_complex "[0:0][0:1] [1:0][1:1] [2:0][2:1] [3:0][3:1] concat=n=4:v=1:a=1 [v] [a]" -map "[v]" -map "[a]" output.mp4

-i pk_E_010_r720P.mp4 -i pk_E_012_r720[0:0][0:1] [1:0][1:1] [2:0][2:1] [3:0][3:1]P.mp4 -i pk_E_015_r720P.mp4 -i pk_E_016_r720P.mp4 -i pk_E_010_r720P.mp4 -i pk_E_012_r720P.mp4 -i pk_E_015_r720P.mp4 -i pk_E_016_r720P.mp4 -strict -2 -filter_complex "[0:0][0:1] [1:0][1:1] [2:0][2:1] [3:0][3:1] [4:0][4:1] [5:0][5:1] [[0:0][0:1] [1:0][1:1] [2:0][2:1] [3:0][3:1]6:0][6:1] [7:0][7:1] concat=n=8:v=1:a=1 [v] [a]" -map "[v]" -map "[a]" output.mp4


-i "concat: pk_E_010_r720P.mp4|pk_E_012_r720P.mp4" -c copy output.mp4

“concat:pk_E_010_r720P.mp4|pk_E_012_r720P.mp4 -i pk_E_015_r720P.mp4 -i pk_E_016_r720P.mp4 -c copy output.mp4

-f concat -i pk_E_010_r720P.mp4 -i pk_E_012_r720P.mp4 -i pk_E_015_r720P.mp4 -i pk_E_016_r720P.mp4 -c copy output.mp4


-i pk_E_010_r720P.mp4 -i pk_E_012_r720P.mp4 -i pk_E_015_r720P.mp4 -i pk_E_016_r720P.mp4 -vcodec copy -acodec copy -vcodec copy -acodec copy output.mp4test12.avi -newvideo -newaudio
