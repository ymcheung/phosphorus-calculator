import MasterCSS, { Config } from '@master/css';

export const config: Config = {
  themes: {},
  colors: {
    plain: '#fefeff',
    primary: {
      100: '#1746A2',
      300: '#3D87F5',
      500: '#5F9DF7'
    },
  },
  classes: {
    fontSans: `font:system|-apple-system|'.SFNSText-Regular'|'San Francisco'|'Roboto'|'Segoe UI'|'Helvetica Neue'|'Lucida Grande'|sans-serif`,
    container: 'max-width:640px mx:auto px:24',
    label: 'd:inline-block mb:2 py:8 color:primary-300 font:20 font:bold line-height:1',
    input: 'd:inline-block width:100% px:8 py:12 color:plain border:2|solid|primary-500 r:8 outline:none border-color:primary-300:focus {bg:primary-500;border-color:primary-500}:not(:placeholder-shown) appearance:none color:primary-500::placeholder'
  },
  values: {},
  semantics: {},
  breakpoints: {},
  selectors: {},
  mediaQueries: {}
}

export const css = new MasterCSS(config)
