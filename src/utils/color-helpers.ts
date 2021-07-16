class RGB {
    constructor(public red: number, public green: number, public blue: number) { }
}

export function HexToRGB(color: string): RGB {
    var color = (color.charAt(0) === '#') ? color.substring(1, 7) : color;
    var r = parseInt(color.substring(0, 2), 16); // hexToR
    var g = parseInt(color.substring(2, 4), 16); // hexToG
    var b = parseInt(color.substring(4, 6), 16); // hexToB
    return new RGB(r, g, b)
}
//Based on https://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb
export function RGBToHex(color: RGB) {
    const r = Math.round(color.red)
    const g = Math.round(color.green)
    const b = Math.round(color.blue)
    return '#' + [r, g, b].map(x => x.toString(16).padStart(2, '0')).join('')
}

//Based on https://stackoverflow.com/questions/3942878/how-to-decide-font-color-in-white-or-black-depending-on-background-color
export function FontColorFromBackground(bgColor: string, lightColor = "#FFFFFF", darkColor = "#000000") {
    const { red, green, blue } = HexToRGB(bgColor);

    return (((red * 0.299) + (green * 0.587) + (blue * 0.114)) > 186) ?
        darkColor : lightColor;
}