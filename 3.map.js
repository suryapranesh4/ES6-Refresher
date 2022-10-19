const capitalize = (colors) => colors.map(color => color.charAt(0).toUpperCase() + color.slice(1));

console.log("Capitalize Array -> ['red','green','blue']",capitalize(['red','green','blue']));