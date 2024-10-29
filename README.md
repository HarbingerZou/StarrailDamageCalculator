
# Starrail Damage Calculator

The **Starrail Damage Calculator** is a modular and dynamic application for calculating in-game damage in RPG-style games. It is designed to simulate battle scenarios with a focus on Starrail characters, weapons, and relics. The calculator handles stats, buffs, debuffs, and multipliers to provide an accurate damage output, supporting theory-crafting and character builds.

## Features

- **Comprehensive Damage Calculation**: Calculate damage with various multipliers (e.g., critical, boost, defense, resistance) based on character stats.
- **Factory Design**: Dynamic creation of characters, weapons, and relics using factory classes, making it easy to add new items.
- **Buff and Debuff Management**: Includes buffs and debuffs for both friendly and enemy units, impacting final damage output.
- **API-Driven**: Runs on an Express server with endpoints for interacting with the application, allowing integration into other systems.
- **Flexible Scenario Settings**: Configurable settings for battle scenarios, supporting realistic and varied test cases.

## Getting Started

### Prerequisites

Ensure you have **Node.js** and **npm** installed. Clone the repository and install dependencies:

```bash
git clone https://github.com/YourUsername/StarrailDamageCalculator.git
cd StarrailDamageCalculator
npm install
```

### Environment Setup

Create a `.env` file in the root directory and configure any required environment variables. Example:

```bash
PORT=4000
```

### Running the Application

To start the application, use:

```bash
npm start
```

The server will be available at `http://localhost:4000`.

## Usage

The API exposes endpoints to interact with the calculator:

- **`GET /`**: Basic test endpoint to check server status.
- **`POST /singlecharacter`**: Accepts JSON data for a character, returning calculated damage information.

Example request for `/singlecharacter`:

```json
{
  "id": 1213,
  "level": 80,
  "rank": 5,
  "basic_level": 10,
  "skill_level": 8,
  "ultimate_level": 9,
  "talent_level": 6,
  "trace1": true,
  "trace2": false,
  "trace3": true,
  "stats": {
    "attackFinal": 1200,
    "defenseFinal": 800,
    "hpFinal": 15000,
    "criticalDamage": 0.5,
    "criticalChance": 0.3
  },
  "weapon": {
    "id": 23015,
    "level": 70,
    "promotion": 2,
    "rankLevel": 4
  },
  "relics": [
    { "setID": 101, "type": "Musketeer_of_Wild_Wheat", "level": 5, "rarity": 5 }
  ]
}
```

### Core Files

- **`app.ts`**: Sets up the Express server and API routes.
- **`damageCalculation.ts`**: Contains the `Multipliers` class for handling all damage-related calculations.
- **`getDamageInfo.ts`**: Initializes the battle scenario, including character, weapon, and relic setups.
- **`CharacterFactory.ts`, `WeaponFactory.ts`, `RelicFactory.ts`**: Factory classes for creating and managing instances of characters, weapons, and relics.

## Project Structure

```
StarrailDamageCalculator/
├── dist/                   # Compiled JS files
├── src/                    # Source files
│   ├── CharacterFactory.ts # Character factory class
│   ├── WeaponFactory.ts    # Weapon factory class
│   ├── RelicFactory.ts     # Relic factory class
│   ├── damageCalculation.ts# Core damage calculation
│   └── app.ts              # Main application setup
├── .env                    # Environment configuration
├── package.json            # Project metadata and dependencies
└── README.md               # Project documentation
```

## Contributing

1. Fork the repository.
2. Create a new branch: `git checkout -b feature-name`.
3. Commit your changes: `git commit -m 'Add feature'`.
4. Push to the branch: `git push origin feature-name`.
5. Submit a pull request.

## License

This project is licensed under the MIT License.
