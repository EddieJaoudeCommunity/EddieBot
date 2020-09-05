import { MessageEmbed } from 'discord.js';

// Use dotenv to find system variables or a .env file.
require('dotenv').config();

export default {
  BIO: [ 'description', 'github', 'twitter', 'youtube', 'instagram', 'linkedin', 'location', 'timezone'],
  COMMAND_PREFIX: process.env.COMMAND_PREFIX || '$',
  INTRO_CHANNEL: 'introductions',
  GENERAL_CHANNEL: 'general',
  BOT_CHANNEL_ID: process.env.DISCORD_BOT_CHANNEL_ID,
  REACTIONS_COUNT: 5,
  ROLE: {
    HIGH_VALUE:  {
      name: 'high value',
      description: 'Members with this role have access to more commands to moderate the server (e.g. ban). You get assigned this role if you have a message with +5 reactions'
    },
    BIO:{
      name: 'bio',
      description: 'You get assigned this role once you set a biography with the "bio" command'
    },
    OPEN_SOURCE:{
      name: 'opensource',
      description: 'You can assign this role to yourself to subscribe to get open-source reminders and if you like contributing to open-source software'
    }
  },
  defaultEmbed: () => {
    return new MessageEmbed()
      .setColor('#0099ff')
      .setTimestamp()
      .setFooter('Our bot is Open Source, you can find it here https://github.com/EddieJaoudeCommunity/EddieBot');
  },
  TIMEZONES: [
    { abbr: 'PDT', zone: 'America/Los_Angeles' },
    { abbr: 'AEST', zone: 'Australia/Brisbane' },
    { abbr: 'EEST', zone: 'Asia/Beirut' },
    { abbr: 'UTC', zone: 'Europe/London' }, { abbr: 'UK', zone: 'Europe/London' },
    { abbr: 'IST', zone: 'Asia/Kolkata' },
  ],
  OPENSOURCE_JOB_CRON_TIME: process.env.OPENSOURCE_JOB_CRON_TIME || '0 14 * * *' // Default time is everyday at 2pm
};

export function isDevelopment(): boolean {
  return process.env.NODE_ENV !== 'production';
}

// Possible values for user subscriptions
export enum UserSubscriptions {
  OPEN_SOURCE = 'OPENSOURCE'
}

export const selfAssignableRoles = [
  'php', 'laravel',
  'javascript', 'angular', 'react', 'vue',
  'java',
  'ruby',
  'python',
  'ops',
  'fullstack',
  'flutter',
  'typescript',
  'opensource'
];
