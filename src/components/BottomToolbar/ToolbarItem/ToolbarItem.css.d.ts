declare namespace ToolbarItemCssModule {
  export interface IToolbarItemCss {
    toolbarItem: string;
    toolbarItemEntry: string;
  }
}

declare const ToolbarItemCssModule: ToolbarItemCssModule.IToolbarItemCss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: ToolbarItemCssModule.IToolbarItemCss;
};

export = ToolbarItemCssModule;