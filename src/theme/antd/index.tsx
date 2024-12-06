import { StyleProvider } from "@ant-design/cssinjs";
import { ConfigProvider } from "antd";
import "antd/dist/reset.css";

import useLocale from "@/locales/useLocale";

import {
  themeModeToken,
} from "./theme";

import { ThemeMode } from "#/enum";

type Props = {
  children: React.ReactNode;
};
export default function AntdConfig({ children }: Props) {

  const { language } = useLocale();

  const themeMode = ThemeMode.Light;

  return (
    <ConfigProvider
      locale={language.antdLocal}
      theme={{
        token: { ...themeModeToken[themeMode].token },
        components: { ...themeModeToken[themeMode].components },
      }}
    >
      {/* https://ant.design/docs/react/compatible-style-cn#styleprovider */}
      <StyleProvider hashPriority="high">{children}</StyleProvider>
    </ConfigProvider>
  );
}
