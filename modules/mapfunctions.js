//RAutoMap Functions

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
