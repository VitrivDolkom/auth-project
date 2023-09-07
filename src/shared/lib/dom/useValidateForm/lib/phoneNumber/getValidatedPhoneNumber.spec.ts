import { getValidatedPhoneNumber } from './getValidatedPhoneNumber';

interface PhoneTestInfo {
  from: string;
  to: string;
  message?: string;
  check?: boolean;
  whyNotPassed?: string;
}

const phoneTestsInfo: PhoneTestInfo[] = [
  { from: '8', to: '+7', message: '8 -> +7' },
  { from: '7', to: '+7', message: '7 -> +7' },
  { from: '9', to: '+7 9', message: '9 -> +7 9' },
  { from: '6', to: '6', message: 'x -> x' },

  { from: '+7960', to: '+7 960', message: '+7xxx -> +7 xxx' },
  { from: '7960', to: '+7 960', message: '7xxx -> +7 xxx' },
  { from: '8960', to: '+7 960', message: '8xxx -> +7 xxx' },
  {
    from: '960',
    to: '+7 960',
    message: '9xx -> +7 xxx',
    whyNotPassed: 'copy paste xxx from clipboard, worked when enter numbers one after another',
    check: false
  },

  { from: '8960960', to: '+7 960 960', message: '8xxxxxx -> +7 xxx xxx' },
  {
    from: '960960',
    to: '+7 960 960',
    message: '9xxxxx -> +7 xxx xxx',
    whyNotPassed: 'copy paste xxxxxx from clipboard, worked when enter numbers one after another',
    check: false
  },
  { from: '7960960', to: '+7 960 960', message: '7xxxxxx -> +7 xxx xxx' },
  { from: '+7960960', to: '+7 960 960', message: '+7xxxxxx -> +7 xxx xxx' },
  { from: '6960960', to: '6960960', message: 'formatting disabled for unusual start' },

  { from: '896096000', to: '+7 960 960 00', message: '8xxxxxxxx -> +7 xxx xxx xx' },
  { from: '796096000', to: '+7 960 960 00', message: '7xxxxxxxx -> +7 xxx xxx xx' },
  { from: '+796096000', to: '+7 960 960 00', message: '+7xxxxxxxx -> +7 xxx xxx xx' },
  { from: '696096000', to: '696096000', message: 'formatting disabled for unusual start' },

  { from: '89609600011', to: '+7 960 960 00 11', message: '8xxxxxxxxxx -> +7 xxx xxx xx xx' },
  { from: '79609600011', to: '+7 960 960 00 11', message: '7xxxxxxxx -> +7 xxx xxx xx xx' },
  { from: '+79609600011', to: '+7 960 960 00 11', message: '+7xxxxxxxx -> +7 xxx xxx xx xx' },
  { from: '69609600011', to: '69609600011', message: 'formatting disabled for unusual start' }
];

describe('ValidatedPhoneNumber', () => {
  phoneTestsInfo.forEach((testInfo) => {
    if (testInfo.check !== false) {
      test(testInfo.message || 'without message', () => {
        expect(getValidatedPhoneNumber(testInfo.from, testInfo.from.length)).toBe(testInfo.to);
      });
    }
  });
});
