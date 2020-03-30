async function getStylesArtboard(figmaApiKey, figmaId) {
    const result = await fetch("https://api.figma.com/v1/files/" + figmaId, {
        method: "GET",
        headers: {
            "X-Figma-Token": figmaApiKey
        }
    });
    const figmaTreeStructure = await result.json();

    const stylesArtboard = figmaTreeStructure.document.children.filter(item => {
        return item.name === "styles";
    })[0].children;

    baseTokeensJSON = {
        token: {
            grids: {},
            spacers: {},
            colors: {},
            fonts: {}
        }
    };

    Object.assign(baseTokeensJSON.token.grids, getGrids(stylesArtboard));
    Object.assign(baseTokeensJSON.token.spacers, getSpacers(stylesArtboard));
    Object.assign(baseTokeensJSON.token.colors, getPalette(stylesArtboard));
    Object.assign(baseTokeensJSON.token.fonts, getFontStyles(stylesArtboard));

    return baseTokeensJSON;
}