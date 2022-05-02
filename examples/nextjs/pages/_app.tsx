import '../styles/globals.css';
import type { AppContext, AppProps } from 'next/app';
import { FlagsmithProvider } from 'flagsmith-es/react';
import flagsmith from 'flagsmith-es/isomorphic';
import { IState } from 'flagsmith-es/types';
import { parseCookies } from 'nookies';

const environmentID = "FILL_IN_YOURS";

function MyApp({ Component, pageProps, flagsmithState }: AppProps & {flagsmithState: IState}) {
    return (
        <FlagsmithProvider flagsmith={flagsmith}
                           serverState={flagsmithState as IState}
>
            <Component {...pageProps} />
        </FlagsmithProvider>
    );
}

MyApp.getInitialProps = async ({ ctx }: AppContext) => {
    const cookies = parseCookies(ctx);

    await flagsmith.init({ // fetches flags on the server
        environmentID,
        identity: cookies.identity ? cookies.identity : undefined,
    });

    await new Promise((resolve) => { // simulate another asynchronous code
        setTimeout(resolve, 5000);
    });

    return { flagsmithState: flagsmith.getState() }
}

export default MyApp;
