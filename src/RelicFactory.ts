import { RelicInterface } from "./LocalInterfaces";
import RelicSet  from "./RelicInstances/_RelicSetAbstract";
import Band_of_Sizzling_Thunder from "./RelicInstances/Band_of_Sizzling_Thunder";
import Belobog_of_the_Architects from "./RelicInstances/Belobog_of_the_Architects";
import Broken_Keel from "./RelicInstances/Broken_Keel";
import Celestial_Differentiator from "./RelicInstances/Celestial_Differentiator";
import Champion_of_Streetwise_Boxing from "./RelicInstances/Champion_of_Streetwise_Boxing";
import Eagle_of_Twilight_Line from "./RelicInstances/Eagle_of_Twilight_Line";
import Firesmith_of_Lava_Forging from "./RelicInstances/Firesmith_of_Lava_Forging";
import Fleet_of_the_Ageless from "./RelicInstances/Fleet_of_the_Ageless";
import Genius_of_Brilliant_Stars from "./RelicInstances/Genius_of_Brilliant_Stars";
import Guard_of_Wuthering_Snow from "./RelicInstances/Guard_of_Wuthering_Snow";
import Hunter_of_Glacial_Forest from "./RelicInstances/Hunter_of_Glacial_Forest";
import Inert_Salsotto from "./RelicInstances/Inert_Salsotto";
import Izumo_Gensei_and_Takama_Divine_Realm from "./RelicInstances/Izumo_Gensei_and_Takama_Divine_Realm";
import Knight_of_Purity_Palace from "./RelicInstances/Knight_of_Purity_Palace";
import Longevous_Disciple from "./RelicInstances/Longevous_Disciple";
import Messenger_Traversing_Hackerspace from "./RelicInstances/Messenger_Traversing_Hackerspace";
import Musketeer_of_Wild_Wheat from "./RelicInstances/Musketeer_of_Wild_Wheat";
import Pan_Cosmic_Commercial_Enterprise from "./RelicInstances/Pan_Cosmic_Commercial_Enterprise";
import Passerby_of_Wandering_Cloud from "./RelicInstances/Passerby_of_Wandering_Cloud";
import Penacony_Land_of_the_Dreams from "./RelicInstances/Penacony_Land_of_the_Dreams";
import Pioneer_Diver_of_Dead_Waters from "./RelicInstances/Pioneer_Diver_of_Dead_Waters";
import Prisoner_in_Deep_Confinement from "./RelicInstances/Prisoner_in_Deep_Confinement";
import Rutilant_Arena  from "./RelicInstances/Rutilant_Arena";
import Sigonia_the_Unclaimed_Desolation from "./RelicInstances/Sigonia_the_Unclaimed_Desolation";
import Space_Sealing_Station from "./RelicInstances/Space_Sealing_Station";
import Sprightly_Vonwacq from "./RelicInstances/Sprightly_Vonwacq";
import Talia_Kingdom_of_Banditry from "./RelicInstances/Talia_Kingdom_of_Banditry";
import The_Ashblazing_Grand_Duke from "./RelicInstances/The_Ashblazing_Grand_Duke";
import Thief_of_Shooting_Meteor from "./RelicInstances/Thief_of_Shooting_Meteor";
import Wastelander_of_Banditry_Desert from "./RelicInstances/Wastelander_of_Banditry_Desert";
import Watchmaker_Master_of_Dream_Machinations from "./RelicInstances/Watchmaker_Master_of_Dream_Machinations";
import { AffixInterface, subAffixInterface } from "./ReqJSONInterfaces";

class Relic implements RelicInterface{
    level:number;
    type:relicType;
    setID:number
    setName:string;
    rarity:number;
    mainAffix:AffixInterface;
    subAffix:subAffixInterface[];
    constructor(level:number, type:relicType, setID:number,  setName:string, rarity:number, mainAffix:AffixInterface){
        this.level = level;
        this.type = type;
        this.setName = setName;
        this.setID = setID;
        this.rarity = rarity;
        this.mainAffix = mainAffix;
        this.subAffix = [];
    }
}

function getRelicSet(setID:number, count:number):RelicSet|undefined{
    if(setID === 101){
        return new Passerby_of_Wandering_Cloud(count)
    }
    if(setID === 102){
        return new Musketeer_of_Wild_Wheat(count)
    }
    if(setID === 103){
        return new Knight_of_Purity_Palace(count)
    }
    if(setID === 104){
        return new Hunter_of_Glacial_Forest(count)
    }
    if(setID === 105){
        return new Champion_of_Streetwise_Boxing(count)
    }
    if(setID === 106){
        return new Guard_of_Wuthering_Snow(count)
    }
    if(setID === 107){
        return new Firesmith_of_Lava_Forging(count)
    }
    if(setID === 108){
        return new Genius_of_Brilliant_Stars(count)
    }
    if(setID === 109){
        return new Band_of_Sizzling_Thunder(count)
    }
    if(setID === 110){
        return new Eagle_of_Twilight_Line(count)
    }
    if(setID === 111){
        return new Thief_of_Shooting_Meteor(count)
    }
    if(setID === 112){
        return new Wastelander_of_Banditry_Desert(count);
    }
    if(setID === 113){
        return new Longevous_Disciple(count)
    }
    if(setID === 114){
        return new Messenger_Traversing_Hackerspace(count)
    }
    if(setID === 115){
        return new The_Ashblazing_Grand_Duke(count)
    }
    if(setID === 116){
        return new Prisoner_in_Deep_Confinement(count)
    }
    if(setID === 117){
        return new Pioneer_Diver_of_Dead_Waters(count)
    }
    if(setID === 118){
        return new Watchmaker_Master_of_Dream_Machinations(count)
    }
    if(setID === 301){
        return new Space_Sealing_Station(count)
    }
    if(setID === 302){
        return new Fleet_of_the_Ageless(count)
    }
    if(setID === 303){
        return new Pan_Cosmic_Commercial_Enterprise(count)
    }
    if(setID === 304){
        return new Belobog_of_the_Architects(count)
    }
    if(setID == 305){
        return new Celestial_Differentiator(count)
    }
    if(setID === 306){
        return new Inert_Salsotto(count)
    }
    if(setID === 307){
        return new Talia_Kingdom_of_Banditry(count)
    }
    if(setID === 308){
        return new Sprightly_Vonwacq(count)
    }
    if(setID === 309){
        return new Rutilant_Arena(count);
    }
    if(setID === 310){
        return new Broken_Keel(count)
    }
    if(setID === 311){
        return new Firesmith_of_Lava_Forging(count)
    }
    if(setID === 312){
        return new Penacony_Land_of_the_Dreams(count)
    }
    if(setID === 313){
        return new Sigonia_the_Unclaimed_Desolation(count)
    }
    if(setID === 314){
        return new Izumo_Gensei_and_Takama_Divine_Realm(count)
    }

    return undefined
}

function getRelicSetList(relicList:Relic[]):RelicSet[]{
    const RelicCounts:Map<number, number> = new Map();
    for(let relic of relicList){
        const count:number = RelicCounts.get(relic.setID) || 0
        RelicCounts.set(relic.setID, count+1);
    }
    const output:RelicSet[] = []
    for(const [ID, count] of RelicCounts){
        const set:RelicSet|undefined = getRelicSet(ID, count)
        if(set !== undefined){
            output.push(set);
        }
    }
    return output
}

export { Relic, getRelicSetList };
