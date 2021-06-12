import { useCallback, useState, useRef } from 'react';
import Alert from './atoms/Alert';
import FileItem from './atoms/FileItem';
import InputSection from './atoms/InputSection';
import parseCsvFiles from '../utils/parseCsvFiles';
import getCashflow from '../utils/getCashflow';
import calculateXIRR from '../utils/calculateXIRR';
import validateTrades from '../utils/validateTrades';

const errorMap = {
  CURRENT_VALUE_REQUIRED: 'Portfolio value must be provided. If you don\'t have any holdings, enter 0',
  TRADEFILE_REQUIRED: 'Submit tradebook file(s) from Zerodha to continue',
  NO_TRADE_FOUND: 'No trade history found, tradebook seems to be empty',
  NO_BUY_TRADE_FOUND: 'No buy trade found. You can\'t sell something without buying',
  SAME_DAY_TRADES: 'All trade dates are of today. Can\'t find XIRR since it is time-dependant',
  CANNOT_FIND_XIRR: 'Unable to estimate XIRR for the given data — please check if the tradebook(s) that you uploaded contains all trade history from start till date. Otherwise, the estimation method fails to find nearest possible XIRR value.',
};

export default function Calculator({ id }) {
  const broker = 'zerodha';
  const [isCalculating, updateIsCalculating] = useState(false);
  const [csvFiles, updateCsvFiles] = useState([]);
  const [err, updateErr] = useState({});
  const [xirr, updateXirr] = useState(null);
  const fileInputRef = useRef(null);
  const valuationInputRef = useRef(null);

  // removes duplicate files in uploaded/dropped files
  const processFileSubmit =  useCallback((files) => {
    const _csvFiles = [...csvFiles];
    files.forEach(newFile => {
      const searchIndex = csvFiles.findIndex(existingFile => existingFile.name === newFile.name);
      if (searchIndex !== -1) {
        _csvFiles.splice(searchIndex, 1);
      }
      _csvFiles.push(newFile);
    });
    updateCsvFiles(_csvFiles);
  }, [csvFiles, updateCsvFiles]);

  const onInputChangeHandler = useCallback((evt) => {
    evt.preventDefault();
    updateXirr(null);
    if (evt.target.files) {
      processFileSubmit([...evt.target.files]);
    }
  }, [processFileSubmit]);

  const onDropHandler = useCallback((evt) => {
    evt.preventDefault();
    updateXirr(null);
    if (evt.dataTransfer.files) {
      processFileSubmit([...evt.dataTransfer.files]);
    }
  }, [processFileSubmit]);

  const dragOverHandler = useCallback((evt) => {
    evt.preventDefault();
  }, []);

  const validateInputs = useCallback((tradeFiles, currentValuation) => {
    const tradeFileMissing = !tradeFiles.length;
    const currentValuationMissing = isNaN(currentValuation);
    updateErr(err => ({
      ...err,
      tradeFileErr: {
        isError: tradeFileMissing,
        msg: tradeFileMissing ? errorMap.TRADEFILE_REQUIRED : null,
      },
      currentValuationErr: {
        isError: currentValuationMissing,
        msg: currentValuationMissing ? errorMap.CURRENT_VALUE_REQUIRED : null,
      }
    }));
    return !tradeFileMissing && !currentValuationMissing;
  }, [updateErr]);

  const _calculateXIRR = useCallback(async (evt) => {
    evt.preventDefault();
    updateIsCalculating(true);
    const currentValuation = parseInt(valuationInputRef.current.value, 10);
    if (!validateInputs(csvFiles, currentValuation)) {
      updateIsCalculating(false);
      return;
    }
    const trades = await parseCsvFiles(csvFiles);
    const cashflow = getCashflow[broker](trades);
    const validationError = validateTrades(cashflow, errorMap);
    if (validationError) {
      updateErr(err => ({
        ...err,
        tradeFileErr: {
          isWarn: true,
          msg: validationError,
        }
      }));
      updateIsCalculating(false);
      return;
    }
    const xirr = calculateXIRR(cashflow, parseInt(currentValuation, 10));
    if(isNaN(xirr)) {
      updateErr(err => ({
        ...err,
        tradeFileErr: {
          isWarn: true,
          msg: errorMap.CANNOT_FIND_XIRR,
        }
      }))
    }
    updateXirr(xirr);
    updateIsCalculating(false);
  }, [csvFiles]);

  const removeCsvFile = useCallback((fileToDelete) => {
    updateCsvFiles(csvFiles => csvFiles.filter(file => file.name !== fileToDelete.name));
    fileInputRef.current.value = '';
  }, [updateCsvFiles]);

  const resetValues = useCallback(() => {
    updateErr({});
    updateCsvFiles([]);
    valuationInputRef.current.value = '';
    fileInputRef.current.value = '';
    updateIsCalculating(false);
    updateXirr(null);
  }, [updateErr, updateCsvFiles, updateIsCalculating, valuationInputRef, updateXirr])

  return (
    <form id={id}>
      {/* start: file upload */}
      <InputSection
        title="Upload tradebook files from Zerodha console"
        titleClassName={err.tradeFileErr?.isError ? 'text-red-600' : ''}
        subtite="STEP 1"
        helpTextJsx={
          csvFiles.length ? (
            <div className="flex items-stretch flex-wrap">
              {
                csvFiles.map((file, index) => (
                  <FileItem
                    name={file.name}
                    deleteHandler={() => removeCsvFile(file)}
                    key={index}
                  />
                ))
              }
            </div>
          ) : (
            <>
              Learn: How to <em>download tradebook</em> in Zerodha?
            </>
          )
        }
        helpLink={
          csvFiles.length ? null : "https://www.notion.so/How-to-download-trade-book-from-Zerodha-20c0066df2cb484b9c65df4a723f16d9"
        }
      >
        <input
          type="file"
          accept=".csv"
          className="hidden"
          ref={fileInputRef}
          multiple={true}
          onChange={onInputChangeHandler}
        />
        <div
          className="dropzone mb-4"
          tabIndex="0"
          onDrop={onDropHandler}
          onDragOver={dragOverHandler}
          onClick={()=>{fileInputRef.current.click()}}
          role="button"
          onKeyPress={()=>{fileInputRef.current.click()}}
        >
          <img height="52" src="../static/images/file-upload.svg" className="mb-4" />
          <span className="text-center">drag and drop here or click to browse</span>
          <span className="text-center">(supports csv file)</span>
        </div>
      </InputSection>
      {/* end: file upload */}

      {/* start: current valuation */}
      <InputSection
        title="Enter current portfolio value"
        titleClassName={err.currentValuationErr?.isError ? 'text-red-600' : ''}
        subtite="STEP 2"
        helpTextJsx={(
          <>
            Learn: How to <em>find current portfolio value</em> in Zerodha?
          </>
        )}
        helpLink="https://www.notion.so/How-to-find-current-portfolio-value-in-Zerodha-e0d418a86fde4e6a805c180eeada9810"
      >
        <input
          type="number"
          placeholder="Rs."
          min="0"
          ref={valuationInputRef}
          required={true}
          className="appearance-none border-2 border-gray-200 rounded w-full max-w-md py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500 mb-4"
        />
      </InputSection>
      {/* end: current valuation */}

      {/* start: find xirr button */}
      <input
        type="button"
        value="Calculate XIRR"
        className={`btn btn-blue mb-8 ${isCalculating ? 'opacity-30' : ''}`}
        onClick={isCalculating ? null : _calculateXIRR}
        disabled={isCalculating}
      />
      {/* end: find xirr button */}

      {/* start: reset button */}
      {
        (csvFiles.length || valuationInputRef?.current?.value) && (
          <input
            type="button"
            value="Reset"
            className={`btn btn-blue btn-ghost mb-8 ml-4`}
            onClick={resetValues}
          />
        )
      }
      {/* end: reset button */}

      {err.tradeFileErr?.isWarn && (
        <Alert visible={true}>
          {err.tradeFileErr.msg}
        </Alert>
      )}

      {xirr && !isNaN(xirr) && (
        <Alert visible={true} success={true}>
          {`Your portfolio has XIRR of ${xirr}%`}
        </Alert>
      )}
    </form>
  );
}
