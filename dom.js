import { pillRecords } from './app.js';
import { storeRecord } from './store.js'
import { addDay, formatDate, toDateInputValue, substractDay } from './utils.js'


const $ = (/** @type {string} */ id) => document.getElementById(id);

export const newRecordForm = /** @type {HTMLFormElement} */ $("new-record");
export const dateElem = /** @type {HTMLInputElement} */ $("this-date");
export const breakfastElem = /** @type {HTMLInputElement} */ $("breakfast");
export const lunchElem = /** @type {HTMLInputElement} */ $("lunch");
export const dinerElem = /** @type {HTMLInputElement} */ $("diner");
export const recordsContainer = /** @type {HTMLElement} */ $("records");
const todayBtn = /** @type {HTMLElement} */ $("todayBtn");
const backBtn = /** @type {HTMLElement} */ $("backBtn");
const forwardBtn = /** @type {HTMLElement} */ $("forwardBtn");



let didBreakfast = false
let didLunch = false
let didDiner = false

export let selectedDate = toDateInputValue(new Date());
dateElem.value = selectedDate;

todayBtn.addEventListener("click", (e) => {
   selectedDate = toDateInputValue(new Date());
   dateElem.value = selectedDate;
   updateUI()
})

backBtn.addEventListener("click", (e) => {
   selectedDate = toDateInputValue(substractDay(new Date(selectedDate)))
   console.log(selectedDate)
   dateElem.value = selectedDate;
   updateUI()
})

forwardBtn.addEventListener("click", (e) => {
   selectedDate = toDateInputValue(addDay(new Date(selectedDate)))
   console.log(selectedDate)
   dateElem.value = selectedDate;
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

dinerElem.addEventListener("mousedown", (e) => {
   didDiner = !didDiner
   saveChanges()
})

/** create new Element */
export function create(elem) {
   return document.createElement(elem);
}

/** saveChanges */
function saveChanges() {
   storeRecord(dateElem.value, didBreakfast, didLunch, didDiner);
   //renderRecords();
   updateUI()
};

export function updateUI() {
   const thisRecord = pillRecords.get(selectedDate)
   if (thisRecord && thisRecord.date) {
      dateElem.value = thisRecord.date;
      didBreakfast = thisRecord.breakfast
      didLunch = thisRecord.lunch
      didDiner = thisRecord.diner
      UpdateCheckBoxUI()
   } else {
      dateElem.value = selectedDate;
      didBreakfast = false
      didLunch = false
      didDiner = false
      UpdateCheckBoxUI()
   }
};

function UpdateCheckBoxUI() {
   breakfastElem.textContent = (didBreakfast) ? "✅ Breakfast" : "☐ Breakfast"
   lunchElem.textContent = (didLunch) ? "✅ Lunch" : "☐ Lunch"
   dinerElem.textContent = (didDiner) ? "✅ Diner" : "☐ Diner"
};