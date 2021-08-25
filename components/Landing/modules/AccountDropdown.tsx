import Link from 'next/link'

const items = [
    { id: 1, name: "Your profile", link: "" },
    { id: 2, name: "Your budgets", link: "" },
    { id: 3, name: "Settings", link: "" },
    { id: 4, name: "Your profile", link: "" },
    { id: 5, name: "Your profile", link: "" },
    { id: 6, name: "Your profile", link: "" },
    { id: 7, name: "Your profile", link: "" },
    { id: 8, name: "Your profile", link: "" },
]

export function AccountDropdown(props: { loggedIn: boolean, accountName: string }) {
    const signedIn = props.loggedIn || false;
    const accountName = props.accountName || "unknown";
    return (
        <div className='account-dropdown'>
            <div className="items">
                <div className="welcome">
                    { signedIn ? "You are signed in as" : "Not signed in." }
                    &nbsp;
                    <Link href={signedIn ? `/user/${encodeURIComponent(accountName)}` : `/login` }>
                        <span className="accountName">
                            {signedIn ? accountName : "Login"}
                        </span>
                    </Link>
                </div>
                <hr />
                { items.map(item => <div key={Math.random()} className="item">{item.name}</div>) }
            </div>
        </div>
    )
}