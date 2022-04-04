let logged;

/**
 * send analytics data
 * @param {string} data
 */
function sendAnalytics(data: string) {
  console.log(data);
  logged = true;
}

sendAnalytics('The data');
