//userpage string
export const USER_PAGE = {
    CLASSNAMES: {
        AVATAR: 'avatar',
        AVATAR_CARD: 'avatar-card',
        BASIC_INFO: 'basic-info',
        BIG_CARD: 'big-card',
        BIG_CONTENT: 'big-content',
        BIG_LAYOUT: 'big-layout',
        CARD_HEADER: 'card-header',
        CARD_META: 'card-meta',
        DATA_TITLE: 'data-title',
        HEADER_TITLE: 'header-title',
        INFO_CARD: 'info-card',
        INNER_CARD: 'inner-card',
        ITEM_LAYOUT: 'horizontal',
        MENU: 'menu',
        PROFILE_CONTENT: 'profile-content',
        SIDER: 'sider',
        SM_CONTENT: 'sm-content',
    },
    PROFILE_PIX: "./josh.jpg",
    STRINGS: {
        CENTER: 'center',
        DARK: 'dark',
        FLEX: 'flex',
        FOLDER: 'folder',
        INFO_CIRCLE: 'info-circle',
        INLINE: 'inline',
        MESSAGE: 'message',
        NOTIFICATION: 'notification',
        ORIENTATION: 'left',
        SETTING: 'setting',
        SHOPPING: 'shopping',
        SM_HEADER: 'sm-header',
        SM_HEADER_DIV: 'sm-header-div',
        SOLUTION: 'solution',
        SQUARE: 'square',
        START: 'start',
    },
    TEXTS: {
        ACCOUNT_INFO: 'Account Info',
        BASIC_INFO_TEXT: 'BASIC INFORMATION',
        CONTACT_INFO_TEXT: 'CONTACT INFORMATION',
        HELP: 'Help',
        LOCATION_INFO_TEXT: 'LOCATION',
        MESSAGES: 'Messages',
        NOTIFICATIONS: 'Notifications',
        PURCHASES: 'Purchases',
        SAVED_ITEMS: 'Saved Items',
        SETTINGS: 'Settings',
        USER_PROFILE: 'User Profile',
    },
};

export const BASIC_INFOMATION = [
    { description: 'Josh', title: "First Name:" },
    { description: 'Obinna', title: 'Last Name:' },
    { description: 'male', title: 'Gender:' },
];
export const CONTACT = [
    { description: 'joshuaobinna@gmail.com',  title: "Email:" },
    { description: '+2347061589692',  title: "Phone:" },
];

export const LOCATION = [
    { description:  '24, Wilkie Crescent, Ikeja', title: "Address:" },
    { description: "Lagos", title: 'City:' },
    { description: "Nigeria", title: 'Country:' },
];

export const SIDE_MENU_ITEMS = [
    { iconType: "info-circle", label: "Account", link: '/profile' },
    { iconType: "message", label: "Messages" },
    { iconType: "notification", label: "Notifications" },
    { iconType: "shopping", label: "Purchases" },
    { iconType: "folder", label: "Items", link: "/profile/items" },
    { iconType: "setting", label: "Settings" },
    { iconType: "solution", label: "Help" },
];
