const fs = require("fs");

// Función que recibe un callback y retorna un stream
function crearStream(callback) {
    const stream = fs.createReadStream("package.json", {
        encoding: "utf-8"
    });

    callback(stream);
}

// Uso del callback
crearStream((stream) => {
    stream.on("data", (chunk) => {
        console.log("Datos:", chunk);
    });

    stream.on("end", () => {
        console.log("Fin del stream");
    });
});
