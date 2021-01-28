import { OutputTarget } from '../Summary';


export class OutputReport implements OutputTarget {
    print(report: string) {
        console.log(report)
    }
}