const items = [
    { name: "Your profile" },
    { name: "Your budgets" },
    { name: "Settings" },
    { name: "Your profile" },
    { name: "Your profile" },
    { name: "Your profile" },
    { name: "Your profile" },
    { name: "Your profile" },
]


interface accountInfo {
    accountName: string
    accountUrl: string
}

export function AccountDropdown(props: accountInfo) {
    const accountName = props.accountName || "admin";
    return (
        <div className='account-dropdown'>
            <div className="items">
                <div className="welcome">Signed in as <span className="accountName">{accountName}</span></div>
                <hr />
                { items.map(item => <div key={Math.random()} className="item">{item.name}</div>) }
            </div>
        </div>
    )
}