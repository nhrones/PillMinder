import { pillRecords } from "./app.js"
import * as dom from "./dom.js"

// Storage key is an app-wide constant
const STORAGE_KEY = "pill-tracker";

// get and parse data
export function getRecords() {
   const data = globalThis.localStorage.getItem(STORAGE_KEY);
   const recs = (data) ? JSON.parse(data) : [];
   pillRecords.clear()
   for (let index = 0; index < recs.length; index++) {
      const rec = recs[index];
      pillRecords.set(rec.date, rec)
   }
}

// Add and store new record
export function storeRecord(date, didBreakfast, didLunch, didDinner) {
   //getRecords();
   pillRecords.set(date, {
      date: date,
      breakfast: didBreakfast,
      lunch: didLunch,
      dinner: didDinner
   });

   // TODO order the map by date - newest at top
   // records.sort((a, b) => {
   //    return new Date(b.date) - new Date(a.date);
   // });
   
   globalThis.localStorage.setItem(
      STORAGE_KEY, 
      JSON.stringify(Array.from(pillRecords.values())));
}

