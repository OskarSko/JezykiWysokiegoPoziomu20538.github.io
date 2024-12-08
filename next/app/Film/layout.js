export default function FilmLayout({ children }) {
    return (
        <div
            style={{
                fontFamily: "Verdana, sans-serif",
                color: "#444",
                backgroundColor: "#eaeaea",
                padding: "20px",
                textAlign: "center",
                border: "2px solid #ccc",
                borderRadius: "8px",
            }}
        >
            <main>{children}</main>
        </div>
    );
}
