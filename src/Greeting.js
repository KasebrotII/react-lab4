


export const Greeting = (props) => {
    console.log(props);
    return (
        <>
            <h2>
                Hello, {props.name}!
            </h2>
            <h3>
                {props.name}'s favorite number plus 7 is {props.favoriteNumber + 7}.
            </h3>
            <h3>
                {props.name}'s favorite colors are:
                <ul>
                    {props.favoriteColors && props.favoriteColors.map(color => <li key={color}>{color}</li>)}
                </ul>
            </h3>
        </>
    );
}