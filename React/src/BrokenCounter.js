const BrokenCounter = () => {
    let count = 0;

    const increment = () => {
        count += 1;
        console.log("Licznik:", count);
    };

    return (
        <div>
            <h1>Licznik: {count}</h1>
            <button onClick={increment}>Zwiększ</button>
        </div>
    );
};

export default BrokenCounter;