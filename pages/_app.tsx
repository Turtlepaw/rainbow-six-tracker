import '../styles/globals.css';
import '../styles/index.css';
import type { AppProps } from 'next/app'
import Head from 'next/head';
import Footer from '../util/footer';
import Image from 'next/image';
import { ChakraProvider, extendTheme } from "@chakra-ui/react"
import { mode } from '@chakra-ui/theme-tools';

const colours =  {
  'blurple': '#5865F2',
  'blurple.500': '#5865F2',
  'green': '#3BA55C',
  'red': '#ED4245',
  'grey.extralight': '#ebedef',
  'grey.light': '#4F545C',
  'grey.dark': '#36393f',
  'grey.extradark': '#292b2f'
};

const { blurple } = colours;

const theme = extendTheme({
  colors: colours,
  styles: {
    global: (props: any) => ({
      body: {
        bg: mode('grey.dark', 'white')(props),
        color: mode('white', 'black')(props),
      },
      input: {
        bg: mode('grey.extradark', 'grey.extralight')(props),
        height: '36px',
        width: '100%',
        padding: '0px 9px',
        border: `2px solid transparent`,
        transition: '0.2s',
        outline: 'none',
        borderRadius: 3,
        _focus: { border: `2px solid ${blurple}` }
      },
      hr: { borderColor: '#ffffff0f' }
    })
  },
  components: {
    Button: {
      baseStyle: {
        color: 'white'
      },
      variants: {
        primary: {
          bg: 'blurple'
        },
        secondary: {
          bg: 'grey.light'
        },
        success: {
          bg: 'green'
        },
        destructive: {
          bg: 'red'
        }
      },
      defaultProps: {
        variant: 'secondary',
      }
    },
    Input: {
      defaultProps: { variant: 'normal' }
    },
    FormLabel: { baseStyle: { marginBottom: '5px' } }  },
    Badge: {
      sizes: {
        xl: {
          h: '56px',
          fontSize: 'lg',
          px: '32px',
        },
      },
    }
});

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Head>
        <title>Rainbow Six Siege Tracker</title>
        <meta name="description" content={"👀 See your stats\n🔑 Share your stats with your friends\n📦 Easy to use, no account required!"} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='font-bold text-3xl text-center pt-5'>
        <h1>Rainbow Six Tracker</h1>
      </div>
      <Component {...pageProps} />
      <Footer/>
    </ChakraProvider>
  )
}
