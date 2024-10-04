import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'temp',
    standalone: true
})

export class TemperaturePipe implements PipeTransform{
    transform(value: string | number | null, inputType: 'cel' | 'fah', outputTye?: 'cel' | 'fah') {


        if(!value)
        {
            return value;
        }

        let val: number;

        if(typeof value === 'string')
        {
            val = parseFloat(value);
        }
        else{
            val = value;
        }

        let outputTemp: number;

        if(inputType === 'cel' && outputTye === 'fah')
        {
            outputTemp = val * (9/5) + 32;
        }
        else if(inputType === 'fah' && outputTye === 'cel')
        {
            outputTemp = (val-32) * (5 / 9);
        }
        else{
            outputTemp = val;
        }

        let symbol: '°C' | '°F';

        if(!outputTye)
        {
            symbol = inputType === 'cel' ? '°C' : '°F';
        }
        else{
            symbol = outputTye === 'cel' ? '°C' : '°F';
        }
        return `${outputTemp.toFixed(2)} ${symbol}`;
    }
}