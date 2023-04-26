import MasterCSS, { Config } from '@master/css';

export const config: Config = {
  themes: {},
  colors: {
    shade: { 1300: '#d6d6dd', 1500: '#fefeff' },
    primary: {
      100: '#1746A2',
      300: '#3D87F5',
      500: '#5F9DF7'
    },
  },
  classes: {
    fontSans: `font:system|-apple-system|'.SFNSText-Regular'|'San Francisco'|'Roboto'|'Segoe UI'|'Helvetica Neue'|'Lucida Grande'|sans-serif`,
    container: 'max-width:640px mx:auto px:24',
    label: 'd:inline-block mb:2 py:8 color:primary-300 font:18 font:bold line-height:1',
    input: 'd:inline-block width:100% py:4 color:primary-500 font-weight:700 border-bottom:2|solid|shade-1300 outline:none border-color:primary-300:focus border-color:primary-500:not(:placeholder-shown) appearance:none {color:primary-500;font-weight:400}::placeholder',
    button: {
      submit: 'px:12 py:8 background-color:primary-500 {background-color:shade-1300}:disabled'
    }
  },
  values: {},
  semantics: {},
  breakpoints: {},
  selectors: {},
  mediaQueries: {}
}

export const css = new MasterCSS(config)
