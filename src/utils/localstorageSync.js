export function syncActionItemsWithLocalStorage(data = []) {
  if (data) {
    try {
      localStorage.setItem("actionItems", JSON.stringify(data));
    } catch (error) {
      console.log(error);
    }
  }
}

export function retreiveActionItemsFromLocalStorage(data = []) {
  if (data) {
    try {
      let actionItemsRaw = localStorage.getItem("actionItems");
      if (actionItemsRaw) {
        actionItemsRaw = JSON.parse(actionItemsRaw);
      }
      return actionItemsRaw;
    } catch (error) {
      console.log(error);
    }
  }
}
