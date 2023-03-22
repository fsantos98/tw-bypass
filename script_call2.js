const _0x514ca5 = (function () {
    let _0x3a51c4 = true
    return function (_0xb025df, _0x1ea6d4) {
      const _0x555d6d = _0x3a51c4
        ? function () {
            if (_0x1ea6d4) {
              const _0x4f2cc0 = _0x1ea6d4.apply(_0xb025df, arguments)
              return (_0x1ea6d4 = null), _0x4f2cc0
            }
          }
        : function () {}
      return (_0x3a51c4 = false), _0x555d6d
    }
  })(),
  _0x5c8b76 = _0x514ca5(this, function () {
    return _0x5c8b76
      .toString()
      .search('(((.+)+)+)+$')
      .toString()
      .constructor(_0x5c8b76)
      .search('(((.+)+)+)+$')
  })
_0x5c8b76()
let _0x32e1d8 = {
    '1.0': {
      description: 'Commands Overview.',
      date: undefined,
    },
    '2.0': {
      description: 'Auto Commands Sender.',
      date: undefined,
    },
    '2.0.1': {
      description: 'Update troop count after applying template.',
      date: '28/06/2022',
    },
    '2.0.2': {
      description: 'Modified same of selected templates.',
      date: '28/06/2022',
    },
    '2.0.3': {
      description: 'Show version.',
      date: '28/06/2022',
    },
    '2.0.4': {
      description: 'Worlds restrictions for coops and multis.',
      date: '28/06/2022',
    },
    '2.1.0': {
      description: 'Set and Read MS from plan.',
      date: '19/07/2022',
    },
    '2.1.1': {
      description: 'New noble templates for non watchtower worlds',
      date: '08/08/2022',
    },
    '2.1.2': {
      description: 'New noble templates for non watchtower worlds',
      date: '01/10/2022',
    },
    '2.1.3': {
      description: 'Allow float numbers on random launch time offset.',
      date: '01/10/2022',
    },
    '2.2.0': {
      description: 'Name of the added plan is the name of the template.',
      date: '01/10/2022',
    },
    '2.3.0': {
      description: 'Show plan on the map.',
      date: '26/01/2023',
    },
    '2.3.1': {
      description: 'Also show source villages on map.',
      date: '18/03/2023',
    },
  },
  _0x20eefd = Object.keys(_0x32e1d8).pop(),
  _0x32591f = 0,
  _0x32c2b0 = true,
  _0x3ef16b = false,
  _0x52da84 = true,
  _0x4198e8 = true,
  _0x37a230 = 10,
  _0x528508 = 1,
  _0x291378 = 2,
  _0x119478 = 2,
  _0x171731 = true,
  _0x3e53dd = {
    splitSecondThirdNobleNT: {
      name: 'Split in 2nd&3rd Noble NT',
      id: 'NT_2ND&3RD_NOBLE_BUFF',
      fillFunction: 'fill2nd3rdNoblesNT',
      noblesQnt: 4,
      brownNoble: true,
      onlyNobles: true,
      selected: false,
    },
    secondNobleBuffNT: {
      name: '2nd Noble Buff NT',
      id: 'NT_2ND_NOBLE_BUFF',
      fillFunction: 'fill2ndNobleBuffNT',
      noblesQnt: 4,
      brownNoble: true,
      onlyNobles: true,
      selected: false,
    },
    thirdNobleBuffNT: {
      name: '3rd Noble Buff NT',
      id: 'NT_3RD_NOBLE_BUFF',
      fillFunction: 'fill3rdNobleBuffNT',
      noblesQnt: 4,
      brownNoble: true,
      onlyNobles: true,
      selected: false,
    },
    secondNobleBuffWith5NoblesNT: {
      name: '2nd Noble Buff With 5 Nobles NT',
      id: 'NT_2ND_NOBLE_BUFF_WITH_5_NOBLES',
      fillFunction: 'fill2ndNobleBuffWith5NoblesNT',
      noblesQnt: 5,
      brownNoble: true,
      onlyNobles: true,
      selected: false,
    },
    secondNobleBuffWith2NoblesNT: {
      name: '2nd Noble Buff With 2 Nobles NT',
      id: 'NT_2ND_NOBLE_BUFF_WITH_2_NOBLES',
      fillFunction: 'fill2ndNobleBuffWith2NoblesNT',
      noblesQnt: 2,
      brownNoble: true,
      onlyNobles: true,
      selected: false,
    },
    secondNobleWithRest: {
      name: '2 Nobles Selected/Rest',
      id: '2NoblesSelectedRest',
      fillFunction: 'fill2NobleSelectedRest',
      noblesQnt: 2,
      brownNoble: false,
      onlyNobles: true,
      selected: false,
    },
    thirdNobleWithRest: {
      name: '3 Nobles Selected/Rest',
      id: '3NoblesSelectedRest',
      fillFunction: 'fill3NobleSelectedRest',
      noblesQnt: 3,
      brownNoble: false,
      onlyNobles: true,
      selected: false,
    },
    fourNobleWithRest: {
      name: '4 Nobles Selected/Rest',
      id: '4NoblesSelectedRest',
      fillFunction: 'fill4NobleSelectedRest',
      noblesQnt: 4,
      brownNoble: false,
      onlyNobles: true,
      selected: false,
    },
    twoNoblesSame: {
      name: '2 Commands Same of Selected',
      id: '2CommandsSame',
      fillFunction: 'fill2NoblesSame',
      noblesQnt: 2,
      brownNoble: false,
      onlyNobles: false,
      selected: false,
    },
    threeNoblesSame: {
      name: '3 Commands Same of Selected',
      id: '3CommandsSame',
      fillFunction: 'fill3NoblesSame',
      noblesQnt: 3,
      brownNoble: false,
      onlyNobles: false,
      selected: false,
    },
    fourNoblesSame: {
      name: '4 Commands Same of Selected',
      id: '4CommandsSame',
      fillFunction: 'fill4NoblesSame',
      noblesQnt: 4,
      brownNoble: false,
      onlyNobles: false,
      selected: false,
    },
    firstNobleRedNT: {
      name: '1st Noble Red NT',
      id: 'NT_1ST_NOBLE_RED',
      fillFunction: 'fill1stNobleRedNT',
      noblesQnt: 4,
      brownNoble: false,
      onlyNobles: true,
      selected: true,
    },
    secondNobleRedNT: {
      name: '2nd Noble Red NT',
      id: 'NT_2ND_NOBLE_RED',
      fillFunction: 'fill2ndNobleRedNT',
      noblesQnt: 4,
      brownNoble: false,
      onlyNobles: true,
      selected: false,
    },
    thirdNobleRedNT: {
      name: '3rd Noble Red NT',
      id: 'NT_3RD_NOBLE_RED',
      fillFunction: 'fill3rdNobleRedNT',
      noblesQnt: 4,
      brownNoble: false,
      onlyNobles: true,
      selected: false,
    },
    fourthNobleRedNT: {
      name: '4th Noble Red NT',
      id: 'NT_4TH_NOBLE_RED',
      fillFunction: 'fill4thNobleRedNT',
      noblesQnt: 4,
      brownNoble: false,
      onlyNobles: true,
      selected: false,
    },
    firstNobleRed5NT: {
      name: '1st Noble Red 5NT',
      id: 'NT_1ST_5NOBLE_RED',
      fillFunction: 'fill1stNobleRedNT',
      noblesQnt: 5,
      brownNoble: false,
      onlyNobles: true,
      selected: true,
    },
    secondNobleRed5NT: {
      name: '2nd Noble Red 5NT',
      id: 'NT_2ND_5NOBLE_RED',
      fillFunction: 'fill2ndNobleRedNT',
      noblesQnt: 5,
      brownNoble: false,
      onlyNobles: true,
      selected: false,
    },
    thirdNobleRed5NT: {
      name: '3rd Noble Red 5NT',
      id: 'NT_3RD_5NOBLE_RED',
      fillFunction: 'fill3rdNobleRedNT',
      noblesQnt: 5,
      brownNoble: false,
      onlyNobles: true,
      selected: false,
    },
    noNT: {
      name: 'no NT',
      id: 'NO_NT',
      fillFunction: 'noNT',
      noblesQnt: 1,
      brownNoble: false,
      selected: false,
    },
  }
const _0x2a811d = 'Target village does not exists.',
  _0x6c2166 = 'Source village does not exists.',
  _0x2d420f = 'There is no deleted commands to revert.',
  _0x344547 = 'Please run this script in Notebook or rally point',
  _0x217f94 = 32,
  _0x47976f = 'Command name character limit exceeded, limit is 32 characters.',
  _0x18112d = 'You need to buy this script in order to use it.',
  _0x4f22a3 =
    "Something is wrong with TW code, and the script can be bannable ... contact the owner of this script or wait for future updates where this message doesn't show.",
  _0x589fad = 'Auto Sender',
  _0x457535 = 1,
  _0x51c9f7 = window.location.hostname,
  _0xa74224 = {
    spear: 1080,
    sword: 1320,
    axe: 1080,
    archer: 1080,
    spy: 540,
    light: 600,
    marcher: 600,
    heavy: 660,
    ram: 1800,
    catapult: 1800,
    knight: 600,
    snob: 2100,
  },
  _0x1754fa = {
    id: 'default_attack',
    name: 'default_attack',
    units: {
      spear: 0,
      sword: 0,
      axe: -1,
      archer: 0,
      spy: -1,
      light: -1,
      marcher: -1,
      heavy: -1,
      ram: -1,
      catapult: -1,
      knight: -1,
      snob: 0,
    },
  },
  _0x36c46c = {
    id: 'default_support',
    name: 'default_support',
    units: {
      spear: -1,
      sword: -1,
      axe: 0,
      archer: -1,
      spy: -1,
      light: 0,
      marcher: 0,
      heavy: -1,
      ram: 0,
      catapult: 0,
      knight: 0,
      snob: 0,
    },
  },
  _0xf99d1d = {
    id: 'default_all',
    name: 'default_all',
    units: {
      spear: -1,
      sword: -1,
      axe: -1,
      archer: -1,
      spy: -1,
      light: -1,
      marcher: -1,
      heavy: -1,
      ram: -1,
      catapult: -1,
      knight: -1,
      snob: -1,
    },
  }
let _0x22d420 = 2,
  _0x579a1e = false,
  _0x16a30b = false,
  _0x50eb81 = 10,
  _0x719ef5 = 1,
  _0x4c6c4d = '',
  _0x242b67,
  _0xb34eac = false,
  _0x2d9154 = {},
  _0x2215ba = [],
  _0x2524d3 = {},
  _0x3aa622 = [],
  _0x4878ab = 400,
  _0xd22cf8 = [],
  _0x3f3b4e = window,
  _0x81dbd1,
  _0x4b8770 = 0,
  _0x42729e,
  _0x2cdf50
const _0x3bd829 = {},
  _0x5d8c50 = {},
  _0x4cd9b2 = {}
let _0xcba015 = {}
const _0x30215f = {}
let _0x442943,
  _0x746e1a,
  _0xddcce0,
  _0x249004 = 0,
  _0x56c3ec = false
const _0x20c7b4 = (_0x587437) => {
    const _0x190f62 = (_0x2162a3) =>
        _0x2162a3.split('').map((_0x2cb908) => _0x2cb908.charCodeAt(0)),
      _0x53ee06 = (_0x3de7ce) =>
        _0x190f62(_0x587437).reduce(
          (_0x2d7166, _0x365f6d) => _0x2d7166 ^ _0x365f6d,
          _0x3de7ce
        )
    return (_0x3b1f9c) =>
      _0x3b1f9c
        .match(/.{1,2}/g)
        .map((_0xd55acb) => parseInt(_0xd55acb, 16))
        .map(_0x53ee06)
        .map((_0x1ecbde) => String.fromCharCode(_0x1ecbde))
        .join('')
  },
  _0x399e01 = (_0x5d4fe5) => {
    const _0x5dff53 = (_0x566ebd) =>
        _0x566ebd.split('').map((_0xf4bcda) => _0xf4bcda.charCodeAt(0)),
      _0x16eaeb = (_0x1eee7f) =>
        ('0' + Number(_0x1eee7f).toString(16)).substr(-2),
      _0xe888ff = (_0x41769e) =>
        _0x5dff53(_0x5d4fe5).reduce(
          (_0xa775b5, _0x486359) => _0xa775b5 ^ _0x486359,
          _0x41769e
        )
    return (_0xe41d2d) =>
      _0xe41d2d.split('').map(_0x5dff53).map(_0xe888ff).map(_0x16eaeb).join('')
  },
  _0x23229f = _0x20c7b4('#autoCommandsSenderXD#KEKHELPME')
_0x14c502()
function _0x14c502() {
  if (!_0x3f3b4e.as) {
    _0x18b744(
      'Nope :), you cannot use this bot without dropbox link. And why would you want to do that? You get bug fixes and updates...'
    )
    _0x56c3ec = false
  }
  _0x4b6b31(
    'https://dl.dropboxusercontent.com/s/m628q74nfj3elf5/low-frequencies.mp3?dl=0'
  )
  _0x554d9b()
  _0x1f0cd5()
  _0x4558ff()
  if (game_data.screen === 'memo') {
    _0x3c1ee5()
  } else {
    if (game_data.screen === 'place') {
      _0x4c0bd2()
    } else {
      if (game_data.screen === 'map') {
        _0x5d8da7()
      } else {
        _0x18b744(_0x344547)
        window.location.href =
          window.location.pathname +
          ('?' + (_0x4c6c4d ? _0x4c6c4d + '&' : '') + 'screen=memo')
      }
    }
  }
}
function _0x4558ff() {
  let _0x138e3c =
      $('#serverDate')[0].innerText + ' ' + $('#serverTime')[0].innerText,
    _0x3625a4 = _0x138e3c.match(
      /^([0][1-9]|[12][0-9]|3[01])[/-]([0][1-9]|1[012])[/-](\d{4})( (0?[0-9]|[1][0-9]|[2][0-3])[:]([0-5][0-9])([:]([0-5][0-9]))?)?$/
    )
  _0x42729e =
    new Date(new Date().setMilliseconds(0)).setSeconds(0) -
    new Date(
      new Date(
        _0x3625a4[2] + '/' + _0x3625a4[1] + '/' + _0x3625a4[3] + _0x3625a4[4]
      ).setMilliseconds(0)
    ).setSeconds(0)
}
async function _0x5d8da7() {
  await _0x407ba1()
  await _0x16e071()
  _0xaf5707()
  _0x23ff0b()
}
async function _0x4c0bd2() {
  await _0x407ba1()
  await _0x16e071()
  _0xaf5707()
  _0x2b2ea5()
}
async function _0x3c1ee5() {
  _0x47aac8()
  _0x1830b4()
  await _0x35f72c()
  _0x17e8bb(_0xaf5707, 'Loading stored data.', true)
  _0x17e8bb(_0x505beb, 'Setting up css classes.', true)
  _0x17e8bb(_0x41a49b, 'Beautifying borders.', true)
  _0x17e8bb(_0x46ed78, 'Grabbing villages data.', true)
  _0x17e8bb(_0x518251, 'Verifying User identity.', true)
  _0x17e8bb(_0xfd2848, 'Starting UI.', true)
  _0x15a318()
  _0x566e22()
  _0x26d2fd()
  _0x39e4d3()
}
function _0x1f0cd5() {
  let _0x27fc44 = window.location.search.match(/t=\d+/g)
  if (_0x27fc44) {
    _0x4c6c4d = _0x27fc44
  }
}
async function _0x35f72c() {
  await _0x17e8bb(_0x16e071, 'Downloading game data.', false)
  await _0x17e8bb(_0x54a3de, 'Downloading world settings.', false)
  await _0x17e8bb(_0x38b69a, 'Downloading units data.', false)
  await _0x17e8bb(_0x7d422c, 'Downloading troop template.', false)
  await _0x17e8bb(_0x407ba1, 'Fetching user identity.', false)
}
async function _0x16e071() {
  _0x442943 = await $.getJSON(
    document.location.href.replace(/action=\w*/, '').replace(/#.*$/, '') +
      '&_partial'
  )
  _0x442943 = _0x442943.game_data
  _0x242b67 = 'overviewVars_ID_' + _0x442943.player.id + _0x51c9f7.split('.')[0]
  _0x2cdf50 =
    'snipeScheduleCommandsGlobalData_ID_' +
    _0x442943.player.id +
    _0x51c9f7.split('.')[0]
}
async function _0x407ba1() {
  await _0xe637de()
}
async function _0x54a3de() {
  _0x2524d3.config = await _0x5e1ebb()
}
async function _0x38b69a() {
  _0xf6989a(_0x30215f, await _0x4ef69b())
}
async function _0x7d422c() {
  _0x2d9154 = await _0x2fd323()
}
function _0x505beb() {
  let _0x1e3b57 =
    '<style>\n        .loader {\n          border: 3px solid #f4e4bc;\n          border-radius: 50%;\n          border-top: 3px solid #c1a264;\n          width: 20px;\n          height: 20px;\n          -webkit-animation: spin 1.2s linear infinite; /* Safari */\n          animation: spin 1.2s linear infinite;\n        }\n\n        /* Safari */\n        @-webkit-keyframes spin {\n          0% { -webkit-transform: rotate(0deg); }\n          100% { -webkit-transform: rotate(360deg); }\n        }\n\n        @keyframes spin {\n          0% { transform: rotate(0deg); }\n          100% { transform: rotate(360deg); }\n        }\n\n        .selectBox {\n            position: relative;\n        }\n\n        .selectBox select {\n            width: 100%;\n            font-weight: bold;\n        }\n\n        .overSelect {\n            position: absolute;\n            left: 0;\n            right: 0;\n            top: 0;\n            bottom: 0;\n            z-index: 10001;\n        }\n\n        .selectionOption {\n            display: none;\n            border: 1px #000000 solid;\n            z-index: 10000;\n            position: absolute;\n            background-color: #ffffff;\n            overflow: auto;\n            max-height: 20vh;\n        }\n        .selectionOption td {\n            background-color: #ffffff;\n            z-index: 10000;\n        }\n        .selectionOption tr:hover td{\n            background-color: #0099ff;\n        }\n        #checkboxFader {\n            position: fixed;\n            width: 100%;\n            height: 100%;\n            top: 0px;\n            left: 0px;\n            z-index: 9000;\n        }\n        .main {\n            overflow:visible!important;\n        }\n        .noPermission\n        {\n            pointer-events: none;\n            opacity: 0.5;\n            background: #CCC;\n        }\n        .rainbow-text2 {\n            background-image: repeating-linear-gradient(90deg, #f53803, #f5d020);\n            background-size: 100% 100%;\n            -webkit-background-clip: text;\n            -webkit-text-fill-color: transparent;\n            font-size: 24px;\n            animation: 2s ease infinite;\n        }\n    </style>'
  $('#contentContainer').eq(0).prepend(_0x1e3b57)
  $('#mobileHeader').eq(0).prepend(_0x1e3b57)
}
function _0xfd2848() {
  let _0x563de1 =
    '<div id="commandSenderDiv" class="memo_script" style="clear: both; display: none">\n        <br>\n        <div id="autoSenderAds">\n            <div id="Manual_Sender_Menu">\n                <div class="forum-content" style="padding: 0;">\n                    <table class="vis nowrap" style="width: 100%;">\n                        <thead>\n                            <tr>\n                                <th><span class="column-title" style="font-size:16px;display: flex;justify-content: center;align-items: center;">\uD83D\uDCDC Announcements \uD83D\uDCDC</span></th>\n                            </tr>\n                            <tr>\n                                <th style="display: flex;justify-content: center;align-items: center;">\uD83D\uDCB5 Referrals \uD83D\uDCB5</th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            <tr>\n                                <td style="padding-left: 1em;">\n                                    <a style="display: flex;justify-content: center;align-items: center;color:black;">Win now <span style=\'color: green; font-size: 16px;\'>&nbsp;5\u20AC&nbsp;</span> for each person that buys this script using your referral code. (<span style=\'color: DarkViolet;\'>' +
    _0x442943.player.id +
    '</span>)</a>\n                                </td>\n                            </tr>\n                        </tbody>\n                    </table>\n                </div>\n            </div>\n        </div>\n        <br>\n        <div style="display: grid;grid-template-columns: 4fr 4fr;grid-gap: 10px;">\n            <div id="Manual_Sender_Menu" style="min-width: 330px">\n                <div class="forum-content" style="padding: 0;">\n                    <table class="vis nowrap" style="width: 100%;">\n                        <thead>\n                            <tr>\n                                <th colspan="3"><span class="column-title" style="font-size:16px">\uD83D\uDCDA ' +
    _0x589fad +
    ' menu \uD83D\uDCDA <span style="font-size: 10px; color: DarkSlateGrey;">v' +
    _0x20eefd +
    '</span></span></th>\n                            </tr>\n                            <tr>\n                                <th style="text-align: center;">\uD83D\uDEE1️ Info \uD83D\uDEE1️</th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            <tr>\n                                <td style="padding-left: 1em;">\n                                    <a style="float: left">\uD83D\uDEE1️</a>\n                                    <a id="menuCommandsPlannedCounter"  style="display: flex;justify-content: center;align-items: center;color:#ff0000"></a>\n                                </td>\n                            </tr>\n                            <tr>\n                                <td style="padding-left: 1em;">\n                                    <a style="float: left">\uD83D\uDEE1️</a>\n                                    <a id="menuNextCommandInfo" style="display: flex;justify-content: center;align-items: center;color:green" class="overviewsTimer"></a>\n                                </td>\n                            </tr>\n                            <tr id="popupsAllowedTr">\n                                <td style="padding-left: 1em;">\n                                    <a style="float: left">\uD83D\uDEE1️</a>\n                                    <a id="popupsAllowed" style="display: flex;justify-content: center;align-items: center;color:#ff0000;">Popups are blocked! Click here to activate.</a>\n                                </td>\n                            </tr>\n                        </tbody>\n                        <thead id="settingsHeader" style="cursor:pointer;">\n                            <tr>\n                                <th style="text-align: center;">\u2699️ Global Settings \u2699️</th>\n                            </tr>\n                        </thead>\n                        <tbody id="settingsBody">\n                            <tr style="display: none" id="botSettingsNoPermissionDiv1">\n                                <td style="text-align: center;vertical-align: middle;font-size: 14px">\n                                    <span style="color: darkblue">This is not available! </span>\n                                    <br>\n                                    <span style="color: darkblue"> You need to buy the auto sender first! </span>\n                                </td>\n                            </tr>\n                            <tr>\n                                <td style="padding-left: 1em;display: flex;justify-content: center;">\n                                    <a style="margin-right: auto;margin-left: 0;">\u2699️</a>\n                                    <a style="display: block;justify-content: center;color: black">Timing offset:</a>\n                                    <input id="timing_offset" type="text" style="width: 50px;margin-left: 7px" value="' +
    (_0x4cd9b2.timing_offset !== undefined ? _0x4cd9b2.timing_offset : 0) +
    '">\n                                    <a style="margin-left: auto;margin-right: 0;">\u2699️</a>\n                                </td>\n                            </tr>\n                            <tr>\n                                <td style="padding-left: 1em;display: flex;justify-content: center;">\n                                    <a style="margin-right: auto;margin-left: 0;">\u2699️</a>\n                                    <a style="display: block;justify-content: center;color: black">Open new tab delay (sec):</a>\n                                    <input id="openTabDelay" type="text" style="width: 50px;margin-left: 7px" value="' +
    (_0x4cd9b2.openTabDelay !== undefined ? _0x4cd9b2.openTabDelay : 60) +
    '">\n                                    <a style="margin-left: auto;margin-right: 0;">\u2699️</a>\n                                </td>\n                            </tr>\n                            <tr>\n                                <td style="padding-left: 1em;display: flex;justify-content: center;">\n                                    <a style="margin-right: auto;margin-left: 0;">\u2699️</a>\n                                    <a style="display: block;justify-content: center;color: black">Auto Send Nobles:</a>\n                                    <input type="checkbox" id="autoSendNobles" ' +
    (_0x4cd9b2.autoSendNobles !== undefined
      ? _0x4cd9b2.autoSendNobles
        ? 'checked'
        : ''
      : 'checked') +
    '>\n                                    <a style="margin-left: auto;margin-right: 0;">\u2699️</a>\n                                </td>\n                            </tr>\n                            <tr style="display: none">\n                                <td style="padding-left: 1em;display: flex;justify-content: center;">\n                                    <a style="margin-right: auto;margin-left: 0;">\u2699️</a>\n                                    <a style="display: block;justify-content: center;color: black">Auto Fill Nt:</a>    \n                                    <input type="checkbox" id="autoFillNt" ' +
    (_0x4cd9b2.autoFillNt !== undefined
      ? _0x4cd9b2.autoFillNt
        ? 'checked'
        : ''
      : 'checked') +
    '>\n                                    <a style="margin-left: auto;margin-right: 0;">\u2699️</a>\n                                </td>\n                            </tr>\n                            <tr>\n                                <td style="padding-left: 1em;display: flex;justify-content: center;">\n                                    <a style="margin-right: auto;margin-left: 0;">\u2699️</a>\n                                    <a style="display: block;justify-content: center;color: black">Villages per page:</a>\n                                    <input id="commandsPerPageSetting" type="text" style="width: 50px;margin-left: 7px" value="' +
    _0x50eb81 +
    '">\n                                    <a style="margin-left: auto;margin-right: 0;">\u2699️</a>\n                                </td>\n                            </tr>\n                            <tr>\n                                <td style="padding-left: 1em;display: flex;justify-content: center;">\n                                    <a style="margin-right: auto;margin-left: 0;margin: 4px;">\u2699️</a>\n                                    <button id=\'saveSettingsButton\' class=\'btn\' style=\'display: flex;justify-content: center;align-items: center\'>Save Settings</button>\n                                    <a style="margin-left: auto;margin-right: 0;margin: 4px;">\u2699️</a>\n                                </td>\n                            </tr>\n                        </tbody>\n                        <thead id="botSettingsHeader" style="cursor:pointer;">\n                            <tr>\n                                <th style="text-align: center;">\u2699️On Add Plan Settings \u2699️</th>\n                            </tr>\n                        </thead>\n                        <tbody id="botSettingsBody" style="position: relative;">\n                            <tr style="display: none" id="botSettingsNoPermissionDiv2">\n                                <td style="text-align: center;vertical-align: middle;font-size: 14px">\n                                    <span style="color: darkblue">This is not available! </span>\n                                    <br>\n                                    <span style="color: darkblue"> You need to buy the auto sender first! </span>\n                                </td>\n                            </tr>\n                            <tr style="display: none">\n                                <td>\n                                    <table style="width: 100%">\n                                        <thead>\n                                            <tr>\n                                                <th style="text-align: center">\u2699️Auto Send \u2699️</th>\n                                                <th style="text-align: center">\u2699️Fill Send \u2699️</th>\n                                            </tr>\n                                        </thead>\n                                        <tbody>\n                                            <tr>\n                                                <td><div style="text-align: center;"><input type="radio" name="autoSendInTime" value=true ' +
    (_0x4cd9b2.autoSendInTime !== undefined
      ? _0x4cd9b2.autoSendInTime
        ? 'checked'
        : ''
      : 'checked') +
    '></div></td>\n                                                <td><div style="text-align: center;"><input type="radio" name="autoSendInTime" value=false ' +
    (_0x4cd9b2.autoSendInTime !== undefined
      ? _0x4cd9b2.autoSendInTime
        ? ''
        : 'checked'
      : '') +
    '></div></td>\n                                            </tr>\n                                        </tbody>\n                                    </table>\n                                </td>\n                            </tr>\n                            <tr>\n                                <td style="padding-left: 1em;display: flex;justify-content: center;">\n                                    <a style="margin-right: auto;margin-left: 0;">\u2699️</a>\n                                    <a style="display: block;justify-content: center;color: black">Attack Template:</a>\n                                    <select id=\'selectAttackTemplate\' class=\'templateDropdown attackTemplate\' style="margin-left: 7px;max-width: 110px;"></select>\n                                    <a style="margin-left: auto;margin-right: 0;">\u2699️</a>\n                                </td>\n                            </tr>\n                            <tr>\n                                <td style="padding-left: 1em;display: flex;justify-content: center;">\n                                    <a style="margin-right: auto;margin-left: 0;">\u2699️</a>\n                                    <a style="display: block;justify-content: center;color: black">Support Template:</a>\n                                    <select id=\'selectSupportTemplate\' class=\'templateDropdown supportTemplate\' style="margin-left: 7px;max-width: 110px;"></select>\n                                    <a style="margin-left: auto;margin-right: 0;">\u2699️</a>\n                                </td>\n                            </tr>\n                            <tr>\n                                <td style="padding-left: 1em;display: flex;justify-content: center;">\n                                    <a style="margin-right: auto;margin-left: 0;">\u2699️</a>\n                                    <a style="display: block;justify-content: center;color: black">NT Template:</a>\n                                    <select id=\'selectNTTemplate\' style="margin-left: 7px;max-width: 140px;"></select>\n                                    <a style="margin-left: auto;margin-right: 0;">\u2699️</a>\n                                </td>\n                            </tr>\n                            <tr>\n                                <td style="padding-left: 1em;display: flex;justify-content: center;">\n                                    <a style="margin-right: auto;margin-left: 0;">\u2699️</a>\n                                    <a style="display: block;justify-content: center;color: black">Max %:</a>\n                                    <input id="toUse_percentage" type="text" style="width: 50px;margin-left: 7px" value="' +
    (_0x4cd9b2.toUse !== undefined ? _0x4cd9b2.toUse : 100) +
    '">\n                                    <a style="margin-left: auto;margin-right: 0;">\u2699️</a>\n                                </td>\n                            </tr>\n                            <tr>\n                                <td style="padding-left: 1em;display: flex;justify-content: center;">\n                                    <a style="margin-right: auto;margin-left: 0;">\u2699️</a>\n                                    <a style="display: block;justify-content: center;color: black">Sigil %:</a>\n                                    <input id="sigil_percentage" type="text" style="width: 50px;margin-left: 7px" value="' +
    (_0x4cd9b2.sigil !== undefined ? _0x4cd9b2.sigil : 0) +
    '">\n                                    <a style="margin-left: auto;margin-right: 0;">\u2699️</a>\n                                </td>\n                            </tr>\n                            <tr>\n                                <td style="padding-left: 1em;display: flex;justify-content: center;">\n                                    <a style="margin-right: auto;margin-left: 0;">\u2699️</a>\n                                    <a style="display: block;justify-content: center;color: black">Leave (n) rams at home:</a>\n                                    <input id="leaveRamsAtHome" type="text" style="width: 40px;margin-left: 7px" value="' +
    (_0x4cd9b2.leaveRams !== undefined ? _0x4cd9b2.leaveRams : 0) +
    '">\n                                    <a style="margin-left: auto;margin-right: 0;">\u2699️</a>\n                                </td>\n                            </tr>\n                            <tr>\n                                <td style="padding-left: 1em;display: flex;justify-content: center;">\n                                    <a style="margin-right: auto;margin-left: 0;">\u2699️</a>\n                                    <a style="display: block;justify-content: center;color: black">Leave (n) catapults at home:</a>\n                                    <input id="leaveCatsAtHome" type="text" style="width: 40px;margin-left: 7px" value="' +
    (_0x4cd9b2.leaveCats !== undefined ? _0x4cd9b2.leaveCats : 0) +
    '">\n                                    <a style="margin-left: auto;margin-right: 0;">\u2699️</a>\n                                </td>\n                            </tr>\n                            <tr>\n                                <td style="padding-left: 1em;display: flex;justify-content: center;">\n                                    <a style="margin-right: auto;margin-left: 0;">\u2699️</a>\n                                    <a style="display: block;justify-content: center;color: black">Random launch time offset (min):</a>\n                                    <input id="launchTime_offset" type="text" style="width: 30px;margin-left: 7px" value="' +
    (_0x4cd9b2.launchTime_offset !== undefined
      ? _0x4cd9b2.launchTime_offset
      : 0) +
    '">\n                                    <a style="margin-left: auto;margin-right: 0;">\u2699️</a>\n                                </td>\n                            </tr>\n                            <tr>\n                                <td style="padding-left: 1em;display: flex;justify-content: center;">\n                                    <a style="margin-right: auto;margin-left: 0;margin: 4px;">\u2699️</a>\n                                    <button id=\'saveSettingsButtonBot\' class=\'btn\' style=\'display: flex;justify-content: center;align-items: center\'>Save Settings</button>\n                                    <a style="margin-left: auto;margin-right: 0;margin: 4px;">\u2699️</a>\n                                </td>\n                            </tr>\n                        </tbody>\n                        <thead id="botStatusSettingsHeader" style="cursor:pointer;">\n                            <tr>\n                                <th style="text-align: center;">\u2699️Bot Status \u2699️</th>\n                            </tr>\n                        </thead>\n                        <tbody id="botStatusSettingsBody">\n                            <tr>\n                                <td style="padding-left: 1em;display: flex;justify-content: center;">\n                                    <a style="margin-right: auto;margin-left: 0;margin: 4px;">\u2699️</a>\n                                    <button id=\'startStopBotButton\' class=\'btn\' style=\'display: flex;justify-content: center;align-items: center\'>' +
    (_0x4cd9b2.running !== undefined
      ? _0x4cd9b2.running
        ? 'Stop'
        : 'Start'
      : 'Start') +
    '</button>\n                                    <a style="margin-left: auto;margin-right: 0;margin: 4px;">\u2699️</a>\n                                </td>\n                            </tr>\n                            <tr>\n                                <td style="padding-left: 1em;display: flex;justify-content: center;">\n                                    <a style="margin-right: auto;margin-left: 0;margin: 4px;">\u2699️</a>\n                                    <a href="javascript:void(0)" id="runningMenuInfo" style="display: flex;justify-content: center;align-items: center;color:' +
    (_0x4cd9b2.running !== undefined
      ? _0x4cd9b2.running
        ? 'Green'
        : 'Red'
      : 'Red') +
    '"> ' +
    (_0x4cd9b2.running !== undefined
      ? _0x4cd9b2.running
        ? 'Running'
        : 'Not Running'
      : 'Not Running') +
    ' </a>\n                                    <a style="margin-left: auto;margin-right: 0;margin: 4px;">\u2699️</a>\n                                </td>\n                            </tr>\n                        </tbody>\n                    </table>\n                </div>\n            </div>\n            <div>\n                <div class="forum-content" style="padding: 0;">\n                    <table class="vis nowrap" style="width: 100%;">\n                        <thead>\n                            <tr>\n                                <th colspan="9"><span class="column-title" style="font-size:16px">\u2795 Add commands \u2795</span></th>\n                            </tr>\n                            <tr>\n                                <th colspan="9" style="text-align: center;">Quick add command</th>\n                            </tr>\n                            <tr>\n                                <th style="text-align: center;">Name</th>\n                                <th style="text-align: center;">Source</th>\n                                <th style="text-align: center;">Target</th>\n                                <th style="text-align: center;">\n                                    <select id="quickAddTime">\n                                        <option value="arrival"><strong>Arrival time</strong></option>\n                                        <option value="launch"><strong>Launch time</strong></option>\n                                    </select>\n                                </th>\n                                <th style="text-align: center;">Type</th>\n                                <th style="text-align: center;">Template</th>\n                                <th style="text-align: center;width: 30px;">Max (%)</th>\n                                <th style="text-align: center;">Add</th>\n                                <th style="text-align: center;">Settings</th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            <tr>\n                                <td style=""><input type="text" id="quickAddName"style="width:100px" placeholder="Name" tabindex="1"></td>\n                                <td style=""><input type="text" id="quickAddSource"style="width:50px" placeholder="555|555" tabindex="2"></td>\n                                <td style=""><input type="text" id="quickAddTarget" style="width:50px" placeholder="555|555" tabindex="3"></td>\n                                <td style=""><input type="datetime-local" id="quickAddDate" step=".001" style="width: auto;"></td>\n                                </td>\n                                <td style="">\n                                    <select id="quickAddCommandTypeSelection" style="width: 70px;">\n                                    <option value="Attack" >Attack</option>\n                                    <option value="Support">Support</option>\n                                    </select>\n                                </td>\n                                <td>\n                                    <select id=\'quickAddSelectTemplate\' class=\'templateDropdown attackTemplate\' style="margin-left: 7px"></select>\n                                </td>\n                                <td style=""><input type="text" id="quickAddToUse"style="width: 50px;text-align: center;vertical-align: middle;" value="100" tabindex="4"></td>\n                                <td style=""><input id="quickAddButton" value="Add" class="btn" style="display: flex;justify-content: center;align-items: center;width:50px" type="submit"></input>\n                                </td>\n                                <td><a id="quickAddEdit" href="javascript:void(0)" style="font-size:20px;display: flex;justify-content: center;align-items: center;">\u2795</a></td>\n                            </tr>\n                        </tbody>\n                        <thead>\n                            <tr>\n                                <th colspan="9" style="text-align: center;">Add Plan</th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            <tr class="edit_row">\n                                <td colspan="9">\n                                    <textarea id="addPlanTextArea" style="width:98%" rows="4" placeholder="Put the planned text here..."></textarea>\n                                </td>\n                            </tr>\n                        </tbody>\n                        <td colspan="9">\n                            <button id="addPlanButton" class="btn">Add plan</button>\n                            <span style="padding-left: 10px"><a id="addPlanHelpButton" href="#" class="help-link help_link" data-topic="tribe" data-section="stronghold">Help</a></span>\n\t\t\t\t\t\t\t<div style="padding-left: 10px;display: inline-block;">\n\t\t\t\t\t\t\t\t<a style="color: black">Read MS from plan:</a>\n\t\t\t\t\t\t\t\t<input type="checkbox" id="readMSFromPlan" ' +
    (_0x4cd9b2.readMSFromPlan !== undefined
      ? _0x4cd9b2.readMSFromPlan
        ? 'checked'
        : ''
      : 'checked') +
    '>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div style="padding-left: 10px;display: inline-block;">\n\t\t\t\t\t\t\t\t<a style="color: black">Set MS to plan:</a>\n\t\t\t\t\t\t\t\t<input id="setMSWholePlane" type="text" style="width: 50px;margin-left: 7px" value="' +
    (_0x4cd9b2.setMSWholePlane !== undefined ? _0x4cd9b2.setMSWholePlane : 0) +
    '">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</p>\n                        </td>\n                    </table>\n                </div>\n            </div>\n        </div>\n        <br>\n        <table class="vis" width="100%" style="margin-bottom: 2px">\n            <tbody>\n                <tr>\n                    <td align="center" id="commands_table_pages">\n                    </td>\n                </tr>\n            </tbody>\n        </table>\n        <div style="padding: 0;" class="forum-content">\n            <table style="width: 100%;", class="vis overview_table">\n                <thead id="comandsTableHeader">\n                    <tr>\n                        <th colspan="20">\n                            <span class="column-title" style="font-size:16px">\u2694️ Planned Commands \u2694️</span>\n                        </th>\n                    </tr>\n                </thead>\n                <tbody id="comandsTableRows">\n                </tbody>\n            </table>\n            <br>\n            <table>\n                <tbody>\n                    <tr>\n                        <td><a><input id="send_all" class="btn" name="send" type="submit" value="Send selected"></a>\n                        </td>\n                        <td><a><input id="delete_all" class="btn" name="delete" type="submit" value="Delete selected"></a>\n                        </td>\n                        <td><a><input id="delete_all_old_commands" class="btn" name="delete" type="submit" value="Delete old commands"></a>\n                        </td>\n                        <td><a><input id="delete_all_done_commands" class="btn" name="delete" type="submit" value="Delete done commands"></a>\n                        </td>\n                        <td><a><input id="revert_deleted_commands" class="btn" name="delete" type="submit" value="Revert deleted commands"></a>\n                        </td>\n                    </tr>\n                </tbody>\n            </table>\n        </div>\n        <br>\n        <div>\n            <span style=\'font-family:Verdana, Arial;float:left;margin: 7px;\'>Problems? Join my <a style="color: -webkit-link" href="https://discord.gg/JpHMjH8QtB">Discord</a> or message me: <a href=\'./game.php?village=212&screen=info_player&id=2871948\'>Im Kumin</a> </span>\n        </div>\n        <div style="float: right">\n            <button id="startImportDataButton" class="btn">Import Data</button>\n            <button id="exportDataButton" class="btn">Export Data</button>\n            <button id="exportDataToFileButton" class="btn">Export Data To File</button>\n            <textarea id="importExportInput" type="text" style="display: none"></textarea>\n            <button id="importDataButton" class="btn" style="display: none">Import</button>\n            <button id="cancelImportDataButton" class="btn" style="display: none">Cancel</button>\n        </div>\n    </div>'
  _0x55e818(_0x563de1, '#memoPlanner', { callback: _0x476230 })
}
function _0x340fdc(_0x465057) {
  return [
    ...new Set(
      $.map(_0x5d8c50, (_0x53517b) => {
        return String(_0x53517b[_0x465057])
      })
    ),
  ]
}
function _0x572d27() {
  let _0x2c19cd =
    '<th id="tableHeader"><input type="checkbox" id="select_all_commands"></th>\n        <th id="thSelectionCheckboxtype"></th>\n        <th id="thSelectionCheckboxname"></th>\n        <th id="thSelectionCheckboxsource"></th>\n        <th id="thSelectionCheckboxtarget"></th>\n        <th><a>Launch Time</a></th>\n        <th id="thSelectionCheckboxslowestUnit"></th>\n        <th><a>Send</a></th>\n        <th id="thSelectionCheckboxdone"></th>\n        <th><a>Edit</a></th>'
  if ($('#tableHeader').length) {
    $('#comandsTableHeader')[0].deleteRow(1)
  }
  _0x55e818(_0x2c19cd, '#comandsTableHeader', {
    wrapper: (_0x49b98b, _0x504978) =>
      (_0x504978.insertRow().innerHTML = _0x49b98b),
    callback: () => {
      $('#select_all_commands').off('change')
      $('#select_all_commands').on('change', function () {
        $("[id^='select_command_']").prop('checked', this.checked)
      })
    },
  })
  _0x1f4a5f('Name', _0x340fdc('name'), 'name')
  _0x1f4a5f('Type', _0x340fdc('type'), 'type', (_0x1a9c4b) => {
    return (
      '<img src="https://dsen.innogamescdn.com/asset/34fb11bc/graphic/command/' +
      _0x1a9c4b.toLowerCase() +
      '.png">'
    )
  })
  _0x1f4a5f('Source', _0x340fdc('source'), 'source')
  _0x1f4a5f('Target', _0x340fdc('target'), 'target')
  _0x1f4a5f(
    'Slowest Unit',
    _0x340fdc('slowestUnit'),
    'slowestUnit',
    (_0x16e1b1) => {
      return '<img src="/graphic/unit/unit_' + _0x16e1b1 + '.png">'
    }
  )
  _0x1f4a5f('Done', _0x340fdc('done'), 'done')
}
function _0x26c91e(_0x330e44) {
  $('#comandsTableRows > tr').remove()
  var _0x42c15f = _0x5cf163(_0x330e44),
    _0x67a0f4 = _0x42c15f
  if (_0x719ef5 > 0) {
    _0x67a0f4 = _0x42c15f.slice(
      (_0x719ef5 - 1) * _0x50eb81,
      _0x719ef5 * _0x50eb81
    )
  }
  for (var _0x1af194 = 0; _0x1af194 < _0x67a0f4.length; _0x1af194++) {
    var _0x8005a4 = _0x67a0f4[_0x1af194],
      _0x3481c3 = _0x1af194 % 2 ? 'row_a' : 'row_b'
    _0x3f4023(_0x8005a4, _0x3481c3)
  }
}
function _0x3f4023(_0x193858, _0x53a3f0) {
  var _0x22e124 = 'command_' + _0x193858.id
  let _0x136eac = (_0x542907) =>
      window.location.pathname +
      '?' +
      (_0x4c6c4d ? _0x4c6c4d + '&' : '') +
      'village=' +
      _0x193858.sourceVillageId +
      '&screen=info_village&id=' +
      _0x542907,
    _0x4ac9a0 =
      '<tr class=" ' +
      _0x53a3f0 +
      ' " id="' +
      _0x22e124 +
      '">\n        <td><input type="checkbox" id="select_command_' +
      _0x22e124 +
      '" data-id=' +
      _0x193858.id +
      '></td>\n        <td>' +
      ('<img src="/graphic/command/' +
        _0x193858.type.toLowerCase() +
        '.png">') +
      '</td>\n        <td> ' +
      _0x193858.name +
      ' </td>\n        <td> <a href="' +
      _0x136eac(_0x193858.sourceVillageId) +
      '" target="_blank">' +
      _0x193858.source +
      ' </a> </td>\n        <td> <a href="' +
      _0x136eac(_0x193858.targetVillageId) +
      '" target="_blank">' +
      _0x193858.target +
      ' </a> </td>\n        <td> ' +
      _0x46273c(_0x193858.launchTime) +
      ' <b  class="overviewsTimer commandTimer" data-endtime="' +
      new Date(_0x193858.launchTime).getTime() +
      '" data-randomtime="' +
      (parseInt(_0x193858.randomOffset) > 0
        ? new Date(_0x193858.randomOffsetTime).getTime()
        : 0) +
      '" data-format="%hh%:%mm%:%ss%"></b> </td>\n        <td><img src="/graphic/unit/unit_' +
      _0x193858.slowestUnit +
      '.png"></td>\n        <td><a><input id="send_' +
      _0x22e124 +
      '" data-id=' +
      _0x193858.id +
      ' class="btn" name="send" type="submit" value="Send"></a></td>\n        <td> ' +
      _0x193858.done +
      ' </td>\n        <td><a data-id=' +
      _0x193858.id +
      ' id="edit_' +
      _0x22e124 +
      '" href="javascript:void(0)" style="font-size:20px;display: flex;justify-content: center;align-items: center;">\u2795</a></td>\n        </tr>'
  _0x55e818(_0x4ac9a0, '#comandsTableRows', {
    wrapper: (_0x2b406e, _0x256ce7) =>
      (_0x256ce7.insertRow().outerHTML = _0x2b406e),
    callback: _0x1718e1,
  })
}
function _0x1718e1() {
  $('[id^=edit_command_]').off('click')
  $('[id^=send_command_]').off('click')
  $('[id^=edit_command_]').on('click', function () {
    _0x28d1c5(this.dataset.id)
  })
  $('[id^=send_command_]').on('click', function () {
    _0x32e365(this.dataset.id)
  })
}
function _0x476230() {
  $('#send_all').off('click')
  $('#delete_all').off('click')
  $('#quickAddEdit').off('click')
  $('#quickAddButton').off('click')
  $('#addPlanButton').off('click')
  $('#saveSettingsButton').off('click')
  $('#saveSettingsButtonBot').off('click')
  $('#startImportDataButton').off('click')
  $('#importDataButton').off('click')
  $('#cancelImportDataButton').off('click')
  $('#exportDataButton').off('click')
  $('#exportDataToFileButton').off('click')
  $('#delete_all_old_commands').off('click')
  $('#delete_all_done_commands').off('click')
  $('#revert_deleted_commands').off('click')
  $('#quickAddCommandTypeSelection').off('change')
  $('#send_all').on('click', _0x3063aa)
  $('#delete_all').on('click', _0x1d24d3)
  $('#quickAddEdit').on('click', () => _0x28d1c5(-1))
  $('#quickAddButton').on('click', _0x1ef123)
  $('#addPlanButton').on('click', _0x4ea9ed)
  $('#quickAddDate').val(_0x238fc0(new Date()))
  $('#saveSettingsButton').on('click', _0x5d701c)
  $('#saveSettingsButtonBot').on('click', _0x5d701c)
  $('#startImportDataButton').on('click', _0x5b9bb8)
  $('#importDataButton').on('click', _0x18cb71)
  $('#cancelImportDataButton').on('click', _0x42c0b0)
  $('#exportDataButton').on('click', _0x37880e)
  $('#exportDataToFileButton').on('click', _0xb446b3)
  $('#delete_all_old_commands').on('click', _0x199c88)
  $('#delete_all_done_commands').on('click', _0x346ac8)
  $('#revert_deleted_commands').on('click', _0x49e82d)
  $('#quickAddCommandTypeSelection').on('change', function () {
    if (this.value == 'Support') {
      $('#quickAddSelectTemplate').val(
        _0x3bd829.settings.currentSupportTemplate
      )
    } else {
      $('#quickAddSelectTemplate').val(_0x3bd829.settings.currentAttackTemplate)
    }
  })
  $('#addPlanHelpButton').on('click', _0x415095)
  $('#botSettingsHeader').on('click', _0x1c19aa)
  $('#settingsHeader').on('click', _0x355a4e)
  $('#botStatusSettingsHeader').on('click', _0xc417b3)
  $('#startStopBotButton').on('click', _0x543332)
  _0x3e3ac9('init')
  $('#popupsAllowedTr').on('click', _0x3e3ac9)
  _0x32a710()
  _0x4a1062()
  _0x2f3d4c()
  _0x535aa2('#memoPlanner')
  _0x16bbb1('.commandTimer', {
    htmlWrapper: (_0x16ac27) => {
      if (_0x16ac27 == 'OnHold') {
        return '(<span style="color: green;">On Hold</span>)'
      } else {
        if (_0x16ac27 != 'end') {
          return '(<span style="color: blue;">' + _0x16ac27 + '</span>)'
        } else {
          return '(<span style="color: red;">Command overdue</span>)'
        }
      }
    },
    refreshTime: 500,
  })
  _0x1e2d30()
  _0x522da4()
}
function _0x32a710() {
  $('#readMSFromPlan').on('change', _0x22ced1)
  $('#setMSWholePlane').on('change', _0x22ced1)
  if (_0x4cd9b2.readMSFromPlan) {
    $('#setMSWholePlane').attr('disabled', true)
  } else {
    $('#setMSWholePlane').attr('disabled', false)
  }
}
function _0x22ced1() {
  _0x4cd9b2.readMSFromPlan = $('#readMSFromPlan').is(':checked')
  _0x3ef16b = _0x4cd9b2.readMSFromPlan
  if (_0x4cd9b2.readMSFromPlan) {
    $('#setMSWholePlane').attr('disabled', true)
  } else {
    $('#setMSWholePlane').attr('disabled', false)
  }
  const _0x5ea8e0 = document.getElementById('setMSWholePlane').value
  let _0x1548b1 = 0
  if (_0x5ea8e0 != '') {
    _0x1548b1 = parseInt(_0x5ea8e0)
  }
  _0x4cd9b2.setMSWholePlane = _0x1548b1
  _0x56d785()
}
function _0x3e3ac9(_0x3e62cd) {
  if (_0x4cd9b2.allowPopups) {
    $('#popupsAllowedTr').hide(100)
    return
  }
  let _0x33ad20 = window.open(null, '', 'width=1,height=1')
  try {
    _0x33ad20.close()
    _0x3e62cd == 'init' &&
      ((_0x4cd9b2.allowPopups = true), $('#popupsAllowedTr').hide(100))
  } catch (_0x217c07) {
    _0x4cd9b2.allowPopups = false
    $('#popupsAllowedTr').show(100)
  }
  _0x56d785()
}
function _0x296787() {
  let _0x1e203d = _0x4f92f7()
  _0x26c91e(_0x1e203d)
  _0x1718e1()
  _0x56d785()
}
function _0x1e2d30(_0x16e368 = true) {
  if (_0x16e368) {
    _0x572d27()
  }
  _0x508122()
  _0x296787()
}
function _0x1ef123() {
  if (!_0x518251() || !_0x56c3ec || !_0x3f3b4e.as || window.console.ASAllowed) {
    return
  }
  const _0x56207f = document.getElementById('quickAddName').value,
    _0x824824 = document.getElementById('quickAddSource').value,
    _0x579203 = document.getElementById('quickAddTarget').value,
    _0x2fc81a = document.getElementById('quickAddToUse').value
  let _0x58b392, _0x442cf5
  $('#quickAddTime')[0].value == 'arrival'
    ? (_0x442cf5 = new Date(document.getElementById('quickAddDate').value))
    : (_0x58b392 = new Date(document.getElementById('quickAddDate').value))
  const _0x482802 = $('#quickAddCommandTypeSelection')[0].value
  _0x36cf3e(_0x56207f, _0x824824, _0x579203, _0x58b392, _0x442cf5, _0x482802, {
    id: -1,
    useDefaultTemplate: false,
    fromQuickAdd: true,
    toUse: _0x2fc81a,
  })
  _0x1e2d30()
}
function _0x4ea9ed() {
  if (!_0x518251() || !_0x56c3ec || !_0x3f3b4e.as || window.console.ASAllowed) {
    return
  }
  const _0x508478 = document.getElementById('addPlanTextArea').value,
    _0x4d9e39 = _0x508478.split('\n')
  for (let _0x47771b = 0; _0x47771b < _0x4d9e39.length; _0x47771b++) {
    const _0x32b2b7 = _0x4d9e39[_0x47771b],
      _0x973264 = _0x5c0bad(_0x32b2b7)
    if (_0x973264 == null || _0x973264.length <= 1) {
      continue
    }
    const _0x2214d4 = _0x973264[0],
      _0x39bc6b = _0x973264[1],
      _0x31e4d8 = _0x594864(_0x32b2b7),
      _0x1263c9 = _0x496c84(_0x32b2b7),
      _0x64fffa = _0x271e46(_0x32b2b7)
    _0x36cf3e(
      undefined,
      _0x2214d4,
      _0x39bc6b,
      _0x31e4d8,
      undefined,
      _0x64fffa,
      {
        useDefaultTemplate: true,
        slowestUnit: _0x1263c9,
        id: -1,
      }
    )
  }
  _0x1e2d30()
}
function _0x36cf3e(
  _0x22aeb1,
  _0x4e690d,
  _0x5c0bbb,
  _0x3927bd,
  _0x527477,
  _0x4dd490,
  {
    units: units = {},
    id: id = -1,
    useDefaultTemplate: useDefaultTemplate = false,
    slowestUnit: slowestUnit = '',
    fromQuickAdd: fromQuickAdd = false,
    toUse: toUse = _0x4cd9b2.toUse,
    autoSend: autoSend = true,
    randomOffset: randomOffset = _0x4cd9b2.launchTime_offset,
    randomOffsetTime: _0x3148bf,
    sigil: sigil = _0x4cd9b2.sigil,
    leaveCats: leaveCats = _0x4cd9b2.leaveCats,
    leaveRams: leaveRams = _0x4cd9b2.leaveRams,
    ntTemplate: ntTemplate = _0x36f0e5(),
  }
) {
  if (!_0x518251() || !_0x56c3ec || !_0x3f3b4e.as || window.console.ASAllowed) {
    return
  }
  _0x5cd0f7()
  let _0x58739a
  if (useDefaultTemplate || fromQuickAdd) {
    if (_0x4dd490 == 'Support') {
      _0x58739a = _0x2d9154[_0x4cd9b2.currentSupportTemplate]
    } else {
      _0x58739a = _0x2d9154[_0x4cd9b2.currentAttackTemplate]
    }
    if (fromQuickAdd) {
      _0x58739a = _0x2d9154[$('#quickAddSelectTemplate')[0].value]
    }
    units = Object.assign({}, _0x58739a.units)
  }
  let _0x28c88e = _0x22aeb1
  if (!_0x28c88e) {
    _0x28c88e = _0x58739a.name
  }
  if (!_0xcba015[_0x4e690d]) {
    _0x18b744(_0x6c2166)
    return
  } else {
    if (!_0xcba015[_0x5c0bbb]) {
      _0x18b744(_0x2a811d)
      return
    } else {
      if (_0x28c88e.length > _0x217f94) {
        _0x18b744(_0x47976f)
        return
      }
    }
  }
  $.each(
    units,
    (_0x1f0b04, _0xcd1773) =>
      (units[_0x1f0b04] = parseInt(_0xcd1773 != '' ? _0xcd1773 : 0))
  )
  if (_0x30215f[slowestUnit]) {
    if (units[slowestUnit] == 0) {
      units[slowestUnit] = 1
    }
  }
  const _0x276c94 = []
  $.each(_0x30215f, (_0x55a260, _0x4c17d7) => {
    let _0x5d14b6 = Math.ceil(_0x4c17d7.speed)
    _0x276c94.push({
      key: _0x55a260,
      thisSpeed: _0x5d14b6,
    })
  })
  const _0x27faee = _0x276c94.sort(function _0x1c1638(_0x1aeccf, _0xeb4a7c) {
    if (_0x1aeccf.thisSpeed < _0xeb4a7c.thisSpeed) {
      return 1
    } else {
      if (_0x1aeccf.thisSpeed > _0xeb4a7c.thisSpeed) {
        return -1
      } else {
        return 0
      }
    }
  })
  for (const _0x3f16bf in _0x27faee) {
    if (units[_0x27faee[_0x3f16bf].key] != 0) {
      if (_0x30215f[slowestUnit]) {
        _0x27faee[_0x3f16bf].speed > _0x30215f[slowestUnit].speed &&
          (units[_0x27faee[_0x3f16bf]] = 0)
      } else {
        slowestUnit = _0x27faee[_0x3f16bf].key
        break
      }
    }
  }
  if (
    _0x4dd490 == 'Support' &&
    units.knight != 0 &&
    _0x442943.units.includes('knight')
  ) {
    slowestUnit = 'knight'
  }
  id < 0 && UI.SuccessMessage('New Command programmed')
  id = id < 0 ? _0x3bd829.commandIdCounter++ : id
  const _0x28b3a5 = {
    id: id,
    name: _0x28c88e,
    sourceVillageId: _0xcba015[_0x4e690d].id,
    targetVillageId: _0xcba015[_0x5c0bbb].id,
    source: _0x4e690d,
    target: _0x5c0bbb,
    launchTime: _0x3927bd,
    arrivalTime: _0x527477,
    slowestUnit: slowestUnit,
    units: units,
    type: _0x4dd490,
    done: false,
    toUse: toUse,
    autoSend: autoSend,
    preparedByBot: false,
    randomOffset: randomOffset,
    randomOffsetTime: _0x3148bf,
    sigil: sigil,
    leaveCats: leaveCats,
    leaveRams: leaveRams,
    ntTemplate: ntTemplate,
  }
  _0x2531c8(_0x28b3a5)
  _0x5d8c50[id] = _0x28b3a5
  _0x56d785()
}
function _0x32e365() {
  if (!_0x518251() || !_0x56c3ec || !_0x3f3b4e.as || window.console.ASAllowed) {
    return
  }
  for (let _0x1f6fc3 = 0; _0x1f6fc3 < arguments.length; _0x1f6fc3++) {
    setTimeout(
      function (_0x166885, _0x5dd75d, _0x1539f5) {
        const _0x30a36d = _0x5d8c50[_0x1539f5[_0x5dd75d]]
        let _0x3a5fd =
            window.location.pathname +
            '?' +
            (_0x166885 ? _0x166885 + '&' : '') +
            'village=' +
            _0x30a36d.sourceVillageId +
            '&screen=place&target=' +
            _0x30a36d.targetVillageId,
          _0x3b99e7 = window.open(_0x3a5fd)
        _0x3b99e7.sessionStorage.setItem(
          'commandsOverviewCommandData',
          JSON.stringify(_0x30a36d),
          '_blank',
          'toolbar=0,location=0,menubar=0'
        )
      },
      _0x4878ab * (_0x1f6fc3 + Math.random() * 0.1),
      _0x4c6c4d,
      _0x1f6fc3,
      arguments
    )
  }
  _0x1e2d30()
}
function _0x508122() {
  if (_0x579a1e) {
    _0x199c88('auto')
  }
  _0x16a30b && _0x346ac8('auto')
}
function _0x199c88(_0x52f770) {
  console.log('Deleting old commands')
  let _0x350a1b = 0
  const _0x578c89 = []
  $.each(_0x5d8c50, (_0x24a161, _0x161048) => {
    if (_0x161048) {
      var _0x594286 = new Date(
        Timing.getCurrentServerTime() - _0x42729e - _0x22d420 * 60000
      )
      _0x22d03a(_0x5d8c50[_0x24a161], _0x594286) < 0 &&
        (_0x52f770 != 'auto' && _0x578c89.push(_0x5d8c50[_0x24a161]),
        _0x350a1b++,
        delete _0x5d8c50[_0x24a161])
    }
  })
  if (_0x578c89.length > 0) {
    _0x2215ba.push(_0x578c89)
  }
  console.log('Deleted ' + _0x350a1b + ' commands')
  _0x296787()
}
function _0x346ac8(_0x2ad876) {
  let _0x522955 = 0
  const _0x197a5a = []
  $.each(_0x5d8c50, (_0x4eabca, _0x297a45) => {
    if (_0x297a45) {
      if (_0x297a45.done) {
        if (_0x2ad876 != 'auto') {
          _0x197a5a.push(_0x5d8c50[_0x4eabca])
        }
        _0x522955++
        delete _0x5d8c50[_0x4eabca]
      }
    }
  })
  if (_0x197a5a.length > 0) {
    _0x2215ba.push(_0x197a5a)
  }
  console.log('Deleted ' + _0x522955 + ' done commands')
  _0x296787()
}
function _0x3063aa() {
  _0x32e365(
    ...$.map($("[id^='select_command_']").filter(':checked'), (_0x3b3349) => {
      return _0x3b3349.dataset.id
    })
  )
}
function _0x1d24d3() {
  _0x55d633(
    ...$.map($("[id^='select_command_']").filter(':checked'), (_0x4de086) => {
      return _0x4de086.dataset.id
    })
  )
}
function _0x55d633() {
  const _0x7f88f0 = []
  for (let _0x137af6 = 0; _0x137af6 < arguments.length; _0x137af6++) {
    _0x7f88f0.push(_0x5d8c50[arguments[_0x137af6]])
    delete _0x5d8c50[arguments[_0x137af6]]
  }
  _0x7f88f0.length > 0 && _0x2215ba.push(_0x7f88f0)
  console.log('Deleted ' + arguments.length + ' commands')
  _0x1e2d30()
}
function _0x49e82d() {
  if (_0x2215ba.length == 0) {
    _0x18b744(_0x2d420f)
    return
  }
  const _0x391580 = _0x2215ba.pop()
  for (let _0x52e047 = 0; _0x52e047 < _0x391580.length; _0x52e047++) {
    const _0x3878be = _0x391580[_0x52e047]
    _0x5d8c50[_0x3878be.id] = _0x3878be
  }
  console.log('Reverted ' + _0x391580.length + ' commands')
  _0x1e2d30()
}
function _0x5cf163(_0x5d3e16) {
  if (_0x5d3e16.length < 1) {
    return []
  }
  const _0x1d0206 = []
  $.each(_0x5d3e16, (_0x4a0649, _0x57607e) => {
    _0x1d0206.push(_0x57607e)
  })
  const _0x402552 = _0x1d0206.sort(_0x22d03a)
  return (_0x3aa622 = _0x402552), _0x402552
}
function _0x4e2589() {
  let _0x29b58e = null
  for (
    let _0xc70d5d = 0;
    _0xc70d5d < _0x3aa622.length && _0x29b58e == null;
    _0xc70d5d++
  ) {
    const _0x4c9869 = _0x3aa622[_0xc70d5d]
    if (_0x22d03a(_0x4c9869, new Date(new Date() - _0x42729e)) > 0) {
      _0x29b58e = _0x4c9869
    }
  }
  return _0x29b58e
}
function _0x51dad7(_0x32490c) {
  let _0x33e8d4 = [],
    _0x1e992a = 0
  for (let _0x353e57 = 0; _0x353e57 < _0x3aa622.length; _0x353e57++) {
    const _0x327d51 = _0x3aa622[_0x353e57],
      _0x9a3c88 = new Date(
        Timing.getCurrentServerTime() + _0x32490c * 1000 - _0x42729e
      )
    if (
      !_0x327d51.done &&
      _0x2be20a(_0x327d51, _0x9a3c88) < 0 &&
      _0x2be20a(_0x327d51, new Date(new Date() - _0x42729e)) > 0
    ) {
      _0x33e8d4[_0x1e992a] = _0x327d51
      _0x1e992a++
    }
  }
  return _0x33e8d4
}
function _0x1f4a5f(
  _0x2d6f39,
  _0x329448,
  _0xefb1da,
  _0x14877d = (_0x2271ff) => {
    return _0x2271ff
  }
) {
  let _0x3f0555 =
    '<form>\n        <div class="multipleSelection">\n            <div class="selectBox" data-id="' +
    _0xefb1da +
    '" id="selectBox_' +
    _0xefb1da +
    '">\n                <select>\n                    <option selected hidden>' +
    _0x2d6f39 +
    '</option>\n                </select>\n                <div class="overSelect"></div>\n            </div>\n\n            <div id="checkBoxes_' +
    _0xefb1da +
    '" class=\'selectionOption\' style="display:none;">\n                <table>\n                    <tbody>\n                        <tr>\n                            <td><input type="checkbox" class="selectionCheckboxAll" id="select_' +
    _0xefb1da +
    '_all" data-id="' +
    _0xefb1da +
    '" checked></td><td>All</td>\n                        </tr>\n                        ' +
    $.map(
      _0x329448,
      (_0xee277e, _0x4486a3) =>
        '\n                        <tr>\n                            <td><input type="checkbox" id="select_' +
        _0xefb1da +
        '_' +
        _0x4486a3 +
        '" class="selectionCheckbox" checked data-option="' +
        _0xee277e +
        '" data-id="' +
        _0xefb1da +
        '"></td><td>' +
        _0x14877d(_0xee277e) +
        '</td>\n                        </tr>'
    ).join('\n') +
    '\n                    </tbody>\n                </table>\n            </div>\n        </div>\n    </form>\n    '
  return (
    _0x55e818(_0x3f0555, '#thSelectionCheckbox' + _0xefb1da, {
      callback: _0x523121,
    }),
    _0x3f0555
  )
}
function _0x523121() {
  if (!$('#checkboxFader').length) {
    $('#memoPlanner').append(
      '<div id="checkboxFader" style="display:none;"></div> '
    )
  }
  let _0x2390b2 = function () {
    let _0x2930b0 = $('#checkBoxes_' + this.dataset.id)[0],
      _0x5a765f = _0x2930b0.style.display == 'none' ? 'block' : 'none'
    $('#checkboxFader')[0].style.display = _0x5a765f
    _0x2930b0.style.display = _0x5a765f
  }
  $('.selectBox').off('click')
  $('#checkboxFader').off('click')
  $('.selectionCheckboxAll').off('change')
  $('.selectionCheckbox').off('change')
  $('.selectBox').on('click', _0x2390b2)
  $('#checkboxFader').on('click', function () {
    $('.selectionOption').css('display', 'none')
    $('#checkboxFader').css('display', 'none')
  })
  $('.selectionCheckboxAll').on('change', function () {
    let _0x40a7e8 = this.dataset.id
    $('[id^=select_' + _0x40a7e8 + '_]').prop('checked', this.checked)
    _0x296787()
  })
  $('.selectionCheckbox').on('change', _0x296787)
}
function _0x4f92f7() {
  let _0x537e62 = [
      ...$('.selectionCheckbox:checkbox:checked').map(
        (_0x25f96a, _0x5d548a) => {
          return [[_0x5d548a.dataset.id, _0x5d548a.dataset.option]]
        }
      ),
    ],
    _0x3e5c6f = _0x537e62.reduce((_0x572c56, _0xe58ea2) => {
      let [_0x515e12, _0x523090] = _0xe58ea2
      if (!Object.keys(_0x572c56).includes(_0x515e12)) {
        _0x572c56[_0x515e12] = []
      }
      return _0x572c56[_0x515e12].push(_0x523090), _0x572c56
    }, {})
  $('.selectBox').each((_0x4a21a9, _0x333b60) => {
    _0x3e5c6f[_0x333b60.dataset.id] = _0x3e5c6f[_0x333b60.dataset.id]
      ? _0x3e5c6f[_0x333b60.dataset.id]
      : []
  })
  let _0x4fd67f = []
  return (
    $.each(_0x5d8c50, (_0x146513, _0x3b782c) => {
      let _0x14b63c = _0x3e5c6f.name.includes(_0x3b782c.name),
        _0x419344 = _0x3e5c6f.type.includes(_0x3b782c.type),
        _0x41bb2c = _0x3e5c6f.source.includes(_0x3b782c.source),
        _0x3456d9 = _0x3e5c6f.target.includes(_0x3b782c.target),
        _0x5a68a3 = _0x3e5c6f.slowestUnit.includes(_0x3b782c.slowestUnit),
        _0x31f8cd = _0x3e5c6f.done.includes(_0x3b782c.done.toString())
      _0x14b63c &&
        _0x419344 &&
        _0x41bb2c &&
        _0x3456d9 &&
        _0x5a68a3 &&
        _0x31f8cd &&
        _0x4fd67f.push({ [_0x146513]: _0x3b782c })
    }),
    _0x33fa75(_0x4fd67f.length),
    _0x13cc43(_0x4fd67f)
  )
}
function _0x774eae() {
  _0x3bd829.commandIdCounter == null && (_0x3bd829.commandIdCounter = 0)
  if (!_0x3bd829.commands) {
    _0x3bd829.commands = {}
  }
  _0xf6989a(_0x5d8c50, _0x3bd829.commands)
}
function _0x15a318() {
  let _0x1e3a29 = 0,
    _0x37bd12 = 0
  function _0x601b22(_0x1dc90e) {
    return (
      '<tr><td class="nowrap"><a href="javascript:void(0)" class="unit_link" data-unit="' +
      _0x1dc90e +
      '"><img src="/graphic/unit/unit_' +
      _0x1dc90e +
      '.png"></a> <input id="unit_input_' +
      _0x1dc90e +
      '" name="' +
      _0x1dc90e +
      '" type="text" tabindex="' +
      _0x1e3a29++ +
      '" value="' +
      _0xe90c2a(_0x1dc90e, -1).value +
      '" class="unitsInput" Disabled></td><td align="center"><input type="checkbox" tabindex="' +
      _0x1e3a29++ +
      '" id="' +
      _0x1dc90e +
      '_all" class="popupCheckbox" checked = "' +
      _0xe90c2a(_0x1dc90e, -1).checked +
      '" data-unit="' +
      _0x1dc90e +
      '"> </td></tr>'
    )
  }
  function _0x36b478(_0x4d45de) {
    let _0x649680 =
      '<tr class="' +
      (_0x37bd12++ % 2 ? 'row_a' : 'row_b') +
      '">\n            <td><a class="templateLink" data-templateid="' +
      _0x4d45de.id +
      '" href="javascript:void(0);">' +
      _0x4d45de.name +
      '</a></td>\n        </tr>'
    return _0x649680
  }
  var _0x11b2ba =
    '<div class="popup_box_container" id="config_popup" style="display:none;">\n        <div class="popup_box show" id="popup_box_popup_command" style="min-width: 700px;">\n            <div class="popup_box_content">\n                <a class="popup_box_close tooltip-delayed" id="popup_cross" href="javascript:void(0)"> </a>\n                <h3>Set attack units</h3>\n                <div style="display: grid;grid-template-columns: auto auto;grid-gap: 10px;">\n                    <div style="min-width: 600px;">\n                        <table>\n                            <tbody>\n                                <tr>\n                                    <td valign="top">\n                                        <table class="vis" width="100%">\n                                            <tbody>\n                                                <tr>\n                                                    <th>Infantry</th><th>Send All</th>\n                                                </tr>\n                                                ' +
    _0x601b22('spear') +
    '\n                                                ' +
    _0x601b22('sword') +
    '\n                                                ' +
    _0x601b22('axe') +
    '\n                                                ' +
    (Object.keys(_0x30215f).includes('archer') ? _0x601b22('archer') : '') +
    '\n                                            </tbody>\n                                        </table>\n                                    </td>\n                                    <td valign="top">\n                                        <table class="vis" width="100%">\n                                            <tbody>\n                                                <tr>\n                                                    <th>Cavalry</th><th>Send All</th>\n                                                </tr>\n                                                ' +
    _0x601b22('spy') +
    '\n                                                ' +
    _0x601b22('light') +
    '\n                                                ' +
    (Object.keys(_0x30215f).includes('marcher') ? _0x601b22('marcher') : '') +
    '\n                                                ' +
    _0x601b22('heavy') +
    '\n                                            </tbody>\n                                        </table>\n                                    </td>\n                                    <td valign="top">\n                                        <table class="vis" width="100%">\n                                            <tbody>\n                                                <tr>\n                                                    <th>Siege Weapons</th><th>Send All</th>\n                                                </tr>\n                                                ' +
    _0x601b22('ram') +
    '\n                                                ' +
    _0x601b22('catapult') +
    '\n                                            </tbody>\n                                        </table>\n                                    </td>\n                                    <td valign="top">\n                                        <table class="vis" width="100%">\n                                            <tbody>\n                                                <tr>\n                                                    <th>Others</th><th>Send All</th>\n                                                </tr>\n                                                ' +
    (Object.keys(_0x30215f).includes('knight') ? _0x601b22('knight', 1) : '') +
    '\n                                                ' +
    _0x601b22('snob', 2) +
    '\n                                            </tbody>\n                                        </table>\n                                    </td>\n                                </tr>\n                            </tbody>\n                        </table>\n                    </div>\n                    <div class="vis" style="margin: 4px 10px 0px 10px; min-width: 125px; float:right; height:max-content">\n                        <h4>\n                            <a href="' +
    window.location.origin +
    '/game.php?screen=place&mode=templates">Troop templates</a>\n                        </h4>\n                        <table class="vis" style="width: 100%">\n                            <tbody>\n                               ' +
    $.map(_0x2d9154, (_0x19bc19) => _0x36b478(_0x19bc19)).join('\n') +
    '\n                            </tbody>\n                        </table>\n                    </div>\n                </div>\n                <br>\n                <table>\n                    <thead>\n                        <tr>\n                            <th style="text-align: center;">Name</th>\n                            <th style="text-align: center;">Source</th>\n                            <th style="text-align: center;">Target</th>\n                            <th style="text-align: center;">\n                                <select id="popupTime">\n                                        <option value="arrival"><strong>Arrival time</strong></option>\n                                        <option value="launch"><strong>Launch time</strong></option>\n                                </select>\n                            </th>\n                            <th style="text-align: center;">Type</th>\n                            <th style="text-align: center;">Max(%)</th>\n                            <th style="text-align: center;">Sigil(%)</th>\n                            <th style="text-align: center;">Leave Cats</th>\n                            <th style="text-align: center;">Leave Rams</th>\n                            <th style="text-align: center;">Random Launch Offset</th>\n                            <th style="text-align: center;">NT Template</th>\n                            <th style="text-align: center;">Auto Send?</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td style=""><input type="text" id="popupName"style="width:100px" placeholder="Name"></td>\n                            <td style=""><input type="text" id="popupSource"style="width:45px" placeholder="555|555"></td>\n                            <td style=""><input type="text" id="popupTarget" style="width:45px" placeholder="555|555"></td>\n                            <td style=""><input type="datetime-local" id="popupDate" step=".001"></td>\n                            <td style="">\n                                <select id="popupCommandTypeSelection" style="width: 70px;">\n                                    <option value="Attack" >Attack</option>\n                                    <option value="Support">Support</option>\n                                </select>\n                            </td>\n                            <td style=""><input type="text" id="popupToUse" style="width:50px" value="100">\n                            <td style=""><input type="text" id="popupSigil" style="width:50px" value="100">\n                            <td style=""><input type="text" id="popupLeaveCats" style="width:50px" value="100">\n                            <td style=""><input type="text" id="popupLeaveRams" style="width:50px" value="100">\n                            <td style=""><input type="text" id="popupRandomLaunchTimeOffset" style="width:50px" value="100">\n                            <td style="">\n                                <select id="popupNtTemplate" style="width: 70px;"></select>\n                            </td>\n                            <td style="text-align: center;vertical-align: middle;"><input type="checkbox" id="popupAutoSend">\n                            </td>\n                        </tr>\n                    </tbody>\n                </table>\n                <table>\n                    <tbody>\n                        <tr>\n                            <td id="popupSetDiv">\n                                <input id="popupSet" tabindex="15" class="btn" name="set_troops" type="submit" value="Save">\n                            </td>\n                            <td>\n                                <input id="popupSetNew" tabindex="15" class="btn" name="set_troops" type="submit" value="Create New">\n                            </td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n        </div>\n    </div>\n    <div class="fader" id="popup_fader" style="display:none;"></div>'
  $('#memoPlanner').append(_0x11b2ba)
  let _0x557ba4 = $('.popupCheckbox')
  _0x557ba4.off('change')
  _0x557ba4.on('change', function () {
    let _0x2ef7b3 = $(this)[0],
      _0x1f94bf = _0x2ef7b3.dataset.unit
    $('#unit_input_' + _0x1f94bf)[0].disabled = _0x2ef7b3.checked
  })
  let _0x375a3b = $('.templateLink')
  _0x375a3b.off('click')
  _0x375a3b.on('click', function () {
    _0x1fe390(_0x2d9154[this.dataset.templateid])
  })
  $('#popup_fader').off('click')
  $('#popup_cross').off('click')
  $('#popup_fader').on('click', function () {
    _0xbe12f2(false)
  })
  $('#popup_cross').on('click', function () {
    _0xbe12f2(false)
  })
  $.each(_0x3e53dd, (_0x51608f) => {
    $('#popupNtTemplate').append(
      $('<option>', {
        id: _0x51608f,
        text: _0x3e53dd[_0x51608f].name,
      })
    )
  })
}
function _0x1fe390(_0x19eb83) {
  _0x519ec6(_0x19eb83.units)
}
function _0xe90c2a(_0x1feab5, _0x558399) {
  let _0x52907a = _0x558399,
    _0x17d673 = _0x52907a != -1 ? false : true,
    _0x4946cb = _0x52907a != -1 ? false : true,
    _0x4b5f51 = _0x52907a > 0 ? _0x52907a : ''
  return {
    disabled: _0x17d673,
    checked: _0x4946cb,
    value: _0x4b5f51,
  }
}
function _0x519ec6(_0x16e529) {
  $.each(_0x16e529, (_0x5d5eff, _0x180cea) => {
    Object.keys(_0x30215f).includes(_0x5d5eff) &&
      (($('#unit_input_' + _0x5d5eff)[0].value = _0xe90c2a(
        _0x5d5eff,
        _0x180cea
      ).value),
      ($('#unit_input_' + _0x5d5eff)[0].disabled = _0xe90c2a(
        _0x5d5eff,
        _0x180cea
      ).disabled),
      ($('#' + _0x5d5eff + '_all')[0].checked = _0xe90c2a(
        _0x5d5eff,
        _0x180cea
      ).checked))
  })
}
function _0x519115(_0x59151a) {
  let _0x44d820 = {}
  if (!_0x5d8c50[_0x59151a]) {
    $.each(_0x30215f, (_0x590aac) => (_0x44d820[_0x590aac] = -1))
  } else {
    _0x44d820 = _0x5d8c50[_0x59151a].units
  }
  _0x519ec6(_0x44d820)
  _0x59151a != -1
    ? (($('#popupName')[0].value = _0x5d8c50[_0x59151a].name),
      ($('#popupSource')[0].value = _0x5d8c50[_0x59151a].source),
      ($('#popupTarget')[0].value = _0x5d8c50[_0x59151a].target),
      $('#popupDate').val(
        _0x238fc0(new Date(_0x5d8c50[_0x59151a].arrivalTime))
      ),
      $('#popupCommandTypeSelection').val(_0x5d8c50[_0x59151a].type),
      $('#popupToUse').val(
        _0x5d8c50[_0x59151a].toUse ? _0x5d8c50[_0x59151a].toUse : 100
      ),
      $('#popupAutoSend').prop('checked', _0x5d8c50[_0x59151a].autoSend),
      $('#popupRandomLaunchTimeOffset').val(
        _0x5d8c50[_0x59151a].randomOffset
          ? _0x5d8c50[_0x59151a].randomOffset
          : 0
      ),
      $('#popupSigil').val(
        _0x5d8c50[_0x59151a].sigil ? _0x5d8c50[_0x59151a].sigil : 0
      ),
      $('#popupLeaveCats').val(
        _0x5d8c50[_0x59151a].leaveCats ? _0x5d8c50[_0x59151a].leaveCats : 0
      ),
      $('#popupLeaveRams').val(
        _0x5d8c50[_0x59151a].leaveRams ? _0x5d8c50[_0x59151a].leaveRams : 0
      ),
      $('#' + _0x5d8c50[_0x59151a].ntTemplate).prop('selected', true))
    : (($('#popupName')[0].value = $('#quickAddName')[0].value),
      ($('#popupSource')[0].value = $('#quickAddSource')[0].value),
      ($('#popupTarget')[0].value = $('#quickAddTarget')[0].value),
      $('#popupDate').val(_0x238fc0(new Date($('#quickAddDate')[0].value))),
      ($('#popupCommandTypeSelection')[0].value = $(
        '#quickAddCommandTypeSelection'
      )[0].value),
      $('#popupToUse').val(100),
      $('#popupSigil').val(0),
      $('#popupLeaveCats').val(0),
      $('#popupLeaveRams').val(0),
      $('#popupAutoSend').prop('checked', true),
      $('#popupRandomLaunchTimeOffset').val(0),
      $('#popupNtTemplate').val(_0x3e53dd[_0x36f0e5()].id),
      $('#' + _0x36f0e5()).prop('selected', true))
}
function _0x28d1c5(_0x402cef = -1) {
  _0x402cef = parseInt(_0x402cef)
  _0x519115(_0x402cef)
  $('#config_popup')[0].style.display = 'flex'
  $('#popup_fader')[0].style.display = 'flex'
  if (_0x402cef == -1) {
    $('#popupSetDiv')[0].style.display = 'none'
  } else {
    $('#popupSetDiv')[0].style.display = 'flex'
  }
  $('#popupSet').off('click')
  $('#popupSet').on('click', function () {
    _0xbe12f2(true, _0x402cef)
  })
  $('#popupSetNew').off('click')
  $('#popupSetNew').on('click', function () {
    _0xbe12f2(true, -1, false)
  })
}
function _0xbe12f2(_0x43f4d3, _0x54746f = -1, _0x3559e9 = true) {
  if (_0x43f4d3) {
    let _0x2b8cf8 = $('#popupName')[0].value,
      _0x46759c = $('#popupSource')[0].value,
      _0x35d238 = $('#popupTarget')[0].value,
      _0x5d4b7b,
      _0x5ac2d9
    if ($('#popupTime')[0].value == 'launch') {
      _0x5d4b7b = new Date($('#popupDate')[0].value)
    } else {
      _0x5ac2d9 = new Date($('#popupDate')[0].value)
    }
    let _0x1a9a04 = $('#popupCommandTypeSelection')[0].value,
      _0x58a025 = _0x13cc43(
        $.map(_0x30215f, (_0x3ba4f2, _0x10dd93) => {
          let _0x39fade = $('#unit_input_' + _0x10dd93)[0].value,
            _0xbc88e4 = $('#' + _0x10dd93 + '_all')[0].checked
          return { [_0x10dd93]: _0xbc88e4 ? -1 : _0x39fade }
        })
      ),
      _0x370401 = $('#popupToUse')[0].value,
      _0x23db85 = $('#popupAutoSend').is(':checked'),
      _0x26401d = $('#popupRandomLaunchTimeOffset')[0].value,
      _0x5f34e3 = $('#popupSigil')[0].value,
      _0x48cf81 = $('#popupLeaveCats')[0].value,
      _0x4592c7 = $('#popupLeaveRams')[0].value,
      _0x1a109f = 'firstNobleRedNT',
      _0x59297b = $('#popupNtTemplate').find(':selected').attr('id')
    if (_0x59297b) {
      _0x1a109f = _0x59297b
    }
    _0x36cf3e(
      _0x2b8cf8,
      _0x46759c,
      _0x35d238,
      _0x5d4b7b,
      _0x5ac2d9,
      _0x1a9a04,
      {
        units: _0x58a025,
        id: _0x54746f,
        useDefaultTemplate: false,
        toUse: _0x370401,
        autoSend: _0x23db85,
        sigil: _0x5f34e3,
        randomOffset: _0x26401d,
        leaveCats: _0x48cf81,
        leaveRams: _0x4592c7,
        ntTemplate: _0x1a109f,
      }
    )
    _0x1e2d30(false)
  }
  _0x3559e9 &&
    (($('#config_popup')[0].style.display = 'none'),
    ($('#popup_fader')[0].style.display = 'none'))
}
function _0x2fd323() {
  return new Promise(function (_0x39b18b, _0x3002be) {
    $.get(
      '/game.php?' +
        (_0x4c6c4d ? _0x4c6c4d + '&' : '') +
        'village=' +
        _0x442943.village.id +
        '&screen=place&mode=templates',
      function (_0x503b40) {
        const _0x5b63f3 = new DOMParser(),
          _0x1702e5 = _0x5b63f3.parseFromString(_0x503b40, 'text/html'),
          _0x281734 = _0x1702e5.getElementById('troop_template').childNodes[5],
          _0x158f27 = _0x281734.innerHTML.split('\n')[2],
          _0x22f1e5 = JSON.parse(_0x158f27.match(/.+=(.+);/)[1])
        _0x39b18b(_0x7d7234(_0x22f1e5))
      }
    ).fail(() => _0x3002be(_0x18b744('Error getting troop templates')))
  })
}
function _0x7d7234(_0x89d38c) {
  const _0x5937a7 = {
    _0x8b06f9: {
      id: _0x89d38c[_0x8b06f9].id,
      name: _0x89d38c[_0x8b06f9].name,
      units: _0x101daa,
    },
  }
  return (
    _0x1433db(_0x5937a7),
    $.each(_0x89d38c, (_0x8b06f9) => {
      let _0x101daa = {
        _0x1d420a:
          parseInt(_0x89d38c[_0x8b06f9][_0x1d420a]) < 0
            ? -1
            : parseInt(_0x89d38c[_0x8b06f9][_0x1d420a]),
      }
      $.each(_0x30215f, (_0x1d420a) => {})
      const _0x44adb4 = _0x89d38c[_0x8b06f9].use_all
      $.each(_0x44adb4, (_0x3124e5) => {
        _0x101daa[_0x44adb4[_0x3124e5]] = -1
      })
    }),
    _0x5937a7
  )
}
function _0x1433db(_0x4ad51a) {
  _0x4ad51a[_0x1754fa.id] = _0x1754fa
  _0x4ad51a[_0x36c46c.id] = _0x36c46c
  _0x4ad51a[_0xf99d1d.id] = _0xf99d1d
}
function _0x2f3d4c() {
  const _0x3c859b = _0x2d9154
  $.each(_0x3c859b, (_0x5df76f) => {
    $('.templateDropdown').append(
      $('<option>', {
        value: _0x3c859b[_0x5df76f].id,
        text: _0x3c859b[_0x5df76f].name,
      })
    )
  })
  $('.attackTemplate').val(_0x4cd9b2.currentAttackTemplate)
  $('.supportTemplate').val(_0x4cd9b2.currentSupportTemplate)
}
function _0x47aac8() {
  _0x981441()
  _0x1cd26d()
}
function _0x981441() {
  $('.memo-tab').not('#tab_Planner').click(_0x4e4f64)
  Memo['_addTab'] = Memo.addTab
  Memo.addTab = async () => {
    Memo['_addTab']()
    _0x4e4f64()
  }
}
function _0x3d2c8c() {
  if (_0x3bd829.focused == null) {
    _0x3bd829.focused = false
  }
}
function _0x1cd26d() {
  const _0xf3c610 = document.getElementById('tab-bar'),
    _0x748f7f = document.createElement('div')
  _0x748f7f.setAttribute('id', 'tab_Planner')
  _0x748f7f.setAttribute('class', 'memo-tab')
  _0xf3c610.parentNode.insertBefore(_0x748f7f, _0xf3c610.nextSibling)
  _0x5b4ca8()
}
function _0x44b38e() {
  if (_0x3bd829.focused) {
    return
  }
  $('.memo-tab').not('#tab_Planner').off('click')
  $('.memo-tab').not('#tab_Planner').click(_0x4e4f64)
  $('.memo_container').hide()
  _0x3bd829.focused = true
  $('#memoPlanner')[0].style.display = 'block'
  $('#tab_Planner')[0].innerHTML =
    '\n    <span class="memo-tab-label">\n        <strong>' +
    _0x589fad +
    '</strong>\n    </span>'
  $('#tab-bar > div').removeClass('memo-tab-selected')
  let _0x16829e = $('#tab_' + Memo.selectedTab)[0].innerText
  $('#tab_' + Memo.selectedTab + ' > .memo-tab-label')[0].innerHTML =
    '<a href="#" onclick="Memo.selectTab(' +
    Memo.selectedTab +
    '); return false">' +
    _0x16829e +
    '</a>'
  $('#tab_Planner')[0].class = 'memo-tab memo-tab-selected'
}
function _0x4e4f64() {
  if (!_0x3bd829.focused) {
    return
  }
  _0x3bd829.focused = false
  $('#memoPlanner')[0].style.display = 'none'
  $('#memo_' + Memo.selectedTab)[0].style.display = 'block'
  $('#tab_Planner')[0].class = 'memo-tab'
  _0x5b4ca8()
}
function _0x5b4ca8() {
  $('#tab_Planner')[0].innerHTML =
    '<span class="memo-tab-label">\n        <a id="plannerButton" href="javascript:void(0)">' +
    _0x589fad +
    '</a>\n        </span>'
  $('#plannerButton').off('click')
  $('#plannerButton').on('click', _0x44b38e)
}
function _0x5e1ebb() {
  return new Promise(function (_0x3bea46, _0x2215dc) {
    $.get('/interface.php?func=get_config')
      .done(function (_0x3026a9) {
        _0x3bea46(_0x2b8499(_0x3026a9).config)
      })
      .fail(() => _0x2215dc(_0x18b744('Error world settings')))
  })
}
function _0x59f973(_0x40b221) {
  const _0x5615de = []
  return (
    _0x5615de.push(parseInt(_0x40b221.slice(0, -2))),
    _0x5615de.push(parseInt(_0x40b221.slice(-3))),
    _0x5615de
  )
}
function _0x594864(_0x6be79b) {
  const _0x244c5c = _0x6be79b.match(
      /(\d{1,2}([:.])\d{1,2}([:.])\d{1,2}(([.])\d{3})?)/g
    ),
    _0x3d95e3 = _0x6be79b.match(/(\d{1,4}([\-\/])\d{1,2}([\-\/])\d{1,4})/g)
  let _0x97be7d = new Date(
    _0x244c5c[0] +
      ' ' +
      _0x3d95e3[0].replace(
        /(\d{1,2})([\/\-])(\d{1,2})([\/\-])(\d{4})/g,
        '$3$2$1$4$5'
      )
  )
  if (!_0x3ef16b) {
    if (_0x97be7d.getMilliseconds() >= 500) {
      _0x97be7d.setSeconds(_0x97be7d.getSeconds() + 1)
    }
    _0x97be7d.setMilliseconds(_0x4cd9b2.setMSWholePlane)
  }
  return _0x97be7d
}
function _0x5c0bad(_0x1d9cb6) {
  const _0x1417d8 = _0x1d9cb6.match(/\d+\|\d+/gi)
  return _0x1417d8 ? _0x1417d8 : null
}
function _0x496c84(_0x353778) {
  let _0x3f7f23 = _0x353778.match(/(?<=\[unit\])(.*?)(?=\[\/unit\])/gi)
  if (!_0x3f7f23) {
    $.each(_0xa74224, (_0x3ffa4c) => {
      if (_0x353778.toLowerCase().includes(_0x3ffa4c)) {
        _0x3f7f23 = _0x3ffa4c
      } else {
        if (
          _0x3ffa4c == 'snob' &&
          (_0x353778.toLowerCase().includes('noble') ||
            _0x353778.toLowerCase().includes('nobleman'))
        ) {
          _0x3f7f23 = _0x3ffa4c
        } else {
          if (
            _0x3ffa4c == 'catapult' &&
            _0x353778.toLowerCase().includes('cat')
          ) {
            _0x3f7f23 = _0x3ffa4c
          }
        }
      }
    })
  } else {
    _0x3f7f23 = _0x3f7f23[0]
  }
  return _0x3f7f23
}
function _0x271e46(_0x44a3bd) {
  if (_0x44a3bd.toLowerCase().includes('support')) {
    return 'Support'
  } else {
    return 'Attack'
  }
}
function _0x5e9388(_0x5b7063, _0x57a05b) {
  const _0x200409 = _0x59f973(_0x5b7063),
    _0x4cc9f6 = _0x59f973(_0x57a05b),
    _0x18a6a1 = Math.abs(_0x4cc9f6[0] - _0x200409[0]),
    _0x5df623 = Math.abs(_0x4cc9f6[1] - _0x200409[1])
  return Math.sqrt(_0x18a6a1 * _0x18a6a1 + _0x5df623 * _0x5df623)
}
function _0x22d03a(_0x22280a, _0x561c00) {
  let _0x4766d8 = _0x22280a
  if (!(_0x22280a instanceof Date)) {
    _0x4766d8 = new Date(_0x22280a.launchTime)
  }
  let _0x169b5c = _0x561c00
  if (!(_0x561c00 instanceof Date)) {
    _0x169b5c = new Date(_0x561c00.launchTime)
  }
  if (_0x4766d8.valueOf() > _0x169b5c.valueOf()) {
    return 1
  } else {
    if (_0x4766d8.valueOf() < _0x169b5c.valueOf()) {
      return -1
    } else {
      return 0
    }
  }
}
function _0x2be20a(_0x31a578, _0x540b87) {
  let _0x485ff5 = _0x31a578
  if (!(_0x31a578 instanceof Date)) {
    _0x485ff5 = new Date(_0x31a578.launchTime)
    if (_0x31a578.randomOffset > 0) {
      _0x485ff5 = new Date(_0x31a578.randomOffsetTime)
    }
    if (!_0x485ff5) {
      _0x485ff5 = new Date(_0x31a578.launchTime)
    }
  }
  let _0x47e313 = _0x540b87
  if (!(_0x540b87 instanceof Date)) {
    _0x47e313 = new Date(_0x540b87.launchTime)
    if (_0x540b87.randomOffset > 0) {
      _0x47e313 = new Date(_0x540b87.randomOffsetTime)
    }
    if (!_0x47e313) {
      _0x485ff5 = new Date(_0x31a578.launchTime)
    }
  }
  if (_0x485ff5.valueOf() > _0x47e313.valueOf()) {
    return 1
  } else {
    if (_0x485ff5.valueOf() < _0x47e313.valueOf()) {
      return -1
    } else {
      return 0
    }
  }
}
function _0x238fc0(_0x357a22) {
  let _0x33e11a = new Date(_0x357a22)
  return (
    _0x33e11a.setMinutes(
      _0x357a22.getMinutes() - _0x357a22.getTimezoneOffset()
    ),
    _0x33e11a.toISOString().slice(0, 23)
  )
}
function _0x46273c(_0x174edf) {
  let _0x2f187e = _0x174edf
  if (!(_0x174edf instanceof Date)) {
    _0x2f187e = new Date(_0x174edf)
  }
  const _0x5bcfe2 =
      _0xe0b52e(_0x2f187e.getHours(), 2) +
      ':' +
      _0xe0b52e(_0x2f187e.getMinutes(), 2) +
      ':' +
      _0xe0b52e(_0x2f187e.getSeconds(), 2) +
      ':' +
      _0xe0b52e(_0x2f187e.getMilliseconds(), 3),
    _0x3c82ac =
      _0x2f187e.getDate() +
      '/' +
      (_0x2f187e.getMonth() + 1) +
      '/' +
      _0x2f187e.getFullYear()
  return _0x5bcfe2 + ' ' + _0x3c82ac
}
function _0xe0b52e(_0x288a3d, _0x594668) {
  return _0x288a3d.toLocaleString('en-US', {
    minimumIntegerDigits: _0x594668,
    useGrouping: false,
  })
}
function _0x2531c8(_0x104a8d) {
  const _0x594f45 = _0x40a4ac(_0x104a8d)
  if (_0x104a8d.launchTime == undefined) {
    _0x104a8d.launchTime = new Date(_0x104a8d.arrivalTime.getTime() - _0x594f45)
  } else {
    _0x104a8d.arrivalTime = new Date(_0x104a8d.launchTime.getTime() + _0x594f45)
  }
  if (_0x104a8d.randomOffsetTime == undefined) {
    _0x104a8d.randomOffsetTime = _0x1e4fb5(
      _0x104a8d.launchTime.getTime(),
      _0x104a8d.launchTime.getTime() + _0x104a8d.randomOffset * 60000
    )
  }
}
function _0x40a4ac(_0x569292) {
  let _0x1b8bc5 = _0x2524d3.config.speed,
    _0x49ac57 = _0x2524d3.config.unit_speed,
    _0x48e838 = _0x5e9388(_0x569292.source, _0x569292.target),
    _0x272828 = 1 + _0x569292.sigil / 100
  if (_0x569292.type == 'Attack') {
    _0x272828 = 1
  }
  let _0x1c6179 = _0xa74224[_0x569292.slowestUnit],
    _0x19d30b =
      1000 *
      Math.round((_0x48e838 * (_0x1c6179 / _0x1b8bc5 / _0x49ac57)) / _0x272828)
  return _0x19d30b
}
function _0x1e4fb5(_0x50e9f5, _0x2451f5) {
  const _0xd8adb2 = _0x50e9f5,
    _0x9cb730 = _0x2451f5
  return new Date(_0xd8adb2 + Math.random() * (_0x9cb730 - _0xd8adb2))
}
function _0x33fa75(_0x4e93d3) {
  const _0x1b2aa5 = Math.ceil(_0x4e93d3 / _0x50eb81)
  let _0x2732e0 = ''
  for (let _0x3a2d5f = 1; _0x3a2d5f <= _0x1b2aa5; _0x3a2d5f++) {
    if (_0x719ef5 == _0x3a2d5f) {
      _0x2732e0 += '<strong> &gt;' + _0x3a2d5f + '&lt; </strong>'
    } else {
      _0x2732e0 +=
        '<a class="paged-nav-item" style="cursor: pointer;" id="page_command_' +
        _0x3a2d5f +
        '" data-id="' +
        _0x3a2d5f +
        '"> [' +
        _0x3a2d5f +
        '] </a>'
    }
  }
  if (_0x719ef5 == -1 && _0x1b2aa5 > 1) {
    _0x2732e0 += '<strong> &gt;All&lt; </strong>'
  } else {
    _0x1b2aa5 > 1 &&
      (_0x2732e0 +=
        '<a class="paged-nav-item" style="cursor: pointer;" id="page_command_all" data-id="-1"> [All] </a>')
  }
  _0x55e818(_0x2732e0, '#commands_table_pages', { callback: _0x49df22 })
}
function _0x49df22() {
  $('[id^=page_command_]').off('click')
  $('[id^=page_command_]').on('click', function () {
    _0x719ef5 = parseInt(this.dataset.id)
    _0x296787()
  })
}
function _0x20e910() {
  const _0x107221 = document.getElementById('commandsPerPageSetting').value
  if (_0x107221 != '') {
    _0x50eb81 = parseInt(_0x107221)
  }
  _0x4cd9b2.commandsPerPage = _0x50eb81
  _0x719ef5 = 1
}
function _0x448215() {
  const _0x11b805 = document.getElementById('openTabDelay').value
  let _0x5680ca = 0
  if (_0x11b805 != '') {
    _0x5680ca = parseInt(_0x11b805)
  }
  _0x4cd9b2.openTabDelay = _0x5680ca
}
function _0x5e0939() {
  const _0x744d08 = document.getElementById('timing_offset').value
  let _0x5d1c17 = 0
  if (_0x744d08 != '') {
    _0x5d1c17 = parseInt(_0x744d08)
  }
  _0x4cd9b2.timing_offset = _0x5d1c17
}
function _0x10b22b() {
  const _0x4990b4 = document.getElementById('toUse_percentage').value
  let _0x4fa078 = 100
  if (_0x4990b4 != '') {
    _0x4fa078 = parseInt(_0x4990b4)
  }
  _0x4cd9b2.toUse = _0x4fa078
}
function _0x3c7d7a() {
  const _0x34f677 = document.getElementById('sigil_percentage').value
  let _0x439354 = 0
  if (_0x34f677 != '') {
    _0x439354 = parseInt(_0x34f677)
  }
  _0x4cd9b2.sigil = _0x439354
}
function _0x27ac88() {
  const _0x55b646 = document.getElementById('leaveCatsAtHome').value
  let _0x4adbcd = 0
  if (_0x55b646 != '') {
    _0x4adbcd = parseInt(_0x55b646)
  }
  _0x4cd9b2.leaveCats = _0x4adbcd
}
function _0x167c01() {
  const _0x5194b1 = document.getElementById('leaveRamsAtHome').value
  let _0x329a01 = 0
  if (_0x5194b1 != '') {
    _0x329a01 = parseInt(_0x5194b1)
  }
  _0x4cd9b2.leaveRams = _0x329a01
}
function _0x1a9a93() {
  _0x50eb81 = _0x4cd9b2.commandsPerPage
}
function _0x522da4() {
  _0x207bcc()
  _0x16bbb1('#menuNextCommandInfo', {
    callback: (_0x1f84d0) => {
      if (_0x1f84d0 != 'end') {
        document.title = 'Next command:  ' + _0x1f84d0
      } else {
        if (!_0x4e2589()) {
          document.title = 'Commands Overview'
        } else {
          document.title = 'Next command:  00:00:00'
        }
      }
      _0x33817f()
      _0x207bcc()
    },
    htmlWrapper: (_0xe4ad28) => {
      if (_0x4e2589()) {
        if (_0xe4ad28 != 'end') {
          return (
            '<span style="color: darkblue;">Next command to ' +
            _0x4e2589().target +
            ' in ' +
            _0xe4ad28 +
            '</span>'
          )
        }
        return (
          '<span style="color: darkblue;">Next command to ' +
          _0x4e2589().target +
          ' in 00:00:00 </span>'
        )
      }
      return '<span style="color: red;">All of your commands are in the past!</span>'
    },
    refreshTime: 500,
  })
}
function _0x33817f() {
  const _0x25e355 = document.getElementById('menuCommandsPlannedCounter')
  let _0x2b52c5
  const _0xc292be = Object.keys(_0x5d8c50).length
  if (_0xc292be > 0) {
    _0x2b52c5 = _0xc292be + ' commands planned'
    _0x25e355.style.color = 'darkblue'
  } else {
    _0x2b52c5 = 'No commands planned'
    _0x25e355.style.color = 'red'
  }
  _0x25e355.innerText = _0x2b52c5
}
function _0x207bcc() {
  let _0x448300 = _0x4e2589()
  $('#menuNextCommandInfo')[0].dataset.endtime = _0x448300
    ? new Date(_0x448300.launchTime).getTime()
    : Timing.getCurrentServerTime() - _0x42729e
  $('#menuNextCommandInfo')[0].dataset.format = '%hh%:%mm%:%ss%'
}
function _0x494ac4() {
  _0x4cd9b2.currentAttackTemplate = $('#selectAttackTemplate')[0].value
  _0x4cd9b2.currentSupportTemplate = $('#selectSupportTemplate')[0].value
}
function _0x5d701c() {
  _0x494ac4()
  _0x20e910()
  _0x5e0939()
  _0x448215()
  _0x3c7d7a()
  _0x10b22b()
  _0x27ac88()
  _0x167c01()
  _0x54486b()
  _0x56d785()
  _0x1e2d30()
}
function _0x2bd495() {
  !_0x3bd829.settings &&
    ((_0x3bd829.settings = {}),
    (_0x3bd829.settings.currentAttackTemplate = _0x1754fa.id),
    (_0x3bd829.settings.currentSupportTemplate = _0x36c46c.id),
    (_0x3bd829.settings.timing_offset = 0),
    (_0x3bd829.settings.openTabDelay = 60),
    (_0x3bd829.settings.setMSWholePlane = 0),
    (_0x3bd829.settings.toUse = 100),
    (_0x3bd829.settings.sigil = 0),
    (_0x3bd829.settings.leaveCats = 0),
    (_0x3bd829.settings.leaveRams = 0),
    (_0x3bd829.settings.launchTime_offset = 0),
    (_0x3bd829.settings.autoFillNt = true),
    (_0x3bd829.settings.autoSendInTime = true),
    (_0x3bd829.settings.autoSendNobles = true),
    (_0x3bd829.settings.readMSFromPlan = false),
    (_0x3bd829.settings.running = false),
    (_0x3bd829.settings.ntTemplates = _0x3e53dd))
  _0xf6989a(_0x4cd9b2, _0x3bd829.settings)
  if (!_0x2d9154[_0x4cd9b2.currentAttackTemplate]) {
    _0x4cd9b2.currentAttackTemplate = _0x1754fa.id
  }
  if (!_0x2d9154[_0x4cd9b2.currentSupportTemplate]) {
    _0x4cd9b2.currentSupportTemplate = _0x36c46c.id
  }
  if (_0x4cd9b2.commandsPerPage != null) {
    _0x1a9a93()
  }
  if (!_0x4cd9b2.openTabDelay) {
    _0x4cd9b2.openTabDelay = 60
  }
  if (!_0x4cd9b2.setMSWholePlane) {
    _0x4cd9b2.setMSWholePlane = 0
  }
  if (!_0x4cd9b2.timing_offset) {
    _0x4cd9b2.timing_offset = 0
  }
  if (!_0x4cd9b2.toUse) {
    _0x4cd9b2.toUse = 100
  }
  if (!_0x4cd9b2.sigil) {
    _0x4cd9b2.sigil = 0
  }
  if (!_0x4cd9b2.leaveCats) {
    _0x4cd9b2.leaveCats = 0
  }
  if (!_0x4cd9b2.leaveRams) {
    _0x4cd9b2.leaveRams = 0
  }
  if (!_0x4cd9b2.launchTime_offset) {
    _0x4cd9b2.launchTime_offset = 0
  }
  if (!_0x4cd9b2.autoFillNt) {
    _0x4cd9b2.autoFillNt = true
  }
  if (!_0x4cd9b2.autoSendInTime) {
    _0x4cd9b2.autoSendInTime = true
  }
  if (!_0x4cd9b2.autoSendNobles) {
    _0x4cd9b2.autoSendNobles = true
  }
  if (!_0x4cd9b2.readMSFromPlan) {
    _0x4cd9b2.readMSFromPlan = false
  }
  if (!_0x4cd9b2.running) {
    _0x4cd9b2.running = false
  }
  if (!_0x4cd9b2.ntTemplates) {
    _0x4cd9b2.ntTemplates = _0x3e53dd
  }
  _0x310683()
}
function _0x56d785() {
  _0x3bd829.commands = _0x5d8c50
  _0x4efec9(_0x242b67, _0x3bd829)
}
function _0x2035ae() {
  _0x56d785()
  _0x1a9a93()
  document.getElementById('commandsPerPageSetting').value = _0x50eb81
  _0x1e2d30()
}
function _0xaf5707() {
  const _0x237951 = _0x3a8173(_0x242b67)
  Object.assign(_0x3bd829, _0x237951)
  _0x2bd495()
  _0x774eae()
  _0x3d2c8c()
  _0x3bd829.settings = _0x4cd9b2
  _0x3bd829.commands = _0x5d8c50
}
function _0x5cd0f7() {
  const _0x36afab = _0x3a8173(_0x242b67)
  _0x3bd829.commands = _0x36afab.commands
  _0x774eae()
  _0x5cf163(_0x5d8c50)
}
function _0x3a8173(_0x254ffe) {
  const _0x20aced = localStorage.getItem(_0x254ffe)
  if (_0x20aced != undefined && _0x20aced != '') {
    return JSON.parse(_0x20aced)
  }
  return null
}
function _0x4efec9(_0x1f7369, _0x1d140b) {
  if (typeof _0x1d140b != 'string') {
    localStorage.setItem(_0x1f7369, JSON.stringify(_0x1d140b))
  } else {
    localStorage.setItem(_0x1f7369, _0x1d140b)
  }
}
function _0x37880e() {
  document.getElementById('importExportInput').style.display = 'initial'
  document.getElementById('importExportInput').value = _0x4db76d(
    JSON.stringify(_0x3bd829)
  )
}
function _0xb446b3() {
  _0x6db609(
    _0x4db76d(JSON.stringify(_0x3bd829)),
    'commandsOverviewData.txt',
    'text/plain'
  )
}
function _0x18cb71() {
  const _0x4e8e44 = document.getElementById('importExportInput').value,
    _0x3696a2 = JSON.parse(_0x2a5c0e(_0x4e8e44))
  if (_0x3696a2.commands) {
    _0xf6989a(_0x5d8c50, _0x3696a2.commands)
  }
  if (_0x3696a2.settings) {
    _0xf6989a(_0x4cd9b2, _0x3696a2.settings)
  }
  if (_0x3696a2.commandIdCounter) {
    _0x3bd829.commandIdCounter = _0x3696a2.commandIdCounter
  }
  _0x42c0b0()
  _0x2035ae()
}
function _0x5b9bb8() {
  document.getElementById('importExportInput').style.display = 'initial'
  document.getElementById('importDataButton').style.display = 'initial'
  document.getElementById('cancelImportDataButton').style.display = 'initial'
  document.getElementById('startImportDataButton').style.display = 'none'
  document.getElementById('importExportInput').value = ''
  document.getElementById('exportDataButton').style.display = 'none'
  document.getElementById('exportDataToFileButton').style.display = 'none'
}
function _0x42c0b0() {
  document.getElementById('importExportInput').style.display = 'none'
  document.getElementById('importDataButton').style.display = 'none'
  document.getElementById('cancelImportDataButton').style.display = 'none'
  document.getElementById('startImportDataButton').style.display = 'initial'
  document.getElementById('exportDataButton').style.display = 'initial'
  document.getElementById('exportDataToFileButton').style.display = 'initial'
}
function _0x2b2ea5() {
  let _0x1c1d38 = JSON.parse(
    window.sessionStorage.getItem('commandsOverviewCommandData')
  )
  if (!_0x1c1d38) {
    console.log('No attack programmed!')
    return
  }
  if (_0x518251() && _0x56c3ec && _0x3f3b4e.as) {
    if (
      !document.getElementById('unit_input_spear') &&
      !$('#' + _0x746e1a.snipeScript.sendButton).is(':visible')
    ) {
      _0x18b744(_0x4f22a3)
    }
    if (document.getElementsByClassName('error_box')[0] != undefined) {
      let _0x13957e = document.getElementsByClassName('error_box')
      _0x13957e != null &&
        ((_0x5d8c50[_0x1c1d38.id].done = true), _0x56d785(), window.close())
    }
    if (JSON.parse(window.sessionStorage.getItem('tabDone'))) {
      _0x5b2cbc()
      return
    }
  }
  if (_0x1c1d38.done) {
    console.log('Attack already sent!')
    return
  }
  let _0x2e793b = _0x3a8173(_0x2cdf50)
  if (!_0x2e793b && !_0x4198e8) {
    _0x18b744('Snipe/Schedule script is not configured!')
    return
  }
  if ($('#' + _0x746e1a.snipeScript.sendButton).length > 0) {
    _0x5d8c50[_0x1c1d38.id].done = true
    _0x56d785()
    let _0x1ade24 = new Date(_0x1c1d38.launchTime).getTime()
    if (_0x1c1d38.randomOffset > 0) {
      _0x1ade24 = new Date(_0x1c1d38.randomOffsetTime).getTime()
    }
    let _0x4e5ace = _0x1ade24 % 1000,
      _0x33f53c = function (_0x31a6ea, _0x4dbd6d) {
        return (
          (_0x31a6ea = _0x31a6ea + ''),
          _0x31a6ea.length >= _0x4dbd6d
            ? _0x31a6ea
            : new Array(_0x4dbd6d - _0x31a6ea.length + 1).join('0') + _0x31a6ea
        )
      }
    _0x4e5ace = _0x33f53c(_0x4e5ace.toString(), 3)
    let _0x2599da =
      '<tr>\n            <td>Command <b>' +
      _0x1c1d38.name +
      '</b> arrival:</td>\n            <td>' +
      _0x46273c(new Date(_0x1c1d38.arrivalTime)).split(' ')[0] +
      ' <b id="sendTimer" class="overviewsTimer" data-endtime="' +
      _0x1ade24 +
      '" data-format="%hh%:%mm%:%ss%:%msmsms%"></b>\n        </tr>'
    $('.vis > tbody:eq(0)').append(_0x2599da)
    _0x16bbb1('#sendTimer', {
      callback: (_0x3aa4dc) => {
        if (_0x3aa4dc != 'end') {
          document.title = _0x442943.world + ' - ' + _0x3aa4dc
        } else {
          document.title = _0x442943.world + ' - ' + 'Command overdue'
        }
      },
      htmlWrapper: (_0x3153ff) => {
        if (_0x3153ff != 'end') {
          return '(<span style="color: green;">' + _0x3153ff + '</span>)'
        } else {
          return '(<span style="color: red;">Command overdue</span>)'
        }
      },
      refreshTime: 100,
    })
    if (_0x4cd9b2.running && _0x56c3ec) {
      if (
        !_0x3e53dd[_0x1c1d38.ntTemplate].onlyNobles ||
        (_0x32c2b0 && _0x52da84 && _0x1c1d38.slowestUnit == 'snob')
      ) {
        _0x26cf61(_0x1c1d38)
      }
      setTimeout(function () {
        if (_0x1c1d38.autoSend) {
          _0x4b6b96(_0x1c1d38)
        }
      }, 3000)
    }
  } else {
    _0x25c342(
      _0x1c1d38,
      _0x1c1d38.units,
      _0x1c1d38.slowestUnit,
      _0x1c1d38.toUse,
      _0x1c1d38.ntTemplate
    )
    if (!_0x4cd9b2.autoSendNobles && _0x1c1d38.slowestUnit == 'snob') {
      document.getElementById(
        'command-form-warning'
      ).previousElementSibling.innerHTML +=
        '<span style="color: red"> (Auto send nobles is turned off)</span> '
      return
    } else {
      if (!_0x1c1d38.autoSend) {
        document.getElementById(
          'command-form-warning'
        ).previousElementSibling.innerHTML +=
          '<span style="color: red"> (This command is excluded from auto send)</span> '
        return
      }
    }
    if (_0x1c1d38.type == 'Attack') {
      $('#target_support')[0].style.display = 'none'
      if (_0x4cd9b2.running && _0x56c3ec) {
        setTimeout(function () {
          $('#target_attack')[0].click()
        }, 1000)
      }
    } else {
      _0x1c1d38.type == 'Support' &&
        (($('#target_attack')[0].style.display = 'none'),
        _0x4cd9b2.running &&
          _0x56c3ec &&
          setTimeout(function () {
            $('#target_support')[0].click()
          }, 1000))
    }
  }
}
function _0x4b6b96(_0x558d56) {
  if (!_0x518251() || !_0x56c3ec || !_0x3f3b4e.as || window.console.ASAllowed) {
    return
  }
  let _0x17d8c6 = _0x3a8173(_0x2cdf50)
  if (_0x4198e8) {
    let _0x1d7c01 = function (_0xacaca8) {
        const _0xe40319 =
            _0xacaca8 - (Timing.getCurrentServerTime() - _0x42729e),
          _0x3d74ac = performance.now()
        while (performance.now() - _0x3d74ac < _0xe40319) {}
        $('#' + _0x746e1a.snipeScript.sendButton)[0].click()
      },
      _0x358654 = new Date(_0x558d56.launchTime)
    if (_0x558d56.randomOffset > 0) {
      _0x358654 = new Date(_0x558d56.randomOffsetTime)
    }
    window.sessionStorage.setItem('tabDone', true)
    console.log(_0x358654.getTime())
    console.log(
      'Timeout actual send',
      _0x358654.getTime() -
        (Timing.getCurrentServerTime() - _0x42729e) -
        _0x119478 * 1000
    )
    setTimeout(
      () => _0x1d7c01(_0x358654.getTime() + _0x4cd9b2.timing_offset),
      _0x358654.getTime() -
        (Timing.getCurrentServerTime() - _0x42729e) -
        _0x119478 * 1000
    )
  } else {
    _0x360dc1(
      _0x17d8c6.confirmButton,
      function () {
        setTimeout(function () {
          let _0x2db093 = new Date().getTimezoneOffset() * 60000,
            _0x5cd8d3 = new Date(_0x558d56.arrivalTime)
          _0x5cd8d3 = new Date(_0x5cd8d3 - _0x2db093)
          let _0x56dd4f = _0x5cd8d3.toISOString().slice(0, -1)
          document.getElementById(_0x17d8c6.dateInput).value = _0x56dd4f
          document.getElementById(_0x17d8c6.offsetInput).value =
            _0x4cd9b2.timing_offset
          window.sessionStorage.setItem('tabDone', true)
        }, 1000)
        if (_0x558d56.autoSend) {
          setTimeout(function () {
            document.getElementById(_0x17d8c6.confirmButton).click()
          }, 2000)
        }
      },
      500,
      9000
    )
  }
}
function _0x25c342(_0x53a778, _0x1d3f59, _0x5e4e85, _0x29bbde, _0x1d1044) {
  if (!_0x29bbde) {
    _0x29bbde = 100
  }
  _0x29bbde = parseInt(_0x29bbde)
  if (
    _0x3e53dd[_0x1d1044] &&
    _0x3e53dd[_0x1d1044].id.includes('NOBLE_RED') &&
    _0x4cd9b2.autoFillNt &&
    _0x5e4e85 == 'snob' &&
    _0x56c3ec
  ) {
    $.each(_0x1d3f59, (_0x350db2, _0x51af49) => {
      if (_0x442943.units.includes(_0x350db2)) {
        if (_0x3e53dd[_0x1d1044].id == 'NT_1ST_NOBLE_RED') {
          let _0x8107a = $('#unit_input_' + _0x350db2)[0].dataset.allCount,
            _0x3e2141 =
              _0x51af49 == -1 ? _0x8107a : Math.min(_0x51af49, _0x8107a)
          _0x3e2141 = Math.round(
            Math.min(_0x3e2141, (_0x29bbde * _0x8107a) / 100)
          )
          $('#unit_input_' + _0x350db2)[0].value = _0x3e2141
          if (_0x350db2 == 'axe' && _0x3e2141 > 100) {
            $('#unit_input_' + _0x350db2)[0].value = _0x3e2141 - 100
          }
        } else {
          let _0x55caee = $('#unit_input_' + _0x350db2)[0].dataset.allCount,
            _0x48838c =
              _0x51af49 == -1 ? _0x55caee : Math.min(_0x51af49, _0x55caee)
          _0x48838c = Math.round(
            Math.min(_0x48838c, (_0x29bbde * _0x55caee) / 100)
          )
          $('#unit_input_' + _0x350db2)[0].value = 0
          if (_0x350db2 == 'axe' && _0x48838c > 100) {
            $('#unit_input_' + _0x350db2)[0].value = 34
          } else {
            if (_0x350db2 == 'snob') {
              $('#unit_input_' + _0x350db2)[0].value = 1
            }
          }
        }
      }
    })
  } else {
    if (
      _0x5e4e85 == 'snob' &&
      _0x4cd9b2.autoFillNt &&
      _0x56c3ec &&
      _0x3e53dd[_0x1d1044].brownNoble
    ) {
      $('#unit_input_axe')[0].value = 1000
      $('#unit_input_snob')[0].value = 1
    } else {
      $.each(_0x1d3f59, (_0x26ab27, _0x434493) => {
        if (_0x442943.units.includes(_0x26ab27)) {
          let _0x414115 = $('#unit_input_' + _0x26ab27)[0].dataset.allCount,
            _0x4034db =
              _0x434493 == -1 ? _0x414115 : Math.min(_0x434493, _0x414115)
          _0x4034db = Math.round(
            Math.min(_0x4034db, (_0x29bbde * _0x414115) / 100)
          )
          if (
            (_0x26ab27 == 'catapult' || _0x26ab27 == 'ram') &&
            (_0x3e53dd[_0x1d1044].name == '2 Nobles Selected/Rest' ||
              _0x3e53dd[_0x1d1044].name == '4 Nobles Selected/Rest') &&
            _0x4cd9b2.autoFillNt
          ) {
            _0x4034db = _0x414115
          }
          if (_0x26ab27 == 'catapult' && _0x434493 == -1) {
            _0x4034db -= _0x53a778.leaveCats
            if (_0x4034db < 0) {
              _0x4034db = 0
            }
          } else {
            if (_0x26ab27 == 'ram' && _0x434493 == -1) {
              _0x4034db -= _0x53a778.leaveRams
              if (_0x4034db < 0) {
                _0x4034db = 0
              }
            }
          }
          $('#unit_input_' + _0x26ab27)[0].value = _0x4034db
        }
      })
    }
  }
}
function _0x16031b() {
  let _0x5c60a1 = $('.vis > tbody > tr:nth-child(3) > td:nth-child(2) > a')[0]
  if (_0x5c60a1 && _0x5c60a1.href) {
    return !_0x5c60a1.href.includes('info_player')
  } else {
    return true
  }
}
function _0x1cf48c(_0x56fb6a) {
  return !_0xcba015[_0x56fb6a]
}
function _0x18b744(_0x24bdc0) {
  UI.ErrorMessage(_0x24bdc0)
}
function _0x4ac7eb(_0x993972) {
  UI.SuccessMessage(_0x993972)
}
function _0x415095() {
  _0x508a3a()
}
function _0x566e22() {
  let _0x3cdfb9 =
    '<div class="popup_box_container" id="helpConfig_popup" style="display:none;">\n        <div class="popup_box show" style="width: 600px;">\n            <div class="popup_box_content">\n                <a class="popup_box_close tooltip-delayed" id="helpPopup_cross" href="javascript:void(0)"> </a>\n                <h1 style="text-align: center; color: purple">Add Plan Help</h1>\n                <div>\n                    <h2>How to use:</h2>\n                    For now there are 2 tested planners that work with our parse system:\n                        <p></p>\n                        Â\xB7 Fodox Tribal Wars Utility\n                        <br>\n                        Â\xB7 TW AAP\n                    <p></p>\n                    <h3>Fodox Tribal Wars Utility</h3>\n                    In this tool, after you plan, you shall use "Show only essential columns", the other settings it is up to you since the result is the same.\n                    <p></p>\n                    <img src="https://i.postimg.cc/ydfh1Gzm/transferir-1.png">\n                    <p></p>\n                    After clicking "Plan" you can copy either "Plain Text" or "BB-code" text box.\n                    <p></p>\n                    <img src="https://i.postimg.cc/zGnnbvrX/Webp-net-resizeimage-1.png">\n                    <p></p>\n                    Now that you have copied either of the plans you can paste it in this script text box and click "Add plan".\n                    <p></p>\n                    <h3>TW AAP</h3>\n                    Feel free to use TW AAP without restrictions, both "export" and "simple export" work so you can just copy paste one of them into our script.\n                    <p></p>\n                    <h2>Any other planner</h2>\n                    <div style="font-size: 13px">\n                        You can use any other planner if the lines of the plan respects the following rules:\n                        <p></p>\n                        Â\xB7 Source coordinate before Target coordinate\n                        <br>\n                        Â\xB7 1 and only 1 date (The planner assumes this is the launch time of the command)\n                        <br>\n                        Â\xB7 The line needs to have the slowest unit written (spear,sword,...,ram,snob)\n                        <br>\n                        Â\xB7 The line can define the type of the command ("Attack","Support"), otherwise it is considered that the command is an "Attack"\n                    </div>\n                </div>\n                <br>\n                <br>\n                <div>\n                    <h5 style="color: darkblue">General information</h5>\n                    <div>\n                        Script made by Im Kumin and fmthemaster.\n                        <p></p>\n                        If you have any question feel free to join the discord: <a style="color: -webkit-link" href="https://discord.gg/e2ZCtKURu8">Discord</a> (<- click here)\n                        <p></p>\n                    </div>\n                </div>\n            </div>        </div>\n    </div>\n    <div class="fader" id="helpPopup_fader" style="display:none;"></div>'
  $('body').append(_0x3cdfb9)
  $('#helpPopup_fader').off('click')
  $('#helpPopup_cross').off('click')
  $('#helpPopup_fader').on('click', function () {
    _0x2de61e()
  })
  $('#helpPopup_cross').on('click', function () {
    _0x2de61e()
  })
  _0x2de61e()
}
function _0x508a3a() {
  $('#helpConfig_popup')[0].style.display = 'block'
  $('#helpPopup_fader')[0].style.display = 'block'
}
function _0x2de61e() {
  $('#helpConfig_popup')[0].style.display = 'none'
  $('#helpPopup_fader')[0].style.display = 'none'
}
function _0x1830b4() {
  _0x81dbd1 = new Date().getTime()
  const _0x1d0855 = document.getElementById('tab-bar'),
    _0x505b8e = document.createElement('div')
  _0x505b8e.setAttribute('id', 'memoPlanner')
  _0x505b8e.setAttribute('class', 'memo_container')
  _0x1d0855.parentNode.insertBefore(
    _0x505b8e,
    _0x1d0855.nextSibling.nextSibling.nextSibling.nextSibling
  )
  _0x44b38e()
  let _0x54936c =
    '\n    <div id="loaderDiv" class="memo_script" style="vertical-align: middle; clear: both;width: 400px">\n        <div class="forum-content" style="grid-template-columns: 4fr 4fr;grid-gap: 10px;padding: 0;">\n            <table class="vis nowrap" style="width: 100%;">\n                <thead>\n                    <tr>\n                        <th colspan="3"><span class="column-title" style="font-size:16px">Loading screen</span></th>\n                    </tr>\n                </thead>\n                <tbody id="loadResourceDiv">\n                </tbody>\n            </table>\n        </div>\n    </div>'
  _0x55e818(_0x54936c, '#memoPlanner', { callback: _0x4983d1 })
}
function _0x4983d1() {}
function _0x26d2fd() {
  document.getElementById('commandSenderDiv').style.display = 'block'
  _0x81dbd1 = new Date().getTime() - _0x81dbd1
  _0xb34eac &&
    (console.log(_0xd22cf8),
    console.log('Total time loading: ' + _0x81dbd1 + ' ms'))
}
async function _0x17e8bb(_0x11bd3c, _0xad5b2f, _0x122b17) {
  const _0x35f037 = new Date().getTime(),
    _0x15b7f3 = {
      description: _0xad5b2f,
      function: _0x11bd3c,
      async: _0x122b17,
    }
  _0xd22cf8.push(_0x15b7f3)
  const _0x2004f1 = 'loaderSlot' + (_0xd22cf8.length - 1)
  document.getElementById('loadResourceDiv').innerHTML +=
    '\n        <tr>\n            <td id="' +
    _0x2004f1 +
    '" style="padding-left: 1em;height: 30px;">\n                <a class="loader" style="float: left"></a>\n                <a href="javascript:void(0)" style="display: flex;justify-content: center;align-items: center;color:red">' +
    _0xad5b2f +
    '</a>\n            </td>\n        </tr>'
  if (_0x122b17) {
    _0x11bd3c()
  } else {
    await _0x11bd3c()
  }
  if (document.getElementById(_0x2004f1) != null) {
    document.getElementById(_0x2004f1).childNodes[1].classList.remove('loader')
    document.getElementById(_0x2004f1).childNodes[3].style.color = 'green'
  }
  const _0x56e74b = new Date().getTime()
  _0x15b7f3.elapsedTime = _0x56e74b - _0x35f037
}
function _0x55e818(
  _0x15ec5f,
  _0x5a2fb9,
  {
    wrapper: wrapper = (_0x2469e5, _0x2998eb) =>
      (_0x2998eb.innerHTML = _0x2469e5),
    callback: callback = () => {
      return
    },
  }
) {
  wrapper(_0x15ec5f, $(_0x5a2fb9)[0])
  callback()
}
function _0xf6989a(_0x1b4394, _0x3629c9) {
  Object.keys(_0x1b4394).forEach(function (_0x41b8e0) {
    delete _0x1b4394[_0x41b8e0]
  })
  Object.assign(_0x1b4394, _0x3629c9)
}
function _0x2b8499(_0x45c63e) {
  try {
    let _0x4bc980 = {
      _0x40fe31: _0x2b8499(_0x593da5),
      _0x40fe31: [],
    }
    if (_0x45c63e.children.length > 0) {
      for (
        let _0xfa69b0 = 0;
        _0xfa69b0 < _0x45c63e.children.length;
        _0xfa69b0++
      ) {
        const _0x593da5 = _0x45c63e.children.item(_0xfa69b0),
          _0x40fe31 = _0x593da5.nodeName
        if (typeof _0x4bc980[_0x40fe31] == 'undefined') {
        } else {
          if (typeof _0x4bc980[_0x40fe31].push == 'undefined') {
            const _0x412901 = _0x4bc980[_0x40fe31]
            _0x4bc980[_0x40fe31].push(_0x412901)
          }
          _0x4bc980[_0x40fe31].push(_0x2b8499(_0x593da5))
        }
      }
    } else {
      _0x4bc980 = _0x45c63e.textContent
    }
    return _0x4bc980
  } catch (_0x2aaaac) {
    console.log(_0x2aaaac.message)
  }
}
function _0x4db76d(_0xacb077) {
  let _0x5bcd3e
  if (typeof _0xacb077 == 'object') {
    _0x5bcd3e = JSON.stringify(_0xacb077)
  } else {
    if (typeof _0xacb077 == 'string') {
      _0x5bcd3e = _0xacb077
    } else {
      return ''
    }
  }
  return encodeURI(_0x5bcd3e)
}
function _0x2a5c0e(_0x1baa2a) {
  return decodeURI(_0x1baa2a)
}
function _0x13cc43(_0x247977) {
  return Object.assign({}, ..._0x247977)
}
function _0x6db609(_0x2a658e, _0x10d36a, _0x136ee3) {
  const _0x8992a2 = new Blob([_0x2a658e], { type: _0x136ee3 })
  if (window.navigator.msSaveOrOpenBlob) {
    window.navigator.msSaveOrOpenBlob(_0x8992a2, _0x10d36a)
  } else {
    const _0x46f368 = document.createElement('a'),
      _0x3076f5 = URL.createObjectURL(_0x8992a2)
    _0x46f368.href = _0x3076f5
    _0x46f368.download = _0x10d36a
    document.body.appendChild(_0x46f368)
    _0x46f368.click()
    setTimeout(function () {
      document.body.removeChild(_0x46f368)
      window.URL.revokeObjectURL(_0x3076f5)
    }, 0)
  }
}
function _0x46ed78() {
  const _0x1dd95f = 'https://' + _0x51c9f7 + '/map/village.txt'
  let _0x124024 = localStorage.getItem(
    'globalVillageData' + _0x51c9f7.split('.')[0]
  )
  const _0x272db8 = new Date(),
    _0x3ecc1b = _0x457535 * 60 * 60 * 1000
  if (_0x124024) {
    _0x124024 = JSON.parse(_0x124024)
    if (_0x124024.lastUpdate) {
      if (
        new Date(_0x124024.lastUpdate).getTime() + _0x3ecc1b >
        _0x272db8.getTime()
      ) {
        _0xcba015 = _0x124024.villageData
        return
      }
    }
  }
  $.get(_0x1dd95f, function (_0x50d08d) {
    const _0x4ff679 = _0x50d08d.split('\n')
    for (let _0x19bc37 = 0; _0x19bc37 < _0x4ff679.length; _0x19bc37++) {
      const _0x517978 = _0x4ff679[_0x19bc37].split(','),
        _0x18513a = _0x517978[0],
        _0x5669c6 = _0x517978[2],
        _0x24920f = _0x517978[3],
        _0x5b8e85 = _0x517978[4]
      _0xcba015[_0x5669c6 + '|' + _0x24920f] = {
        id: _0x18513a,
        player_id: _0x5b8e85,
      }
    }
  }).then(function () {
    const _0xd874e7 = {
      villageData: _0xcba015,
      lastUpdate: _0x272db8,
    }
    localStorage.setItem(
      'globalVillageData' + _0x51c9f7.split('.')[0],
      JSON.stringify(_0xd874e7)
    )
  })
}
function _0x4ef69b() {
  let _0x3334c4 = localStorage.getItem('unitsData' + _0x51c9f7.split('.')[0])
  const _0x3c9efd = new Date(),
    _0x585a61 = _0x457535 * 60 * 60 * 1000
  if (_0x3334c4) {
    _0x3334c4 = JSON.parse(_0x3334c4)
    if (_0x3334c4.lastUpdate) {
      if (
        new Date(_0x3334c4.lastUpdate).getTime() + _0x585a61 >
        _0x3c9efd.getTime()
      ) {
        return _0x3334c4.unitsData
      }
    }
  }
  return new Promise(function (_0x50a5ef, _0x43777d) {
    let _0x936419 = {}
    $.get('/interface.php?func=get_unit_info')
      .done(function (_0x1ea3d2) {
        $(_0x1ea3d2)
          .find('config')
          .children()
          .each((_0xc735c0, _0x1755b9) => {
            _0x936419[$(_0x1755b9).prop('nodeName')] = {
              speed: $(_0x1755b9).find('speed').text(),
            }
          })
        if (_0x936419.militia) {
          delete _0x936419.militia
        }
        const _0x7961ab = {
          unitsData: _0x936419,
          lastUpdate: _0x3c9efd,
        }
        localStorage.setItem(
          'unitsData' + _0x51c9f7.split('.')[0],
          JSON.stringify(_0x7961ab)
        )
        _0x50a5ef(_0x936419)
      })
      .fail(() => _0x43777d(_0x18b744('Error units data')))
  })
}
function _0x41a49b() {
  $('.maincell').css('width', '1200px')
  $("[class^='bg_left']").css('width', '24px')
  $("[class^='bg_right']").css('width', '0px')
  $('#SkyScraperAdCell').css(
    'background',
    "transparent url('graphic/index/mainborder-right.png') scroll top repeat-y"
  )
  $('.bg_bottomright').css(
    'background',
    "transparent url('graphic/index/mainborder-corner-right.png') scroll top no-repeat"
  )
}
function _0x27a6e2() {
  document.getElementById('side-notification-container').innerHTML = ''
}
function _0x360dc1(_0x2f8ec6, _0x5ad027, _0x1435aa, _0x12fce1) {
  let _0x1347ed = Date.now()
  ;(function _0x3b7e38() {
    if (
      document.getElementById(_0x2f8ec6) != null &&
      $('#' + _0x2f8ec6).length > 0
    ) {
      _0x5ad027()
      return
    } else {
      setTimeout(function () {
        if (_0x12fce1 && Date.now() - _0x1347ed > _0x12fce1) {
          return
        }
        _0x3b7e38()
      }, _0x1435aa)
    }
  })()
}
function _0x16bbb1(
  _0x31e34c,
  {
    htmlWrapper: htmlWrapper = (_0x20bb95) => _0x20bb95,
    callback: callback = _0x4983d1,
    refreshTime: refreshTime = 200,
  }
) {
  setInterval(() => {
    $(_0x31e34c).html(function (_0x879b53, _0x45b7ba) {
      if (!this.classList.contains('overviewsTimer')) {
        return _0x45b7ba
      }
      let _0x129a67 = this.dataset.format
      if (!_0x129a67) {
        _0x129a67 = '%hh%:%mm%:%ss%'
      }
      let _0x3f1de5 = _0x1aede8(
        this.dataset.randomtime,
        parseInt(this.dataset.endtime),
        Timing.getCurrentServerTime() - _0x42729e,
        _0x129a67
      )
      return callback(_0x3f1de5), htmlWrapper(_0x3f1de5)
    })
  }, refreshTime)
}
function _0x1aede8(
  _0xc8f953,
  _0x2d53d7,
  _0x2e2512,
  _0x47b778 = '%hh%:%mm%:%ss%:%msmsms%',
  _0x13ae69 = 'end'
) {
  let _0x1b65fe = _0x2d53d7,
    _0x13a789 = _0x2e2512,
    _0x3c5d31 = _0xc8f953
  if (_0xc8f953 && !(_0xc8f953 instanceof Date)) {
    _0x3c5d31 = new Date(parseInt(_0xc8f953))
  }
  if (!(_0x2d53d7 instanceof Date)) {
    _0x1b65fe = new Date(_0x2d53d7)
  }
  if (!(_0x2d53d7 instanceof Date)) {
    _0x13a789 = new Date(_0x2e2512)
  }
  let _0x34d3d9 = (_0x3160e8, _0x488c4d) =>
    _0x3160e8 < 10 ** _0x488c4d
      ? ('' + '0'.repeat(_0x488c4d) + _0x3160e8).slice(-_0x488c4d)
      : '' + _0x3160e8
  const _0xb44be = _0x1b65fe - _0x13a789
  if (_0xb44be < 0) {
    if (_0x3c5d31 && _0x3c5d31 - _0x13a789 >= 0) {
      return 'OnHold'
    }
    return _0x13ae69
  }
  const _0x49ce1f = 60000,
    _0x29cd93 = 60 * _0x49ce1f,
    _0x17ebe6 = 24 * _0x29cd93,
    _0x1c94a1 = 30 * _0x17ebe6
  let _0xf4f689 = Math.floor(_0xb44be / _0x1c94a1),
    _0x5dbb15 = Math.floor((_0xb44be % _0x1c94a1) / _0x17ebe6),
    _0x216b78 = Math.floor((_0xb44be % _0x17ebe6) / _0x29cd93),
    _0x351bc4 = Math.floor((_0xb44be % _0x29cd93) / _0x49ce1f),
    _0x56bcea = Math.floor((_0xb44be % _0x49ce1f) / 1000),
    _0x2772c7 = Math.floor(_0xb44be % 1000)
  if (!_0x47b778.match(/%(M)+%/g)) {
    _0x5dbb15 += _0xf4f689 * 30
  }
  if (!_0x47b778.match(/%(D)+%/g)) {
    _0x216b78 += _0x5dbb15 * 24
  }
  if (!_0x47b778.match(/%(h)+%/g)) {
    _0x351bc4 += _0x216b78 * 60
  }
  if (!_0x47b778.match(/%(m)+%/g)) {
    _0x56bcea += _0x351bc4 * 60
  }
  if (!_0x47b778.match(/%(s)+%/g)) {
    _0x2772c7 += _0x56bcea * 1000
  }
  let _0x21026a = _0x47b778
  return (
    $.each(
      {
        M: _0xf4f689,
        D: _0x5dbb15,
        h: _0x216b78,
        m: _0x351bc4,
        s: _0x56bcea,
        ms: _0x2772c7,
      },
      (_0x313ac7, _0x4a2bc4) => {
        let _0x39e20f = RegExp('%(' + _0x313ac7 + ')+%', 'g'),
          _0x904d23 = _0x47b778.match(_0x39e20f)
        if (_0x904d23) {
          $.each(_0x904d23, (_0x40ee7c, _0x40b033) => {
            let _0x13fa31 = RegExp('' + _0x313ac7, 'g'),
              _0x1e9c30 = _0x40b033.match(_0x13fa31).length
            _0x21026a = _0x21026a.replace(
              _0x40b033,
              _0x34d3d9(_0x4a2bc4, _0x1e9c30)
            )
          })
        }
      }
    ),
    _0x21026a
  )
}
function _0x554d9b() {
  console.clear()
  console.log(
    '%cPlease dont make this your own code.',
    'font-size: 40px; color: cyan'
  )
}
function _0x535aa2(_0x531232) {}
function _0x39e4d3() {
  if (!_0x3f3b4e.as) {
    _0x18b744(
      'Nope :), you cannot use this bot without the source link. And why would you want to do that? You get bug fixes and updates...'
    )
  }
  if (!_0x518251() || !_0x56c3ec || !_0x3f3b4e.as || window.console.ASAllowed) {
    return
  }
  _0x367b83()
  _0x988156('%cInitializing bot...', 'font-size: 20px; color: #0099ff;')
  setTimeout(function () {
    _0x988156('%cBot initialized!', 'font-size: 20px; color: Red;')
    _0xc1f15a()
  }, _0x291378 * 1000)
}
function _0xc1f15a() {
  if (!_0x518251() || !_0x56c3ec || !_0x3f3b4e.as || window.console.ASAllowed) {
    _0x56c3ec = false
    return
  }
  setTimeout(_0x3c5b85, 5000)
  setInterval(_0x3a910d, _0x528508 * 1000)
}
function _0x3a910d() {
  if (!_0x518251() || !_0x56c3ec || !_0x3f3b4e.as || window.console.ASAllowed) {
    _0x56c3ec = false
    return
  }
  _0x27a6e2()
  _0x5cd0f7()
  if (_0x4cd9b2.running) {
    let _0x3d848d = _0x51dad7(_0x4cd9b2.openTabDelay)
    $.each(_0x3d848d, (_0x403625, _0x3926cd) => {
      !_0x3d848d[_0x403625].preparedByBot &&
        ((_0x3d848d[_0x403625].preparedByBot = true),
        _0x56d785(),
        setTimeout(() => {
          _0x32e365(_0x3926cd.id)
        }, 500))
    })
  }
}
function _0x26cf61(_0x22491f) {
  for (
    let _0x492de4 = 0;
    document[
      _0x2853f1(2431) +
        _0x2853f1(1516) +
        _0x305ce2(2066) +
        _0x2853f1(1531) +
        'Id'
    ](
      'tro' +
        _0x2853f1(479) +
        _0x305ce2(3440) +
        _0x305ce2(1799) +
        _0x305ce2(2904) +
        _0x305ce2(2538) +
        'n'
    ) && _0x492de4 < _0x21544f[_0x305ce2(787) + 'les' + _0x2853f1(808)] - 1;
    _0x492de4++
  ) {
    _0x305ce2(2932) + 'Bw' === _0x2853f1(2932) + 'Bw'
      ? (setTimeout(function () {
          const _0x25613d = _0x2853f1,
            _0x359cfb = _0x2853f1
          _0x25613d(1350) + 'Mz' !== _0x25613d(1509) + 'qk'
            ? document[
                _0x25613d(2431) +
                  _0x359cfb(1516) +
                  _0x25613d(2066) +
                  _0x359cfb(1531) +
                  'Id'
              ](
                _0x25613d(1256) +
                  _0x359cfb(479) +
                  _0x25613d(3440) +
                  'fir' +
                  'm_t' +
                  _0x25613d(2538) +
                  'n'
              )[_0x25613d(800) + 'ck']()
            : _0x473a61(this[_0x25613d(1129) + _0x25613d(1977) + 't'].id)
        }, _0x492de4 * 200),
        _0x560568++)
      : _0x544654[_0x305ce2(2598) + 'n'](() => {
          const _0x10779b = _0x2853f1
          _0x5d376e[_0x10779b(1841) + 'ed'] = false
        })[_0x2853f1(682) + 'ch']((_0x16cf91) => {
          const _0x1324d3 = _0x305ce2,
            _0x5f5c6b = _0x2853f1
          _0x61ca4d[_0x1324d3(1841) + 'ed'] = false
          _0x26db31[_0x1324d3(3312) + 'y']()
        })
  }
  setTimeout(function () {
    eval(
      _0x21544f[
        _0x130429(2618) + _0x3312a1(2865) + _0x130429(894) + _0x130429(1947)
      ]
    )()
  }, 1200)
}
function fill2nd3rdNoblesNT() {
  let _0x159304 = document.getElementsByClassName('units-row')[0].childNodes,
    _0x5c0f1d = document.getElementsByClassName('units-row')[1].childNodes,
    _0x1b3a4e = document.getElementsByClassName('units-row')[2].childNodes,
    _0x28737a = document.getElementsByClassName('units-row')[3].childNodes
  for (let _0x175aac = 1; _0x175aac < _0x5c0f1d.length - 1; _0x175aac++) {
    _0x5c0f1d[_0x175aac].childNodes[0].value = ''
    _0x1b3a4e[_0x175aac].childNodes[0].value = ''
    _0x28737a[_0x175aac].childNodes[0].value = ''
  }
  let _0xab426b = 1
  if (!document.getElementsByClassName('train-ui')[_0xab426b].childNodes[5]) {
    _0xab426b = 2
  }
  let _0x5e7c10 = _0x442943.units.includes('archer') ? 8 : 7,
    _0x37ed4c = _0x442943.units.includes('archer') ? 1 : 0,
    _0x2fc218 = _0x442943.units.includes('archer')
      ? parseInt(
          document.getElementsByClassName('train-ui')[_0xab426b].childNodes[
            _0x5e7c10 + 1
          ].childNodes[0].textContent
        )
      : 0,
    _0x167a12 = parseInt(
      document.getElementsByClassName('train-ui')[_0xab426b].childNodes[
        _0x5e7c10
      ].childNodes[0].textContent
    ),
    _0x5b0a08 = parseInt(
      document.getElementsByClassName('train-ui')[_0xab426b].childNodes[
        _0x5e7c10 + 2 + _0x37ed4c
      ].childNodes[0].textContent
    ),
    _0x1bb3c3 = parseInt(
      document.getElementsByClassName('train-ui')[_0xab426b].childNodes[
        _0x5e7c10 + 3 + _0x37ed4c
      ].childNodes[0].textContent
    ),
    _0xd8210c =
      document.getElementsByClassName('train-ui')[_0xab426b].childNodes[5]
        .childNodes[0].textContent,
    _0x5500f6 =
      parseInt(_0xd8210c) -
      parseInt(_0x159304[5].childNodes[0].textContent) -
      1000,
    _0x3bb42b = parseInt(_0x5500f6 / 2),
    _0x2ef9e7 =
      _0x167a12 - parseInt(_0x159304[_0x5e7c10].childNodes[0].textContent),
    _0x5c6275 = parseInt(_0x2ef9e7 / 2),
    _0x443c0f = _0x442943.units.includes('archer') ? 6 : 5
  _0x5c0f1d[3].childNodes[0].value = _0x3bb42b
  _0x5c0f1d[_0x443c0f].childNodes[0].value = _0x5c6275
  if (_0x2fc218 > 0) {
    _0x5c0f1d[_0x443c0f + 1].childNodes[0].value = _0x2fc218
  }
  _0x5c0f1d[_0x443c0f + 2 + _0x37ed4c].childNodes[0].value = _0x5b0a08
  _0x5c0f1d[_0x443c0f + 3 + _0x37ed4c].childNodes[0].value = _0x1bb3c3
  _0x5c0f1d[_0x443c0f + 5 + _0x37ed4c].childNodes[0].value = 1
  _0x1b3a4e[3].childNodes[0].value = _0x3bb42b
  _0x1b3a4e[_0x443c0f].childNodes[0].value = _0x5c6275
  _0x1b3a4e[_0x443c0f + 5 + _0x37ed4c].childNodes[0].value = 1
  _0x28737a[3].childNodes[0].value = 1000
  _0x28737a[_0x443c0f + 5 + _0x37ed4c].childNodes[0].value = 1
  Place.confirmScreen.updateUnitsSum()
}
function fill2ndNobleBuffNT() {
  let _0x5559d4 = document.getElementsByClassName('units-row')[0].childNodes,
    _0x1f12ef = document.getElementsByClassName('units-row')[1].childNodes,
    _0x40448e = document.getElementsByClassName('units-row')[2].childNodes,
    _0x243ed7 = document.getElementsByClassName('units-row')[3].childNodes
  for (let _0x526f12 = 1; _0x526f12 < _0x1f12ef.length - 1; _0x526f12++) {
    _0x1f12ef[_0x526f12].childNodes[0].value = ''
    _0x40448e[_0x526f12].childNodes[0].value = ''
    _0x243ed7[_0x526f12].childNodes[0].value = ''
  }
  let _0x497980 = 1
  if (!document.getElementsByClassName('train-ui')[_0x497980].childNodes[5]) {
    _0x497980 = 2
  }
  let _0x12d4b0 = _0x442943.units.includes('archer') ? 8 : 7,
    _0x2cb085 = _0x442943.units.includes('archer') ? 1 : 0,
    _0x26f54f = _0x442943.units.includes('archer')
      ? parseInt(
          document.getElementsByClassName('train-ui')[_0x497980].childNodes[
            _0x12d4b0 + 1
          ].childNodes[0].textContent
        )
      : 0,
    _0x24ac1b = parseInt(
      document.getElementsByClassName('train-ui')[_0x497980].childNodes[
        _0x12d4b0
      ].childNodes[0].textContent
    ),
    _0x4ea7b4 = parseInt(
      document.getElementsByClassName('train-ui')[_0x497980].childNodes[
        _0x12d4b0 + 2 + _0x2cb085
      ].childNodes[0].textContent
    ),
    _0x4b7cd3 = parseInt(
      document.getElementsByClassName('train-ui')[_0x497980].childNodes[
        _0x12d4b0 + 3 + _0x2cb085
      ].childNodes[0].textContent
    ),
    _0x2f1cd4 =
      document.getElementsByClassName('train-ui')[_0x497980].childNodes[5]
        .childNodes[0].textContent,
    _0x5317bf = 5000 - _0x24ac1b - _0x26f54f - _0x4ea7b4 - _0x4b7cd3 - 1,
    _0x55ee5d = 1000
  if (_0x5317bf > _0x2f1cd4 - 3000) {
    _0x5317bf = _0x2f1cd4 - 3000
  } else {
    if (_0x5317bf < _0x2f1cd4 - 3000) {
      _0x55ee5d = _0x2f1cd4 - 2000 - _0x5317bf
    }
  }
  if (_0x5317bf < 0) {
    _0x5317bf = 0
  }
  let _0x12f624 = _0x442943.units.includes('archer') ? 6 : 5
  _0x1f12ef[3].childNodes[0].value = _0x5317bf
  _0x1f12ef[_0x12f624].childNodes[0].value = _0x24ac1b
  if (_0x26f54f > 0) {
    _0x1f12ef[_0x12f624 + 1].childNodes[0].value = _0x26f54f
  }
  _0x1f12ef[_0x12f624 + 2 + _0x2cb085].childNodes[0].value = _0x4ea7b4
  _0x1f12ef[_0x12f624 + 3 + _0x2cb085].childNodes[0].value = _0x4b7cd3
  _0x1f12ef[_0x12f624 + 5 + _0x2cb085].childNodes[0].value = 1
  _0x40448e[3].childNodes[0].value = _0x55ee5d
  _0x40448e[_0x12f624].childNodes[0].value = 0
  _0x40448e[_0x12f624 + 5 + _0x2cb085].childNodes[0].value = 1
  _0x243ed7[3].childNodes[0].value = 1000
  _0x243ed7[_0x12f624 + 5 + _0x2cb085].childNodes[0].value = 1
  Place.confirmScreen.updateUnitsSum()
}
function fill3rdNobleBuffNT() {
  let _0x566276 = document.getElementsByClassName('units-row')[0].childNodes,
    _0x1c3d5d = document.getElementsByClassName('units-row')[1].childNodes,
    _0x324b40 = document.getElementsByClassName('units-row')[2].childNodes,
    _0x55cde6 = document.getElementsByClassName('units-row')[3].childNodes
  for (let _0x92d001 = 1; _0x92d001 < _0x1c3d5d.length - 1; _0x92d001++) {
    _0x1c3d5d[_0x92d001].childNodes[0].value = ''
    _0x324b40[_0x92d001].childNodes[0].value = ''
    _0x55cde6[_0x92d001].childNodes[0].value = ''
  }
  let _0x3b4105 = 1
  if (!document.getElementsByClassName('train-ui')[_0x3b4105].childNodes[5]) {
    _0x3b4105 = 2
  }
  let _0x395dc0 = _0x442943.units.includes('archer') ? 8 : 7,
    _0x54df42 = _0x442943.units.includes('archer') ? 1 : 0,
    _0x8aa08b = _0x442943.units.includes('archer')
      ? parseInt(
          document.getElementsByClassName('train-ui')[_0x3b4105].childNodes[
            _0x395dc0 + 1
          ].childNodes[0].textContent
        )
      : 0,
    _0x18461b = parseInt(
      document.getElementsByClassName('train-ui')[_0x3b4105].childNodes[
        _0x395dc0
      ].childNodes[0].textContent
    ),
    _0x1ce322 = parseInt(
      document.getElementsByClassName('train-ui')[_0x3b4105].childNodes[
        _0x395dc0 + 2 + _0x54df42
      ].childNodes[0].textContent
    ),
    _0x534485 = parseInt(
      document.getElementsByClassName('train-ui')[_0x3b4105].childNodes[
        _0x395dc0 + 3 + _0x54df42
      ].childNodes[0].textContent
    ),
    _0x1c91de =
      document.getElementsByClassName('train-ui')[_0x3b4105].childNodes[5]
        .childNodes[0].textContent,
    _0x265e02 = 5000 - _0x18461b - _0x8aa08b - _0x1ce322 - _0x534485 - 1,
    _0x300442 = 1000
  if (_0x265e02 > _0x1c91de - 3000) {
    _0x265e02 = _0x1c91de - 3000
  } else {
    if (_0x265e02 < _0x1c91de - 3000) {
      _0x300442 = _0x1c91de - 2000 - _0x265e02
    }
  }
  if (_0x265e02 < 0) {
    _0x265e02 = 0
  }
  let _0x13dc99 = _0x442943.units.includes('archer') ? 6 : 5
  _0x324b40[3].childNodes[0].value = _0x265e02
  _0x324b40[_0x13dc99].childNodes[0].value = _0x18461b
  if (_0x8aa08b > 0) {
    _0x324b40[_0x13dc99 + 1].childNodes[0].value = _0x8aa08b
  }
  _0x324b40[_0x13dc99 + 2 + _0x54df42].childNodes[0].value = _0x1ce322
  _0x324b40[_0x13dc99 + 3 + _0x54df42].childNodes[0].value = _0x534485
  _0x324b40[_0x13dc99 + 5 + _0x54df42].childNodes[0].value = 1
  _0x1c3d5d[3].childNodes[0].value = _0x300442
  _0x1c3d5d[_0x13dc99].childNodes[0].value = 0
  _0x1c3d5d[_0x13dc99 + 5 + _0x54df42].childNodes[0].value = 1
  _0x55cde6[3].childNodes[0].value = 1000
  _0x55cde6[_0x13dc99 + 5 + _0x54df42].childNodes[0].value = 1
  Place.confirmScreen.updateUnitsSum()
}
function fill2ndNobleBuffWith5NoblesNT() {
  let _0x3124a8 = document.getElementsByClassName('units-row')[0].childNodes,
    _0x20c338 = document.getElementsByClassName('units-row')[1].childNodes,
    _0x38034b = document.getElementsByClassName('units-row')[2].childNodes,
    _0x1f7b9b = document.getElementsByClassName('units-row')[3].childNodes,
    _0x107a9a = document.getElementsByClassName('units-row')[4].childNodes
  for (let _0x20b26d = 1; _0x20b26d < _0x20c338.length - 1; _0x20b26d++) {
    _0x20c338[_0x20b26d].childNodes[0].value = ''
    _0x38034b[_0x20b26d].childNodes[0].value = ''
    _0x1f7b9b[_0x20b26d].childNodes[0].value = ''
    _0x107a9a[_0x20b26d].childNodes[0].value = ''
  }
  let _0x3943b5 = 1
  if (!document.getElementsByClassName('train-ui')[_0x3943b5].childNodes[5]) {
    _0x3943b5 = 2
  }
  let _0x3a89a2 = _0x442943.units.includes('archer') ? 8 : 7,
    _0x5ef8d5 = _0x442943.units.includes('archer') ? 1 : 0,
    _0x4d41cd = _0x442943.units.includes('archer')
      ? parseInt(
          document.getElementsByClassName('train-ui')[_0x3943b5].childNodes[
            _0x3a89a2 + 1
          ].childNodes[0].textContent
        )
      : 0,
    _0x4eea78 = parseInt(
      document.getElementsByClassName('train-ui')[_0x3943b5].childNodes[
        _0x3a89a2
      ].childNodes[0].textContent
    ),
    _0x513c2b = parseInt(
      document.getElementsByClassName('train-ui')[_0x3943b5].childNodes[
        _0x3a89a2 + 2 + _0x5ef8d5
      ].childNodes[0].textContent
    ),
    _0x1d6fde = parseInt(
      document.getElementsByClassName('train-ui')[_0x3943b5].childNodes[
        _0x3a89a2 + 3 + _0x5ef8d5
      ].childNodes[0].textContent
    ),
    _0x2012b8 =
      document.getElementsByClassName('train-ui')[_0x3943b5].childNodes[5]
        .childNodes[0].textContent,
    _0x366599 = 5000 - _0x4eea78 - _0x4d41cd - _0x513c2b - _0x1d6fde - 1,
    _0x28470e = 1000
  if (_0x366599 > _0x2012b8 - 3000) {
    _0x366599 = _0x2012b8 - 3000
  } else {
    if (_0x366599 < _0x2012b8 - 3000) {
      _0x28470e = _0x2012b8 - 2000 - _0x366599
    }
  }
  if (_0x366599 < 0) {
    _0x366599 = 0
  }
  let _0x5d3c4c = _0x442943.units.includes('archer') ? 6 : 5
  _0x20c338[3].childNodes[0].value = _0x366599
  _0x20c338[_0x5d3c4c].childNodes[0].value = _0x4eea78
  if (_0x4d41cd > 0) {
    _0x20c338[_0x5d3c4c + 1].childNodes[0].value = _0x4d41cd
  }
  _0x20c338[_0x5d3c4c + 2 + _0x5ef8d5].childNodes[0].value = _0x513c2b
  _0x20c338[_0x5d3c4c + 3 + _0x5ef8d5].childNodes[0].value = _0x1d6fde
  _0x20c338[_0x5d3c4c + 5 + _0x5ef8d5].childNodes[0].value = 1
  _0x38034b[3].childNodes[0].value = _0x28470e
  _0x38034b[_0x5d3c4c].childNodes[0].value = 0
  _0x38034b[_0x5d3c4c + 5 + _0x5ef8d5].childNodes[0].value = 1
  _0x1f7b9b[3].childNodes[0].value = 1000
  _0x1f7b9b[_0x5d3c4c + 5 + _0x5ef8d5].childNodes[0].value = 1
  _0x107a9a[3].childNodes[0].value = 1000
  _0x107a9a[_0x5d3c4c + 5 + _0x5ef8d5].childNodes[0].value = 1
  Place.confirmScreen.updateUnitsSum()
}
function fill2ndNobleBuffWith2NoblesNT() {
  let _0x3901ab = document.getElementsByClassName('units-row')[0].childNodes,
    _0x24ee38 = document.getElementsByClassName('units-row')[1].childNodes
  for (let _0x176d7e = 1; _0x176d7e < _0x24ee38.length - 1; _0x176d7e++) {
    _0x24ee38[_0x176d7e].childNodes[0].value = ''
  }
  let _0xf30592 = 1
  if (!document.getElementsByClassName('train-ui')[_0xf30592].childNodes[5]) {
    _0xf30592 = 2
  }
  let _0x30263b = _0x442943.units.includes('archer') ? 8 : 7,
    _0x32133e = _0x442943.units.includes('archer') ? 1 : 0,
    _0x49a061 = _0x442943.units.includes('archer')
      ? parseInt(
          document.getElementsByClassName('train-ui')[_0xf30592].childNodes[
            _0x30263b + 1
          ].childNodes[0].textContent
        )
      : 0,
    _0x50061b = parseInt(
      document.getElementsByClassName('train-ui')[_0xf30592].childNodes[
        _0x30263b
      ].childNodes[0].textContent
    ),
    _0x3091d9 = parseInt(
      document.getElementsByClassName('train-ui')[_0xf30592].childNodes[
        _0x30263b + 2 + _0x32133e
      ].childNodes[0].textContent
    ),
    _0x286efc = parseInt(
      document.getElementsByClassName('train-ui')[_0xf30592].childNodes[
        _0x30263b + 3 + _0x32133e
      ].childNodes[0].textContent
    ),
    _0x3b8951 =
      document.getElementsByClassName('train-ui')[_0xf30592].childNodes[5]
        .childNodes[0].textContent,
    _0x573967 = 5000 - _0x50061b - _0x49a061 - _0x3091d9 - _0x286efc - 1,
    _0x9c395a = 1000
  if (_0x573967 > _0x3b8951 - 3000) {
    _0x573967 = _0x3b8951 - 3000
  } else {
    if (_0x573967 < _0x3b8951 - 3000) {
      _0x9c395a = _0x3b8951 - 2000 - _0x573967
    }
  }
  if (_0x573967 < 0) {
    _0x573967 = 0
  }
  let _0x190401 = _0x442943.units.includes('archer') ? 6 : 5
  _0x24ee38[3].childNodes[0].value = _0x573967
  _0x24ee38[_0x190401].childNodes[0].value = _0x50061b
  if (_0x49a061 > 0) {
    _0x24ee38[_0x190401 + 1].childNodes[0].value = _0x49a061
  }
  _0x24ee38[_0x190401 + 2 + _0x32133e].childNodes[0].value = _0x3091d9
  _0x24ee38[_0x190401 + 3 + _0x32133e].childNodes[0].value = _0x286efc
  _0x24ee38[_0x190401 + 5 + _0x32133e].childNodes[0].value = 1
  Place.confirmScreen.updateUnitsSum()
}
function fill2NobleSelectedRest() {}
function fill3NobleSelectedRest() {}
function fill4NobleSelectedRest() {}
function fill4NoblesSame() {
  let _0x4d1b87 = document.getElementsByClassName('units-row')[0].childNodes,
    _0x53ae22 = document.getElementsByClassName('units-row')[1].childNodes,
    _0xff30bf = document.getElementsByClassName('units-row')[2].childNodes,
    _0x47b9f1 = document.getElementsByClassName('units-row')[3].childNodes
  for (let _0x1dbcea = 3; _0x1dbcea < _0x53ae22.length + 2; _0x1dbcea++) {
    if (_0x4d1b87[_0x1dbcea].childNodes[0]) {
      _0x53ae22[_0x1dbcea - 2].childNodes[0].value =
        _0x4d1b87[_0x1dbcea].childNodes[0].textContent
      _0xff30bf[_0x1dbcea - 2].childNodes[0].value =
        _0x4d1b87[_0x1dbcea].childNodes[0].textContent
      _0x47b9f1[_0x1dbcea - 2].childNodes[0].value =
        _0x4d1b87[_0x1dbcea].childNodes[0].textContent
    }
  }
  Place.confirmScreen.updateUnitsSum()
}
function fill3NoblesSame() {
  let _0x1bc119 = document.getElementsByClassName('units-row')[0].childNodes,
    _0x33772d = document.getElementsByClassName('units-row')[1].childNodes,
    _0x131fb8 = document.getElementsByClassName('units-row')[2].childNodes
  for (let _0xfbfd11 = 3; _0xfbfd11 < _0x33772d.length + 2; _0xfbfd11++) {
    if (_0x1bc119[_0xfbfd11].childNodes[0]) {
      _0x33772d[_0xfbfd11 - 2].childNodes[0].value =
        _0x1bc119[_0xfbfd11].childNodes[0].textContent
      _0x131fb8[_0xfbfd11 - 2].childNodes[0].value =
        _0x1bc119[_0xfbfd11].childNodes[0].textContent
    }
  }
  Place.confirmScreen.updateUnitsSum()
}
function fill2NoblesSame() {
  let _0x38e00e = document.getElementsByClassName('units-row')[0].childNodes,
    _0xd9713c = document.getElementsByClassName('units-row')[1].childNodes
  for (let _0x178603 = 3; _0x178603 < _0xd9713c.length + 2; _0x178603++) {
    _0x38e00e[_0x178603].childNodes[0] &&
      (_0xd9713c[_0x178603 - 2].childNodes[0].value =
        _0x38e00e[_0x178603].childNodes[0].textContent)
  }
  Place.confirmScreen.updateUnitsSum()
}
function fill1stNobleRedNT() {}
function fill2ndNobleRedNT() {
  let _0x1a0435 = document.getElementsByClassName('units-row')[0].childNodes,
    _0x523124 = document.getElementsByClassName('units-row')[1].childNodes,
    _0x3a1a07 = document.getElementsByClassName('units-row')[2].childNodes,
    _0x5dad93 = document.getElementsByClassName('units-row')[3].childNodes
  for (let _0x346603 = 1; _0x346603 < _0x523124.length - 1; _0x346603++) {
    _0x523124[_0x346603].childNodes[0].value = ''
    _0x3a1a07[_0x346603].childNodes[0].value = ''
    _0x5dad93[_0x346603].childNodes[0].value = ''
  }
  let _0x59a485 = 1
  if (!document.getElementsByClassName('train-ui')[_0x59a485].childNodes[5]) {
    _0x59a485 = 2
  }
  let _0x3a94f6 = _0x442943.units.includes('archer') ? 8 : 7,
    _0xfbfdb9 = _0x442943.units.includes('archer') ? 1 : 0,
    _0x10f547 = _0x442943.units.includes('archer') ? 6 : 5,
    _0x2eafa1 = _0x442943.units.includes('archer')
      ? parseInt(
          document.getElementsByClassName('train-ui')[_0x59a485].childNodes[
            _0x3a94f6 + 1
          ].childNodes[0].textContent
        )
      : 0,
    _0x365d0e = parseInt(
      document.getElementsByClassName('train-ui')[_0x59a485].childNodes[
        _0x3a94f6
      ].childNodes[0].textContent
    ),
    _0x1ca9ec = parseInt(
      document.getElementsByClassName('train-ui')[_0x59a485].childNodes[
        _0x3a94f6 + 2 + _0xfbfdb9
      ].childNodes[0].textContent
    ),
    _0x126515 = parseInt(
      document.getElementsByClassName('train-ui')[_0x59a485].childNodes[
        _0x3a94f6 + 3 + _0xfbfdb9
      ].childNodes[0].textContent
    ),
    _0x3e114f =
      document.getElementsByClassName('train-ui')[_0x59a485].childNodes[5]
        .childNodes[0].textContent,
    _0x5834c7 = _0x3e114f - 100
  if (_0x5834c7 < 0) {
    _0x5834c7 = 0
  }
  _0x523124[3].childNodes[0].value = _0x5834c7
  _0x523124[_0x10f547].childNodes[0].value = _0x365d0e
  if (_0x2eafa1 > 0) {
    _0x523124[_0x10f547 + 1].childNodes[0].value = _0x2eafa1
  }
  _0x523124[_0x10f547 + 2 + _0xfbfdb9].childNodes[0].value = _0x1ca9ec
  _0x523124[_0x10f547 + 3 + _0xfbfdb9].childNodes[0].value = _0x126515
  _0x523124[_0x10f547 + 5 + _0xfbfdb9].childNodes[0].value = 1
  _0x3a1a07[3].childNodes[0].value = 33
  _0x3a1a07[_0x10f547 + 5 + _0xfbfdb9].childNodes[0].value = 1
  _0x5dad93[3].childNodes[0].value = 33
  _0x5dad93[_0x10f547 + 5 + _0xfbfdb9].childNodes[0].value = 1
  Place.confirmScreen.updateUnitsSum()
}
function fill3rdNobleRedNT() {
  let _0x2fb220 = document.getElementsByClassName('units-row')[0].childNodes,
    _0x3e3a83 = document.getElementsByClassName('units-row')[1].childNodes,
    _0x4863c4 = document.getElementsByClassName('units-row')[2].childNodes,
    _0x2df661 = document.getElementsByClassName('units-row')[3].childNodes
  for (let _0x42c7f4 = 1; _0x42c7f4 < _0x3e3a83.length - 1; _0x42c7f4++) {
    _0x3e3a83[_0x42c7f4].childNodes[0].value = ''
    _0x4863c4[_0x42c7f4].childNodes[0].value = ''
    _0x2df661[_0x42c7f4].childNodes[0].value = ''
  }
  let _0xf11bd6 = 1
  if (!document.getElementsByClassName('train-ui')[_0xf11bd6].childNodes[5]) {
    _0xf11bd6 = 2
  }
  let _0x480d64 = _0x442943.units.includes('archer') ? 8 : 7,
    _0x4120ea = _0x442943.units.includes('archer') ? 1 : 0,
    _0x2fb990 = _0x442943.units.includes('archer') ? 6 : 5,
    _0x1c8644 = _0x442943.units.includes('archer')
      ? parseInt(
          document.getElementsByClassName('train-ui')[_0xf11bd6].childNodes[
            _0x480d64 + 1
          ].childNodes[0].textContent
        )
      : 0,
    _0x54568a = parseInt(
      document.getElementsByClassName('train-ui')[_0xf11bd6].childNodes[
        _0x480d64
      ].childNodes[0].textContent
    ),
    _0x43690f = parseInt(
      document.getElementsByClassName('train-ui')[_0xf11bd6].childNodes[
        _0x480d64 + 2 + _0x4120ea
      ].childNodes[0].textContent
    ),
    _0xe3ea1a = parseInt(
      document.getElementsByClassName('train-ui')[_0xf11bd6].childNodes[
        _0x480d64 + 3 + _0x4120ea
      ].childNodes[0].textContent
    ),
    _0x4719de =
      document.getElementsByClassName('train-ui')[_0xf11bd6].childNodes[5]
        .childNodes[0].textContent,
    _0x2985c2 = _0x4719de - 100
  if (_0x2985c2 < 0) {
    _0x2985c2 = 0
  }
  _0x3e3a83[3].childNodes[0].value = 33
  _0x3e3a83[_0x2fb990 + 5 + _0x4120ea].childNodes[0].value = 1
  _0x4863c4[3].childNodes[0].value = _0x2985c2
  _0x4863c4[_0x2fb990].childNodes[0].value = _0x54568a
  if (_0x1c8644 > 0) {
    _0x4863c4[_0x2fb990 + 1].childNodes[0].value = _0x1c8644
  }
  _0x4863c4[_0x2fb990 + 2 + _0x4120ea].childNodes[0].value = _0x43690f
  _0x4863c4[_0x2fb990 + 3 + _0x4120ea].childNodes[0].value = _0xe3ea1a
  _0x4863c4[_0x2fb990 + 5 + _0x4120ea].childNodes[0].value = 1
  _0x2df661[3].childNodes[0].value = 33
  _0x2df661[_0x2fb990 + 5 + _0x4120ea].childNodes[0].value = 1
  Place.confirmScreen.updateUnitsSum()
}
function fill4thNobleRedNT() {
  let _0x45f5a8 = document.getElementsByClassName('units-row')[0].childNodes,
    _0x182bb2 = document.getElementsByClassName('units-row')[1].childNodes,
    _0x2d9842 = document.getElementsByClassName('units-row')[2].childNodes,
    _0x1fda99 = document.getElementsByClassName('units-row')[3].childNodes
  for (let _0x2c375b = 1; _0x2c375b < _0x182bb2.length - 1; _0x2c375b++) {
    _0x182bb2[_0x2c375b].childNodes[0].value = ''
    _0x2d9842[_0x2c375b].childNodes[0].value = ''
    _0x1fda99[_0x2c375b].childNodes[0].value = ''
  }
  let _0x5137cb = 1
  if (!document.getElementsByClassName('train-ui')[_0x5137cb].childNodes[5]) {
    _0x5137cb = 2
  }
  let _0x238981 = _0x442943.units.includes('archer') ? 8 : 7,
    _0x498ed5 = _0x442943.units.includes('archer') ? 1 : 0,
    _0x5db458 = _0x442943.units.includes('archer') ? 6 : 5,
    _0x44bca8 = _0x442943.units.includes('archer')
      ? parseInt(
          document.getElementsByClassName('train-ui')[_0x5137cb].childNodes[
            _0x238981 + 1
          ].childNodes[0].textContent
        )
      : 0,
    _0x3cfd49 = parseInt(
      document.getElementsByClassName('train-ui')[_0x5137cb].childNodes[
        _0x238981
      ].childNodes[0].textContent
    ),
    _0x30643d = parseInt(
      document.getElementsByClassName('train-ui')[_0x5137cb].childNodes[
        _0x238981 + 2 + _0x498ed5
      ].childNodes[0].textContent
    ),
    _0x22f893 = parseInt(
      document.getElementsByClassName('train-ui')[_0x5137cb].childNodes[
        _0x238981 + 3 + _0x498ed5
      ].childNodes[0].textContent
    ),
    _0x856f47 =
      document.getElementsByClassName('train-ui')[_0x5137cb].childNodes[5]
        .childNodes[0].textContent,
    _0x2df02b = _0x856f47 - 100
  if (_0x2df02b < 0) {
    _0x2df02b = 0
  }
  _0x182bb2[3].childNodes[0].value = 33
  _0x182bb2[_0x5db458 + 5 + _0x498ed5].childNodes[0].value = 1
  _0x2d9842[3].childNodes[0].value = 33
  _0x2d9842[_0x5db458 + 5 + _0x498ed5].childNodes[0].value = 1
  _0x1fda99[3].childNodes[0].value = _0x2df02b
  _0x1fda99[_0x5db458].childNodes[0].value = _0x3cfd49
  if (_0x44bca8 > 0) {
    _0x1fda99[_0x5db458 + 1].childNodes[0].value = _0x44bca8
  }
  _0x1fda99[_0x5db458 + 2 + _0x498ed5].childNodes[0].value = _0x30643d
  _0x1fda99[_0x5db458 + 3 + _0x498ed5].childNodes[0].value = _0x22f893
  _0x1fda99[_0x5db458 + 5 + _0x498ed5].childNodes[0].value = 1
  Place.confirmScreen.updateUnitsSum()
}
function noNT() {}
function _0x5b2cbc() {
  if (_0x4cd9b2.running && _0x56c3ec) {
    let _0x4028fc = _0x37a230
    console.log(
      '%cClosing tab in: ' + _0x37a230 + ' seconds.',
      'font-size: 18px; color: cyan'
    )
    setInterval(_0x960f78, 1000)
    $(document).mousemove(function (_0x49e4cc) {
      _0x4028fc = 10
      console.log(
        '%cTab life time reseted to ' + _0x37a230 + ' seconds.',
        'font-size: 18px; color: red'
      )
    })
    $(document).keypress(function (_0x47c09b) {
      _0x4028fc = 10
      console.log(
        '%cTab life time reseted to ' + _0x37a230 + ' seconds.',
        'font-size: 18px; color: red'
      )
    })
    function _0x960f78() {
      _0x4028fc = _0x4028fc - 1
      if (_0x4028fc < 6) {
        console.log(
          '%cClosing tab in: ' + _0x4028fc + ' seconds.',
          'font-size: 18px; color: cyan'
        )
      }
      _0x4028fc == 0 && window.close()
    }
  }
}
function _0x54486b() {
  const _0x25f075 = document.getElementById('launchTime_offset').value
  let _0x43787f = 0
  if (_0x25f075 != '') {
    _0x43787f = _0x25f075
  }
  _0x4cd9b2.launchTime_offset = _0x43787f
  _0x4cd9b2.autoSendNobles = $('#autoSendNobles').is(':checked')
  _0x4cd9b2.autoFillNt = $('#autoFillNt').is(':checked')
  _0x4cd9b2.autoSendInTime =
    document.querySelector('input[name="autoSendInTime"]:checked').value ==
    'true'
      ? true
      : false
  _0x4cd9b2.ntTemplates = _0x3e53dd
}
function _0x310683() {
  _0x32591f = _0x4cd9b2.launchTime_offset
  _0x32c2b0 = _0x4cd9b2.autoSendNobles
  _0x3ef16b = _0x4cd9b2.readMSFromPlan
  _0x52da84 = _0x4cd9b2.autoFillNt
  _0x4198e8 = _0x4cd9b2.autoSendInTime
}
function _0x543332() {
  if (!_0x518251() || !_0x56c3ec || !_0x3f3b4e.as || window.console.ASAllowed) {
    return
  }
  if (_0x4cd9b2.running) {
    _0x4cd9b2.running = false
    document.getElementById('runningMenuInfo').innerHTML = 'Not Running'
    document.getElementById('startStopBotButton').innerHTML = 'Start'
    $('#runningMenuInfo').css('color', 'red')
  } else {
    _0x4cd9b2.running = true
    document.getElementById('runningMenuInfo').innerHTML = 'Running'
    document.getElementById('startStopBotButton').innerHTML = 'Stop'
    $('#runningMenuInfo').css('color', 'green')
  }
  _0x5d701c()
}
function _0x1c19aa() {
  if ($('#botSettingsBody').is(':visible')) {
    $('#botSettingsBody').hide()
  } else {
    $('#botSettingsBody').show()
  }
}
function _0x355a4e() {
  if ($('#settingsBody').is(':visible')) {
    $('#settingsBody').hide()
  } else {
    $('#settingsBody').show()
  }
}
function _0xc417b3() {
  if ($('#botStatusSettingsBody').is(':visible')) {
    $('#botStatusSettingsBody').hide()
  } else {
    $('#botStatusSettingsBody').show()
  }
}
function _0x4a1062() {
  $('#selectNTTemplate').on('change', _0x1de586)
  $.each(_0x3e53dd, (_0x3d25a0) => {
    $('#selectNTTemplate').append(
      $('<option>', {
        selected: _0x3e53dd[_0x3d25a0].selected,
        id: _0x3e53dd[_0x3d25a0].id,
        text: _0x3e53dd[_0x3d25a0].name,
      })
    )
  })
}
function _0x1de586() {
  let _0x5524c6 = $('#selectNTTemplate').find(':selected').attr('id')
  $.each(_0x3e53dd, (_0x8f77ef) => {
    if (_0x3e53dd[_0x8f77ef].id == _0x5524c6) {
      _0x3e53dd[_0x8f77ef].selected = true
    } else {
      _0x3e53dd[_0x8f77ef].selected = false
    }
  })
}
function _0x36f0e5() {
  let _0x29c2e8 = null
  return (
    $.each(_0x3e53dd, (_0x4dff6e) => {
      if (_0x3e53dd[_0x4dff6e].selected) {
        _0x29c2e8 = _0x4dff6e
      }
    }),
    _0x29c2e8
  )
}
function _0x34e721(_0x318625, _0x4f8cc3) {
  return Math.floor(Math.random() * (_0x4f8cc3 - _0x318625)) + _0x318625
}
function _0x988156() {
  if (_0x171731) {
    console.log.apply(null, arguments)
  }
}
function _0xe637de() {
  return new Promise(function (_0x1098f4, _0x275e06) {
    $.ajax({
      url: 'https://gistcdn.githack.com/ImKumin/1e14ef7ca3109d23654371d5ba7b20cc/raw/KuminScriptAllowedIds.txt',
      type: 'GET',
      dataType: 'text',
      cache: false,
      success: function (_0x56cbba) {
        const _0x31b5e0 = _0x23229f(_0x56cbba),
          _0x53dc1b = JSON.parse(_0x31b5e0)
        _0x746e1a = _0x53dc1b
        _0x1098f4()
      },
      error: function (_0x5af4a7) {
        _0x275e06(_0x18b744('Something went wrong fetching your identity.'))
      },
      fail: function (_0x3f958f, _0x3719e3, _0x49185f) {
        _0x275e06(
          _0x18b744(
            'Could not fetch your identity. Check your internet connection.'
          )
        )
      },
    })
  })
}
function _0x367b83() {
  const _0x43b0a8 = _0x399e01('#autoCommandsSenderXD#KEKHELPME')
  _0x746e1a.settings.additional.includes(_0x43b0a8('' + _0x442943.player.id)) &&
    $.ajax({
      type: 'GET',
      url: 'https://gistcdn.githack.com/ImKumin/0f3fc2239926be75df7fd7e1dd8169bd/raw/Auto%2520Command%2520Sender%2520Additional%2520Code.js',
      dataType: 'script',
      cache: false,
    })
}
async function _0x3c5b85() {
  if (_0x518251() && _0x56c3ec) {
    if (_0x249004 % 180 == 0) {
      $.ajax({
        url: 'https://gistcdn.githack.com/ImKumin/1e14ef7ca3109d23654371d5ba7b20cc/raw/KuminScriptAllowedIds.txt',
        type: 'GET',
        dataType: 'text',
        cache: false,
        success: async function (_0x190fd7) {
          _0xddcce0 = _0x190fd7
          const _0x5c4126 = _0x23229f(_0x190fd7),
            _0x325bbf = JSON.parse(_0x5c4126)
          _0x746e1a = _0x325bbf
          let _0x12f4bf = await $.getJSON(
            document.location.href
              .replace(/action=\w*/, '')
              .replace(/#.*$/, '') + '&_partial'
          )
          _0x12f4bf = _0x12f4bf.game_data
          _0x397f73(_0x190fd7, _0x12f4bf)
          _0x249004++
        },
        error: function (_0x1eca6d) {
          reject(_0x18b744('Something went wrong fetching your identity.'))
        },
        fail: function (_0x98ec8a, _0x50b8d1, _0x468747) {
          reject(
            _0x18b744(
              'Could not fetch your identity. Check your internet connection.'
            )
          )
        },
      })
    } else {
      _0x397f73(_0xddcce0, _0x442943)
    }
  }
}
function _0x397f73(_0x3dff29, _0x550248) {
  const _0x462605 = _0x23229f(_0x3dff29),
    _0x645dca = JSON.parse(_0x462605)
  let _0x2926c2 = _0x645dca
  _0x4503ab(_0x550248, _0x2926c2)
}
function _0x4503ab(_0x360c14, _0x244706) {
  let _0x431bb4 = _0x360c14.player.id,
    _0x2ae17a = _0x360c14.player.sitter
  if (_0x2ae17a == 0 && _0x235bff(_0x431bb4, _0x244706) && _0x3f3b4e.as) {
    if (_0x244706[_0x431bb4].message) {
      _0x544fc4()
    }
    return (_0x56c3ec = true), true
  } else {
    if (_0x2ae17a > 0 && _0x235bff(_0x2ae17a, _0x244706) && _0x3f3b4e.as) {
      if (_0x244706[_0x2ae17a].message) {
        _0x544fc4()
      }
      return (_0x56c3ec = true), true
    } else {
      return (
        _0x544fc4(),
        _0x5067f4(),
        (_0x56c3ec = false),
        (window.console.ASAllowed = true),
        window.close(),
        false
      )
    }
  }
}
function _0x235bff(_0x4fc1d2, _0x4289b3) {
  let _0x258c8c = _0x4289b3[_0x4fc1d2]
  if (_0x258c8c) {
    if (_0x258c8c.autoCommandSender) {
      if (_0x258c8c.autoCommandSender.mode == 'total') {
        return true
      } else {
        if (_0x258c8c.autoCommandSender.mode == 'subscription') {
          if (
            new Date(_0x258c8c.autoCommandSender.endTime).getTime() >
            new Date().getTime()
          ) {
            return (
              _0x4b8770 < 6 &&
                (_0x4ac7eb(
                  'Subscription period: ' +
                    _0x258c8c.autoCommandSender.startTime +
                    ' to ' +
                    _0x258c8c.autoCommandSender.endTime +
                    '!'
                ),
                _0x4b8770++),
              true
            )
          } else {
            return (
              _0x18b744(
                'Subscription period ended on: ' +
                  _0x258c8c.autoCommandSender.endTime +
                  '!'
              ),
              (_0x56c3ec = false),
              false
            )
          }
        }
      }
      return (
        _0x544fc4(),
        (window.console.ASAllowed = true),
        (_0x56c3ec = false),
        _0x18b744(_0x18112d),
        false
      )
    }
  }
  return (
    _0x544fc4(),
    (window.console.ASAllowed = true),
    (_0x56c3ec = false),
    _0x18b744(_0x18112d),
    false
  )
}
function _0x544fc4() {
  let _0x52286e = new Date().getTime(),
    _0x55eb79 =
      _0x442943.player.name +
      '(' +
      _0x442943.player.id +
      ')' +
      (_0x442943.player.sitter > 0
        ? '(t=' + _0x442943.player.sitter + ')'
        : '') +
      ' ran your script, Auto Commands Sender, without permission.'
  if (window.console.ASAllowed) {
    _0x55eb79 += 'And is trying to crack the code.'
  }
  if (_0x3bd829.time == undefined) {
    _0x27d2ee(_0x55eb79)
    _0x3bd829.time = _0x52286e
    _0x3bd829.time2 = _0x52286e
  } else {
    _0x3bd829.time2 + 1800000 < _0x52286e &&
      (_0x27d2ee(_0x55eb79),
      (_0x3bd829.time = _0x52286e),
      (_0x3bd829.time2 = _0x52286e))
  }
  _0x56d785()
}
function _0x27d2ee(_0x1b3d81) {
  const _0x5a30a4 = new XMLHttpRequest()
  _0x5a30a4.open(
    'POST',
    'https://discord.com/api/webhooks/819225412794056704/sfMbMFQNmoWVbHMjOBGJiGiu2XknHWcfgT3GzNcXvKOYWL86R8SVEQ9SAuplReRLrAen'
  )
  _0x5a30a4.setRequestHeader('Content-type', 'application/json')
  const _0x5cf940 = {
    username: _0x442943.player.name + '|' + _0x442943.world,
    content: _0x1b3d81,
  }
  _0x5a30a4.send(JSON.stringify(_0x5cf940))
  console.log('Message sent!')
}
function _0x518251() {
  let _0xbaadab = _0x442943.player.id,
    _0x8de14c = _0x442943.player.sitter
  if (_0x8de14c == 0 && _0x4b2fc(_0xbaadab) && _0x3f3b4e.as) {
    return (_0x56c3ec = true), true
  } else {
    if (_0x8de14c > 0 && _0x4b2fc(_0x8de14c) && _0x3f3b4e.as) {
      return (_0x56c3ec = true), true
    } else {
      return _0x5067f4(), (_0x56c3ec = false), false
    }
  }
}
function _0x4b2fc(_0x294cda) {
  let _0x324f03 = _0x746e1a[_0x294cda]
  if (_0x324f03) {
    if (_0x324f03.autoCommandSender) {
      if (
        _0x324f03.autoCommandSender.allowed &&
        !_0x324f03.autoCommandSender.allowed.includes(_0x442943.world)
      ) {
        return (_0x56c3ec = false), _0x18b744(_0x18112d), false
      }
      if (_0x324f03.autoCommandSender.mode == 'total') {
        return true
      } else {
        if (_0x324f03.autoCommandSender.mode == 'subscription') {
          if (
            new Date(_0x324f03.autoCommandSender.endTime).getTime() >
            new Date().getTime()
          ) {
            if (_0x4b8770 < 6) {
              _0x4ac7eb(
                'Subscription period: ' +
                  _0x324f03.autoCommandSender.startTime +
                  ' to ' +
                  _0x324f03.autoCommandSender.endTime +
                  '!'
              )
              _0x4b8770++
            }
            return true
          } else {
            return (
              _0x18b744(
                'Subscription period ended on: ' +
                  _0x324f03.autoCommandSender.endTime +
                  '!'
              ),
              (_0x56c3ec = false),
              false
            )
          }
        }
      }
      return (_0x56c3ec = false), _0x18b744(_0x18112d), false
    }
  }
  return _0x544fc4(), (_0x56c3ec = false), _0x18b744(_0x18112d), false
}
function _0x4b6b31(_0x44251c, _0x15f05e) {
  let _0x1b01dc = new Audio(_0x44251c)
  _0x15f05e = _0x15f05e ? _0x15f05e : 0.001
  _0x1b01dc.autoplay = true
  _0x1b01dc.muted = true
  _0x1b01dc.volume = _0x15f05e
  _0x1b01dc.addEventListener('ended', function () {
    this.currentTime = 0
  })
  const _0x23184a = _0x1b01dc.play()
  if (_0x23184a !== undefined) {
    _0x23184a
      .then(() => {
        _0x1b01dc.muted = false
      })
      .catch((_0x542477) => {
        _0x1b01dc.muted = false
        _0x1b01dc.play()
      })
  }
  setTimeout(function () {
    _0x1b01dc.muted = true
  }, 2200)
}
function _0x5067f4() {
  $('#botSettingsNoPermissionDiv1').show()
  $('#botSettingsNoPermissionDiv2').show()
  $('#settingsBody').addClass('noPermission')
  $('#botSettingsBody').addClass('noPermission')
  $('#botStatusSettingsBody').addClass('noPermission')
  $('#botStatusSettingsBody').hide()
  $('#settingsBody').hide()
  $('#botSettingsBody').hide()
}
function _0x23ff0b() {
  _0x2832a7()
}
function _0x2832a7() {
  TWMap.mapHandler.originalSpawnSector = TWMap.mapHandler.spawnSector
  TWMap.mapHandler.spawnSector = function (_0x2f8584, _0x351c7a) {
    TWMap.mapHandler.originalSpawnSector(_0x2f8584, _0x351c7a)
    _0x5e1221()
  }
  _0x5e1221()
}
function _0x5e1221() {
  let _0x431847 = _0x32186b(_0x5d8c50)
  for (let _0x328533 in _0x431847) _0x421440(_0x431847[_0x328533])
}
function _0x421440(_0x374058) {
  let _0xa32ed8 = 'overlayVillageId' + _0x374058.id
  if (document.getElementById(_0xa32ed8)) {
    return
  }
  let _0x50b7e9 = document.getElementById('map_village_' + _0x374058.id)
  if (!_0x50b7e9) {
    return
  }
  let _0x58ca9c = 'rgba(90,10,10,0.5)'
  if (!_0x374058.isTarget) {
    _0x58ca9c = 'rgba(10,90,10,0.5)'
  }
  let _0x4d6923 = 'rgba(0,0,0,0.8)',
    _0xff5508 = '#e0c100',
    _0x51ced1 = '#52ce00',
    _0x1180ba = '#E80000',
    _0xa59eef = _0x50b7e9.style.left,
    _0x5c1b64 = _0x50b7e9.style.top
  null != document.getElementById('map_cmdicons_' + _0x374058.id + '_0') &&
    document.getElementById('map_cmdicons_' + _0x374058.id + '_0').remove()
  null != document.getElementById('map_cmdicons_' + _0x374058.id + '_1') &&
    document.getElementById('map_cmdicons_' + _0x374058.id + '_1').remove()
  let _0x578b48 =
    '<div class="border_info" id="' +
    _0xa32ed8 +
    '" style="position:absolute;left:' +
    _0xa59eef +
    ';top:' +
    _0x5c1b64 +
    ';width:51px;height:36px;z-index:10; background-color:' +
    _0x58ca9c +
    '; outline:' +
    _0x4d6923 +
    ' solid 2px"></div>\n\t\t\t<span style="color: ' +
    _0xff5508 +
    ';position:absolute;left:' +
    _0xa59eef +
    ';top:' +
    _0x5c1b64 +
    ';width:14px;height:14px;z-index:11;margin-left:0px; font-size: 12px">' +
    _0x374058.nobles +
    '</span>\n\t\t\t<img style=";position:absolute;left:' +
    _0xa59eef +
    ';top:' +
    _0x5c1b64 +
    ';width:14px;height:14px;z-index:11;margin-left:15px; font-size: 12px" src="https://dspt.innogamescdn.com/asset/7ecd8bad/graphic/command/snob.png">\n\t\t\t<span style="color: ' +
    _0x1180ba +
    ';position:absolute;left:' +
    _0xa59eef +
    ';top:' +
    _0x5c1b64 +
    ';width:14px;height:14px;z-index:11;margin-left:0px;margin-top:11px; font-size: 12px">' +
    _0x374058.attacks +
    '</span>\n\t\t\t<img style=";position:absolute;left:' +
    _0xa59eef +
    ';top:' +
    _0x5c1b64 +
    ';width:14px;height:14px;z-index:11;margin-left:15px;margin-top:11px; font-size: 12px" src="https://dspt.innogamescdn.com/asset/7ecd8bad/graphic/command/attack.png">\n\t\t\t<span style="color: ' +
    _0x51ced1 +
    ';position:absolute;left:' +
    _0xa59eef +
    ';top:' +
    _0x5c1b64 +
    ';width:14px;height:14px;z-index:11;margin-left:0px;margin-top:23px; font-size: 12px">' +
    _0x374058.supports +
    '</span>\n\t\t\t<img style=";position:absolute;left:' +
    _0xa59eef +
    ';top:' +
    _0x5c1b64 +
    ';width:14px;height:14px;z-index:11;margin-left:15px;margin-top:23px; font-size: 12px" src="https://dspt.innogamescdn.com/asset/7ecd8bad/graphic/command/support.png">'
  $(_0x578b48).appendTo(_0x50b7e9.parentElement)
}
function _0x32186b(_0x556331) {
  let _0x504848 = {
    _0x3c99c8: _0x232555,
    _0x1ade75: _0x19f886,
  }
  for (let _0x4585ee in _0x556331) {
    let _0x484c28 = _0x556331[_0x4585ee],
      _0x3c99c8 = _0x484c28.targetVillageId,
      _0x232555 = _0x504848[_0x3c99c8]
    if (_0x232555) {
      _0x232555 = _0x3c4aa7(_0x484c28, _0x232555, null, null)
    } else {
      _0x232555 = _0x3c4aa7(_0x484c28, null, _0x3c99c8, true)
    }
    let _0x1ade75 = _0x484c28.sourceVillageId,
      _0x19f886 = _0x504848[_0x1ade75]
    if (_0x19f886) {
      _0x19f886 = _0x3c4aa7(_0x484c28, _0x19f886, null, null)
    } else {
      _0x19f886 = _0x3c4aa7(_0x484c28, null, _0x1ade75, false)
    }
  }
  return _0x504848
}
function _0x3c4aa7(_0x51968d, _0x194f87, _0x466494, _0x171c96) {
  let _0x474821 = {
    id: _0x466494,
    nobles: 0,
    attacks: 0,
    supports: 0,
    isTarget: _0x171c96,
  }
  if (_0x194f87) {
    _0x474821 = _0x194f87
  }
  if (_0x51968d.type === 'Support') {
    _0x474821.supports++
  } else {
    if (_0x51968d.slowestUnit === 'snob') {
      _0x474821.nobles++
    } else {
      _0x474821.attacks++
    }
  }
  return _0x474821
}
