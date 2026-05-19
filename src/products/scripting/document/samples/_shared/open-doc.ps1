################################################################################
# Open a new Royal Document from the file system
################################################################################
import-module royaldocument.powershell

# All work with Royal Documents are handled by a store which hold references to
# open documents
$RoyalStore = New-RoyalStore -UserName ($env:USERDOMAIN + '\' + $env:USERNAME)

# open the Royal Document
$RoyalDocumentPath = Join-Path -Path $env:USERPROFILE -ChildPath ('Documents\' + $env:USERDOMAIN + '.rtsz')

$RoyalDocument = Open-RoyalDocument -Name $env:USERDOMAIN -FileName $RoyalDocumentPath -Store $RoyalStore
