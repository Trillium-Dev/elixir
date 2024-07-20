import E1200GF from "assets/images/villas/E1200-GF.png";
import E1200FF from "assets/images/villas/E1200-FF.png";
import E1200SF from "assets/images/villas/E1200-SF.png";

import E1500GF from "assets/images/villas/Elixir-east-villa-1500-5.png";
import E1500FF from "assets/images/villas/Elixir-east-villa-1500-6.png";
import E1500SF from "assets/images/villas/Elixir-east-villa-1500-7.png";

import E2105GF from "assets/images/villas/E2105-1.png";
import E2105FF from "assets/images/villas/E2105-2.png";
import E2105SF from "assets/images/villas/E2105-3.png";

import E2400GF from "assets/images/villas/Elixir-east-villa-2400-5.png";
import E2400FF from "assets/images/villas/Elixir-east-villa-2400-6.png";
import E2400SF from "assets/images/villas/Elixir-east-villa-2400-7.png";

import W1200GF from "assets/images/villas/W1200-1.png";
import W1200FF from "assets/images/villas/W1200-2.png";
import W1200SF from "assets/images/villas/W1200-3.png";

import W1500GF from "assets/images/villas/W1500-1.png";
import W1500FF from "assets/images/villas/W1500-2.png";
import W1500SF from "assets/images/villas/W1500-3.png";

import W2105GF from "assets/images/villas/W2105-1.png";
import W2105FF from "assets/images/villas/W2105-2.png";
import W2105SF from "assets/images/villas/W2105-3.png";

import W2400GF from "assets/images/villas/Elixir-west-villa-2400-6.png";
import W2400FF from "assets/images/villas/Elixir-west-villa-2400-7.png";
import W2400SF from "assets/images/villas/Elixir-west-villa-2400-8.png";

// Icons

import FoundationIcon from "assets/icons/Foundation-Icon.svg";
import Door from "assets/icons/Door.svg";
import Wall from "assets/icons/Wall.svg";
import Windows from "assets/icons/Window.svg";
import Flooring from "assets/icons/Flooring.svg";
import Electrical from "assets/icons/Electrical.svg";
import Sanitary from "assets/icons/sanitary.svg";
import Kitchen from "assets/icons/kitchen.svg";
import Water from "assets/icons/Water.svg";
import CCTV from "assets/icons/CCTV.svg";
import Telecom from "assets/icons/Telecom.svg";

// Icons Clubhouse

import BanquetIcon from "assets/icons/clubhouse/banquet.svg";
import GymIcon from "assets/icons/clubhouse/gym.svg";
import IndoorIcon from "assets/icons/clubhouse/indoor.svg";
import YogaIcon from "assets/icons/clubhouse/yoga.svg";
import LibraryIcon from "assets/icons/clubhouse/library.svg";
import MultiIcon from "assets/icons/clubhouse/multi.svg";

//icons Outdoor

import BadmintonIcon from "assets/icons/outdoor/badminton.svg";
import BasketballIcon from "assets/icons/outdoor/basketball.svg";
import CricketIcon from "assets/icons/outdoor/cricket.svg";
import CyclingIcon from "assets/icons/outdoor/cycling.svg";
import JoggingIcon from "assets/icons/outdoor/jogging.svg";
import PlayIcon from "assets/icons/outdoor/playarea.svg";
import SkatingIcon from "assets/icons/outdoor/skating.svg";
import SwimmingIcon from "assets/icons/outdoor/swimming.svg";

// Icons HamburgerMenu
import AmenitiesIcon from "../public/assets/icons/amenitiesIcon.svg";
import LocationIcon from "../public/assets/icons/location.svg";
import VillasIcon from "../public/assets/icons/villasIcon.svg";
import SpecsIcon from "../public/assets/icons/specifications.svg";
import EnquireNowIcon from "../public/assets/icons/enquire-now.svg";
import WhatsappIcon from "../public/assets/icons/whatsapp.svg";

import EastFacing1200 from "../assets/images/villaImages/east-facing-1200.png";
import EastFacing1500 from "../assets/images/villaImages/east-facing-1500.png";
import EastFacing2105 from "../assets/images/villaImages/east-facing-2105.png";
import EastFacing2400 from "../assets/images/villaImages/east-facing-2400.png";

import WestFacing1200 from "../assets/images/villaImages/west-facing-1200.png";
import WestFacing1500 from "../assets/images/villaImages/west-facing-1500.png";
import WestFacing2105 from "../assets/images/villaImages/west-facing-2105.png";
import WestFacing2400 from "../assets/images/villaImages/west-facing-2400.png";

export const MOBILE_NUMBER = "+91 99455 36006";
export const MESSAGE = "Hey";

export const HeaderTabs = [
  { name: "Home", url: "/" },
  { name: "Villas", url: "/villas" },
  { name: "Amenities", url: "/amenities" },
  { name: "Specifications", url: "/specifications" },
  { name: "Location", url: "/#location" },
];

export const mobileHeaderTabs = [
  { name: "Villas", url: "/villas", icon: VillasIcon },
  { name: "Amenities", url: "/amenities", icon: AmenitiesIcon },
  { name: "Specifications", url: "/specifications", icon: SpecsIcon },
  { name: "Location", url: "/#location", icon: LocationIcon },
  {
    name: "Enquire now",
    url: "",
    icon: EnquireNowIcon,
  },
  {
    name: "WhatsApp",
    url: `//api.whatsapp.com/send?phone=${MOBILE_NUMBER}&text=${MESSAGE}`,
    icon: WhatsappIcon,
  },
];

export const FooterInfo = [
  {
    title: "PROJECT ADDRESS",
    value:
      "Sy. no. 64/1, 64/2, 65/1, 65/2, 65/3, 65/4, 69/3, 70/1 and Sy. no. 70/2 of Bidare Agrahara village Bidarahalli Hobli, BETQ, Bangalore.",
  },
  {
    title: "OFFICE ADDRESS",
    value:
      "DSR Techno Cube, C Block, 4th floor, Katha no. 645/1, Thrubrahalli, Kundalahalli gate, Next to SKR Convention Hall, Bangalore",
  },
  {
    title: "CONTACT US ON",
    value: "sales@dsrinfra.com",
    number: "(+91) 99455 36006",
  },
];

export const SpecificationsList = [
  {
    title: "Foundation and structure",
    icon: FoundationIcon,
    value1: "RCC frame structure.",
    value2:
      "The superstructure, comprised of solid blocks, features 8'' thick external walls and 6'' thick internal walls.",
  },
  {
    title: "Wall finishes",
    icon: Wall,
    value1:
      "The internal wall finishes feature a smooth plastered surface treated with putty and painted with premier quality acrylic emulsion paint of reputed make.",
    value2:
      "External wall finishes feature a textured surface, painted with external emulsion paint of reputed make.",
  },
  {
    title: "Doors",
    icon: Door,
    value1:
      "The main door and internal doors feature an engineered wood frame with a veneer shutter, finished in melamine polish, and fitted with hardware of reputed make.",
    value2:
      "The toilet and utility doors, feature a moulded acacia wood door frame with a flush shutter. The shutter is water-proofed with bonded resin, showcasing an enamel finish on one side and a laminated finish on the other side. These doors are also equipped with hardware of reputed make.",
  },
  {
    title: "Windows",
    icon: Windows,
    value1:
      "The windows are designed with UPVC sliding shutters, complete with mosquito mesh and safety grills.",
    value2: "",
  },
  {
    title: "Flooring and cladding",
    icon: Flooring,
    value1:
      "The foyer, living, and dining areas have imported marble flooring. The bedrooms and kitchen feature vitrified tile flooring. The sit-out and balconies are tiled with anti-skid ceramics.",
    value2:
      "All toilets have ceramic tiles up to door level dado. The utility and wash areas have anti-skid ceramic tiles of reputed make. The car park has granite flooring.",
  },
  {
    title: "Electrical",
    icon: Electrical,
    value1:
      "3 phase power supply with MCB’s of reputed make. Concealed copper wiring of reputed make. Modular switches of reputed make.",
    value2:
      "Modular switches of reputed make. Power outlets for AC in living and all bedrooms. Provision for TV in living and all bedrooms.",
  },
  {
    title: "CP and sanitary fittings",
    icon: Sanitary,
    value1:
      "Sanitary fixtures and CP fittings are provided by Vitra or equivalent brand. Geysers/solar provision is available in all bathrooms.",
    value2: "",
  },
  {
    title: "Kitchen and utility",
    icon: Kitchen,
    value1:
      "Treated water connection with a provision for a water purifier, along with inlets and outlets for the kitchen sink. Additionally, there is a provision for a washing machine and a stainless steel single-bowl sink with a granite counter.",
    value2: "",
  },

  {
    title: "Water supply",
    icon: Water,
    value1:
      "Treated water connection with a provision for a water purifier, along with inlets and outlets for the kitchen sink. Additionally, there is a provision for a washing machine and a stainless steel single-bowl sink with a granite counter.",
    value2: "",
  },

  {
    title: "CCTV",
    icon: CCTV,
    value1:
      "CCTV surveillance is installed at the project entry and exit points. Each unit is equipped with a standalone video door phone from a reputed brand",
    value2: "",
  },

  {
    title: "Telecom and internet",
    icon: Telecom,
    value1:
      "An intercom point is located in the living room, while internet points are available in both the living and drawing rooms on the first floor.",
    value2: "",
  },
];

export const VillasPages = (type: string) => {
  switch (type) {
    case "E1200":
      return {
        name: "EAST FACING VILLA",
        description: [
          "3-BHK + 1",
          "PLOT AREA : 1200 sqft. (30’ x 40’)",
          "TOTAL BUILT UP AREA : 2587 sqft.",
        ],
        imagesArr: [
          {
            image: E1200GF,
            width: 320,
            height: 552,
            description: ["GROUND FLOOR PLAN", "AREA : 871 sqft."],
          },
          {
            image: E1200FF,
            width: 383,
            height: 552,
            description: ["FIRST FLOOR PLAN", "AREA : 851 sqft."],
          },
          {
            image: E1200SF,
            width: 383,
            height: 552,
            description: ["SECOND FLOOR PLAN", "AREA : 865 sqft."],
          },
        ],
      };

    case "E1500":
      return {
        name: "EAST FACING VILLA",
        description: [
          "3-BHK + 1",
          "PLOT AREA : 1500 sqft. (30’ x 50’)",
          "TOTAL BUILT UP AREA : 3285 sqft.",
        ],
        imagesArr: [
          {
            image: E1500GF,
            width: 269,
            height: 552,
            description: ["GROUND FLOOR PLAN", "AREA : 1103 sqft."],
          },
          {
            image: E1500FF,
            width: 313,
            height: 552,
            description: ["FIRST FLOOR PLAN", "AREA : 1083 sqft."],
          },
          {
            image: E1500SF,
            width: 313,
            height: 552,
            description: ["SECOND FLOOR PLAN", "AREA : 1099 sqft."],
          },
        ],
      };

    case "E2105":
      return {
        name: "EAST FACING VILLA",
        description: [
          "3-BHK + 1",
          "PLOT AREA : 2105 sqft. (35’ x 60’)",
          "TOTAL BUILT UP AREA : 4515 sqft.",
        ],
        imagesArr: [
          {
            image: E2105GF,
            width: 272,
            height: 552,
            description: ["GROUND FLOOR PLAN", "AREA : 1511 sqft."],
          },
          {
            image: E2105FF,
            width: 321,
            height: 552,
            description: ["FIRST FLOOR PLAN", "AREA : 1497 sqft."],
          },
          {
            image: E2105SF,
            width: 321,
            height: 552,
            description: ["SECOND FLOOR PLAN", "AREA : 1507 sqft."],
          },
        ],
      };

    case "E2400":
      return {
        name: "EAST FACING VILLA",
        description: [
          "3-BHK + 1",
          "PLOT AREA : 2400 sqft. (40’ x 60’)",
          "TOTAL BUILT UP AREA : 5286 sqft.",
        ],
        imagesArr: [
          {
            image: E2400GF,
            width: 272,
            height: 552,
            description: ["GROUND FLOOR PLAN", "AREA : 1772 sqft."],
          },
          {
            image: E2400FF,
            width: 321,
            height: 552,
            description: ["FIRST FLOOR PLAN", "AREA : 1747 sqft."],
          },
          {
            image: E2400SF,
            width: 321,
            height: 552,
            description: ["SECOND FLOOR PLAN", "AREA : 1767 sqft."],
          },
        ],
      };
    case "W1200":
      return {
        name: "WEST FACING VILLA",
        description: [
          "4-BHK + 1",
          "PLOT AREA : 1200 sqft. (30’ x 40’)",
          "TOTAL BUILT UP AREA : 2588 sqft.",
        ],
        imagesArr: [
          {
            image: W1200GF,
            width: 320,
            height: 552,
            description: ["GROUND FLOOR PLAN", "AREA : 871 sqft."],
          },
          {
            image: W1200FF,
            width: 390,
            height: 552,
            description: ["FIRST FLOOR PLAN", "AREA : 853 sqft."],
          },
          {
            image: W1200SF,
            width: 390,
            height: 552,
            description: ["SECOND FLOOR PLAN", "AREA : 864 sqft."],
          },
        ],
      };
    case "W1500":
      return {
        name: "WEST FACING VILLA",
        description: [
          "4-BHK + 1",
          "PLOT AREA : 1500 sqft. (30’ x 50’)",
          "TOTAL BUILT UP AREA : 3288 sqft.",
        ],
        imagesArr: [
          {
            image: W1500GF,
            width: 271,
            height: 552,
            description: ["GROUND FLOOR PLAN", "AREA : 1103 sqft."],
          },
          {
            image: W1500FF,
            width: 308,
            height: 552,
            description: ["FIRST FLOOR PLAN", "AREA : 1082 sqft."],
          },
          {
            image: W1500SF,
            width: 308,
            height: 552,
            description: ["SECOND FLOOR PLAN", "AREA : 1103 sqft."],
          },
        ],
      };

    case "W2105":
      return {
        name: "WEST FACING VILLA",
        description: [
          "4-BHK + 1",
          "PLOT AREA : 2105 sqft. (35’ x 60’)",
          "TOTAL BUILT UP AREA : 4515 sqft.",
        ],
        imagesArr: [
          {
            image: W2105GF,
            width: 272,
            height: 552,
            description: ["GROUND FLOOR PLAN", "AREA : 1510 sqft."],
          },
          {
            image: W2105FF,
            width: 325,
            height: 552,
            description: ["FIRST FLOOR PLAN", "AREA : 1498 sqft."],
          },
          {
            image: W2105SF,
            width: 325,
            height: 552,
            description: ["SECOND FLOOR PLAN", "AREA : 1507 sqft."],
          },
        ],
      };
    case "W2400":
      return {
        name: "WEST FACING VILLA",
        description: [
          "4-BHK + 1",
          "PLOT AREA : 2400 sqft. (40’ x 60’)",
          "TOTAL BUILT UP AREA : 5285 sqft.",
        ],
        imagesArr: [
          {
            image: W2400GF,
            width: 307,
            height: 552,
            description: ["GROUND FLOOR PLAN", "AREA : 1772 sqft."],
          },
          {
            image: W2400FF,
            width: 375,
            height: 552,
            description: ["FIRST FLOOR PLAN", "AREA : 1747 sqft."],
          },
          {
            image: W2400SF,
            width: 375,
            height: 552,
            description: ["SECOND FLOOR PLAN", "AREA : 1767 sqft."],
          },
        ],
      };
  }
};

export const EastFacingVllas = [
  {
    text: "1200 sqft",
    id: "E1200",
    image: EastFacing1200,
  },
  {
    text: "1500 sqft",
    id: "E1500",
    image: EastFacing1500,
  },
  {
    text: "2105 sqft",
    id: "E2105",
    image: EastFacing2105,
  },
  {
    text: "2400 sqft",
    id: "E2400",
    image: EastFacing2400,
  },
];

export const WestFacingVillas = [
  {
    text: "1200 sqft",
    id: "W1200",
    image: WestFacing1200,
  },
  {
    text: "1500 sqft",
    id: "W1500",
    image: WestFacing1500,
  },
  {
    text: "2105 sqft",
    id: "W2105",
    image: WestFacing2105,
  },
  {
    text: "2400 sqft",
    id: "W2400",
    image: WestFacing2400,
  },
];

export const email = "sales.elixir@dsrinfra.com";

export const phoneNumber = "+91 99455 36006";

export const clubhouseAmenities = [
  {
    text: "Gymnasium",
    icon: GymIcon,
  },
  {
    text: "Yoga & meditation hall",
    icon: YogaIcon,
  },
  {
    text: "Indoor games",
    icon: IndoorIcon,
  },
  {
    text: "Library",
    icon: LibraryIcon,
  },
  {
    text: "Multi-purpose hall",
    icon: MultiIcon,
  },
  {
    text: "Banquet lawns",
    icon: BanquetIcon,
  },
];

export const outdorrAmenities = [
  {
    text: "Swimming pool",
    icon: SwimmingIcon,
  },
  {
    text: "Cycling track",
    icon: CyclingIcon,
  },
  {
    text: "Basketball court",
    icon: BasketballIcon,
  },
  {
    text: "Badminton court",
    icon: BadmintonIcon,
  },
  { text: "Skating rink", icon: SkatingIcon },
  { text: "Children’s play area", icon: PlayIcon },
  { text: "Jogging track", icon: JoggingIcon },
  { text: "Cricket practice nets", icon: CricketIcon },
];
