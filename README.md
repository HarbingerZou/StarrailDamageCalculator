Project Overview
This project is a modular damage calculator designed for role-playing game (RPG) scenarios, focusing on Starrail characters, weapons, and relics. The application calculates battle damage based on stats, buffs, debuffs, and multipliers.

Key Features & Functionality
Core Damage Calculation (damageCalculation.ts):

The Multipliers class integrates attributes such as attack (ATK), defense (DEF), health (HP), and critical rates, which are essential for calculating total damage.
It applies various multipliers (e.g., critMultiplier, boostMultiplier, vulnerabilityMultiplier) to finalize damage, reflecting how buffs and debuffs interact with base stats.
The getStraightDamageWithFinalStats method consolidates these factors, yielding a comprehensive damage calculation formula based on character stats and current battle conditions.
Character, Weapon, and Relic Factories:

Factories like CharacterFactory, WeaponFactory, and RelicFactory dynamically create instances based on provided IDs, supporting customized characters, weapons, and relic sets.
Each factory is capable of selecting specific configurations (e.g., getWeapon returns weapons with unique properties like rank, level, and effect).
Example Characters and Weapons: Files include instances of characters like Dan_Heng_IL and weapons like Along_the_Passing_Shore, each with unique multipliers and abilities.
Scene and Battle Context (getDamageInfo.ts):

This file sets up a battle context, initializing characters, weapons, and relics.
The function getDamageInfo establishes the full battle scene, including friendly and enemy units with buffs and debuffs, providing context for realistic damage assessment.
Relic Sets and Customization:

Relic Sets: Specific relic sets, like Fleet_of_the_Ageless and Band_of_Sizzling_Thunder, apply unique bonus effects to characters, impacting battle effectiveness.
getRelicSetList organizes relics based on set IDs, allowing stacked or cumulative effects if characters use multiple relics from the same set.
Server and API (app.ts):

A basic Express server hosts the application, with endpoints like /singlecharacter accepting character data and returning calculated damage information.
This setup makes the project compatible with broader applications or integration into a web-based or mobile app.
