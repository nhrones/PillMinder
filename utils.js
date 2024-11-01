
export function addOneDay(date) {
   const newDate = new Date(date);
   newDate.setDate(newDate.getDate() + 1);
   return newDate;
 }

export function substractOneDay(date) {
   const newDate = new Date(date);
   newDate.setDate(newDate.getDate() - 1);
   return newDate;
}

export function toDateInputValue(dateObject) {
   return new Date(dateObject).toJSON().slice(0, 10);
};
