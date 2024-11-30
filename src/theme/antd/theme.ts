import { ThemeConfig } from "antd";

/**
 * Antd theme editor: https://ant.design/theme-editor-cn
 */
const customThemeTokenConfig: ThemeConfig["token"] = {
  colorPrimary: "#6C78AB",

  colorSuccess: "#22c55e",
  colorWarning: "#ff7849",
  colorError: "#ff5630",
  colorInfo: "#00b8d9",

  // 线性化
  wireframe: false,
  borderRadiusSM: 2,
  borderRadius: 4,
  borderRadiusLG: 8,
};

const themeModeToken: Record<"dark" | "light", ThemeConfig> = {
  dark: {
    token: {
      colorBgLayout: "#161c24",
      colorBgContainer: "#212b36",
      colorBgElevated: "#161c24",
    },
    components: {
      Modal: {
        headerBg: "#212b36",
        contentBg: "#212b36",
        footerBg: "#212b36",
      },
      Notification: {},
    },
  },
  light: {
    components:{
      Layout: {
        headerBg: customThemeTokenConfig.colorPrimary,
        siderBg: "#FFF",
        headerColor: "#FFF",
        headerHeight: 50,
        headerPadding: 0,
      },
      Typography: {
        titleMarginBottom: 0,
        titleMarginTop: 0,
      },
      Menu: {
        groupTitleFontSize: 12,
        itemBorderRadius: 0,
        itemHeight: 50,
        itemMarginInline: 0,
        itemMarginBlock: 0,
        itemColor: "#78828a",
      },
      Table:{
        headerBorderRadius: 0,
        headerBg:"#FFF",
        headerColor: "#909399"
      }
    }
  },
};

export { customThemeTokenConfig, themeModeToken };
