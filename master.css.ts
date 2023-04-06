import MasterCSS, { Config } from '@master/css';

export const config: Config = {
  themes: {},
  colors: {
    accent: {
      // 0: 'hsl(237deg,63%,15%)',
      // 1200: 'hsl(182deg,100%,90%)'
      100: '#1A2074',
      1100: '#b8cccc',
      1400: '#E1F4F4',
      1500: '#f0fafa'
    }
  },
  classes: {
    fontSans: `font:system|-apple-system|'.SFNSText-Regular'|'San Francisco'|'Roboto'|'Segoe UI'|'Helvetica Neue'|'Lucida Grande'|sans-serif`,
    container: 'max-width:640px mx:auto px:24',
    label: 'd:inline-block mb:8 pt:12 pb:4 line-height:1',
    input: 'd:inline-block width:100% p:8 color:accent-100 border:2|solid|accent-1100 r:8 outline:none border-color:accent-100:focus {bg:accent-1400;border:accent-1400}:not(:placeholder-shown) appearance:none'
  },
  values: {},
  semantics: {},
  breakpoints: {},
  selectors: {},
  mediaQueries: {}
}

export const css = new MasterCSS(config)
