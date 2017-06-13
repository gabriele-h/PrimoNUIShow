# PrimoNUIShow
Bookmarklet for showing **RecordID** as well as links for **Show PNX** and
**Show Source Record** in Primo's New User Interface (NUI).

## Functionality
Use the bookmarklet on the brief results list or full view of the Primo NUI.
It will add a new line after each record (respectively after the bibliographic
info) with the information listed above.

## Special records

### FRBR
FRBR-groups will be prepended with a short note that these are represented by
a preferred or generic record.

### Third Node Adaptors (PCI, EBSCO etc.)
Third Node Adaptor records can not have their source record shown.

## Special links

### Show RIS
It is possible to link to the old user interface for showing the RIS-format of a
record. To add a "Show RIS" link to the bookmarlet, search for the string "RIS" and
uncomment the according lines (remove /\* and \*/).
