
import { MatchReader } from './MatchReader';
import { CsvFileReader } from './CsvFileReader';
import { Summary } from './Summary';
import { WinsAnalysis } from './analyzers/WinsAnalysis';
import { OutputReport } from './reportTarget/ConsoleReport';
import { HtmlReport } from './reportTarget/HtmlReport';

// Create an object that satisfies the Data reader interface
const csvFileReader = new CsvFileReader('football.csv');

const matchReader = new MatchReader(csvFileReader);

matchReader.load();

const newAnalyzer = new WinsAnalysis('Man United');
const newConsole = new OutputReport()
const newHtmlReport = new HtmlReport()
const summary = new Summary(newAnalyzer, newHtmlReport);
summary.buildAndPrintReport(matchReader.matches);
