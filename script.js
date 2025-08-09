function openPlot(plotHtml) {
    const newWindow = window.open('', '_blank'); // Open a new tab
    newWindow.document.write(plotHtml); // Write the plot HTML to the new tab
    newWindow.document.close(); // Close the document to render the content
}

// Tooltip content
const tooltipContent = `
    <strong>Tips for enjoying the chart:</strong><br>
    🔬 Hover over data points to see the exact values.<br>
    🍳 Explore the tools in the top right corner (zoom, pan, select...).<br>
    🔍 Zoom tool: the selected area will be zoomed in.
    <strong>Extra tip:</strong> click and drag from right to left to zoom horizontally only.<br>
    📷 Enjoy the interactive chart, and feel free to download the plot as a png as a souvenir!<br>
    <br>
    📖 <strong><i>Need more space? Click on the book to open the chart in its own new tab.</i></strong><br>
    <button class="close-tooltip" style="float: right; background: none; border: none; cursor: pointer;">✖</button>
`;

const helpButtons = document.querySelectorAll('.help-button');
const tooltips = document.querySelectorAll('.tooltip');

const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

helpButtons.forEach((button, index) => {
    if (!tooltips[index]) return;

    const tooltip = tooltips[index];
    tooltip.innerHTML = tooltipContent;
    const closeButton = tooltip.querySelector('.close-tooltip');

    // === Desktop hover ===
    if (!isTouchDevice) {
        button.addEventListener('mouseover', () => {
            tooltip.style.display = 'block';
        });

        tooltip.addEventListener('mouseover', () => {
            tooltip.style.display = 'block';
        });
    }

    // === Click/tap to open ===
    button.addEventListener('click', (event) => {
        event.stopPropagation();
        tooltip.style.display = 'block';
    });

    // === Close on ✖ button ===
    if (closeButton) {
        closeButton.addEventListener('click', (event) => {
            event.stopPropagation();
            tooltip.style.display = 'none';
        });
    }

    // === Close when clicking outside ===
    document.addEventListener('click', (event) => {
        if (!tooltip.contains(event.target) && event.target !== button) {
            tooltip.style.display = 'none';
        }
    });
});
