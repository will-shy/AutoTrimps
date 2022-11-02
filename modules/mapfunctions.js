//### RAutoMap Global VarsRshouldDoMaps
var RshouldFarm = false;
var RdoVoids = false;
var RneedToVoid = false;
var RneedPrestige = false;
var RshouldDoMaps = false;
var RlastMapWeWereIn = null;
var RdoMaxMapBonus = false;
var RvanillaMAZ = false;
var contractVoid = false;
var RadditionalCritMulti = 2 < getPlayerCritChance() ? 25 : 5;

//### Quest
var Rshoulddoquest = false;
var Rquestequalityscale = false;
var Rquestshieldzone = 0;

//### Map Module Vars

//Time Farm
var Rtimefarm = false;
var Rshouldtimefarm = false;

//dTime Farm
var Rdtimefarm = false;
var Rdshouldtimefarm = false;

//Tribute
var Rshouldtributefarm = false;

//Bog
var Rshoulddobogs = false;

//Frozen Castle
var Rshouldcastle = false;

//Praid
var Rshoulddopraid = false;
var RAMPpMap1 = undefined;
var RAMPpMap2 = undefined;
var RAMPpMap3 = undefined;
var RAMPpMap4 = undefined;
var RAMPpMap5 = undefined;
var RAMPfragmappy = undefined;
var RAMPrepMap1 = undefined;
var RAMPrepMap2 = undefined;
var RAMPrepMap3 = undefined;
var RAMPrepMap4 = undefined;
var RAMPrepMap5 = undefined;
var RAMPprefragmappy = undefined;
var RAMPmapbought1 = false;
var RAMPmapbought2 = false;
var RAMPmapbought3 = false;
var RAMPmapbought4 = false;
var RAMPmapbought5 = false;
var RAMPfragmappybought = false;
var RAMPdone = false;
var RAMPfragfarming = false;

//dPraid
var Rdshoulddopraid = false;
var RdAMPpMap1 = undefined;
var RdAMPpMap2 = undefined;
var RdAMPpMap3 = undefined;
var RdAMPpMap4 = undefined;
var RdAMPpMap5 = undefined;
var RdAMPfragmappy = undefined;
var RdAMPrepMap1 = undefined;
var RdAMPrepMap2 = undefined;
var RdAMPrepMap3 = undefined;
var RdAMPrepMap4 = undefined;
var RdAMPrepMap5 = undefined;
var RdAMPprefragmappy = undefined;
var RdAMPmapbought1 = false;
var RdAMPmapbought2 = false;
var RdAMPmapbought3 = false;
var RdAMPmapbought4 = false;
var RdAMPmapbought5 = false;
var RdAMPfragmappybought = false;
var RdAMPdone = false;
var RdAMPfragfarming = false;

//Mayhem
var Rshouldmayhem = 0;
var Rmayhemextraglobal = -1;

//Panda
var Rshouldpanda = 0;
var Rpandaextraglobal = 1;

//Insanity
var Rinsanityfarm = false;
var Rshouldinsanityfarm = false;
var Rinsanityfragfarming = false;
var insanityfragmappy = undefined;
var insanityprefragmappy = undefined;
var insanityfragmappybought = false;

//Storm
var Rstormfarm = false;
var Rshouldstormfarm = false;

//Equip Farm
var Requipfarm = false;
var Rshouldequipfarm = false;
var Requipminusglobal = -1;

//Ships
var Rshipfarm = false;
var Rshouldshipfarm = false;
var Rshipfragfarming = false;
var shipfragmappy = undefined;
var shipprefragmappy = undefined;
var shipfragmappybought = false;

//Alch
var Ralchfarm = false;
var Rshouldalchfarm = false;
var Rshouldhypofarm = false;
var Ralchfragfarming = false;
var alchfragmappy = undefined;
var alchprefragmappy = undefined;
var alchfragmappybought = false;

//Hypo
var Rhypofarm = false;
var Rhyposhouldwood = true;
var Rshouldhypofarm = false;
var Rhypofragfarming = false;
var hypofragmappy = undefined;
var hypoprefragmappy = undefined;
var hypofragmappybought = false;

function RresetVars() {
    RshouldFarm = false;
    RdoVoids = false;
    RneedToVoid = false;
    RneedPrestige = false;
    RshouldDoMaps = false;
    RlastMapWeWereIn = null;
    RdoMaxMapBonus = false;
    RvanillaMAZ = false;
    contractVoid = false;
    RadditionalCritMulti = 2 < getPlayerCritChance() ? 25 : 5;

    //### Quest
    Rshoulddoquest = false;
    Rquestequalityscale = false;
    Rquestshieldzone = 0;

    //### Map Modules

    //Time Farm
    Rtimefarm = false;
    Rshouldtimefarm = false;

    //dTime Farm
    Rdtimefarm = false;
    Rdshouldtimefarm = false;

    //Tribute
    Rshouldtributefarm = false;

    //Bog
    Rshoulddobogs = false;

    //Frozen Castle
    Rshouldcastle = false;

    //Praid
    Rshoulddopraid = false;
    RAMPpMap1 = undefined;
    RAMPpMap2 = undefined;
    RAMPpMap3 = undefined;
    RAMPpMap4 = undefined;
    RAMPpMap5 = undefined;
    RAMPfragmappy = undefined;
    RAMPrepMap1 = undefined;
    RAMPrepMap2 = undefined;
    RAMPrepMap3 = undefined;
    RAMPrepMap4 = undefined;
    RAMPrepMap5 = undefined;
    RAMPprefragmappy = undefined;
    RAMPmapbought1 = false;
    RAMPmapbought2 = false;
    RAMPmapbought3 = false;
    RAMPmapbought4 = false;
    RAMPmapbought5 = false;
    RAMPfragmappybought = false;
    RAMPdone = false;
    RAMPfragfarming = false;

    //dPraid
    Rdshoulddopraid = false;
    RdAMPpMap1 = undefined;
    RdAMPpMap2 = undefined;
    RdAMPpMap3 = undefined;
    RdAMPpMap4 = undefined;
    RdAMPpMap5 = undefined;
    RdAMPfragmappy = undefined;
    RdAMPrepMap1 = undefined;
    RdAMPrepMap2 = undefined;
    RdAMPrepMap3 = undefined;
    RdAMPrepMap4 = undefined;
    RdAMPrepMap5 = undefined;
    RdAMPprefragmappy = undefined;
    RdAMPmapbought1 = false;
    RdAMPmapbought2 = false;
    RdAMPmapbought3 = false;
    RdAMPmapbought4 = false;
    RdAMPmapbought5 = false;
    RdAMPfragmappybought = false;
    RdAMPdone = false;
    RdAMPfragfarming = false;

    //Mayhem
    Rshouldmayhem = 0;
    Rmayhemextraglobal = -1;

    //Panda
    Rshouldpanda = 0;
    Rpandaextraglobal = 1;

    //Insanity
    Rinsanityfarm = false;
    Rshouldinsanityfarm = false;
    Rinsanityfragfarming = false;
    insanityfragmappy = undefined;
    insanityprefragmappy = undefined;
    insanityfragmappybought = false;

    //Storm
    Rstormfarm = false;
    Rshouldstormfarm = false;

    //Equip Farm
    Requipfarm = false;
    Rshouldequipfarm = false;
    Requipminusglobal = -1;

    //Ships
    Rshipfarm = false;
    Rshouldshipfarm = false;
    Rshipfragfarming = false;
    shipfragmappy = undefined;
    shipprefragmappy = undefined;
    shipfragmappybought = false;

    //Alch
    Ralchfarm = false;
    Rshouldalchfarm = false;
    Rshouldhypofarm = false;
    Ralchfragfarming = false;
    alchfragmappy = undefined;
    alchprefragmappy = undefined;
    alchfragmappybought = false;

    //Hypo
    Rhypofarm = false;
    Rhyposhouldwood = true;
    Rshouldhypofarm = false;
    Rhypofragfarming = false;
    hypofragmappy = undefined;
    hypoprefragmappy = undefined;
    hypofragmappybought = false;
}


//###RAutoMap Functions

//Time Farm

function RtimeFarm(should, level, map, special, daily) {
    var timefarmzone = daily ? getPageSetting('Rdtimefarmzone') : getPageSetting('Rtimefarmzone');
    var timefarmindex = timefarmzone.indexOf(game.global.world);

    var timefarmlevel = daily ? getPageSetting('Rdtimefarmlevel')[timefarmindex] : getPageSetting('Rtimefarmlevel')[timefarmindex];
    if (level) return timefarmlevel;

    var timefarmmap = daily ? autoTrimpSettings.Rdtimefarmmap.value[timefarmindex] : autoTrimpSettings.Rtimefarmmap.value[timefarmindex];
    if (map) return timefarmmap;

    var timefarmspecial = daily ? autoTrimpSettings.Rdtimefarmspecial.value[timefarmindex] : autoTrimpSettings.Rtimefarmspecial.value[timefarmindex];
    if (special) return timefarmspecial;

    var timefarmcell = daily ? getPageSetting('Rdtimefarmcell')[timefarmindex] : getPageSetting('Rtimefarmcell')[timefarmindex];
    var timefarmtime = daily ? getPageSetting('Rdtimefarmtime') : getPageSetting('Rtimefarmtime');
    var time = ((new Date().getTime() - game.global.zoneStarted) / 1000 / 60);
    var timezones = timefarmtime[timefarmindex];

    if (should && timefarmzone.includes(game.global.world)) {
        if (game.global.lastClearedCell + 2 >= timefarmcell && timezones > time && timezones > 0) {
            if (daily) {
                Rdshouldtimefarm = true;
            } else Rshouldtimefarm = true;
        }
        if (!daily && game.global.challengeActive == 'Daily' && getPageSetting('Rdtimefarm') != 2) {
            Rshouldtimefarm = false;
        }
    }
}

function RtimeFarmMap(daily) {
    if (getPageSetting('Rtimefarmlevel') != 0 || (daily && getPageSetting('Rdtimefarmlevel') != 0)) {
        levelzones = daily ? RtimeFarm(false, true, false, false, true) : RtimeFarm(false, true, false, false, false);
        if (levelzones > 0) {
            document.getElementById("mapLevelInput").value = game.global.world;
            document.getElementById("advExtraLevelSelect").value = levelzones;
        } else if (levelzones < 0) {
            document.getElementById("mapLevelInput").value = (game.global.world + levelzones);
        }
    }

    biomeAdvMapsSelect.value = daily ? RtimeFarm(false, false, true, false, true) : RtimeFarm(false, false, true, false, false);
    document.getElementById("advSpecialSelect").value = daily ? RtimeFarm(false, false, false, true, true) : RtimeFarm(false, false, false, true, false);
    updateMapCost();
}

//Tribute Farm

function RtributeFarm(should, level, map, special) {
    var tributefarmzone = getPageSetting('Rtributefarmzone');
    var tributefarmindex = tributefarmzone.indexOf(game.global.world);

    var tributefarmlevel = getPageSetting('Rtributefarmlevel')[tributefarmindex];
    if (level) return tributefarmlevel;

    var tributefarmmap = autoTrimpSettings.Rtributemapselection.value[tributefarmindex];
    if (map) return tributefarmmap;

    var tributefarmspecial = autoTrimpSettings.Rtributespecialselection.value[tributefarmindex];
    if (special) return tributefarmspecial;

    var tributefarmcell = getPageSetting('Rtributefarmcell')[tributefarmindex];
    var tributefarmtribute = getPageSetting('Rtributefarmamount');
    var tributes = game.buildings.Tribute.owned;
    var tributezones = tributefarmtribute[tributefarmindex];

    if (should && tributefarmzone.includes(game.global.world)) {
        if (game.global.lastClearedCell + 2 >= tributefarmcell && tributezones > tributes && tributezones > 0) {
            Rshouldtributefarm = true;
        }
    }
}

function RtributeFarmMap() {
    if (getPageSetting('Rtributefarmlevel') != 0) {
        levelzones = RtributeFarm(false, true, false, false);
        if (levelzones > 0) {
            document.getElementById("mapLevelInput").value = game.global.world;
            document.getElementById("advExtraLevelSelect").value = levelzones;
        } else if (levelzones < 0) {
            document.getElementById("mapLevelInput").value = (game.global.world + levelzones);
        }
    }

    biomeAdvMapsSelect.value = RtributeFarm(false, false, true, false);
    document.getElementById("advSpecialSelect").value = RtributeFarm(false, false, false, true);
    updateMapCost();
}

//Bogs

function Rbogs() {
    var bogzone = getPageSetting('Rblackbogzone');
    var bogamount = getPageSetting('Rblackbogamount');
    var bogindex = bogzone.indexOf(game.global.world);
    var stacks = 100;
    var stacksum = 0;

    for (var i = 0; i < (bogindex + 1); i++) {
        stacksum += parseInt(bogamount[i]);
    }

    var totalstacks = stacks - stacksum;

    if (bogzone.includes(game.global.world) && game.challenges.Quagmire.motivatedStacks > totalstacks) {
        Rshoulddobogs = true;
    }
}

//Praiding

function RPraid(daily) {
    var praidzone = daily ? getPageSetting('RdAMPraidzone') : getPageSetting('RAMPraidzone');
    var raidzone = daily ? getPageSetting('RdAMPraidraid') : getPageSetting('RAMPraidraid');

    var praidindex = praidzone.indexOf(game.global.world);
    var raidzones = raidzone[praidindex];

    var cell;
    cell = daily ? ((getPageSetting('RdAMPraidcell') != 0) ? getPageSetting('RdAMPraidcell')[praidindex] : 1) : ((getPageSetting('RAMPraidcell') != 0) ? getPageSetting('RAMPraidcell')[praidindex] : 1);

    if (praidzone.includes(game.global.world) && ((cell <= 1) || (cell > 1 && (game.global.lastClearedCell + 1) >= cell)) && Rgetequips(raidzones, false) > 0) {
        if (daily) {
            Rdshoulddopraid = true;
        } else Rshoulddopraid = true;
    }
}

function RAMPreset(daily) {

    if (!daily) {
        RAMPpMap1 = undefined;
        RAMPpMap2 = undefined;
        RAMPpMap3 = undefined;
        RAMPpMap4 = undefined;
        RAMPpMap5 = undefined;
        RAMPfragmappy = undefined;
        RAMPprefragmappy = undefined;
        RAMPmapbought1 = false;
        RAMPmapbought2 = false;
        RAMPmapbought3 = false;
        RAMPmapbought4 = false;
        RAMPmapbought5 = false;
        RAMPfragmappybought = false;
    } else {
        RdAMPpMap1 = undefined;
        RdAMPpMap2 = undefined;
        RdAMPpMap3 = undefined;
        RdAMPpMap4 = undefined;
        RdAMPpMap5 = undefined;
        RdAMPfragmappy = undefined;
        RdAMPprefragmappy = undefined;
        RdAMPmapbought1 = false;
        RdAMPmapbought2 = false;
        RdAMPmapbought3 = false;
        RdAMPmapbought4 = false;
        RdAMPmapbought5 = false;
        RdAMPfragmappybought = false;
    }

    var recycle = daily ? getPageSetting('RdAMPraidrecycle') : getPageSetting('RAMPraidrecycle');

    if (!daily) {

        if (RAMPrepMap1 != undefined) {
            if (recycle) {
                recycleMap(getMapIndex(RAMPrepMap1));
            }
            RAMPrepMap1 = undefined;
        }
        if (RAMPrepMap2 != undefined) {
            if (recycle) {
                recycleMap(getMapIndex(RAMPrepMap2));
            }
            RAMPrepMap2 = undefined;
        }
        if (RAMPrepMap3 != undefined) {
            if (recycle) {
                recycleMap(getMapIndex(RAMPrepMap3));
            }
            RAMPrepMap3 = undefined;
        }
        if (RAMPrepMap4 != undefined) {
            if (recycle) {
                recycleMap(getMapIndex(RAMPrepMap4));
            }
            RAMPrepMap4 = undefined;
        }
        if (RAMPrepMap5 != undefined) {
            if (recycle) {
                recycleMap(getMapIndex(RAMPrepMap5));
            }
            RAMPrepMap5 = undefined;
        }
    } else {

        if (RdAMPrepMap1 != undefined) {
            if (recyle) {
                recycleMap(getMapIndex(RdAMPrepMap1));
            }
            RdAMPrepMap1 = undefined;
        }
        if (RdAMPrepMap2 != undefined) {
            if (recyle) {
                recycleMap(getMapIndex(RdAMPrepMap2));
            }
            RdAMPrepMap2 = undefined;
        }
        if (RdAMPrepMap3 != undefined) {
            if (recyle) {
                recycleMap(getMapIndex(RdAMPrepMap3));
            }
            RdAMPrepMap3 = undefined;
        }
        if (RdAMPrepMap4 != undefined) {
            if (recyle) {
                recycleMap(getMapIndex(RdAMPrepMap4));
            }
            RdAMPrepMap4 = undefined;
        }
        if (RdAMPrepMap5 != undefined) {
            if (recyle) {
                recycleMap(getMapIndex(RdAMPrepMap5));
            }
            RdAMPrepMap5 = undefined;
        }
    }
}

function RAMP() {
    RAMPdone = false;
    var RAMPfragcheck = true;
    if (getPageSetting('RAMPraidfrag') > 0) {
        if (RAMPfrag() == true) {
            RAMPfragcheck = true;
            RAMPfragfarming = false;
        } else if (RAMPfrag() == false && !RAMPmapbought1 && !RAMPmapbought2 && !RAMPmapbought3 && !RAMPmapbought4 && !RAMPmapbought5 && Rshoulddopraid) {
            RAMPfragfarming = true;
            RAMPfragcheck = false;
            if (!RAMPfragcheck && RAMPfragmappy == undefined && !RAMPfragmappybought && game.global.preMapsActive && Rshoulddopraid) {
                debug("Check complete for frag map");
                RAMPfragmap();
                if ((updateMapCost(true) <= game.resources.fragments.owned)) {
                    buyMap();
                    RAMPfragmappybought = true;
                    if (RAMPfragmappybought) {
                        RAMPfragmappy = game.global.mapsOwnedArray[game.global.mapsOwnedArray.length - 1].id;
                        debug("frag map bought");
                    }
                }
            }
            if (!RAMPfragcheck && game.global.preMapsActive && !game.global.mapsActive && RAMPfragmappybought && RAMPfragmappy != undefined && Rshoulddopraid) {
                debug("running frag map");
                selectedMap = RAMPfragmappy;
                selectMap(RAMPfragmappy);
                runMap();
                RlastMapWeWereIn = getCurrentMapObject();
                RAMPprefragmappy = RAMPfragmappy;
                RAMPfragmappy = undefined;
            }
            if (!RAMPfragcheck && game.global.mapsActive && RAMPfragmappybought && RAMPprefragmappy != undefined && Rshoulddopraid) {
                if (RAMPfrag() == false) {
                    if (!game.global.repeatMap) {
                        repeatClicked();
                    }
                } else if (RAMPfrag() == true) {
                    if (game.global.repeatMap) {
                        repeatClicked();
                        mapsClicked();
                    }
                    if (game.global.preMapsActive && RAMPfragmappybought && RAMPprefragmappy != undefined && Rshoulddopraid) {
                        RAMPfragmappybought = false;
                    }
                    if (RAMPprefragmappy != undefined) {
                        recycleMap(getMapIndex(RAMPprefragmappy));
                        RAMPprefragmappy = undefined;
                    }
                    RAMPfragcheck = true;
                    RAMPfragfarming = false;
                }
            }
        } else {
            RAMPfragcheck = true;
            RAMPfragfarming = false;
        }
    }
    if (RAMPfragcheck && RAMPpMap5 == undefined && !RAMPmapbought5 && game.global.preMapsActive && Rshoulddopraid && RAMPshouldrunmap(0)) {
        debug("Check complete for 5th map");
        RAMPplusPres(0);
        if ((updateMapCost(true) <= game.resources.fragments.owned)) {
            buyMap();
            RAMPmapbought5 = true;
            if (RAMPmapbought5) {
                RAMPpMap5 = game.global.mapsOwnedArray[game.global.mapsOwnedArray.length - 1].id;
                debug("5th map bought");
            }
        }
    }
    if (RAMPfragcheck && RAMPpMap4 == undefined && !RAMPmapbought4 && game.global.preMapsActive && Rshoulddopraid && RAMPshouldrunmap(1)) {
        debug("Check complete for 4th map");
        RAMPplusPres(1);
        if ((updateMapCost(true) <= game.resources.fragments.owned)) {
            buyMap();
            RAMPmapbought4 = true;
            if (RAMPmapbought4) {
                RAMPpMap4 = game.global.mapsOwnedArray[game.global.mapsOwnedArray.length - 1].id;
                debug("4th map bought");
            }
        }
    }
    if (RAMPfragcheck && RAMPpMap3 == undefined && !RAMPmapbought3 && game.global.preMapsActive && Rshoulddopraid && RAMPshouldrunmap(2)) {
        debug("Check complete for 3rd map");
        RAMPplusPres(2);
        if ((updateMapCost(true) <= game.resources.fragments.owned)) {
            buyMap();
            RAMPmapbought3 = true;
            if (RAMPmapbought3) {
                RAMPpMap3 = game.global.mapsOwnedArray[game.global.mapsOwnedArray.length - 1].id;
                debug("3rd map bought");
            }
        }
    }
    if (RAMPfragcheck && RAMPpMap2 == undefined && !RAMPmapbought2 && game.global.preMapsActive && Rshoulddopraid && RAMPshouldrunmap(3)) {
        debug("Check complete for 2nd map");
        RAMPplusPres(3);
        if ((updateMapCost(true) <= game.resources.fragments.owned)) {
            buyMap();
            RAMPmapbought2 = true;
            if (RAMPmapbought2) {
                RAMPpMap2 = game.global.mapsOwnedArray[game.global.mapsOwnedArray.length - 1].id;
                debug("2nd map bought");
            }
        }
    }
    if (RAMPfragcheck && RAMPpMap1 == undefined && !RAMPmapbought1 && game.global.preMapsActive && Rshoulddopraid && RAMPshouldrunmap(4)) {
        debug("Check complete for 1st map");
        RAMPplusPres(4);
        if ((updateMapCost(true) <= game.resources.fragments.owned)) {
            buyMap();
            RAMPmapbought1 = true;
            if (RAMPmapbought1) {
                RAMPpMap1 = game.global.mapsOwnedArray[game.global.mapsOwnedArray.length - 1].id;
                debug("1st map bought");
            }
        }
    }
    if (RAMPfragcheck && !RAMPmapbought1 && !RAMPmapbought2 && !RAMPmapbought3 && !RAMPmapbought4 && !RAMPmapbought5) {
        RAMPpMap1 = undefined;
        RAMPpMap2 = undefined;
        RAMPpMap3 = undefined;
        RAMPpMap4 = undefined;
        RAMPpMap5 = undefined;
        debug("Failed to Prestige Raid. Looks like you can't afford to or have no equips to get!");
        Rshoulddopraid = false;
        autoTrimpSettings["RAutoMaps"].value = 0;
    }
    if (RAMPfragcheck && game.global.preMapsActive && !game.global.mapsActive && RAMPmapbought1 && RAMPpMap1 != undefined && Rshoulddopraid) {
        debug("running map 1");
        selectedMap = RAMPpMap1;
        selectMap(RAMPpMap1);
        runMap();
        RlastMapWeWereIn = getCurrentMapObject();
        RAMPrepMap1 = RAMPpMap1;
        RAMPpMap1 = undefined;
    }
    if (RAMPfragcheck && game.global.preMapsActive && !game.global.mapsActive && RAMPmapbought2 && RAMPpMap2 != undefined && Rshoulddopraid) {
        debug("running map 2");
        selectedMap = RAMPpMap2;
        selectMap(RAMPpMap2);
        runMap();
        RlastMapWeWereIn = getCurrentMapObject();
        RAMPrepMap2 = RAMPpMap2;
        RAMPpMap2 = undefined;
    }
    if (RAMPfragcheck && game.global.preMapsActive && !game.global.mapsActive && RAMPmapbought3 && RAMPpMap3 != undefined && Rshoulddopraid) {
        debug("running map 3");
        selectedMap = RAMPpMap3;
        selectMap(RAMPpMap3);
        runMap();
        RlastMapWeWereIn = getCurrentMapObject();
        RAMPrepMap3 = RAMPpMap3;
        RAMPpMap3 = undefined;
    }
    if (RAMPfragcheck && game.global.preMapsActive && !game.global.mapsActive && RAMPmapbought4 && RAMPpMap4 != undefined && Rshoulddopraid) {
        debug("running map 4");
        selectedMap = RAMPpMap4;
        selectMap(RAMPpMap4);
        runMap();
        RlastMapWeWereIn = getCurrentMapObject();
        RAMPrepMap4 = RAMPpMap4;
        RAMPpMap4 = undefined;
    }
    if (RAMPfragcheck && game.global.preMapsActive && !game.global.mapsActive && RAMPmapbought5 && RAMPpMap5 != undefined && Rshoulddopraid) {
        debug("running map 5");
        selectedMap = RAMPpMap5;
        selectMap(RAMPpMap5);
        runMap();
        RlastMapWeWereIn = getCurrentMapObject();
        RAMPrepMap5 = RAMPpMap5;
        RAMPpMap5 = undefined;
    }
}

function dRAMP() {
    RdAMPdone = false;
    debug("dcreatep selected");
    var RdAMPfragcheck = true;
    if (getPageSetting('RdAMPraidfrag') > 0) {
        if (RdAMPfrag() == true) {
            RdAMPfragcheck = true;
            RdAMPfragfarming = false;
        } else if (RdAMPfrag() == false && !RdAMPmapbought1 && !RdAMPmapbought2 && !RdAMPmapbought3 && !RdAMPmapbought4 && !RdAMPmapbought5 && Rdshoulddopraid) {
            RdAMPfragfarming = true;
            RdAMPfragcheck = false;
            if (!RdAMPfragcheck && RdAMPfragmappy == undefined && !RdAMPfragmappybought && game.global.preMapsActive && Rdshoulddopraid) {
                debug("Check complete for frag map");
                RdAMPfragmap();
                if ((updateMapCost(true) <= game.resources.fragments.owned)) {
                    buyMap();
                    RdAMPfragmappybought = true;
                    if (RdAMPfragmappybought) {
                        RdAMPfragmappy = game.global.mapsOwnedArray[game.global.mapsOwnedArray.length - 1].id;
                        debug("frag map bought");
                    }
                }
            }
            if (!RdAMPfragcheck && game.global.preMapsActive && !game.global.mapsActive && RdAMPfragmappybought && RdAMPfragmappy != undefined && Rdshoulddopraid) {
                debug("running frag map");
                selectedMap = RdAMPfragmappy;
                selectMap(RdAMPfragmappy);
                runMap();
                RlastMapWeWereIn = getCurrentMapObject();
                RdAMPprefragmappy = RdAMPfragmappy;
                RdAMPfragmappy = undefined;
            }
            if (!RdAMPfragcheck && game.global.mapsActive && RdAMPfragmappybought && RdAMPprefragmappy != undefined && Rdshoulddopraid) {
                if (RdAMPfrag() == false) {
                    if (!game.global.repeatMap) {
                        repeatClicked();
                    }
                } else if (RdAMPfrag() == true) {
                    if (game.global.repeatMap) {
                        repeatClicked();
                        mapsClicked();
                    }
                    if (game.global.preMapsActive && RdAMPfragmappybought && RdAMPprefragmappy != undefined && Rdshoulddopraid) {
                        RdAMPfragmappybought = false;
                    }
                    if (RdAMPprefragmappy != undefined) {
                        recycleMap(getMapIndex(RdAMPprefragmappy));
                        RdAMPprefragmappy = undefined;
                    }
                    RdAMPfragcheck = true;
                    RdAMPfragfarming = false;
                }
            }
        } else {
            RdAMPfragcheck = true;
            RdAMPfragfarming = false;
        }
    }
    if (RdAMPfragcheck && RdAMPpMap5 == undefined && !RdAMPmapbought5 && game.global.preMapsActive && Rdshoulddopraid && RdAMPshouldrunmap(0)) {
        debug("Check complete for 5th map");
        RdAMPplusPres(0);
        if ((updateMapCost(true) <= game.resources.fragments.owned)) {
            buyMap();
            RdAMPmapbought5 = true;
            if (RdAMPmapbought5) {
                RdAMPpMap5 = game.global.mapsOwnedArray[game.global.mapsOwnedArray.length - 1].id;
                debug("5th map bought");
            }
        }
    }
    if (RdAMPfragcheck && RdAMPpMap4 == undefined && !RdAMPmapbought4 && game.global.preMapsActive && Rdshoulddopraid && RdAMPshouldrunmap(1)) {
        debug("Check complete for 4th map");
        RdAMPplusPres(1);
        if ((updateMapCost(true) <= game.resources.fragments.owned)) {
            buyMap();
            RdAMPmapbought4 = true;
            if (RdAMPmapbought4) {
                RdAMPpMap4 = game.global.mapsOwnedArray[game.global.mapsOwnedArray.length - 1].id;
                debug("4th map bought");
            }
        }
    }
    if (RdAMPfragcheck && RdAMPpMap3 == undefined && !RdAMPmapbought3 && game.global.preMapsActive && Rdshoulddopraid && RdAMPshouldrunmap(2)) {
        debug("Check complete for 3rd map");
        RdAMPplusPres(2);
        if ((updateMapCost(true) <= game.resources.fragments.owned)) {
            buyMap();
            RdAMPmapbought3 = true;
            if (RdAMPmapbought3) {
                RdAMPpMap3 = game.global.mapsOwnedArray[game.global.mapsOwnedArray.length - 1].id;
                debug("3rd map bought");
            }
        }
    }
    if (RdAMPfragcheck && RdAMPpMap2 == undefined && !RdAMPmapbought2 && game.global.preMapsActive && Rdshoulddopraid && RdAMPshouldrunmap(3)) {
        debug("Check complete for 2nd map");
        RdAMPplusPres(3);
        if ((updateMapCost(true) <= game.resources.fragments.owned)) {
            buyMap();
            RdAMPmapbought2 = true;
            if (RdAMPmapbought2) {
                RdAMPpMap2 = game.global.mapsOwnedArray[game.global.mapsOwnedArray.length - 1].id;
                debug("2nd map bought");
            }
        }
    }
    if (RdAMPfragcheck && RdAMPpMap1 == undefined && !RdAMPmapbought1 && game.global.preMapsActive && Rdshoulddopraid && RdAMPshouldrunmap(4)) {
        debug("Check complete for 1st map");
        RdAMPplusPres(4);
        if ((updateMapCost(true) <= game.resources.fragments.owned)) {
            buyMap();
            RdAMPmapbought1 = true;
            if (RdAMPmapbought1) {
                RdAMPpMap1 = game.global.mapsOwnedArray[game.global.mapsOwnedArray.length - 1].id;
                debug("1st map bought");
            }
        }
    }
    if (RdAMPfragcheck && !RdAMPmapbought1 && !RdAMPmapbought2 && !RdAMPmapbought3 && !RdAMPmapbought4 && !RdAMPmapbought5) {
        RdAMPpMap1 = undefined;
        RdAMPpMap2 = undefined;
        RdAMPpMap3 = undefined;
        RdAMPpMap4 = undefined;
        RdAMPpMap5 = undefined;
        debug("Failed to Prestige Raid. Looks like you can't afford to or have no equips to get!");
        Rdshoulddopraid = false;
        autoTrimpSettings["RAutoMaps"].value = 0;
    }
    if (RdAMPfragcheck && game.global.preMapsActive && !game.global.mapsActive && RdAMPmapbought1 && RdAMPpMap1 != undefined && Rdshoulddopraid) {
        debug("running map 1");
        selectedMap = RdAMPpMap1;
        selectMap(RdAMPpMap1);
        runMap();
        RlastMapWeWereIn = getCurrentMapObject();
        RdAMPrepMap1 = RdAMPpMap1;
        RdAMPpMap1 = undefined;
    }
    if (RdAMPfragcheck && game.global.preMapsActive && !game.global.mapsActive && RdAMPmapbought2 && RdAMPpMap2 != undefined && Rdshoulddopraid) {
        debug("running map 2");
        selectedMap = RdAMPpMap2;
        selectMap(RdAMPpMap2);
        runMap();
        RlastMapWeWereIn = getCurrentMapObject();
        RdAMPrepMap2 = RdAMPpMap2;
        RdAMPpMap2 = undefined;
    }
    if (RdAMPfragcheck && game.global.preMapsActive && !game.global.mapsActive && RdAMPmapbought3 && RdAMPpMap3 != undefined && Rdshoulddopraid) {
        debug("running map 3");
        selectedMap = RdAMPpMap3;
        selectMap(RdAMPpMap3);
        runMap();
        RlastMapWeWereIn = getCurrentMapObject();
        RdAMPrepMap3 = RdAMPpMap3;
        RdAMPpMap3 = undefined;
    }
    if (RdAMPfragcheck && game.global.preMapsActive && !game.global.mapsActive && RdAMPmapbought4 && RdAMPpMap4 != undefined && Rdshoulddopraid) {
        debug("running map 4");
        selectedMap = RdAMPpMap4;
        selectMap(RdAMPpMap4);
        runMap();
        RlastMapWeWereIn = getCurrentMapObject();
        RdAMPrepMap4 = RdAMPpMap4;
        RdAMPpMap4 = undefined;
    }
    if (RdAMPfragcheck && game.global.preMapsActive && !game.global.mapsActive && RdAMPmapbought5 && RdAMPpMap5 != undefined && Rdshoulddopraid) {
        debug("running map 5");
        selectedMap = RdAMPpMap5;
        selectMap(RdAMPpMap5);
        runMap();
        RlastMapWeWereIn = getCurrentMapObject();
        RdAMPrepMap5 = RdAMPpMap5;
        RdAMPpMap5 = undefined;
    }
}

//Mayhem

function Rmayhem() {
    var hits = (getPageSetting('Rmayhemacut') > 0) ? getPageSetting('Rmayhemabcut') : 100;
    var hitssurv = (getPageSetting('Rmayhemhcut') > 0) ? getPageSetting('Rmayhemhcut') : 1;
    var enemyDamage = RcalcBadGuyDmg(null, RgetEnemyMaxAttack(game.global.world, 50, 'Snimp', 1.0));
    if (game.challenges.Mayhem.stacks > 0 && getPageSetting('Rmayhemattack') == true && (RcalcHDratio() > hits)) {
        Rshouldmayhem = 1;
    }
    if (game.challenges.Mayhem.stacks > 0 && getPageSetting('Rmayhemhealth') == true && (RcalcOurHealth() < (hitssurv * enemyDamage))) {
        Rshouldmayhem = 2;
    }
}

function RmayhemExtra() {
    var mayhemextra = 0;
    if (Rshouldmayhem > 0 && getPageSetting('Rmayhemmap') == 2) {
        mayhemextra = 0;
        var health = (RcalcOurHealth() * 2);
        var attack = RcalcOurDmg("avg", false, true);
        var boss = game.challenges.Mayhem.getBossMult();
        var hitsmap = (getPageSetting('Rmayhemamcut') > 0) ? getPageSetting('Rmayhemamcut') : 100;
        var hitssurv = (getPageSetting('Rmayhemhcut') > 0) ? getPageSetting('Rmayhemhcut') : 1;
        var mlevels = 6;
        var go = false;
        if (
            (((RcalcEnemyHealth(game.global.world + mlevels) / boss)) <= (attack * (hitsmap * (mlevels + 1)))) &&
            ((((RcalcBadGuyDmg(null, RgetEnemyMaxAttack((game.global.world + mlevels), 20, 'Snimp', 1.0))) / boss * 1.3) * (hitssurv)) <= health)
        ) {
            mayhemextra = mlevels;
            go = true;
        }
        if (!go) {
            mlevels = 5;
            if (
                (((RcalcEnemyHealth(game.global.world + mlevels) / boss)) <= (attack * (hitsmap * (mlevels + 1)))) &&
                ((((RcalcBadGuyDmg(null, RgetEnemyMaxAttack((game.global.world + mlevels), 20, 'Snimp', 1.0))) / boss * 1.3) * (hitssurv)) <= health)
            ) {
                mayhemextra = mlevels;
                go = true;
            }
        }
        if (!go) {
            mlevels = 4;
            if (
                (((RcalcEnemyHealth(game.global.world + mlevels) / boss)) <= (attack * (hitsmap * (mlevels + 1)))) &&
                ((((RcalcBadGuyDmg(null, RgetEnemyMaxAttack((game.global.world + mlevels), 20, 'Snimp', 1.0))) / boss * 1.3) * (hitssurv)) <= health)
            ) {
                mayhemextra = mlevels;
                go = true;
            }
        }
        if (!go) {
            mlevels = 3;
            if (
                (((RcalcEnemyHealth(game.global.world + mlevels) / boss)) <= (attack * (hitsmap * (mlevels + 1)))) &&
                ((((RcalcBadGuyDmg(null, RgetEnemyMaxAttack((game.global.world + mlevels), 20, 'Snimp', 1.0))) / boss * 1.3) * (hitssurv)) <= health)
            ) {
                mayhemextra = mlevels;
                go = true;
            }
        }
        if (!go) {
            mlevels = 2;
            if (
                (((RcalcEnemyHealth(game.global.world + mlevels) / boss)) <= (attack * (hitsmap * (mlevels + 1)))) &&
                ((((RcalcBadGuyDmg(null, RgetEnemyMaxAttack((game.global.world + mlevels), 20, 'Snimp', 1.0))) / boss * 1.3) * (hitssurv)) <= health)
            ) {
                mayhemextra = mlevels;
                go = true;
            }
        }
        if (!go) {
            mlevels = 1;
            if (
                (((RcalcEnemyHealth(game.global.world + mlevels) / boss)) <= (attack * (hitsmap * (mlevels + 1)))) &&
                ((((RcalcBadGuyDmg(null, RgetEnemyMaxAttack((game.global.world + mlevels), 20, 'Snimp', 1.0))) / boss * 1.3) * (hitssurv)) <= health)
            ) {
                mayhemextra = mlevels;
                go = true;
            }
        }
        if (!go) {
            mayhemextra = 0;
            go = true;
        }
    }
    return mayhemextra;
}

//Panda

function RpandaExtra() {
    var pandaextra = 1;
    if (Rshouldpanda == true && getPageSetting('Rpandamaps') == true) {
        pandaextra = 1;
        var health = (RcalcOurHealth() * 2);
        var attack = RcalcOurDmg("avg", false, true);
        var mult = (game.challenges.Pandemonium.getEnemyMult() * game.challenges.Pandemonium.getPandMult());
        var boss = game.challenges.Pandemonium.getBossMult();
        var hitsmap = (getPageSetting('Rpandahits') > 0) ? getPageSetting('Rpandahits') : 10;
        var hitssurv = 1;
        var mlevels = 6;
        var go = false;
        if (
            (((RcalcEnemyHealth(game.global.world + mlevels) / boss) * mult) <= (attack * (hitsmap * (mlevels + 1)))) &&
            ((((((RcalcBadGuyDmg(null, RgetEnemyMaxAttack((game.global.world + mlevels), 20, 'Snimp', 1.0))) / boss) * mult) * 1.3) * (hitssurv)) <= health)
        ) {
            pandaextra = mlevels;
            go = true;
        }
        if (!go) {
            mlevels = 5;
            if (
                (((RcalcEnemyHealth(game.global.world + mlevels) / boss) * mult) <= (attack * (hitsmap * (mlevels + 1)))) &&
                ((((((RcalcBadGuyDmg(null, RgetEnemyMaxAttack((game.global.world + mlevels), 20, 'Snimp', 1.0))) / boss) * mult) * 1.3) * (hitssurv)) <= health)
            ) {
                pandaextra = mlevels;
                go = true;
            }
        }
        if (!go) {
            mlevels = 4;
            if (
                (((RcalcEnemyHealth(game.global.world + mlevels) / boss) * mult) <= (attack * (hitsmap * (mlevels + 1)))) &&
                ((((((RcalcBadGuyDmg(null, RgetEnemyMaxAttack((game.global.world + mlevels), 20, 'Snimp', 1.0))) / boss) * mult) * 1.3) * (hitssurv)) <= health)
            ) {
                pandaextra = mlevels;
                go = true;
            }
        }
        if (!go) {
            mlevels = 3;
            if (
                (((RcalcEnemyHealth(game.global.world + mlevels) / boss) * mult) <= (attack * (hitsmap * (mlevels + 1)))) &&
                ((((((RcalcBadGuyDmg(null, RgetEnemyMaxAttack((game.global.world + mlevels), 20, 'Snimp', 1.0))) / boss) * mult) * 1.3) * (hitssurv)) <= health)
            ) {
                pandaextra = mlevels;
                go = true;
            }
        }
        if (!go) {
            mlevels = 2;
            if (
                (((RcalcEnemyHealth(game.global.world + mlevels) / boss) * mult) <= (attack * (hitsmap * (mlevels + 1)))) &&
                ((((((RcalcBadGuyDmg(null, RgetEnemyMaxAttack((game.global.world + mlevels), 20, 'Snimp', 1.0))) / boss) * mult) * 1.3) * (hitssurv)) <= health)
            ) {
                pandaextra = mlevels;
                go = true;
            }
        }
        if (!go) {
            mlevels = 1;
            pandaextra = mlevels;
            go = true;
        }
    }
    return pandaextra;
}

//Insanity

function Rinsanity(should, level, reset) {
    var insanityfarmzone = getPageSetting('Rinsanityfarmzone');
    var insanitystacksfarmindex = insanityfarmzone.indexOf(game.global.world);

    var insanityfarmlevel = getPageSetting('Rinsanityfarmlevel');
    if (level) return insanityfarmlevel[insanitystacksfarmindex];

    var insanityfarmstacks;
    var insanitystacks = game.challenges.Insanity.insanity;
    var maxinsanity = game.challenges.Insanity.maxInsanity;

    insanityfarmzone = getPageSetting('Rinsanityfarmzone');
    insanityfarmstacks = getPageSetting('Rinsanityfarmstack');

    var insanitystacksfarmindex = insanityfarmzone.indexOf(game.global.world);
    var insanitystackszones = insanityfarmstacks[insanitystacksfarmindex];
    if (insanitystackszones > maxinsanity) {
        insanitystackszones = maxinsanity;
    }

    if (should && insanityfarmzone.includes(game.global.world) && insanitystackszones != insanitystacks) {
        Rshouldinsanityfarm = true;
    }

    if (reset && !Rshouldinsanityfarm) {
        insanityfragmappy = undefined;
        insanityprefragmappy = undefined;
        insanityfragmappybought = false;
    }
}

function RinsanityMap() {
    var insanityfragcheck = true;
    if (getPageSetting('Rinsanityfarmfrag') == true) {
        if (insanityfrag() == true) {
            insanityfragcheck = true;
            Rinsanityfragfarming = false;
        } else if (insanityfrag() == false && Rshouldinsanityfarm) {
            Rinsanityfragfarming = true;
            insanityfragcheck = false;
            if (!insanityfragcheck && insanityfragmappy == undefined && !insanityfragmappybought && game.global.preMapsActive && Rshouldinsanityfarm) {
                debug("Check complete for insanity frag map");
                insanityfragmap();
                if ((updateMapCost(true) <= game.resources.fragments.owned)) {
                    buyMap();
                    insanityfragmappybought = true;
                    if (insanityfragmappybought) {
                        insanityfragmappy = game.global.mapsOwnedArray[game.global.mapsOwnedArray.length - 1].id;
                        debug("insanity frag map bought");
                    }
                }
            }
            if (!insanityfragcheck && game.global.preMapsActive && !game.global.mapsActive && insanityfragmappybought && insanityfragmappy != undefined && Rshouldinsanityfarm) {
                debug("running insanity frag map");
                selectedMap = insanityfragmappy;
                selectMap(insanityfragmappy);
                runMap();
                RlastMapWeWereIn = getCurrentMapObject();
                insanityprefragmappy = insanityfragmappy;
                insanityfragmappy = undefined;
            }
            if (!insanityfragcheck && game.global.mapsActive && insanityfragmappybought && insanityprefragmappy != undefined && Rshouldinsanityfarm) {
                if (insanityfrag() == false) {
                    if (!game.global.repeatMap) {
                        repeatClicked();
                    }
                } else if (insanityfrag() == true) {
                    if (game.global.repeatMap) {
                        repeatClicked();
                        mapsClicked();
                    }
                    if (game.global.preMapsActive && insanityfragmappybought && insanityprefragmappy != undefined && Rshouldinsanityfarm) {
                        insanityfragmappybought = false;
                    }
                    if (insanityprefragmappy != undefined) {
                        recycleMap(getMapIndex(insanityprefragmappy));
                        insanityprefragmappy = undefined;
                    }
                    insanityfragcheck = true;
                    Rinsanityfragfarming = false;
                }
            }
        } else {
            insanityfragcheck = true;
            Rinsanityfragfarming = false;
        }
    }
    if (insanityfragcheck && getPageSetting('Rinsanityfarmlevel') != 0) {

        var insanitylevelzones = Rinsanity(false, true, false);

        if (insanityfarmzone.includes(game.global.world)) {
            if (insanitylevelzones > 0) {
                insanityfragmin(insanitylevelzones);
                document.getElementById("mapLevelInput").value = game.global.world;
                document.getElementById("advExtraLevelSelect").value = insanitylevelzones;
            } else if (insanitylevelzones < 0) {
                insanityfragmin(insanitylevelzones);
                document.getElementById("mapLevelInput").value = (game.global.world + insanitylevelzones);
                document.getElementById("advExtraLevelSelect").value = 0;
            }
        }
    }
    updateMapCost();
}

//Storm

function Rstorm(should) {
    var stormzone = getPageSetting('Rstormzone');
    var stormHD = getPageSetting('RstormHD');
    var stormmult = getPageSetting('Rstormmult');
    var stormHDzone = (game.global.world - stormzone);
    var stormHDmult = (stormHDzone == 0) ? stormHD : Math.pow(stormmult, stormHDzone) * stormHD;

    if (should && game.global.world >= stormzone && RcalcHDratio() > stormHDmult) {
        Rshouldstormfarm = true;
    }
}

//Ships

function Rship(should, level, reset) {

    var shipfarmzone = getPageSetting('Rshipfarmzone');
    var shipamountfarmindex = shipfarmzone.indexOf(game.global.world);

    var shipfarmlevel = getPageSetting('Rshipfarmlevel');
    if (level) return shipfarmlevel[shipamountfarmindex];

    var shipfarmamount = getPageSetting('Rshipfarmamount');
    var ships = game.jobs.Worshipper.owned;
    var shipamountzones = shipfarmamount[shipamountfarmindex];

    if (getPageSetting('Rshipfarmamount') == 50) shipamountzones = 50;

    if (should && shipfarmzone.includes(game.global.world) && shipamountzones > ships) {
        Rshouldshipfarm = true;
    }

    if (reset && !Rshouldshipfarm) {
        shipfragmappy = undefined;
        shipprefragmappy = undefined;
        shipfragmappybought = false;
    }
}

function RshipMap() {
    var shipfragcheck = true;
    if (getPageSetting('Rshipfarmfrag') == true) {
        if (shipfrag() == true) {
            shipfragcheck = true;
            Rshipfragfarming = false;
        } else if (shipfrag() == false && Rshouldshipfarm) {
            Rshipfragfarming = true;
            shipfragcheck = false;
            if (!shipfragcheck && shipfragmappy == undefined && !shipfragmappybought && game.global.preMapsActive && Rshouldshipfarm) {
                debug("Check complete for ship frag map");
                shipfragmap();
                if ((updateMapCost(true) <= game.resources.fragments.owned)) {
                    buyMap();
                    shipfragmappybought = true;
                    if (shipfragmappybought) {
                        shipfragmappy = game.global.mapsOwnedArray[game.global.mapsOwnedArray.length - 1].id;
                        debug("ship frag map bought");
                    }
                }
            }
            if (!shipfragcheck && game.global.preMapsActive && !game.global.mapsActive && shipfragmappybought && shipfragmappy != undefined && Rshouldshipfarm) {
                debug("running ship frag map");
                selectedMap = shipfragmappy;
                selectMap(shipfragmappy);
                runMap();
                RlastMapWeWereIn = getCurrentMapObject();
                shipprefragmappy = shipfragmappy;
                shipfragmappy = undefined;
            }
            if (!shipfragcheck && game.global.mapsActive && shipfragmappybought && shipprefragmappy != undefined && Rshouldshipfarm) {
                if (shipfrag() == false) {
                    if (!game.global.repeatMap) {
                        repeatClicked();
                    }
                } else if (shipfrag() == true) {
                    if (game.global.repeatMap) {
                        repeatClicked();
                        mapsClicked();
                    }
                    if (game.global.preMapsActive && shipfragmappybought && shipprefragmappy != undefined && Rshouldshipfarm) {
                        shipfragmappybought = false;
                    }
                    if (shipprefragmappy != undefined) {
                        recycleMap(getMapIndex(shipprefragmappy));
                        shipprefragmappy = undefined;
                    }
                    shipfragcheck = true;
                    Rshipfragfarming = false;
                }
            }
        } else {
            shipfragcheck = true;
            Rshipfragfarming = false;
        }
    }
    if (shipfragcheck && getPageSetting('Rshipfarmlevel') != 0) {

        var shiplevelzones = Rship(false, true, false);

        if (Rshouldshipfarm) {
            if (shiplevelzones > 0) {
                shipfragmin(shiplevelzones);
                document.getElementById("mapLevelInput").value = game.global.world;
                document.getElementById("advExtraLevelSelect").value = shiplevelzones;
            } else if (shiplevelzones == 0) {
                shipfragmin(shiplevelzones);
                document.getElementById("mapLevelInput").value = game.global.world;
                document.getElementById("advExtraLevelSelect").value = 0;
            } else if (shiplevelzones < 0) {
                document.getElementById("mapLevelInput").value = (game.global.world + shiplevelzones);
                document.getElementById("advExtraLevelSelect").value = 0;
            }
        }
    }

    updateMapCost();
}

//Alch

function Ralch(should, level, reset) {
    var alchfarmzone = getPageSetting('Ralchfarmzone');
    var alchstacksfarmindex = alchfarmzone.indexOf(game.global.world);

    var alchfarmlevel = getPageSetting('Ralchfarmlevel');
    if (level) return alchfarmlevel[alchstacksfarmindex];

    var alchfarmstacks = getPageSetting('Ralchfarmstack');

    var alchstackszones = alchfarmstacks[alchstacksfarmindex];
    if (alchstackszones != undefined) {
        var potion;
        var potionletter = alchstackszones[0];
        if (potionletter == 'h') {
            potion = alchObj.getPotionCount('Herby Brew');
            potionletter = "Herby Brew";
        } else if (potionletter == 'f') {
            potion = alchObj.getPotionCount('Potion of Finding');
            potionletter = "Potion of Finding";
        } else if (potionletter == 'g') {
            potion = alchObj.getPotionCount('Gaseous Brew');
            potionletter = "Gaseous Brew";
        } else if (potionletter == 'v') {
            potion = alchObj.getPotionCount('Potion of the Void');
            potionletter = "Potion of the Void";
        } else if (potionletter == 's') {
            potion = alchObj.getPotionCount('Potion of Strength');
            potionletter = "Potion of Strength";
        }

        if (alchstackszones.substring(1) > potion) {
            alchObj.craftPotion(potionletter);
        }

        if (should && alchfarmzone.includes(game.global.world) && alchstackszones.substring(1) > potion) {
            Rshouldalchfarm = true;
        }
    }

    if (reset && !Rshouldalchfarm) {
        alchfragmappy = undefined;
        alchprefragmappy = undefined;
        alchfragmappybought = false;
    }
}

function RalchMap() {
    var alchfragcheck = true;
    if (getPageSetting('Ralchfarmfrag') == true) {
        if (alchfrag() == true) {
            alchfragcheck = true;
            Ralchfragfarming = false;
        } else if (alchfrag() == false && Rshouldalchfarm) {
            Ralchfragfarming = true;
            alchfragcheck = false;
            if (!alchfragcheck && alchfragmappy == undefined && !alchfragmappybought && game.global.preMapsActive && Rshouldalchfarm) {
                debug("Check complete for alch frag map");
                alchfragmap();
                if ((updateMapCost(true) <= game.resources.fragments.owned)) {
                    buyMap();
                    alchfragmappybought = true;
                    if (alchfragmappybought) {
                        alchfragmappy = game.global.mapsOwnedArray[game.global.mapsOwnedArray.length - 1].id;
                        debug("alch frag map bought");
                    }
                }
            }
            if (!alchfragcheck && game.global.preMapsActive && !game.global.mapsActive && alchfragmappybought && alchfragmappy != undefined && Rshouldalchfarm) {
                debug("running alch frag map");
                selectedMap = alchfragmappy;
                selectMap(alchfragmappy);
                runMap();
                RlastMapWeWereIn = getCurrentMapObject();
                alchprefragmappy = alchfragmappy;
                alchfragmappy = undefined;
            }
            if (!alchfragcheck && game.global.mapsActive && alchfragmappybought && alchprefragmappy != undefined && Rshouldalchfarm) {
                if (alchfrag() == false) {
                    if (!game.global.repeatMap) {
                        repeatClicked();
                    }
                } else if (alchfrag() == true) {
                    if (game.global.repeatMap) {
                        repeatClicked();
                        mapsClicked();
                    }
                    if (game.global.preMapsActive && alchfragmappybought && alchprefragmappy != undefined && Rshouldalchfarm) {
                        alchfragmappybought = false;
                    }
                    if (alchprefragmappy != undefined) {
                        recycleMap(getMapIndex(alchprefragmappy));
                        alchprefragmappy = undefined;
                    }
                    alchfragcheck = true;
                    Ralchfragfarming = false;
                }
            }
        } else {
            alchfragcheck = true;
            Ralchfragfarming = false;
        }
    }
    if (alchfragcheck && getPageSetting('Ralchfarmlevel') != 0) {
        if (alchfarmzone.includes(game.global.world)) {
            if (Rshouldalchfarm) {

                var alchfarmzone = getPageSetting('Ralchfarmzone');
                var alchfarmselection = getPageSetting('Ralchfarmselection')
                var alchlevelzones = Ralch(false, true, false);
                var alchfarmselectionindex = alchfarmzone.indexOf(game.global.world);
                var selection = alchfarmselection[alchfarmselectionindex];
                if (selection == 'Mountain') selection = "Mountain";
                else if (selection == 'Forest') selection = "Forest";
                else if (selection == 'Sea') selection = "Sea";
                else if (selection == 'Depths') selection = "Depths";
                else if (selection == 'Plentiful') selection = "Plentiful";
                else if (selection == 'Farmlands') selection = "Farmlands";

                alchfragmin(alchlevelzones, selection);
            }
        }
    }
    updateMapCost();
}

//Hypo

function Rhypo(should, level, reset) {
    var hypofarmzone = getPageSetting('Rhypofarmzone');
    var hypoamountfarmindex = hypofarmzone.indexOf(game.global.world);

    var hypofarmlevel = getPageSetting('Rhypofarmlevel');
    if (level) return hypofarmlevel[hypoamountfarmindex];

    var bonfire = game.challenges.Hypothermia.totalBonfires;
    var wood = game.resources.wood.max;
    var woodmax = wood * (1 + game.portal.Packrat.radLevel * game.portal.Packrat.modifier);
    woodmax = calcHeirloomBonus("Shield", "storageSize", woodmax, false);

    var hypofarmamount = getPageSetting('Rhypofarmstack');
    var hypoamountzones = hypofarmamount[hypoamountfarmindex];

    var currentprice = (1e10 * Math.pow(100, game.challenges.Hypothermia.totalBonfires));
    var targetprice = (currentprice * Math.pow(100, ((hypoamountzones - bonfire) - 1))) * 1.05;
    targetprice += (targetprice / 1000)
    var gofarmbonfire = false;
    if (game.resources.wood.owned < targetprice) {
        gofarmbonfire = true;
    }

    if (should && hypofarmzone.includes(game.global.world) && gofarmbonfire) {
        Rshouldhypofarm = true;
        Rhyposhouldwood = false;
    }
    if (should && hypofarmzone.includes(game.global.world)) {
        Rhyposhouldwood = false;
    }

    if (reset && !Rshouldhypofarm) {
        hypofragmappy = undefined;
        hypoprefragmappy = undefined;
        hypofragmappybought = false;
    }
}

function RhypoMap() {
    var hypofragcheck = true;
    if (getPageSetting('Rhypofarmfrag') == true) {
        if (hypofrag() == true) {
            hypofragcheck = true;
            Rhypofragfarming = false;
        } else if (hypofrag() == false && Rshouldhypofarm) {
            Rhypofragfarming = true;
            hypofragcheck = false;
            if (!hypofragcheck && hypofragmappy == undefined && !hypofragmappybought && game.global.preMapsActive && Rshouldhypofarm) {
                debug("Check complete for hypo frag map");
                hypofragmap();
                if ((updateMapCost(true) <= game.resources.fragments.owned)) {
                    buyMap();
                    hypofragmappybought = true;
                    if (hypofragmappybought) {
                        hypofragmappy = game.global.mapsOwnedArray[game.global.mapsOwnedArray.length - 1].id;
                        debug("hypo frag map bought");
                    }
                }
            }
            if (!hypofragcheck && game.global.preMapsActive && !game.global.mapsActive && hypofragmappybought && hypofragmappy != undefined && Rshouldhypofarm) {
                debug("running hypo frag map");
                selectedMap = hypofragmappy;
                selectMap(hypofragmappy);
                runMap();
                RlastMapWeWereIn = getCurrentMapObject();
                hypoprefragmappy = hypofragmappy;
                hypofragmappy = undefined;
            }
            if (!hypofragcheck && game.global.mapsActive && hypofragmappybought && hypoprefragmappy != undefined && Rshouldhypofarm) {
                if (hypofrag() == false) {
                    if (!game.global.repeatMap) {
                        repeatClicked();
                    }
                } else if (hypofrag() == true) {
                    if (game.global.repeatMap) {
                        repeatClicked();
                        mapsClicked();
                    }
                    if (game.global.preMapsActive && hypofragmappybought && hypoprefragmappy != undefined && Rshouldhypofarm) {
                        hypofragmappybought = false;
                    }
                    if (hypoprefragmappy != undefined) {
                        recycleMap(getMapIndex(hypoprefragmappy));
                        hypoprefragmappy = undefined;
                    }
                    hypofragcheck = true;
                    Rhypofragfarming = false;
                }
            }
        } else {
            hypofragcheck = true;
            Rhypofragfarming = false;
        }
    }
    if (hypofragcheck && getPageSetting('Rhypofarmlevel') != 0) {

        var hypolevelzones = Rhypo(false, true, false);

        if (hypofarmzone.includes(game.global.world)) {
            if (hypolevelzones > 0) {
                hypofragmin(hypolevelzones);
                document.getElementById("mapLevelInput").value = game.global.world;
                document.getElementById("advExtraLevelSelect").value = hypolevelzones;
            } else if (hypolevelzones == 0) {
                hypofragmin(hypolevelzones);
                document.getElementById("mapLevelInput").value = game.global.world;
                document.getElementById("advExtraLevelSelect").value = 0;
            } else if (hypolevelzones < 0) {
                hypofragmin(hypolevelzones);
                document.getElementById("mapLevelInput").value = (game.global.world + hypolevelzones);
                document.getElementById("advExtraLevelSelect").value = 0;
            }
        }
    }
    updateMapCost();
}

//Equip Farm

function RequipExtra() {
    var equipminus = 0;
    if (Rshouldequipfarm) {
        equipminus = 0;
        var health = (RcalcOurHealth() * 2);
        var attack = RcalcOurDmg("avg", false, true);
        var hits = (getPageSetting('Requipfarmhits') > 0) ? getPageSetting('Requipfarmhits') : 10;
        var hitssurv = (getPageSetting('Rhitssurvived') > 0) ? getPageSetting('Rhitssurvived') : 1;
        var mlevels = 0;
        var go = false;
        if (
            ((RcalcEnemyHealth(game.global.world + mlevels)) <= (attack * hits)) &&
            ((((RcalcBadGuyDmg(null, RgetEnemyMaxAttack((game.global.world + mlevels), 20, 'Snimp', 1.0))) * 0.8) * (hitssurv)) <= (health))
        ) {
            equipminus = mlevels;
            go = true;
        }
        if (!go) {
            mlevels = -1;
            if (
                ((RcalcEnemyHealth(game.global.world + mlevels)) <= (attack * hits)) &&
                ((((RcalcBadGuyDmg(null, RgetEnemyMaxAttack((game.global.world + mlevels), 20, 'Snimp', 1.0))) * 0.8) * (hitssurv)) <= (health))
            ) {
                equipminus = mlevels;
                go = true;
            }
        }
        if (!go) {
            mlevels = -2;
            if (
                ((RcalcEnemyHealth(game.global.world + mlevels)) <= (attack * hits)) &&
                ((((RcalcBadGuyDmg(null, RgetEnemyMaxAttack((game.global.world + mlevels), 20, 'Snimp', 1.0))) * 0.8) * (hitssurv)) <= (health))
            ) {
                equipminus = mlevels;
                go = true;
            }
        }
        if (!go) {
            mlevels = -3;
            if (
                ((RcalcEnemyHealth(game.global.world + mlevels)) <= (attack * hits)) &&
                ((((RcalcBadGuyDmg(null, RgetEnemyMaxAttack((game.global.world + mlevels), 20, 'Snimp', 1.0))) * 0.8) * (hitssurv)) <= (health))
            ) {
                equipminus = mlevels;
                go = true;
            }
        }
        if (!go) {
            mlevels = -4;
            if (
                ((RcalcEnemyHealth(game.global.world + mlevels)) <= (attack * hits)) &&
                ((((RcalcBadGuyDmg(null, RgetEnemyMaxAttack((game.global.world + mlevels), 20, 'Snimp', 1.0))) * 0.8) * (hitssurv)) <= (health))
            ) {
                equipminus = mlevels;
                go = true;
            }
        }
        if (!go) {
            mlevels = -5;
            if (
                ((RcalcEnemyHealth(game.global.world + mlevels)) <= (attack * hits)) &&
                ((((RcalcBadGuyDmg(null, RgetEnemyMaxAttack((game.global.world + mlevels), 20, 'Snimp', 1.0))) * 0.8) * (hitssurv)) <= (health))
            ) {
                equipminus = mlevels;
                go = true;
            }
        }
        if (!go) {
            equipminus = -6;
            go = true;
        }
    }
    return equipminus;
}

function Rshould(any, one) {
    if (any) {
        if (!Rshoulddopraid && !Rdshoulddopraid &&
            (RshouldDoMaps ||
                RdoVoids ||
                Rshouldtimefarm ||
                Rdshouldtimefarm ||
                Rshouldtributefarm ||
                Rshoulddoquest > 0 ||
                Rshouldmayhem > 0 ||
                Rshouldpanda ||
                Rshouldinsanityfarm ||
                Rshouldstormfarm ||
                Rshouldequipfarm ||
                Rshouldshipfarm ||
                Rshouldalchfarm ||
                Rshouldhypofarm)
        ) return true;
        else return false;
    }

    var should = "no";
    if (one && !Rshoulddopraid && !Rdshoulddopraid) {
        if (Rshouldmayhem) should = "mayhem";
        else if (Rshouldpanda) should = "panda";
        else if (Rshouldinsanityfarm) should = "insanity";
        else if (Rshouldalchfarm) should = "alch";
        else if (Rshouldhypofarm) should = "hypo";
        else if (Rshouldshipfarm) should = "ship";
        else if (Rshouldtimefarm) should = "time";
        else if (Rdshouldtimefarm) should = "dtime";
        else if (Rshouldtributefarm) should = "tribute";
        else if (Rshouldequipfarm) should = "equip";
    }
    if (should != "no") return should;
}

function RselectMap(selectedMap) {
    if (Rshould(true, false)) {
        if (selectedMap == "world") {
            if (Rshould(false, true) == "mayhem") {
                if (getPageSetting('Rmayhemmap') == 2) {
                    for (var map in game.global.mapsOwnedArray) {
                        if (!game.global.mapsOwnedArray[map].noRecycle && RmayhemExtra() >= 0 && ((game.global.world + RmayhemExtra()) == game.global.mapsOwnedArray[map].level)) {
                            selectedMap = game.global.mapsOwnedArray[map].id;
                            break;
                        } else {
                            selectedMap = "create";
                        }
                    }
                } else {
                    for (var map in game.global.mapsOwnedArray) {
                        if (!game.global.mapsOwnedArray[map].noRecycle && game.global.world == game.global.mapsOwnedArray[map].level) {
                            selectedMap = game.global.mapsOwnedArray[map].id;
                            break;
                        } else {
                            selectedMap = "create";
                        }
                    }
                }
            } else if (Rshould(false, true) == "panda") {
                if (getPageSetting('Rpandamaps') == true) {
                    for (var map in game.global.mapsOwnedArray) {
                        if (!game.global.mapsOwnedArray[map].noRecycle && RpandaExtra() >= 0 && ((game.global.world + RpandaExtra()) == game.global.mapsOwnedArray[map].level)) {
                            selectedMap = game.global.mapsOwnedArray[map].id;
                            break;
                        } else {
                            selectedMap = "create";
                        }
                    }
                }
            } else if (Rshould(false, true) == "insanity") {
                if (getPageSetting('Rinsanityfarmlevel') == 0) {
                    for (var map in game.global.mapsOwnedArray) {
                        if (!game.global.mapsOwnedArray[map].noRecycle && game.global.world == game.global.mapsOwnedArray[map].level) {
                            selectedMap = game.global.mapsOwnedArray[map].id;
                            break;
                        } else {
                            selectedMap = "create";
                        }
                    }
                } else if (getPageSetting('Rinsanityfarmlevel') != 0) {
                    var insanitylevelzones = Rinsanity(false, true, false);
                    if (insanitylevelzones > 0) {
                        for (var map in game.global.mapsOwnedArray) {
                            if (!game.global.mapsOwnedArray[map].noRecycle && ((game.global.world + insanitylevelzones) == game.global.mapsOwnedArray[map].level)) {
                                selectedMap = game.global.mapsOwnedArray[map].id;
                                break;
                            } else {
                                selectedMap = "create";
                            }
                        }
                    } else if (insanitylevelzones == 0) {
                        for (var map in game.global.mapsOwnedArray) {
                            if (!game.global.mapsOwnedArray[map].noRecycle && game.global.world == game.global.mapsOwnedArray[map].level) {
                                selectedMap = game.global.mapsOwnedArray[map].id;
                                break;
                            } else {
                                selectedMap = "create";
                            }
                        }
                    } else if (insanitylevelzones < 0) {
                        for (var map in game.global.mapsOwnedArray) {
                            if (!game.global.mapsOwnedArray[map].noRecycle && ((game.global.world + insanitylevelzones) == game.global.mapsOwnedArray[map].level)) {
                                selectedMap = game.global.mapsOwnedArray[map].id;
                                break;
                            } else {
                                selectedMap = "create";
                            }
                        }
                    }
                }
            } else if (Rshould(false, true) == "alch") {
                if (getPageSetting('Ralchfarmlevel') == 0) {
                    for (var map in game.global.mapsOwnedArray) {
                        if (!game.global.mapsOwnedArray[map].noRecycle && game.global.world == game.global.mapsOwnedArray[map].level) {
                            selectedMap = game.global.mapsOwnedArray[map].id;
                            break;
                        } else {
                            selectedMap = "create";
                        }
                    }
                } else if (getPageSetting('Ralchfarmlevel') != 0) {
                    var alchlevelzones = Ralch(false, true, false);
                    if (alchlevelzones > 0) {
                        for (var map in game.global.mapsOwnedArray) {
                            if (!game.global.mapsOwnedArray[map].noRecycle && ((game.global.world + alchlevelzones) == game.global.mapsOwnedArray[map].level)) {
                                selectedMap = game.global.mapsOwnedArray[map].id;
                                break;
                            } else {
                                selectedMap = "create";
                            }
                        }
                    } else if (alchlevelzones == 0) {
                        for (var map in game.global.mapsOwnedArray) {
                            if (!game.global.mapsOwnedArray[map].noRecycle && game.global.world == game.global.mapsOwnedArray[map].level) {
                                selectedMap = game.global.mapsOwnedArray[map].id;
                                break;
                            } else {
                                selectedMap = "create";
                            }
                        }
                    } else if (alchlevelzones < 0) {
                        for (var map in game.global.mapsOwnedArray) {
                            if (!game.global.mapsOwnedArray[map].noRecycle && ((game.global.world + alchlevelzones) == game.global.mapsOwnedArray[map].level)) {
                                selectedMap = game.global.mapsOwnedArray[map].id;
                                break;
                            } else {
                                selectedMap = "create";
                            }
                        }
                    }
                }
            } else if (Rshould(false, true) == "hypo") {
                if (getPageSetting('Rhypofarmlevel') == 0) {
                    for (var map in game.global.mapsOwnedArray) {
                        if (!game.global.mapsOwnedArray[map].noRecycle && game.global.world == game.global.mapsOwnedArray[map].level) {
                            selectedMap = game.global.mapsOwnedArray[map].id;
                            break;
                        } else {
                            selectedMap = "create";
                        }
                    }
                } else if (getPageSetting('Rhypofarmlevel') != 0) {
                    var hypolevelzones = Rhypo(false, true, false);
                    if (hypolevelzones > 0) {
                        for (var map in game.global.mapsOwnedArray) {
                            if (!game.global.mapsOwnedArray[map].noRecycle && ((game.global.world + hypolevelzones) == game.global.mapsOwnedArray[map].level)) {
                                selectedMap = game.global.mapsOwnedArray[map].id;
                                break;
                            } else {
                                selectedMap = "create";
                            }
                        }
                    } else if (hypolevelzones == 0) {
                        for (var map in game.global.mapsOwnedArray) {
                            if (!game.global.mapsOwnedArray[map].noRecycle && game.global.world == game.global.mapsOwnedArray[map].level) {
                                selectedMap = game.global.mapsOwnedArray[map].id;
                                break;
                            } else {
                                selectedMap = "create";
                            }
                        }
                    } else if (hypolevelzones < 0) {
                        for (var map in game.global.mapsOwnedArray) {
                            if (!game.global.mapsOwnedArray[map].noRecycle && ((game.global.world + hypolevelzones) == game.global.mapsOwnedArray[map].level)) {
                                selectedMap = game.global.mapsOwnedArray[map].id;
                                break;
                            } else {
                                selectedMap = "create";
                            }
                        }
                    }
                }
            } else if (Rshould(false, true) == "ship") {
                if (getPageSetting('Rshipfarmlevel') == 0) {
                    for (var map in game.global.mapsOwnedArray) {
                        if (!game.global.mapsOwnedArray[map].noRecycle && game.global.world == game.global.mapsOwnedArray[map].level && game.global.mapsOwnedArray[map].bonus == "lsc") {
                            selectedMap = game.global.mapsOwnedArray[map].id;
                            break;
                        } else {
                            selectedMap = "create";
                        }
                    }
                } else if (getPageSetting('Rshipfarmlevel') != 0) {
                    var shiplevelzones = Rship(false, true, false);
                    if (shiplevelzones > 0) {
                        for (var map in game.global.mapsOwnedArray) {
                            if (!game.global.mapsOwnedArray[map].noRecycle && ((game.global.world + shiplevelzones) == game.global.mapsOwnedArray[map].level) && game.global.mapsOwnedArray[map].bonus == "lsc") {
                                selectedMap = game.global.mapsOwnedArray[map].id;
                                break;
                            } else {
                                selectedMap = "create";
                            }
                        }
                    } else if (shiplevelzones == 0) {
                        for (var map in game.global.mapsOwnedArray) {
                            if (!game.global.mapsOwnedArray[map].noRecycle && game.global.world == game.global.mapsOwnedArray[map].level && game.global.mapsOwnedArray[map].bonus == "lsc") {
                                selectedMap = game.global.mapsOwnedArray[map].id;
                                break;
                            } else {
                                selectedMap = "create";
                            }
                        }
                    } else if (shiplevelzones < 0) {
                        for (var map in game.global.mapsOwnedArray) {
                            if (!game.global.mapsOwnedArray[map].noRecycle && ((game.global.world + shiplevelzones) == game.global.mapsOwnedArray[map].level) && game.global.mapsOwnedArray[map].bonus == "lsc") {
                                selectedMap = game.global.mapsOwnedArray[map].id;
                                break;
                            } else {
                                selectedMap = "create";
                            }
                        }
                    }
                }
            } else if (Rshould(false, true) == "time") {
                if (getPageSetting('Rtimefarmlevel') == 0) {
                    for (var map in game.global.mapsOwnedArray) {
                        if (!game.global.mapsOwnedArray[map].noRecycle && game.global.world == game.global.mapsOwnedArray[map].level) {
                            selectedMap = game.global.mapsOwnedArray[map].id;
                            break;
                        } else {
                            selectedMap = "create";
                        }
                    }
                } else if (getPageSetting('Rtimefarmlevel') != 0) {
                    var levelzones = RtimeFarm(false, true, false, false, false);
                    if (levelzones > 0) {
                        for (var map in game.global.mapsOwnedArray) {
                            if (!game.global.mapsOwnedArray[map].noRecycle && ((game.global.world + levelzones) == game.global.mapsOwnedArray[map].level)) {
                                selectedMap = game.global.mapsOwnedArray[map].id;
                                break;
                            } else {
                                selectedMap = "create";
                            }
                        }
                    } else if (levelzones == 0) {
                        for (var map in game.global.mapsOwnedArray) {
                            if (!game.global.mapsOwnedArray[map].noRecycle && game.global.world == game.global.mapsOwnedArray[map].level) {
                                selectedMap = game.global.mapsOwnedArray[map].id;
                                break;
                            } else {
                                selectedMap = "create";
                            }
                        }
                    } else if (levelzones < 0) {
                        for (var map in game.global.mapsOwnedArray) {
                            if (!game.global.mapsOwnedArray[map].noRecycle && ((game.global.world + levelzones) == game.global.mapsOwnedArray[map].level)) {
                                selectedMap = game.global.mapsOwnedArray[map].id;
                                break;
                            } else {
                                selectedMap = "create";
                            }
                        }
                    }
                }
            } else if (Rshould(false, true) == "dtime") {
                if (getPageSetting('Rdtimefarmlevel') == 0) {
                    for (var map in game.global.mapsOwnedArray) {
                        if (!game.global.mapsOwnedArray[map].noRecycle && game.global.world == game.global.mapsOwnedArray[map].level) {
                            selectedMap = game.global.mapsOwnedArray[map].id;
                            break;
                        } else {
                            selectedMap = "create";
                        }
                    }
                } else if (getPageSetting('Rdtimefarmlevel') != 0) {
                    var dlevelzones = RtimeFarm(false, true, false, false, true);
                    if (dlevelzones > 0) {
                        for (var map in game.global.mapsOwnedArray) {
                            if (!game.global.mapsOwnedArray[map].noRecycle && ((game.global.world + dlevelzones) == game.global.mapsOwnedArray[map].level)) {
                                selectedMap = game.global.mapsOwnedArray[map].id;
                                break;
                            } else {
                                selectedMap = "create";
                            }
                        }
                    } else if (dlevelzones == 0) {
                        for (var map in game.global.mapsOwnedArray) {
                            if (!game.global.mapsOwnedArray[map].noRecycle && game.global.world == game.global.mapsOwnedArray[map].level) {
                                selectedMap = game.global.mapsOwnedArray[map].id;
                                break;
                            } else {
                                selectedMap = "create";
                            }
                        }
                    } else if (dlevelzones < 0) {
                        for (var map in game.global.mapsOwnedArray) {
                            if (!game.global.mapsOwnedArray[map].noRecycle && ((game.global.world + dlevelzones) == game.global.mapsOwnedArray[map].level)) {
                                selectedMap = game.global.mapsOwnedArray[map].id;
                                break;
                            } else {
                                selectedMap = "create";
                            }
                        }
                    }
                }
            } else if (Rshould(false, true) == "tribute") {
                var levelzones = RtributeFarm(false, true, false, false);
                if (levelzones > 0) {
                    for (var map in game.global.mapsOwnedArray) {
                        if (!game.global.mapsOwnedArray[map].noRecycle && ((game.global.world + levelzones) == game.global.mapsOwnedArray[map].level)) {
                            selectedMap = game.global.mapsOwnedArray[map].id;
                            break;
                        } else {
                            selectedMap = "create";
                        }
                    }
                } else if (levelzones == 0) {
                    for (var map in game.global.mapsOwnedArray) {
                        if (!game.global.mapsOwnedArray[map].noRecycle && game.global.world == game.global.mapsOwnedArray[map].level) {
                            selectedMap = game.global.mapsOwnedArray[map].id;
                            break;
                        } else {
                            selectedMap = "create";
                        }
                    }
                } else if (levelzones < 0) {
                    for (var map in game.global.mapsOwnedArray) {
                        if (!game.global.mapsOwnedArray[map].noRecycle && ((game.global.world + levelzones) == game.global.mapsOwnedArray[map].level)) {
                            selectedMap = game.global.mapsOwnedArray[map].id;
                            break;
                        } else {
                            selectedMap = "create";
                        }
                    }
                }
            } else if (Rshould(false, true) == "equip") {
                for (var map in game.global.mapsOwnedArray) {
                    if (!game.global.mapsOwnedArray[map].noRecycle && RequipExtra() <= 0 && ((game.global.world + RequipExtra()) == game.global.mapsOwnedArray[map].level)) {
                        selectedMap = game.global.mapsOwnedArray[map].id;
                        break;
                    } else {
                        selectedMap = "create";
                    }
                }
            } else {
                for (var map in game.global.mapsOwnedArray) {
                    if (!game.global.mapsOwnedArray[map].noRecycle && game.global.world == game.global.mapsOwnedArray[map].level) {
                        selectedMap = game.global.mapsOwnedArray[map].id;
                        break;
                    } else {
                        selectedMap = "create";
                    }
                }
            }
        }
    }
    return selectedMap;
}

function RmapRepeat(selectedMap, shouldDoHealthMaps, restartVoidMap) {
    var doDefaultMapBonus = game.global.mapBonus < getPageSetting('RMaxMapBonuslimit') - 1;
    if (
        (RvanillaMAZ) ||
        (Rshoulddopraid || (Rshoulddopraid && RAMPfragfarming)) ||
        (Rdshoulddopraid || (Rdshoulddopraid && RdAMPfragfarming)) ||
        (Rshouldinsanityfarm || (Rshouldinsanityfarm && Rinsanityfragfarming)) ||
        (Rshouldalchfarm || (Rshouldalchfarm && Ralchfragfarming)) ||
        (Rshouldhypofarm || (Rshouldhypofarm && Rhypofragfarming)) ||
        (Rshouldshipfarm || (Rshouldshipfarm && Rshipfragfarming)) ||
        (selectedMap == game.global.currentMapId && 
         (!getCurrentMapObject().noRecycle && 
          (doDefaultMapBonus || 
           RvanillaMAZ || 
           RdoMaxMapBonus || 
           RshouldFarm || 
           Rshouldtimefarm || 
           Rdshouldtimefarm || 
           Rshouldtributefarm || 
           Rshoulddobogs || 
           (Rshoulddoquest > 0) || 
           (Rshouldmayhem > 0) || 
           Rshouldpanda || 
           Rshouldstormfarm || 
           Rshouldequipfarm
          )
         )
        )
       ) 
    {
        if (!game.global.repeatMap) {
            repeatClicked();
        }
        if (
            (Rshoulddopraid && !RAMPfragfarming) || 
            (Rdshoulddopraid && !RdAMPfragfarming)
           ) 
        {
            if (game.options.menu.repeatUntil.enabled != 2) {
                game.options.menu.repeatUntil.enabled = 2;
            }

        } else if (
            ((Rshoulddopraid && RAMPfragfarming) || (Rdshoulddopraid && RdAMPfragfarming)) || 
            (Rshouldinsanityfarm && Rinsanityfragfarming) || 
            (Rshouldalchfarm && Ralchfragfarming) || 
            (Rshouldhypofarm && Rhypofragfarming) || 
            (Rshouldshipfarm && Rshipfragfarming)
        )
        {
            if (game.options.menu.repeatUntil.enabled != 0) {
                game.options.menu.repeatUntil.enabled = 0;
            }
        }

        if (
            !Rshoulddopraid && 
            !RAMPfragfarming && 
            !Rdshoulddopraid && 
            !RdAMPfragfarming && 
            !Rshouldinsanityfarm && 
            !Rinsanityfragfarming && 
            !Rshouldalchfarm && 
            !Rshouldhypofarm && 
            !Rhypofragfarming && 
            !Ralchfragfarming && 
            !Rshoulddobogs && 
            !RshouldDoMaps && 
            !Rshouldtimefarm && 
            !Rdshouldtimefarm && 
            !Rshouldtributefarm && 
            Rshoulddoquest <= 0 && 
            Rshouldmayhem <= 0 && 
            !Rshouldpanda && 
            !Rshouldstormfarm && 
            !Rshouldequipfarm && 
            !Rshouldshipfarm && 
            !Rshipfragfarming
           ) 
        {
            repeatClicked();
        }
        if (shouldDoHealthMaps && game.global.mapBonus >= getPageSetting('RMaxMapBonushealth')) {
            repeatClicked();
            shouldDoHealthMaps = false;
        }
        if (RdoMaxMapBonus && game.global.mapBonus < getPageSetting('RMaxMapBonuslimit')) {
            repeatClicked();
            RdoMaxMapBonus = false;
        }
        if (game.global.repeatMap &&
            (Rshoulddoquest == 3 && game.global.mapBonus >= 4) ||
            (Rshoulddopraid && RAMPfragfarming && RAMPfrag() == true) ||
            (Rdshoulddopraid && RdAMPfragfarming && RdAMPfrag() == true) ||
            (Rshouldinsanityfarm && Rinsanityfragfarming && insanityfrag() == true) ||
            (Rshouldalchfarm && Ralchfragfarming && alchfrag() == true) ||
            (Rshouldhypofarm && Rhypofragfarming && hypofrag() == true) ||
            (Rshouldshipfarm && Rshipfragfarming && shipfrag() == true)
           ) 
        {
            repeatClicked();
        }

    } 
    
    else {
        if (game.global.repeatMap) {
            repeatClicked();
        }
        if (restartVoidMap) {
            mapsClicked(true);
        }
    }
}

function RquestMap(quest) {
    biomeAdvMapsSelect.value = "Plentiful";
    if (quest == 4) {
        document.getElementById("advSpecialSelect").value = "hc";
        updateMapCost();
        if (updateMapCost(true) > game.resources.fragments.owned) {
            document.getElementById("advSpecialSelect").value = "fa";
            updateMapCost();
            if (updateMapCost(true) > game.resources.fragments.owned) {
                document.getElementById("advSpecialSelect").value = 0;
                updateMapCost();
            }
        }
    }
    if (quest == 7) {
        document.getElementById("advSpecialSelect").value = "hc";
        updateMapCost();
        if (updateMapCost(true) > game.resources.fragments.owned) {
            document.getElementById("advSpecialSelect").value = "lc";
            updateMapCost();
            if (updateMapCost(true) > game.resources.fragments.owned) {
                document.getElementById("advSpecialSelect").value = "fa";
                updateMapCost();
                if (updateMapCost(true) > game.resources.fragments.owned) {
                    document.getElementById("advSpecialSelect").value = 0;
                    updateMapCost();
                }
            }
        }
    }
    if (quest == 10) {
        document.getElementById("advSpecialSelect").value = "lsc";
        updateMapCost();
        if (updateMapCost(true) > game.resources.fragments.owned) {
            document.getElementById("advSpecialSelect").value = "ssc";
            updateMapCost();
            if (updateMapCost(true) > game.resources.fragments.owned) {
                document.getElementById("advSpecialSelect").value = "fa";
                updateMapCost();
                if (updateMapCost(true) > game.resources.fragments.owned) {
                    document.getElementById("advSpecialSelect").value = 0;
                    updateMapCost();
                }
            }
        }
    }
    if (quest == 11) {
        document.getElementById("advSpecialSelect").value = "lwc";
        updateMapCost();
        if (updateMapCost(true) > game.resources.fragments.owned) {
            document.getElementById("advSpecialSelect").value = "swc";
            updateMapCost();
            if (updateMapCost(true) > game.resources.fragments.owned) {
                document.getElementById("advSpecialSelect").value = "fa";
                updateMapCost();
                if (updateMapCost(true) > game.resources.fragments.owned) {
                    document.getElementById("advSpecialSelect").value = 0;
                    updateMapCost();
                }
            }
        }
    }
    if (quest == 12) {
        document.getElementById("advSpecialSelect").value = "lmc";
        updateMapCost();
        if (updateMapCost(true) > game.resources.fragments.owned) {
            document.getElementById("advSpecialSelect").value = "smc";
            updateMapCost();
            if (updateMapCost(true) > game.resources.fragments.owned) {
                document.getElementById("advSpecialSelect").value = "fa";
                updateMapCost();
                if (updateMapCost(true) > game.resources.fragments.owned) {
                    document.getElementById("advSpecialSelect").value = 0;
                    updateMapCost();
                }
            }
        }
    }
    if (quest == 13) {
        document.getElementById("advSpecialSelect").value = "fa";
        updateMapCost();
        if (updateMapCost(true) > game.resources.fragments.owned) {
            document.getElementById("advSpecialSelect").value = 0;
            updateMapCost();
        }
    }
    if (quest == 14) {
        document.getElementById("advSpecialSelect").value = "fa";
        updateMapCost();
        if (updateMapCost(true) > game.resources.fragments.owned) {
            document.getElementById("advSpecialSelect").value = 0;
            updateMapCost();
        }
    }
    if (updateMapCost(true) > game.resources.fragments.owned) {
        biomeAdvMapsSelect.value = "Random";
        updateMapCost();
    }
}

function RlevelMap(what) {
    var extra = 0;
    if (what == "mayhem") {
        extra = RmayhemExtra();
    } else if (what == "panda") {
        extra = RpandaExtra();
    } else if (what == "equip") {
        extra = RequipExtra();
    }
    mapLevelInput.value = (game.global.world + extra);
    biomeAdvMapsSelect.value = "Random";
    document.getElementById("advSpecialSelect").value = (what == "equip") ? "lmc" : "fa";
    document.getElementById("advExtraLevelSelect").value = extra;
    updateMapCost();
}
