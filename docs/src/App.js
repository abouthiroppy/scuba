import React from 'react';
import queryString from 'query-string';
import GithubCorner from 'react-github-corner';
import Header from './components/Header';
// import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import Concept from './components/Concept';
import GettingStarted from './components/GettingStarted';
import Documentation from './components/Documentation';
import Container from '../../src';
import * as colors from '../../lib/styles/colors';
import styles from './style';

const fetchColorHex = (name) => colors[name];

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      theme     : 'sea',
      subColor  : 'light',
      background: '#333'
    };

    this.changeTheme = this.changeTheme.bind(this);
    this.changeSubColor = this.changeSubColor.bind(this);
    this.changeBackgroundColor = this.changeBackgroundColor.bind(this);
  }

  changeTheme(theme) {
    this.setState({ theme });
  }

  changeSubColor(subColor) {
    this.setState({ subColor });
  }

  changeBackgroundColor(background) {
    if (background.length === 0) this.setState({ background: '#333' });
    else this.setState({ background: `#${background}` });
  }

  componentWillMount() {
    const queries = queryString.parse(location.search);
    const res = {};

    Object.keys(queries).forEach((key) => {
      if(queries[key]) {
        if (parseInt(queries[key], 16).toString(16) === queries[key]) {
          res[key] = `#${queries[key]}`;
        }
        else {
          res[key] = queries[key];
        }
      }
    });
    this.setState(res);
  }

  render() {
    const {
      theme,
      subColor,
      background
    } = this.state;

    const themeColor = fetchColorHex(theme);

    return (
      <div style={{
        background,
        padding: '10px 10px 100px 10px',
        wordWrap: 'break-word'
      }}>
        <Container
          style={{ background }}
          theme={theme}
          subColor={subColor}
          codeTheme="obsidian"
        >
          <div className={styles.githubCorner}>
            <GithubCorner
              href="https://github.com/abouthiroppy/scuba"
              bannerColor={themeColor}
            />
          </div>
          <Header
            theme={theme}
            themeHex={themeColor}
            subColor={subColor}
            subColorHex={fetchColorHex(subColor)}
            changeTheme={this.changeTheme}
            changeSubColor={this.changeSubColor}
            changeBackgroundColor={this.changeBackgroundColor}
          />
          <div className={styles.container}>
            <Hero />
            <Concept />
            <GettingStarted />
            <Documentation />
          </div>
        </Container>
      </div>
    );
  }
}

export default App;
