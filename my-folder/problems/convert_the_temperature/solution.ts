function convertTemperature(celsius: number): number[] {
    return [+(celsius + 273.15).toFixed(5), +((celsius * 1.8) + 32).toFixed(5)]
};