import { AnimationContextProvider } from "../store/AnimationContext";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
    return (
        <>
            <AnimationContextProvider>
                <Component {...pageProps} />
            </AnimationContextProvider>
        </>
    );
}

export default MyApp;
