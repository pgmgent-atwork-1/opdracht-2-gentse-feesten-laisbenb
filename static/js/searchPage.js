/* ---------------- JSON FILE READER ---------------- */
import {getEvents} from "./fetchData.js";

/* ---------------- LOAD IN EVENTS ---------------- */
async function loadEvents() {
    const events = await getEvents();
    search(events);
};

function search() {
    
};

loadEvents();