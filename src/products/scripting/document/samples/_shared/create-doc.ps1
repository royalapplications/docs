################################################################################
# Create a new Royal Document
################################################################################
import-module royaldocument.powershell

# All work with Royal Documents are handled by a store which hold references to
# open documents
$RoyalStore = New-RoyalStore -UserName ($env:USERDOMAIN + '\' + $env:USERNAME)

# create the Royal Document
$RoyalDocumentPath = Join-Path -Path $env:USERPROFILE -ChildPath ('Documents\' + $env:USERDOMAIN + '.rtsz')
$RoyalDocument = New-RoyalDocument -Name $env:USERDOMAIN -FileName $RoyalDocumentPath -Store $RoyalStore
