
import { updateUI } from "./dom.js"
import { getRecords } from "./store.js"

// -------------
// Functionality
// -------------

//TODO
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
//       dinner: ${rec.dinner}`;
//       pastRecordsList.appendChild(recordElem);
//    });

//    dom.recordsContainer.appendChild(pastRecordsList);
// }

//TODO renderRecords();
getRecords()
updateUI()
