/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/CharacterFacory.ts":
/*!********************************!*\
  !*** ./src/CharacterFacory.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.getCharacter = void 0;\nconst Dan_Heng_IL_1 = __webpack_require__(/*! ./CharacterInstances/Destruction/Dan_Heng_IL */ \"./src/CharacterInstances/Destruction/Dan_Heng_IL.ts\");\nfunction getCharacter(characterInfo, stats) {\n    if (characterInfo.id === 1213) {\n        return new Dan_Heng_IL_1.Dan_Heng_IL(characterInfo.level, characterInfo.rank, characterInfo.basic_level, characterInfo.skill_level, characterInfo.ultimate_level, characterInfo.talent_level, characterInfo.trace1, characterInfo.trace2, characterInfo.trace3, stats);\n    }\n}\nexports.getCharacter = getCharacter;\n\n\n//# sourceURL=webpack:///./src/CharacterFacory.ts?");

/***/ }),

/***/ "./src/CharacterInstances/Destruction/Dan_Heng_IL.ts":
/*!***********************************************************!*\
  !*** ./src/CharacterInstances/Destruction/Dan_Heng_IL.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Dan_Heng_IL = void 0;\nconst LocalInterfaces_1 = __webpack_require__(/*! ../../LocalInterfaces */ \"./src/LocalInterfaces.ts\");\nconst scenarioSetting_1 = __webpack_require__(/*! ../../scenarioSetting */ \"./src/scenarioSetting.ts\");\nconst _CharacterAbstract_1 = __webpack_require__(/*! ../_CharacterAbstract */ \"./src/CharacterInstances/_CharacterAbstract.ts\");\nclass Dan_Heng_IL_Local_Context {\n    constructor() {\n        this.maxRighteousHeart = 6;\n        this.RighteousHeartGainPerAttack = 1;\n        this.maxRighteousHeart = 6;\n        this.localBuffs = {};\n    }\n}\n//store info for each turn\nclass Dan_Heng_IL_In_Turn_Context {\n    constructor(DracoreLibreCount = 0) {\n        this.DracoreLibreCount = DracoreLibreCount;\n    }\n}\nclass Dan_Heng_IL extends _CharacterAbstract_1.Character {\n    constructor(level, eidolon, basic_level, skill_level, ultimate_level, talent_level, trace1, trace2, trace3, stats) {\n        const name = \"Dan Heng IL\";\n        const path = \"destruction\";\n        const element = \"imaginary\";\n        // Basic for Fulgurant Leap\n        const basic_data = [\n            (0, scenarioSetting_1.getBasicCoefficientDependentStats)({ ATK: 1 }),\n            (0, scenarioSetting_1.getBasicCoefficientDependentStats)({ ATK: 2.6 }),\n            (0, scenarioSetting_1.getBasicCoefficientDependentStats)({ ATK: 3.8 }),\n            (0, scenarioSetting_1.getBasicCoefficientDependentStats)({ ATK: 5 })\n        ];\n        // Skill for Dracore Libre\n        const skill_data = (0, scenarioSetting_1.getSkillTalentCoef)(0.06);\n        const ultimate_data = (0, scenarioSetting_1.getUltimateCoefficientDependentStats)({ ATK: 1.5 });\n        const talent_data = (0, scenarioSetting_1.getSkillTalentCoef)(0.05);\n        super(name, eidolon, path, element, level, basic_level, skill_level, ultimate_level, talent_level, trace1, trace2, trace3, basic_data, skill_data, ultimate_data, talent_data, stats);\n        this.localContext = new Dan_Heng_IL_Local_Context();\n        this.inTurnContext = new Dan_Heng_IL_In_Turn_Context();\n    }\n    addEidolons(context) {\n        if (this.eidolon >= 1) {\n            this.localContext.maxRighteousHeart += 4;\n            this.localContext.RighteousHeartGainPerAttack += 1;\n        }\n        if (this.eidolon >= 6) {\n            const buff = new LocalInterfaces_1.Buff();\n            buff.effect.resMultiplierIncrease += 0.2 * 3;\n            buff.notes.push(`E6 Reign, Returned: After any other ally uses their Ultimate, the Imaginary RES PEN of Dan Heng • Imbibitor Lunae's next Fulgurant Leap attack increases by 20%, up to 3 stacks.`);\n            this.localContext.localBuffs.LeapResPen = buff;\n        }\n    }\n    addTraces(context) {\n        if (this.trace3) {\n            const buff = new LocalInterfaces_1.Buff();\n            const criticalDamageIncrease = 0.24;\n            buff.statsBoost.criticalDamage += criticalDamageIncrease;\n            buff.notes.push(`Jolt Anew: This character's CRIT DMG increases by ${round(criticalDamageIncrease * 100)}% when dealing DMG to enemy targets with Imaginary Weakness.`);\n            this.localContext.localBuffs.imagWeakCritDamageIncrease = buff;\n        }\n    }\n    addPassiveSkill(context) {\n        const buff = new LocalInterfaces_1.Buff();\n        const eachHeartGain = this.talent_data[this.talent_level - 1];\n        const talentBoost = eachHeartGain * this.localContext.maxRighteousHeart / 2;\n        buff.effect.boostMultiplierIncrease += talentBoost;\n        buff.notes.push(`Righteous Heart: Damage increase by ${round(talentBoost * 100)} (Approximated)%`);\n        this.localContext.localBuffs.RighteousHeart = buff;\n        //add Dracore Libre\n        const critDamageIncreasePerStack = this.skill_data[this.skill_level - 1];\n        const buff2 = new LocalInterfaces_1.Buff({ effectiveField: [\"basic attack\"] });\n        const critDamageIncrease = critDamageIncreasePerStack * 2.2;\n        buff2.statsBoost.criticalDamage += critDamageIncreasePerStack * 2.2;\n        buff2.notes.push(`Dracore Libre: CRIT DMG increase by ${round(critDamageIncrease * 100)}%`);\n        this.localContext.localBuffs.DracoreLibre = buff2;\n    }\n    getDisplayData1(context, currentCharacterIndex) {\n        throw new Error(\"Method not implemented.\");\n    }\n    getDisplayData2(context, currentCharacterIndex) {\n        throw new Error(\"Method not implemented.\");\n    }\n    getDisplayData3(context, currentCharacterIndex) {\n        throw new Error(\"Method not implemented.\");\n    }\n}\nexports.Dan_Heng_IL = Dan_Heng_IL;\n\n\n//# sourceURL=webpack:///./src/CharacterInstances/Destruction/Dan_Heng_IL.ts?");

/***/ }),

/***/ "./src/CharacterInstances/_CharacterAbstract.ts":
/*!******************************************************!*\
  !*** ./src/CharacterInstances/_CharacterAbstract.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Character = void 0;\nclass Character {\n    constructor(name, eidolon, path, element, level, basic_level, skill_level, ultimdate_level, talent_level, trace1, trace2, trace3, basic_data, skill_data, ultimate_data, talent_data, stats) {\n        this.name = name;\n        this.eidolon = eidolon;\n        this.path = path;\n        this.element = element;\n        this.level = level;\n        this.basic_level = basic_level;\n        this.skill_level = skill_level;\n        this.ultimate_level = ultimdate_level;\n        this.talent_level = talent_level;\n        this.trace1 = trace1;\n        this.trace2 = trace2;\n        this.trace3 = trace3;\n        this.basic_data = basic_data;\n        this.skill_data = skill_data;\n        this.ultimate_data = ultimate_data;\n        this.talent_data = talent_data;\n        this.stats = stats;\n    }\n    //add directly onto the BuffList\n    //instead of return a buff or bufflist because some modification to local context is necessary\n    addPassiveSkill(context) {\n        throw new Error(\"Method not implemented.\");\n    }\n    addTraces(context) {\n        throw new Error(\"Method not implemented.\");\n    }\n    addEidolons(context) {\n        throw new Error(\"Method not implemented.\");\n    }\n    //add the effect of passive, eidolon. etc\n    addEffect(context) {\n        this.addEidolons(context);\n        this.addTraces(context);\n        this.addPassiveSkill(context);\n    }\n}\nexports.Character = Character;\n\n\n//# sourceURL=webpack:///./src/CharacterInstances/_CharacterAbstract.ts?");

/***/ }),

/***/ "./src/LocalInterfaces.ts":
/*!********************************!*\
  !*** ./src/LocalInterfaces.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.EnemyInstances = exports.OnEnemySpecialEffect = exports.SpecialEffects = exports.StatsBoost = exports.Buff = exports.OnEnemyDeBuff = void 0;\nclass SpecialEffects {\n    constructor(boostMultiplierIncrease = 0, resMultiplierIncrease = 0, shieldAbsorb = 0, defReduction = 0) {\n        this.boostMultiplierIncrease = boostMultiplierIncrease;\n        this.resMultiplierIncrease = resMultiplierIncrease;\n        this.defReduction = defReduction;\n        this.shieldAbsorb = shieldAbsorb;\n    }\n}\nexports.SpecialEffects = SpecialEffects;\nclass OnEnemySpecialEffect {\n    constructor(vulnerabilityMultiplierIncrease = 0, defReduction = 0, resMultiplierIncrease = 0, toughnessMultiplierIncrease = 0) {\n        this.vulnerabilityMultiplierIncrease = vulnerabilityMultiplierIncrease;\n        this.defReduction = defReduction;\n        this.resMultiplierIncrease = resMultiplierIncrease;\n        this.toughnessMultiplierIncrease = toughnessMultiplierIncrease;\n    }\n}\nexports.OnEnemySpecialEffect = OnEnemySpecialEffect;\nclass StatsBoost {\n    constructor() {\n        this.hp = 0;\n        this.hpPercentage = 0;\n        this.attack = 0;\n        this.attackPercentage = 0;\n        this.defense = 0;\n        this.defensePercentage = 0;\n        this.speed = 0;\n        this.speedPercentage = 0;\n        this.criticalChance = 0;\n        this.criticalDamage = 0;\n        this.stanceBreakRatio = 0;\n        this.healRatio = 0;\n        this.spRatio = 0;\n        this.statusProbability = 0;\n        this.statusResistance = 0;\n        this.physicalAddHurt = 0;\n        this.fireAddHurt = 0;\n        this.iceAddHurt = 0;\n        this.elecAddHurt = 0;\n        this.windAddHurt = 0;\n        this.quantumAddHurt = 0;\n        this.imaginaryAddHurt = 0;\n    }\n}\nexports.StatsBoost = StatsBoost;\nclass Buff {\n    constructor({ target = 0, effectiveField = [\"basic attack\", \"skill\", \"ultimate\", \"follow up\"], statsBoost = new StatsBoost(), effect = new SpecialEffects(), notes = [] } = {}) {\n        this.target = target;\n        this.effectiveField = effectiveField;\n        this.statsBoost = statsBoost;\n        this.effect = effect;\n        this.notes = notes;\n    }\n}\nexports.Buff = Buff;\nclass OnEnemyDeBuff {\n    constructor({ effect = new OnEnemySpecialEffect(), notes = [] } = {}) {\n        this.effect = effect;\n        this.notes = notes;\n    }\n}\nexports.OnEnemyDeBuff = OnEnemyDeBuff;\nclass EnemyInstances {\n    constructor(level = 80, toughness = 0.9, baseRes = 1) {\n        this.level = level;\n        this.toughness = toughness;\n        this.baseRes = baseRes;\n    }\n}\nexports.EnemyInstances = EnemyInstances;\n\n\n//# sourceURL=webpack:///./src/LocalInterfaces.ts?");

/***/ }),

/***/ "./src/RelicFactory.ts":
/*!*****************************!*\
  !*** ./src/RelicFactory.ts ***!
  \*****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.getRelicSetList = exports.Relic = void 0;\nconst Band_of_Sizzling_Thunder_1 = __importDefault(__webpack_require__(/*! ./RelicInstances/Band_of_Sizzling_Thunder */ \"./src/RelicInstances/Band_of_Sizzling_Thunder.ts\"));\nconst Belobog_of_the_Architects_1 = __importDefault(__webpack_require__(/*! ./RelicInstances/Belobog_of_the_Architects */ \"./src/RelicInstances/Belobog_of_the_Architects.ts\"));\nconst Broken_Keel_1 = __importDefault(__webpack_require__(/*! ./RelicInstances/Broken_Keel */ \"./src/RelicInstances/Broken_Keel.ts\"));\nconst Celestial_Differentiator_1 = __importDefault(__webpack_require__(/*! ./RelicInstances/Celestial_Differentiator */ \"./src/RelicInstances/Celestial_Differentiator.ts\"));\nconst Champion_of_Streetwise_Boxing_1 = __importDefault(__webpack_require__(/*! ./RelicInstances/Champion_of_Streetwise_Boxing */ \"./src/RelicInstances/Champion_of_Streetwise_Boxing.ts\"));\nconst Eagle_of_Twilight_Line_1 = __importDefault(__webpack_require__(/*! ./RelicInstances/Eagle_of_Twilight_Line */ \"./src/RelicInstances/Eagle_of_Twilight_Line.ts\"));\nconst Firesmith_of_Lava_Forging_1 = __importDefault(__webpack_require__(/*! ./RelicInstances/Firesmith_of_Lava_Forging */ \"./src/RelicInstances/Firesmith_of_Lava_Forging.ts\"));\nconst Fleet_of_the_Ageless_1 = __importDefault(__webpack_require__(/*! ./RelicInstances/Fleet_of_the_Ageless */ \"./src/RelicInstances/Fleet_of_the_Ageless.ts\"));\nconst Genius_of_Brilliant_Stars_1 = __importDefault(__webpack_require__(/*! ./RelicInstances/Genius_of_Brilliant_Stars */ \"./src/RelicInstances/Genius_of_Brilliant_Stars.ts\"));\nconst Guard_of_Wuthering_Snow_1 = __importDefault(__webpack_require__(/*! ./RelicInstances/Guard_of_Wuthering_Snow */ \"./src/RelicInstances/Guard_of_Wuthering_Snow.ts\"));\nconst Hunter_of_Glacial_Forest_1 = __importDefault(__webpack_require__(/*! ./RelicInstances/Hunter_of_Glacial_Forest */ \"./src/RelicInstances/Hunter_of_Glacial_Forest.ts\"));\nconst Inert_Salsotto_1 = __importDefault(__webpack_require__(/*! ./RelicInstances/Inert_Salsotto */ \"./src/RelicInstances/Inert_Salsotto.ts\"));\nconst Izumo_Gensei_and_Takama_Divine_Realm_1 = __importDefault(__webpack_require__(/*! ./RelicInstances/Izumo_Gensei_and_Takama_Divine_Realm */ \"./src/RelicInstances/Izumo_Gensei_and_Takama_Divine_Realm.ts\"));\nconst Knight_of_Purity_Palace_1 = __importDefault(__webpack_require__(/*! ./RelicInstances/Knight_of_Purity_Palace */ \"./src/RelicInstances/Knight_of_Purity_Palace.ts\"));\nconst Longevous_Disciple_1 = __importDefault(__webpack_require__(/*! ./RelicInstances/Longevous_Disciple */ \"./src/RelicInstances/Longevous_Disciple.ts\"));\nconst Messenger_Traversing_Hackerspace_1 = __importDefault(__webpack_require__(/*! ./RelicInstances/Messenger_Traversing_Hackerspace */ \"./src/RelicInstances/Messenger_Traversing_Hackerspace.ts\"));\nconst Musketeer_of_Wild_Wheat_1 = __importDefault(__webpack_require__(/*! ./RelicInstances/Musketeer_of_Wild_Wheat */ \"./src/RelicInstances/Musketeer_of_Wild_Wheat.ts\"));\nconst Pan_Cosmic_Commercial_Enterprise_1 = __importDefault(__webpack_require__(/*! ./RelicInstances/Pan_Cosmic_Commercial_Enterprise */ \"./src/RelicInstances/Pan_Cosmic_Commercial_Enterprise.ts\"));\nconst Passerby_of_Wandering_Cloud_1 = __importDefault(__webpack_require__(/*! ./RelicInstances/Passerby_of_Wandering_Cloud */ \"./src/RelicInstances/Passerby_of_Wandering_Cloud.ts\"));\nconst Penacony_Land_of_the_Dreams_1 = __importDefault(__webpack_require__(/*! ./RelicInstances/Penacony_Land_of_the_Dreams */ \"./src/RelicInstances/Penacony_Land_of_the_Dreams.ts\"));\nconst Pioneer_Diver_of_Dead_Waters_1 = __importDefault(__webpack_require__(/*! ./RelicInstances/Pioneer_Diver_of_Dead_Waters */ \"./src/RelicInstances/Pioneer_Diver_of_Dead_Waters.ts\"));\nconst Prisoner_in_Deep_Confinement_1 = __importDefault(__webpack_require__(/*! ./RelicInstances/Prisoner_in_Deep_Confinement */ \"./src/RelicInstances/Prisoner_in_Deep_Confinement.ts\"));\nconst Rutilant_Arena_1 = __importDefault(__webpack_require__(/*! ./RelicInstances/Rutilant_Arena */ \"./src/RelicInstances/Rutilant_Arena.ts\"));\nconst Sigonia_the_Unclaimed_Desolation_1 = __importDefault(__webpack_require__(/*! ./RelicInstances/Sigonia_the_Unclaimed_Desolation */ \"./src/RelicInstances/Sigonia_the_Unclaimed_Desolation.ts\"));\nconst Space_Sealing_Station_1 = __importDefault(__webpack_require__(/*! ./RelicInstances/Space_Sealing_Station */ \"./src/RelicInstances/Space_Sealing_Station.ts\"));\nconst Sprightly_Vonwacq_1 = __importDefault(__webpack_require__(/*! ./RelicInstances/Sprightly_Vonwacq */ \"./src/RelicInstances/Sprightly_Vonwacq.ts\"));\nconst Talia_Kingdom_of_Banditry_1 = __importDefault(__webpack_require__(/*! ./RelicInstances/Talia_Kingdom_of_Banditry */ \"./src/RelicInstances/Talia_Kingdom_of_Banditry.ts\"));\nconst The_Ashblazing_Grand_Duke_1 = __importDefault(__webpack_require__(/*! ./RelicInstances/The_Ashblazing_Grand_Duke */ \"./src/RelicInstances/The_Ashblazing_Grand_Duke.ts\"));\nconst Thief_of_Shooting_Meteor_1 = __importDefault(__webpack_require__(/*! ./RelicInstances/Thief_of_Shooting_Meteor */ \"./src/RelicInstances/Thief_of_Shooting_Meteor.ts\"));\nconst Wastelander_of_Banditry_Desert_1 = __importDefault(__webpack_require__(/*! ./RelicInstances/Wastelander_of_Banditry_Desert */ \"./src/RelicInstances/Wastelander_of_Banditry_Desert.ts\"));\nconst Watchmaker_Master_of_Dream_Machinations_1 = __importDefault(__webpack_require__(/*! ./RelicInstances/Watchmaker_Master_of_Dream_Machinations */ \"./src/RelicInstances/Watchmaker_Master_of_Dream_Machinations.ts\"));\nclass Relic {\n    constructor(level, type, setID, setName, rarity, mainAffix) {\n        this.level = level;\n        this.type = type;\n        this.setName = setName;\n        this.setID = setID;\n        this.rarity = rarity;\n        this.mainAffix = mainAffix;\n        this.subAffix = [];\n    }\n}\nexports.Relic = Relic;\nfunction getRelicSet(setID, count) {\n    if (setID === 101) {\n        return new Passerby_of_Wandering_Cloud_1.default(count);\n    }\n    if (setID === 102) {\n        return new Musketeer_of_Wild_Wheat_1.default(count);\n    }\n    if (setID === 103) {\n        return new Knight_of_Purity_Palace_1.default(count);\n    }\n    if (setID === 104) {\n        return new Hunter_of_Glacial_Forest_1.default(count);\n    }\n    if (setID === 105) {\n        return new Champion_of_Streetwise_Boxing_1.default(count);\n    }\n    if (setID === 106) {\n        return new Guard_of_Wuthering_Snow_1.default(count);\n    }\n    if (setID === 107) {\n        return new Firesmith_of_Lava_Forging_1.default(count);\n    }\n    if (setID === 108) {\n        return new Genius_of_Brilliant_Stars_1.default(count);\n    }\n    if (setID === 109) {\n        return new Band_of_Sizzling_Thunder_1.default(count);\n    }\n    if (setID === 110) {\n        return new Eagle_of_Twilight_Line_1.default(count);\n    }\n    if (setID === 111) {\n        return new Thief_of_Shooting_Meteor_1.default(count);\n    }\n    if (setID === 112) {\n        return new Wastelander_of_Banditry_Desert_1.default(count);\n    }\n    if (setID === 113) {\n        return new Longevous_Disciple_1.default(count);\n    }\n    if (setID === 114) {\n        return new Messenger_Traversing_Hackerspace_1.default(count);\n    }\n    if (setID === 115) {\n        return new The_Ashblazing_Grand_Duke_1.default(count);\n    }\n    if (setID === 116) {\n        return new Prisoner_in_Deep_Confinement_1.default(count);\n    }\n    if (setID === 117) {\n        return new Pioneer_Diver_of_Dead_Waters_1.default(count);\n    }\n    if (setID === 118) {\n        return new Watchmaker_Master_of_Dream_Machinations_1.default(count);\n    }\n    if (setID === 301) {\n        return new Space_Sealing_Station_1.default(count);\n    }\n    if (setID === 302) {\n        return new Fleet_of_the_Ageless_1.default(count);\n    }\n    if (setID === 303) {\n        return new Pan_Cosmic_Commercial_Enterprise_1.default(count);\n    }\n    if (setID === 304) {\n        return new Belobog_of_the_Architects_1.default(count);\n    }\n    if (setID == 305) {\n        return new Celestial_Differentiator_1.default(count);\n    }\n    if (setID === 306) {\n        return new Inert_Salsotto_1.default(count);\n    }\n    if (setID === 307) {\n        return new Talia_Kingdom_of_Banditry_1.default(count);\n    }\n    if (setID === 308) {\n        return new Sprightly_Vonwacq_1.default(count);\n    }\n    if (setID === 309) {\n        return new Rutilant_Arena_1.default(count);\n    }\n    if (setID === 310) {\n        return new Broken_Keel_1.default(count);\n    }\n    if (setID === 311) {\n        return new Firesmith_of_Lava_Forging_1.default(count);\n    }\n    if (setID === 312) {\n        return new Penacony_Land_of_the_Dreams_1.default(count);\n    }\n    if (setID === 313) {\n        return new Sigonia_the_Unclaimed_Desolation_1.default(count);\n    }\n    if (setID === 314) {\n        return new Izumo_Gensei_and_Takama_Divine_Realm_1.default(count);\n    }\n    return undefined;\n}\nfunction getRelicSetList(relicList) {\n    const RelicCounts = new Map();\n    for (let relic of relicList) {\n        const count = RelicCounts.get(relic.setID) || 0;\n        RelicCounts.set(relic.setID, count + 1);\n    }\n    const output = [];\n    for (const [ID, count] of RelicCounts) {\n        const set = getRelicSet(ID, count);\n        if (set !== undefined) {\n            output.push(set);\n        }\n    }\n    return output;\n}\nexports.getRelicSetList = getRelicSetList;\n\n\n//# sourceURL=webpack:///./src/RelicFactory.ts?");

/***/ }),

/***/ "./src/RelicInstances/Band_of_Sizzling_Thunder.ts":
/*!********************************************************!*\
  !*** ./src/RelicInstances/Band_of_Sizzling_Thunder.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst LocalInterfaces_1 = __webpack_require__(/*! ../LocalInterfaces */ \"./src/LocalInterfaces.ts\");\nclass Band_of_Sizzling_Thunder {\n    constructor(count) {\n        this.count = count;\n        this.setName = \"Band of Sizzling Thunder\";\n    }\n    getInBattleEffect() {\n        const buff = new LocalInterfaces_1.Buff();\n        buff.statsBoost.attackPercentage += 0.2;\n        buff.notes.push(`${this.setName}: When the wearer uses Skill, increases the wearer's ATK by 20% for 1 turn(s).`);\n        return buff;\n    }\n}\nexports[\"default\"] = Band_of_Sizzling_Thunder;\n\n\n//# sourceURL=webpack:///./src/RelicInstances/Band_of_Sizzling_Thunder.ts?");

/***/ }),

/***/ "./src/RelicInstances/Belobog_of_the_Architects.ts":
/*!*********************************************************!*\
  !*** ./src/RelicInstances/Belobog_of_the_Architects.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst LocalInterfaces_1 = __webpack_require__(/*! ../LocalInterfaces */ \"./src/LocalInterfaces.ts\");\nclass Belobog_of_the_Architects {\n    constructor(count) {\n        this.count = count;\n        this.setName = \"Belobog of the Architects\";\n    }\n    getInBattleEffect() {\n        const buff = new LocalInterfaces_1.Buff();\n        buff.statsBoost.defensePercentage += 0.15;\n        buff.notes.push(`${this.setName}: When the wearer's Effect Hit Rate is 50% or higher, the wearer gains an extra 15% DEF (effective).`);\n        return buff;\n    }\n}\nexports[\"default\"] = Belobog_of_the_Architects;\n\n\n//# sourceURL=webpack:///./src/RelicInstances/Belobog_of_the_Architects.ts?");

/***/ }),

/***/ "./src/RelicInstances/Broken_Keel.ts":
/*!*******************************************!*\
  !*** ./src/RelicInstances/Broken_Keel.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst LocalInterfaces_1 = __webpack_require__(/*! ../LocalInterfaces */ \"./src/LocalInterfaces.ts\");\nclass Broken_Keel {\n    constructor(count) {\n        this.count = count;\n        this.setName = \"Broken Keel\";\n    }\n    getInBattleEffect() {\n        const buff = new LocalInterfaces_1.Buff({ target: [0, 1, 2, 3] });\n        buff.statsBoost.criticalDamage += 0.1;\n        buff.notes.push(`${this.setName}: When the wearer's Effect RES is at 30% or higher, all allies' CRIT DMG increases by 10% (effective).`);\n        return buff;\n    }\n}\nexports[\"default\"] = Broken_Keel;\n\n\n//# sourceURL=webpack:///./src/RelicInstances/Broken_Keel.ts?");

/***/ }),

/***/ "./src/RelicInstances/Celestial_Differentiator.ts":
/*!********************************************************!*\
  !*** ./src/RelicInstances/Celestial_Differentiator.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst LocalInterfaces_1 = __webpack_require__(/*! ../LocalInterfaces */ \"./src/LocalInterfaces.ts\");\nclass Celestial_Differentiator {\n    constructor(count) {\n        this.count = count;\n        this.setName = \"Celestial Differentiator\";\n    }\n    getInBattleEffect() {\n        const buff = new LocalInterfaces_1.Buff();\n        //buff.notes.push(`${this.setName}: Increases the wearer's CRIT DMG by 16%. When the wearer's current CRIT DMG reaches 120% or higher, after entering battle, the wearer's CRIT Rate increases by 60% until the end of their first attack.`)\n        return buff;\n    }\n}\nexports[\"default\"] = Celestial_Differentiator;\n\n\n//# sourceURL=webpack:///./src/RelicInstances/Celestial_Differentiator.ts?");

/***/ }),

/***/ "./src/RelicInstances/Champion_of_Streetwise_Boxing.ts":
/*!*************************************************************!*\
  !*** ./src/RelicInstances/Champion_of_Streetwise_Boxing.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst LocalInterfaces_1 = __webpack_require__(/*! ../LocalInterfaces */ \"./src/LocalInterfaces.ts\");\nclass Champion_of_Streetwise_Boxing {\n    constructor(count) {\n        this.count = count;\n        this.setName = \"Champion of Streetwise Boxing\";\n    }\n    getInBattleEffect() {\n        const buff = new LocalInterfaces_1.Buff();\n        buff.statsBoost.attackPercentage += 0.5 * 5;\n        buff.notes.push(`${this.setName}: After the wearer attacks or is hit, their ATK increases by 5% for the rest of the battle. This effect can stack up to 5 time(s).`);\n        return buff;\n    }\n}\nexports[\"default\"] = Champion_of_Streetwise_Boxing;\n\n\n//# sourceURL=webpack:///./src/RelicInstances/Champion_of_Streetwise_Boxing.ts?");

/***/ }),

/***/ "./src/RelicInstances/Eagle_of_Twilight_Line.ts":
/*!******************************************************!*\
  !*** ./src/RelicInstances/Eagle_of_Twilight_Line.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst LocalInterfaces_1 = __webpack_require__(/*! ../LocalInterfaces */ \"./src/LocalInterfaces.ts\");\nclass Eagle_of_Twilight_Line {\n    constructor(count) {\n        this.count = count;\n        this.setName = \"Eagle of Twilight Line\";\n    }\n    getInBattleEffect() {\n        const buff = new LocalInterfaces_1.Buff();\n        //buff.notes.push(`${this.setName}: After the wearer uses their Ultimate, their action is Advanced Forward by 25%.`)\n        return buff;\n    }\n}\nexports[\"default\"] = Eagle_of_Twilight_Line;\n\n\n//# sourceURL=webpack:///./src/RelicInstances/Eagle_of_Twilight_Line.ts?");

/***/ }),

/***/ "./src/RelicInstances/Firesmith_of_Lava_Forging.ts":
/*!*********************************************************!*\
  !*** ./src/RelicInstances/Firesmith_of_Lava_Forging.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst LocalInterfaces_1 = __webpack_require__(/*! ../LocalInterfaces */ \"./src/LocalInterfaces.ts\");\nclass Firesmith_of_Lava_Forging {\n    constructor(count) {\n        this.count = count;\n        this.setName = \"Firesmith of Lava-Forging\";\n    }\n    getInBattleEffect() {\n        const buff = new LocalInterfaces_1.Buff({ effectiveField: [\"skill\"] });\n        buff.effect.boostMultiplierIncrease += 0.12;\n        buff.notes.push(`${this.setName}: Increases the wearer's Skill DMG by 12% (effective)`);\n        const buff2 = new LocalInterfaces_1.Buff();\n        buff2.statsBoost.fireAddHurt += 0.12;\n        buff2.notes.push(`${this.setName}: After unleashing Ultimate, increases the wearer's Fire DMG by 12% for next attack (effective).`);\n        return [buff, buff2];\n    }\n}\nexports[\"default\"] = Firesmith_of_Lava_Forging;\n\n\n//# sourceURL=webpack:///./src/RelicInstances/Firesmith_of_Lava_Forging.ts?");

/***/ }),

/***/ "./src/RelicInstances/Fleet_of_the_Ageless.ts":
/*!****************************************************!*\
  !*** ./src/RelicInstances/Fleet_of_the_Ageless.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst LocalInterfaces_1 = __webpack_require__(/*! ../LocalInterfaces */ \"./src/LocalInterfaces.ts\");\nclass Fleet_of_the_Ageless {\n    constructor(count) {\n        this.count = count;\n        this.setName = \"Fleet of the Ageless\";\n    }\n    getInBattleEffect() {\n        const buff = new LocalInterfaces_1.Buff({ target: [0, 1, 2, 3] });\n        buff.statsBoost.attackPercentage += 0.08;\n        buff.notes.push(`${this.setName}: When the wearer's SPD reaches 120 or higher, all allies' ATK increases by 8% (effective).`);\n        return buff;\n    }\n}\nexports[\"default\"] = Fleet_of_the_Ageless;\n\n\n//# sourceURL=webpack:///./src/RelicInstances/Fleet_of_the_Ageless.ts?");

/***/ }),

/***/ "./src/RelicInstances/Genius_of_Brilliant_Stars.ts":
/*!*********************************************************!*\
  !*** ./src/RelicInstances/Genius_of_Brilliant_Stars.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst LocalInterfaces_1 = __webpack_require__(/*! ../LocalInterfaces */ \"./src/LocalInterfaces.ts\");\nclass Genius_of_Brilliant_Stars {\n    constructor(count) {\n        this.count = count;\n        this.setName = \"Genius of Brilliant Stars\";\n    }\n    getInBattleEffect() {\n        const buff = new LocalInterfaces_1.Buff();\n        buff.effect.defReduction += 0.2;\n        buff.notes.push(`${this.setName}: When the wearer deals DMG to the target enemy, ignores 10% DEF.\n            If the target enemy has Quantum Weakness, the wearer additionally ignores 10% DEF.\n            (currently 20% DEF Reduction Applied)`);\n        return buff;\n    }\n}\nexports[\"default\"] = Genius_of_Brilliant_Stars;\n\n\n//# sourceURL=webpack:///./src/RelicInstances/Genius_of_Brilliant_Stars.ts?");

/***/ }),

/***/ "./src/RelicInstances/Guard_of_Wuthering_Snow.ts":
/*!*******************************************************!*\
  !*** ./src/RelicInstances/Guard_of_Wuthering_Snow.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst LocalInterfaces_1 = __webpack_require__(/*! ../LocalInterfaces */ \"./src/LocalInterfaces.ts\");\nclass Guard_of_Wuthering_Snow {\n    constructor(count) {\n        this.count = count;\n        this.setName = \"Guard of Wuthering Snow\";\n    }\n    getInBattleEffect() {\n        const buff = new LocalInterfaces_1.Buff();\n        /*\n        buff.notes.push(`${this.setName}: At the beginning of the turn,\n            if the wearer's HP is equal to or less than 50% of their Max HP,\n            restores HP equal to 8% of their Max HP and regenerates 5 Energy.`)\n        */\n        return buff;\n    }\n}\nexports[\"default\"] = Guard_of_Wuthering_Snow;\n\n\n//# sourceURL=webpack:///./src/RelicInstances/Guard_of_Wuthering_Snow.ts?");

/***/ }),

/***/ "./src/RelicInstances/Hunter_of_Glacial_Forest.ts":
/*!********************************************************!*\
  !*** ./src/RelicInstances/Hunter_of_Glacial_Forest.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst LocalInterfaces_1 = __webpack_require__(/*! ../LocalInterfaces */ \"./src/LocalInterfaces.ts\");\nclass Hunter_of_Glacial_Forest {\n    constructor(count) {\n        this.count = count;\n        this.setName = \"Hunter of Glacial Forest\";\n    }\n    getInBattleEffect() {\n        const buff = new LocalInterfaces_1.Buff();\n        buff.statsBoost.criticalDamage += 0.25;\n        buff.notes.push(`${this.setName}: After the wearer unleashes their Ultimate, their CRIT DMG increases by 25% for 2 turn(s).`);\n        return buff;\n    }\n}\nexports[\"default\"] = Hunter_of_Glacial_Forest;\n\n\n//# sourceURL=webpack:///./src/RelicInstances/Hunter_of_Glacial_Forest.ts?");

/***/ }),

/***/ "./src/RelicInstances/Inert_Salsotto.ts":
/*!**********************************************!*\
  !*** ./src/RelicInstances/Inert_Salsotto.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst LocalInterfaces_1 = __webpack_require__(/*! ../LocalInterfaces */ \"./src/LocalInterfaces.ts\");\nclass Inert_Salsotto {\n    constructor(count) {\n        this.count = count;\n        this.setName = \"Inert Salsotto\";\n    }\n    getInBattleEffect() {\n        const buff = new LocalInterfaces_1.Buff({ effectiveField: [\"ultimate\", \"follow up\"] });\n        buff.effect.boostMultiplierIncrease += 0.15;\n        buff.notes.push(`${this.setName}: When the wearer's current CRIT Rate reaches 50% or higher,\n            the wearer's Ultimate and follow-up attack DMG increases by 15%.`);\n        return buff;\n    }\n}\nexports[\"default\"] = Inert_Salsotto;\n\n\n//# sourceURL=webpack:///./src/RelicInstances/Inert_Salsotto.ts?");

/***/ }),

/***/ "./src/RelicInstances/Izumo_Gensei_and_Takama_Divine_Realm.ts":
/*!********************************************************************!*\
  !*** ./src/RelicInstances/Izumo_Gensei_and_Takama_Divine_Realm.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst LocalInterfaces_1 = __webpack_require__(/*! ../LocalInterfaces */ \"./src/LocalInterfaces.ts\");\nclass Izumo_Gensei_and_Takama_Divine_Realm {\n    constructor(count) {\n        this.count = count;\n        this.setName = \"Izumo Gensei and Takama Divine Realm\";\n    }\n    getInBattleEffect() {\n        const buff = new LocalInterfaces_1.Buff();\n        buff.statsBoost.criticalChance += 0.12;\n        buff.notes.push(`${this.setName}: When entering battle\n            if at least one other ally follows the same Path as the wearer,\n            then the wearer's CRIT Rate increases by 12%.`);\n        return buff;\n    }\n}\nexports[\"default\"] = Izumo_Gensei_and_Takama_Divine_Realm;\n\n\n//# sourceURL=webpack:///./src/RelicInstances/Izumo_Gensei_and_Takama_Divine_Realm.ts?");

/***/ }),

/***/ "./src/RelicInstances/Knight_of_Purity_Palace.ts":
/*!*******************************************************!*\
  !*** ./src/RelicInstances/Knight_of_Purity_Palace.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst LocalInterfaces_1 = __webpack_require__(/*! ../LocalInterfaces */ \"./src/LocalInterfaces.ts\");\nclass Knight_of_Purity_Palace {\n    constructor(count) {\n        this.count = count;\n        this.setName = \"Knight of Purity Palace\";\n    }\n    getInBattleEffect() {\n        const buff = new LocalInterfaces_1.Buff();\n        buff.effect.shieldAbsorb += 0.2;\n        buff.notes.push(`${this.setName}:\n            Increases the max DMG that can be absorbed by the shield created by the wearer by 20%.`);\n        return buff;\n    }\n}\nexports[\"default\"] = Knight_of_Purity_Palace;\n\n\n//# sourceURL=webpack:///./src/RelicInstances/Knight_of_Purity_Palace.ts?");

/***/ }),

/***/ "./src/RelicInstances/Longevous_Disciple.ts":
/*!**************************************************!*\
  !*** ./src/RelicInstances/Longevous_Disciple.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst LocalInterfaces_1 = __webpack_require__(/*! ../LocalInterfaces */ \"./src/LocalInterfaces.ts\");\nclass Longevous_Disciple {\n    constructor(count) {\n        this.count = count;\n        this.setName = \"Longevous Disciple\";\n    }\n    getInBattleEffect() {\n        const buff = new LocalInterfaces_1.Buff();\n        buff.statsBoost.criticalChance += 0.08 * 2;\n        buff.notes.push(`${this.setName}:\n            When the wearer is hit or has their HP consumed by an ally or themselves,\n            their CRIT Rate increases by 8% for 2 turn(s) and up to 2 stacks.`);\n        return buff;\n    }\n}\nexports[\"default\"] = Longevous_Disciple;\n\n\n//# sourceURL=webpack:///./src/RelicInstances/Longevous_Disciple.ts?");

/***/ }),

/***/ "./src/RelicInstances/Messenger_Traversing_Hackerspace.ts":
/*!****************************************************************!*\
  !*** ./src/RelicInstances/Messenger_Traversing_Hackerspace.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst LocalInterfaces_1 = __webpack_require__(/*! ../LocalInterfaces */ \"./src/LocalInterfaces.ts\");\nclass Messenger_Traversing_Hackerspace {\n    constructor(count) {\n        this.count = count;\n        this.setName = \"Messenger Traversing Hackerspace\";\n    }\n    getInBattleEffect() {\n        const buff = new LocalInterfaces_1.Buff({ target: [0, 1, 2, 3] });\n        buff.statsBoost.speedPercentage += 0.12;\n        buff.notes.push(`${this.setName}: When the wearer uses their Ultimate on an ally,\n            SPD for all allies increases by 12% for 1 turn(s).\n            This effect cannot be stacked.`);\n        return buff;\n    }\n}\nexports[\"default\"] = Messenger_Traversing_Hackerspace;\n\n\n//# sourceURL=webpack:///./src/RelicInstances/Messenger_Traversing_Hackerspace.ts?");

/***/ }),

/***/ "./src/RelicInstances/Musketeer_of_Wild_Wheat.ts":
/*!*******************************************************!*\
  !*** ./src/RelicInstances/Musketeer_of_Wild_Wheat.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst LocalInterfaces_1 = __webpack_require__(/*! ../LocalInterfaces */ \"./src/LocalInterfaces.ts\");\nclass Musketeer_of_Wild_Wheat {\n    constructor(count) {\n        this.count = count;\n        this.setName = \"Musketeer of Wild Wheat\";\n    }\n    getInBattleEffect() {\n        const buff = new LocalInterfaces_1.Buff();\n        return buff;\n    }\n}\nexports[\"default\"] = Musketeer_of_Wild_Wheat;\n\n\n//# sourceURL=webpack:///./src/RelicInstances/Musketeer_of_Wild_Wheat.ts?");

/***/ }),

/***/ "./src/RelicInstances/Pan_Cosmic_Commercial_Enterprise.ts":
/*!****************************************************************!*\
  !*** ./src/RelicInstances/Pan_Cosmic_Commercial_Enterprise.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst LocalInterfaces_1 = __webpack_require__(/*! ../LocalInterfaces */ \"./src/LocalInterfaces.ts\");\nclass Pan_Cosmic_Commercial_Enterprise {\n    constructor(count) {\n        this.count = count;\n        this.setName = \"Pan Cosmic Commercial Enterprise\";\n    }\n    getInBattleEffect() {\n        const buff = new LocalInterfaces_1.Buff();\n        //buff.statsBoost.attackPercentage += Math.min(0.25*stats.statusProbability, 0.25)\n        buff.statsBoost.attackPercentage += 0.25;\n        buff.notes.push(`${this.setName}:\n            The wearer's ATK increases by an amount that is equal to 25% of the current Effect Hit Rate,\n            up to a maximum of 25% (25% applied).`);\n        return buff;\n    }\n}\nexports[\"default\"] = Pan_Cosmic_Commercial_Enterprise;\n\n\n//# sourceURL=webpack:///./src/RelicInstances/Pan_Cosmic_Commercial_Enterprise.ts?");

/***/ }),

/***/ "./src/RelicInstances/Passerby_of_Wandering_Cloud.ts":
/*!***********************************************************!*\
  !*** ./src/RelicInstances/Passerby_of_Wandering_Cloud.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst LocalInterfaces_1 = __webpack_require__(/*! ../LocalInterfaces */ \"./src/LocalInterfaces.ts\");\nclass Passerby_of_Wandering_Cloud {\n    constructor(count) {\n        this.count = count;\n        this.setName = \"Passerby of Wandering Cloud\";\n    }\n    getInBattleEffect() {\n        const buff = new LocalInterfaces_1.Buff();\n        /*buff.notes.push(`${this.setName}:\n            At the beginning of the battle, immediately recovers 1 Skill Point.`)*/\n        return buff;\n    }\n}\nexports[\"default\"] = Passerby_of_Wandering_Cloud;\n\n\n//# sourceURL=webpack:///./src/RelicInstances/Passerby_of_Wandering_Cloud.ts?");

/***/ }),

/***/ "./src/RelicInstances/Penacony_Land_of_the_Dreams.ts":
/*!***********************************************************!*\
  !*** ./src/RelicInstances/Penacony_Land_of_the_Dreams.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst LocalInterfaces_1 = __webpack_require__(/*! ../LocalInterfaces */ \"./src/LocalInterfaces.ts\");\nclass Penacony_Land_of_the_Dreams {\n    constructor(count) {\n        this.count = count;\n        this.setName = \"Penacony Land of the Dreams\";\n    }\n    getInBattleEffect() {\n        const buff = new LocalInterfaces_1.Buff({ target: [0, 1, 2, 3] });\n        buff.effect.boostMultiplierIncrease += 0.1;\n        buff.notes.push(`${this.setName}:\n            Increases DMG for all other allies with the same DMG Type as the wearer by 10%.`);\n        return buff;\n    }\n}\nexports[\"default\"] = Penacony_Land_of_the_Dreams;\n\n\n//# sourceURL=webpack:///./src/RelicInstances/Penacony_Land_of_the_Dreams.ts?");

/***/ }),

/***/ "./src/RelicInstances/Pioneer_Diver_of_Dead_Waters.ts":
/*!************************************************************!*\
  !*** ./src/RelicInstances/Pioneer_Diver_of_Dead_Waters.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst LocalInterfaces_1 = __webpack_require__(/*! ../LocalInterfaces */ \"./src/LocalInterfaces.ts\");\nclass Pioneer_Diver_of_Dead_Waters {\n    constructor(count) {\n        this.count = count;\n        this.setName = \"Pioneer Diver of Dead Waters\";\n    }\n    getInBattleEffect() {\n        const buff = new LocalInterfaces_1.Buff();\n        buff.effect.boostMultiplierIncrease += 0.12;\n        buff.statsBoost.criticalDamage += 0.12 * 2;\n        buff.notes.push(`${this.setName}: Increases DMG dealt to enemies with debuffs by 12% (effective).`);\n        buff.notes.push(`${this.setName}:\n            The wearer deals 8%/12% increased CRIT DMG to enemies with at least 2/3 debuffs.\n            After the wearer inflicts a debuff on enemy targets,\n            the aforementioned effects increase by 100%, lasting for 1 turn.\n            (currently 24% damage boost applied)`);\n        return buff;\n    }\n}\nexports[\"default\"] = Pioneer_Diver_of_Dead_Waters;\n\n\n//# sourceURL=webpack:///./src/RelicInstances/Pioneer_Diver_of_Dead_Waters.ts?");

/***/ }),

/***/ "./src/RelicInstances/Prisoner_in_Deep_Confinement.ts":
/*!************************************************************!*\
  !*** ./src/RelicInstances/Prisoner_in_Deep_Confinement.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst LocalInterfaces_1 = __webpack_require__(/*! ../LocalInterfaces */ \"./src/LocalInterfaces.ts\");\nclass Prisoner_in_Deep_Confinement {\n    constructor(count) {\n        this.count = count;\n        this.setName = \"Prisoner in Deep Confinement\";\n    }\n    getInBattleEffect() {\n        const buff = new LocalInterfaces_1.Buff();\n        buff.effect.defReduction += 0.06 * 3;\n        buff.notes.push(`${this.setName}: For every DoT the target enemy is afflicted with,\n            the wearer will ignore 6% of target's DEF when dealing DMG to them.\n            This effect is valid for a max of 3 DoTs (currently 18% DEF reduction applied).`);\n        return buff;\n    }\n}\nexports[\"default\"] = Prisoner_in_Deep_Confinement;\n\n\n//# sourceURL=webpack:///./src/RelicInstances/Prisoner_in_Deep_Confinement.ts?");

/***/ }),

/***/ "./src/RelicInstances/Rutilant_Arena.ts":
/*!**********************************************!*\
  !*** ./src/RelicInstances/Rutilant_Arena.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst LocalInterfaces_1 = __webpack_require__(/*! ../LocalInterfaces */ \"./src/LocalInterfaces.ts\");\nclass Rutilant_Arena {\n    constructor(count) {\n        this.count = count;\n        this.setName = \"Rutilant Arena\";\n    }\n    getInBattleEffect() {\n        const buff = new LocalInterfaces_1.Buff({ effectiveField: [`basic attack`, \"skill\"] });\n        buff.effect.boostMultiplierIncrease += 0.2;\n        buff.notes.push(`${this.setName}: When the wearer's current CRIT Rate reaches 70% or higher,\n            the wearer's Basic ATK and Skill DMG increase by 20% (effective)`);\n        return buff;\n    }\n}\nexports[\"default\"] = Rutilant_Arena;\n\n\n//# sourceURL=webpack:///./src/RelicInstances/Rutilant_Arena.ts?");

/***/ }),

/***/ "./src/RelicInstances/Sigonia_the_Unclaimed_Desolation.ts":
/*!****************************************************************!*\
  !*** ./src/RelicInstances/Sigonia_the_Unclaimed_Desolation.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst LocalInterfaces_1 = __webpack_require__(/*! ../LocalInterfaces */ \"./src/LocalInterfaces.ts\");\nclass Sigonia_the_Unclaimed_Desolation {\n    constructor(count) {\n        this.count = count;\n        this.setName = \"Sigonia the Unclaimed Desolation\";\n    }\n    getInBattleEffect() {\n        const buff = new LocalInterfaces_1.Buff();\n        buff.statsBoost.criticalDamage += 0.04 * 10;\n        buff.notes.push(`${this.setName}: When an enemy target gets defeated,\n            the wearer's CRIT DMG increases by 4%, stacking up to 10 time(s)\n            (currently 10 stacks applied).`);\n        return buff;\n    }\n}\nexports[\"default\"] = Sigonia_the_Unclaimed_Desolation;\n\n\n//# sourceURL=webpack:///./src/RelicInstances/Sigonia_the_Unclaimed_Desolation.ts?");

/***/ }),

/***/ "./src/RelicInstances/Space_Sealing_Station.ts":
/*!*****************************************************!*\
  !*** ./src/RelicInstances/Space_Sealing_Station.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst LocalInterfaces_1 = __webpack_require__(/*! ../LocalInterfaces */ \"./src/LocalInterfaces.ts\");\nclass Space_Sealing_Station {\n    constructor(count) {\n        this.count = count;\n        this.setName = \"Space Sealing Station\";\n    }\n    getInBattleEffect() {\n        const buff = new LocalInterfaces_1.Buff();\n        buff.statsBoost.attackPercentage += 0.12;\n        buff.notes.push(`${this.setName}: When the wearer's SPD reaches 120 or higher,\n            the wearer's ATK increases by an extra 12% (effective).`);\n        return buff;\n    }\n}\nexports[\"default\"] = Space_Sealing_Station;\n\n\n//# sourceURL=webpack:///./src/RelicInstances/Space_Sealing_Station.ts?");

/***/ }),

/***/ "./src/RelicInstances/Sprightly_Vonwacq.ts":
/*!*************************************************!*\
  !*** ./src/RelicInstances/Sprightly_Vonwacq.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst LocalInterfaces_1 = __webpack_require__(/*! ../LocalInterfaces */ \"./src/LocalInterfaces.ts\");\nclass Sprightly_Vonwacq {\n    constructor(count) {\n        this.count = count;\n        this.setName = \"Sprightly Vonwacq\";\n    }\n    getInBattleEffect() {\n        const buff = new LocalInterfaces_1.Buff();\n        /*\n        buff.notes.push(`${this.setName}: When the wearer's SPD reaches 120 or higher,\n             the wearer's action is Advanced Forward by 40% immediately upon entering battle (effective).`)*/\n        return buff;\n    }\n}\nexports[\"default\"] = Sprightly_Vonwacq;\n\n\n//# sourceURL=webpack:///./src/RelicInstances/Sprightly_Vonwacq.ts?");

/***/ }),

/***/ "./src/RelicInstances/Talia_Kingdom_of_Banditry.ts":
/*!*********************************************************!*\
  !*** ./src/RelicInstances/Talia_Kingdom_of_Banditry.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst LocalInterfaces_1 = __webpack_require__(/*! ../LocalInterfaces */ \"./src/LocalInterfaces.ts\");\nclass Talia_Kingdom_of_Banditry {\n    constructor(count) {\n        this.count = count;\n        this.setName = \"Talia: Kingdom of Banditry\";\n    }\n    getInBattleEffect() {\n        const buff = new LocalInterfaces_1.Buff();\n        buff.statsBoost.stanceBreakRatio += 0.2;\n        buff.notes.push(`${this.setName}: When the wearer's SPD reaches 145 or higher, the wearer's Break effect increases by an extra 20% (effective).`);\n        return buff;\n    }\n}\nexports[\"default\"] = Talia_Kingdom_of_Banditry;\n\n\n//# sourceURL=webpack:///./src/RelicInstances/Talia_Kingdom_of_Banditry.ts?");

/***/ }),

/***/ "./src/RelicInstances/The_Ashblazing_Grand_Duke.ts":
/*!*********************************************************!*\
  !*** ./src/RelicInstances/The_Ashblazing_Grand_Duke.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst LocalInterfaces_1 = __webpack_require__(/*! ../LocalInterfaces */ \"./src/LocalInterfaces.ts\");\nclass The_Ashblazing_Grand_Duke {\n    constructor(count) {\n        this.count = count;\n        this.setName = \"The Ashblazing Grand Duke\";\n    }\n    getInBattleEffect() {\n        const buff = new LocalInterfaces_1.Buff({ effectiveField: [\"follow up\"] });\n        buff.effect.boostMultiplierIncrease += 0.2;\n        buff.notes.push(`${this.setName}: Increases follow-up attack DMG by 20%.`);\n        const buff2 = new LocalInterfaces_1.Buff();\n        buff.statsBoost.attackPercentage += 0.06 * 8;\n        buff.notes.push(`${this.setName}: When the wearer uses follow-up attacks against the target enemy,\n            increase the wearer's ATK by 6% for every time the follow-up attack deals DMG.\n            This effect can stack for a maximum of 8 times and lasts for 3 turns (currently 8 stacks counted)).`);\n        return [buff, buff2];\n    }\n}\nexports[\"default\"] = The_Ashblazing_Grand_Duke;\n\n\n//# sourceURL=webpack:///./src/RelicInstances/The_Ashblazing_Grand_Duke.ts?");

/***/ }),

/***/ "./src/RelicInstances/Thief_of_Shooting_Meteor.ts":
/*!********************************************************!*\
  !*** ./src/RelicInstances/Thief_of_Shooting_Meteor.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst LocalInterfaces_1 = __webpack_require__(/*! ../LocalInterfaces */ \"./src/LocalInterfaces.ts\");\nclass Thief_of_Shooting_Meteor {\n    constructor(count) {\n        this.count = count;\n        this.setName = \"Thief of Shooting Meteor\";\n    }\n    getInBattleEffect() {\n        const buff = new LocalInterfaces_1.Buff();\n        //buff.notes.push(`${this.setName}: When the wearer inflicts Weakness Break on an enemy, regenerates 3 Energy.`)\n        return buff;\n    }\n}\nexports[\"default\"] = Thief_of_Shooting_Meteor;\n\n\n//# sourceURL=webpack:///./src/RelicInstances/Thief_of_Shooting_Meteor.ts?");

/***/ }),

/***/ "./src/RelicInstances/Wastelander_of_Banditry_Desert.ts":
/*!**************************************************************!*\
  !*** ./src/RelicInstances/Wastelander_of_Banditry_Desert.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst LocalInterfaces_1 = __webpack_require__(/*! ../LocalInterfaces */ \"./src/LocalInterfaces.ts\");\nclass Wastelander_of_Banditry_Desert {\n    constructor(count) {\n        this.count = count;\n        this.setName = \"Wastelander of Banditry Desert\";\n    }\n    getInBattleEffect() {\n        const buff = new LocalInterfaces_1.Buff();\n        buff.statsBoost.criticalChance += 0.1;\n        buff.statsBoost.criticalDamage += 0.2;\n        buff.notes.push(`${this.setName}: \n            When attacking debuffed enemies, \n            the wearer's CRIT Rate increases by 10%, \n            and their CRIT DMG increases by 20% against Imprisoned enemies.`);\n        return buff;\n    }\n}\nexports[\"default\"] = Wastelander_of_Banditry_Desert;\n\n\n//# sourceURL=webpack:///./src/RelicInstances/Wastelander_of_Banditry_Desert.ts?");

/***/ }),

/***/ "./src/RelicInstances/Watchmaker_Master_of_Dream_Machinations.ts":
/*!***********************************************************************!*\
  !*** ./src/RelicInstances/Watchmaker_Master_of_Dream_Machinations.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst LocalInterfaces_1 = __webpack_require__(/*! ../LocalInterfaces */ \"./src/LocalInterfaces.ts\");\nclass Watchmaker_Master_of_Dream_Machinations {\n    constructor(count) {\n        this.count = count;\n        this.setName = \"Watchmaker Master of Dream Machinations\";\n    }\n    getInBattleEffect() {\n        const buff = new LocalInterfaces_1.Buff({ target: [0, 1, 2, 3] });\n        buff.statsBoost.stanceBreakRatio += 0.3;\n        buff.notes.push(`${this.setName}: \n            When the wearer uses their Ultimate on an ally, \n            Break Effect for all allies increases by 30% for 2 turn(s). \n            This effect cannot be stacked.`);\n        return buff;\n    }\n}\nexports[\"default\"] = Watchmaker_Master_of_Dream_Machinations;\n\n\n//# sourceURL=webpack:///./src/RelicInstances/Watchmaker_Master_of_Dream_Machinations.ts?");

/***/ }),

/***/ "./src/WeaponFactory.ts":
/*!******************************!*\
  !*** ./src/WeaponFactory.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.getWeapon = void 0;\nconst brighter_than_the_sun_1 = __importDefault(__webpack_require__(/*! ./WeaponInstances/Destruction/brighter_than_the_sun */ \"./src/WeaponInstances/Destruction/brighter_than_the_sun.ts\"));\nconst Along_the_Passing_Shore_1 = __importDefault(__webpack_require__(/*! ./WeaponInstances/Nihility/Along_the_Passing_Shore */ \"./src/WeaponInstances/Nihility/Along_the_Passing_Shore.ts\"));\nconst I_Shall_Be_My_Own_Sword_1 = __importDefault(__webpack_require__(/*! ./WeaponInstances/Destruction/I_Shall_Be_My_Own_Sword */ \"./src/WeaponInstances/Destruction/I_Shall_Be_My_Own_Sword.ts\"));\nfunction getWeapon(weapon, holderPath) {\n    if (weapon === undefined) {\n        return undefined;\n    }\n    if (weapon.id === 23015) {\n        return new brighter_than_the_sun_1.default(holderPath, weapon.level, weapon.promotion, weapon.rankLevel);\n    }\n    if (weapon.id === 23024) {\n        return new Along_the_Passing_Shore_1.default(holderPath, weapon.level, weapon.promotion, weapon.rankLevel);\n    }\n    if (weapon.id === 23014) {\n        return new I_Shall_Be_My_Own_Sword_1.default(holderPath, weapon.level, weapon.promotion, weapon.rankLevel);\n    }\n    return undefined;\n}\nexports.getWeapon = getWeapon;\n\n\n//# sourceURL=webpack:///./src/WeaponFactory.ts?");

/***/ }),

/***/ "./src/WeaponInstances/Destruction/I_Shall_Be_My_Own_Sword.ts":
/*!********************************************************************!*\
  !*** ./src/WeaponInstances/Destruction/I_Shall_Be_My_Own_Sword.ts ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst LocalInterfaces_1 = __webpack_require__(/*! ../../LocalInterfaces */ \"./src/LocalInterfaces.ts\");\nconst _WeaponAbstract_1 = __importDefault(__webpack_require__(/*! ../_WeaponAbstract */ \"./src/WeaponInstances/_WeaponAbstract.ts\"));\nclass I_Shall_Be_My_Own_Sword extends _WeaponAbstract_1.default {\n    constructor(holderPath, level, promotion, rankLevel) {\n        const name = \"I Shall Be My Own Sword\";\n        const path = \"destruction\";\n        const effectName = \"With This Evening Jade\";\n        super(holderPath, name, path, effectName, level, promotion, rankLevel);\n    }\n    getInBattleEffect() {\n        if (this.isEffective()) {\n            const buff = new LocalInterfaces_1.Buff();\n            const damageBoostPercentage = (0.115 + 0.025 * this.rankLevel);\n            const defReduceBoostPercentage = (0.1 + 0.02 * this.rankLevel);\n            buff.effect.boostMultiplierIncrease += damageBoostPercentage * 3;\n            buff.effect.defReduction += defReduceBoostPercentage;\n            buff.notes.push(`${this.effectName}: Each stack of Eclipse increases the DMG of the wearer's next attack \n                by ${round(damageBoostPercentage * 100)}%. When 3 stack(s) are reached, additionally enables the attack\n                to ignore ${round(defReduceBoostPercentage * 100)}% of the enemy's DEF.`);\n            return buff;\n        }\n        else {\n            return [];\n        }\n    }\n}\nexports[\"default\"] = I_Shall_Be_My_Own_Sword;\n\n\n//# sourceURL=webpack:///./src/WeaponInstances/Destruction/I_Shall_Be_My_Own_Sword.ts?");

/***/ }),

/***/ "./src/WeaponInstances/Destruction/brighter_than_the_sun.ts":
/*!******************************************************************!*\
  !*** ./src/WeaponInstances/Destruction/brighter_than_the_sun.ts ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst LocalInterfaces_1 = __webpack_require__(/*! ../../LocalInterfaces */ \"./src/LocalInterfaces.ts\");\nconst _WeaponAbstract_1 = __importDefault(__webpack_require__(/*! ../_WeaponAbstract */ \"./src/WeaponInstances/_WeaponAbstract.ts\"));\nclass brighter_than_the_sun extends _WeaponAbstract_1.default {\n    constructor(holderPath, level, promotion, rankLevel) {\n        const name = \"Brighter Than the Sun\";\n        const path = \"destruction\";\n        const effectName = \"Defiant Till Death\";\n        super(holderPath, name, path, effectName, level, promotion, rankLevel);\n    }\n    getInBattleEffect() {\n        if (this.isEffective()) {\n            const buff = new LocalInterfaces_1.Buff();\n            const attackBoostPercentage = 0.15 + 0.03 * this.rankLevel;\n            const spBoostPercentage = 0.05 + 0.01 * this.rankLevel;\n            buff.statsBoost.attackPercentage += attackBoostPercentage * 2;\n            buff.statsBoost.spRatio += spBoostPercentage * 2;\n            buff.notes.push(`${this.effectName}: Increases the wearer's Attack by ${round(attackBoostPercentage * 100)}% \n            and Energy Regen Rate by ${round(spBoostPercentage * 100)}% for every stack of Dragon's Call\n            (currently 2 stacks applied).`);\n            return buff;\n        }\n        else {\n            return [];\n        }\n    }\n}\nexports[\"default\"] = brighter_than_the_sun;\n\n\n//# sourceURL=webpack:///./src/WeaponInstances/Destruction/brighter_than_the_sun.ts?");

/***/ }),

/***/ "./src/WeaponInstances/Nihility/Along_the_Passing_Shore.ts":
/*!*****************************************************************!*\
  !*** ./src/WeaponInstances/Nihility/Along_the_Passing_Shore.ts ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst LocalInterfaces_1 = __webpack_require__(/*! ../../LocalInterfaces */ \"./src/LocalInterfaces.ts\");\nconst _WeaponAbstract_1 = __importDefault(__webpack_require__(/*! ../_WeaponAbstract */ \"./src/WeaponInstances/_WeaponAbstract.ts\"));\nclass Along_the_Passing_Shore extends _WeaponAbstract_1.default {\n    constructor(holderPath, level, promotion, rankLevel) {\n        const name = \"Along the Passing Shore\";\n        const path = \"nihility\";\n        const effectName = \"Steerer\";\n        super(holderPath, name, path, effectName, level, promotion, rankLevel);\n    }\n    getInBattleEffect() {\n        if (this.isEffective()) {\n            const buff = new LocalInterfaces_1.Buff();\n            const globalDamageBoost = 0.2 + 0.04 * this.rankLevel;\n            buff.effect.boostMultiplierIncrease += globalDamageBoost;\n            buff.notes.push(`${this.effectName}: The wearer deals ${round(globalDamageBoost * 100)}% \n                increased DMG to targets afflicted with Mirage Fizzle`);\n            const buff2 = new LocalInterfaces_1.Buff({ effectiveField: [\"ultimate\"] });\n            const ultimateDamageBoost = 0.2 + 0.04 * this.rankLevel;\n            buff2.effect.boostMultiplierIncrease += ultimateDamageBoost;\n            buff2.notes.push(`${this.effectName}: The DMG dealt by the wearer's Ultimate additionally \n            increases by ${round(globalDamageBoost * 100)}%.`);\n            return [buff, buff2];\n        }\n        else {\n            return [];\n        }\n    }\n}\nexports[\"default\"] = Along_the_Passing_Shore;\n\n\n//# sourceURL=webpack:///./src/WeaponInstances/Nihility/Along_the_Passing_Shore.ts?");

/***/ }),

/***/ "./src/WeaponInstances/_WeaponAbstract.ts":
/*!************************************************!*\
  !*** ./src/WeaponInstances/_WeaponAbstract.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nclass Weapon {\n    constructor(holderPath, name, path, effectName, level, promotion, rankLevel) {\n        this.holderPath = holderPath;\n        this.name = name;\n        this.path = path;\n        this.level = level;\n        this.promotion = promotion;\n        this.rankLevel = rankLevel;\n        this.effectName = effectName;\n    }\n    isEffective() {\n        return this.holderPath === this.path;\n    }\n}\nexports[\"default\"] = Weapon;\n\n\n//# sourceURL=webpack:///./src/WeaponInstances/_WeaponAbstract.ts?");

/***/ }),

/***/ "./src/app.ts":
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst express_1 = __importDefault(__webpack_require__(/*! express */ \"express\"));\nconst getDamageInfo_1 = __webpack_require__(/*! ./getDamageInfo */ \"./src/getDamageInfo.ts\");\nconst app = (0, express_1.default)();\napp.use(express_1.default.json());\napp.get('/', (req, res) => {\n    res.send('Hello World from TypeScript!');\n});\napp.post('/singlecharacter', (req, res) => {\n    //console.log('Body:', req.body);\n    const character = req.body;\n    const info = (0, getDamageInfo_1.getDamageInfo)(character);\n    res.send(JSON.stringify(info));\n});\nconst PORT = process.env.PORT || 4000;\napp.listen(PORT, () => {\n    console.log(`Server is running on port ${PORT}`);\n});\n\n\n//# sourceURL=webpack:///./src/app.ts?");

/***/ }),

/***/ "./src/getDamageInfo.ts":
/*!******************************!*\
  !*** ./src/getDamageInfo.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.getDamageInfo = void 0;\nconst CharacterFacory_1 = __webpack_require__(/*! ./CharacterFacory */ \"./src/CharacterFacory.ts\");\nconst RelicFactory_1 = __webpack_require__(/*! ./RelicFactory */ \"./src/RelicFactory.ts\");\nconst WeaponFactory_1 = __webpack_require__(/*! ./WeaponFactory */ \"./src/WeaponFactory.ts\");\nfunction getDamageInfo(rawCharacter) {\n    //console.log(rawCharacter)\n    const character = (0, CharacterFacory_1.getCharacter)(rawCharacter, rawCharacter.combatValues);\n    if (!character) {\n        return [];\n    }\n    console.log(character);\n    const weapon = (0, WeaponFactory_1.getWeapon)(rawCharacter.weapon, character.path);\n    console.log(weapon);\n    const relicSets = (0, RelicFactory_1.getRelicSetList)(rawCharacter.relics);\n    console.log(relicSets);\n    return [];\n}\nexports.getDamageInfo = getDamageInfo;\n\n\n//# sourceURL=webpack:///./src/getDamageInfo.ts?");

/***/ }),

/***/ "./src/scenarioSetting.ts":
/*!********************************!*\
  !*** ./src/scenarioSetting.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.getAllBuffOnCharacter = exports.getUltimateCoefficientDependentStats = exports.getSkillTalentCoefDependentStats = exports.getBasicCoefficientDependentStats = exports.getUltimateCoefficient = exports.getSkillTalentCoef = exports.getBasicCoefficient = exports.Scene = exports.hostileUnit = void 0;\nconst LocalInterfaces_1 = __webpack_require__(/*! ./LocalInterfaces */ \"./src/LocalInterfaces.ts\");\nclass hostileUnit {\n    constructor() {\n        this.unit = new LocalInterfaces_1.EnemyInstances();\n        this.debuffs = [];\n    }\n}\nexports.hostileUnit = hostileUnit;\nclass Scene {\n    constructor(enemy = new hostileUnit(), character) {\n        this.enemy = enemy;\n        this.character = character;\n    }\n}\nexports.Scene = Scene;\nfunction getSkillTalentCoef(multiplier) {\n    const talentSkillCoefficient = [1, 1.1, 1.2, 1.3, 1.4, 1.5, 1.625, 1.75, 1.875, 2, 2.1, 2.2];\n    return talentSkillCoefficient.map(val => val * multiplier);\n}\nexports.getSkillTalentCoef = getSkillTalentCoef;\nfunction getUltimateCoefficient(multiplier) {\n    const ultimateCoefficient = [1.2, 1.28, 1.36, 1.44, 1.52, 1.6, 1.7, 1.8, 1.9, 2, 2.08, 2.16];\n    return ultimateCoefficient.map(val => val * multiplier);\n}\nexports.getUltimateCoefficient = getUltimateCoefficient;\nfunction getBasicCoefficient(multiplier) {\n    const basicCoefficient = [0.5, 0.6, 0.7, 0.8, 0.9, 1, 1.1];\n    return basicCoefficient.map(val => val * multiplier);\n}\nexports.getBasicCoefficient = getBasicCoefficient;\nfunction getSkillTalentCoefDependentStats(multipliers) {\n    const fullMultipliers = {\n        ATK: multipliers.ATK ?? 0,\n        DEF: multipliers.DEF ?? 0,\n        HP: multipliers.HP ?? 0\n    };\n    function arrayMap(levelCoef) {\n        const aggregate_coef = { CoefAggregate: [] };\n        //ignore the 0 coefs becasue damage doesn't rely on them\n        for (const stat in multipliers) {\n            const key = stat;\n            aggregate_coef.CoefAggregate.push({ dependentStat: key, value: fullMultipliers[key] * levelCoef });\n        }\n        return aggregate_coef;\n    }\n    const talentSkillCoefficient = [1, 1.1, 1.2, 1.3, 1.4, 1.5, 1.625, 1.75, 1.875, 2, 2.1, 2.2];\n    return { allLevelCoef: talentSkillCoefficient.map(arrayMap) };\n}\nexports.getSkillTalentCoefDependentStats = getSkillTalentCoefDependentStats;\nfunction getUltimateCoefficientDependentStats(multipliers) {\n    const fullMultipliers = {\n        ATK: multipliers.ATK ?? 0,\n        DEF: multipliers.DEF ?? 0,\n        HP: multipliers.HP ?? 0\n    };\n    function arrayMap(levelCoef) {\n        const aggregate_coef = { CoefAggregate: [] };\n        //ignore the 0 coefs becasue damage doesn't rely on them\n        for (const stat in multipliers) {\n            const key = stat;\n            aggregate_coef.CoefAggregate.push({ dependentStat: key, value: fullMultipliers[key] * levelCoef });\n        }\n        return aggregate_coef;\n    }\n    const talentSkillCoefficient = [1.2, 1.28, 1.36, 1.44, 1.52, 1.6, 1.7, 1.8, 1.9, 2, 2.08, 2.16];\n    return { allLevelCoef: talentSkillCoefficient.map(arrayMap) };\n}\nexports.getUltimateCoefficientDependentStats = getUltimateCoefficientDependentStats;\nfunction getBasicCoefficientDependentStats(multipliers) {\n    const fullMultipliers = {\n        ATK: multipliers.ATK ?? 0,\n        DEF: multipliers.DEF ?? 0,\n        HP: multipliers.HP ?? 0\n    };\n    function arrayMap(levelCoef) {\n        const aggregate_coef = { CoefAggregate: [] };\n        //ignore the 0 coefs becasue damage doesn't rely on them\n        for (const stat in multipliers) {\n            const key = stat;\n            aggregate_coef.CoefAggregate.push({ dependentStat: key, value: fullMultipliers[key] * levelCoef });\n        }\n        return aggregate_coef;\n    }\n    const talentSkillCoefficient = [0.5, 0.6, 0.7, 0.8, 0.9, 1, 1.1];\n    return { allLevelCoef: talentSkillCoefficient.map(arrayMap) };\n}\nexports.getBasicCoefficientDependentStats = getBasicCoefficientDependentStats;\nfunction getAllBuffOnCharacter(context) {\n    const buff = context.friendlyUnit.buffs;\n    return buff;\n}\nexports.getAllBuffOnCharacter = getAllBuffOnCharacter;\n\n\n//# sourceURL=webpack:///./src/scenarioSetting.ts?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app.ts");
/******/ 	
/******/ })()
;