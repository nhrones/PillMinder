
// format dates for display
export function formatDate(dateString) {
   const date = new Date(dateString);
   return date.toLocaleDateString("en-US", { timeZone: "UTC" });
}

export function addDay(startingDate) {
   return new Date(new Date().setDate(startingDate.getDate() + 1));
}

export function substractDay(startingDate, number) {
   return new Date(new Date().setDate(startingDate.getDate() - 1));
}

export function toDateInputValue(dateObject) {
   const local = new Date(dateObject);
   local.setMinutes(dateObject.getMinutes() - dateObject.getTimezoneOffset());
   return local.toJSON().slice(0, 10);
};
