import app from "./app";


const port = process.env.PORT || "8080";

app.set("port", port);

const server = app.listen(port, () => {
    const tab = "  ";
    const env = app.get("env");

    console.log(
        `\n` +
        `${tab}App is running at http://localhost:${port} in ${env} mode.\n` +
        `${tab}Press CTRL-C to stop.\n`
    );
});


export default server;
