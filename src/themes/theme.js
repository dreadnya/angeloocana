/**
 * Round x with n decimal.
 * @param {Number} x Number to be rounded.
 * @param {Number} n Number of digits after semi column.
 * @returns {Number} Number rounded.
 */
const round = (x, n) => Math.round(x * (n * 10)) / (n * 10);

const scaleN = (n) => round(Math.pow(1.2, n), 3);

const scale = n => `${scaleN(n)}rem`;

const colors = {
  white: '#D3D0CB',
  black: '#1E2019', // #393E41
  yellow: '#E2C044',
  red: '#FF0000',
  blue: '#587B7F',
  gray: '#393E41',

  blackShades: [
    '#32342D'
  ]
};

const fontFamily = '"Cambo", serif';

const theme = {
  colors,
  fontFamily,
  color: colors.white,
  bg: colors.black,
  padding: `0 ${scaleN(1)}rem ${scaleN(2)}rem ${scaleN(0)}rem`,
  margin: '0 auto',
  maxWidth: '60rem',
  borderRadius: '0.2rem',
  lineHeight: 1.5,
  focus: {
    border: '0.4rem red solid'
  },
  p: {
    fontSize: scale(1),
    lineHeight: scale(2),
    firstLetter: {
      fontSize: `${(scaleN(1) * 3) + scaleN(3)}rem`,
      color: colors.yellow,
      lineHeight: 0.7,
      paddingTop: '0.3rem'
    }
  },
  a: {
    fontFamily,
    color: colors.white,
    textDecoration: 'none',
    hover: {
      color: colors.yellow
    }
  },
  header: {
    title: {
      fontSize: scale(4),
      textAlign: 'left',
      padding: `${scale(0)} 0 0 0`,
      margin: `0 0 ${scale(6)} 0`,
      lineHeight: scaleN(0)
    },
    subTitle: {
      fontSize: `${scale(0)}`,
      padding: `${scale(-4)} 0 0 0`,
      margin: `${scale(-20)} 0 0 0`,
      lineHeight: scaleN(-1)
    },
    isHome: {
      title: {
        fontSize: scale(7),
        textAlign: 'center',
        padding: `${scale(3)} 0 0 0`,
        margin: `${scale(0)} 0 ${scale(4)} 0`,
        lineHeight: scaleN(0)
      },
      subTitle: {
        fontSize: `${scale(0)}`,
        padding: `${scale(0)} 0 0 0`,
        margin: `${scale(-20)} 0 0 0`,
        lineHeight: scaleN(-1)
      }
    }
  },
  menu: {
    padding: scale(2),
    opened: {
      bg: colors.blackShades[0]
    },
    closed: {
      bg: 'transparent'
    },
    label: {
      width: scale(3),
      height: scale(3),
      fontSize: scale(3)
    },
    a: {
      fontSize: scale(1),
      paddingBottom: scale(1),
      textAlign: 'left',
      color: colors.white,
      active: {
        color: colors.yellow
      }
    },
    ul: {
      marginTop: scale(6),
      marginLeft: scale(7.8)
    }
  },
  footer: {
    padding: scale(2),
    margin: `0 -${scaleN(2)}rem`,
    hover: {
      backgroundColor: colors.blackShades[0]
    }
  },
  socialLinks: {
    margin: `${scale(0)} 0 ${scale(6)} 0`,
    padding: 0,
    a: {
      color: colors.white,
      fontSize: scale(0),
      margin: `${scale(0)} ${scale(-1)} 0 ${scale(-1)}`,
      padding: 0,
      svg: {
        fontSize: scale(5),
        margin: `0 auto ${scale(-1)} auto`,
        padding: 0,
      },
      hover: {
        color: colors.yellow
      }
    }
  },
  welcome: {
    marginTop: scale(6),
    marginBottom: scale(2),
  },
  blog: {
    list: {
      header: {
        fontSize: scale(6),
        padding: scale(1),
        margin: `${scale(4)} 0 0 0`,
      },
      ul: {
        padding: `0`,
        margin: `0`,
      },
      item: {
        padding: scale(2),
        margin: `0 -${scaleN(2)}rem`,
        hover: {
          backgroundColor: colors.blackShades[0]
        },
        header: {
          fontSize: scale(4),
          time: {
            fontSize: scale(0),
            color: colors.blue
          }
        },
        p: {
          fontSize: scale(1),
          padding: `0`,
          margin: `0`,
        }
      }
    },
    post: {
      padding: 0,
      margin: `0 0 ${scale(4)} 0`,
      header: {
        fontSize: scale(4),
        time: {
          fontSize: scale(0),
          color: colors.blue
        }
      },
      content: {
        highlight: {
          backgroundColor: colors.gray,
          borderRadius: '0.2rem',
        }
      }
    }
  },
  i18n: {
    selectLanguage: {
      li: {
        margin: `-${scale(0)} 0 0 0`,
        padding: `${scale(5)} ${scale(-2)} ${scale(-5)} ${scale(-2)}`,
        fontSize: scale(3),
        borderRadius: '0.2rem',
        selected: {
          backgroundColor: colors.gray
        }
      }
    }
  }
};

export default theme;
