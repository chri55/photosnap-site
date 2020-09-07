// START Features Page Images
const featureBoostExposure = require('./features/desktop/boost-exposure.svg');
const featureCustomDomain = require('./features/desktop/custom-domain.svg');
const featureDragDrop = require('./features/desktop/drag-drop.svg');
const featureEmbed = require('./features/desktop/embed.svg');
const featureNoLimit = require('./features/desktop/no-limit.svg');
const featureResponsive = require('./features/desktop/responsive.svg');

export const featureHeroDesk = require('./features/desktop/hero.jpg');
export const featureHeroMob = require('./features/mobile/hero.jpg');
export const featureHeroTab = require('./features/tablet/hero.jpg');
// END Features Pages Images

// START Home Page Images
export const homeHero1Desk = require('./home/desktop/create-and-share.jpg');
export const homeHero2Desk = require('./home/desktop/beautiful-stories.jpg');
export const homeHero3Desk = require('./home/desktop/designed-for-everyone.jpg');

export const homeHero1Mob = require('./home/mobile/create-and-share.jpg');
export const homeHero2Mob = require('./home/mobile/beautiful-stories.jpg');
export const homeHero3Mob = require('./home/mobile/designed-for-everyone.jpg');

export const homeHero1Tab = require('./home/tablet/create-and-share.jpg');
export const homeHero2Tab = require('./home/tablet/beautiful-stories.jpg');
export const homeHero3Tab = require('./home/tablet/designed-for-everyone.jpg');
// END Home Page Images

// START Pricing Page Images
export const pricingCheck = require('./pricing/desktop/check.svg');

export const pricingHeroDesk = require('./pricing/desktop/hero.jpg');
export const pricingHeroMob = require('./pricing/mobile/hero.jpg');
export const pricingHeroTab = require('./pricing/tablet/hero.jpg');
// END Pricing Page Images

// START Shared Images
export const sharedArrow = require('./shared/desktop/arrow.svg');
export const sharedFacebook = require('./shared/desktop/facebook.svg');
export const sharedInstagram = require('./shared/desktop/instagram.svg');
export const sharedLogo = require('./shared/desktop/logo.svg');
export const sharedPinterest = require('./shared/desktop/pinterest.svg');
export const sharedTwitter = require('./shared/desktop/twitter.svg');
export const sharedYoutube = require('./shared/desktop/youtube.svg');

export const sharedMenuOpen = require('./shared/mobile/menu.svg');
export const sharedMenuClose = require('./shared/mobile/close.svg');

export const sharedBetaBGDesk = require('./shared/desktop/bg-beta.jpg');
export const sharedBetaBGMob = require('./shared/mobile/bg-beta.jpg');
export const sharedBetaBGTab = require('./shared/tablet/bg-beta.jpg');
// END Shared Images

// START Stories Images
const daysVoyageDesk = require('./stories/desktop/18-days-voyage.jpg');
const daysVoyageMob  = require('./stories/mobile/18-days-voyage.jpg');

const architecturalsDesk = require('./stories/desktop/architecturals.jpg');
const architecturalsMob  = require('./stories/mobile/architecturals.jpg');

const behindDesk = require('./stories/desktop/behind-the-waves.jpg');
const behindMob  = require('./stories/mobile/behind-the-waves.jpg');

const calmDesk = require('./stories/desktop/calm-waters.jpg');
const calmMob  = require('./stories/mobile/calm-waters.jpg');

const cityscapeDesk = require('./stories/desktop/cityscapes.jpg');
const cityscapeMob  = require('./stories/mobile/cityscapes.jpg');

const darkForestDesk = require('./stories/desktop/dark-forest.jpg');
const darkForestMob  = require('./stories/mobile/dark-forest.jpg');

const kingDesk = require('./stories/desktop/king-on-africa.jpg');
const kingMob  = require('./stories/mobile/king-on-africa.jpg');

const landDesk = require('./stories/desktop/land-of-dreams.jpg');
const landMob  = require('./stories/mobile/land-of-dreams.jpg');

const milkyDesk = require('./stories/desktop/milky-way.jpg');
const milkyMob  = require('./stories/mobile/milky-way.jpg');

export const moonDesk = require('./stories/desktop/moon-of-appalacia.jpg');
export const moonMob  = require('./stories/mobile/moon-of-appalacia.jpg');
export const moonTab  = require('./stories/tablet/moon-of-appalacia.jpg');

const mountainsDesk = require('./stories/desktop/mountains.jpg');
const mountainsMob  = require('./stories/mobile/mountains.jpg');

const rageDesk = require('./stories/desktop/rage-of-the-sea.jpg');
const rageMob  = require('./stories/mobile/rage-of-the-sea.jpg');

const runningDesk = require('./stories/desktop/running-free.jpg');
const runningMob  = require('./stories/mobile/running-free.jpg');

const somwarpetDesk = require('./stories/desktop/somwarpet.jpg');
const somwarpetMob  = require('./stories/mobile/somwarpet.jpg');

const tripDesk = require('./stories/desktop/trip-to-nowhere.jpg');
const tripMob  = require('./stories/mobile/trip-to-nowhere.jpg');

const unforeseenDesk = require('./stories/desktop/unforeseen-corners.jpg');
const unforeseenMob  = require('./stories/mobile/unforeseen-corners.jpg');

const worldDesk = require('./stories/desktop/world-tour.jpg');
const worldMob  = require('./stories/mobile/world-tour.jpg');
// END Stories Images

export const stories = {
  theMountains: {
    title: "The Mountains",
    by: "John Appleseed",
    images: {
      desk: mountainsDesk,
      tablet: null,
      mobile: mountainsMob,
    },
  },
  sunsetCityscapes: {
    title: "Sunset Cityscapes",
    by: "Benjamin Cruz",
    images: {
      desk: cityscapeDesk,
      tablet: null,
      mobile: cityscapeMob,
    },
  },
  daysVoyage: {
    title: "18 Days Voyage",
    by: "Alexei Borodin",
    images: {
      desk: daysVoyageDesk,
      tablet: null,
      mobile: daysVoyageMob,
    },
  },
  architecturals: {
    title: "Architecturals",
    by: "Samantha Brooke",
    images: {
      desk: architecturalsDesk,
      tablet: null,
      mobile: architecturalsMob,
    },
  },
  worldTour: {
    title: "World Tour 2019",
    by: "Timothy Wagner",
    images: {
      desk: worldDesk,
      tablet: null,
      mobile: worldMob,
    },
  },
  unforeseen: {
    title: "Unforeseen Corners",
    by: "William Malcolm",
    images: {
      desk: unforeseenDesk,
      tablet: null,
      mobile: unforeseenMob,
    },
  },
  king: {
    title: "King on Africa: Part II",
    by: "Tim Hillenburg",
    images: {
      desk: kingDesk,
      tablet: null,
      mobile: kingMob,
    },
  },
  trip: {
    title: "The Trip to Nowhere",
    by: "Felicia Rourke",
    images: {
      desk: tripDesk,
      tablet: null,
      mobile: tripMob,
    },
  },
  rage: {
    title: "Rage of the Sea",
    by: "Mohammed Abdul",
    images: {
      desk: rageDesk,
      tablet: null,
      mobile: rageMob,
    },
  },
  running: {
    title: "Running Free",
    by: "Michelle",
    images: {
      desk: runningDesk,
      tablet: null,
      mobile: runningMob,
    },
  },
  behind: {
    title: "Behind the Waves",
    by: "Lamarr Wilson",
    images: {
      desk: behindDesk,
      tablet: null,
      mobile: behindMob,
    },
  },
  calm: {
    title: "Calm Waters",
    by: "Samantha Brooke",
    images: {
      desk: calmDesk,
      tablet: null,
      mobile: calmMob,
    },
  },
  milky: {
    title: "The Milky Way",
    by: "Benjamin Cruz",
    images: {
      desk: milkyDesk,
      tablet: null,
      mobile: milkyMob,
    },
  },
  darkForest: {
    title: "Night at the Dark Forest",
    by: "Mohammed Abdul",
    images: {
      desk: darkForestDesk,
      tablet: null,
      mobile: darkForestMob,
    },
  },
  somwarpet: {
    title: "Somwarpet's Beauty",
    by: "Michelle",
    images: {
      desk: somwarpetDesk,
      tablet: null,
      mobile: somwarpetMob,
    },
  },
  land: {
    title: "Land of Dreams",
    by: "William Malcolm",
    images: {
      desk: landDesk,
      tablet: null,
      mobile: landMob,
    },
  },
}

export const benefits = {
  responsive: {
    name: "100% Responsive",
    description: "No matter which the device you’re on, our site is fully responsive and stories look beautiful on any screen.",
    images: {
      svg: featureResponsive,
    },
  },
  noLimit: {
    name: "No Photo Upload Limit",
    description: "Our tool has no limits on uploads or bandwidth. Freely upload in bulk and share all of your stories in one go.",
    images: {
      svg: featureNoLimit,
    },
  },
  embed: {
    name: "Available to Embed",
    description: "Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube videos, Google Maps, and more.",
    images: {
      svg: featureEmbed,
    },
  },
  customDomain: {
    name: "Custom Domain",
    description: "With Photosnap subscriptions you can host your stories on your own domain. You can also remove our branding!",
    images: {
      svg: featureCustomDomain,
    },
  },
  exposure: {
    name: "Boost Your Exposure",
    description: "Users that viewed your story or gallery can easily get notifed of new and featured stories with our built in mailing list.",
    images: {
      svg: featureBoostExposure,
    },
  },
  dragDrop: {
    name: "Drag & Drop Image",
    description: "Easily drag and drop your image and get beautiful shots everytime. No over the top tooling to add friction to creating stories.",
    images: {
      svg: featureDragDrop,
    },
  },
}