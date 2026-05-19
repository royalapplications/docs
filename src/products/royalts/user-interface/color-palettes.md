---
uid: royalts_ui_color-palettes
name: Color Palettes
order: 9970
---

# Color Palettes

## User Interface
On the **View** ribbon tab, there is a drop down button called **Color Schemes** with 4 built-in schemes: *Default*, *Light*, *Dark* and *Black*.

### Custom Color Schemes
Click on **Custom…** in the Color Schemes dropdown to create your own color scheme.

* The drop down at the top allows you to choose from many pre-defined color schemes right out of the box. Once you selected the color scheme, hit the **Copy** button to copy all the color values from the selected scheme to the property grid. This way, you can quickly get started with a predefined scheme and tweak the colors as you wish.
* Clicking on a color will show a short description at the bottom where this particular color will be used.
* There are also **Icon Colors** available. Tweaking these colors allows you to set the colors used by all the icons in the UI. This way you can make sure that a black color in a black skin still has enough contrast to look great.
* To get a better feel for the scheme, hit the **Preview** button to see how your current color scheme will look like.

### Share Color Schemes
The **Share** button allows you to share your color scheme with other users. We create a special link which instructs your browser to open Royal TS’ Color Scheme editor and set the color scheme for you to try.

## Well Known Colors
Well known colors are color theme aware. This means that instead of storing a color value, we store a name for a color. This color name can have different color values depending if you configured Royal TS to use a light color scheme or a black color scheme. If you open the **Properties** dialog for an object, you can select a color for the object using the color picker within the **Display Name** editor. There are currently two palettes included: *Royal* and *Icon*.

* Selecting a color from the **Royal** palette, ensures that the color and contrast changes accordingly when you switch from a dark to light theme or vice versa. If you select the color *Cinnabar*, it will use #CE3838 as color value in a light color theme and change the color value to #E13B3B in a black color theme.
* Selecting a color from the **Icon** palette (for example the color Red), it will use the color value defined in the [Icon Colors](#custom-color-schemes) defined in the Color Scheme you are using.
* **Select Custom Color** still allows you to specify a color of your own. The color value will be always the same, regardless of color scheme setting.

## Terminal Color Palettes
When you edit a terminal connection type which supports ANSI colors, you can choose from pre-defined palettes (PuTTY or Solarized) or you can create your own palettes, export them and import existing ones. Of course, you can still configure individual color schemes at the connection level as before but each configuration page now has a **Palette** drop down button which shows you a list of available palettes and a **Manage** menu with the following options:
* **Export**  
  Allows you to export your current palette configuration to a new "Royal Terminal Color Palette" file (*.rtcp). You can share this file with your co-workers to import.
* **Import**  
  Allows you to import various file formats: *.rtcb (see above), *.reg (PuTTY), *.ini (MobaXTerm), *.itemcolor (iTerm)
* **Import from Clipboard**  
  Basically the same as Import but instead of reading a file, it will import the colors from your clipboard (provided the content of the clipboard is valid). This can be used to import [Windows Terminal Themes](https://windowsterminalthemes.dev/) directly from the clipboard.
* **Show in Folder**  
  Opens the file explorer to ```%appdata%\code4ward\ColorPalettes``` where you can find all palette files. To remove a palette, simply delete the file.

### Online Resources for Color Schemes

Windows Terminal: https://windowsterminalthemes.dev  
PuTTY Color Schemes: https://github.com/AlexAkulov/putty-color-themes  
iTerm Color Schemes: https://iterm2colorschemes.com/