cmd.exe /c calc.exe
firstString="CMD.EXE was started with the above path as the current directory. UNC paths are not supported.  Defaulting to Windows directory."
echo "$firstString" | awk '{gsub("CMD.EXE was started with the above path as the current directory. UNC paths are not supported.  Defaulting to Windows directory.","hello"); print}'
