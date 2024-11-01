
import * as dom from "./dom.js"
// import { formatDate, toDateInputValue } from "./utils.js"
// import { getRecords, storeRecord } from "./store.js"
import { getRecords } from "./store.js"

export const pillRecords = new Map();

// -------------
// Functionality
// -------------

// display data
// export function renderRecords() { 
//    const pastRecordsList = dom.create("ul");
//    if (pillRecords.size === 0) { getRecords() }
//    dom.recordsContainer.innerHTML = "";

//    pillRecords.forEach((rec) => {
//       const recordElem = dom.create("li");
//       recordElem.textContent =`Date: ${formatDate(rec.date)}, 
//       breakfast: ${rec.breakfast}, 
//       lunch: ${rec.lunch}, 
//       diner: ${rec.diner}`;
//       pastRecordsList.appendChild(recordElem);
//    });

//    dom.recordsContainer.appendChild(pastRecordsList);
// }

//renderRecords();
getRecords()
dom.updateUI()
