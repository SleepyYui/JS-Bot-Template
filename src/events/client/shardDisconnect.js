//here the event starts
const Logger = require("../../handlers/logger");
module.exports = (client, event, id) => {
    Logger.error(`[${String(new Date).split(" ", 5).join(" ")}] Shard #${id} Disconnected`);
}
