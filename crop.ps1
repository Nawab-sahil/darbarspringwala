Add-Type -AssemblyName System.Drawing

$inputPath = "C:\Users\ssahi\.gemini\antigravity\brain\a7fb990e-d217-43ba-ace7-81c6f8ebd52e\.tempmediaStorage\media_a7fb990e-d217-43ba-ace7-81c6f8ebd52e_1788358384143.png"
$outputPath = "e:\darbarspringwala\public\products\spiral-1.png"
$outputPathJpg = "e:\darbarspringwala\public\products\spiral-1.jpg"

$bmp = [System.Drawing.Bitmap]::FromFile($inputPath)

# The user uploaded image of the flat spiral spring sits in the chat bubble
# Scanning for the white background of the image with gray metallic spring inside
$bestMinX = 2000; $bestMaxX = 0; $bestMinY = 2000; $bestMaxY = 0

for ($y = 150; $y -lt 850; $y++) {
    for ($x = 400; $x -lt 1600; $x++) {
        $c = $bmp.GetPixel($x, $y)
        # Check for non-white, non-dark-gray spring coil metallic steel pixels (R: 100-220, G: 100-220, B: 100-220, low saturation)
        $diffRG = [Math]::Abs([int]$c.R - [int]$c.G)
        $diffGB = [Math]::Abs([int]$c.G - [int]$c.B)
        $brightness = ([int]$c.R + [int]$c.G + [int]$c.B) / 3
        
        # Steel metal wire pixels of the spiral spring
        if ($diffRG -lt 15 -and $diffGB -lt 15 -and $brightness -gt 70 -and $brightness -lt 210) {
            if ($x -lt $bestMinX) { $bestMinX = $x }
            if ($x -gt $bestMaxX) { $bestMaxX = $x }
            if ($y -lt $bestMinY) { $bestMinY = $y }
            if ($y -gt $bestMaxY) { $bestMaxY = $y }
        }
    }
}

# Add 25px margin padding around the spring coil
$margin = 25
$minX = [Math]::Max(0, $bestMinX - $margin)
$minY = [Math]::Max(0, $bestMinY - $margin)
$maxX = [Math]::Min($bmp.Width, $bestMaxX + $margin)
$maxY = [Math]::Min($bmp.Height, $bestMaxY + $margin)

$width = $maxX - $minX
$height = $maxY - $minY

Write-Host "Extracted Spiral Spring Bounds: X=$minX..$maxX ($width px), Y=$minY..$maxY ($height px)"

if ($width -gt 50 -and $height -gt 50) {
    $cropRect = New-Object System.Drawing.Rectangle($minX, $minY, $width, $height)
    $cropped = $bmp.Clone($cropRect, $bmp.PixelFormat)

    $cropped.Save($outputPath, [System.Drawing.Imaging.ImageFormat]::Png)
    $cropped.Save($outputPathJpg, [System.Drawing.Imaging.ImageFormat]::Jpeg)
    $cropped.Dispose()
    Write-Host "Successfully cropped spiral spring image!"
} else {
    Write-Host "Error: Could not isolate spring coil."
}

$bmp.Dispose()
