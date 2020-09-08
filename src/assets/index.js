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

const moonDesk = require('./stories/desktop/moon-of-appalacia.jpg');
const moonMob  = require('./stories/mobile/moon-of-appalacia.jpg');
const moonTab  = require('./stories/tablet/moon-of-appalacia.jpg');

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

export const home = {
  hero1: {
    reverse: true,
    inverted: true,
    main: true,
    images: {
      desk: homeHero1Desk,
      tablet: homeHero1Tab,
      mobile: homeHero1Mob,
    },
    alt:"Man On Dock",
    title:"Create and Share Your Photo Stories",
    body: "Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others.",
    linkText: "Get An Invite",
    linkTo:"#",
  },
  hero2: {
    reverse: false,
    inverted: false,
    main: false,
    images: {
      desk: homeHero2Desk,
      tablet: homeHero2Tab,
      mobile: homeHero2Mob,
    },
    alt:"Laptop on Desk",
    title:"Beautiful stories every time",
    body: "We provide design templates to ensure your stories look terrific. Easily add photos, text, embed maps and media from other networks. Then share your story with everyone.",
    linkText: "View the stories",
    linkTo:"/stories",
  },
  hero3: {
    reverse: true,
    inverted: false,
    main: false,
    images: {
      desk: homeHero3Desk,
      tablet: homeHero3Tab,
      mobile: homeHero3Mob,
    },
    alt:"Photographer",
    title:"Designed for Everyone",
    body: "Photosnap can help you create stories that resonate with your audience. Our tool is designed for photographers of all levels, brands, businesses you name it.",
    linkText: "View the stories",
    linkTo:"/stories",
  },
}

export const stories = {
  theMountains: {
    title: "The Mountains",
    by: "John Appleseed",
    date: "April 16th 2020",
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
    date: "April 14th 2020",
  },
  daysVoyage: {
    title: "18 Days Voyage",
    by: "Alexei Borodin",
    images: {
      desk: daysVoyageDesk,
      tablet: null,
      mobile: daysVoyageMob,
    },
    date:"April 11th 2020",
  },
  architecturals: {
    title: "Architecturals",
    by: "Samantha Brooke",
    images: {
      desk: architecturalsDesk,
      tablet: null,
      mobile: architecturalsMob,
    },
    date: "April 9th 2020",
  },
  worldTour: {
    title: "World Tour 2019",
    by: "Timothy Wagner",
    images: {
      desk: worldDesk,
      tablet: null,
      mobile: worldMob,
    },
    date: "April 7th 2020"
  },
  unforeseen: {
    title: "Unforeseen Corners",
    by: "William Malcolm",
    images: {
      desk: unforeseenDesk,
      tablet: null,
      mobile: unforeseenMob,
    },
    date: "April 3rd 2020",
  },
  king: {
    title: "King on Africa: Part II",
    by: "Tim Hillenburg",
    images: {
      desk: kingDesk,
      tablet: null,
      mobile: kingMob,
    },
    date: "March 29th 2020"
  },
  trip: {
    title: "The Trip to Nowhere",
    by: "Felicia Rourke",
    images: {
      desk: tripDesk,
      tablet: null,
      mobile: tripMob,
    },
    date: "March 21st 2020",
  },
  rage: {
    title: "Rage of the Sea",
    by: "Mohammed Abdul",
    images: {
      desk: rageDesk,
      tablet: null,
      mobile: rageMob,
    },
    date: "March 19th 2020",

  },
  running: {
    title: "Running Free",
    by: "Michelle",
    images: {
      desk: runningDesk,
      tablet: null,
      mobile: runningMob,
    },
    date: "March 16th 2020",

  },
  behind: {
    title: "Behind the Waves",
    by: "Lamarr Wilson",
    images: {
      desk: behindDesk,
      tablet: null,
      mobile: behindMob,
    },
    date: "March 11th 2020",

  },
  calm: {
    title: "Calm Waters",
    by: "Samantha Brooke",
    images: {
      desk: calmDesk,
      tablet: null,
      mobile: calmMob,
    },
    date: "March 9th 2020",

  },
  milky: {
    title: "The Milky Way",
    by: "Benjamin Cruz",
    images: {
      desk: milkyDesk,
      tablet: null,
      mobile: milkyMob,
    },
    date: "March 5th 2020",

  },
  darkForest: {
    title: "Night at the Dark Forest",
    by: "Mohammed Abdul",
    images: {
      desk: darkForestDesk,
      tablet: null,
      mobile: darkForestMob,
    },
    date: "March 4th 2020",

  },
  somwarpet: {
    title: "Somwarpet's Beauty",
    by: "Michelle",
    images: {
      desk: somwarpetDesk,
      tablet: null,
      mobile: somwarpetMob,
    },
    date: "March 1st 2020",

  },
  land: {
    title: "Land of Dreams",
    by: "William Malcolm",
    images: {
      desk: landDesk,
      tablet: null,
      mobile: landMob,
    },
    date: "February 25th 2020",
  },
  moonFeature: {
    title: "Hazy Full Moon of Appalachia",
    by: "John Appleseed",
    images: {
      desk: moonDesk,
      tablet: moonTab,
      mobile: moonMob,
    },
    date: "March 2nd 2020",
    body: "The dissected plateau area, while not actually made up of geological mountains, is popularly called 'mountains,' especially in eastern Kentucky and West Virginia, and while the ridges are not high, the terrain is extremely rugged."
  }
}

export const benefits = {
  hero: {
    title: "Features",
    body: "We make sure all of our features are designed to be loved by every aspiring and even professional photograpers who wanted to share their stories.",
    images: {
      desk: featureHeroDesk,
      tablet: featureHeroTab,
      mobile: featureHeroMob,
    },
    alt: "Person holding camera",
    reverse: true,
    inverted: true,
    main: true,
  },
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

export const pricing = {
  hero: {
    reverse: true,
    inverted: true,
    main: true,
    images: {
      desk: pricingHeroDesk,
      tablet: pricingHeroTab,
      mobile: pricingHeroMob,
    },
    alt: "Photographer",
    title: "Pricing",
    body: "Create a your stories, Photosnap is a platform for photographers and visual storytellers. It’s the simple way to create and share your photos."
  },
  basic: {
    inverted: false,
    name: "Basic",
    "body": "Includes basic usage of our platform. Recommended for new and aspiring photographers.",
    monthly: '$19.00',
    yearly: '$190.00',
  },
  pro: {
    inverted: true,
    name: "Pro",
    "body": "More advanced features available. Recommended for photography veterans and professionals.",
    monthly: '$39.00',
    yearly: '$390.00',
  },
  business: {
    inverted: false,
    name: "Business",
    "body": "Additional features available such as more detailed metrics. Recommended for business owners.",
    monthly: '$99.00',
    yearly: '$990.00',
  },
}