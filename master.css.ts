import MasterCSS, { Config } from '@master/css';

export const config: Config = {
  themes: {},
  colors: {
    accent: {
      // 0: 'hsl(237deg,63%,15%)',
      // 1200: 'hsl(182deg,100%,90%)'
      100: '#1A2074',
      1500: '#f3f7f7'
    }
  },
  classes: {
    container: 'px:16'
  },
  values: {},
  semantics: {},
  breakpoints: {},
  selectors: {},
  mediaQueries: {}
}

export const css = new MasterCSS(config)
