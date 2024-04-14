type path =  "destruction" | "hunt" | "erudition" | "harmony" | "nihility" | "perservation" | "abundance"
type relicType = "HEAD" | "HAND" | "BODY" |"FOOT" | "NECK" |"OBJECT"
type element = "elec" | "imaginary" | "wind"|"fire"| "ice" | "quantum" | "physical"

type MainStatType = "ATK"| "HP" | "ATK%"| "DEF%" | "HP%" |
     "Speed" | "CRIT Rate" | "CRIT DMG" | "Effect HIT Rate" | "Break Effect" | "Energy Regen Rate"| "Outgoing Healing" |
     "Fire DMG"| "Ice DMG"| "Physical DMG"| "Wind DMG"| "Quantum DMG"| "Imaginary DMG"| "Lightning DMG"

type SubStatType = "ATK"| "DEF" | "HP" | "ATK%"| "DEF%" | "HP%" |
"Speed" | "CRIT Rate" | "CRIT DMG" | "Effect HIT Rate" | "Effect RES" | "Break Effect"

type StatType = MainStatType|SubStatType

type damageType = "basic attack" | "skill" | "ultimate" | "follow up"

type statsMultiplierDepdentStats = "ATK"|"DEF"|"HP"