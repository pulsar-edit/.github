# Pulsar Iconography

This folder contains the entire icon set used by the Pulsar Team.

This folder will need to be updated as rebranding occurs, but in the meantime theres no reason to not define practices around branding.

Icons are broken up into sections as needed to help a quick reference and access to them as needed. But below will be a table to help find the icon required.

---

## application-icons

This folder contains the icons in use for each platform, as needed.

- linux: This will contain any icons used on the Linux Binaries of Pulsar.
- macos: This will contain any icons used on the MacOS Binaries of Pulsar.
- windows: This will contain any icons used on the Windows Binaries of Pulsar.

## generic-icons

This is a collection of either the highquality/scalable source files for the icons in use elsewhere. Likely if you are needing to create an icon of a new size you'll want to grab an icon from here to be able to modify it as needed to fit on your platform/service.

Additionally the files at the root of `generic-icons` follow a specific file naming pattern to help find whats needed.

```
PURPOSE_colourLOCATION_modifier_SIZE.EXT
```

Where purpose can be of
- favicon
- pulsar (For the Major Logo)
- pulsar_banner

Then location should likely be one of the following as permits:
- FG (Foreground colour, or the colur of the lines within the image)
- BG (The background colour of the image)

The size generally only be required if the icon has duplicates or is not scalable.

Within the `generic-icons` folder are additional folders.

- auxiliary: Contains other iconography we have not limited to the Pulsar Icon or Banner.
- generic_reference: This contains the major icons, without specific filenames if you want a quick reference and don't need specificity.
- mascot: Contains the source files of the Pulsar Mascot.

## historic

The `historic` folder contains all files that helped to build our current branding and iconography.

This includes community attempts at a design before we got in touch with a professional. And includes many of the professional designers work that was sent over as mock ups of our branding as a whole. Which could be animations, logos, font styling, and more. They have been named as accuratly as possible.

But this folder will likely not find much use going forward, and is kept mostly as a keepsake of the journey to accomplish our branding.

## service-icons

This will contain iconography and branding files related to specific services.

Each individual service should get it's own folder, with the file names representing it's purpose and use.

## web-icons

This contains icons that should be used on the web. Such as our many websites. This folder includes anything else that's needed to acheive the branding we want on websites, such as `site.webmanifest` files or `browserconfig.xml` files.
