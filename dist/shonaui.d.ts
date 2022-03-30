declare module '@shonaui/core/dist/shonaui' {
  const _exports: any;
  export = _exports;
  export var shonaui: any;

}
declare module '@shonaui/core' {
  import main = require('@shonaui/core/index');
  export = main;
}