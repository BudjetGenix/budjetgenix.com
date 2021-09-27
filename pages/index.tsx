import Landing from '../components/Landing/Landing';


export default function() {
    const renderedInServer = typeof window === "undefined";
    let signedIn = null;
    if (!renderedInServer) signedIn = localStorage.getItem("signedIn")

    let reply: boolean = false;
    if (signedIn && signedIn === "true") reply = true;

    return <Landing loggedIn={reply} />;
}
