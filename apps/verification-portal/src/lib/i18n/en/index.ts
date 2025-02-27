import type { BaseTranslation } from '../i18n-types';

const en: BaseTranslation = {
  title: {
    part1: 'Welcome to our',
    part2: 'REAL',
    part3: 'Verification Portal.',
  },
  subtitle:
    'Learn how your asset is helping real-world conservation efforts around the globe.',
  collection: 'Collection:',
  highlights: 'Latest Highlights',
  results: {
    resultsFor: 'Showing results for',
    nrResults: '{0} result{{s}}',
    noResults: 'No results found',
    errorMessage:
      'Uh-oh! It looks like a hiccup in the wild! 🐾 \n Please lend a paw by refreshing the page and trying again.',
  },

  sub0: {
    collectionName: 'sub0 Biodiversity',
    placeholder: 'Enter token ID (1-1999)',
  },
  soundwaves: {
    collectionName: 'Soundwaves',
    placeholder: 'Explore by token ID (1-1999)',
  },
  wallet: {
    assetsFor: 'Showing your ',
    assetsFor_pt2: '{collection: string} assets',
    myAssets:
      'You own {nrOfAssets: number} {collection: string} asset{{nrOfAssets:s}}',
    nrAssets: '{0} asset{{s}} found',
    noAssets: 'No assets found',
    errorMessage:
      'Uh-oh! It looks like a hiccup in the wild! 🐾 \n Please lend a paw by refreshing the page and trying again.',
  },
  notifications: {
    seeAll: 'See all notifications',
    nrNotification: '{0} notification{{s}}',
    subscribe: 'Subscribe to updates',
    subscribeCollection: 'Subscribe to collection',
    newNotifications:
      'You have {nrOfNotifications: number} new notification{{nrOfNotifications:s}}',
    notificationCenter: 'Your notification center',
    notificationSettings: 'Notification preferences',
    notFound: 'No notifications found',
    deleted: 'Message Deleted',
  },
  web2: {
    search: {
      label: 'Search for your asset',
      placeholder: 'Asset name',
    },
  },
  assets: {
    title: 'REAL by SNI | {assetName: string}',
    intro: {
      sub0: 'Welcome to the Polkadot sub0 biodiversity collection. Your contribution makes a REAL difference. Connect with the marine biodiversity served by the organisation AIMM Portugal.',
    },
    verified: 'Verified:',
    shareText: 'Share your asset',
    funds: {
      cardTitle: 'Funds generated so far:',
      labelAsset: 'By this asset',
      labelTotal: 'Total',
    },
    ecSteward: {
      title: 'Ecological Steward',
      description:
        'Ecological Steward (ES): an identified conservation/restoration group, being an organisation (e.g. KWT) or a community, group of stakeholders who has also the mandate to manage the funds raised',
    },
    ecEntity: {
      cardTitle: 'Collecting funds for:',
      propsTitle: 'Animal stats:',
      title: 'Ecological Entity',
      description:
        'Ecological Entity: an identified piece of ecology the Ecological Steward (ES) focuses on, that being a specific species population (predators of the Maasai Mara) or an ecosystem (the Upemba National Park)',
      traces: 'Traces Recorded',
    },
  },
  social: {
    shareCard: {
      title: 'REAL by Sovereign Nature Initiative',
      description:
        'The eco-data pipeline to connect real life ecology with the digital world.',
    },
    og: {
      token: 'Token ID:',
      source: 'Source:',
      fundsGenerated: 'Total funds generated to date:',
    },
    twitterPrefix: 'Look at my eco-linked asset by @sovereignnature',
    telegramPrefix:
      'Look at my eco-linked asset by Sovereign Nature Initiative',
  },
  footer: {
    mailing: 'Subscribe to our mailing list',
    terms: 'Terms & Conditions',
    privacy: 'Privacy Policy',
  },
  news: {
    readMore: 'Read more',
    close: 'Close',
  },
  colorTheme: {
    auto: 'Auto',
    light: 'Light Mode',
    dark: 'Night Mode',
  },
  errors: {
    image:
      "Oops! The asset image couldn't make it to the habitat.🐾 \n Please try again later.",
    notFoundTitle: 'Try searching for another asset...',
    errorPageTitle: 'Search for your asset to verify',
  },
} satisfies BaseTranslation;

export default en;
