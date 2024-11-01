import { pillRecords } from './app.js';
import { storeRecord } from './store.js'
import { addOneDay, toDateInputValue, substractOneDay } from './utils.js'


const $ = (/** @type {string} */ id) => document.getElementById(id);

export const newRecordForm = /** @type {HTMLFormElement} */ $("new-record");
export const dateElem = /** @type {HTMLInputElement} */ $("this-date");
export const breakfastElem = /** @type {HTMLInputElement} */ $("breakfast");
export const lunchElem = /** @type {HTMLInputElement} */ $("lunch");
export const dinnerElem = /** @type {HTMLInputElement} */ $("dinner");
export const recordsContainer = /** @type {HTMLElement} */ $("records");
const todayBtn = /** @type {HTMLElement} */ $("todayBtn");
const backBtn = /** @type {HTMLElement} */ $("backBtn");
const forwardBtn = /** @type {HTMLElement} */ $("forwardBtn");



let didBreakfast = false
let didLunch = false
let didDinner = false

export let selectedDate = new Date();

dateElem.value = toDateInputValue(selectedDate);

todayBtn.addEventListener("click", (e) => {
   selectedDate = new Date();
   dateElem.value = toDateInputValue(selectedDate);
   updateUI()
})

backBtn.addEventListener("click", (e) => {
   selectedDate = substractOneDay(selectedDate)
   dateElem.value = toDateInputValue(selectedDate);
   updateUI()
})

forwardBtn.addEventListener("click", (e) => {
   selectedDate = addOneDay(selectedDate)
   console.log(selectedDate)
   dateElem.value = toDateInputValue(selectedDate);
   updateUI()
})


dateElem.addEventListener("change", (e) => {
   selectedDate = dateElem.value
   updateUI()
})

breakfastElem.addEventListener("mousedown", (e) => {
   didBreakfast = !didBreakfast
   saveChanges()
})

lunchElem.addEventListener("mousedown", (e) => {
   ;
   didLunch = !didLunch
   saveChanges()
})

dinnerElem.addEventListener("mousedown", (e) => {
   didDinner = !didDinner
   saveChanges()
})

/** create new Element */
export function create(elem) {
   return document.createElement(elem);
}

/** saveChanges */
function saveChanges() {
   storeRecord(selectedDate.toDateString(), didBreakfast, didLunch, didDinner);
   //renderRecords();
   updateUI()
};

export function updateUI() {
   const thisRecord = pillRecords.get(selectedDate.toDateString());
   console.info("thisRecord: ", thisRecord)
   if (thisRecord && thisRecord.date) {
      console.log(`selectedDate: ${selectedDate}, thisRecord.date: ${thisRecord.date}`)
      dateElem.value = toDateInputValue(thisRecord.date);
      didBreakfast = thisRecord.breakfast
      didLunch = thisRecord.lunch
      didDinner = thisRecord.dinner
      UpdateCheckBoxUI()
   } else {
      dateElem.value = toDateInputValue(selectedDate);
      didBreakfast = false
      didLunch = false
      didDinner = false
      UpdateCheckBoxUI()
   }
};

function UpdateCheckBoxUI() {
   breakfastElem.textContent = (didBreakfast) ? "✅ Breakfast" : "☐ Breakfast"
   lunchElem.textContent = (didLunch) ? "✅ Lunch" : "☐ Lunch"
   dinnerElem.textContent = (didDinner) ? "✅ Dinner" : "☐ Dinner"
};