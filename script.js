const upgradeData = {
    2: { powerPoints: 20, coins: 20 },
    3: { powerPoints: 30, coins: 35 },
    4: { powerPoints: 50, coins: 75 },
    5: { powerPoints: 80, coins: 140 },
    6: { powerPoints: 130, coins: 290 },
    7: { powerPoints: 210, coins: 480 },
    8: { powerPoints: 340, coins: 800 },
    9: { powerPoints: 550, coins: 1250 },
    10: { powerPoints: 890, coins: 1875 },
    11: { powerPoints: 1440, coins: 2800 }
};

const hyperchargeBrawlers = [
    'Shelly', 'Nita', 'Colt', 'Bull', 'Brock', 'El Primo', 'Barley', 'Rosa',
    'Jessie', 'Dynamike', 'Tick', 'Rico', 'Jacky', 'Emz', 'Piper', 'Frank',
    'Bibi', 'Edgar', 'Gale', 'Colette', 'Belle', 'Maisie', 'Pearl', 'Angelo',
    'Gene', 'Max', 'Sprout', 'Lou', 'Buzz', 'Fang', 'Charlie', 'Mico', 'Spike',
    'Crow', 'Leon', 'Sandy', 'Cordelius', 'Poco', 'Mortis', 'Surge', 'Squeak',
    'Tara', 'Nani'
];

const brawlerData = {
    'Shelly': {
        gadgets: [
            { name: 'Fast Forward', cost: 1000, description: 'Shelly dashes ahead, skipping a few tiles.' },
            { name: 'Clay Pigeons', cost: 1000, description: 'Shelly’s next main attack focuses the spread.' }
        ],
        gears: commonGears(),
        starPower: [
            { name: 'Shell Shock', cost: 2000, description: 'Shelly’s Super shells slow down enemies.' },
            { name: 'Band-Aid', cost: 2000, description: 'When Shelly falls below 40% health, she instantly heals.' }
        ]
    },
    'Colt': {
        gadgets: [
            { name: 'Speedloader', cost: 1000, description: 'Colt’s next attack reloads faster.' },
            { name: 'Silver Bullet', cost: 1000, description: 'Colt fires a powerful shot that pierces through enemies.' }
        ],
        gears: commonGears(),
        starPower: [
            { name: 'Magnum Special', cost: 2000, description: 'Colt’s attack deals extra damage at maximum range.' },
            { name: 'Slick Boots', cost: 2000, description: 'Colt’s movement speed is increased for a short time.' }
        ]
    },
    'Spike': {
        gadgets: [
            { name: 'Fertilizer', cost: 1000, description: 'Spike throws a cactus that explodes on impact, dealing damage and slowing enemies.' },
            { name: 'Poke', cost: 1000, description: 'Spike throws a prickly cactus that explodes, dealing damage and applying a slow effect.' }
        ],
        gears: commonGears(),
        starPower: [
            { name: 'Curveball', cost: 2000, description: 'Spike’s attacks curve slightly, making them harder to dodge.' },
            { name: 'Violet Vines', cost: 2000, description: 'Spike’s Super lasts longer and deals more damage.' }
        ]
    },
    'Bull': {
        gadgets: [
            { name: 'Tougher Torpedo', cost: 1000, description: 'Bull charges forward, knocking back and damaging enemies in his path.' },
            { name: 'Stomper', cost: 1000, description: 'Bull’s next attack deals increased damage and knocks back enemies.' }
        ],
        gears: commonGears(),
        starPower: [
            { name: 'Brawler', cost: 2000, description: 'Bull’s attacks are stronger at close range.' },
            { name: 'Resilient', cost: 2000, description: 'Bull gains extra health for a short time after using his Super.' }
        ]
    },
    'Jacky': {
        gadgets: [
            { name: 'Jackhammer', cost: 1000, description: 'Jacky’s next attack deals extra damage and knocks back enemies.' },
            { name: 'Big Boom', cost: 1000, description: 'Jacky’s Super explodes, dealing damage and applying a knockback effect.' }
        ],
        gears: commonGears(),
        starPower: [
            { name: 'Rough Stuff', cost: 2000, description: 'Jacky’s attacks deal more damage when she is close to enemies.' },
            { name: 'Hard Hat', cost: 2000, description: 'Jacky takes reduced damage from attacks.' }
        ]
    },
    'Pearl': {
        gadgets: [
            { name: 'Splash', cost: 1000, description: 'Pearl’s next attack splits into multiple projectiles.' },
            { name: 'Glitter Bomb', cost: 1000, description: 'Pearl’s Super explodes, dealing damage to all enemies in the area.' }
        ],
        gears: commonGears(),
        starPower: [
            { name: 'Diamond Dust', cost: 2000, description: 'Pearl’s attacks deal additional damage over time.' },
            { name: 'Star Shine', cost: 2000, description: 'Pearl’s Super creates a temporary shield for herself and allies.' }
        ]
    },
    'Rosa': {
        gadgets: [
            { name: 'Vitamin Boost', cost: 1000, description: 'Rosa’s health regenerates for a short time.' },
            { name: 'Pollen Blast', cost: 1000, description: 'Rosa’s next attack deals extra damage and slows enemies.' }
        ],
        gears: commonGears(),
        starPower: [
            { name: 'High Pressure', cost: 2000, description: 'Rosa’s attacks deal more damage the closer she is to enemies.' },
            { name: 'Tougher', cost: 2000, description: 'Rosa takes less damage from attacks while her Super is active.' }
        ]
    },
    'Maisie': {
        gadgets: [
            { name: 'Power Surge', cost: 1000, description: 'Maisie’s attacks gain extra power for a short duration.' },
            { name: 'Energy Shield', cost: 1000, description: 'Maisie gets a temporary shield that absorbs damage.' }
        ],
        gears: commonGears(),
        starPower: [
            { name: 'Focus Power', cost: 2000, description: 'Maisie’s attacks become more powerful with each consecutive hit.' },
            { name: 'Quick Recharge', cost: 2000, description: 'Maisie’s gadget recharge time is reduced.' }
        ]
    },
    'Lou': {
        gadgets: [
            { name: 'Cool Down', cost: 1000, description: 'Lou’s next attack creates a chilling effect on enemies.' },
            { name: 'Freeze Ray', cost: 1000, description: 'Lou’s Super slows down enemies in a wide radius.' }
        ],
        gears: commonGears(),
        starPower: [
            { name: 'Frostbite', cost: 2000, description: 'Lou’s attacks slow enemies more effectively.' },
            { name: 'Chill Out', cost: 2000, description: 'Lou’s Super lasts longer and applies a stronger freeze effect.' }
        ]
    },
    'Colette': {
        gadgets: [
            { name: 'Cash Out', cost: 1000, description: 'Colette’s next attack deals bonus damage based on enemy health.' },
            { name: 'Money Maker', cost: 1000, description: 'Colette’s Super increases her attack power temporarily.' }
        ],
        gears: commonGears(),
        starPower: [
            { name: 'Debt Collector', cost: 2000, description: 'Colette’s attacks deal more damage to high-health enemies.' },
            { name: 'High Roller', cost: 2000, description: 'Colette gains a speed boost after using her Super.' }
        ]
    },
    'Charlie': {
        gadgets: [
            { name: 'Charming Strike', cost: 1000, description: 'Charlie’s next attack charms enemies, causing them to temporarily join his side.' },
            { name: 'Lucky Charm', cost: 1000, description: 'Charlie’s Super grants bonus damage and health regeneration.' }
        ],
        gears: commonGears(),
        starPower: [
            { name: 'Magic Touch', cost: 2000, description: 'Charlie’s attacks have a chance to stun enemies.' },
            { name: 'Lucky Clover', cost: 2000, description: 'Charlie’s Super heals him and nearby allies.' }
        ]
    },
    'Dynamike': {
        gadgets: [
            { name: 'Dyna Jump', cost: 1000, description: 'Dynamike uses a spring to jump to a different location.' },
            { name: 'Sticky Dynamite', cost: 1000, description: 'Dynamike throws a sticky dynamite that sticks to enemies and explodes.' }
        ],
        gears: commonGears(),
        starPower: [
            { name: 'Demolition', cost: 2000, description: 'Dynamike’s attacks deal additional damage to structures.' },
            { name: 'Dyna Jump', cost: 2000, description: 'Dynamike’s jump distance is increased for a short time.' }
        ]
    },
    'Edgar': {
        gadgets: [
            { name: 'Fast Forward', cost: 1000, description: 'Edgar dashes forward quickly, avoiding damage.' },
            { name: 'Bouncy Bomb', cost: 1000, description: 'Edgar throws a bouncing bomb that deals damage on impact.' }
        ],
        gears: commonGears(),
        starPower: [
            { name: 'Fury', cost: 2000, description: 'Edgar’s attack speed is increased while his health is low.' },
            { name: 'Rejuvenation', cost: 2000, description: 'Edgar regenerates health quickly after using his Super.' }
        ]
    },
    'Fang': {
        gadgets: [
            { name: 'Fury Kick', cost: 1000, description: 'Fang kicks forward with a burst of energy, dealing damage and knocking back enemies.' },
            { name: 'Blazing Trail', cost: 1000, description: 'Fang leaves a trail of fire behind him, dealing damage over time.' }
        ],
        gears: commonGears(),
        starPower: [
            { name: 'Burnout', cost: 2000, description: 'Fang’s attacks deal extra damage over time.' },
            { name: 'Heatwave', cost: 2000, description: 'Fang’s Super creates a heatwave that damages and slows enemies.' }
        ]
    },
    'Leon': {
        gadgets: [
            { name: 'Invisibility', cost: 1000, description: 'Leon becomes invisible for a short duration.' },
            { name: 'Clone Projector', cost: 1000, description: 'Leon creates a clone that distracts enemies.' }
        ],
        gears: commonGears(),
        starPower: [
            { name: 'Smoke Trails', cost: 2000, description: 'Leon’s attacks leave a trail of smoke that slows enemies.' },
            { name: 'Invincibility', cost: 2000, description: 'Leon gains a brief invincibility shield after using his Super.' }
        ]
    },
    'Crow': {
        gadgets: [
            { name: 'Deflect', cost: 1000, description: 'Crow deflects incoming attacks for a short time.' },
            { name: 'Poisoned Darts', cost: 1000, description: 'Crow’s next attack poisons enemies, dealing damage over time.' }
        ],
        gears: commonGears(),
        starPower: [
            { name: 'Extra Toxic', cost: 2000, description: 'Crow’s poison effect lasts longer and deals more damage.' },
            { name: 'Evasive Maneuvers', cost: 2000, description: 'Crow’s movement speed is increased after using his Super.' }
        ]
    },
    'Mico': {
        gadgets: [
            { name: 'Mimic', cost: 1000, description: 'Mico mimics the last ability used by an enemy, with reduced effectiveness.' },
            { name: 'Echo Blast', cost: 1000, description: 'Mico sends out a blast that deals damage and reveals enemies.' }
        ],
        gears: commonGears(),
        starPower: [
            { name: 'Mimicry', cost: 2000, description: 'Mico’s next attack deals extra damage based on the last enemy attack.' },
            { name: 'Echo Effect', cost: 2000, description: 'Mico’s Super deals more damage and has a wider radius.' }
        ]
    },
    'Cordelius': {
        gadgets: [
            { name: 'Chaos Blast', cost: 1000, description: 'Cordelius causes an explosion that deals area damage.' },
            { name: 'Dark Veil', cost: 1000, description: 'Cordelius shrouds himself in darkness, reducing incoming damage.' }
        ],
        gears: commonGears(),
        starPower: [
            { name: 'Shadow Strike', cost: 2000, description: 'Cordelius’ attacks become more powerful when he is in darkness.' },
            { name: 'Chaos Surge', cost: 2000, description: 'Cordelius’ Super deals additional damage and causes confusion.' }
        ]
    },
    'Kenji': {
        gadgets: [
            { name: 'Speed Slash', cost: 1000, description: 'Kenji’s next attack increases his speed and deals extra damage.' },
            { name: 'Shadow Clone', cost: 1000, description: 'Kenji creates a shadow clone that distracts enemies.' }
        ],
        gears: commonGears(),
        starPower: [
            { name: 'Rapid Blades', cost: 2000, description: 'Kenji’s attacks hit faster and deal more damage.' },
            { name: 'Evasive Shadows', cost: 2000, description: 'Kenji gains a speed boost after using his Super.' }
        ]
    },
    'Moe': {
        gadgets: [
            { name: 'Sticky Glue', cost: 1000, description: 'Moe’s next attack applies a sticky glue that slows enemies.' },
            { name: 'Booster', cost: 1000, description: 'Moe’s Super boosts his speed and attack power temporarily.' }
        ],
        gears: commonGears(),
        starPower: [
            { name: 'Glue Trap', cost: 2000, description: 'Moe’s attacks create a trap that slows and damages enemies.' },
            { name: 'Power Surge', cost: 2000, description: 'Moe gains a power boost after using his Super.' }
        ]
    },
    'Clancy': {
        gadgets: [
            { name: 'Shield Burst', cost: 1000, description: 'Clancy’s shield explodes, dealing damage to nearby enemies.' },
            { name: 'Barrier Drop', cost: 1000, description: 'Clancy drops a barrier that absorbs incoming damage.' }
        ],
        gears: commonGears(),
        starPower: [
            { name: 'Shield Mastery', cost: 2000, description: 'Clancy’s shield lasts longer and absorbs more damage.' },
            { name: 'Barrier Shield', cost: 2000, description: 'Clancy’s barrier provides additional health regeneration.' }
        ]
    },
    'Berry': {
        gadgets: [
            { name: 'Berry Burst', cost: 1000, description: 'Berry releases a burst of energy that deals damage to enemies.' },
            { name: 'Fruit Shield', cost: 1000, description: 'Berry gains a temporary shield after using her Super.' }
        ],
        gears: commonGears(),
        starPower: [
            { name: 'Fruit Frenzy', cost: 2000, description: 'Berry’s attacks deal extra damage when she is near enemies.' },
            { name: 'Berry Boost', cost: 2000, description: 'Berry gains a speed boost and health regeneration after using her Super.' }
        ]
    },
    'Lily': {
        gadgets: [
            { name: 'Leaf Shield', cost: 1000, description: 'Lily creates a shield of leaves that absorbs incoming damage.' },
            { name: 'Flower Blast', cost: 1000, description: 'Lily’s next attack deals extra damage and creates a healing field.' }
        ],
        gears: commonGears(),
        starPower: [
            { name: 'Healing Blossom', cost: 2000, description: 'Lily’s Super creates a healing field that restores health to allies.' },
            { name: 'Nature’s Blessing', cost: 2000, description: 'Lily’s attacks gain extra effects when she is in the healing field.' }
        ]
    },
    'Draco': {
        gadgets: [
            { name: 'Flame Breath', cost: 1000, description: 'Draco breathes fire, dealing damage to enemies in a wide area.' },
            { name: 'Dragon Shield', cost: 1000, description: 'Draco gains a shield that absorbs damage from attacks.' }
        ],
        gears: commonGears(),
        starPower: [
            { name: 'Fire Fury', cost: 2000, description: 'Draco’s attacks deal additional fire damage.' },
            { name: 'Dragon’s Roar', cost: 2000, description: 'Draco’s Super creates a shockwave that damages and stuns enemies.' }
        ]
    },
    'Angelo': {
        gadgets: [
            { name: 'Holy Light', cost: 1000, description: 'Angelo releases a burst of light that heals allies and damages enemies.' },
            { name: 'Divine Shield', cost: 1000, description: 'Angelo creates a shield that protects allies from damage.' }
        ],
        gears: commonGears(),
        starPower: [
            { name: 'Light of Healing', cost: 2000, description: 'Angelo’s healing abilities are increased and have a wider radius.' },
            { name: 'Divine Protection', cost: 2000, description: 'Angelo’s shield lasts longer and provides additional health regeneration.' }
        ]
    },
    'Melodie': {
        gadgets: [
            { name: 'Harmonic Burst', cost: 1000, description: 'Melodie creates a burst of sound that deals damage to enemies.' },
            { name: 'Echo Shield', cost: 1000, description: 'Melodie gains a shield that absorbs damage and creates an echo effect.' }
        ],
        gears: commonGears(),
        starPower: [
            { name: 'Soundwave', cost: 2000, description: 'Melodie’s attacks create a soundwave that deals additional damage.' },
            { name: 'Echo Boost', cost: 2000, description: 'Melodie’s Super creates a powerful echo effect that damages enemies over time.' }
        ]
    },
    'Larry & Lawrie': {
        gadgets: [
            { name: 'Twin Strike', cost: 1000, description: 'Larry & Lawrie perform a synchronized attack that deals extra damage.' },
            { name: 'Double Shield', cost: 1000, description: 'Larry & Lawrie gain a temporary shield that absorbs damage from attacks.' }
        ],
        gears: commonGears(),
        starPower: [
            { name: 'Double Trouble', cost: 2000, description: 'Larry & Lawrie’s attacks become more powerful when they are close to each other.' },
            { name: 'Shield Synchronization', cost: 2000, description: 'Larry & Lawrie’s shield absorbs more damage when both are active.' }
        ]
    },
    'Kit': {
        gadgets: [
            { name: 'Kit’s Claw', cost: 1000, description: 'Kit’s next attack deals extra damage and applies a slow effect.' },
            { name: 'Agility Boost', cost: 1000, description: 'Kit gains a speed boost and increased attack power for a short time.' }
        ],
        gears: commonGears(),
        starPower: [
            { name: 'Feline Fury', cost: 2000, description: 'Kit’s attacks deal additional damage when she is moving.' },
            { name: 'Pounce', cost: 2000, description: 'Kit gains a powerful pounce attack that deals extra damage and knocks back enemies.' }
        ]
    },
    'Chuck': {
        gadgets: [
            { name: 'Thunder Strike', cost: 1000, description: 'Chuck releases a bolt of lightning that deals damage to enemies.' },
            { name: 'Storm Shield', cost: 1000, description: 'Chuck creates a storm shield that absorbs incoming damage.' }
        ],
        gears: commonGears(),
        starPower: [
            { name: 'Lightning Surge', cost: 2000, description: 'Chuck’s attacks deal additional lightning damage and have a chance to stun enemies.' },
            { name: 'Stormcaller', cost: 2000, description: 'Chuck’s Super creates a storm that deals damage over time.' }
        ]
    },
    'Doug': {
        gadgets: [
            { name: 'Rapid Fire', cost: 1000, description: 'Doug’s next attack fires rapidly, dealing increased damage.' },
            { name: 'Rocket Jump', cost: 1000, description: 'Doug uses a rocket to jump to a different location, dealing damage on impact.' }
        ],
        gears: commonGears(),
        starPower: [
            { name: 'Rapid Blasts', cost: 2000, description: 'Doug’s attacks fire faster and deal more damage.' },
            { name: 'Rocket Barrage', cost: 2000, description: 'Doug’s Super fires a barrage of rockets that deal damage over a wide area.' }
        ]
    },
    'Hank': {
        gadgets: [
            { name: 'Shockwave', cost: 1000, description: 'Hank releases a shockwave that deals damage and knocks back enemies.' },
            { name: 'Hurricane Shield', cost: 1000, description: 'Hank creates a shield that absorbs incoming damage and creates a hurricane effect.' }
        ],
        gears: commonGears(),
        starPower: [
            { name: 'Hurricane Force', cost: 2000, description: 'Hank’s attacks deal extra damage and create a hurricane effect that damages enemies over time.' },
            { name: 'Shockwave Burst', cost: 2000, description: 'Hank’s shockwave deals additional damage and has a larger radius.' }
        ]
    },
    'Willow': {
        gadgets: [
            { name: 'Willow’s Wisp', cost: 1000, description: 'Willow releases a wisp that deals damage and applies a slowing effect.' },
            { name: 'Phantom Shield', cost: 1000, description: 'Willow gains a shield that absorbs damage and creates a ghostly effect.' }
        ],
        gears: commonGears(),
        starPower: [
            { name: 'Ghostly Glare', cost: 2000, description: 'Willow’s attacks deal extra damage and create a ghostly glare that blinds enemies.' },
            { name: 'Wisp Surge', cost: 2000, description: 'Willow’s Super creates a powerful wisp that deals damage and applies a strong slowing effect.' }
        ]
    },
    'R-T': {
        gadgets: [
            { name: 'Turbine Boost', cost: 1000, description: 'R-T gains a speed boost and increased attack power for a short time.' },
            { name: 'Rocket Barrage', cost: 1000, description: 'R-T fires a barrage of rockets that deal damage over a wide area.' }
        ],
        gears: commonGears(),
        starPower: [
            { name: 'Rocket Boost', cost: 2000, description: 'R-T’s rockets deal additional damage and have a chance to stun enemies.' },
            { name: 'Turbine Shield', cost: 2000, description: 'R-T’s shield absorbs more damage and provides additional health regeneration.' }
        ]
    },
    'Mandy': {
        gadgets: [
            { name: 'Flashbang', cost: 1000, description: 'Mandy throws a flashbang that blinds and damages enemies.' },
            { name: 'Electric Barrier', cost: 1000, description: 'Mandy creates a barrier that absorbs incoming damage and shocks enemies on contact.' }
        ],
        gears: commonGears(),
        starPower: [
            { name: 'Blinding Light', cost: 2000, description: 'Mandy’s flashbang blinds enemies for a longer duration.' },
            { name: 'Electric Surge', cost: 2000, description: 'Mandy’s Super creates an electric surge that deals damage and stuns enemies.' }
        ]
    },
    'Gray': {
        gadgets: [
            { name: 'Dimension Shift', cost: 1000, description: 'Gray shifts through dimensions to avoid damage and surprise enemies.' },
            { name: 'Gravity Bomb', cost: 1000, description: 'Gray throws a bomb that creates a gravity field, pulling in and damaging enemies.' }
        ],
        gears: commonGears(),
        starPower: [
            { name: 'Dimensional Rift', cost: 2000, description: 'Gray’s attacks gain extra damage and create a rift effect that slows enemies.' },
            { name: 'Gravity Well', cost: 2000, description: 'Gray’s Super creates a powerful gravity well that pulls in and damages enemies.' }
        ]
    },
    'Chester': {
        gadgets: [
            { name: 'Confusion Strike', cost: 1000, description: 'Chester’s next attack confuses enemies, causing them to move erratically.' },
            { name: 'Mystic Shield', cost: 1000, description: 'Chester gains a shield that absorbs damage and creates a mystic aura.' }
        ],
        gears: commonGears(),
        starPower: [
            { name: 'Mystic Touch', cost: 2000, description: 'Chester’s attacks deal additional damage and apply a mystic effect.' },
            { name: 'Confusion Wave', cost: 2000, description: 'Chester’s Super creates a wave of confusion that disorients and damages enemies.' }
        ]
    },
    'Buster': {
        gadgets: [
            { name: 'Shield Generator', cost: 1000, description: 'Buster generates a shield that absorbs incoming damage and creates a protective barrier.' },
            { name: 'Power Surge', cost: 1000, description: 'Buster’s next attack deals bonus damage and increases his attack power.' }
        ],
        gears: commonGears(),
        starPower: [
            { name: 'Barrier Boost', cost: 2000, description: 'Buster’s shield absorbs more damage and lasts longer.' },
            { name: 'Power Ramp', cost: 2000, description: 'Buster’s attacks deal increased damage over time.' }
        ]
    },
    'Gus': {
        gadgets: [
            { name: 'Healing Burst', cost: 1000, description: 'Gus releases a burst of healing energy that restores health to allies.' },
            { name: 'Protective Shield', cost: 1000, description: 'Gus creates a shield that absorbs damage and heals allies.' }
        ],
        gears: commonGears(),
        starPower: [
            { name: 'Healing Wave', cost: 2000, description: 'Gus’s healing abilities are enhanced, restoring more health to allies.' },
            { name: 'Shield Mastery', cost: 2000, description: 'Gus’s shield lasts longer and absorbs more damage.' }
        ]
    },
    'Sam': {
        gadgets: [
            { name: 'Punch Boost', cost: 1000, description: 'Sam’s next attack deals extra damage and applies a knockback effect.' },
            { name: 'Barrier Boost', cost: 1000, description: 'Sam creates a barrier that absorbs incoming damage and boosts his health.' }
        ],
        gears: commonGears(),
        starPower: [
            { name: 'Power Punch', cost: 2000, description: 'Sam’s attacks deal extra damage and have a chance to stun enemies.' },
            { name: 'Barrier Shield', cost: 2000, description: 'Sam’s barrier provides additional protection and health regeneration.' }
        ]
    },
    'Otis': {
        gadgets: [
            { name: 'Echo Blast', cost: 1000, description: 'Otis creates an echo blast that deals damage and disorients enemies.' },
            { name: 'Reflective Shield', cost: 1000, description: 'Otis gains a shield that absorbs damage and reflects it back to enemies.' }
        ],
        gears: commonGears(),
        starPower: [
            { name: 'Echo Effect', cost: 2000, description: 'Otis’s attacks create an echo effect that deals additional damage.' },
            { name: 'Reflective Barrier', cost: 2000, description: 'Otis’s shield reflects a portion of incoming damage back to enemies.' }
        ]
    },
    'Bonnie': {
        gadgets: [
            { name: 'Rocket Jump', cost: 1000, description: 'Bonnie uses a rocket to jump to a different location, dealing damage on impact.' },
            { name: 'Blazing Trail', cost: 1000, description: 'Bonnie leaves a trail of fire that damages enemies.' }
        ],
        gears: commonGears(),
        starPower: [
            { name: 'Blast Off', cost: 2000, description: 'Bonnie’s rocket jump deals extra damage and stuns enemies.' },
            { name: 'Fire Burst', cost: 2000, description: 'Bonnie’s fire trail lasts longer and deals more damage.' }
        ]
    },
    'Janet': {
        gadgets: [
            { name: 'Soaring Star', cost: 1000, description: 'Janet soars into the air, becoming immune to damage for a short time.' },
            { name: 'Musical Shield', cost: 1000, description: 'Janet creates a shield that absorbs damage and boosts her attack power.' }
        ],
        gears: commonGears(),
        starPower: [
            { name: 'Star Power', cost: 2000, description: 'Janet’s Super creates a burst of energy that damages and knocks back enemies.' },
            { name: 'Musical Boost', cost: 2000, description: 'Janet’s attacks deal extra damage and have a chance to slow enemies.' }
        ]
    },
    'Eve': {
        gadgets: [
            { name: 'Fruit Bomb', cost: 1000, description: 'Eve throws a fruit bomb that explodes on impact, dealing damage.' },
            { name: 'Healing Harvest', cost: 1000, description: 'Eve creates a healing field that restores health to allies.' }
        ],
        gears: commonGears(),
        starPower: [
            { name: 'Fruit Frenzy', cost: 2000, description: 'Eve’s fruit bomb deals additional damage and creates a larger explosion.' },
            { name: 'Harvest Blessing', cost: 2000, description: 'Eve’s healing field restores more health and lasts longer.' }
        ]
    },
    'Lola': {
        gadgets: [
            { name: 'Dance Step', cost: 1000, description: 'Lola performs a dance step that temporarily boosts her speed and attack power.' },
            { name: 'Rhythm Shield', cost: 1000, description: 'Lola creates a shield that absorbs damage and provides a rhythm boost.' }
        ],
        gears: commonGears(),
        starPower: [
            { name: 'Dance Fury', cost: 2000, description: 'Lola’s attacks deal extra damage and have a chance to stun enemies.' },
            { name: 'Rhythm Rush', cost: 2000, description: 'Lola’s Super creates a rhythm effect that damages and slows enemies.' }
        ]
    },
    'Meg': {
        gadgets: [
            { name: 'Mega Boost', cost: 1000, description: 'Meg’s next attack deals extra damage and boosts her speed.' },
            { name: 'Shield Generator', cost: 1000, description: 'Meg creates a shield that absorbs incoming damage and provides additional protection.' }
        ],
        gears: commonGears(),
        starPower: [
            { name: 'Mega Power', cost: 2000, description: 'Meg’s attacks deal increased damage and have a chance to knock back enemies.' },
            { name: 'Shield Mastery', cost: 2000, description: 'Meg’s shield absorbs more damage and lasts longer.' }
        ]
    },
    'Ash': {
        gadgets: [
            { name: 'Flame Thrower', cost: 1000, description: 'Ash unleashes a stream of fire that deals damage over time.' },
            { name: 'Molten Shield', cost: 1000, description: 'Ash gains a shield that absorbs damage and creates a molten effect.' }
        ],
        gears: commonGears(),
        starPower: [
            { name: 'Inferno Blaze', cost: 2000, description: 'Ash’s flame thrower deals additional damage and has a wider radius.' },
            { name: 'Molten Fury', cost: 2000, description: 'Ash’s Super creates a molten area that damages and slows enemies.' }
        ]
    },
    'Griff': {
        gadgets: [
            { name: 'Money Bomb', cost: 1000, description: 'Griff throws a money bomb that explodes on impact, dealing damage and stunning enemies.' },
            { name: 'Cash Shield', cost: 1000, description: 'Griff creates a shield made of cash that absorbs damage.' }
        ],
        gears: commonGears(),
        starPower: [
            { name: 'Cash Flow', cost: 2000, description: 'Griff’s attacks deal extra damage and have a chance to stun enemies.' },
            { name: 'Shield Burst', cost: 2000, description: 'Griff’s shield lasts longer and provides additional protection.' }
        ]
    },
    'Buzz': {
        gadgets: [
            { name: 'Buzzsaw', cost: 1000, description: 'Buzz throws a saw blade that deals damage to enemies in its path.' },
            { name: 'Shield Generator', cost: 1000, description: 'Buzz creates a shield that absorbs damage and provides additional protection.' }
        ],
        gears: commonGears(),
        starPower: [
            { name: 'Sawdust', cost: 2000, description: 'Buzz’s saw blade deals additional damage and has a wider radius.' },
            { name: 'Shield Mastery', cost: 2000, description: 'Buzz’s shield absorbs more damage and lasts longer.' }
        ]
    },
    'Grom': {
        gadgets: [
            { name: 'Grom Grenade', cost: 1000, description: 'Grom throws a grenade that explodes on impact, dealing area damage.' },
            { name: 'Explosive Shield', cost: 1000, description: 'Grom creates a shield that absorbs damage and explodes on contact.' }
        ],
        gears: commonGears(),
        starPower: [
            { name: 'Grenade Boost', cost: 2000, description: 'Grom’s grenade deals additional damage and has a larger explosion radius.' },
            { name: 'Explosive Burst', cost: 2000, description: 'Grom’s Super creates a powerful explosion that damages and knocks back enemies.' }
        ]
    },
    'Squeak': {
        gadgets: [
            { name: 'Sticky Bomb', cost: 1000, description: 'Squeak throws a sticky bomb that attaches to enemies and explodes after a short time.' },
            { name: 'Squeaky Shield', cost: 1000, description: 'Squeak creates a shield that absorbs damage and provides additional protection.' }
        ],
        gears: commonGears(),
        starPower: [
            { name: 'Sticky Boost', cost: 2000, description: 'Squeak’s sticky bomb deals additional damage and has a longer stick duration.' },
            { name: 'Shield Mastery', cost: 2000, description: 'Squeak’s shield lasts longer and absorbs more damage.' }
        ]
    },
    'Belle': {
        gadgets: [
            { name: 'Shock Arrow', cost: 1000, description: 'Belle fires a shock arrow that deals damage and stuns enemies.' },
            { name: 'Shield Boost', cost: 1000, description: 'Belle creates a shield that absorbs damage and provides additional protection.' }
        ],
        gears: commonGears(),
        starPower: [
            { name: 'Electric Shock', cost: 2000, description: 'Belle’s shock arrow deals additional damage and has a larger stun radius.' },
            { name: 'Shield Mastery', cost: 2000, description: 'Belle’s shield absorbs more damage and lasts longer.' }
        ]
    },
    'Stu': {
        gadgets: [
            { name: 'Speed Boost', cost: 1000, description: 'Stu gains a burst of speed and increased attack power for a short time.' },
            { name: 'Flame Shield', cost: 1000, description: 'Stu creates a shield that absorbs damage and deals flame damage to nearby enemies.' }
        ],
        gears: commonGears(),
        starPower: [
            { name: 'Speed Surge', cost: 2000, description: 'Stu’s speed boost lasts longer and increases his attack power.' },
            { name: 'Flame Burst', cost: 2000, description: 'Stu’s flame shield deals additional damage and creates a larger flame effect.' }
        ]
    },
    'Ruffs': {
        gadgets: [
            { name: 'Battle Cry', cost: 1000, description: 'Ruffs boosts the attack power of nearby allies for a short time.' },
            { name: 'Shield Booster', cost: 1000, description: 'Ruffs creates a shield that absorbs damage and boosts allies’ attack power.' }
        ],
        gears: commonGears(),
        starPower: [
            { name: 'Ruff’s Command', cost: 2000, description: 'Ruffs’ boost affects a larger area and lasts longer.' },
            { name: 'Shield Mastery', cost: 2000, description: 'Ruffs’ shield provides additional protection and health regeneration.' }
        ]
    },
    'Byron': {
        gadgets: [
            { name: 'Healing Shot', cost: 1000, description: 'Byron shoots a healing shot that restores health to allies and damages enemies.' },
            { name: 'Shield Boost', cost: 1000, description: 'Byron creates a shield that absorbs damage and boosts allies’ health.' }
        ],
        gears: commonGears(),
        starPower: [
            { name: 'Healing Wave', cost: 2000, description: 'Byron’s healing shot restores more health and has a larger radius.' },
            { name: 'Shield Mastery', cost: 2000, description: 'Byron’s shield absorbs more damage and provides additional protection.' }
        ]
    },
    'Amber': {
        gadgets: [
            { name: 'Firestorm', cost: 1000, description: 'Amber creates a firestorm that deals damage over time to enemies.' },
            { name: 'Flame Shield', cost: 1000, description: 'Amber gains a shield that absorbs damage and creates a flame effect.' }
        ],
        gears: commonGears(),
        starPower: [
            { name: 'Inferno', cost: 2000, description: 'Amber’s firestorm deals additional damage and has a larger area of effect.' },
            { name: 'Flame Burst', cost: 2000, description: 'Amber’s shield deals extra damage and lasts longer.' }
        ]
    },
    'Surge': {
        gadgets: [
            { name: 'Surge Forward', cost: 1000, description: 'Surge dashes forward, dealing damage and gaining a speed boost.' },
            { name: 'Overload', cost: 1000, description: 'Surge overloads his circuits, increasing attack power and movement speed.' }
        ],
        gears: commonGears(),
        starPower: [
            { name: 'Power Surge', cost: 2000, description: 'Surge’s attacks deal additional damage and have a chance to stun enemies.' },
            { name: 'Overload Boost', cost: 2000, description: 'Surge’s overload effect lasts longer and increases attack power.' }
        ]
    },
    'Sprout': {
        gadgets: [
            { name: 'Sprout Shield', cost: 1000, description: 'Sprout creates a shield that absorbs damage and boosts his health.' },
            { name: 'Sticky Seeds', cost: 1000, description: 'Sprout throws seeds that stick to enemies and explode after a short time.' }
        ],
        gears: commonGears(),
        starPower: [
            { name: 'Seed Burst', cost: 2000, description: 'Sprout’s seeds deal additional damage and have a larger explosion radius.' },
            { name: 'Shield Mastery', cost: 2000, description: 'Sprout’s shield absorbs more damage and lasts longer.' }
        ]
    },
    'Nani': {
        gadgets: [
            { name: 'Nani’s Drone', cost: 1000, description: 'Nani sends out a drone that deals damage and reveals enemies.' },
            { name: 'Nano Shield', cost: 1000, description: 'Nani creates a shield that absorbs damage and provides additional protection.' }
        ],
        gears: commonGears(),
        starPower: [
            { name: 'Drone Strike', cost: 2000, description: 'Nani’s drone deals additional damage and has a larger range.' },
            { name: 'Shield Mastery', cost: 2000, description: 'Nani’s shield absorbs more damage and lasts longer.' }
        ]
    },
    'Gale': {
        gadgets: [
            { name: 'Gale’s Gust', cost: 1000, description: 'Gale creates a gust of wind that pushes back and damages enemies.' },
            { name: 'Ice Shield', cost: 1000, description: 'Gale creates a shield that absorbs damage and slows nearby enemies.' }
        ],
        gears: commonGears(),
        starPower: [
            { name: 'Gust Boost', cost: 2000, description: 'Gale’s gust of wind deals additional damage and has a larger pushback effect.' },
            { name: 'Ice Barrier', cost: 2000, description: 'Gale’s shield creates a larger ice effect that slows enemies more effectively.' }
        ]
    },
    'Max': {
        gadgets: [
            { name: 'Speed Boost', cost: 1000, description: 'Max gains a burst of speed and increased attack power for a short time.' },
            { name: 'Energy Shield', cost: 1000, description: 'Max creates a shield that absorbs damage and provides additional protection.' }
        ],
        gears: commonGears(),
        starPower: [
            { name: 'Speed Surge', cost: 2000, description: 'Max’s speed boost lasts longer and increases attack power.' },
            { name: 'Energy Shield', cost: 2000, description: 'Max’s shield absorbs more damage and provides additional protection.' }
        ]
    },
    'Mr. P': {
        gadgets: [
            { name: 'Porter’s Help', cost: 1000, description: 'Mr. P summons a porter to assist him in battle, dealing damage and providing support.' },
            { name: 'Shield Generator', cost: 1000, description: 'Mr. P creates a shield that absorbs damage and protects allies.' }
        ],
        gears: commonGears(),
        starPower: [
            { name: 'Porter’s Boost', cost: 2000, description: 'Mr. P’s porter deals additional damage and has a larger health pool.' },
            { name: 'Shield Mastery', cost: 2000, description: 'Mr. P’s shield absorbs more damage and provides additional protection.' }
        ]
    },
    'Emz': {
        gadgets: [
            { name: 'Emz’s Spray', cost: 1000, description: 'Emz sprays a cloud of toxic gas that damages and slows enemies.' },
            { name: 'Shield Burst', cost: 1000, description: 'Emz creates a shield that absorbs damage and provides a burst of health.' }
        ],
        gears: commonGears(),
        starPower: [
            { name: 'Toxic Cloud', cost: 2000, description: 'Emz’s spray deals additional damage and has a larger radius.' },
            { name: 'Shield Boost', cost: 2000, description: 'Emz’s shield lasts longer and provides more health.' }
        ]
    },
    'Bea': {
        gadgets: [
            { name: 'Bee Hive', cost: 1000, description: 'Bea deploys a hive that deals damage over time and provides a shield.' },
            { name: 'Shield Boost', cost: 1000, description: 'Bea creates a shield that absorbs damage and boosts her attack power.' }
        ],
        gears: commonGears(),
        starPower: [
            { name: 'Hive Swarm', cost: 2000, description: 'Bea’s hive deals additional damage and has a larger area of effect.' },
            { name: 'Shield Mastery', cost: 2000, description: 'Bea’s shield absorbs more damage and lasts longer.' }
        ]
    },
    'Sandy': {
        gadgets: [
            { name: 'Sandstorm', cost: 1000, description: 'Sandy creates a sandstorm that blinds and damages enemies.' },
            { name: 'Sand Shield', cost: 1000, description: 'Sandy creates a shield that absorbs damage and provides additional protection.' }
        ],
        gears: commonGears(),
        starPower: [
            { name: 'Sandstorm Boost', cost: 2000, description: 'Sandy’s sandstorm deals additional damage and blinds enemies for a longer duration.' },
            { name: 'Shield Mastery', cost: 2000, description: 'Sandy’s shield absorbs more damage and lasts longer.' }
        ]
    },
    '8-Bit': {
        gadgets: [
            { name: 'Turbo Charger', cost: 1000, description: '8-Bit gains a burst of speed and increased attack power for a short time.' },
            { name: 'Shield Generator', cost: 1000, description: '8-Bit creates a shield that absorbs damage and provides additional protection.' }
        ],
        gears: commonGears(),
        starPower: [
            { name: 'Turbo Boost', cost: 2000, description: '8-Bit’s speed boost lasts longer and increases his attack power.' },
            { name: 'Shield Mastery', cost: 2000, description: '8-Bit’s shield absorbs more damage and lasts longer.' }
        ]
    },
    'Bibi': {
        gadgets: [
            { name: 'Home Run', cost: 1000, description: 'Bibi performs a powerful swing that knocks back and damages enemies.' },
            { name: 'Shield Boost', cost: 1000, description: 'Bibi creates a shield that absorbs damage and provides additional protection.' }
        ],
        gears: commonGears(),
        starPower: [
            { name: 'Home Run Power', cost: 2000, description: 'Bibi’s swing deals additional damage and has a larger knockback effect.' },
            { name: 'Shield Mastery', cost: 2000, description: 'Bibi’s shield absorbs more damage and lasts longer.' }
        ]
    },
    'Carl': {
        gadgets: [
            { name: 'Spin Attack', cost: 1000, description: 'Carl performs a spin attack that deals damage to nearby enemies.' },
            { name: 'Shield Generator', cost: 1000, description: 'Carl creates a shield that absorbs damage and provides additional protection.' }
        ],
        gears: commonGears(),
        starPower: [
            { name: 'Spin Power', cost: 2000, description: 'Carl’s spin attack deals additional damage and has a larger radius.' },
            { name: 'Shield Mastery', cost: 2000, description: 'Carl’s shield absorbs more damage and lasts longer.' }
        ]
    },
    'Leon': {
        gadgets: [
            { name: 'Invisiheal', cost: 1000, description: 'Leon becomes invisible and heals over time.' },
            { name: 'Sneaky Smoke', cost: 1000, description: 'Leon throws a smoke bomb that makes him and nearby allies invisible.' }
        ],
        gears: commonGears(),
        starPower: [
            { name: 'Invisibility Boost', cost: 2000, description: 'Leon’s invisibility lasts longer and he heals more quickly.' },
            { name: 'Smoke Screen', cost: 2000, description: 'Leon’s smoke bomb covers a larger area and provides more invisibility.' }
        ]
    },
    'Tick': {
        gadgets: [
            { name: 'Tick’s Bomb', cost: 1000, description: 'Tick throws a bomb that explodes after a delay, dealing damage over time.' },
            { name: 'Sticky Bomb', cost: 1000, description: 'Tick throws a sticky bomb that attaches to enemies and explodes after a short time.' }
        ],
        gears: commonGears(),
        starPower: [
            { name: 'Bomb Boost', cost: 2000, description: 'Tick’s bombs deal additional damage and have a larger explosion radius.' },
            { name: 'Sticky Surprise', cost: 2000, description: 'Tick’s sticky bomb deals extra damage and sticks longer.' }
        ]
    },
    'Gene': {
        gadgets: [
            { name: 'Magic Hand', cost: 1000, description: 'Gene uses his magic hand to pull in enemies and deal damage.' },
            { name: 'Shield Burst', cost: 1000, description: 'Gene creates a shield that absorbs damage and provides a burst of health.' }
        ],
        gears: commonGears(),
        starPower: [
            { name: 'Magic Power', cost: 2000, description: 'Gene’s magic hand deals additional damage and has a larger range.' },
            { name: 'Shield Mastery', cost: 2000, description: 'Gene’s shield absorbs more damage and lasts longer.' }
        ]
    },
    'Frank': {
        gadgets: [
            { name: 'Thunder Strike', cost: 1000, description: 'Frank unleashes a powerful strike that deals area damage and stuns enemies.' },
            { name: 'Shield Generator', cost: 1000, description: 'Frank creates a shield that absorbs damage and provides additional protection.' }
        ],
        gears: commonGears(),
        starPower: [
            { name: 'Thunder Power', cost: 2000, description: 'Frank’s thunder strike deals additional damage and has a larger stun radius.' },
            { name: 'Shield Mastery', cost: 2000, description: 'Frank’s shield absorbs more damage and lasts longer.' }
        ]
    },
    'Penny': {
        gadgets: [
            { name: 'Coin Toss', cost: 1000, description: 'Penny throws a coin that deals damage and bounces between enemies.' },
            { name: 'Shield Burst', cost: 1000, description: 'Penny creates a shield that absorbs damage and provides additional protection.' }
        ],
        gears: commonGears(),
        starPower: [
            { name: 'Coin Boost', cost: 2000, description: 'Penny’s coin toss deals additional damage and bounces more effectively.' },
            { name: 'Shield Mastery', cost: 2000, description: 'Penny’s shield absorbs more damage and lasts longer.' }
        ]
    },
    'Darryl': {
        gadgets: [
            { name: 'Rollerball', cost: 1000, description: 'Darryl rolls forward, dealing damage to enemies in his path.' },
            { name: 'Shield Generator', cost: 1000, description: 'Darryl creates a shield that absorbs damage and provides additional protection.' }
        ],
        gears: commonGears(),
        starPower: [
            { name: 'Roller Power', cost: 2000, description: 'Darryl’s roll deals additional damage and has a larger knockback effect.' },
            { name: 'Shield Mastery', cost: 2000, description: 'Darryl’s shield absorbs more damage and lasts longer.' }
        ]
    },
    'Tara': {
        gadgets: [
            { name: 'Shadow Pull', cost: 1000, description: 'Tara summons shadows that pull in enemies and deal damage.' },
            { name: 'Shield Burst', cost: 1000, description: 'Tara creates a shield that absorbs damage and provides additional protection.' }
        ],
        gears: commonGears(),
        starPower: [
            { name: 'Shadow Power', cost: 2000, description: 'Tara’s shadows deal additional damage and have a larger pull radius.' },
            { name: 'Shield Mastery', cost: 2000, description: 'Tara’s shield absorbs more damage and lasts longer.' }
        ]
    },
    'Pam': {
        gadgets: [
            { name: 'Healing Station', cost: 1000, description: 'Pam deploys a healing station that restores health to nearby allies.' },
            { name: 'Shield Generator', cost: 1000, description: 'Pam creates a shield that absorbs damage and provides additional protection.' }
        ],
        gears: commonGears(),
        starPower: [
            { name: 'Healing Boost', cost: 2000, description: 'Pam’s healing station restores more health and has a larger area.' },
            { name: 'Shield Mastery', cost: 2000, description: 'Pam’s shield absorbs more damage and lasts longer.' }
        ]
    },
    'Piper': {
        gadgets: [
            { name: 'Smoke Bomb', cost: 1000, description: 'Piper throws a smoke bomb that blinds enemies and provides cover.' },
            { name: 'Shield Burst', cost: 1000, description: 'Piper creates a shield that absorbs damage and provides additional protection.' }
        ],
        gears: commonGears(),
        starPower: [
            { name: 'Smoke Boost', cost: 2000, description: 'Piper’s smoke bomb blinds enemies for a longer duration and provides more cover.' },
            { name: 'Shield Mastery', cost: 2000, description: 'Piper’s shield absorbs more damage and lasts longer.' }
        ]
    },
    'Bo': {
        gadgets: [
            { name: 'Bo’s Trap', cost: 1000, description: 'Bo deploys a trap that explodes and deals damage to enemies.' },
            { name: 'Shield Generator', cost: 1000, description: 'Bo creates a shield that absorbs damage and provides additional protection.' }
        ],
        gears: commonGears(),
        starPower: [
            { name: 'Trap Boost', cost: 2000, description: 'Bo’s traps deal additional damage and have a larger explosion radius.' },
            { name: 'Shield Mastery', cost: 2000, description: 'Bo’s shield absorbs more damage and lasts longer.' }
        ]
    },
    'Poco': {
        gadgets: [
            { name: 'Healing Music', cost: 1000, description: 'Poco plays a healing tune that restores health to allies.' },
            { name: 'Shield Burst', cost: 1000, description: 'Poco creates a shield that absorbs damage and provides additional protection.' }
        ],
        gears: commonGears(),
        starPower: [
            { name: 'Healing Tune', cost: 2000, description: 'Poco’s healing music restores more health and has a larger area.' },
            { name: 'Shield Mastery', cost: 2000, description: 'Poco’s shield absorbs more damage and lasts longer.' }
        ]
    },
    'Mortis': {
        gadgets: [
            { name: 'Shadow Step', cost: 1000, description: 'Mortis dashes forward, dealing damage to enemies in his path.' },
            { name: 'Shield Generator', cost: 1000, description: 'Mortis creates a shield that absorbs damage and provides additional protection.' }
        ],
        gears: commonGears(),
        starPower: [
            { name: 'Dash Power', cost: 2000, description: 'Mortis’s dash deals additional damage and has a larger range.' },
            { name: 'Shield Mastery', cost: 2000, description: 'Mortis’s shield absorbs more damage and lasts longer.' }
        ]
    },
    'El Primo': {
        gadgets: [
            { name: 'Elbow Drop', cost: 1000, description: 'El Primo performs a powerful elbow drop, dealing damage to enemies and knocking them back.' },
            { name: 'Shield Boost', cost: 1000, description: 'El Primo creates a shield that absorbs damage and provides additional protection.' }
        ],
        gears: commonGears(),
        starPower: [
            { name: 'Elbow Power', cost: 2000, description: 'El Primo’s elbow drop deals additional damage and has a larger knockback effect.' },
            { name: 'Shield Mastery', cost: 2000, description: 'El Primo’s shield absorbs more damage and lasts longer.' }
        ]
    },
    'Rico': {
        gadgets: [
            { name: 'Ricochet', cost: 1000, description: 'Rico’s shots bounce off walls and deal damage to enemies.' },
            { name: 'Shield Generator', cost: 1000, description: 'Rico creates a shield that absorbs damage and provides additional protection.' }
        ],
        gears: commonGears(),
        starPower: [
            { name: 'Ricochet Boost', cost: 2000, description: 'Rico’s shots bounce more effectively and deal additional damage.' },
            { name: 'Shield Mastery', cost: 2000, description: 'Rico’s shield absorbs more damage and lasts longer.' }
        ]
    },
    'Nita': {
        gadgets: [
            { name: 'Bear Paws', cost: 1000, description: 'Nita’s bear paw deals damage and knocks back enemies.' },
            { name: 'Shield Boost', cost: 1000, description: 'Nita creates a shield that absorbs damage and provides additional protection.' }
        ],
        gears: commonGears(),
        starPower: [
            { name: 'Hyper Bear', cost: 2000, description: 'Nita’s bear deals additional damage and has more health.' },
            { name: 'Bear With Me', cost: 2000, description: 'Nita heals for a portion of the damage dealt by her bear.' }
        ]
    },
    'Jessie': {
        gadgets: [
            { name: 'Scrappy’s Shield', cost: 1000, description: 'Jessie deploys Scrappy with a shield that absorbs damage.' },
            { name: 'Shockwave', cost: 1000, description: 'Jessie’s turret sends out a shockwave that damages and slows enemies.' }
        ],
        gears: commonGears(),
        starPower: [
            { name: 'Bounce Shot', cost: 2000, description: 'Jessie’s attacks bounce between targets, dealing additional damage.' },
            { name: 'Scrappy’s Health', cost: 2000, description: 'Scrappy has more health and is more resilient.' }
        ]
    },
    'Barley': {
        gadgets: [
            { name: 'Potion Drop', cost: 1000, description: 'Barley drops a potion that creates a damaging area over time.' },
            { name: 'Shield Generator', cost: 1000, description: 'Barley creates a shield that absorbs damage and provides additional protection.' }
        ],
        gears: commonGears(),
        starPower: [
            { name: 'Medical Use', cost: 2000, description: 'Barley’s potion deals additional damage and has a larger area.' },
            { name: 'Shield Mastery', cost: 2000, description: 'Barley’s shield absorbs more damage and lasts longer.' }
        ]
    },
    'Brock': {
        gadgets: [
            { name: 'Rocket Fuel', cost: 1000, description: 'Brock’s rockets deal additional damage and have a larger explosion radius.' },
            { name: 'Shield Boost', cost: 1000, description: 'Brock creates a shield that absorbs damage and provides additional protection.' }
        ],
        gears: commonGears(),
        starPower: [
            { name: 'Rocket No. 4', cost: 2000, description: 'Brock’s rockets deal extra damage and have a larger blast radius.' },
            { name: 'Rocket Speed', cost: 2000, description: 'Brock’s rockets travel faster and deal more damage.' }
        ]
    }

};

// Helper function for common gears with descriptions
function commonGears() {
    return [
        { name: 'SPEED', cost: 1000, description: 'Increases movement speed.' },
        { name: 'HEALTH', cost: 1000, description: 'Increases maximum health.' },
        { name: 'DAMAGE', cost: 1000, description: 'Increases damage output.' },
        { name: 'VISION', cost: 1000, description: 'Enhances vision radius.' },
        { name: 'SHIELD', cost: 1000, description: 'Reduces incoming damage.' },
        { name: 'GADGET CHARGE', cost: 1000, description: 'Increases the speed of gadget recharge.' }
    ];
}



function filterBrawlers() {
    const input = document.getElementById("brawlerSearch").value.toLowerCase();
    const select = document.getElementById("brawler");
    const options = select.options;

    let hasVisibleOptions = false;
    for (let i = 0; i < options.length; i++) {
        const optionText = options[i].text.toLowerCase();
        if (optionText.includes(input)) {
            options[i].style.display = "";  // Show the option
            hasVisibleOptions = true;
        } else {
            options[i].style.display = "none";  // Hide the option
        }
    }

    // Automatically select the first visible option
    if (hasVisibleOptions) {
        select.value = [...options].find(option => option.style.display !== "none").value;
        updateAvailableOptions(select.value);  // Update options when selection changes
    } else {
        select.value = "";
    }
}

function updateAvailableOptions(brawler) {
    const gadgetSelect = document.getElementById('gadgetSelect');
    const gearSelect1 = document.getElementById('gearSelect1');
    const gearSelect2 = document.getElementById('gearSelect2');
    const starPowerSelect = document.getElementById('starPowerSelect');

    // Clear previous options
    gadgetSelect.innerHTML = '<option value="None">None</option>';
    gearSelect1.innerHTML = '<option value="None">None</option>';
    gearSelect2.innerHTML = '<option value="None">None</option>';
    starPowerSelect.innerHTML = '<option value="None">None</option>';

    // Populate gadget options
    brawlerData[brawler].gadgets.forEach(gadget => {
        const option = document.createElement('option');
        option.value = gadget.name;
        option.text = gadget.name;
        gadgetSelect.add(option);
    });

    // Populate gear options
    brawlerData[brawler].gears.forEach(gear => {
        const option1 = document.createElement('option');
        const option2 = document.createElement('option');
        option1.value = gear.name;
        option1.text = gear.name;
        option2.value = gear.name;
        option2.text = gear.name;
        gearSelect1.add(option1);
        gearSelect2.add(option2);
    });

    // Populate star power options
    brawlerData[brawler].starPower.forEach(starPower => {
        const option = document.createElement('option');
        option.value = starPower.name;
        option.text = starPower.name;
        starPowerSelect.add(option);
    });
}

function updateDescription(selectId, descriptionDivId, imageId) {
    const selectElement = document.getElementById(selectId);
    const selectedValue = selectElement.value;
    const brawler = document.getElementById("brawler").value;
    let description = "";
    let imageUrl = "";

    if (selectedValue !== "None") {
        if (selectId.includes("gadget")) {
            const gadget = brawlerData[brawler].gadgets.find(g => g.name === selectedValue);
            description = gadget.description;
            imageUrl = gadget.image; // Ensure you add the image property in your data
        } else if (selectId.includes("gear")) {
            const gear = brawlerData[brawler].gears.find(g => g.name === selectedValue);
            description = gear.description || 'Standard gear ability.';
            imageUrl = gear.image; // Ensure you add the image property in your data
        } else if (selectId.includes("starPower")) {
            const starPower = brawlerData[brawler].starPower.find(s => s.name === selectedValue);
            description = starPower.description;
            imageUrl = starPower.image; // Ensure you add the image property in your data
        }
    }

    document.getElementById(descriptionDivId).innerText = description;
    const imgElement = document.getElementById(imageId);
    if (imageUrl) {
        imgElement.src = imageUrl;
        imgElement.style.display = 'block';
    } else {
        imgElement.style.display = 'none';
    }
}



function updatePrice(selectId, priceTagId) {
    const selectElement = document.getElementById(selectId);
    const selectedValue = selectElement.value;
    const brawler = document.getElementById("brawler").value;

    let price = 0;

    if (selectedValue !== "None") {
        if (selectId.includes("gadget")) {
            price = brawlerData[brawler].gadgets.find(g => g.name === selectedValue).cost;
        } else if (selectId.includes("gear")) {
            price = brawlerData[brawler].gears.find(g => g.name === selectedValue).cost;
        } else if (selectId.includes("starPower")) {
            price = brawlerData[brawler].starPower.find(s => s.name === selectedValue).cost;
        }
    }

    document.getElementById(priceTagId).innerText = price + " Coins";
}


function calculate() {
    const brawler = document.getElementById("brawler").value;
    const startLevel = parseInt(document.getElementById("startLevel").value);
    const endLevel = parseInt(document.getElementById("endLevel").value);

    if (startLevel >= endLevel) {
        alert('Start level must be less than end level.');
        return;
    }

    let totalPowerPoints = 0;
    let totalCoins = 0;

    for (let level = startLevel + 1; level <= endLevel; level++) {
        totalPowerPoints += upgradeData[level].powerPoints;
        totalCoins += upgradeData[level].coins;
    }

    // Add the costs of selected gadget, gears, and star power
    const selectedGadget = document.getElementById("gadgetSelect").value;
    const selectedGear1 = document.getElementById("gearSelect1").value;
    const selectedGear2 = document.getElementById("gearSelect2").value;
    const selectedStarPower = document.getElementById("starPowerSelect").value;

    if (selectedGadget && selectedGadget !== 'None') {
        totalCoins += brawlerData[brawler].gadgets.find(g => g.name === selectedGadget).cost;
    }

    if (selectedGear1 && selectedGear1 !== 'None') {
        totalCoins += brawlerData[brawler].gears.find(g => g.name === selectedGear1).cost;
    }

    if (selectedGear2 && selectedGear2 !== 'None' && selectedGear2 !== selectedGear1) {
        totalCoins += brawlerData[brawler].gears.find(g => g.name === selectedGear2).cost;
    }

    if (selectedStarPower && selectedStarPower !== 'None') {
        totalCoins += brawlerData[brawler].starPower.find(s => s.name === selectedStarPower).cost;
    }

    // Update the UI with the calculated values
    document.getElementById("powerPointsValue").innerText = totalPowerPoints;
    document.getElementById("coinsValue").innerText = totalCoins;

    // Handle Hypercharge calculations
    if (endLevel === 11 && hyperchargeBrawlers.includes(brawler)) {
        const totalCoinsWithHypercharge = totalCoins + 5000;
        document.getElementById("totalCoinsWithHypercharge").style.display = "block";
        document.getElementById("coinsWithHyperchargeValue").innerText = totalCoinsWithHypercharge;
    } else {
        document.getElementById("totalCoinsWithHypercharge").style.display = "none";
    }
}

document.getElementById("brawler").addEventListener("change", function() {
    updateAvailableOptions(this.value);
});

document.addEventListener('DOMContentLoaded', () => {
    const initialBrawler = document.getElementById("brawler").value;
    updateAvailableOptions(initialBrawler);
});
