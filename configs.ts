// Step 1: Remove the `.example` from this file name so it is called `configs.ts` or copy the contents of the `configs.example.ts` file into a new `configs.ts` file
// Step 2: Add all your bot's information below. The only required one is token and prefix. NOTE: As long as `.gitignore` file is ignoring configs.ts your configurations will be kept private!
// Step 3: Remove these comments if you like.

export const configs = {
  // Your bot token goes here
  token: "ODc3MTg0ODM1ODE3NDU5Nzcy.YRu8Cg.oKwWxQoFX9fySK9VnbMbq3uCAQU",
  // The default prefix for your bot. Don't worry guilds can change this later.
  prefix: ">",
  // This isn't required but you can add bot list api keys here.
  // This is the server id for your bot's main server where users can get help/support
  supportServerId: "877185376710701066",
  userIds: {
    // You can delete the `as string[]` when you add atleast 1 id in them.
    // The user ids for the support team
    botSupporters: [] as string[],
    // The user ids for the other devs on your team
    botDevs: [852967386118357013] as string[],
    // The user ids who have complete 100% access to your bot
    botOwners: [852967386118357013] as string[],
  },
  webhooks: {
    // the webhook to use when the bot finds a missing translation
    missingTranslation: {
      id: "893853343011700756",
      token: "PM3gj1IHjc3ci11141BdFZpt0yq1dGK3zikCDCQdiJsqpNGTPSzOyw7yNpZGu_x7dLbX",
    },
  },
  // Lavadeno nodes
  nodes: [
    {
      // Id of the client which is connecting to the lavalink
      id: "main",
      host: "lava.link",
      port: 80,
      password: "youshallnotpass",
    },
  ],
};
