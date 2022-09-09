import R6API, { typings } from "r6api.js";

export interface Player {
    id: string;
    userId: string;
    idOnPlatform: string;
    platform: "uplay" | "psn" | "xbl" | "steam" | "epic" | "amazon";
    username: string;
    avatar: {
        146: string;
        256: string;
        500: string;
    };
}
const { UBI_EMAIL: email = '', UBI_PASSWORD: password = '' } = process.env;
export const Client = new R6API({ email, password });

export async function getPlayerFromAllPlatforms(name: string): Promise<(Player[])> {
    const platforms: ("uplay" | "psn" | "xbl" | "steam" | "epic" | "amazon")[] = [
        "uplay",
        "psn",
        "xbl",
        "steam",
        "epic",
        "amazon"
    ]
    const player = [];
    for (const platform of platforms) {
        const playerData = await Client.findByUsername(platform, name);
        if (playerData) {
            player.push(playerData[0]);
        }
    }

    return player;
}

export async function findByName(name: string) {
    //Generate all possible names for the player
    const names = [
        name,
        name.toLowerCase(),
        name.toUpperCase(),
        name.charAt(0).toUpperCase() + name.slice(1).toLowerCase(),
        name.charAt(0).toLowerCase() + name.slice(1).toUpperCase()
    ];

    const results: Player[] = [];
    names.forEach(
        async (name) => {
            const players = await getPlayerFromAllPlatforms(name);

            if (players.length > 0) {
                players.forEach((player) => {
                    results.push(player);
                });
            }
        }
    )
    return results;   
}
