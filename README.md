# AutoTrimps - Zek Fork

## Discussion / Discord Channel
<a href="https://discord.gg/Ztcnfjr"><img src="https://discord.com/assets/3437c10597c1526c3dbd98c737c2bcae.svg" width=48></a>
Discord is a chat program. Come to talk about AutoTrimps, for help, or suggestions for new features : https://discord.gg/Ztcnfjr

## Current Version - Ongoing Development!
- Zek Fork. All changes made by Zek using GenBTC as base. Currently up-to-date as of 03/2022.

## Script Installation

- Browser

Step 1: Install TamperMonkey

https://www.tampermonkey.net/

Step 2: 

Click this link: https://github.com/Zorn192/AutoTrimps/raw/gh-pages/.user.js

If clicking the link does not work, copy the contents of user.js into a new script inside tampermonkey. 

If you are unsure how to do that, copy this:

```var script = document.createElement('script');
script.id = 'AutoTrimps-Zek';
script.src = 'https://Zorn192.github.io/AutoTrimps/AutoTrimps2.js';
script.setAttribute('crossorigin',"anonymous");
document.head.appendChild(script);
```

Press F12 inside the game, this opens the console, and paste the text into it and hit enter, this will load the script. You will have to do this everytime you refresh the game though so I recommend getting tampermonkey to do it for you!

Step 3: 

Configure settings. Will NOT work as intended with default settings. 

- Steam

Step 1: Download <a href="https://github.com/Zorn192/AutoTrimps/blob/gh-pages/mods.js">mods.js</a> from this directory (right click raw and save link as...), or copy it and make your own mods.js in a text file.

Step 2: Navigate to Steam\steamapps\common\Trimps and place mods.js into the folder. If you have other mods installed then just copy the text in AT's mods.js and place it somewhere in mods.js file.

Step 3: Configure your settings. AT will not work properly if they are not configured!

## Equipment && Upgrade's colour explaination:

White - Upgrade is not available

Yellow - Upgrade is not affordable

Orange - Upgrade is affordable, but will lower stats

Red - Will buy next

## Troubleshooting

**Combat won't start** - Make sure you have enabled the Better Auto Fight/Vanilla setting in Combat & Stance Settings. If you're not on dark theme, you may see a tiny thin black bar in combat, click it to show this setting.
