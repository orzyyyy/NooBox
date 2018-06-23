export const defaultValues = [
    ['userId', (Math.random().toString(36) + '00000000000000000').slice(2, 19)],
    ['imageSearch', true],
    ['imageSearchNewTabFront', true],
    ['shortcut', false],
    ['unitsConverter', false],
    ['general', true],
    ['background', false],
    ['imageSearchUrl_google', true],
    ['imageSearchUrl_baidu', true],
    ['imageSearchUrl_tineye', true],
    ['imageSearchUrl_bing', true],
    ['imageSearchUrl_yandex', true],
    ['imageSearchUrl_saucenao', false],
    ['imageSearchUrl_iqdb', false],
    ['imageSearchUrl_sogou', false],
    ['imageSearchUrl_ascii2d', false],
    ['extractImages', true],
    ['screenshotSearch', true],
    ['videoControl', false],
    ['AutoRefresh', true],
    ['displayOrder', []],
    ['checkUpdate', true],
    ['lastUpdateCheck', 0],
    ['updateHistory', []],
    ['history', true],
];

export const constantValues = [
    ['displayList', ['imageSearch', 'AutoRefresh', 'videoControl', 'checkUpdate']],
    ['version', chrome.runtime.getManifest().version]
]