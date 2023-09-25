


export const Greeting = ({name, favoriteNumber, favoriteColors}) => {
    return (
        <>
            <h2>
                Hello, {name}!
            </h2>
            <h3>
                {name}'s favorite number plus 7 is {favoriteNumber + 7}.
            </h3>
            <h3>
                {name}'s favorite colors are:
                <ul>
                    {favoriteColors && favoriteColors.map(color => <li key={color}>{color}</li>)}
                </ul>
            </h3>
        </>
    );
}