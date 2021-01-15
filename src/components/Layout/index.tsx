import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './../../assets/styles/globalStyles';
import "tailwindcss/tailwind.css";
import "../../css/styles.css";
import * as Theme from './../../assets/styles/theme';
import { LayoutWrapper, MainWrapper } from './styles';

import { useSelector, useDispatch } from 'react-redux';
import { uiSelector } from '../../state/ui';
import store from '../../state/store';
import { switchOffMenu } from '../../state/menuState';

import SectionTitle from '../SectionTitle';
import Navigation from '../Navigation';
import Content from '../Content';
import Footer from '../Footer';

const Layout: React.FC = ({ children }) => {

  const { themeMode } = useSelector(uiSelector);

  let funcRun = false;
  const handleResize = () => {
    if (store.getState().menu.menuState === "open") {
      if (funcRun == false) {
        dispatch(switchOffMenu());
        funcRun = true;
        setTimeout(() => funcRun = false, 1000)
      }
      console.log(store.getState().menu.menuState);
    }
  }
  React.useEffect(() => {
    window.addEventListener("resize", handleResize);
  }, []);

  const dispatch = useDispatch();

  return (
    <ThemeProvider theme={Theme[themeMode]}>
      <GlobalStyles />
      <MainWrapper>
        <LayoutWrapper>
          <Navigation />
          <SectionTitle title={store.getState().title.pageTitle} />
          <Content children={children} />
          <Footer />
        </LayoutWrapper>
      </MainWrapper>
    </ThemeProvider >
  )
}

export default Layout;
