# PrimoNUIShow
Bookmarklet for showing **RecordID** as well as links for **Show PNX** and
**Show Source Record** in Primo's New User Interface (NUI).

## Functionality
Use the bookmarklet on the brief results list of the Primo NUI. It will add a
new line after each record with the information listed above.

## Special records

### FRBR
FRBR-groups will be prepended with a short note that these are represented by
a preferred or generic record.

### PCI
PCI-records have a slightly different link for "Show PNX" and it is not possible to show
their Source record.

### SFX
SFX-records will only have a "Show PNX" link, since their source records are not
available as well.

## Special links

### Show RIS
It is possible to link to the old user interface for showing the RIS-format of a
record. To add a "Show RIS" link to the bookmarlet, search for the string "RIS" and
uncomment the according lines (remove /\* and \*/).
