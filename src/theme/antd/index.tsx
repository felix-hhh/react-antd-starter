import { StyleProvider } from "@ant-design/cssinjs";
import { ConfigProvider, theme } from "antd";
import "antd/dist/reset.css";

import useLocale from "@/locales/useLocale";
import { useSettings } from "@/store/settingStore";

import {
  customThemeTokenConfig,
  themeModeToken,
} from "./theme";

import { ThemeMode } from "#/enum";

type Props = {
  children: React.ReactNode;
};
export default function AntdConfig({ children }: Props) {
  const { themeMode } = useSettings();

  const { language } = useLocale();

  const algorithm = themeMode === ThemeMode.Light ? theme.defaultAlgorithm : theme.darkAlgorithm;

  return (
    <ConfigProvider
      locale={language.antdLocal}
      theme={{
        token: { ...themeModeToken[themeMode].token, ...customThemeTokenConfig },
        components: { ...themeModeToken[themeMode].components },
        algorithm,
      }}
    >
      {/* https://ant.design/docs/react/compatible-style-cn#styleprovider */}
      <StyleProvider hashPriority="high">{children}</StyleProvider>
    </ConfigProvider>
  );
}
