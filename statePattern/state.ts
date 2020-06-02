abstract class State {
    abstract tempToDisplay(temperature: number): string

    abstract vibToDisplay(vibration: number): string

    abstract tempToSave(temperature: number): string

    abstract vibToSave(vibration: number): string

    static twoDecPlaces(value: number): string {
        return value.toFixed(2)
    }

    static saveForm(value: number): string {
        return value.toFixed(0)
    }

}

class Metric extends State {
    tempToDisplay(temperature: number): string {
        console.log('顯示公制')
        return Metric.twoDecPlaces(temperature)
    }
    vibToDisplay(vibration: number): string {
        console.log('顯示公制')
        return Metric.twoDecPlaces(vibration)
    }
    tempToSave(temperature: number): string {
        console.log('儲存公制')
        return Metric.saveForm(temperature)
    }
    vibToSave(vibration: number): string {
        console.log('儲存公制')
        return Metric.saveForm(vibration)
    }
}

class British extends State {
    tempToDisplay(temperature: number): string {
        console.log('顯示英制')
        return Metric.twoDecPlaces(temperature * 9 / 5 + 32)
    }
    vibToDisplay(vibration: number): string {
        console.log('顯示英制')
        return Metric.twoDecPlaces(vibration * 25.4)
    }
    tempToSave(temperature: number): string {
        console.log('儲存英制')
        return Metric.saveForm((temperature - 32) * 5 / 9)
    }
    vibToSave(vibration: number): string {
        console.log('儲存英制')
        return Metric.saveForm(vibration / 25.4)
    }

}

class MetricSystem  {
    private state: State

    setState(state: State): void {
        this.state = state
    }

    tempView(temp: number): void {
        console.log(this.state.tempToDisplay(temp));
    }

    vibView(vib: number): void {
        console.log(this.state.vibToDisplay(vib));
    }

    tempSave(temp: number): void {
        console.log(this.state.tempToSave(temp));
    }

    vibSave(vib: number): void {
        console.log(this.state.vibToSave(vib));
    }
}

const metricSystem: MetricSystem = new MetricSystem()
metricSystem.setState(new Metric())
metricSystem.tempView(50)
metricSystem.vibView(10)
metricSystem.tempSave(50)
metricSystem.vibSave(10)

metricSystem.setState(new British())
metricSystem.tempView(50)
metricSystem.vibView(10)
metricSystem.tempSave(50)
metricSystem.vibSave(10)