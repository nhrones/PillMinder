
// // format dates for display
// export function formatDate(dateString) {
//    const date = new Date(dateString);
//    return date.toLocaleDateString("en-US", { timeZone: "UTC" });
// }

export function toDateInputValue(dateObject) {
   const local = new Date(dateObject);
   local.setMinutes(dateObject.getMinutes() - dateObject.getTimezoneOffset());
   return local.toJSON().slice(0, 10);
};
