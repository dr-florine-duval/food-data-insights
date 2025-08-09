function openPlot(plotHtml) {
    const newWindow = window.open('', '_blank');
    newWindow.document.write(plotHtml);
    newWindow.document.close();
}

const tooltipContent = `
    <button class="close-tooltip">✖</button>
    <strong>Tips for enjoying the chart:</strong><br>
    🔬 Hover over data points to see the exact values.<br>
    🍳 Explore the tools in the top right corner (zoom, pan, select...).<br>
    🔍 Zoom tool: the selected area will be zoomed in.
    <strong>Extra tip:</strong> click and drag from right to left to zoom horizontally only.<br>
    📷 Enjoy the interactive chart, and feel free to download the plot as a png as a souvenir!<br>
    <br>
    📖 <strong><i>Need more space? Click on the book to open the chart in its own new tab.</i></strong><br>
`;

const helpButtons = document.querySelectorAll('.help-button');
const tooltips = document.querySelectorAll('.tooltip');
const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

helpButtons.forEach((button, index) => {
    if (!tooltips[index]) return;

    const tooltip = tooltips[index];
    tooltip.innerHTML = tooltipContent;

    const closeButton = tooltip.querySelector('.close-tooltip');

    // Desktop: open on hover
    if (!isTouchDevice) {
        button.addEventListener('mouseenter', () => {
            tooltip.classList.add('visible');
        });
        tooltip.addEventListener('mouseenter', () => {
            tooltip.classList.add('visible');
        });
    }

    // Click/tap to open
    button.addEventListener('click', (event) => {
        event.stopPropagation();
        tooltip.classList.add('visible');
    });

    // Close on ✖ click
    if (closeButton) {
        closeButton.addEventListener('click', (event) => {
            event.stopPropagation();
            tooltip.classList.remove('visible');
        });
    }

    // Close when clicking outside
    document.addEventListener('click', (event) => {
        if (!tooltip.contains(event.target) && event.target !== button) {
            tooltip.classList.remove('visible');
        }
    });
});
