export class TimerUtils {


    static delay(sc: number): Promise<NodeJS.Timeout> {

        return new Promise(resolve => setTimeout(resolve, sc * 1000));
    }
}