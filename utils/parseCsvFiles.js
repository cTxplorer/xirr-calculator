import Papa from 'papaparse';

// parse files into 1D array of trades
export default async function parseCsvFiles(csvFiles) {
  let trades = [];
  for (let i = 0; i < csvFiles.length; ++i) {
    let csvFile = csvFiles[i];
    const trade = await new Promise((resolve, reject) => {
      const cb = (_results) => {
        resolve(_results.data);
      };
      Papa.parse(csvFile, {
        header: true,
        skipEmptyLines: true,
        dynamicTyping: true,
        complete: cb
      });
    });
    trades = [...trades, ...trade];
  }
  return trades;
}
