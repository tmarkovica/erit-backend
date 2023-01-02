const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const shell = require("shelljs");
const app = express();

app.use(morgan("tiny"));
app.use(cors());
app.use(express.json());

app.post("/", async function (req, res) {
    const { secret, type } = req.body;
    if (secret !== "W7U4X-6TUWX-RCJWQ") {
        return res.status(403).send();
    }
    res.send("ok");
    pullNewCode(type);
});

const port = process.env.PORT || 24000;

app.listen(port, () => {
    console.log(`Ready to serve at http://localhost:${port}`);
});

function pullNewCode(type) {
    if (!shell.which("git")) {
        shell.echo("Sorry, this script requires git");
        shell.exit(1);
    }

    shell.cd("/root/erit-backend");

    try {
        shell.exec("git checkout .");
        shell.exec("git checkout ubuntu");
        if (!shell.exec("git pull --rebase").stdout.trim() === "Already up to date.") {
            return;
        }
    } catch (error) {
        console.log(error);
    }

    //shell.cd("backend");
    shell.exec("rm -rf node_modules build");
    shell.exec("npm i");
    shell.exec("npm run build");
    shell.exec("pm2 restart strapi");
}
