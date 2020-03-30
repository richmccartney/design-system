function getPalette(stylesArtboard) {
    // empty "palette obj" wheree we will store all colors
    const palette = {};
    // get "palette" artboard
    const paletteAtrboard = stylesArtboard.filter(item => {
        return item.name === "palette";
    })[0].children;

    // get colors from each children
    paletteAtrboard.map(item => {
        function rbaObj(obj) {
            return item.fills[0].color[obj] * 255;
        }

        colorObj = {
            [item.name]: {
                value: `rgba(${rbaObj("r")}, ${rbaObj("g")}, ${rbaObj(
                    "b"
                )}, ${item.fills[0].color.a})`,
                type: "color"
            }
        };

        Object.assign(palette, colorObj);
    });

    return palette;
}