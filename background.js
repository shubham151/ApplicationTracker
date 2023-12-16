chrome.runtime.onInstalled.addListener(() => {
    // Perform some task on extension installation
  });
  
  chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.type === "jobApplication") {
      chrome.storage.local.set({ [request.data.dateApplied]: request.data }, () => {
        console.log('Data saved', request.data);
      });
    }
  });
  